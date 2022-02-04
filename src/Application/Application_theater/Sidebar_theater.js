import React, { createRef } from 'react';
import { Container, Row, Accordion } from 'react-bootstrap';
import AllTypeNodes from '../../nodes/AllTypeNodes';
import _ from 'lodash';
import ModuleNode from '../../nodes/ModuleNode';
import '../all.css'
import { useSelector, useDispatch } from 'react-redux';



class Sidebar_t extends React.Component {

    constructor() {
        super();
        this.MN = new ModuleNode();
        this.style = this.MN.getStyle();
        this.state = {
            moduleslist: [],
            listnode: []
        }

        this.func();
        //console.log(this.state.modulelist, this.state.listnode);
        this.render = this.render.bind(this);
        this.renderDaD = this.renderDaD.bind(this);
    }

    /**
     * @function func
     *  retireve module data from "redux" shared area
     */
    func = () => {
        var moduleslist = useSelector(state => state.modulesretrieved)
        this.state = {
            moduleslist: moduleslist,
            listnode: []
        }
        var name, description, version, topology;
        //console.log(moduleslist);
        Object.entries(moduleslist).map(
            ([key, value]) => {
                value = value[0];
                name = value.module_name;
                description = value.module_description;
                version = value.version;
                topology = value.elements;
                // console.log(
                //     'elemento', key, ':', value.module_name,
                //     'descrizione:', value.module_description,
                //     'version', value.version,
                //     'topology', value.elements,
                // );
                this.state.listnode.push(this.renderDaD(name, description, version, topology));

            }
        )
    }

    /**
     * @function onDragStart
     *  function to handle drag-start event from this sidebar
     * @param {*} event 
     *  modalità di trasferimento (trasferimento Drag&Drop variabili).
     * @param {*} nodeType 
     *  tipo di nodo da creare
     * @description
     *  Funzione richiamata ogni volta che si esegue il drag dei div specificati. https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed?re
     *      prende le informazioni (nodeType) e li trasferisce in "memoria condivisa" situata in application/reactflow
     * 
     */
    onDragStart(event, name, description, version, topology) {
        // event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('type', 'module');
        event.dataTransfer.setData('name', name);
        event.dataTransfer.setData('description', description);
        event.dataTransfer.setData('version', version);
        var topology = _.map(topology, function (value, key) {
            return value;
        });
        topology = JSON.stringify(topology);
        //console.log('topology passed: ', topology);
        event.dataTransfer.setData('topology', topology);
        event.dataTransfer.effectAllowed = 'move'; //sito in link
    };

    /**
     * @function renderDaD
     *  generate a row containing the type node element with his unique style to drag on canvas
     * @param {*} type 
     * @param {*} style 
     * @returns 
     *  return a html-row rappresenting the draggable node
     */
    renderDaD(name, description, version, topology) {
        return (
            // l'attr. KEY serve quando si creano elementi così, non è obbligatorio ma da errore
            <Row key={name} className='justify-content-center text-center m-2'>
                <div style={this.style} onDragStart={(event) => this.onDragStart(event, name, description, version, topology)} draggable>
                    {name}
                </div>
            </Row>
        );
    }


    render() {
        return (
            <div className='pt-2 pb-2'>
                <Container id='dragdrop' className='justify-content-center text-center cf vheight' style={{ overflowX: 'hidden', overflowY: 'visible', }}>
                    <Row className='justify-content-center text-center mt-1 mb-1'>
                        <h5>Drag and Drop Modules.</h5>
                    </Row>
                    {this.state.listnode}
                </Container>
            </div>
        );
    }

};

export default Sidebar_t;