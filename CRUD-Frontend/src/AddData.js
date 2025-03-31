import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

function AddData() {

  const[uid,setUID]=useState();
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[age,setAge]=useState();
  const navigate=useNavigate();


  const submitform=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/add-data",{uid,name,email,age})
    .then(result=> { 
      console.log(result);
      navigate("/create");
    })
    .catch(err => console.logI(err))
  }

  return (
    <div>
    
    <Container className="d-flex vh-100 bg-success-subtle justify-content-center align-items-center">
    
    <Form  onSubmit={submitform} className='w-50 border-primary rounded p-3 bg-info-subtle'>
    <h2 className='mb-5'>Add User</h2>
    <Form.Group as={Row} className="mb-3" controlId="formNumber">
    <Form.Label column sm="2">
      UserID
    </Form.Label>
    <Col sm="10">
      <Form.Control type="number" placeholder="Enter ID" onChange={(e)=>setUID(e.target.value)} />
    </Col>
  </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
      <Form.Label column sm="2">
        Name 
      </Form.Label>
      <Col sm="10">
        <Form.Control  type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
      </Col>
    </Form.Group>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Email 
      </Form.Label>
      <Col sm="10">
        <Form.Control  type="email" placeholder="Enter Email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formNumber">
      <Form.Label column sm="2">
        Age
      </Form.Label>
      <Col sm="10">
        <Form.Control type="number" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)} />
      </Col>
    </Form.Group>
    <Button type="submit" className='px-4 btn btn-success'>Submit</Button>
  </Form>
  </Container>
    </div>
  )
}

export default AddData