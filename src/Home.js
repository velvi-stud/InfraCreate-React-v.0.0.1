import React, { createRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTANTE -> IMPORTARE
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import iac from './images/coop/iac_img.jpg'


import { useSelector, useDispatch } from 'react-redux';

const Home = () => {

    const [mod, setMod] = useState({ tipo: '', show: false });
    const [disp, setDisp] = useState('block');

    const nome = createRef();
    const descrizione = createRef();

    const history = useHistory();

    /* TO STORE DATA */
    // const modules = useSelector(state => state.modulesretrieved)
    const dispatch = useDispatch();


    function updateMod(tipo, show) {
        const tm = { tipo, show };
        //console.log(tm, mod);
        if (tm.tipo === mod.tipo) {
            setDisp('none')
            tm.tipo = '';
            tm.show = false;
            mod.tipo = !mod.tipo;
            return;
        }
        setDisp('block')
        setMod(tm);
        return;
    }

    function routeChange() {
        let path = `Application`;
        history.push(path);
    }

    function activateApp() {
        var name = nome.current.value; // prendere il valore dello stato corrente dell'elemto riferito da "nome"
        var description = descrizione.current.value; // prendere il valore dello stato corrente dell'elemto riferito da "descrizione"
        var type = mod.tipo;
        var z = { type, name, description };
        console.log("z: ", z);

        /* REDUX PER PASSARE DATI SULL'ENTITà DA MODELLARE */
        var newinfo = {
            type: type,
            name: name,
            description: description
        }
        // carica dati
        dispatch({ data: newinfo, type: 'datapass' });

        if(type==='theater')
            retrieveData();

        /* CHANGE ROUTE */
        routeChange();
    }

    /* FUNZIONE PER IPOTIZZARE DI PRENDERE DATI DA UN FS*/
    function retrieveData() {
        /* HP CHE PRENDE I DATI */
        var module1 = [
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
                            "desc": "",
                            "$net_type": "consumer"
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
                            "desc": "",
                            "$image": "Select image",
                            "$flavor": {
                                "$cpu": "Select size",
                                "$hd": "Select size",
                                "$ram": "Select size"
                            },
                            "$userdata": {
                                "$usr": "",
                                "$pwd": ""
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$net_type": "provider"
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
                            "desc": "",
                            "$net_type": "provider"
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                "module_name": "example1",
                "module_description": "descrizione ex1",
                "version": "1.0"
            }
        ];
        var module2 = [
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
                            "desc": "",
                            "$net_type": "consumer"
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
                            "desc": "",
                            "$image": "Select image",
                            "$flavor": {
                                "$cpu": "Select size",
                                "$hd": "Select size",
                                "$ram": "Select size"
                            },
                            "$userdata": {
                                "$usr": "",
                                "$pwd": ""
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$net_type": "provider"
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
                            "desc": "",
                            "$net_type": "provider"
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                "module_name": "example2",
                "module_description": "descrizione ex2",
                "version": "1.0"
            }
        ];
        var module3 = [
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
                            "desc": "",
                            "$net_type": "consumer"
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
                            "desc": "",
                            "$image": "Select image",
                            "$flavor": {
                                "$cpu": "Select size",
                                "$hd": "Select size",
                                "$ram": "Select size"
                            },
                            "$userdata": {
                                "$usr": "",
                                "$pwd": ""
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$net_type": "provider"
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
                            "desc": "",
                            "$net_type": "provider"
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                "module_name": "example3",
                "module_description": "descrizione ex3",
                "version": "1.0"
            }
        ];
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
                            "desc": "",
                            "$net_type": "consumer"
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
                            "desc": "",
                            "$image": "Select image",
                            "$flavor": {
                                "$cpu": "Select size",
                                "$hd": "Select size",
                                "$ram": "Select size"
                            },
                            "$userdata": {
                                "$usr": "",
                                "$pwd": ""
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$net_type": "provider"
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
                            "desc": "",
                            "$net_type": "provider"
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                "module_name": "example4",
                "module_description": "descrizione ex4",
                "version": "1.0"
            }
        ];
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
                            "desc": "",
                            "$net_type": "consumer"
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
                            "desc": "",
                            "$image": "Select image",
                            "$flavor": {
                                "$cpu": "Select size",
                                "$hd": "Select size",
                                "$ram": "Select size"
                            },
                            "$userdata": {
                                "$usr": "",
                                "$pwd": ""
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$net_type": "provider"
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
                            "desc": "",
                            "$net_type": "provider"
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
                            "desc": "",
                            "$subnet": {
                                "$ip_version": "Select version",
                                "$cidr": {
                                    "$default": ""
                                },
                                "$allocation_pools": {
                                    "$allocation_pool_start": "",
                                    "$allocation_pool_end": ""
                                },
                                "$enable_dhcp": false
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
                            "desc": "",
                            "$properties": {
                                "$default": "",
                                "$type": ""
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
                "module_name": "example5",
                "module_description": "descrizione ex5",
                "version": "1.0"
            }
        ];
        var modules = [
            module1, module2, module3, module4, module5
        ];
        // carica dati
        dispatch({data:modules, type: 'modulesobtained'});

    }

    const showInput = () => {
        if (mod.show) {
            return (
                <Container>
                    <Row className='text-center align-center justify-content-center'>
                        <Col xs={12} md={9} lg={6} className='shadow mt-2 p-5'>
                            <Form className="pl-3 pr-3">
                                <Form.Group className="" controlId="ControlTextarea">
                                    <Form.Label className="">
                                        <h3 className="d-inline">Insert</h3>
                                        <h3 className="d-inline" style={{ color: "#0d6efd", }}> {mod.tipo} </h3>
                                        <h3 className="d-inline">name</h3>
                                    </Form.Label>
                                    <Form.Control ref={nome} placeholder='Insert name' style={{ fontSize: "1.4em" }} />
                                    <Form.Label className="mt-4">
                                        <h3 className="d-inline">Insert</h3>
                                        <h3 className="d-inline" style={{ color: "#0d6efd", }}> {mod.tipo} </h3>
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
                        <Button className=" outline-primary lg h1 text-center" style={{ fontSize: "1.8em", }} onClick={() => updateMod('theater', true)} > Create Theater </Button>
                    </Col>
                    <Col xs={12} md={6} lg={6} >
                        <Button className=" outline-primary lg h1 text-center" style={{ fontSize: "1.8em", }} onClick={() => updateMod('module', true)}> Create Module </Button>
                    </Col>
                </Row>

                <div style={{ display: disp }}>
                    {showInput()}
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