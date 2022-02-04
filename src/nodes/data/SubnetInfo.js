import React from 'react';
import { Row, Form, Col } from 'react-bootstrap';
import '../../Application/all.css'


class SubnetInfo extends React.Component {

    /**
     * 
     * @param {*} dati 
     *      forma dati: ({ selected_element: undefined, show: false })
     * @returns 
     */
    constructor(elemento) {
        super();
        
        //console.log('subnet:', elemento);
        this.element = elemento;
        this.tipo = this.element.type;

        this._label = React.createRef(null);
        this._desc = React.createRef(null);
        this._ip_version = React.createRef(null); //subnet:
        this._default = React.createRef(null); //cidr:
        this._allocation_pools_start = React.createRef(null); // allocation_pools:
        this._allocation_pools_end = React.createRef(null);
        this._enable_dhcp = React.createRef(null);
        this.state = null;
        this.renderize= this.renderize.bind(this);
    }

    componentDidMount() {
        this.renderize();
     }

    updateSubnetData() {
        var label = this._label.current.value;
        if (label !== null && label !== '')
            this.element['data']['label'] = label;

        var description = this._desc.current.value;
        if (description !== null && description !== '')
            this.element['data']['description'] = description;

        var cidr = {
            default: this._default.current.value,
        }

        //if (this._allocation_pools_start !== undefined && this._allocation_pools_end !== undefined)
        var allocation_pools = {
            allocation_pool_start: this._allocation_pools_start.current.value,
            allocation_pool_end: this._allocation_pools_end.current.value,
        }
        var subnet = {
            ip_version: this._ip_version.current.value,
            cidr: cidr,
            allocation_pools: allocation_pools,
            enable_dhcp: this._enable_dhcp.current.checked,
        };

        this.element['data']['subnet'] = subnet;
    }

    renderize() {
        this.state= null;

        var x = this.checkDataList(['data', 'subnet', 'enable_dhcp'], 'null')
        if (x !== 'null') {
            this.state = x;
        }

        // const change = () => {
        //     this.setState({
        //         trycheck: !this.state.trycheck
        //       })
        // }

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
                                    placeholder={this.checkDataList(['data', 'description'], 'Insert node description')}
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
                                    <option >{this.checkDataList(['data', 'subnet', 'ip_version'], 'Select version')} </option>
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
                                    placeholder={this.checkDataList(['data', 'subnet', 'cidr', 'default'], 'Insert node description')}
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
                                    placeholder={this.checkDataList(['data', 'subnet', 'allocation_pools', 'allocation_pool_start'], 'Insert start ip')}
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
                                    placeholder={this.checkDataList(['data', 'subnet', 'allocation_pools', 'allocation_pool_end'], 'Insert end ip')}
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
                                    defaultChecked={this.state}
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


}

export default SubnetInfo;