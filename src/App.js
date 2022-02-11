import 'bootstrap/dist/css/bootstrap.min.css'; //IMPORTANTE -> IMPORTARE
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import './App.css';
import NavbarApp from './NavbarApp';
import Home from './Home';
import AboutUs from './AboutUs';

import Application from './Application/Application.js'


// la function App() è richiamata per ritornare qualcosa -> html
const style1 = {
  height: '100%',
  width: '100%',
  textAlign: 'center'
};


class App extends React.Component {

  renderize() {
    return (
      <Router>
        <div className="App" style={style1}>
          <div id="content">
            <Switch>
              <Route exact path="/">
                <NavbarApp></NavbarApp>
                <Home />
              </Route>
              <Route exact path="/home">
                <NavbarApp></NavbarApp>
                <Home />
              </Route>
              <Route exact path="/about-us">
                <NavbarApp></NavbarApp>
                <AboutUs />
              </Route>
              <Route exact path="/how-to-use">
                <NavbarApp></NavbarApp>
                {/* <HowToUse /> */}
                <iframe 
                  src="https://giphy.com/embed/i8e7h6GcdopvVG5Nhm" 
                  width="800" 
                  height="700" 
                  frameBorder="0" 
                  style={{width:'100%', pointerEvents: 'none'}}
                  //class="giphy-embed" 
                  allowFullScreen
                  />
              </Route>
              <Route exact path="/application">
                {/* {getApplication()} */}
                <Application></Application>
              </Route>
            </Switch>
          </div>
          {/* <Button className=" outline-primary lg h1 text-center" style={{ fontSize: "2.1em", }} onClick={() => new tryJSON().read_json()}>  SHOW DATA </Button> */}
        </div>
      </Router>
    );
  }
}

export default App;
