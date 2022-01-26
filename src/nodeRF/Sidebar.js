import React, { createRef } from 'react';
import { Container, Row, Accordion } from 'react-bootstrap';
import AllTypeNodes from '../node-template/AllTypeNodes';
import './all.css'
import { useSelector, useDispatch } from 'react-redux';

class Sidebar extends React.Component {

    constructor() {
        super();
        this.SN = createRef();
        this.ATN = new AllTypeNodes();
        this.nodes = this.ATN.getListStyle();

        this.listnode = [];
        Object.entries(this.nodes).map(
            ([key, value]) => {
                //if (value.type !== 'module')
                this.listnode.push(this.renderDaD(value.type, value.style));
            }
        )

        this.render = this.render.bind(this);
        this.renderDaD = this.renderDaD.bind(this);
    }

    /**
     * @function onDragStart
     * @param {*} event 
     *  modalità di trasferimento (trasferimento Drag&Drop variabili).
     * @param {*} nodeType 
     *  tipo di nodo da creare
     * @description
     *  Funzione richiamata ogni volta che si esegue il drag dei div specificati. https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed?re
     *      prende le informazioni (nodeType) e li trasferisce in "memoria condivisa" situata in application/reactflow
     * 
     */
    onDragStart(event, nodeType) {
        // event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('type', nodeType);
        event.dataTransfer.effectAllowed = 'move'; //sito in link
    };

    renderDaD(type, style) {
        return (
            // l'attr. KEY serve quando si creano elementi così, non è obbligatorio ma da errore
            <Row key={type} className='justify-content-center text-center m-2'>
                <div style={style} onDragStart={(event) => this.onDragStart(event, type)} draggable>
                    {type.charAt(0).toUpperCase() + type.slice(1)} Node
                </div>
            </Row>
        );
    }


    render() {

        return (
            <div className='pt-2 pb-2'>
                <Container id='dragdrop' className='justify-content-center text-center cf vheight' style={{ overflowX: 'hidden', overflowY: 'visible', }}>
                    <Row className='justify-content-center text-center mt-1 mb-1'>
                        <h5>Drag and Drop node.</h5>
                    </Row>
                    {/* <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> Base Nodes </Accordion.Header>
                            <Accordion.Body>
                                {this.listnode}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> Module Nodes </Accordion.Header>
                            <Accordion.Body>
                                aa
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> */}
                    {this.listnode}


                </Container>
            </div>

        );
    }

};

export default Sidebar;