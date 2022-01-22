import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTANTE -> IMPORTARE
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import FlowApp from './FlowApp';
import './all.css'
import { ReactFlowProvider } from 'react-flow-renderer';



// class Application extends React.Component {

const Application = () => {

  return (
    <div>
      <Container className='cf'>
        {/* ATTENZIONE REACTFLOWPROVIDER NECESSARIO */}
        <ReactFlowProvider>

          <FlowApp />

        </ReactFlowProvider>
      </Container>
    </div>
  );


}

export default Application;
