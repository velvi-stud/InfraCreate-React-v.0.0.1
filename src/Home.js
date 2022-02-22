import React, { createRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTANTE -> IMPORTARE
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import iac from './images/coop/iac_img.jpg'
import RD from './take-data/RestApi/retrieve-data.js'

import { useSelector, useDispatch } from 'react-redux';

const Home = () => {

    const [showDataInput, setShowDataInput] = useState({ tipo: '', show: false });
    const [display, setDisplay] = useState('block');

    const nome = createRef();
    const descrizione = createRef();

    const history = useHistory();

    /* TO STORE DATA */
    // const modules = useSelector(state => state.modulesretrieved)
    const dispatch = useDispatch();

    /**
     * @function updateShowDataInput
     * @param {*} tipo 
     * @param {*} show 
     *  show/hide div fot input text
     * @returns 
     */
    function updateShowDataInput(tipo, show) {
        const tm = { tipo, show };
        //console.log(tm, mod);
        if (tm.tipo === showDataInput.tipo) {
            setDisplay('none')
            tm.tipo = '';
            tm.show = false;
            showDataInput.tipo = !showDataInput.tipo;
            return;
        }
        setDisplay('block')
        setShowDataInput(tm);
        return;
    }

    /**
     * @function activateApp
     *  1)  store data to pass (datapass) into shared area "redux"
     *      [in case is a theater hypotize the retrieve of module json]
     *  2) redirect to Application 
     */
    function activateApp() {
        var name = nome.current.value; // prendere il valore dello stato corrente dell'elemto riferito da "nome"
        var description = descrizione.current.value; // prendere il valore dello stato corrente dell'elemto riferito da "descrizione"
        var type = showDataInput.tipo;
        var z = { type, name, description };
        console.log("z: ", z);
        var version = '1.0';
        /* REDUX PER PASSARE DATI SULL'ENTITà DA MODELLARE */
        var newinfo = {
            type: type,
            name: name,
            description: description,
            version: version
        }
        // carica dati
        dispatch({ data: newinfo, type: 'datapass' });

        if (type === 'theater')
            retrieveData();

        /* CHANGE ROUTE */
        routeChange();
    }


    /**
     * @function retrieveData
     *  store modules data (modulesretrieved) into shared area "redux"
     *      [simulate the retreivation of module data stored json]
     */
    function retrieveData() {
        /* HP CHE PRENDE I DATI */

        //many port
        var module1 = [
            {
                "elements": [
                    {
                        "id": "reactflow__node-1643714565706",
                        "type": "network",
                        "position": {
                            "x": 538,
                            "y": 34
                        },
                        "data": {
                            "label": "Insert node name",
                            "description": ""
                        }
                    },
                    {
                        "id": "reactflow__node-1643714637168",
                        "type": "network",
                        "position": {
                            "x": 45,
                            "y": 367
                        },
                        "data": {
                            "label": "Insert node name",
                            "description": "",
                            "net_type": "provider"
                        }
                    },
                    {
                        "id": "reactflow__node-1643714638250",
                        "type": "network",
                        "position": {
                            "x": 186,
                            "y": 499
                        },
                        "data": {
                            "label": "Insert node name",
                            "description": "",
                            "net_type": "provider"
                        }
                    },
                    {
                        "id": "reactflow__node-1643714640755",
                        "type": "network",
                        "position": {
                            "x": 73,
                            "y": 60
                        },
                        "data": {
                            "label": "Insert node name",
                            "description": "",
                            "net_type": "provider"
                        }
                    },
                    {
                        "id": "reactflow__node-1643714641867",
                        "type": "network",
                        "position": {
                            "x": 575,
                            "y": 603
                        },
                        "data": {
                            "label": "Insert node name",
                            "description": "",
                            "net_type": "consumer"
                        }
                    },
                    {
                        "id": "reactflow__node-1643714642998",
                        "type": "network",
                        "position": {
                            "x": 858,
                            "y": 262
                        },
                        "data": {
                            "label": "Insert node name",
                            "description": "",
                            "net_type": "provider"
                        }
                    },
                    {
                        "id": "reactflow__node-1643714644351",
                        "type": "network",
                        "position": {
                            "x": 783,
                            "y": 93
                        },
                        "data": {
                            "label": "Insert node name",
                            "description": "",
                            "net_type": "provider"
                        }
                    },
                    {
                        "id": "reactflow__node-1643714645837",
                        "type": "network",
                        "position": {
                            "x": 965,
                            "y": 556
                        },
                        "data": {
                            "label": "Insert node name",
                            "description": "",
                            "net_type": "provider"
                        }
                    },
                    {
                        "id": "reactflow__node-1643714647024",
                        "type": "network",
                        "position": {
                            "x": 695,
                            "y": 491
                        },
                        "data": {
                            "label": "Insert node name",
                            "description": "",
                            "net_type": "provider"
                        }
                    },
                    {
                        "id": "reactflow__node-1643714648271",
                        "type": "network",
                        "position": {
                            "x": 315,
                            "y": 46
                        },
                        "data": {
                            "label": "Insert node name",
                            "description": "",
                            "net_type": "provider"
                        }
                    },
                    {
                        "id": "reactflow__node-1643714663949",
                        "type": "server",
                        "position": {
                            "x": 454,
                            "y": 395
                        },
                        "data": {
                            "label": "Insert node name",
                            "description": ""
                        }
                    }
                ],
                "position": [
                    12,
                    12
                ],
                "zoom": 1,
                "#elements": 11,
                "module_name": "example1",
                "module_description": "descrizione ex1",
                "version": "2.0"
            }
        ];
        //apachedb
        var module2 = [
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
                        "flavour": {
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
                        "flavour": {
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
        var module3 = [{
            "elements": [{
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
                    "flavour": {
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
            "position": [108.16241109945827, 192.42498692292224],
            "zoom": 0.5,
            "#elements": 43,
            "module_name": "fw_1",
            "module_description": "Modulo Firewall",
            "version": "1.0"
        }

        ];
        //sess
        var module4 = [
            {
                "elements": [
                    {
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
                    },
                    {
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
                            "flavour": {
                                "cpu": "Select size",
                                "hd": "Select size",
                                "ram": "Select size"
                            },
                            "userdata": {
                                "usr": "",
                                "pwd": ""
                            }
                        }
                    },
                    {
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
                    },
                    {
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
                    },
                    {
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
                    },
                    {
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
                    },
                    {
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
                    },
                    {
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
                    },
                    {
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
                    },
                    {
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
                    },
                    {
                        "source": "reactflow__node-1643104846044",
                        "sourceHandle": "Insert node name",
                        "target": "reactflow__node-1643104850609",
                        "targetHandle": "Insert node name",
                        "id": "reactflow__edge-reactflow__node-1643104846044Insert node name-reactflow__node-1643104850609Insert node name",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643104846044",
                        "sourceHandle": "Insert node name",
                        "target": "reactflow__node-1643104887857",
                        "targetHandle": "Insert node name",
                        "id": "reactflow__edge-reactflow__node-1643104846044Insert node name-reactflow__node-1643104887857Insert node name",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643104850609",
                        "sourceHandle": "p0",
                        "target": "reactflow__node-1643104853254",
                        "targetHandle": "s1",
                        "id": "reactflow__edge-reactflow__node-1643104850609p0-reactflow__node-1643104853254s1",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643104853254",
                        "sourceHandle": "s1",
                        "target": "reactflow__node-1643104802212",
                        "targetHandle": "Insert node name",
                        "id": "reactflow__edge-reactflow__node-1643104853254s1-reactflow__node-1643104802212Insert node name",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643104887857",
                        "sourceHandle": "p1",
                        "target": "reactflow__node-1643104988986",
                        "targetHandle": "s2",
                        "id": "reactflow__edge-reactflow__node-1643104887857p1-reactflow__node-1643104988986s2",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643104988986",
                        "sourceHandle": "s2",
                        "target": "reactflow__node-1643105000694",
                        "targetHandle": "n2",
                        "id": "reactflow__edge-reactflow__node-1643104988986s2-reactflow__node-1643105000694n2",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643104846044",
                        "sourceHandle": "serv1",
                        "target": "reactflow__node-1643105084470",
                        "targetHandle": "p3",
                        "id": "reactflow__edge-reactflow__node-1643104846044serv1-reactflow__node-1643105084470p3",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643105084470",
                        "sourceHandle": "p3",
                        "target": "reactflow__node-1643105074000",
                        "targetHandle": "s3",
                        "id": "reactflow__edge-reactflow__node-1643105084470p3-reactflow__node-1643105074000s3",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643105074000",
                        "sourceHandle": "s3",
                        "target": "reactflow__node-1643105061738",
                        "targetHandle": "n3",
                        "id": "reactflow__edge-reactflow__node-1643105074000s3-reactflow__node-1643105061738n3",
                        "type": "default"
                    }
                ],
                "position": [
                    0,
                    0
                ],
                "zoom": 1,
                "#elements": 19,
                "module_name": "example_session",
                "module_description": "descrizione ex4",
                "version": "1.0"
            }
        ];
        // 1-1
        var module5 = [
            {
                "elements": [
                    {
                        "id": "reactflow__node-1643104802212",
                        "type": "network",
                        "position": {
                            "x": 392,
                            "y": 202
                        },
                        "data": {
                            "label": "n1",
                            "description": "",
                            "net_type": "consumer"
                        }
                    },
                    {
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
                            "flavour": {
                                "cpu": "Select size",
                                "hd": "Select size",
                                "ram": "Select size"
                            },
                            "userdata": {
                                "usr": "",
                                "pwd": ""
                            }
                        }
                    },
                    {
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
                    },
                    {
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
                    },
                    {
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
                    },
                    {
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
                    },
                    {
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
                    },
                    {
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
                    },
                    {
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
                    },
                    {
                        "source": "reactflow__node-1643104846044",
                        "sourceHandle": "Insert node name",
                        "target": "reactflow__node-1643104850609",
                        "targetHandle": "Insert node name",
                        "id": "reactflow__edge-reactflow__node-1643104846044Insert node name-reactflow__node-1643104850609Insert node name",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643104846044",
                        "sourceHandle": "Insert node name",
                        "target": "reactflow__node-1643104887857",
                        "targetHandle": "Insert node name",
                        "id": "reactflow__edge-reactflow__node-1643104846044Insert node name-reactflow__node-1643104887857Insert node name",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643104850609",
                        "sourceHandle": "p0",
                        "target": "reactflow__node-1643104853254",
                        "targetHandle": "s1",
                        "id": "reactflow__edge-reactflow__node-1643104850609p0-reactflow__node-1643104853254s1",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643104853254",
                        "sourceHandle": "s1",
                        "target": "reactflow__node-1643104802212",
                        "targetHandle": "Insert node name",
                        "id": "reactflow__edge-reactflow__node-1643104853254s1-reactflow__node-1643104802212Insert node name",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643104887857",
                        "sourceHandle": "p1",
                        "target": "reactflow__node-1643104988986",
                        "targetHandle": "s2",
                        "id": "reactflow__edge-reactflow__node-1643104887857p1-reactflow__node-1643104988986s2",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643104846044",
                        "sourceHandle": "serv1",
                        "target": "reactflow__node-1643105084470",
                        "targetHandle": "p3",
                        "id": "reactflow__edge-reactflow__node-1643104846044serv1-reactflow__node-1643105084470p3",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643105084470",
                        "sourceHandle": "p3",
                        "target": "reactflow__node-1643105074000",
                        "targetHandle": "s3",
                        "id": "reactflow__edge-reactflow__node-1643105084470p3-reactflow__node-1643105074000s3",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1643105074000",
                        "sourceHandle": "s3",
                        "target": "reactflow__node-1643105061738",
                        "targetHandle": "n3",
                        "id": "reactflow__edge-reactflow__node-1643105074000s3-reactflow__node-1643105061738n3",
                        "type": "default"
                    }
                ],
                "position": [
                    0,
                    0
                ],
                "zoom": 1,
                "#elements": 19,
                "module_name": "example5",
                "module_description": "descrizione ex5",
                "version": "1.0"
            }
        ];

        var modules = [
            module1, module2, module3, module4, module5
        ];

        var x = new RD();
        //modules = x.getModules();

        // carica dati
        dispatch({ data: modules, type: 'modulesretrieved' });

    }

    
    /**
     * @function routeChange
     *  redidect into Application js page
     */
     function routeChange() {
        let path = `Application`;
        history.push(path);
    }

    /**
     * @function showFormInput
     * @returns 
     *  return, if a condition is verified, the div containing the form for the creation
     *  else return null.
     */
    function showFormInput() {
        if (showDataInput.show) {
            return (
                <Container>
                    <Row className='text-center align-center justify-content-center'>
                        <Col xs={12} md={9} lg={6} className='shadow mt-2 p-5'>
                            <Form className="pl-3 pr-3">
                                <Form.Group className="" controlId="ControlTextarea">
                                    <Form.Label className="">
                                        <h3 className="d-inline">Insert</h3>
                                        <h3 className="d-inline" style={{ color: "#0d6efd", }}> {showDataInput.tipo} </h3>
                                        <h3 className="d-inline">name</h3>
                                    </Form.Label>
                                    <Form.Control ref={nome} placeholder='Insert name' style={{ fontSize: "1.4em" }} />
                                    <Form.Label className="mt-4">
                                        <h3 className="d-inline">Insert</h3>
                                        <h3 className="d-inline" style={{ color: "#0d6efd", }}> {showDataInput.tipo} </h3>
                                        <h3 className="d-inline">description</h3>
                                    </Form.Label>
                                    <Form.Control ref={descrizione} as="textarea" placeholder='Insert description' style={{ fontSize: "1.4em" }} />
                                    <Button className="mt-3" as="input" type="button" value="Submit" style={{ fontSize: "1.4em", }} onClick={() => activateApp()} />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else {
            return null;
        }
    }



    /**************************  RENDER  ********************** */

    return (
        <div id='hdiv' className='mt-5 container-fluid text-center justify-content-center' ref={(el) => {
            if (el) {
                el.style.setProperty('margin-top', '1vh', 'important');
            }
        }}>
            <Container className='container-fluid'>
                <Row>
                    <h1 className='display-1' style={{ fontSize: '4em' }}>
                        Cyber Range Theater Constructor
                    </h1>
                </Row>
                <Row>
                    <h3>
                        Visual design orchestration for infrastructure system
                    </h3>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={6} lg={6} >
                        <Button className=" outline-primary lg h1 text-center" style={{ fontSize: "1.8em", }} onClick={() => updateShowDataInput('theater', true)} > Create Theater </Button>
                    </Col>
                    <Col xs={12} md={6} lg={6} >
                        <Button className=" outline-primary lg h1 text-center" style={{ fontSize: "1.8em", }} onClick={() => updateShowDataInput('module', true)}> Create Module </Button>
                    </Col>
                </Row>

                <div style={{ display: display }}>
                    {showFormInput()}
                </div>

                <img src={iac} width={'60%'} height={'50%'} className='mt-5'></img>

                <Row className="mt-5">
                    <Row>
                    </Row>
                    <Row>
                        {/* <p style={{ fontSize: "1.4em", }}>
                            Cras varius felis ac enim elementum lacinia. Maecenas quis nunc luctus,
                            pretium libero sit amet, viverra sapien. Sed mollis nunc enim,
                            sit amet scelerisque augue venenatis at. Etiam tincidunt nunc quis
                            quam lobortis tempus. Morbi orci magna, gravida ac tempus rutrum,
                            varius ut nulla. Phasellus molestie neque sit amet ex scelerisque
                            placerat. Donec a libero accumsan, convallis lacus nec, semper odio.
                            Nam blandit, odio sit amet vestibulum consequat, purus magna tincidunt
                            eros, eget hendrerit orci augue eu purus. Sed vel dui eleifend,
                            tincidunt enim et, feugiat arcu. Fusce lacus mauris, ultrices et
                            porttitor id, egestas ac ante. Donec finibus mauris ac lacus
                            aliquet suscipit. Suspendisse interdum est sit amet cursus vulputate.
                            Nulla interdum purus dolor, eu feugiat nisl faucibus vitae.
                            Nunc efficitur augue nec justo aliquam, vitae rutrum massa sodales.
                            Donec mollis nisl sed est venenatis porta
                        </p> */}
                    </Row>
                </Row>
            </Container>
        </div>
    );
}

export default Home;