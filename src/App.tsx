import React from 'react';
import '../src/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import FormExample from './components/navbar';


function App() {
  return (
   <Container>
    <Row>
      <Col>
      <FormExample/>
      </Col>
    </Row>
   </Container>
  );
}

export default App;
