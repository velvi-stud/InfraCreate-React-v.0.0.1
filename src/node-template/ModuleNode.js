//import React from 'react';
import module_temp from './ModuleTemplate.js';

class ModuleNode {

    constructor() {
        this.type = "Module";
        this.style = {
            background: 'pink',
            color: 'black',
            //borderRadius: '2em',
            padding: 10,
            height: 'auto',
        };
        this.portstyle = {
            borderRadius: 0,
            height: '0.8em',
            width: '0.5em',
        };

        this.JsonExport = [
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
        ];

        this.meta = module_temp(this.type, this.style, this.portstyle, this.portstyle, this.JsonExport);
    }

    getType() {
        return this.type;
    }
    getStyle() {
        return this.style;
    }
    getMeta() {
        return this.meta;
    }

}
export default ModuleNode;
