import downloadfile from "./DownloadFILE";

class parsedatamodule {
    constructor(f_name,data_m) {
        this.data = data_m;
        //CANCELLARE -> PER PROVARE UNA TOPOLOGIA
        this.data =
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
            "module_name": "example2",
            "module_description": "descrizione ex2",
            "version": "1.0"
        };
        this.output = {}
        this.reasume = {}
        this.parse(f_name);
    }

    parse(f_name) {
        //var output = {};
        // initial part
        this.output['tosca_definitions_version'] = 'cloudify_dsl_1_3';
        this.output['description'] = this.data['module_description'];
        this.output['imports'] = [
            { http: 'www.getcloudify.org/spec/cloudify/4.5.5/types.yaml' },
        ];
        this.output['imports'] = [
            ...this.output['imports'],
            { plugin: 'cloudify-openstack-plugin?version=2.14.7' },
            { plugin: 'cloudify-utilities-plugin' },
            { plugin: 'cloudify-ansible-plugin?version=2.6.0' },
            { plugin: 'sysman-creo-plugin?version=1.0' },
        ];
        this.output['version'] = this.data['version'];
        this.output['node_templates'] = {};

        this.getservers();
        this.getports();
        this.getcompletenetwork();

        this.

        console.log('parsed output:', JSON.stringify(this.output));
        new downloadfile(f_name, this.output, 'yaml')
    }

    getservers() {
        var allserver = this.getobjs('server');
        Object.entries(allserver).map(  // scorro i server
            ([key, value]) => {

                var server = {};
                var s;
                var links = [];

                let name_server = value['data']['label'];
                s = value;

                var rel = this.getlink(value['id']);
                Object.entries(rel).map( //scroll link del server
                    ([key, value]) => {

                        let iii = (value['target'] === s['id']) ? 'source' : 'target';
                        var porta = this.getnode(value[iii]); // get side node
                        porta = porta[0];

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
                var p;
                let name_port = value['data']['label'];
                p = value;
                var links = [];
                var sub, net;

                var rel = this.getlink(value['id']);
                Object.entries(rel).map( //scorro i link della porta
                    ([key, value]) => {

                        let iii = (value['target'] === p['id']) ? 'source' : 'target'; // get side node
                        sub = this.getnode(value[iii]);
                        sub = sub[0];

                        if (sub['type'] === 'subnet') { // se è subnet
                            var netlink = this.getlink(sub['id']);
                            Object.entries(netlink).map( // scorre i link della subnet
                                ([key, value]) => {

                                    let iii = (value.target === sub['id']) ? 'source' : 'target';
                                    net = this.getnode(value[iii]);
                                    net = net[0];

                                    if (net['type'] === 'network') { // se è network
                                        return;
                                    }
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

                        }

                    }
                );

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
        Object.entries(allserver).map(  // scorro i network
            ([key, value]) => {

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

                var rel = this.getlink(value['id']);
                Object.entries(rel).map( //scroll link del network
                    ([key, value]) => {

                        let iii = (value['target'] === n['id']) ? 'source' : 'target';
                        var sub = this.getnode(value[iii]); // get side node
                        sub = sub[0];

                        if (sub['type'] === 'subnet') { // se è subnet

                            var subnet = {}
                            var name_sub  = sub['data']['label']
                            var s = sub;

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
                    }
                );
            }
        );
    }


    base_blueprint(){
        
    }


    getobjs(type) {
        var temp = this.data;
        var x = temp.elements.filter(element => element.data !== undefined && element.type !== undefined && element.type === type);
        return x;
    }

    getnode(id) {
        var temp = this.data;
        var x = temp.elements.filter(element => element.data !== undefined && element.id === id);
        return x;
    }

    getlink(node_id) {
        var temp = this.data;
        var x = temp.elements.filter(element => element.id.includes("reactflow__edge") && (element.source === node_id || element.target === node_id));
        return x;
    }

}

export default parsedatamodule;

/*
        this.data = [
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
                "module_name": "example2",
                "module_description": "descrizione ex2",
                "version": "1.0"
            }
        ];
    */