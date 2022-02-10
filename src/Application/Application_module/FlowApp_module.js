import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTANTE -> IMPORTARE
import {
    Row,
    Col,
    Container,
    Nav,
    Navbar,
    Button,
    Form,
    Offcanvas
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { HotKeys } from "react-hotkeys"; //-> per shortcut
import useUndoable from "use-undoable";
import React, { useState, useCallback, useRef } from 'react';
import ReactFlow,
{
    removeElements,
    addEdge,
    Controls,
    ControlButton,
    Background,
    useZoomPanHelper,
    useStoreState,
    useStoreActions,
} from 'react-flow-renderer';
import _ from 'lodash'; // for count element objects -> shortuct _
import Sidebar_m from './Sidebar_module.js';
import DataNodeInfo_m from './DataNodeInfo_module.js';
import '../all.css'
import AllTypeNodes from '../../nodes/AllTypeNodes.js';
import grid_dot from '../../images/nodeimg/grid_dot.png';
import grid_line from '../../images/nodeimg/grid_line.png';
import grid_no from '../../images/nodeimg/grid_no.png';
import save from '../../images/nodeimg/savedisk.png';
import restore from '../../images/nodeimg/restore.png';
import zoomin from '../../images/nodeimg/zoom_in.png';
import zoomout from '../../images/nodeimg/zoom_out.png';
import fitview from '../../images/nodeimg/fit_view.png';
import menu from '../../images/nodeimg/menu.png';
import indietro from '../../images/nodeimg/undo.png';
import avanti from '../../images/nodeimg/redo.png';
import deletex from '../../images/nodeimg/delete.png';
import selall from '../../images/nodeimg/select_all.png';

import { useSelector, useDispatch } from 'react-redux';

import localforage from 'localforage';

import downloadfile from '../DownloadFILE.js';
import parsedatamodule from '../ParseDataModule.js';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * SETTINGS PER LOCALFORAGE
*/
localforage.config({
    name: 'react-flow-docs',
    storeName: 'flows',
});
const flowKey = 'example-flow'; // chiave per reperire i dati


/* @ function per generare nuovo id random -> fatto corrispondere con le iniziali dell'idge*/
/* INFO PER REPERIRE I DATI DAL JSON
    EDGE = reactflow__edge
    NODE = reactflow__node
    per il tipo con NODE reactflow__node-$tipo-$data
*/
const getNodeId = (tipo) => `reactflow__node-${tipo}-${+new Date()}`;

/* @ operazioni per reperire stili e classi dei nodi base */
const ATN = new AllTypeNodes();
const allNodeTypes = ATN.GetObj();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var modul_tmplt = [];
//apachedb
const adb = [
    {
        "elements": [{
            "id": "reactflow__node-port-1644415662461",
            "type": "port",
            "position": {
                "x": -33.74881997270175,
                "y": -150.61614979526303
            },
            "data": {
                "label": "port_apache_man",
                "description": "",
                "properties": {
                    "default": "",
                    "type": ""
                }
            }
        }, {
            "id": "reactflow__node-network-1644415663500",
            "type": "network",
            "position": {
                "x": 649,
                "y": 30
            },
            "data": {
                "label": "man_net",
                "description": "",
                "net_type": "consumer",
                "local_interface": "man_net",
                "remote_interface": "man_net",
            }
        }, {
            "id": "reactflow__node-network-1644415768209",
            "type": "network",
            "position": {
                "x": 666.7817886193823,
                "y": 168.66930862553383
            },
            "data": {
                "label": "private_net_dmz",
                "description": "",
                "net_type": "consumer",
                "local_interface": "private_net_dmz",
                "remote_interface": "private_net_dmz",
            }
        }, {
            "id": "reactflow__node-network-1644415769591",
            "type": "network",
            "position": {
                "x": 671.0945836262067,
                "y": 322.09117326383165
            },
            "data": {
                "label": "private_net_local",
                "description": "",
                "net_type": "Select type",
                "local_interface": "private_net_local",
                "remote_interface": "private_net_local",
            }
        }, {
            "id": "reactflow__node-subnet-1644415777494",
            "type": "subnet",
            "position": {
                "x": 357.9081653178969,
                "y": 373.0500120908088
            },
            "data": {
                "label": "private_sub_local",
                "description": "",
                "subnet": {
                    "ip_version": "Select version",
                    "cidr": {
                        "default": ""
                    },
                    "allocation_pools": {
                        "allocation_pool_start": "",
                        "allocation_pool_end": ""
                    },
                    "enable_dhcp": false
                }
            }
        }, {
            "id": "reactflow__node-subnet-1644415778467",
            "type": "subnet",
            "position": {
                "x": 341.1624920846573,
                "y": 159.18110889851658
            },
            "data": {
                "label": "private_sub_dmz",
                "description": "",
                "subnet": {
                    "ip_version": "Select version",
                    "cidr": {
                        "default": ""
                    },
                    "allocation_pools": {
                        "allocation_pool_start": "",
                        "allocation_pool_end": ""
                    },
                    "enable_dhcp": false
                }
            }
        }, {
            "id": "reactflow__node-subnet-1644415779714",
            "type": "subnet",
            "position": {
                "x": 342.10874395378613,
                "y": -39.630899423442486
            },
            "data": {
                "label": "man_sub",
                "description": "",
                "subnet": {
                    "ip_version": "Select version",
                    "cidr": {
                        "default": ""
                    },
                    "allocation_pools": {
                        "allocation_pool_start": "",
                        "allocation_pool_end": ""
                    },
                    "enable_dhcp": false
                }
            }
        }, {
            "id": "reactflow__node-port-1644415790193",
            "type": "port",
            "position": {
                "x": -36.57059419073413,
                "y": -8.070071128781692
            },
            "data": {
                "label": "port_apache_nic_1",
                "description": "",
                "properties": {
                    "default": "",
                    "type": ""
                }
            }
        }, {
            "id": "reactflow__node-port-1644415790882",
            "type": "port",
            "position": {
                "x": -33.00347241714921,
                "y": 135.55866562432925
            },
            "data": {
                "label": "port_apache_nic_2",
                "description": "",
                "properties": {
                    "default": "",
                    "type": ""
                }
            }
        }, {
            "id": "reactflow__node-server-1644415795233",
            "type": "server",
            "position": {
                "x": -351.6780904524764,
                "y": -43.82518458040756
            },
            "data": {
                "label": "host_apache",
                "description": "",
                "image": "image_1",
                "flavor": {
                    "cpu": "4 ",
                    "hd": "100",
                    "ram": "16"
                },
                "userdata": {
                    "usr": "apc_admin",
                    "pwd": "apc_pass"
                },
                "name": "h_apc"
            }
        }, {
            "id": "reactflow__node-server-1644415824840",
            "type": "server",
            "position": {
                "x": -350.9704316527975,
                "y": 399.76736466888985
            },
            "data": {
                "label": "host_db",
                "description": "hdb",
                "image": "Select image",
                "flavor": {
                    "cpu": "Select size",
                    "hd": "Select size",
                    "ram": "Select size"
                },
                "userdata": {
                    "usr": "db_admin",
                    "pwd": "db_pass"
                }
            }
        }, {
            "id": "reactflow__node-port-1644415829740",
            "type": "port",
            "position": {
                "x": -89.29896035693241,
                "y": 334.02011806591906
            },
            "data": {
                "label": "port_db_man",
                "description": "",
                "properties": {
                    "default": "",
                    "type": ""
                }
            }
        }, {
            "id": "reactflow__node-port-1644415833371",
            "type": "port",
            "position": {
                "x": -90.9229770008505,
                "y": 505.88587451874923
            },
            "data": {
                "label": "port_db_nic_1",
                "description": "",
                "properties": {
                    "default": "",
                    "type": ""
                }
            }
        }, {
            "source": "reactflow__node-subnet-1644415778467",
            "target": "reactflow__node-network-1644415768209",
            "id": "reactflow__edge-reactflow__node-subnet-1644415778467Insert node name-reactflow__node-network-1644415768209Insert node name",
            "type": "default"
        }, {
            "source": "reactflow__node-subnet-1644415777494",
            "target": "reactflow__node-network-1644415769591",
            "id": "reactflow__edge-reactflow__node-subnet-1644415777494Insert node name-reactflow__node-network-1644415769591Insert node name",
            "type": "default"
        }, {
            "source": "reactflow__node-subnet-1644415779714",
            "target": "reactflow__node-network-1644415663500",
            "id": "reactflow__edge-reactflow__node-subnet-1644415779714Insert node name-reactflow__node-network-1644415663500Insert node name",
            "type": "default"
        }, {
            "source": "reactflow__node-port-1644415662461",
            "target": "reactflow__node-subnet-1644415779714",
            "id": "reactflow__edge-reactflow__node-port-1644415662461Insert node name-reactflow__node-subnet-1644415779714Insert node name",
            "type": "default"
        }, {
            "source": "reactflow__node-port-1644415790193",
            "target": "reactflow__node-subnet-1644415778467",
            "id": "reactflow__edge-reactflow__node-port-1644415790193Insert node name-reactflow__node-subnet-1644415778467Insert node name",
            "type": "default"
        }, {
            "source": "reactflow__node-port-1644415790882",
            "target": "reactflow__node-subnet-1644415777494",
            "id": "reactflow__edge-reactflow__node-port-1644415790882Insert node name-reactflow__node-subnet-1644415777494Insert node name",
            "type": "default"
        }, {
            "source": "reactflow__node-port-1644415829740",
            "target": "reactflow__node-subnet-1644415779714",
            "id": "reactflow__edge-reactflow__node-port-1644415829740Insert node name-reactflow__node-subnet-1644415779714Insert node name",
            "type": "default"
        }, {
            "source": "reactflow__node-port-1644415833371",
            "target": "reactflow__node-subnet-1644415777494",
            "id": "reactflow__edge-reactflow__node-port-1644415833371Insert node name-reactflow__node-subnet-1644415777494Insert node name",
            "type": "default"
        }, {
            "source": "reactflow__node-server-1644415795233",
            "target": "reactflow__node-port-1644415790882",
            "id": "reactflow__edge-reactflow__node-server-1644415795233Insert node name-reactflow__node-port-1644415790882Insert node name",
            "type": "default"
        }, {
            "source": "reactflow__node-server-1644415795233",
            "target": "reactflow__node-port-1644415790193",
            "id": "reactflow__edge-reactflow__node-server-1644415795233Insert node name-reactflow__node-port-1644415790193Insert node name",
            "type": "default"
        }, {
            "source": "reactflow__node-server-1644415795233",
            "target": "reactflow__node-port-1644415662461",
            "id": "reactflow__edge-reactflow__node-server-1644415795233Insert node name-reactflow__node-port-1644415662461Insert node name",
            "type": "default"
        }, {
            "source": "reactflow__node-server-1644415824840",
            "target": "reactflow__node-port-1644415829740",
            "id": "reactflow__edge-reactflow__node-server-1644415824840Insert node name-reactflow__node-port-1644415829740Insert node name",
            "type": "default"
        }, {
            "source": "reactflow__node-server-1644415824840",
            "target": "reactflow__node-port-1644415833371",
            "id": "reactflow__edge-reactflow__node-server-1644415824840Insert node name-reactflow__node-port-1644415833371Insert node name",
            "type": "default"
        }],
        "position": [69.72512349187082, 141.89821945809047],
        "zoom": 0.8538177143912448,
        "#elements": 26,
        "module_name": "example_apache_db",
        "module_description": "esempio bp apache",
        "version": "1.0"
    }
];
//fw1
const fw1 =
{
    "elements": [{
        "id": "reactflow__node-server-1644420122444",
        "type": "server",
        "position": {
            "x": -1493.7684713352119,
            "y": 417.65831797615147
        },
        "data": {
            "label": "host_fw1",
            "description": "",
            "image": "Select image",
            "flavor": {
                "cpu": "Select size",
                "hd": "Select size",
                "ram": "Select size"
            },
            "userdata": {
                "usr": "",
                "pwd": ""
            }
        }
    }, {
        "id": "reactflow__node-port-1644420127718",
        "type": "port",
        "position": {
            "x": -1107.7684713352119,
            "y": 136.65831797615135
        },
        "data": {
            "label": "port_fw1_man",
            "description": "",
            "properties": {
                "default": "",
                "type": ""
            }
        }
    }, {
        "id": "reactflow__node-port-1644420128639",
        "type": "port",
        "position": {
            "x": -1109.7684713352119,
            "y": 470.65831797615135
        },
        "data": {
            "label": "port_fw1_nic_3",
            "description": "",
            "properties": {
                "default": "",
                "type": ""
            }
        }
    }, {
        "id": "reactflow__node-port-1644420129514",
        "type": "port",
        "position": {
            "x": -1127.7684713352119,
            "y": 682.6583179761514
        },
        "data": {
            "label": "port_fw1_nic_5",
            "description": "",
            "properties": {
                "default": "",
                "type": ""
            }
        }
    }, {
        "id": "reactflow__node-port-1644420131460",
        "type": "port",
        "position": {
            "x": -1125.7684713352119,
            "y": 576.6583179761514
        },
        "data": {
            "label": "port_fw1_nic_4",
            "description": "",
            "properties": {
                "default": "",
                "type": ""
            }
        }
    }, {
        "id": "reactflow__node-port-1644420132451",
        "type": "port",
        "position": {
            "x": -1103.7684713352119,
            "y": 366.65831797615135
        },
        "data": {
            "label": "port_fw1_nic_2",
            "description": "",
            "properties": {
                "default": "",
                "type": ""
            }
        }
    }, {
        "id": "reactflow__node-port-1644420133346",
        "type": "port",
        "position": {
            "x": -1105.7684713352119,
            "y": 258.65831797615135
        },
        "data": {
            "label": "port_fw1_nic_1",
            "description": "",
            "properties": {
                "default": "",
                "type": ""
            }
        }
    }, {
        "id": "reactflow__node-port-1644420149172",
        "type": "port",
        "position": {
            "x": -1131.530634382397,
            "y": 808.1172759025835
        },
        "data": {
            "label": "port_fw1_nic_6",
            "description": "",
            "properties": {
                "default": "",
                "type": ""
            }
        }
    }, {
        "id": "reactflow__node-subnet-1644420275700",
        "type": "subnet",
        "position": {
            "x": -779.1095944057956,
            "y": -12.734764211934419
        },
        "data": {
            "label": "private_sub_man",
            "description": "",
            "subnet": {
                "ip_version": "Select version",
                "cidr": {
                    "default": ""
                },
                "allocation_pools": {
                    "allocation_pool_start": "",
                    "allocation_pool_end": ""
                },
                "enable_dhcp": false
            }
        }
    }, {
        "id": "reactflow__node-subnet-1644420279400",
        "type": "subnet",
        "position": {
            "x": -762.7276809298564,
            "y": 274.6541742265628
        },
        "data": {
            "label": "private_sub_man",
            "description": "",
            "subnet": {
                "ip_version": "Select version",
                "cidr": {
                    "default": ""
                },
                "allocation_pools": {
                    "allocation_pool_start": "",
                    "allocation_pool_end": ""
                },
                "enable_dhcp": false
            }
        }
    }, {
        "id": "reactflow__node-subnet-1644420280645",
        "type": "subnet",
        "position": {
            "x": -773.9342208603439,
            "y": 130.31824369447645
        },
        "data": {
            "label": "private_sub_dmz",
            "description": "",
            "subnet": {
                "ip_version": "Select version",
                "cidr": {
                    "default": ""
                },
                "allocation_pools": {
                    "allocation_pool_start": "",
                    "allocation_pool_end": ""
                },
                "enable_dhcp": false
            }
        }
    }, {
        "id": "reactflow__node-subnet-1644420281492",
        "type": "subnet",
        "position": {
            "x": -781.9334542266429,
            "y": 559.2488859618466
        },
        "data": {
            "label": "private_sub_client",
            "description": "",
            "subnet": {
                "ip_version": "Select version",
                "cidr": {
                    "default": ""
                },
                "allocation_pools": {
                    "allocation_pool_start": "",
                    "allocation_pool_end": ""
                },
                "enable_dhcp": false
            }
        }
    }, {
        "id": "reactflow__node-subnet-1644420283577",
        "type": "subnet",
        "position": {
            "x": -762.123122656128,
            "y": 420.5149241114043
        },
        "data": {
            "label": "private_sub_server",
            "description": "",
            "subnet": {
                "ip_version": "Select version",
                "cidr": {
                    "default": ""
                },
                "allocation_pools": {
                    "allocation_pool_start": "",
                    "allocation_pool_end": ""
                },
                "enable_dhcp": false
            }
        }
    }, {
        "id": "reactflow__node-subnet-1644420295244",
        "type": "subnet",
        "position": {
            "x": -793.7518733739487,
            "y": 728.2413966916986
        },
        "data": {
            "label": "private_sub_iot",
            "description": "",
            "subnet": {
                "ip_version": "Select version",
                "cidr": {
                    "default": ""
                },
                "allocation_pools": {
                    "allocation_pool_start": "",
                    "allocation_pool_end": ""
                },
                "enable_dhcp": false
            }
        }
    }, {
        "id": "reactflow__node-subnet-1644420303737",
        "type": "subnet",
        "position": {
            "x": -798.7518733739487,
            "y": 901.2413966916986
        },
        "data": {
            "label": "man_sub",
            "description": "",
            "subnet": {
                "ip_version": "Select version",
                "cidr": {
                    "default": ""
                },
                "allocation_pools": {
                    "allocation_pool_start": "",
                    "allocation_pool_end": ""
                },
                "enable_dhcp": false
            }
        }
    }, {
        "id": "reactflow__node-network-1644420344551",
        "type": "network",
        "position": {
            "x": -375.7518733739487,
            "y": -31.758603308301417
        },
        "data": {
            "label": "private_net_simint",
            "description": "",
            "net_type": "provider",
            "local_interface": "private_net_simint",
            "remote_interface": "private_net_simint",
        }
    }, {
        "id": "reactflow__node-network-1644420347573",
        "type": "network",
        "position": {
            "x": -385.7518733739487,
            "y": 124.24139669169858
        },
        "data": {
            "label": "private_net_dmz",
            "description": "",
            "net_type": "Select type",
            "local_interface": "private_net_dmz",
            "remote_interface": "private_net_dmz",
        }
    }, {
        "id": "reactflow__node-network-1644420385093",
        "type": "network",
        "position": {
            "x": -365.7518733739487,
            "y": 268.2413966916986
        },
        "data": {
            "label": "private_net_man",
            "description": "",
            "net_type": "provider",
            "local_interface": "private_net_man",
            "remote_interface": "private_net_man",
        }
    }, {
        "id": "reactflow__node-network-1644420388058",
        "type": "network",
        "position": {
            "x": -365.7518733739487,
            "y": 434.2413966916986
        },
        "data": {
            "label": "private_net_server",
            "description": "",
            "net_type": "provider",
            "local_interface": "private_net_server",
            "remote_interface": "private_net_server",
        }
    }, {
        "id": "reactflow__node-network-1644420389827",
        "type": "network",
        "position": {
            "x": -355.7518733739487,
            "y": 596.2413966916986
        },
        "data": {
            "label": "private_net_client",
            "description": "",
            "net_type": "provider",
            "local_interface": "private_net_client",
            "remote_interface": "private_net_client",
        }
    }, {
        "id": "reactflow__node-network-1644420391249",
        "type": "network",
        "position": {
            "x": -365.7518733739487,
            "y": 780.2413966916986
        },
        "data": {
            "label": "private_net_iot",
            "description": "",
            "net_type": "provider",
            "local_interface": "private_net_iot",
            "remote_interface": "private_net_iot",
        }
    }, {
        "id": "reactflow__node-network-1644420392586",
        "type": "network",
        "position": {
            "x": -379.7518733739487,
            "y": 952.2413966916986
        },
        "data": {
            "label": "man_net",
            "description": "",
            "net_type": "consumer",
            "local_interface": "man_net",
            "remote_interface": "man_net",
        }
    }, {
        "source": "reactflow__node-server-1644420122444",
        "sourceHandle": null,
        "target": "reactflow__node-port-1644420149172",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-server-1644420122444null-reactflow__node-port-1644420149172null",
        "type": "default"
    }, {
        "source": "reactflow__node-server-1644420122444",
        "sourceHandle": null,
        "target": "reactflow__node-port-1644420129514",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-server-1644420122444null-reactflow__node-port-1644420129514null",
        "type": "default"
    }, {
        "source": "reactflow__node-server-1644420122444",
        "sourceHandle": null,
        "target": "reactflow__node-port-1644420131460",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-server-1644420122444null-reactflow__node-port-1644420131460null",
        "type": "default"
    }, {
        "source": "reactflow__node-server-1644420122444",
        "sourceHandle": null,
        "target": "reactflow__node-port-1644420128639",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-server-1644420122444null-reactflow__node-port-1644420128639null",
        "type": "default"
    }, {
        "source": "reactflow__node-server-1644420122444",
        "sourceHandle": null,
        "target": "reactflow__node-port-1644420132451",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-server-1644420122444null-reactflow__node-port-1644420132451null",
        "type": "default"
    }, {
        "source": "reactflow__node-server-1644420122444",
        "sourceHandle": null,
        "target": "reactflow__node-port-1644420133346",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-server-1644420122444null-reactflow__node-port-1644420133346null",
        "type": "default"
    }, {
        "source": "reactflow__node-server-1644420122444",
        "sourceHandle": null,
        "target": "reactflow__node-port-1644420127718",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-server-1644420122444null-reactflow__node-port-1644420127718null",
        "type": "default"
    }, {
        "source": "reactflow__node-subnet-1644420275700",
        "sourceHandle": null,
        "target": "reactflow__node-network-1644420344551",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-subnet-1644420275700null-reactflow__node-network-1644420344551null",
        "type": "default"
    }, {
        "source": "reactflow__node-subnet-1644420280645",
        "sourceHandle": null,
        "target": "reactflow__node-network-1644420347573",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-subnet-1644420280645null-reactflow__node-network-1644420347573null",
        "type": "default"
    }, {
        "source": "reactflow__node-subnet-1644420279400",
        "sourceHandle": null,
        "target": "reactflow__node-network-1644420385093",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-subnet-1644420279400null-reactflow__node-network-1644420385093null",
        "type": "default"
    }, {
        "source": "reactflow__node-subnet-1644420283577",
        "sourceHandle": null,
        "target": "reactflow__node-network-1644420388058",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-subnet-1644420283577null-reactflow__node-network-1644420388058null",
        "type": "default"
    }, {
        "source": "reactflow__node-subnet-1644420281492",
        "sourceHandle": null,
        "target": "reactflow__node-network-1644420389827",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-subnet-1644420281492null-reactflow__node-network-1644420389827null",
        "type": "default"
    }, {
        "source": "reactflow__node-subnet-1644420295244",
        "sourceHandle": null,
        "target": "reactflow__node-network-1644420391249",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-subnet-1644420295244null-reactflow__node-network-1644420391249null",
        "type": "default"
    }, {
        "source": "reactflow__node-subnet-1644420303737",
        "sourceHandle": null,
        "target": "reactflow__node-network-1644420392586",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-subnet-1644420303737null-reactflow__node-network-1644420392586null",
        "type": "default"
    }, {
        "source": "reactflow__node-port-1644420127718",
        "sourceHandle": null,
        "target": "reactflow__node-subnet-1644420303737",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-port-1644420127718null-reactflow__node-subnet-1644420303737null",
        "type": "default"
    }, {
        "source": "reactflow__node-port-1644420133346",
        "sourceHandle": null,
        "target": "reactflow__node-subnet-1644420275700",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-port-1644420133346null-reactflow__node-subnet-1644420275700null",
        "type": "default"
    }, {
        "source": "reactflow__node-port-1644420132451",
        "sourceHandle": null,
        "target": "reactflow__node-subnet-1644420280645",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-port-1644420132451null-reactflow__node-subnet-1644420280645null",
        "type": "default"
    }, {
        "source": "reactflow__node-port-1644420149172",
        "sourceHandle": null,
        "target": "reactflow__node-subnet-1644420279400",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-port-1644420149172null-reactflow__node-subnet-1644420279400null",
        "type": "default"
    }, {
        "source": "reactflow__node-port-1644420128639",
        "sourceHandle": null,
        "target": "reactflow__node-subnet-1644420283577",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-port-1644420128639null-reactflow__node-subnet-1644420283577null",
        "type": "default"
    }, {
        "source": "reactflow__node-port-1644420131460",
        "sourceHandle": null,
        "target": "reactflow__node-subnet-1644420295244",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-port-1644420131460null-reactflow__node-subnet-1644420295244null",
        "type": "default"
    }, {
        "source": "reactflow__node-port-1644420129514",
        "sourceHandle": null,
        "target": "reactflow__node-subnet-1644420281492",
        "targetHandle": null,
        "id": "reactflow__edge-reactflow__node-port-1644420129514null-reactflow__node-subnet-1644420281492null",
        "type": "default"
    }],
    "position": [906.7004254523051, -6.259840805912518],
    "zoom": 0.5,
    "#elements": 43,
    "module_name": "fw1_module",
    "module_description": "description firewall apache",
    "version": "2"
};

const FlowApp_m = (props) => {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /** @STATE -> observable
 *  Per reperire i dati principali
 */
    const [state, setState] = useState({ type: props.type, name: props.name, description: props.description, version: props.version })


    /*  @STATE -> observable
        Per l'istanza del modello react (valorizzata all'avvio)
        con il metodo associato setIstanzaReactFlow() per la manipolazione,
    */
    const [IstanzaReactFlow, setIstanzaReactFlow] = useState();

    /* @STATE -> observable
        Per gli elementi da aggiungere (valorizzata all'avvio)
        con il metodo associato setIstanzaReactFlow() per la manipolazione,
    */
    //const [elementi, setElementi] = useState(ElementiIniziali);
    const [elementi, setElementi, { undo, canUndo, redo, canRedo }] = useUndoable([]);
    //([]) -> SE VUOTO
    //(ElementiIniziali) -> SE CON QUALCHE PLACE HOLDER ->>>>>>>>>>>>>>>>>>>>>>>> fw1.elements
    // const { transform } = useZoomPanHelper();

    /** @STATE -> observable
        Per aprire la schermata delle info una volta eseguito il drop del nodo
     */
    const [datanodeinfo, setDNI] = useState({ selected_element: undefined, show: false })

    /** @STATES -> observables
     *  Per aggiornare le dimenzioni del canvas e della side dei dati dei nodi.
     */
    const [dim_canvas, setDimCanvas] = useState(10);
    const [dim_sider, setDimSider] = useState(0);

    /** @STATE -> observable
     *  Per controllare e aggiornare lo stile background
     */
    const [bkgnd, updateBackground] = useState({ type: 'lines', img: grid_dot, gap: 12, size: 1.5 });

    /** @STATE -> observable
     *  Per aggiornare la view per DNI al side dx.
     */
    const [disp, setDisplay] = useState('none')

    /** HOOKS for zoom properties
     *  usato per le funzioni zoom
    */
    const { zoomIn, zoomOut, fitView } = useZoomPanHelper();

    /**
     * PER FAR FUNZIONARE LE FUNZIONI selectAll e addFootBar
     */
    const nodes = useStoreState((store) => store.nodes);
    const transform = useStoreState((store) => store.transform);
    const setSelectedElements = useStoreActions((actions) => actions.setSelectedElements);

    /**
     * PER REPERIRE I DATI SALVATI
     */
    const infopan = useSelector(state => state.datapass)
    const dispatch = useDispatch();

    const [showoc, setShowOC] = useState(false);
    const handleClose = () => setShowOC(false);
    const handleShow = () => setShowOC(true);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @function onElementsRemove
     *  function to handle when an element is removed from canvas
     * @param {*} elementsToRemove
     *   Selezionati gli elementi da rimuovere
     * @description
     *  Function assegnata ad ogni eliminazione degli elementi.
             richiama setElementi -> che modifica gli elementi nel canvas (nodi e archi).
             che richama removeElements() che prende gli elementi da eliminare e li rimuove dal canvas.
     */
    function onElementsRemove(elementsToRemove) {
        setElementi((els) => removeElements(elementsToRemove, els));
    }

    /**
     * @function onConnect
     *  function to handle when connection node event happens on canvas
     * @param {*} params
     *  Selezionati i nodi 'from' e 'to'
     * @description
     *  Function assegnata ad ogni connessione tramite collegamento.
     *      richiama setElementi -> che modifica gli elementi nel canvas (nodi e archi).
     *      che richiama addEdge() che permette di aggiungere un arco di collegmento al canvas.
     */
    function onConnect(params) {
        //console.log('we',params);
        setElementi((els) => addEdge(params, els));
        //setElementi((els) => addEdge({ ...params, type: "smoothstep" }, els)); //Se si vuole smoothstep.
    }

    /**
     * @function onSave
     *  function to handle when save event is calles
     * @description
     *  Questa funzione serve per salvare i dati. https://it.reactjs.org/docs/hooks-reference.html#usecallback
     *      Se l'istanza è attiva ed è vera (c'è qualcosa),
     *      trasforma l'istanzaReactFlow in un oggetto [toObject] (per poterlo memorizzare, anche in json)
     *      lo memorizza in localforage in $$$$.
     *     ->>>>>>>>>>> SALVA DownloadJSON.js 
     */
    function onSave() {
        if (IstanzaReactFlow) {
            const flow = IstanzaReactFlow.toObject(); //converte il diagramma in oggetto
            //console.log(_.size(flow.elements), "elements in diagram"); // uso '_' libreria
            flow['#elements'] = _.size(flow.elements); // detrae il numero dei nodi.
            flow['module_name'] = state.name;
            flow['module_description'] = state.description;
            flow['version'] = state.version;
            localforage.setItem(flowKey, flow); // @@@@ salva gli elementi trasformati in obj reperibili con la chiave specificata
            console.log(JSON.stringify(flow)); // salva il json
            let filename = 'module_blueprint_' + state.name;
            new parsedatamodule(filename, flow);
        } else {
            console.log("error saving diagram!");
        }
    }

    /**
     * @function onRestore
     *  function to handle when restore event is required
     * @description
     *  Questa funzione serve per ripristinare i dati. https://it.reactjs.org/docs/hooks-reference.html#usecallback
     *      Prende i dati da localforage in $$$$ con la chiave flowkey
     *      e se ci sono dati, richiama setElementi che mofifica gli elementi del canvas (nodi e archi),
     *      e li inserisce/aggiorna le loro poisizioni in base egli elementi reperiti in $$$$
     */
    const onRestore = useCallback(() => {
        const restoreFlow = async () => {
            const flow = await localforage.getItem(flowKey); // @@@@ rinviene gli elementi salvati (in obj) usando la chiave
            if (flow) {
                //const [x = 0, y = 0] = flow.position;
                setElementi(flow.elements || []); // aggiora/modifica/aggiunge nodi e archi nelle posizioni salvate
                //transform({ x, y, zoom: flow.zoom || 0 });
            }
        };
        restoreFlow();
    }, [setElementi]); // aggiongere ",transform"-> per la posizione

    /**
     * @function onAdd
     *  function to handle the add node event
     * @description
     *  Questa funzione serve per aggiungere i nodi. https://it.reactjs.org/docs/hooks-reference.html#usecallback
     *      Prende dei template dei nodi e li aggiunge al canvas attraverso la function setElementi che gestisce i nodi e archi.
     *      prende i nodi template create e li concatena a quelli esistenti
     */
    const onAdd = useCallback(() => {
        // node template
        var px = Math.random() * 10;
        var py = Math.random() * 10;
        var py2 = Math.random() * 10 + py;
        const newNode = [
            {
                id: getNodeId(),
                data: { label: 'nuovo nodo base' },
                position: { x: px, y: py, },
            },
            {
                id: getNodeId() + 1,
                data: { label: 'nuovo nodo special' },
                type: 'special',
                position: { x: py + 1, y: py2, },
            }
        ];
        setElementi((els) => els.concat(newNode)); // @@@@ concatena i nodi creati a quelli presenti
    }, [setElementi]);


    /**
     * @function onDragOver
     *  function to handle when drag-over event happens on canvas
     * @param {*} event
     *  Paramentro che indica la modalità di trasferimento (trasferimento Drag&Drop variabili)
     * @description
     *  Function richiamta quando si è finito l'operazione di dragging. https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
     */
    function onDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    /**
     * @function onDrop
     *  function to handle when drop event happens on canvas
     * @param {*} event
     *  Parametro che indica la modalità di trasferimento (trasferimento Drag&Drop variabili)
     * @description
     *  Funzione richiamata quando si esegue il drop degli elementi.
     *      si prende da event (trasferimento Drag&Drop variabili) le informazioni
     *      si crea un nuovo nodo con queste informazioni
     *      e lo si concatena tramite la setElementi al canvas preesistente.
     */
    function onDrop(event) {
        event.preventDefault();
        if (elementi) {
            // const type = event.dataTransfer.getData('application/reactflow');
            const type = event.dataTransfer.getData("type");
            ////////////////////// TODO: Inserire nome (==id ==label), etc...
            // controlla che sia in drop un nodo, e non una QUALSIASI cosa
            if (type === '' || type === null) {
                return;
            }
            const position = IstanzaReactFlow.project({ x: event.clientX - 350, y: event.clientY });
            const id = getNodeId(type);
            const newNode = {
                id,
                type,
                position,
                data: { label: 'Insert node name', description: '' },
            };
            setElementi((es) => es.concat(newNode)); // @@@@ aggiunge/concatena il nuovo nodo al canvas dei nodi Elementi
        }
    }

    /**
     * @function onElementClick
     *  function to handle the evenet when element is clicked
     * @param {*} event
     *  Cattura evento mouse
     * @param {*} selected_element
     *  Elemento selezionato
     * @description
     *  Quando si clicca un elemento -> cosa fare
     */
    function onElementClick(event, selected_element) {
        //updateNodeInternals(selected_element.id);
        // se è un nodo non fare nulla
        if (selected_element.id.includes('reactflow__edge') /*|| selected_element.type === 'module'*/) {
            /* const ts = { selected_element: selected_element, show: false };
             setDNI(ts); */
            const tm = { selected_element: selected_element, show: false };
            setDNI(tm);
            return; // future implementazioni per hp nodi
        }
        console.log('element clicked: ', selected_element);
        const tm = { selected_element: selected_element, show: true };
        setDNI(tm);
        setDimCanvas(6);
        setDimSider(4);
        setDisplay('block'); // MOSTRA LA COLONNA CONTENENTE LE SIDE INFO

        dispatch({ data: selected_element, type: 'selectednode' });
    }

    /**
     * 
     * @param {*} event 
     * @param {*} selected_element 
     */
    function onNodeDoubleClick(event, selected_element) {
        // console.log('element double clicked: ', selected_element);
        // if (selected_element.type === 'module') {
        //     console.log("azz");
        // }
        // else {
        // }
        // dispatch({ data: selected_element, type: 'selectednode' });
    }

    /**
     * @function onPaneClick
     *  function to handle when panel are clicked
     * @param {*} event
     *  Cattura evento mouse
     * @description
     *  Quando si clicca un elemento -> cosa fare
     */
    function onPaneClick(event) {
        const tm = { selected_element: '', show: false };
        setDNI(tm);
        setDimCanvas(10);
        setDimSider(0);
        setDisplay('none'); // RIMUOVE LA COLONNA CONTENENTE LE SIDE INFO

    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @function setBackground
     *  for setting background style
     * @description
     *  Praticamente in base al pulsante control premuto aggiorna lo sfondo (e l'immagine del pulsante)
     */
    function setBackground() {
        switch (bkgnd['type']) {
            case 'lines':
                updateBackground({ type: 'dots', img: grid_no, gap: 13, size: 0.5 });
                break;
            case 'dots':
                updateBackground({ type: 'no', img: grid_line, gap: 0, size: 0 });
                break;
            case 'no':
                updateBackground({ type: 'lines', img: grid_dot, gap: 12, size: 1.5 });
                break;
            default:
                break;
        }

    }




    /**
     * @function GetOffcanvas
     *  create/generate an offcanvas where are showed the info (updateable) project
     * @returns 
     *  return an element Offcanvas where the user can change the base info of the module
     */
    const GetOffcanvas = () => {

        const updateState = (name, desc, ver) => {
            // console.log('oooo', name,desc,version);
            if (name === undefined || name === null || name === '')
                name = state.name;
            if (desc === undefined || desc === null || desc === '')
                desc = state.description;
            if (ver === undefined || ver === null || ver === '')
                ver = state.version;
            var x = { name: name, description: desc, version: ver, type: state.type };
            setState(x);
        }

        const z_name = useRef(null);
        const z_desc = useRef(null);
        const z_ver = useRef(null);

        const updateDataApp = () => {
            var name = z_name.current.value;
            var desc = z_desc.current.value;
            var ver = z_ver.current.value;
            updateState(name, desc, ver);
        }

        return (
            <Offcanvas show={showoc} onHide={handleClose} style={{ width: '45vw' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <h2 className='d-inline mb-3'>
                            {state.name} Info
                        </h2>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <Container className='cf px-1 py-2' style={{ direction: 'ltr', overflowX: 'hidden', overflowY: 'scroll', fontSize: "0.8em", position: 'relative' }}>
                            {/* <Row className='mb-2'>
                                <Col style={{ overflowX: 'auto' }} className='p-2'>
                                    <h2 className='d-inline mb-3'>{this.element['data']['label']}</h2>
                                    <h2 className='d-inline' style={{ fontSize: '1em' }}>{this.tipo} </h2>
                                </Col>
                            </Row> */}

                            {/* NAME */}
                            <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                                <Col xs={12} md={5} lg={4} className='colDNI text-center' >
                                    <Form.Label className="">
                                        <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>
                                            Name {state.type}
                                        </p>
                                    </Form.Label>
                                </Col>
                                <Col xs={12} md={7} lg={8}>
                                    <Form.Control
                                        ref={z_name}
                                        placeholder={state.name}
                                        style={{ fontSize: "1.4em" }}
                                    //onChange={}
                                    />
                                </Col>
                            </Row>

                            {/* DESCRIPTION */}
                            <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                                <Col xs={12} md={5} lg={4} className='colDNI text-center'>
                                    <Form.Label className="">
                                        <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Description</p>
                                    </Form.Label>
                                </Col>
                                <Col xs={12} md={7} lg={8}>
                                    <Form.Control
                                        ref={z_desc}
                                        /*as='textarea'*/
                                        placeholder={state.description}
                                        style={{ fontSize: "1.4em" }}
                                    //onChange={}
                                    />
                                </Col>
                            </Row>

                            {/* VERSION */}
                            <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                                <Col xs={12} md={5} lg={4} className='colDNI text-center'>
                                    <Form.Label className="">
                                        <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Version</p>
                                    </Form.Label>
                                </Col>
                                <Col xs={12} md={7} lg={8}>
                                    <Form.Control
                                        ref={z_ver}
                                        /*as='textarea'*/
                                        placeholder={state.version}
                                        style={{ fontSize: "1.4em" }}
                                    //onChange={}
                                    />
                                </Col>
                            </Row>

                            <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                                <Col xs={12} md={6} lg={4} className='colDNI text-center'>
                                    <Button variant="primary" onClick={() => updateDataApp()} > Save Changes </Button>
                                </Col>
                                <Col xs={12} md={6} lg={4} className='colDNI text-center'>
                                    <Button variant="danger" onClick={() => handleClose()} > Discard Changes </Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Offcanvas.Body>
            </Offcanvas >
        );
    }

    /**
     * @function getSidebar
     *  generate a sidebar where are all type of base node aviable
     * @returns
     *  This function return a render output of sidebar -> node
     */
    function getSidebar() {
        var x = new Sidebar_m()
        return (x.render());
    }

    /**
     * @function showDataNode
     *  show a sidecanvas where show all info node (updateble)
     * @returns
     *  ritorna un Container (passato al lato dx) contenente tutte le strutture per personalizzare i nodi
     */
    function showDataNode() {
        var d = new DataNodeInfo_m(datanodeinfo);
        return d.renderize();
    }

    /**
     * @function addNavBar
     *  create an pseudo-nav-bar on the project to manipulate infos.
     * @returns 
     *  return a navbar where are function, such as
     *      module-details -> GetOffcanvas
     *      save -> onSave
     *      restore -> onRestore
     *      exit -> Redirect to ./home 
     */
    function addNavBar() {
        return (
            <Container className='cf sticky-top' style={{ /*maxHeight: '7vh',*/ minHeight: '7vh' }}>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="primary" style={{ minHeight: '7vh', /*maxHeight: '7vh',*/ paddingLeft: '1vw', paddingRight: '1vw' }}>
                    <Navbar.Brand /*href="#home"*/>
                        <h2 className='d-inline mb-3'>
                            {state.name}
                            <cite className='d-inline' style={{ fontSize: '0.5em' }}> {state.type} </cite>
                        </h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        <img src={menu} width={25} height={25} alt="zoomin" style={{ marginBottom: '0.4vh' }} />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">

                            <Nav.Link onClick={() => handleShow()}>Theater details</Nav.Link>
                            {/* <Nav.Link>Items</Nav.Link>

                            <NavDropdown title="Image details" id="collasible-nav-dropdown">
                                <NavDropdown.Item >1</NavDropdown.Item>
                                <NavDropdown.Item >2</NavDropdown.Item>
                                <NavDropdown.Item >3</NavDropdown.Item>
                                { }
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Add Image</NavDropdown.Item>
                            </NavDropdown> */}

                        </Nav>

                        <Nav>
                            <Nav.Link onClick={() => onSave()}>Save</Nav.Link>
                            <Nav.Link onClick={() => onRestore()}>Restore</Nav.Link>
                            <Nav.Link as={Link} to="/home">Exit</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {GetOffcanvas()}
            </Container>
        );
    }

    /**
     * @function addSubBar
     *  create a sub-bar where situate all operazion to handle/personalize canvas
     *      - zoomin
     *      - zoomout
     *      - fitviw
     *      - changebackground ->setBackground
     *      - UNDO -> canUndo
     *      - REDO -> canRedo
     *      - delate
     *      - selectall
     * @returns 
     *  return a sub-bar container
     */
    function addSubBar() {
        return (
            <Container className='cf bg-light' style={{ /*maxHeight: '3vh',*/ minHeight: '3vh', paddingLeft: '1vw', paddingRight: '1vw', border: '1px solid gray', }}>

                <Row className="me-auto" >
                    <Col style={{ textAlign: 'left' }}>
                        <a className='btn p-0' onClick={zoomIn} style={{ marginRight: '1vw' }}>
                            <img src={zoomin} width={18} height={18} alt="zoomin" style={{ marginBottom: '0.4vh' }} />
                            Zoom in
                        </a>
                        <a className='btn p-0' onClick={zoomOut} style={{ marginRight: '1vw' }}>
                            <img src={zoomout} width={18} height={18} alt="zoomout" style={{ marginBottom: '0.4vh' }} />
                            Zoom out
                        </a>
                        <a className='btn p-0' onClick={fitView} style={{ marginRight: '1vw' }}>
                            <img src={fitview} width={18} height={18} alt="fitview" style={{ marginBottom: '0.4vh' }} />
                            Fit view
                        </a>
                        <a className='btn p-0' style={{ opacity: '10%', marginRight: '1vw' }}>|</a>
                        <a className='btn p-0' onClick={() => { setBackground() }} style={{ marginRight: '1vw' }}>
                            <img src={bkgnd['img']} width={13} height={13} alt="changebg" style={{ marginBottom: '0.4vh' }} />
                            &nbsp;
                            Change background {bkgnd['type']}
                        </a>
                        <a className='btn p-0' style={{ opacity: '10%', marginRight: '1vw' }}>|</a>
                        <Button className='btn p-0' onClick={() => undo()} disabled={!canUndo} style={{ marginRight: '1vw', color: 'black', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                            <img src={indietro} width={18} height={18} alt="undo" style={{ marginBottom: '0.4vh' }} />
                            &nbsp;Undo
                        </Button>
                        <Button className='btn p-0' onClick={() => redo()} disabled={!canRedo} style={{ marginRight: '1vw', color: 'black', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                            <img src={avanti} width={18} height={18} alt="redo" style={{ marginBottom: '0.4vh' }} />
                            &nbsp; Redo
                        </Button>
                        <a className='btn p-0' style={{ opacity: '10%', marginRight: '1vw' }}>|</a>
                        <a className='btn p-0' onClick={() => { setElementi((els) => removeElements(datanodeinfo.selected_element, els)) }} style={{ marginRight: '1vw' }}>
                            <img src={deletex} width={18} height={18} alt="delete" style={{ marginBottom: '0.4vh' }} />
                            &nbsp; Delete node
                        </a>
                        <a className='btn p-0' style={{ opacity: '10%', marginRight: '1vw' }}>|</a>
                        <a className='btn p-0' onClick={() => { setSelectedElements(nodes.map((node) => ({ id: node.id, type: node.type }))) }} style={{ marginRight: '1vw' }}>
                            <img src={selall} width={18} height={18} alt="delete" style={{ marginBottom: '0.4vh' }} />
                            &nbsp; Select all nodes
                        </a>
                        <a className='btn p-0' style={{ opacity: '10%', marginRight: '1vw' }}>|</a>
                        {/* <a className='btn p-0' onClick={() => { updateNodeInternals(datanodeinfo.selected_element.id); console.log(datanodeinfo.selected_element.id); }} style={{ marginRight: '1vw' }}>
                            <img src={selall} width={18} height={18} alt="delete" style={{ marginBottom: '0.4vh' }} />
                            &nbsp;  Refresh
                        </a>
                        <a className='btn p-0' style={{ opacity: '10%', marginRight: '1vw' }}>|</a> */}


                        {/* <NavDropdown title="Image details" id="collasible-nav-dropdown">
                                <NavDropdown.Item >1</NavDropdown.Item>
                                <NavDropdown.Item >2</NavDropdown.Item>
                                <NavDropdown.Item >3</NavDropdown.Item>
                                { }
                                <NavDropdown.Divider />
                                <NavDropdown.Item >Add Image</NavDropdown.Item>
                            </NavDropdown> */}
                    </Col>
                </Row>
            </Container>

        );
    }

    /**
     * @function addFootBar
     *  generate and update a footbar containing
     *      - element select
     *      - margin canvas
     *      - all nodes in canvas
     * @returns 
     */
    function addFootBar() {
        return (
            <Container className='cf vheight3 p-2' style={{ overflowX: 'hidden', overflowY: 'auto', textAlign: 'left' }}>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h5 className="d-inline p-0 m-0">Zoom & pan transform: </h5>
                                <div className="d-inline h6"> &nbsp;
                                    [{transform[0].toFixed(2)}, {transform[1].toFixed(2)}, {transform[2].toFixed(2)}]
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className='p-0 m-0'>Element selected:</h5>
                                {JSON.stringify(datanodeinfo.selected_element)}
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <h5 className='p-0 m-0'>Nodes:</h5>
                        </Row>
                        {
                            nodes.map(
                                (node) => (
                                    <div key={node.id} className='d-inline'>
                                        {node.data.label} - x: {node.__rf.position.x.toFixed(2)}, y: {node.__rf.position.y.toFixed(2)}&nbsp;&nbsp;&nbsp;
                                    </div>
                                )
                            )
                        }
                    </Col>
                </Row>
            </Container>
        );
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div>
            <div style={{ minHeight: '10vh',/* maxHeight: '10vh',*/ }}>
                {addNavBar()}
                {addSubBar()}
            </div>
            <Container className='cf vheight' style={{ maxWidth: '100vw', }}>
                <Row className='justify-content-center text-center' style={{ /*minHeight: '100%',*/ maxWidth: '100vw', margin: '0' }} >
                    <Col xs={2} md={2} lg={2} className='justify-content-center text-center vheight' style={{ paddingRight: '1vw', }}>
                        {getSidebar()}
                    </Col>
                    <Col xs={dim_canvas} md={dim_canvas} lg={dim_canvas} className='justify-content-center text-center vheight' style={{ paddingTop: '1vh', paddingBottom: '1vh' }}>
                        {/* <ReactFlowProvider> */}
                        <div className='react-flow shadow' style={{ width: '100%', height: '100%' }} > {/* Attention! The dimensions of your React Flow component depend on the parents dimensions. */}
                            <ReactFlow
                                onLoad={setIstanzaReactFlow}  /* carica istanza -> per salvare lo stato del flow */
                                elements={elementi} /* Seleziona gli elementi da mostrare iniziali */
                                nodeTypes={allNodeTypes} /* definisce i vari tipi di nodi */
                                onElementsRemove={onElementsRemove} /* function da richiamare per l'eliminazione dei nodi */
                                deleteKeyCode={46} /* definisce pulsante shortucut per eliminare 'delete-key' ossia canc */
                                multiSelectionKeyCode={17} // multiselection control, on pan shift
                                onConnect={onConnect} /* function da richiamare quando si connettono */
                                onDrop={onDrop} /* function da richiamare quando si trascina */
                                onDragOver={onDragOver} /* function da richiamare quando si posa un °QUALSIASI° elemento all'interno */
                                onElementClick={onElementClick} /* function quando si clicca un elemento */
                                onPaneClick={onPaneClick} /* Quando viene cliccato il canvas */
                                onNodeDoubleClick={onNodeDoubleClick} /* Quando viene cliccato 2 volte il nodo*/
                                maxZoom={15}
                            >
                                <Background
                                    variant={bkgnd['type']}
                                    gap={bkgnd['gap']}
                                    size={bkgnd['size']}
                                />
                                <Controls> {/*controlli basso-sx per zoom */}
                                    <ControlButton onClick={() => setBackground()}> {/*pulsante custom per lo sfondo*/}
                                        <img src={bkgnd['img']} width={15} height={15} alt=' '></img>
                                    </ControlButton>
                                    <ControlButton onClick={() => onSave()}> {/*pulsante custom per lo sfondo*/}
                                        <img src={save} width={15} height={15} alt=' '></img>
                                    </ControlButton>
                                    <ControlButton onClick={() => onRestore()}> {/*pulsante custom per lo sfondo*/}
                                        <img src={restore} width={15} height={15} alt=' '></img>
                                    </ControlButton>
                                </Controls>
                            </ReactFlow>
                        </div>
                        {/* </ReactFlowProvider> */}
                    </Col>

                    <Col xs={dim_sider} md={dim_sider} lg={dim_sider} className='justify-content-center text-center vheight' style={{ paddingLeft: '1vw', display: disp }}>
                        {showDataNode()}
                    </Col>
                </Row>
            </Container>

            <div className='vheight3' style={{ background: '' }}>
                {addFootBar()}
            </div>

        </div>
    );
}

export default FlowApp_m;