import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import AllInfoNodes from '../../nodes/data/AllInfoNodes';
import '../all.css'


class DataNodeInfo_t extends React.Component {

    /**
     * 
     * @param {*} dati 
     *      forma dati: ({ selected_element: undefined, show: false })
     * @returns 
     */
    constructor(dati) {
        super();
        if (dati === undefined || dati.selected_element === undefined || dati.selected_element === '') {
            this.show = false;
            this.element = '';
            this.tipo = '';
            return;
        }
        else {
            this.element = dati.selected_element;
            this.tipo = this.element.type;
            this.show = dati.show;
        }
        //***//
        this.ain = new AllInfoNodes(this.element);
        //console.log('dni', this.ain);
    }


    ///// struttura contenente gli elementi da mostrare in base al tipo //////
    renderize() {
        if (this.show) {
            return (
                <div className='vheight'>
                    {/* <div className='justify-content-center text-center m-2' style={{ overflowX: 'scroll', overflowY: 'hidden', minHeight:'5vh',maxHeight: '5vh', }}>
                        <h2 className='d-inline mb-3'>
                            {this.element['data']['label']}
                            <cite className='d-inline' style={{ fontSize: '0.5em' }}>{this.tipo} </cite>
                        </h2>
                    </div>*/}
                    <Container className='cf px-1 py-2' style={{ direction: 'rtl', overflowX: 'hidden', overflowY: 'scroll', fontSize: "0.8em", position: 'relative' }}>
                        <Row className='mb-2'>
                            <Col style={{ overflowX: 'auto' }} className='p-2'>
                                <h2 className='d-inline mb-3'>{this.element['data']['label']}</h2>
                                <h2 className='d-inline' style={{ fontSize: '1em' }}>{this.tipo} </h2>
                            </Col>
                        </Row>
                        {this.ain.getRenderize()}
                        {/* https://stackoverflow.com/questions/526035/how-can-i-position-my-div-at-the-bottom-of-its-container */}
                        {/* <Row style={{ position: 'absolute', bottom: '0', opacity: '50%' }}>
                            {JSON.stringify(this.element)}
                        </Row> */}
                    </Container>
                </div>
            );
        }
        else {
            return (null);
        }
    }

}

export default DataNodeInfo_t;