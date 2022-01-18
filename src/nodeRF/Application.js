import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTANTE -> IMPORTARE
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import FlowApp from './FlowApp';
import './all.css'
import Singleton from './Singleton';
import { ReactFlowProvider } from 'react-flow-renderer';



// class Application extends React.Component {

const Application = () => {

  const [state, setState] = useState({ type: '', name: '', description: '' })

  /** QUEST FUNCTION FA AGGIORNARE I DATI DERIVATI DAL SINGLETON */
  useEffect(
    () => {
      /* DA CANCELLARE -> PER PROVA */
      setState({
        type: 'Module',
        name: 'Name',
        description: 'DESCRIPTIOOOOOOOOOOON'
      });
      // DA RIMANERE
      takeData();
    }
    , [])


  const takeData = () => {
    let x = Singleton.getInstance();
    let y = x.getPrimaryInfo();
    console.log('x:', x.getPrimaryInfo());
    console.log('y', y);
    if (y !== undefined) {
      setState({
        type: y.type,
        name: y.name,
        description: y.description
      });
      console.log('stato:', state);
    }
  }

  return (
    <div>
      <Container className='cf'>
        {/* ATTENZIONE REACTFLOWPROVIDER NECESSARIO */}
        <ReactFlowProvider>
          {/* <div style={{ minHeight: '10vh', maxHeight: '10vh', background: 'red' }}>
          <NavbarApplication></NavbarApplication>
        </div> */}

          <FlowApp />

          {/* <div style={{ minHeight: '10vh', maxHeight: '10vh', background: 'brown' }}>
          MID
        </div>
        <div style={{ minHeight: '10vh', maxHeight: '10vh', background: 'red' }}>
        </div> */}
        </ReactFlowProvider>
      </Container>
    </div>
  );


}

export default Application;
