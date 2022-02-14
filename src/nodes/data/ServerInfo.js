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

        //console.log('server:', elemento);
        this.element = elemento;
        this.tipo = this.element.type;

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
    }


    updateServerData() {
        var label = this._label.current.value;
        if (label !== null && label !== '')
            this.element['data']['label'] = label;

        var description = this._desc.current.value;
        if (description !== null && description !== '')
            this.element['data']['description'] = description;

        var name = this._name.current.value;
        if (name !== null && name !== '')
            this.element['data']['name'] = name;

        var img = this._img.current.value;
        if (img !== null && img !== '')
            this.element['data']['image'] = img;
        if (img !== null && img !== undefined && img !== '' && img !== 'Select image') {
            var l = this.images.find(x => x.nome_img === img).os_img;
            //console.log(this.update_os);
            this.update_os.current.innerHTML = l;
        }


        var flavour = {
            cpu: this._cpu.current.value,
            hd: this._hd.current.value,
            ram: this._ram.current.value
        };
        if (flavour !== null && flavour !== '')
            this.element['data']['flavour'] = (flavour);

        var userdata = {
            usr: this._usr.current.value,
            pwd: this._pwd.current.value
        };
        if (userdata !== null && userdata !== '')
            this.element['data']['userdata'] = (userdata);

        return;
    }

    renderize() {
        const showImg = () => {
            var items = []
            for (const [index, value] of this.images.entries()) {
                //console.log(index, value);
                items.push(<option key={value.nome_img} value={value.nome_img}>{value.nome_img}</option>)
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
                                    placeholder={this.checkDataList(['data', 'description'], 'Insert node description')}
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
                                    placeholder={this.checkDataList(['data', 'name'], 'Insert server host-name')}
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
                                    <option >{this.checkDataList(['data', 'image'], 'Select image')} </option>
                                    {showImg()}
                                    {/* <option value="Linux ">Linux  </option>
                                    <option value="Fedora">Fedora </option>
                                    <option value="MacOSx">MacOSx </option>
                                    <option value="CentOS">CentOS </option> */}
                                </Form.Select>
                            </Col>
                            <p ref={this.update_os} style={{ marginBottom: '0', fontSize: '1.3em', textAlign: 'end', paddingRight: '2em' }}></p>
                        </Row>


                        {/* FLAVOUR */}
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
                                    <option>{this.checkDataList(['data', 'flavour', 'cpu'], 'Select size')}</option>
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
                                    <option>{this.checkDataList(['data', 'flavour', 'hd'], 'Select size')} </option>
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
                                    <option>{this.checkDataList(['data', 'flavour', 'ram'], 'Select size')} </option>
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
                                    placeholder={this.checkDataList(['data', 'userdata', 'usr'], 'Insert node name')}
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
                                    placeholder={this.checkDataList(['data', 'userdata', 'pwd'], 'Insert node name')}
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