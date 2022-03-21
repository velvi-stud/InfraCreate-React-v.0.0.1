import downloadfile from "../DownloadFILE";
import _ from "lodash";

class parsedatatheater {
    constructor(f_name, data_m) {
        this.data = data_m;
        //CANCELLARE -> PER PROVARE UNA TOPOLOGIA
        this.data1 = [
            {
                "elements": [
                    {
                        "id": "reactflow__node-1644492691187",
                        "type": "module",
                        "position": {
                            "x": 673,
                            "y": 65
                        },
                        "data": {
                            "label": "apache_db_in_1",
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
                            "area": "Select area"
                        }
                    },
                    {
                        "id": "reactflow__node-1644492694240",
                        "type": "module",
                        "position": {
                            "x": 287,
                            "y": 328
                        },
                        "data": {
                            "label": "fw_in_1",
                            "module": "fw1_module",
                            "description": "description firewall apache",
                            "version": "2",
                            "topology": [{
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
                                    "remote_interface": "private_net_server"
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
                                    "local_interface": "private_net_name",
                                    "remote_interface": "private_net_name",
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
                            "area": "Select area"
                        }
                    },
                    {
                        "id": "reactflow__node-1644492699545",
                        "type": "module",
                        "position": {
                            "x": 42,
                            "y": 66
                        },
                        "data": {
                            "label": "session_nwk_1",
                            "module": "example4",
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
                    },
                    {
                        "id": "reactflow__node-1644492881881",
                        "type": "module",
                        "position": {
                            "x": 676,
                            "y": 256
                        },
                        "data": {
                            "label": "apache_db_in_2",
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
                            "area": "Select area"
                        }
                    },
                    {
                        "source": "reactflow__node-1644492699545",
                        "sourceHandle": "reactflow__node-1643105061738",
                        "target": "reactflow__node-1644492694240",
                        "targetHandle": "reactflow__node-network-1644420392586",
                        "id": "reactflow__edge-reactflow__node-1644492699545reactflow__node-1643105061738-reactflow__node-1644492694240reactflow__node-network-1644420392586",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1644492694240",
                        "sourceHandle": "reactflow__node-network-1644420344551",
                        "target": "reactflow__node-1644492691187",
                        "targetHandle": "reactflow__node-network-1644415768209",
                        "id": "reactflow__edge-reactflow__node-1644492694240reactflow__node-network-1644420344551-reactflow__node-1644492691187reactflow__node-network-1644415768209",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1644492699545",
                        "sourceHandle": "reactflow__node-1643105061738",
                        "target": "reactflow__node-1644492691187",
                        "targetHandle": "reactflow__node-network-1644415663500",
                        "id": "reactflow__edge-reactflow__node-1644492699545reactflow__node-1643105061738-reactflow__node-1644492691187reactflow__node-network-1644415663500",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1644492694240",
                        "sourceHandle": "reactflow__node-network-1644420344551",
                        "target": "reactflow__node-1644492881881",
                        "targetHandle": "reactflow__node-network-1644415768209",
                        "id": "reactflow__edge-reactflow__node-1644492694240reactflow__node-network-1644420344551-reactflow__node-1644492881881reactflow__node-network-1644415768209",
                        "type": "default"
                    },
                    {
                        "source": "reactflow__node-1644492699545",
                        "sourceHandle": "reactflow__node-1643104802212",
                        "target": "reactflow__node-1644492881881",
                        "targetHandle": "reactflow__node-network-1644415663500",
                        "id": "reactflow__edge-reactflow__node-1644492699545reactflow__node-1643104802212-reactflow__node-1644492881881reactflow__node-network-1644415663500",
                        "type": "default"
                    }
                ],
                "position": [41.683873925705484, 38.47544985364914],
                "zoom": 0.7994661801617102,
                "#elements": 9,
                "theater_name": "Teatro_1",
                "theater_description": "description t1",
                "theater_version": "1.0",
                "areas": {
                    "0": {
                        "area": {
                            "area_name": "area_1",
                            "area_desc": "one"
                        }
                    },
                    "1": {
                        "area": {
                            "area_name": "area_2",
                            "area_desc": "two"
                        }
                    }
                }
            }
        ]
        this.data=data_m;
        this.output = {}
        this.reasume = {}

        this.parse(f_name);
        new downloadfile(f_name, data_m, 'json')
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
        this.get_modules();

        //console.log('parsed output:', JSON.stringify(this.output));
        new downloadfile(f_name, this.output, 'yaml')
    }

    base_blueprint() {

        var mn = this.data['theater_name'];
        
        this.output['node_templates'][mn] = {
            type: '',
            properties: {}
        };
        this.output['node_templates'][mn]['type'] = 'sysman.creo.nodes.Theater';
        this.output['node_templates'][mn]['properties']['description'] = this.data['description'];
        this.output['node_templates'][mn]['properties']['version'] = this.data['theater_version'];
        this.output['node_templates'][mn]['properties']['mode'] = 'Managed';
        this.output['node_templates'][mn]['properties']['areas'] = [];

        class area_t {
            constructor(a_name, a_desc) {
                this.area = a_name;
                this.description = a_desc;
            }
        };
        var aaa = this.data;
        aaa = aaa['areas'];
        Object.entries(aaa).map(([key, value]) => {
            var a = value['area'];
            var na = new area_t(a['area_name'], a['area_desc']);
            console.log(na);
            this.output['node_templates'][mn]['properties']['areas'] = [
                ...this.output['node_templates'][mn]['properties']['areas'],
                na,
            ];
        });

    }

    get_modules() {
        var mod = this.getobjs('module');
        console.log(mod);
        Object.entries(mod).map(([key, value]) => { // scorre moduli
            var m = value;
            var mn = m['data']['label'];
            this.output['node_templates'][mn] = {
                type: '',
                properties: {}
            };
            if (this.isSession(m['id'])) {
                this.output['node_templates'][mn]['type'] = 'sysman.creo.nodes.SessionNetworkModuleInstance';
                this.output['node_templates'][mn]['properties'] = {
                    module: m['data']['module'],
                    version: m['data']['version'],
                    description: m['data']['description'],
                }
            }
            else { // non session, ha interfacce consumer
                this.output['node_templates'][mn]['type'] = 'sysman.creo.nodes.TheaterModuleInstance';
                this.output['node_templates'][mn]['properties'] = {
                    module: m['data']['module'],
                    version: m['data']['version'],
                    description: m['data']['description'],
                    area: m['data']['area'],
                }

                // controllare link if consumer con altri nodi.                
                this.output['node_templates'][mn]['properties']['consumer_inferface'] = [];
                class link_t {
                    constructor(li, mi, ri) {
                        this.local_interface = li;
                        this.module_interface = mi;
                        this.remote_interface = ri;
                    }
                };
                var lk = this.gettargetlink(m['id']); // prende la controparte nel link moduli
                Object.entries(lk).map(([key, value]) => { // scorre link modulo
                    
                    var id_l = value['source'];
                    var mm = this.getnode(id_l);
                    var name_m = mm['data']['label'] // get mod name source

                    var netname = value['targetHandle']; // dovrebbe essere source ma so invertiti
                    var ll = this.gettopologynode(m['id'], netname);
                    console.log(ll);
                    var localif = ll['data']['local_interface']; 
                    var remoteif = ll['data']['remote_interface']; 

                    var x = new link_t(localif, name_m, remoteif);

                    this.output['node_templates'][mn]['properties']['consumer_inferface'] = [
                        ...this.output['node_templates'][mn]['properties']['consumer_inferface'],
                        x,
                    ];

                });
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


    getobjs(type) {
        var temp = this.data;
        var x = temp.elements.filter(element => element.data !== undefined && element.type !== undefined && element.type === type);
        return x;
    }

    getnode(id) {
        var temp = this.data;
        var x = temp.elements.filter(element => element.data !== undefined && element.id === id);
        console.log('acaddcdsc:',x);
        return x[0];
    }

    getnodefrom(range, id) {
        var temp = range;
        var find = 'no'
        Object.entries(temp).some(([key, value]) => { // scorre link modulo
            var elem = value;
            if(elem['id']===id){
                console.log('trovatooo:',elem);
                find = elem;
                return find;
            }
        });
        return find;
        //var x = temp.elements.filter(element => element.data !== undefined && element.id === id);
        //return x[0];
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

    gettargetlink(node_id) {
        var temp = this.data;
        var x = temp.elements.filter(element => element.id.includes("reactflow__edge") && (element.target === node_id));
        return x;
    }

    getsourcelink(node_id) {
        var temp = this.data;
        var x = temp.elements.filter(element => element.id.includes("reactflow__edge") && (element.source === node_id));
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

    gettopologynode(moduleid, node_id) {
        var n = this.getnode(moduleid);
        var topo = n['data']['topology'];
        console.log(topo);
        var nn = this.getnodefrom(topo, node_id);
        console.log('mnnnn;',node_id, nn);
        var x = nn;
        return x;
    }

}

export default parsedatatheater;