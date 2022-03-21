import {
    Row,
    Col,
    Container,
    Button,
    Form
} from 'react-bootstrap';
import React, { useState, useRef } from 'react';

const Areas_node = (props) => {

    //console.log(props)
    const [areas, setAreas] = useState(props.areas);

    const an = useRef();
    const ad = useRef();

    function addArea() {
        //console.log('new area', an.current.value, ad.current.value)
        var x = {};
        function NEWarea(name, desc) {
            var temp = {
                area_name: name,
                area_desc: desc
            }
            this.area = temp;
        }
        var y = new Array();
        Object.entries(areas).map(
            ([key, value]) => {
                value = value.area;
                y.push(new NEWarea(value.area_name, value.area_desc));
            }
        );
        y.push(new NEWarea(an.current.value, ad.current.value));
        Object.entries(y).map(
            ([key, value]) => {
                var dict = {};
                dict = value;
                x[key] = dict;
            }
        );
        setAreas(x);
        props.onChange(x);
    }
    
    function removeArea(a_name) {
        var x = {};
        Object.entries(areas).map(
            ([key, value]) => {
                var ar = value.area;
                if (ar.area_name !== a_name)
                    x[key] = value;
            }
        )
        setAreas(x);
        props.onChange(x);
    }

    function updateArea(old_name,new_name, new_desc) { //TODO
        var x = {};
        Object.entries(areas).map(
            ([key, value]) => {
                var ar = value.area;
                if (ar.area_name === old_name) {
                    ar.area_name = new_name;
                    ar.area_desc = new_desc;
                }
                value.area = ar;
                x[key] = value;
            }
        )
        setAreas(x);
        props.onChange(x);
    }

    function showStoredAreas() {
        //console.log('shoAreas:', areas);
        var x = [];
        Object.entries(areas).map(
            ([key, value]) => {
                value = value.area;
                var name = value.area_name;
                var desc = value.area_desc;
                //console.log('nw: ', key, value)
                var y = (
                    < div key={key} >
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' style={{ display: 'table' }}>
                            <Col xs={12} md={5} lg={4} className='colDNI text-left justify-content-left' >
                                <h2 className='h2' style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>
                                    Area {key}
                                </h2>
                            </Col>
                        </Row>
                        {/* NAME */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI text-center' >
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>
                                        Area name
                                    </p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    //ref={}
                                    placeholder={name}
                                    style={{ fontSize: "1.4em" }}
                                //onChange={}
                                />
                            </Col>
                        </Row>
                        {/* DESCRIPTION */}
                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            <Col xs={12} md={5} lg={4} className='colDNI text-center'>
                                <Form.Label className="">
                                    <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>Description</p>
                                </Form.Label>
                            </Col>
                            <Col xs={12} md={7} lg={8}>
                                <Form.Control
                                    //ref={}
                                    /*as='textarea'*/
                                    placeholder={desc}
                                    style={{ fontSize: "1.4em" }}
                                //onChange={}
                                />
                            </Col>
                        </Row>

                        <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                            {/* <Col xs={12} md={5} lg={4} className='colDNI text-center'>
                                <Button variant='primary' onClick={() => { removeArea(name); console.log('eliminata area:', areas); }}> Modify Area </Button>
                            </Col> */}
                            <Col  /*xs={12} md={5} lg={4}*/ className='colDNI' style={{textAlign:'right'}}>
                                <Button variant='danger' onClick={() => { removeArea(name); console.log('eliminata area:', areas); }}> Remove Area </Button>
                            </Col>
                        </Row>

                    </div >
                );
                x.push(y);
            }
        );
        return (x);
    }

    const [CanvasNewArea, setshowCanvasNewArea] = useState({ text: 'Create new area', show: 'none', variant: 'success' })
    function switchAddArea() {
        if (CanvasNewArea.show === 'none') {
            setshowCanvasNewArea({ text: 'Close area creation', show: 'block', variant: 'warning' });
        } else {
            setshowCanvasNewArea({ text: 'Create new area', show: 'none', variant: 'success' });
        }
    }

    //console.log('Area stored:', areas);
    return (
        <Container className='cf px-1 py-2' style={{ fontSize: "0.8em", position: 'relative' }}>
            <Row className='mb-2'>
                <Col style={{ overflowX: 'auto' }} className='p-2'>
                    <h2 className=''>Areas:</h2>
                </Col>
            </Row>

            {showStoredAreas()}

            <Row className='mb-2'>
                <Col style={{ textAlign: 'center' }} className='p-2'>
                    <Button variant={CanvasNewArea.variant} onClick={() => { switchAddArea() }}> {CanvasNewArea.text} </Button>
                </Col>
            </Row>

            <div style={{ display: CanvasNewArea.show }}>
                {/* NAME */}
                <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                    <Col xs={12} md={5} lg={4} className='colDNI text-center' >
                        <Form.Label className="">
                            <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>
                                Area Name
                            </p>
                        </Form.Label>
                    </Col>
                    <Col xs={12} md={7} lg={8}>
                        <Form.Control
                            ref={an}
                            placeholder="insert area name"
                            style={{ fontSize: "1.4em" }}
                        //onChange={}
                        />
                    </Col>
                </Row>

                {/* DESCRIPTION */}
                <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                    <Col xs={12} md={5} lg={4} className='colDNI text-center'>
                        <Form.Label className="">
                            <p style={{ whiteSpace: 'nowrap', margin: 'auto', fontSize: '1.7em' }}>
                                Description
                            </p>
                        </Form.Label>
                    </Col>
                    <Col xs={12} md={7} lg={8}>
                        <Form.Control
                            ref={ad}
                            /*as='textarea'*/
                            placeholder="insert area description"
                            style={{ fontSize: "1.4em" }}
                        //onChange={}
                        />
                    </Col>
                </Row>

                <Row className='mb-2 mt-2 justify-content-center rowDNI' >
                    <Col xs={12} md={5} lg={4} className='colDNI text-center'>
                        <Button variant='success' onClick={() => { addArea() }}> Add Area </Button>
                    </Col>
                </Row>
            </div>

        </Container>
    );
}
export default Areas_node;