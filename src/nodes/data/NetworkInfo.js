import React from 'react';
import { Row, Form, Col } from 'react-bootstrap';
import '../../Application/all.css'


class PortInfo extends React.Component {

    /**
     * 
     * @param {*} dati 
     *      forma dati: ({ selected_element: undefined, show: false })
     * @returns 
     */
    constructor(elemento) {
        super();

        //console.log('network:', elemento);
        this.element = elemento;
        this.tipo = this.element.type;

        this._label = React.createRef(null);
        this._desc = React.createRef(null);
        this._lolcalif = React.createRef(null);
        this._remotelif = React.createRef(null);
        this._net_type = React.createRef(null);
    }


    updateNetworkData() {
        var label = this._label.current.value;
        if (label !== null && label !== '')
            this.element['data']['label'] = label;

        var description = this._desc.current.value;
        if (description !== null && description !== '')
            this.element['data']['description'] = description;

        var localif = this._lolcalif.current.value;
        if (localif !== null && localif !== ''){
            this.element['data']['local_interface'] = localif;
            this.element['data']['remote_interface'] = localif;
        }
        var remoteif = this._remotelif.current.value;
        if (remoteif !== null && remoteif !== '')
            this.element['data']['remote_interface'] = remoteif;

        var ntype = this._net_type.current.value;
        if (ntype !== null && ntype !== '')
            this.element['data']['net_type'] = ntype;
    }

    renderize() {
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
                                    placeholder={this.checkDataList(['data', 'description'], 'Insert node description')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateNetworkData()}
                                />
                            </Col>
                        </Row>

                        {/* local if */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Local IF</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._lolcalif}
                                    placeholder={this.checkDataList(['data', 'local_interface'], 'Local if name')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateNetworkData()}
                                />
                            </Col>
                        </Row>

                        {/* remote if */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}> Remote IF</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._remotelif}
                                    placeholder={this.checkDataList(['data', 'remote_interface'], 'Remote if name')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateNetworkData()}
                                />
                            </Col>
                        </Row>

                        {/* TYPE NET */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Type</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Select
                                    ref={this._net_type}
                                    aria-label="Default select"
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateNetworkData()}
                                >
                                    <option>{this.checkDataList(['data', 'net_type'], 'Select type')}</option>
                                    <option value="consumer"> Consumer </option>
                                    <option value="provider"> Provider </option>
                                    <option value="local"> Local </option>
                                </Form.Select>
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

export default PortInfo;