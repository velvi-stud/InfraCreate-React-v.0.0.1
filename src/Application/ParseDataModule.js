import downloadfile from "./DownloadFILE";

class parsedatamodule {
    constructor(f_name, data_m) {
        this.data = data_m;
        //CANCELLARE -> PER PROVARE UNA TOPOLOGIA
        this.data =
        {
            "elements": [
                {
                    "id": "reactflow__node-server-1644332435088",
                    "type": "server",
                    "position": {
                        "x": -225.88039927424455,
                        "y": 193.3359513753102
                    },
                    "data": {
                        "label": "server_1",
                        "description": "desc_s1",
                        "image": "image_1",
                        "flavor": {
                            "cpu": "4 ",
                            "hd": "100",
                            "ram": "32"
                        },
                        "userdata": {
                            "usr": "admin",
                            "pwd": "admin"
                        },
                        "name": "hn_s1"
                    }
                }, {
                    "id": "reactflow__node-port-1644332437862",
                    "type": "port",
                    "position": {
                        "x": 36.391303625163815,
                        "y": 35.581670956980716
                    },
                    "data": {
                        "label": "p1",
                        "description": "desc p1",
                        "properties": {
                            "default": "d1",
                            "type": "t1"
                        }
                    }
                }, {
                    "id": "reactflow__node-port-1644332440760",
                    "type": "port",
                    "position": {
                        "x": 34.23930609661005,
                        "y": 180.47908725944404
                    },
                    "data": {
                        "label": "p2",
                        "description": "desc p2",
                        "properties": {
                            "default": "d2",
                            "type": "t2"
                        }
                    }
                }, {
                    "id": "reactflow__node-port-1644332444338",
                    "type": "port",
                    "position": {
                        "x": 30.82702011752653,
                        "y": 362.97307922724383
                    },
                    "data": {
                        "label": "p3",
                        "description": "desc p3",
                        "properties": {
                            "default": "d3",
                            "type": "t3"
                        }
                    }
                }, {
                    "id": "reactflow__node-subnet-1644332448658",
                    "type": "subnet",
                    "position": {
                        "x": 299.2887199276271,
                        "y": -54.617187598131466
                    },
                    "data": {
                        "label": "subnet1",
                        "description": "desc s1",
                        "subnet": {
                            "ip_version": "4",
                            "cidr": {
                                "default": "cd1"
                            },
                            "allocation_pools": {
                                "allocation_pool_start": "1",
                                "allocation_pool_end": "1"
                            },
                            "enable_dhcp": true
                        }
                    }
                }, {
                    "id": "reactflow__node-subnet-1644332452112",
                    "type": "subnet",
                    "position": {
                        "x": 295.41157971846235,
                        "y": 144.77166786767287
                    },
                    "data": {
                        "label": "subnet2",
                        "description": "desc s2222",
                        "subnet": {
                            "ip_version": "16",
                            "cidr": {
                                "default": "cd1"
                            },
                            "allocation_pools": {
                                "allocation_pool_start": "2",
                                "allocation_pool_end": "2"
                            },
                            "enable_dhcp": false
                        }
                    }
                }, {
                    "id": "reactflow__node-subnet-1644332454978",
                    "type": "subnet",
                    "position": {
                        "x": 295.6364215913124,
                        "y": 368.6488080768376
                    },
                    "data": {
                        "label": "subnet3",
                        "description": "desc3",
                        "subnet": {
                            "ip_version": "4",
                            "cidr": {
                                "default": "cd3"
                            },
                            "allocation_pools": {
                                "allocation_pool_start": "3",
                                "allocation_pool_end": "3"
                            },
                            "enable_dhcp": false
                        }
                    }
                }, {
                    "id": "reactflow__node-network-1644332463084",
                    "type": "network",
                    "position": {
                        "x": 584.0544147948352,
                        "y": 141.68110023453676
                    },
                    "data": {
                        "label": "net_2_1",
                        "description": "desc 2",
                        "net_type": "provider",
                        "group": "Network_s1"
                    }
                }, {
                    "id": "reactflow__node-network-1644332464755",
                    "type": "network",
                    "position": {
                        "x": 587.5426995381956,
                        "y": -128.69889358684765
                    },
                    "data": {
                        "label": "net_1_1",
                        "description": "desc1 n1",
                        "net_type": "consumer",
                        "group": "Network 1_1"
                    }
                }, {
                    "id": "reactflow__node-network-1644332466408",
                    "type": "network",
                    "position": {
                        "x": 583.7649886065869,
                        "y": 371.96166477836505
                    },
                    "data": {
                        "label": "net_3_3",
                        "description": "sa inc.",
                        "net_type": "provider",
                        "group": "netwk_inc"
                    }
                }, {
                    "source": "reactflow__node-server-1644332435088",
                    "sourceHandle": "Insert node name",
                    "target": "reactflow__node-port-1644332437862",
                    "targetHandle": "Insert node name",
                    "id": "reactflow__edge-reactflow__node-server-1644332435088Insert node name-reactflow__node-port-1644332437862Insert node name",
                    "type": "default"
                }, {
                    "source": "reactflow__node-server-1644332435088",
                    "sourceHandle": "Insert node name",
                    "target": "reactflow__node-port-1644332440760",
                    "targetHandle": "Insert node name",
                    "id": "reactflow__edge-reactflow__node-server-1644332435088Insert node name-reactflow__node-port-1644332440760Insert node name",
                    "type": "default"
                }, {
                    "source": "reactflow__node-server-1644332435088",
                    "sourceHandle": "Insert node name",
                    "target": "reactflow__node-port-1644332444338",
                    "targetHandle": "Insert node name",
                    "id": "reactflow__edge-reactflow__node-server-1644332435088Insert node name-reactflow__node-port-1644332444338Insert node name",
                    "type": "default"
                }, {
                    "source": "reactflow__node-port-1644332437862",
                    "sourceHandle": "Insert node name",
                    "target": "reactflow__node-subnet-1644332448658",
                    "targetHandle": "Insert node name",
                    "id": "reactflow__edge-reactflow__node-port-1644332437862Insert node name-reactflow__node-subnet-1644332448658Insert node name",
                    "type": "default"
                }, {
                    "source": "reactflow__node-port-1644332440760",
                    "sourceHandle": "Insert node name",
                    "target": "reactflow__node-subnet-1644332452112",
                    "targetHandle": "Insert node name",
                    "id": "reactflow__edge-reactflow__node-port-1644332440760Insert node name-reactflow__node-subnet-1644332452112Insert node name",
                    "type": "default"
                }, {
                    "source": "reactflow__node-port-1644332444338",
                    "sourceHandle": "Insert node name",
                    "target": "reactflow__node-subnet-1644332454978",
                    "targetHandle": "Insert node name",
                    "id": "reactflow__edge-reactflow__node-port-1644332444338Insert node name-reactflow__node-subnet-1644332454978Insert node name",
                    "type": "default"
                }, {
                    "source": "reactflow__node-subnet-1644332448658",
                    "sourceHandle": "Insert node name",
                    "target": "reactflow__node-network-1644332464755",
                    "targetHandle": "Insert node name",
                    "id": "reactflow__edge-reactflow__node-subnet-1644332448658Insert node name-reactflow__node-network-1644332464755Insert node name",
                    "type": "default"
                }, {
                    "source": "reactflow__node-subnet-1644332452112",
                    "sourceHandle": "Insert node name",
                    "target": "reactflow__node-network-1644332463084",
                    "targetHandle": "Insert node name",
                    "id": "reactflow__edge-reactflow__node-subnet-1644332452112Insert node name-reactflow__node-network-1644332463084Insert node name",
                    "type": "default"
                }, {
                    "source": "reactflow__node-subnet-1644332454978",
                    "sourceHandle": "Insert node name",
                    "target": "reactflow__node-network-1644332466408",
                    "targetHandle": "Insert node name",
                    "id": "reactflow__edge-reactflow__node-subnet-1644332454978Insert node name-reactflow__node-network-1644332466408Insert node name",
                    "type": "default"
                }],
            "position": [219.02767854374633, 149.54388022674763],
            "zoom": 0.5070726728662823,
            "#elements": 19,
            "module_name": "elements",
            "module_description": "md1",
            "version": "2.0"
        };
        this.output = {}
        this.reasume = {}

        this._sub_net_ = [];
        this.getsubconnection();
        //console.log('sovnavljfnvlife:', this._sub_net_)

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

        this.base_blueprint();
        this.getservers();
        this.getports();
        this.getcompletenetwork();

        //console.log('parsed output:', JSON.stringify(this.output));
        new downloadfile(f_name, this.output, 'yaml')
    }

    base_blueprint() {
        var mn = this.data['module_name'];
        this.output['node_templates'][mn] = {};
        this.output['node_templates'][mn]['type'] = 'sysman.creo.nodes.TheaterModule';
        this.output['node_templates'][mn]['description'] = this.data['module_description'];
        this.output['node_templates'][mn]['version'] = this.data['version'];
        this.output['node_templates'][mn]['mode'] = 'Managed';
        this.output['node_templates'][mn]['interface_network'] = [
            { providers: [] },
            { consumers: [] }
        ];

        //for providers
        var providers = [];
        var temp = this.data;
        var prov = temp.elements.filter(element => element.data !== undefined && element.type === 'network' && element.data.net_type === 'provider');
        Object.entries(prov).map( //scroll link del network provider
            ([key, value]) => {
                var n = value;
                var net_if = {};
                net_if['interface'] = n.data.group;
                net_if['network'] = n.data.label
                net_if['subnets'] = [];
                var sub = this.getconnectiontotype(n['id'], 'subnet');
                Object.entries(sub).map( //scroll subnet net provider
                    ([key, value]) => {
                        var s = value;
                        net_if['subnets'] = [
                            ...net_if['subnets'],
                            { subnet: s.data.label },
                        ]
                    }
                );
                //console.log('++++++provider: ', net_if);
                providers = [
                    ...providers,
                    net_if,
                ]
            }
        );
        //for consumers
        var consumers = [];
        temp = this.data;
        var cons = temp.elements.filter(element => element.data !== undefined && element.type === 'network' && element.data.net_type === 'consumer');
        Object.entries(cons).map( //scroll link del network provider
            ([key, value]) => {
                var n = value;
                var net_if = {};
                net_if.interface = n['data']['group'];
                net_if.network = n['data']['label']
                net_if.subnets = [];
                var sub = this.getconnectiontotype(n['id'], 'subnet');
                Object.entries(sub).map( //scroll subnet net provider
                    ([key, value]) => {
                        var s = value;
                        net_if['subnets'] = [
                            ...net_if['subnets'],
                            { subnet: s['data']['label'] },
                        ]
                    }
                );
                //console.log('++++++consumer: ', net_if);
                consumers = [
                    ...consumers,
                    net_if,
                ]
            }
        );

        this.output['node_templates'][mn]['interface_network'] = [
            { providers: providers },
            { consumers: consumers }
        ];

        // for vm
        this.output['node_templates'][mn]['virtual_machines'] = [];

        var serv = this.getobjs('server');
        Object.entries(serv).map(([key, value]) => { // scroll server
            var s = value;
            var ports = [];
            var name_s = s['data']['label'];

            var ppp = this.getconnectiontotype(s['id'], 'port');
            Object.entries(ppp).map(([key, value]) => { // scroll port
                var p = value;
                var alls = [];
                var alln = [];

                var sss = this.getconnectiontotype(p['id'], 'subnet');
                Object.entries(sss).map(([key, value]) => {
                    var su = value;
                    var ne = this._sub_net_[su.id];
                    su = value.data.label;
                    alls = [
                        ...alls,
                        { subnet: su },
                    ]
                    ne = this.getnode(ne).data.label;
                    alln = ne;

                });

                var port = {
                    port: p['data']['label'],
                    network: alln,
                    subnets: alls,
                };

                ports.push(port);

            });

            class porte_vm {
                constructor(name_vm, ports_vm) {
                    this.virtual_machine = name_vm;
                    this.ports = ports_vm;
                }
            };

            var z = new porte_vm(name_s, ports);

            this.output['node_templates'][mn]['virtual_machines'] = [
                ...this.output['node_templates'][mn]['virtual_machines'],
                z,
            ]

            Object.entries(this.output['node_templates'][mn]['virtual_machines']).map(([key, value]) => {
                //console.log('ewwwwwwwwwww_.', this.output['node_templates'][mn]['virtual_machines'])
            });

        });

        //console.log('............:',this.reasume);
        // this.output['node_templates'][mn]= {};
        // this.output['node_templates'][mn]['description'] = this.output['node_templates'][mn].description;
        // this.output['node_templates'][mn]['version'] = this.output['node_templates'][mn].version;
        // this.output['node_templates'][mn]['module'] = this.output['node_templates'][mn].module;
        // this.output['node_templates'][mn]['interface_network'] = this.output['node_templates'][mn].interface_network;
        // this.output['node_templates'][mn]['virtual_machines'] = this.output['node_templates'][mn].virtual_machines;


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

    getsubconnection() {
        var rel = this.getobjs('subnet');
        Object.entries(rel).map(([key, value]) => {
            var s = value;
            var nnn = this.getconnectiontotype(s.id, 'network');
            Object.entries(nnn).map(([key, value]) => {
                var n = value;
                this._sub_net_[s.id] = n.id;
            });
        });
    }

}

export default parsedatamodule;