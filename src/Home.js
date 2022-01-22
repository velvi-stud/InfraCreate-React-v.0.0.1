import React, { createRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTANTE -> IMPORTARE
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import iac from './images/coop/iac_img.jpg'


import { useDispatch } from 'react-redux';
import {modify} from './reducers/actions/Actions.js';

const Home = () => {

    const [mod, setMod] = useState({ tipo: '', show: false });
    const [disp, setDisp] = useState('block');

    const nome = createRef();
    const descrizione = createRef();

    const dispatch = useDispatch();

    const history = useHistory();

    const updateMod = (tipo, show) => {
        const tm = { tipo, show };
        //console.log(tm, mod);
        if (tm.tipo === mod.tipo) {
            setDisp('none')
            tm.tipo = '';
            tm.show = false;
            mod.tipo = !mod.tipo;
            return;
        }
        setDisp('block')
        setMod(tm);
        return;
    }

    const routeChange = () => {
        let path = `Application`;
        history.push(path);
    }

    const pickdata = () => {
        var name = nome.current.value; // prendere il valore dello stato corrente dell'elemto riferito da "nome"
        var description = descrizione.current.value; // prendere il valore dello stato corrente dell'elemto riferito da "descrizione"
        var type = mod.tipo;
        var z = { type, name, description };
        console.log("z: ", z);
        /* REDUX TO PASS DATA */
        var newinfo = {
            type: type,
            name: name,
            description: description
        }
        dispatch({ data:newinfo, type:'datapass'});
        /* CHANGE ROUTE */
        routeChange();
    }

    const showInput = () => {
        if (mod.show) {
            return (
                <Container>
                    <Row className='text-center align-center justify-content-center'>
                        <Col xs={12} md={9} lg={6} className='shadow mt-2 p-5'>
                            <Form className="pl-3 pr-3">
                                <Form.Group className="" controlId="ControlTextarea">
                                    <Form.Label className="">
                                        <h3 className="d-inline">Insert</h3>
                                        <h3 className="d-inline" style={{ color: "#0d6efd", }}> {mod.tipo} </h3>
                                        <h3 className="d-inline">name</h3>
                                    </Form.Label>
                                    <Form.Control ref={nome} placeholder='Insert name' style={{ fontSize: "1.4em" }} />
                                    <Form.Label className="mt-4">
                                        <h3 className="d-inline">Insert</h3>
                                        <h3 className="d-inline" style={{ color: "#0d6efd", }}> {mod.tipo} </h3>
                                        <h3 className="d-inline">description</h3>
                                    </Form.Label>
                                    <Form.Control ref={descrizione} as="textarea" placeholder='Insert description' style={{ fontSize: "1.4em" }} />
                                    <Button className="mt-3" as="input" type="button" value="Submit" style={{ fontSize: "1.4em", }} onClick={() => pickdata()} />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else {
            return null;
        }
    }



    /**************************  RENDER  ********************** */

    return (
        <div id='hdiv' className='mt-5 container-fluid text-center justify-content-center' ref={(el) => {
            if (el) {
                el.style.setProperty('margin-top', '1vh', 'important');
            }
        }}>
            <Container className='container-fluid'>
                <Row>
                    <h1 className='display-1' style={{ fontSize: '4em' }}>
                        Cyber Range Theater Constructor
                    </h1>
                </Row>
                <Row>
                    <h3>
                        Visual design orchestration for infrastructure system
                    </h3>
                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={6} lg={6} >
                        <Button className=" outline-primary lg h1 text-center" style={{ fontSize: "1.8em", }} onClick={() => updateMod('theater', true)} > Create Theater </Button>
                    </Col>
                    <Col xs={12} md={6} lg={6} >
                        <Button className=" outline-primary lg h1 text-center" style={{ fontSize: "1.8em", }} onClick={() => updateMod('module', true)}> Create Module </Button>
                    </Col>
                </Row>

                <div style={{ display: disp }}>
                    {showInput()}
                </div>

                <img src={iac} width={'60%'} height={'50%'} className='mt-5'></img>

                <Row className="mt-5">
                    <Row>
                    </Row>
                    <Row>
                        {/* <p style={{ fontSize: "1.4em", }}>
                            Cras varius felis ac enim elementum lacinia. Maecenas quis nunc luctus,
                            pretium libero sit amet, viverra sapien. Sed mollis nunc enim,
                            sit amet scelerisque augue venenatis at. Etiam tincidunt nunc quis
                            quam lobortis tempus. Morbi orci magna, gravida ac tempus rutrum,
                            varius ut nulla. Phasellus molestie neque sit amet ex scelerisque
                            placerat. Donec a libero accumsan, convallis lacus nec, semper odio.
                            Nam blandit, odio sit amet vestibulum consequat, purus magna tincidunt
                            eros, eget hendrerit orci augue eu purus. Sed vel dui eleifend,
                            tincidunt enim et, feugiat arcu. Fusce lacus mauris, ultrices et
                            porttitor id, egestas ac ante. Donec finibus mauris ac lacus
                            aliquet suscipit. Suspendisse interdum est sit amet cursus vulputate.
                            Nulla interdum purus dolor, eu feugiat nisl faucibus vitae.
                            Nunc efficitur augue nec justo aliquam, vitae rutrum massa sodales.
                            Donec mollis nisl sed est venenatis porta
                        </p> */}
                    </Row>
                </Row>
            </Container>
        </div>
    );
}

export default Home;