import React, { createRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTANTE -> IMPORTARE
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import tryJSON from './DataParser/DP';
import Application from './nodeRF/Application';
import Singleton from './nodeRF/Singleton';
import iac from './images/coop/iac_img.jpg'

const Home = () => {

    const [mod, setMod] = useState({ tipo: '', show: false });
    const [disp, setDisp] = useState('block');
    //const [data_to_pass, setDTP] = useState({type:'', name: '', description: '' });

    const nome = createRef();
    const descrizione = createRef();


    const history = useHistory();
    const routeChange = () =>{ 
        let path = `Application`; 
        history.push(path);
      }    

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

    const pickdata = () => {
        var name = nome.current.value; // prendere il valore dello stato corrente dell'elemto riferito da "nome"
        var description = descrizione.current.value; // prendere il valore dello stato corrente dell'elemto riferito da "descrizione"
        var type= mod.tipo;
        //var x = new tryJSON();
        //x.add_name_desc(mod.tipo, name, description);
        //x.read_json();
        var z = {type, name, description};
        //console.log("data: ",type, name,description);
        console.log("z: ",z);
        let s = Singleton.getInstance();
        s.setPrimaryInfo(z);
        console.log(s.getPrimaryInfo());
        // let aa = new Application();
        // aa.takeData();
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
        <div className='mt-5 container-fluid text-center justify-content-center'>
            <Container className='container-fluid'>
                <Row>
                    <h1 className='display-1'>
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

                <div style={{display: disp }}>
                    {showInput()}
                </div>

                <Row className="mt-5">
                    <Col>
                    <img src={iac}></img>
                    </Col>
                    <Col>
                    <p style={{ fontSize: "1.4em", }}>
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
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;