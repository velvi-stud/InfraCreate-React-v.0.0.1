import React from 'react';
import { Row, Form, Col } from 'react-bootstrap';
import '../../Application/all.css'
import _ from 'lodash';
import { Accordion } from 'react-bootstrap';
import ReactFlow, { ReactFlowProvider, Controls } from 'react-flow-renderer';
import AllTypeNodes from '../AllTypeNodes';


class ModuleInfo extends React.Component {

    /**
     *
     * @param {*} dati
     *      forma dati: ({ selected_element: undefined, show: false })
     * @returns
     */
    constructor(elemento, areas) {
        super();
        this.element = elemento;
        this.tipo = this.element.type;
        this.areas = areas;

        // this._label = React.createRef(null);
        this._desc = React.createRef(null);
        this._area = React.createRef(null);

        this.ATN = new AllTypeNodes();
        this.node_types = this.ATN.GetObj();
    }


    updateModuleData() {
        // var label = this._label.current.value;
        // if (label !== null && label !== '')
        //     this.element['data']['label'] = label;
        var desc = this._desc.current.value;
        if (desc !== null && desc !== '')
            this.element['data']['desc'] = desc;
        var area = this._area.current.value;
        if (area !== null && area !== '')
            this.element['data']['$area'] = area;

    }


    renderize() {



        const showAreas = () => {
            var items = []
            console.log('areassssss:', this.areas);
            if (this.areas !== undefined || this.areas === {}) {
                Object.entries(this.areas).map(
                    ([key, value]) => {
                        value = value.area;
                        var name = value.$area_name;
                        items.push(<option key={name} value={name}>{name}</option>)
                    }
                );
                if (_.size(items) === 0) {
                    return (
                        items.push(<option key={'none'} value={'none'}> no area available </option>)
                    )
                }
            }
            else {
                return (
                    items.push(<option key={'none'} value={'none'}> no area available </option>)
                )
            }
            return (
                <>
                    {items}
                </>
            )
        }


        console.log(this.element);

        return (
            <Row style={{ width: '100%', }} className='text-center align-center justify-content-center'>
                <Form className="pl-3 pr-3">
                    <Form.Group controlId="ControlTextarea">


                        <Accordion defaultActiveKey={['0']} style={{direction:'ltr'}} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> Module Topology </Accordion.Header>
                                <Accordion.Body style={{padding:0}}>
                                    <div
                                        style={{
                                            width: "auto",
                                            height: "30vh",
                                            overflow: "visible",
                                            // fontSize: "1px",
                                            // pointerEvents: "none",
                                            background: "white",
                                            //display: BTN.display
                                        }}
                                    >
                                        <ReactFlowProvider>
                                            <ReactFlow
                                                maxZoom={2}
                                                defaultZoom={0.5}
                                                defaultPosition={[0, 0]}
                                                zoomOnPinch={true}
                                                panOnScroll={true}
                                                elements={this.element['data']['topology']}
                                                nodeTypes={this.node_types}
                                                snapToGrid={true}
                                                nodesDraggable={false}
                                                nodesConnectable={true}
                                            />
                                            <Controls></Controls>
                                        </ReactFlowProvider>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                        {/* NODE NAME */}
                        {/* <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Module name</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    ref={this._label}
                                    placeholder={this.checkDataList(['data', 'label'], 'Insert node name')}
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateModuleData()}
                                />
                            </Col>
                        </Row> */}

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
                                    onChange={() => this.updateModuleData()}
                                />
                            </Col>
                        </Row>

                        {/* AREAS */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}> Module area </p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Select
                                    ref={this._area}
                                    aria-label="Default select"
                                    style={{ fontSize: "1.4em" }}
                                    onChange={() => this.updateModuleData()}
                                >
                                    <option >{this.checkDataList(['data', '$area'], 'Select area')} </option>
                                    {showAreas()}
                                    {/* <option value="Linux ">Linux  </option>
                                    <option value="Fedora">Fedora </option>
                                    <option value="MacOSx">MacOSx </option>
                                    <option value="CentOS">CentOS </option> */}
                                </Form.Select>
                            </Col>
                            <p ref={this.update_os} style={{ marginBottom: '0', fontSize: '1.3em', textAlign: 'end', paddingRight: '2em' }}></p>
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

export default ModuleInfo;