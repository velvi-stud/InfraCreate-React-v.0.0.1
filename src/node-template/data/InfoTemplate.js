import React from 'react';
import { Row, Container, Form, Col } from 'react-bootstrap';
import './all.css'


class DataNodeInfo extends React.Component {

    /**
     * 
     * @param {*} dati 
     *      forma dati: ({ selected_element: undefined, show: false })
     * @returns 
     */
    constructor(dati) {
        super();
        //console.log('dni:', dati);
        if (dati === undefined || dati.selected_element === undefined || dati.selected_element === '') {
            this.show = false;
            this.element = '';
            this.tipo = '';
            return;
        }
        else {
            this.element = dati.selected_element;
            this.tipo = this.element.type;
            this.show = dati.show;
        }
        this.initializeData();
        this.updateNetworkData = this.updateNetworkData.bind(this);
    }

    /* Reference for data into html */
    initializeData() {
        switch (this.tipo) {
            case 'server':
                this._label = React.createRef(null);
                this._desc = React.createRef(null);
                this._name = React.createRef(null);
                this._img = React.createRef(null);
                this._cpu = React.createRef(null);
                this._hd = React.createRef(null);
                this._ram = React.createRef(null);
                this._usr = React.createRef(null);
                this._pwd = React.createRef(null);
                this.images = [
                    { nome_img: 'image_1', os_img: 'Linux' },
                    { nome_img: 'image_2', os_img: 'Fedora' },
                    { nome_img: 'image_3', os_img: 'MacOSx' },
                    { nome_img: 'image_4', os_img: 'CentOS' }
                ];
                this.update_os = React.createRef(null);
                break;

            case 'port':
                this._label = React.createRef(null);
                this._desc = React.createRef(null);
                this._default = React.createRef(null);
                this._type = React.createRef(null);
                break;

            case 'network':
                this._label = React.createRef(null);
                this._desc = React.createRef(null);
                this._groupname = React.createRef(null);
                break;

            case 'subnet':
                this._label = React.createRef(null);
                this._desc = React.createRef(null);
                this._ip_version = React.createRef(null); //subnet:
                this._default = React.createRef(null); //cidr:
                this._allocation_pools_start = React.createRef(null); // allocation_pools:
                this._allocation_pools_end = React.createRef(null);
                this._enable_dhcp = React.createRef(null);
                this.state = {
                    trycheck: null,
                }
                break;
            default:
                break;
        }

    }

    // usato per ritornare una struttura di default quando non è stato riconosciuto un nodo.
    undefined_data() {
        return (
            <Row className='text-center align-center justify-content-center'>
                <p>Tipo non riconosciuto</p>
            </Row>
        );
    }

    // usato per prendere i dati dai form DEL SERVER.
    updateServerData() {
        var label = this._label.current.value;
        if (label !== null && label !== '')
            this.element['data']['label'] = label;

        var desc = this._desc.current.value;
        if (desc !== null && desc !== '')
            this.element['data']['desc'] = desc;

        var name = this._name.current.value;
        if (name !== null && name !== '')
            this.element['data']['$name'] = name;

        var img = this._img.current.value;
        if (img !== null && img !== '')
            this.element['data']['$image'] = img;
        if (img !== null && img !== undefined && img !== '' && img !== 'Select image') {
            var l = this.images.find(x => x.nome_img === img).os_img;
            //console.log(this.update_os);
            this.update_os.current.innerHTML = l;
        }


        var flavour = {
            $cpu: this._cpu.current.value,
            $hd: this._hd.current.value,
            $ram: this._ram.current.value
        };
        if (flavour !== null && flavour !== '')
            this.element['data']['$flavor'] = (flavour);

        var userdata = {
            $usr: this._usr.current.value,
            $pwd: this._pwd.current.value
        };
        if (userdata !== null && userdata !== '')
            this.element['data']['$userdata'] = (userdata);

        return;
    }

    // ritorna la struttura i/o per i DEL SERVER
    server_data() {

        const updateimg = () => {
            var items = []
            for (const [index, value] of this.images.entries()) {
                console.log(index, value);
                items.push(<option value={value.nome_img}>{value.nome_img}</option>)
            }
            return (
                <>
                    {items}
                </>
            )
        }


        return (
            <Row style={{ width: '100%', }} className='text-center align-center justify-content-center'>
                <Form className="pl-3 pr-3">
                    <Form.Group controlId="ControlTextarea">

                        {/* NODE NAME */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label>
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Server name</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._label}
                                    placeholder={this.checkDataList(['data', 'label'], 'Insert node name')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateServerData()}
                                />
                            </Col>
                        </Row>

                        {/* DESCRIPTION */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Description</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._desc}
                                    /*as='textarea'*/
                                    placeholder={this.checkDataList(['data', 'desc'], 'Insert node description')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateServerData()}
                                />
                            </Col>
                        </Row>

                        {/* HOST NAME */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI'>
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Host name</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8} /*style={{paddingLeft:'0'}}*/>
                                <Form.Control
                                    ref={this._name}
                                    placeholder={this.checkDataList(['data', '$name'], 'Insert server host-name')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateServerData()}
                                />
                            </Col>
                        </Row>

                        {/* IMG SERV */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Server image</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Select
                                    ref={this._img}
                                    aria-label="Default select"
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateServerData()}
                                >
                                    <option >{this.checkDataList(['data', '$image'], 'Select image')} </option>
                                    {updateimg()}
                                    {/* <option value="Linux ">Linux  </option>
                                    <option value="Fedora">Fedora </option>
                                    <option value="MacOSx">MacOSx </option>
                                    <option value="CentOS">CentOS </option> */}
                                </Form.Select>
                            </Col>
                            <p ref={this.update_os} style={{ marginBottom: '0', fontSize: '1.3em', textAlign: 'end', paddingRight: '2em' }}></p>
                        </Row>


                        {/* FLAVOR */}
                        {/* CPU */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Server CPU</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Select
                                    ref={this._cpu}
                                    aria-label="Default select"
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateServerData()}
                                >
                                    <option>{this.checkDataList(['data', '$flavor', '$cpu'], 'Select size')}</option>
                                    <option value="4 ">4 core  </option>
                                    <option value="8">8 core </option>
                                    <option value="16">16 core </option>
                                    <option value="32">32 core </option>
                                </Form.Select>
                            </Col>
                        </Row>

                        {/* HD */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Server HD</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Select
                                    ref={this._hd}
                                    aria-label="Default select"
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateServerData()}
                                >
                                    <option>{this.checkDataList(['data', '$flavor', '$hd'], 'Select size')} </option>
                                    <option value="50">50 GB  </option>
                                    <option value="100">100 GB</option>
                                    <option value="500">500 GB</option>
                                    <option value="100">1000 GB</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        {/* RAM */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Server RAM</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Select
                                    ref={this._ram}
                                    aria-label="Default select"
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateServerData()}
                                >
                                    <option>{this.checkDataList(['data', '$flavor', '$ram'], 'Select size')} </option>
                                    <option value="8 ">8 GB  </option>
                                    <option value="16">16 GB</option>
                                    <option value="32">32 GB </option>
                                    <option value="64">64 GB</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        {/* USERDATA */}
                        {/* USER-NAME */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >

                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Username </p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._usr}
                                    placeholder={this.checkDataList(['data', '$userdata', '$usr'], 'Insert node name')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateServerData()}
                                />
                            </Col>
                        </Row>

                        {/* PASSWORD */}
                        <Row className='mb-2 mt-2 justify-content-center text-center align-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="m-0">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Password</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._pwd}
                                    placeholder={this.checkDataList(['data', '$userdata', '$pwd'], 'Insert node name')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateServerData()}
                                />
                            </Col>
                        </Row>



                        {/* <Button className="mt-3" as="input" type="button" value="Submit" style={{ fontSize: "1.4em", }} onClick={() =>this.pickdata()}></Button>*/}

                    </Form.Group >
                </Form >
            </Row >
        );
    }

    updatePortData() {
        var label = this._label.current.value;
        if (label !== null && label !== '')
            this.element['data']['label'] = label;

        var desc = this._desc.current.value;
        if (desc !== null && desc !== '')
            this.element['data']['desc'] = desc;

        var properties = {
            $default: this._default.current.value,
            $type: this._type.current.value,
        };

        this.element['data']['$properties'] = properties;

    }

    port_data() {
        return (
            <Row style={{ width: '100%', }} className='text-center align-center justify-content-center'>
                <Form className="pl-3 pr-3">
                    <Form.Group controlId="ControlTextarea">

                        {/* NODE NAME */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Port name</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._label}
                                    placeholder={this.checkDataList(['data', 'label'], 'Insert node name')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updatePortData()}
                                />
                            </Col>
                        </Row>

                        {/* DESCRIPTION */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Description</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._desc}
                                    /*as='textarea'*/
                                    placeholder={this.checkDataList(['data', 'desc'], 'Insert node description')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updatePortData()}
                                />
                            </Col>
                        </Row>

                        {/* DEFAULT */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Default</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._default}
                                    placeholder={this.checkDataList(['data', '$properties', '$default'], 'Insert node default')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updatePortData()}
                                />
                            </Col>
                        </Row>

                        {/* TYPE */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Type</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._type}
                                    placeholder={this.checkDataList(['data', '$properties', '$type'], 'Insert node type')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updatePortData()}
                                />
                            </Col>
                        </Row>


                    </Form.Group >
                </Form >
            </Row >
        );
    }

    updateNetworkData() {
        var label = this._label.current.value;
        if (label !== null && label !== '')
            this.element['data']['label'] = label;

        var desc = this._desc.current.value;
        if (desc !== null && desc !== '')
            this.element['data']['desc'] = desc;

        var gname = this._groupname.current.value;
        if (desc !== null && desc !== '')
            this.element['data']['$group'] = gname;
    }

    network_data() {
        return (
            <Row style={{ width: '100%', }} className='text-center align-center justify-content-center'>
                <Form className="pl-3 pr-3">
                    <Form.Group controlId="ControlTextarea">

                        {/* NODE NAME */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Net name</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._label}
                                    placeholder={this.checkDataList(['data', 'label'], 'Insert node name')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateNetworkData()}
                                />
                            </Col>
                        </Row>

                        {/* DESCRIPTION */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Description</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._desc}
                                    /*as='textarea'*/
                                    placeholder={this.checkDataList(['data', 'desc'], 'Insert node description')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateNetworkData()}
                                />
                            </Col>
                        </Row>

                        {/* GROUP NAME */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Group name</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._groupname}
                                    placeholder={this.checkDataList(['data', '$group'], 'Insert group name')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateNetworkData()}
                                />
                            </Col>
                        </Row>


                    </Form.Group >
                </Form >
            </Row >
        );
    }

    updateSubnetData() {
        var label = this._label.current.value;
        if (label !== null && label !== '')
            this.element['data']['label'] = label;

        var desc = this._desc.current.value;
        if (desc !== null && desc !== '')
            this.element['data']['desc'] = desc;

        var cidr = {
            $default: this._default.current.value,
        }

        //if (this._allocation_pools_start !== undefined && this._allocation_pools_end !== undefined)
        var allocation_pools = {
            $allocation_pool_start: this._allocation_pools_start.current.value,
            $allocation_pool_end: this._allocation_pools_end.current.value,
        }
        var subnet = {
            $ip_version: this._ip_version.current.value,
            $cidr: cidr,
            $allocation_pools: allocation_pools,
            $enable_dhcp: this._enable_dhcp.current.checked,
        };

        this.element['data']['$subnet'] = subnet;
    }

    subnet_data() {
        this.state.trycheck = null;

        var x = this.checkDataList(['data', '$subnet', '$enable_dhcp'], 'null')
        if (x !== 'null') {
            this.state.trycheck = x;
        }

        const change = () => {
            this.state.trycheck = !this.state.trycheck;
        }

        return (
            <Row style={{ width: '100%', }} className='text-center align-center justify-content-center' >
                <Form className="pl-3 pr-3">
                    <Form.Group controlId="ControlTextarea">

                        {/* NODE NAME */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Node name</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._label}
                                    placeholder={this.checkDataList(['data', 'label'], 'Insert node name')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateSubnetData()}
                                />
                            </Col>
                        </Row>

                        {/* DESCRIPTION */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Description</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._desc}
                                    /*as='textarea'*/
                                    placeholder={this.checkDataList(['data', 'desc'], 'Insert node description')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateSubnetData()}
                                />
                            </Col>
                        </Row>

                        {/* IP VERSION */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Ip version</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Select
                                    ref={this._ip_version}
                                    aria-label="Default select"
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateSubnetData()}
                                >
                                    <option >{this.checkDataList(['data', '$subnet', '$ip_version'], 'Select version')} </option>
                                    <option value="4"> 4  </option>
                                    <option value="16"> 16 </option>
                                </Form.Select>
                            </Col>
                        </Row>


                        {/* DESCRIPTION */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}> Cidr def. </p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._default}
                                    placeholder={this.checkDataList(['data', '$subnet', '$cidr', '$default'], 'Insert node description')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateSubnetData()}
                                />
                            </Col>
                        </Row>

                        {/* Allocation pools */}
                        <p className='rowDNI' style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em', float: 'left' }}> Allocation pool: </p>
                        <br></br>
                        <br></br>
                        {/* Allocation pools start */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em', }}> Start pool </p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._allocation_pools_start}
                                    placeholder={this.checkDataList(['data', '$subnet', '$allocation_pools', '$allocation_pool_start'], 'Insert start ip')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateSubnetData()}
                                />
                            </Col>
                        </Row>

                        {/* Allocation pools end */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em', }}> End pool </p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._allocation_pools_end}
                                    placeholder={this.checkDataList(['data', '$subnet', '$allocation_pools', '$allocation_pool_end'], 'Insert end ip')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateSubnetData()}
                                />
                            </Col>
                        </Row>

                        {/* ENABLE DHCP */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Enable dhcp</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8} style={{ margin: 'auto' }}>
                                <Form.Check
                                    ref={this._enable_dhcp}
                                    defaultChecked={this.state.trycheck}
                                    type="switch"
                                    id="custom-switch"
                                    //onClick={()=>{this.}}
                                    onChange={() => this.updateSubnetData()}
                                />
                            </Col>
                        </Row>

                    </Form.Group >
                </Form >
            </Row >
        );
    }

    checkDataList(str, def) {
        var o = this.element;
        for (var x of str) {
            o = o[x];
            if (o === undefined || o === null || o === '') {
                //console.log(x + ' NON presente');
                return def;
            }
            //console.log('presente, valore o: ' + o);
        }
        return o;
        //console.log('valore finale di o: ', o);
    }

    switch_data() {
        console.log('tipo selezionato: ', this.tipo);
        var x = null;
        switch (this.tipo) {
            case 'server':
                x = this.server_data();
                break;
            case 'port':
                x = this.port_data();
                break;
            case 'network':
                x = this.network_data();
                break;
            case 'subnet':
                x = this.subnet_data();
                break;

            default:
                x = this.undefined_data();
                break;
        }
        return (x);
    }

    ///// struttura contenente gli elementi da mostrare in base al tipo //////
    renderize() {
        if (this.show) {
            return (
                <div className='vheight'>
                    {/* <div className='justify-content-center text-center m-2' style={{ overflowX: 'scroll', overflowY: 'hidden', minHeight:'5vh',maxHeight: '5vh', }}>
                        <h2 className='d-inline mb-3'>
                            {this.element['data']['label']}
                            <cite className='d-inline' style={{ fontSize: '0.5em' }}>{this.tipo} </cite>
                        </h2>
                    </div>*/}
                    <Container className='cf px-1 py-2' style={{ direction: 'rtl', overflowX: 'hidden', overflowY: 'scroll', fontSize: "0.8em", position: 'relative' }}>
                        <Row className='mb-2'>
                            <Col style={{ overflowX: 'auto' }} className='p-2'>
                                <h2 className='d-inline mb-3'>{this.element['data']['label']}</h2>
                                <h2 className='d-inline' style={{ fontSize: '1em' }}>{this.tipo} </h2>
                            </Col>
                        </Row>
                        {this.switch_data()}
                        {/* https://stackoverflow.com/questions/526035/how-can-i-position-my-div-at-the-bottom-of-its-container */}
                        {/* <Row style={{ position: 'absolute', bottom: '0', opacity: '50%' }}>
                            {JSON.stringify(this.element)}
                        </Row> */}
                    </Container>
                </div>
            );
        }
        else {
            return (null);
        }
    }

}

export default DataNodeInfo;