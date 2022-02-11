import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTANTE -> IMPORTARE
import {
    Row,
    Col,
    Container,
    Nav,
    Navbar,
    Button,
    Offcanvas,
    Form
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
import Sidebar_t from './Sidebar_theater'; // per la sidebar
import DataNodeInfo_t from './DataNodeInfo_theater';
import '../all.css'
import AllTypeNodes from '../../nodes/AllTypeNodes';
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

import Areas_node from './HandleAreas';

import { useDispatch } from 'react-redux';

import localforage from 'localforage';

import parsedatatheater from '../ParseDataTheater';


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
*/
const getNodeId = () => `reactflow__node-${+new Date()}`;

/* @ operazioni per reperire stili e classi dei nodi base */
const ATN = new AllTypeNodes();
const allNodeTypes = ATN.GetObj();

const tempalte_example_elements = [
    {
        "id": "reactflow__node-1644575938851",
        "type": "module",
        "position": {
            "x": 40.80515330159572,
            "y": 161.46146532505327
        },
        "data": {
            "label": "SessionNetwwork_in_1",
            "module": "example_session",
            "description": "descrizione ex4",
            "version": "1.0",
            "topology": [{
                "id": "reactflow__node-1643104802212",
                "type": "network",
                "position": {
                    "x": 392,
                    "y": 202
                },
                "data": {
                    "label": "n1",
                    "description": "",
                    "net_type": "provider"
                }
            }, {
                "id": "reactflow__node-1643104846044",
                "type": "server",
                "position": {
                    "x": -251,
                    "y": 234
                },
                "data": {
                    "label": "serv1",
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
                "id": "reactflow__node-1643104850609",
                "type": "port",
                "position": {
                    "x": -33,
                    "y": 88
                },
                "data": {
                    "label": "p1",
                    "description": "",
                    "properties": {
                        "default": "",
                        "type": ""
                    }
                }
            }, {
                "id": "reactflow__node-1643104853254",
                "type": "subnet",
                "position": {
                    "x": 156.00000000000003,
                    "y": 71
                },
                "data": {
                    "label": "s1",
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
                "id": "reactflow__node-1643104887857",
                "type": "port",
                "position": {
                    "x": -2.9801255975839425,
                    "y": 417.79507349792317
                },
                "data": {
                    "label": "p2",
                    "description": "",
                    "properties": {
                        "default": "",
                        "type": ""
                    }
                }
            }, {
                "id": "reactflow__node-1643104988986",
                "type": "subnet",
                "position": {
                    "x": 137.03616657569103,
                    "y": 428.51242446507393
                },
                "data": {
                    "label": "s2",
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
                "id": "reactflow__node-1643105000694",
                "type": "network",
                "position": {
                    "x": 382.0197016486155,
                    "y": 392.7783498220018
                },
                "data": {
                    "label": "n2",
                    "description": "",
                    "net_type": "provider"
                }
            }, {
                "id": "reactflow__node-1643105061738",
                "type": "network",
                "position": {
                    "x": 372.57746458967404,
                    "y": 609.3988423215002
                },
                "data": {
                    "label": "n3",
                    "description": "",
                    "net_type": "provider"
                }
            }, {
                "id": "reactflow__node-1643105074000",
                "type": "subnet",
                "position": {
                    "x": 111.79761124987323,
                    "y": 606.5228436344727
                },
                "data": {
                    "label": "s3",
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
                "id": "reactflow__node-1643105084470",
                "type": "port",
                "position": {
                    "x": -59.01760161725744,
                    "y": 541.885400273263
                },
                "data": {
                    "label": "p3",
                    "description": "",
                    "properties": {
                        "default": "",
                        "type": ""
                    }
                }
            }, {
                "source": "reactflow__node-1643104846044",
                "sourceHandle": "Insert node name",
                "target": "reactflow__node-1643104850609",
                "targetHandle": "Insert node name",
                "id": "reactflow__edge-reactflow__node-1643104846044Insert node name-reactflow__node-1643104850609Insert node name",
                "type": "default"
            }, {
                "source": "reactflow__node-1643104846044",
                "sourceHandle": "Insert node name",
                "target": "reactflow__node-1643104887857",
                "targetHandle": "Insert node name",
                "id": "reactflow__edge-reactflow__node-1643104846044Insert node name-reactflow__node-1643104887857Insert node name",
                "type": "default"
            }, {
                "source": "reactflow__node-1643104850609",
                "sourceHandle": "p0",
                "target": "reactflow__node-1643104853254",
                "targetHandle": "s1",
                "id": "reactflow__edge-reactflow__node-1643104850609p0-reactflow__node-1643104853254s1",
                "type": "default"
            }, {
                "source": "reactflow__node-1643104853254",
                "sourceHandle": "s1",
                "target": "reactflow__node-1643104802212",
                "targetHandle": "Insert node name",
                "id": "reactflow__edge-reactflow__node-1643104853254s1-reactflow__node-1643104802212Insert node name",
                "type": "default"
            }, {
                "source": "reactflow__node-1643104887857",
                "sourceHandle": "p1",
                "target": "reactflow__node-1643104988986",
                "targetHandle": "s2",
                "id": "reactflow__edge-reactflow__node-1643104887857p1-reactflow__node-1643104988986s2",
                "type": "default"
            }, {
                "source": "reactflow__node-1643104988986",
                "sourceHandle": "s2",
                "target": "reactflow__node-1643105000694",
                "targetHandle": "n2",
                "id": "reactflow__edge-reactflow__node-1643104988986s2-reactflow__node-1643105000694n2",
                "type": "default"
            }, {
                "source": "reactflow__node-1643104846044",
                "sourceHandle": "serv1",
                "target": "reactflow__node-1643105084470",
                "targetHandle": "p3",
                "id": "reactflow__edge-reactflow__node-1643104846044serv1-reactflow__node-1643105084470p3",
                "type": "default"
            }, {
                "source": "reactflow__node-1643105084470",
                "sourceHandle": "p3",
                "target": "reactflow__node-1643105074000",
                "targetHandle": "s3",
                "id": "reactflow__edge-reactflow__node-1643105084470p3-reactflow__node-1643105074000s3",
                "type": "default"
            }, {
                "source": "reactflow__node-1643105074000",
                "sourceHandle": "s3",
                "target": "reactflow__node-1643105061738",
                "targetHandle": "n3",
                "id": "reactflow__edge-reactflow__node-1643105074000s3-reactflow__node-1643105061738n3",
                "type": "default"
            }],
            "area": "Select area"
        }
    }, {
        "id": "reactflow__node-1644575970805",
        "type": "module",
        "position": {
            "x": 400.1404968715956,
            "y": 498.88076857680136
        },
        "data": {
            "label": "firewall_in_1",
            "module": "fw_1",
            "description": "Modulo Firewall",
            "version": "1.0",
            "topology": [{
                "id": "reactflow__node-server-1644573477685",
                "type": "server",
                "position": {
                    "x": 63,
                    "y": 199
                },
                "data": {
                    "label": "host_fw1",
                    "description": "module_fw_model_1",
                    "image": "image_1",
                    "flavor": {
                        "cpu": "4",
                        "hd": "50",
                        "ram": "16"
                    },
                    "userdata": {
                        "usr": "",
                        "pwd": ""
                    },
                    "name": "fw_h_1"
                }
            }, {
                "id": "reactflow__node-port-1644573625177",
                "type": "port",
                "position": {
                    "x": 429.868836683612,
                    "y": -8.295425629816776
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
                "id": "reactflow__node-port-1644573626506",
                "type": "port",
                "position": {
                    "x": 415.0325630864315,
                    "y": 364.2078729191894
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
                "id": "reactflow__node-port-1644573627515",
                "type": "port",
                "position": {
                    "x": 423.01209728607904,
                    "y": 239.57693183184972
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
                "id": "reactflow__node-port-1644573630490",
                "type": "port",
                "position": {
                    "x": 429.697838676464,
                    "y": 115.41980252704208
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
                "id": "reactflow__node-port-1644573632012",
                "type": "port",
                "position": {
                    "x": 416.27397946075826,
                    "y": 481.1121410154392
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
                "id": "reactflow__node-port-1644573633759",
                "type": "port",
                "position": {
                    "x": 409.77068091175227,
                    "y": 596.8478349726504
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
                "id": "reactflow__node-port-1644573678551",
                "type": "port",
                "position": {
                    "x": 430.976263462132,
                    "y": -140.83930366697675
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
                "id": "reactflow__node-subnet-1644573870777",
                "type": "subnet",
                "position": {
                    "x": 742.9094768262943,
                    "y": 505.21072497706984
                },
                "data": {
                    "label": "private_subnet_client",
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
                "id": "reactflow__node-subnet-1644573871905",
                "type": "subnet",
                "position": {
                    "x": 765.2832305823972,
                    "y": 353.3284070258312
                },
                "data": {
                    "label": "private_subnet_iot",
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
                "id": "reactflow__node-subnet-1644573878890",
                "type": "subnet",
                "position": {
                    "x": 758.0464175092035,
                    "y": 185.72712887950573
                },
                "data": {
                    "label": "private_subnet_server",
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
                "id": "reactflow__node-subnet-1644573883847",
                "type": "subnet",
                "position": {
                    "x": 760.8074741921332,
                    "y": 26.314857855107647
                },
                "data": {
                    "label": "private_subnet_dmz",
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
                "id": "reactflow__node-subnet-1644573895986",
                "type": "subnet",
                "position": {
                    "x": 762.3159463536808,
                    "y": -138.15610780448046
                },
                "data": {
                    "label": "private_subnet_simint",
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
                "id": "reactflow__node-subnet-1644573900232",
                "type": "subnet",
                "position": {
                    "x": 705.518796555703,
                    "y": 679.5851055336598
                },
                "data": {
                    "label": "private_subnet_management",
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
                "id": "reactflow__node-subnet-1644573928943",
                "type": "subnet",
                "position": {
                    "x": 736.4069084089587,
                    "y": -286.07378633956176
                },
                "data": {
                    "label": "management_subnet",
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
                "id": "reactflow__node-network-1644573987996",
                "type": "network",
                "position": {
                    "x": 1098.6948858902444,
                    "y": 350.65242509704785
                },
                "data": {
                    "label": "private_network_iot",
                    "description": "",
                    "net_type": "provider",
                    "local_interface": "iot",
                    "remote_interface": "iot"
                }
            }, {
                "id": "reactflow__node-network-1644573992082",
                "type": "network",
                "position": {
                    "x": 1084.1770201890427,
                    "y": 509.85112146772667
                },
                "data": {
                    "label": "private_network_client",
                    "description": "",
                    "net_type": "provider",
                    "local_interface": "client",
                    "remote_interface": "client"
                }
            }, {
                "id": "reactflow__node-network-1644573995255",
                "type": "network",
                "position": {
                    "x": 1083.6869186386639,
                    "y": 186.63262819780593
                },
                "data": {
                    "label": "private_network_server",
                    "description": "",
                    "net_type": "provider",
                    "local_interface": "server",
                    "remote_interface": "server"
                }
            }, {
                "id": "reactflow__node-network-1644574001344",
                "type": "network",
                "position": {
                    "x": 1077.7412402947555,
                    "y": 22.014086436001293
                },
                "data": {
                    "label": "private_network_dmz",
                    "description": "",
                    "net_type": "provider",
                    "local_interface": "dmz",
                    "remote_interface": "dmz"
                }
            }, {
                "id": "reactflow__node-network-1644574004980",
                "type": "network",
                "position": {
                    "x": 1101.263930657613,
                    "y": 681.0340376842885
                },
                "data": {
                    "label": "private_network_management",
                    "description": "",
                    "net_type": "provider",
                    "local_interface": "management",
                    "remote_interface": "management"
                }
            }, {
                "id": "reactflow__node-network-1644574006277",
                "type": "network",
                "position": {
                    "x": 1068.3650935576134,
                    "y": -124.58852082264207
                },
                "data": {
                    "label": "private_network_simint",
                    "description": "",
                    "net_type": "provider",
                    "local_interface": "simint",
                    "remote_interface": "simint"
                }
            }, {
                "id": "reactflow__node-network-1644574025347",
                "type": "network",
                "position": {
                    "x": 1030.2202320036288,
                    "y": -285.5275266708976
                },
                "data": {
                    "label": "management_network",
                    "description": "",
                    "net_type": "consumer",
                    "local_interface": "sdl_management",
                    "remote_interface": "sdl_management"
                }
            }, {
                "source": "reactflow__node-server-1644573477685",
                "sourceHandle": null,
                "target": "reactflow__node-port-1644573625177",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-server-1644573477685null-reactflow__node-port-1644573625177null",
                "type": "default"
            }, {
                "source": "reactflow__node-server-1644573477685",
                "sourceHandle": null,
                "target": "reactflow__node-port-1644573630490",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-server-1644573477685null-reactflow__node-port-1644573630490null",
                "type": "default"
            }, {
                "source": "reactflow__node-server-1644573477685",
                "sourceHandle": null,
                "target": "reactflow__node-port-1644573627515",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-server-1644573477685null-reactflow__node-port-1644573627515null",
                "type": "default"
            }, {
                "source": "reactflow__node-server-1644573477685",
                "sourceHandle": null,
                "target": "reactflow__node-port-1644573626506",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-server-1644573477685null-reactflow__node-port-1644573626506null",
                "type": "default"
            }, {
                "source": "reactflow__node-server-1644573477685",
                "sourceHandle": null,
                "target": "reactflow__node-port-1644573632012",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-server-1644573477685null-reactflow__node-port-1644573632012null",
                "type": "default"
            }, {
                "source": "reactflow__node-server-1644573477685",
                "sourceHandle": null,
                "target": "reactflow__node-port-1644573633759",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-server-1644573477685null-reactflow__node-port-1644573633759null",
                "type": "default"
            }, {
                "source": "reactflow__node-server-1644573477685",
                "sourceHandle": null,
                "target": "reactflow__node-port-1644573678551",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-server-1644573477685null-reactflow__node-port-1644573678551null",
                "type": "default"
            }, {
                "source": "reactflow__node-port-1644573678551",
                "sourceHandle": null,
                "target": "reactflow__node-subnet-1644573928943",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-port-1644573678551null-reactflow__node-subnet-1644573928943null",
                "type": "default"
            }, {
                "source": "reactflow__node-subnet-1644573928943",
                "sourceHandle": null,
                "target": "reactflow__node-network-1644574025347",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-subnet-1644573928943null-reactflow__node-network-1644574025347null",
                "type": "default"
            }, {
                "source": "reactflow__node-subnet-1644573900232",
                "sourceHandle": null,
                "target": "reactflow__node-network-1644574004980",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-subnet-1644573900232null-reactflow__node-network-1644574004980null",
                "type": "default"
            }, {
                "source": "reactflow__node-subnet-1644573895986",
                "sourceHandle": null,
                "target": "reactflow__node-network-1644574006277",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-subnet-1644573895986null-reactflow__node-network-1644574006277null",
                "type": "default"
            }, {
                "source": "reactflow__node-subnet-1644573883847",
                "sourceHandle": null,
                "target": "reactflow__node-network-1644574001344",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-subnet-1644573883847null-reactflow__node-network-1644574001344null",
                "type": "default"
            }, {
                "source": "reactflow__node-subnet-1644573878890",
                "sourceHandle": null,
                "target": "reactflow__node-network-1644573995255",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-subnet-1644573878890null-reactflow__node-network-1644573995255null",
                "type": "default"
            }, {
                "source": "reactflow__node-subnet-1644573870777",
                "sourceHandle": null,
                "target": "reactflow__node-network-1644573992082",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-subnet-1644573870777null-reactflow__node-network-1644573992082null",
                "type": "default"
            }, {
                "source": "reactflow__node-subnet-1644573871905",
                "sourceHandle": null,
                "target": "reactflow__node-network-1644573987996",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-subnet-1644573871905null-reactflow__node-network-1644573987996null",
                "type": "default"
            }, {
                "source": "reactflow__node-port-1644573625177",
                "sourceHandle": null,
                "target": "reactflow__node-subnet-1644573895986",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-port-1644573625177null-reactflow__node-subnet-1644573895986null",
                "type": "default"
            }, {
                "source": "reactflow__node-port-1644573630490",
                "sourceHandle": null,
                "target": "reactflow__node-subnet-1644573883847",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-port-1644573630490null-reactflow__node-subnet-1644573883847null",
                "type": "default"
            }, {
                "source": "reactflow__node-port-1644573627515",
                "sourceHandle": null,
                "target": "reactflow__node-subnet-1644573878890",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-port-1644573627515null-reactflow__node-subnet-1644573878890null",
                "type": "default"
            }, {
                "source": "reactflow__node-port-1644573626506",
                "sourceHandle": null,
                "target": "reactflow__node-subnet-1644573871905",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-port-1644573626506null-reactflow__node-subnet-1644573871905null",
                "type": "default"
            }, {
                "source": "reactflow__node-port-1644573632012",
                "sourceHandle": null,
                "target": "reactflow__node-subnet-1644573870777",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-port-1644573632012null-reactflow__node-subnet-1644573870777null",
                "type": "default"
            }, {
                "source": "reactflow__node-port-1644573633759",
                "sourceHandle": null,
                "target": "reactflow__node-subnet-1644573900232",
                "targetHandle": null,
                "id": "reactflow__edge-reactflow__node-port-1644573633759null-reactflow__node-subnet-1644573900232null",
                "type": "default"
            }],
            "area": "area_1"
        }
    }, {
        "id": "reactflow__node-1644576031991",
        "type": "module",
        "position": {
            "x": 827.1241285880299,
            "y": 129.06200898491073
        },
        "data": {
            "label": "Apachedb_in_1",
            "module": "example_apache_db",
            "description": "esempio bp apache",
            "version": "1.0",
            "topology": [{
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
                    "remote_interface": "man_net"
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
                    "remote_interface": "private_net_dmz"
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
                    "remote_interface": "private_net_local"
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
            "area": "area_1"
        }
    }, {
        "id": "reactflow__node-1644576097894",
        "type": "module",
        "position": {
            "x": 854.299767965311,
            "y": 335.661945050701
        },
        "data": {
            "label": "ApacheDatabase_in_2",
            "module": "example_apache_db",
            "description": "esempio bp apache",
            "version": "1.0",
            "topology": [{
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
                    "remote_interface": "man_net"
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
                    "remote_interface": "private_net_dmz"
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
                    "remote_interface": "private_net_local"
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
            "area": "area_2"
        }
    }, {
        "id": "reactflow__node-1644576135209",
        "type": "module",
        "position": {
            "x": 864.3396145232074,
            "y": 540.4888887843744
        },
        "data": {
            "label": "ApacheDatabase_in_3",
            "module": "example_apache_db",
            "description": "esempio bp apache",
            "version": "1.0",
            "topology": [{
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
                    "remote_interface": "man_net"
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
                    "remote_interface": "private_net_dmz"
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
                    "remote_interface": "private_net_local"
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
            "area": "area_3"
        }
    }, {
        "source": "reactflow__node-1644575938851",
        "sourceHandle": "reactflow__node-1643104802212",
        "target": "reactflow__node-1644575970805",
        "targetHandle": "reactflow__node-network-1644574025347",
        "id": "reactflow__edge-reactflow__node-1644575938851reactflow__node-1643104802212-reactflow__node-1644575970805reactflow__node-network-1644574025347",
        "type": "default"
    }, {
        "source": "reactflow__node-1644575938851",
        "sourceHandle": "reactflow__node-1643104802212",
        "target": "reactflow__node-1644576031991",
        "targetHandle": "reactflow__node-network-1644415663500",
        "id": "reactflow__edge-reactflow__node-1644575938851reactflow__node-1643104802212-reactflow__node-1644576031991reactflow__node-network-1644415663500",
        "type": "default"
    }, {
        "source": "reactflow__node-1644575970805",
        "sourceHandle": "reactflow__node-network-1644574001344",
        "target": "reactflow__node-1644576031991",
        "targetHandle": "reactflow__node-network-1644415768209",
        "id": "reactflow__edge-reactflow__node-1644575970805reactflow__node-network-1644574001344-reactflow__node-1644576031991reactflow__node-network-1644415768209",
        "type": "default"
    }, {
        "source": "reactflow__node-1644575938851",
        "sourceHandle": "reactflow__node-1643105000694",
        "target": "reactflow__node-1644576097894",
        "targetHandle": "reactflow__node-network-1644415663500",
        "id": "reactflow__edge-reactflow__node-1644575938851reactflow__node-1643105000694-reactflow__node-1644576097894reactflow__node-network-1644415663500",
        "type": "default"
    }, {
        "source": "reactflow__node-1644575970805",
        "sourceHandle": "reactflow__node-network-1644574001344",
        "target": "reactflow__node-1644576097894",
        "targetHandle": "reactflow__node-network-1644415768209",
        "id": "reactflow__edge-reactflow__node-1644575970805reactflow__node-network-1644574001344-reactflow__node-1644576097894reactflow__node-network-1644415768209",
        "type": "default"
    }, {
        "source": "reactflow__node-1644575938851",
        "sourceHandle": "reactflow__node-1643105061738",
        "target": "reactflow__node-1644576135209",
        "targetHandle": "reactflow__node-network-1644415663500",
        "id": "reactflow__edge-reactflow__node-1644575938851reactflow__node-1643105061738-reactflow__node-1644576135209reactflow__node-network-1644415663500",
        "type": "default"
    }, {
        "source": "reactflow__node-1644575970805",
        "sourceHandle": "reactflow__node-network-1644574001344",
        "target": "reactflow__node-1644576135209",
        "targetHandle": "reactflow__node-network-1644415768209",
        "id": "reactflow__edge-reactflow__node-1644575970805reactflow__node-network-1644574001344-reactflow__node-1644576135209reactflow__node-network-1644415768209",
        "type": "default"
    }
];


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const FlowApp_t = (props) => {

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
    //(ElementiIniziali) -> SE CON QUALCHE PLACE HOLDER
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
    const dispatch = useDispatch();


    const [showoc, setShowOC] = useState(false);
    const handleClose = () => setShowOC(false);
    const handleShow = () => setShowOC(true);

    const [areas, setAreas] = useState({}); // TO MODIFY INITIAL AREA IN CASE OF IMPORT CHANGE INITIAL STATE IMPORTING THE JSON

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
            flow['theater_name'] = state.name;
            flow['theater_description'] = state.description;
            flow['theater_version'] = '1.0'; //TODO
            //flow['theater_sessions'] = []; //TODO
            flow['areas'] = areas; //TODO
            localforage.setItem(flowKey, flow); // @@@@ salva gli elementi trasformati in obj reperibili con la chiave specificata
            console.log(JSON.stringify(flow)); // salva il json
            let filename = 'theater_blueprint_' + state.name;
            new parsedatatheater(filename, flow);
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
     * @description
     *  Questa funzione serve per aggiungere i nodi. https://it.reactjs.org/docs/hooks-reference.html#usecallback
     *      Prende dei template dei nodi e li aggiunge al canvas attraverso la function setElementi che gestisce i nodi e archi.
     *      prende i nodi template create e li concatena a quelli esistenti
     */
    const onAdd = useCallback(() => {
        /*// node template
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
        */
        setElementi((els) => els.concat(tempalte_example_elements));
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
            const name = event.dataTransfer.getData("name");
            const description = event.dataTransfer.getData("description");
            const version = event.dataTransfer.getData("version");
            var topology = event.dataTransfer.getData("topology");
            topology = JSON.parse(topology)
            //console.log('arrivaed:', topology);
            if (type === '' || type === null) {
                return;
            }
            const position = IstanzaReactFlow.project({ x: event.clientX - 350, y: event.clientY - 50 });
            const id = getNodeId();
            const newNode = {
                id,
                type,
                position,
                data: { label: 'insert module name', module: name, description: description, version: version, topology: topology },
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
        console.log('element clicked: ', selected_element);
        if (selected_element.id.includes('reactflow__edge')) {
            const ts = { selected_element: selected_element, show: false };
            setDNI(ts);
            return; // future implementazioni per hp nodi
        }
        const tm = { selected_element: selected_element, show: true };
        setDNI(tm);
        setDimCanvas(6);
        setDimSider(4);
        setDisplay('block'); // MOSTRA LA COLONNA CONTENENTE LE SIDE INFO

        dispatch({ data: selected_element, type: 'selectednode' });
    }

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
     *  create/generate an offcanvas where 
     *      - are showed the info (updateable) project
     *      - Is possible to remove/add the areas of threater -> HandleAreas()
     * @returns 
     *  return an element Offcanvas where the user can change the base info of the module
     */
    const GetOffcanvas = () => {

        const z_name = useRef(null);
        const z_desc = useRef(null);
        const z_ver = useRef(null);

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

        function updateDataApp() {
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
                        <Container className='cf px-1 py-2' style={{ fontSize: "0.8em", position: 'relative' }}>


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

                            {/* PER CONTROLLARE LE AREE */}
                            <Areas_node areas={areas} onChange={(value) => { setAreas(value) }}></Areas_node>
                            {/* {console.log('nuovostato:',areas)} */}

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
     *  generate a sidebar where are all modules preaviusly uploaded
     * @returns
     *  This function return a render output of sidebar -> node
     */
    function getSidebar() {
        var x = new Sidebar_t()
        return (x.render());
    }

    /**
     * @function showDataNode
     *  show a sidecanvas where show all info module node (updateble)
     * @returns
     *  ritorna un Container (passato al lato dx) contenente tutte le strutture per personalizzare i nodi
     */
    function showDataNode() {
        //console.log('aaaaaaaaa:', areas);
        var d = new DataNodeInfo_t(datanodeinfo, areas);
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
                            <Nav.Link onClick={() => onAdd()}>Add tmplt</Nav.Link>
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
                        <button className='btn p-0' onClick={zoomIn} style={{ marginRight: '1vw' }}>
                            <img src={zoomin} width={18} height={18} alt="zoomin" style={{ marginBottom: '0.4vh' }} />
                            Zoom in
                        </button>
                        <button className='btn p-0' onClick={zoomOut} style={{ marginRight: '1vw' }}>
                            <img src={zoomout} width={18} height={18} alt="zoomout" style={{ marginBottom: '0.4vh' }} />
                            Zoom out
                        </button>
                        <button className='btn p-0' onClick={fitView} style={{ marginRight: '1vw' }}>
                            <img src={fitview} width={18} height={18} alt="firview" style={{ marginBottom: '0.4vh' }} />
                            Fit view
                        </button>
                        <button className='btn p-0' style={{ opacity: '10%', marginRight: '1vw' }}>|</button>
                        <button className='btn p-0' onClick={() => { setBackground() }} style={{ marginRight: '1vw' }}>
                            <img src={bkgnd['img']} width={13} height={13} alt="changebg" style={{ marginBottom: '0.4vh' }} />
                            &nbsp;
                            Change background {bkgnd['type']}
                        </button>
                        <button className='btn p-0' style={{ opacity: '10%', marginRight: '1vw' }}>|</button>
                        <Button className='btn p-0' onClick={() => undo()} disabled={!canUndo} style={{ marginRight: '1vw', color: 'black', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                            <img src={indietro} width={18} height={18} alt="undo" style={{ marginBottom: '0.4vh' }} />
                            &nbsp;Undo
                        </Button>
                        <Button className='btn p-0' onClick={() => redo()} disabled={!canRedo} style={{ marginRight: '1vw', color: 'black', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                            <img src={avanti} width={18} height={18} alt="redo" style={{ marginBottom: '0.4vh' }} />
                            &nbsp; Redo
                        </Button>
                        <button className='btn p-0' style={{ opacity: '10%', marginRight: '1vw' }}>|</button>
                        <button className='btn p-0' onClick={() => { setElementi((els) => removeElements(datanodeinfo.selected_element, els)) }} style={{ marginRight: '1vw' }}>
                            <img src={deletex} width={18} height={18} alt="delete" style={{ marginBottom: '0.4vh' }} />
                            &nbsp; Delete node
                        </button>
                        <button className='btn p-0' style={{ opacity: '10%', marginRight: '1vw' }}>|</button>
                        <button className='btn p-0' onClick={() => { setSelectedElements(nodes.map((node) => ({ id: node.id, type: node.type }))) }} style={{ marginRight: '1vw' }}>
                            <img src={selall} width={18} height={18} alt="delete" style={{ marginBottom: '0.4vh' }} />
                            &nbsp; Select all nodes
                        </button>
                        <button className='btn p-0' style={{ opacity: '10%', marginRight: '1vw' }}>|</button>
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

export default FlowApp_t;