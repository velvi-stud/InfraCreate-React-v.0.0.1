import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTANTE -> IMPORTARE
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import FlowApp from './FlowApp';
import FlowApp_t from './Application_theater.js/FlowApp_theater';
import './all.css'
import { ReactFlowProvider } from 'react-flow-renderer';
import { useSelector, useDispatch } from 'react-redux';



// class Application extends React.Component {

const Application = () => {

  const infopan = useSelector(state => state.datapass)
  const [state, setState] = useState({ type: '', name: '', description: '' })

  /** QUEST FUNCTION FA AGGIORNARE I DATI DERIVATI DAL REDUX */
  useEffect(
    () => {
      /* DA CANCELLARE -> PER PROVA */
      setState({
        type: infopan.type,
        name: infopan.name,
        description: infopan.description
      });
    }
    , [])

    function getApp(){
      if(state.type==='module')
        return <FlowApp name={state.name} type={state.type} description={state.description} />;
      else if (state.type==='theater'){
      console.log('teatro');
        return <FlowApp_t name={state.name} type={state.type} description={state.description} />;
      }else 
        return null;
    }

  return (
    <div>
      <Container className='cf'>
        {/* ATTENZIONE REACTFLOWPROVIDER NECESSARIO */}
        <ReactFlowProvider>

          {getApp()}

        </ReactFlowProvider>
      </Container>
    </div>
  );


}

export default Application;
