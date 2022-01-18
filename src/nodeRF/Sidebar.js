import React, { createRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import node_temp_list from './NodeTemplateList';
import './all.css'


/* @ operazioni per reperire stili e classi dei nodi base */
const NTL = new node_temp_list();
NTL.initialize();

class Sidebar extends React.Component {

    constructor() {
        super();
        this.SN = createRef();
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

    TMPLT(tipo) {
        return (
            <Row className='justify-content-center text-center m-2'>
                <div className="" style={NTL.getListStyl()[tipo]} onDragStart={(event) => this.onDragStart(event, tipo)} draggable>
                    {tipo.charAt(0).toUpperCase() + tipo.slice(1)} Node
                </div>
            </Row>
        );
    }

    render() {

        return (
            <div className='pt-2 pb-2' style={{ /*minHeight: '70vh', maxHeight: '70vh',*/ }}>
                {/* MODIFICARE QUI LA LUNGHEZZA DELLA SIDEBAR */}

                <Container className='justify-content-center text-center cf vheight' style={{ overflowX: 'hidden', overflowY: 'visible', minHeight:'78vh', maxHeight:'78vh',}}>
                    
                    <Row className='justify-content-center text-center mt-1 mb-1'>
                        <h5>Drag and Drop node.</h5>
                    </Row>

                    {this.TMPLT('server')}
                    {this.TMPLT('port')}
                    {this.TMPLT('network')}
                    {this.TMPLT('subnet')}
                    {this.TMPLT('customized')}
                    {this.TMPLT('special')}
                    {this.TMPLT('exale')}
                    {this.TMPLT('customized')}
                    {this.TMPLT('special')}
                    {this.TMPLT('exale')}
                    {this.TMPLT('customized')}
                    {this.TMPLT('special')}
                    {this.TMPLT('exale')}
                    {this.TMPLT('customized')}
                    {this.TMPLT('special')}
                    {this.TMPLT('exale')}
                    {this.TMPLT('customized')}
                    {this.TMPLT('special')}
                    {this.TMPLT('exale')}
                    {this.TMPLT('customized')}
                    {this.TMPLT('special')}
                    {this.TMPLT('exale')}



                    {/* 
                <Row className='justify-content-center text-center m-2'>
                    <div className=" react-flow__node-input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                        Input Node
                    </div>
                </Row>
                <Row className='justify-content-center text-center m-2'>
                    <div className="react-flow__node-default" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                        Default Node
                    </div>
                </Row>
                <Row className='justify-content-center text-center m-2'>
                    <div className=" react-flow__node-output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                        Output Node
                    </div>
                </Row> */}


                </Container>
            </div>

        );
    }

};

export default Sidebar;