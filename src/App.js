import React, { Component, PropTypes } from 'react';

import FriendsContainer from './components/FriendsContainer.js';
import AddFriend from './components/AddFriend.js';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import bg from './img/Rectangle-561.png';
import bg_vector from './img/Group-4.png';



class App extends Component {

  render() {
    return (

      <div className="App">

      <Container fluid>
        <Row noGutters>

          
        <Col xs="12" sm="6">

        

              <img src={bg} className="App-bg" alt="background" />
              <img src={bg_vector} className="App-bg_vector" alt="background" />
              
              <Container fluid className="App-container">
                  <Row>
                    <Col xs="3"></Col>
                    <Col xs="auto"><FriendsContainer /></Col>
                    <Col xs="3"></Col>

                  </Row>
          
              </Container>
              


          


        </Col>
        
          <Col xs="12" sm="6">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <div className="App-decoration"></div>
          <h1 className="App-title">Hi, this is a simple React App</h1>
         
          <p className="App-intro">
          To see the source code visit the <code>github repository</code>
        </p>
        </header>
        
        </Col>
        </Row>
        
        </Container>
         
        
        
      </div>

    );
            Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}
Row.propTypes = {
  noGutters: PropTypes.bool
}
const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}

  }

}


export default App;
