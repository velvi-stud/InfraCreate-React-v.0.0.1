import downloadfile from "./DownloadFILE";

class parsedatamodule {
    constructor(f_name, data_m) {
        this.data = data_m;

        this.output = {}
        this.reasume = {}

        this._sub_net_ = [];
        this.getsubconnection();
        //console.log('sovnavljfnvlife:', this._sub_net_)

        this.parse(f_name);
        new downloadfile(f_name, data_m, 'json')
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
        this.output['node_templates'][mn] = {
            type: '',
            properties: {}
        };
        this.output['node_templates'][mn]['type'] = 'sysman.creo.nodes.TheaterModule';
        this.output['node_templates'][mn]['properties']['description'] = this.data['module_description'];
        this.output['node_templates'][mn]['properties']['version'] = this.data['version'];
        this.output['node_templates'][mn]['properties']['mode'] = 'Managed';
        // this.output['node_templates'][mn]['properties']['constraints'] = {
        //     module_constraints: [],
        //     interface_constraints: [],
        //     network_constraints: [],
        // }

        this.output['node_templates'][mn]['properties']['interface_networks'] = [
            { providers: [] },
            { consumers: [] }
        ];
        this.output['node_templates'][mn]['properties']['internal_networks'] = [];


        //for providers
        var providers = [];
        var temp = this.data;
        var prov = temp.elements.filter(element => element.data !== undefined && element.type === 'network' && element.data.net_type === 'provider');
        Object.entries(prov).map(([key, value]) => { //scroll link del network provider
            var n = value;
            var net_if = {};
            net_if['interface'] = n['data']['local_interface'];
            net_if['network'] = n['data']['label'];
            net_if['tag'] = n['data']['local_interface'];
            net_if['subnets'] = [];

            var sub = this.getconnectiontotype(n['id'], 'subnet');
            Object.entries(sub).map(([key, value]) => {//scroll subnet net provider
                var s = value;
                net_if['subnets'] = [
                    ...net_if['subnets'],
                    { subnet: s['data']['label'] },
                ]
            });
            //console.log('++++++provider: ', net_if);
            providers = [
                ...providers,
                net_if,
            ]
        });

        //for consumers
        var consumers = [];
        temp = this.data;
        var cons = temp.elements.filter(element => element.data !== undefined && element.type === 'network' && element.data.net_type === 'consumer');
        Object.entries(cons).map(([key, value]) => {//scroll link del network consumer
            var n = value;
            var net_if = {};
            net_if['interface'] = n['data']['local_interface'];
            net_if['network'] = n['data']['label'];
            net_if['tag'] = n['data']['local_interface'];
            net_if['subnets'] = [];
            var sub = this.getconnectiontotype(n['id'], 'subnet');
            Object.entries(sub).map(([key, value]) => {//scroll subnet net consumer
                var s = value;
                net_if['subnets'] = [
                    ...net_if['subnets'],
                    { subnet: s['data']['label'] },
                ]
            });
            //console.log('++++++consumer: ', net_if);
            consumers = [
                ...consumers,
                net_if,
            ]

            // PUT HERE CONSTRAINT -> interface_constraint

        });

        //for locals
        var locals = [];
        temp = this.data;
        
        var locs = temp.elements.filter(element => element.data !== undefined && element.type === 'network' && element.data.net_type === 'local');
        Object.entries(locs).map(([key, value]) => { //scroll link del network local
            
            var n = value;
            var net_if = {};
            net_if['interface'] = n['data']['local_interface'];
            net_if['network'] = n['data']['label'];
            net_if['tag'] = n['data']['local_interface'];
            net_if['subnets'] = [];

            var sub = this.getconnectiontotype(n['id'], 'subnet');
            Object.entries(sub).map(([key, value]) => { //scroll subnet net local
                var s = value;
                net_if['subnets'] = [
                    ...net_if['subnets'],
                    { subnet: s['data']['label'] },
                ]
            });

            locals = [
                ...locals,
                net_if,
            ]
        });

        this.output['node_templates'][mn]['properties']['interface_networks'] = [
            { providers: providers },
            { consumers: consumers }
        ];

        this.output['node_templates'][mn]['properties']['internal_networks'] = locals;

        // for vm
        this.output['node_templates'][mn]['properties']['virtual_machines'] = [];

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

            this.output['node_templates'][mn]['properties']['virtual_machines'] = [
                ...this.output['node_templates'][mn]['properties']['virtual_machines'],
                z,
            ]

            Object.entries(this.output['node_templates'][mn]['properties']['virtual_machines']).map(([key, value]) => {
                //console.log('ewwwwwwwwwww_.', this.output['node_templates'][mn]['properties']['virtual_machines'])
            });

        });

        //console.log('............:',this.reasume);
        // this.output['node_templates'][mn]['properties']= {};
        // this.output['node_templates'][mn]['properties']['description'] = this.output['node_templates'][mn]['properties'].description;
        // this.output['node_templates'][mn]['properties']['version'] = this.output['node_templates'][mn]['properties'].version;
        // this.output['node_templates'][mn]['properties']['module'] = this.output['node_templates'][mn]['properties'].module;
        // this.output['node_templates'][mn]['properties']['interface_network'] = this.output['node_templates'][mn]['properties'].interface_network;
        // this.output['node_templates'][mn]['properties']['virtual_machines'] = this.output['node_templates'][mn]['properties'].virtual_machines;


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
                server['server'] = [];
                server['server'] = [
                    {name: s['data']['name']},
                    {image: s['data']['image']},
                    {flavor: s['data']['flavour']},
                    {userdata: s['data']['userdata']}
                ]
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
                local_interface: n['data']['local_interface'],
                remote_interface: n['data']['remote_interface'],
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