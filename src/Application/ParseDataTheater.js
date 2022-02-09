import downloadfile from "./DownloadFILE";
import _ from "lodash";

class parsedatatheater {
    constructor(f_name, data_m) {
        this.data = data_m;
        //CANCELLARE -> PER PROVARE UNA TOPOLOGIA
        this.data = {
            "elements": [{
                "id": "reactflow__node-1644401397971",
                "type": "module",
                "position": {
                    "x": 291,
                    "y": 238
                },
                "data": {
                    "label": "example1",
                    "description": "descrizione ex1",
                    "version": "2.0",
                    "topology": [{
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }],
                    "area": "1_one"
                }
            }, {
                "id": "reactflow__node-1644401399240",
                "type": "module",
                "position": {
                    "x": 675,
                    "y": 268
                },
                "data": {
                    "label": "example3",
                    "description": "descrizione ex3",
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
                            "net_type": "consumer"
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
                    "area": "2_wto"
                }
            }, {
                "id": "reactflow__node-1644401402572",
                "type": "module",
                "position": {
                    "x": 53,
                    "y": 79
                },
                "data": {
                    "label": "example4",
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
                    "area": "1_one"
                }
            }, {
                "id": "reactflow__node-1644401444438",
                "type": "module",
                "position": {
                    "x": 699,
                    "y": 58
                },
                "data": {
                    "label": "example5",
                    "description": "descrizione ex5",
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
                            "net_type": "consumer"
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
                    "area": "1_one"
                }
            }, {
                "source": "reactflow__node-1644401397971",
                "sourceHandle": "reactflow__node-1643714642998",
                "target": "reactflow__node-1644401399240",
                "targetHandle": "reactflow__node-1643104802212",
                "id": "reactflow__edge-reactflow__node-1644401397971reactflow__node-1643714642998-reactflow__node-1644401399240reactflow__node-1643104802212",
                "type": "default"
            }, {
                "source": "reactflow__node-1644401402572",
                "sourceHandle": "reactflow__node-1643105061738",
                "target": "reactflow__node-1644401397971",
                "targetHandle": "reactflow__node-1643714641867",
                "id": "reactflow__edge-reactflow__node-1644401402572reactflow__node-1643105061738-reactflow__node-1644401397971reactflow__node-1643714641867",
                "type": "default"
            }, {
                "source": "reactflow__node-1644401397971",
                "sourceHandle": "reactflow__node-1643714637168",
                "target": "reactflow__node-1644401444438",
                "targetHandle": "reactflow__node-1643104802212",
                "id": "reactflow__edge-reactflow__node-1644401397971reactflow__node-1643714637168-reactflow__node-1644401444438reactflow__node-1643104802212",
                "type": "default"
            }],
            "position": [33.26877302859873, 14.355780254779631],
            "zoom": 1.0732602863934542,
            "#elements": 7,
            "theater_name": "theather name",
            "theater_description": "description tht",
            "theater_version": "1.0",
            "areas": {
                "0": {
                    "area": {
                        "area_name": "1_one",
                        "area_desc": "one"
                    }
                },
                "1": {
                    "area": {
                        "area_name": "2_wto",
                        "area_desc": "two"
                    }
                }
            }
        };
        this.output = {}
        this.reasume = {}


        this.parse(f_name);
    }

    parse(f_name) {
        //var output = {};
        // initial part
        this.output['tosca_definitions_version'] = 'cloudify_dsl_1_3';
        this.output['description'] = this.data['theater_description'];
        this.output['imports'] = [
            { http: 'www.getcloudify.org/spec/cloudify/4.5.5/types.yaml' },
        ];
        this.output['imports'] = [
            ...this.output['imports'],
            { plugin: 'sysman-creo-plugin?version=1.0' },
        ];
        this.output['version'] = this.data['theather_version'];
        this.output['node_templates'] = {};

        this.base_blueprint();
        this.getservers();
        this.getports();
        this.getcompletenetwork();

        //console.log('parsed output:', JSON.stringify(this.output));
        new downloadfile(f_name, this.output, 'yaml')
    }

    base_blueprint() {
        var mn = this.data['theater_name'];
        this.output['node_templates'][mn] = {};
        this.output['node_templates'][mn]['description'] = this.data['theater_description'];
        this.output['node_templates'][mn]['version'] = this.data['theater_version'];
        this.output['node_templates'][mn]['mode'] = 'Managed';
        this.output['node_templates'][mn]['areas'] = [];

        class area_t {
            constructor(a_name, a_desc) {
                this.area = a_name;
                this.description = a_desc;
            }
        };
        var aaa = this.data['areas'];
        Object.entries(aaa).map(([key, value]) => {
            var a = value;
            var na = new area_t(a['area_name'], a['area_desc']);
            console.log('areaa:', a, na);
        });

    }

    get_modules() {
        var mod = this.getobjs('module');
        Object.entries(mod).map(([key, value]) => { // scorre moduli
            var m = value;
            var mn = m['data']['label'];
            this.output['node_templates'][mn] = {}
            this.output['node_templates'][mn]['properties'] = {}
            if(this.isSession(m['id'])){
                this.output['node_templates'][mn]['type'] = 'sysman.creo.nodes.SessionNetworkModuleInstance';
                this.output['node_templates'][mn]['properties'] = {
                    module: '',
                    version: '',
                    description: ''
                }
            }
            else{
                this.output['node_templates'][mn] = 'sysman.creo.nodes.TheaterModuleInstance';
            }
        });
    }

    isSession(node_id) {
        var top = this.gettopology(node_id);
        let net = top.filter(element => element.data !== undefined && element.data.net_type !== undefined && element.data.net_type === 'consumer');
        let qt = _.size(net);
        if (qt === 0)
            return true
        else
            return false
    }

    getservers() {
        var allserver = this.getobjs('server');
        Object.entries(allserver).map(  // scorro i server
            ([key, value]) => {

                var server = {};
                var s = value;
                var links = [];
                let name_server = s['data']['label'];

                var rel = this.getconnectiontotype(s['id'], 'port');
                Object.entries(rel).map(([key, value]) => { // scroll port
                    var porta = value;
                    var zo = {
                        type: 'cloudify.openstack.server_connected_to_port',
                        target: porta['data']['label']
                    }
                    links = [
                        ...links,
                        zo
                    ]
                }
                );

                server['type'] = 'cloudify.openstack.nodes.Server';
                server['description'] = s['data']['description'];
                server['relationships'] = links
                this.output['node_templates'][name_server] = server;
                links = []; // resetto i links
            }
        );
    }

    getports() {
        var allports = this.getobjs('port');
        Object.entries(allports).map( //scorro le porte
            ([key, value]) => {
                var port = {};
                var p = value;
                let name_port = p['data']['label'];
                var links = [];
                var sub, net;

                var rel = this.getconnectiontotype(p['id'], 'subnet');
                Object.entries(rel).map(([key, value]) => { // scorro le porte
                    sub = value;
                    net = this.getconnectiontotype(sub['id'], 'network');
                    net = net[0];
                }
                );

                var zo1 = {
                    type: 'cloudify.relationships.contained_in',
                    target: net['data']['label']
                }
                var zo2 = {
                    type: 'cloudify.relationships.depends_on',
                    target: sub['data']['label']
                }
                links = [
                    ...links,
                    zo1,
                    zo2,
                ]

                port['type'] = 'cloudify.openstack.nodes.Port';
                port['description'] = p['data']['description'];
                port['relationships'] = links;
                port['properties'] = p['properites'];
                this.output['node_templates'][name_port] = port;
                links = []; // resetto i links

            }
        );
    }

    getcompletenetwork() {
        var allserver = this.getobjs('network');
        Object.entries(allserver).map(([key, value]) => { //scroll network

            var network = {};
            var n;
            var links = [];

            let name_net = value['data']['label'];
            n = value;

            network['type'] = 'cloudify.openstack.nodes.Network';
            network['properties'] = {
                group: n['data']['group'],
                net_type: n['data']['net_type']
            }
            this.output['node_templates'][name_net] = network;

            var sub = this.getconnectiontotype(n['id'], 'subnet');
            Object.entries(sub).map(([key, value]) => { // scroll network
                var subnet = {}
                var s = value;
                var name_sub = s['data']['label']

                var zo = {
                    type: 'cloudify.relationships.contained_in',
                    target: name_net
                }
                links = [
                    ...links,
                    zo
                ]

                subnet['type'] = 'cloudify.openstack.nodes.Subnet';
                subnet['description'] = s['data']['descroption'];
                subnet['subnet'] = s['data']['subnet'];
                subnet['relationships'] = links;
                subnet['properties'] = s['properites'];
                this.output['node_templates'][name_sub] = subnet;
                links = []; // resetto i links

            }
            );

        }
        );
    }


    getobjs(type) {
        var temp = this.data;
        var x = temp.elements.filter(element => element.data !== undefined && element.type !== undefined && element.type === type);
        return x;
    }

    getnode(id) {
        var temp = this.data;
        var x = temp.elements.filter(element => element.data !== undefined && element.id === id);
        return x[0];
    }

    gettopology(id) {
        var x = this.getnode(id);
        return x['data']['topology'];
    }

    getlink(node_id) {
        var temp = this.data;
        var x = temp.elements.filter(element => element.id.includes("reactflow__edge") && (element.source === node_id || element.target === node_id));
        return x;
    }

    getconnectiontotype(node_id, type) {
        var rel = this.getlink(node_id);
        var els = [];
        Object.entries(rel).map(
            ([key, value]) => {
                let iii = (value['target'] === node_id) ? 'source' : 'target';
                var oth = this.getnode(value[iii]);
                if (oth['type'] === type) {
                    els.push(oth);
                }
            }
        );
        return els;
    }



}

export default parsedatatheater;