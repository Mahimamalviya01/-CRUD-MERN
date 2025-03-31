import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function LogIn() {
   const[email,setEmail]=useState();
      const[pass,setPass]=useState();
      const navigate=useNavigate()
      const handleSubmit=(e)=>{
        e.preventDefault();
        axios.get("http://localhost:3001/login/",{email,pass})
        .then(result=> { 
          console.log(result);
          alert("LogIn successfully")
          navigate("/user");
        })
        .catch(err => console.logI(err))
      }
  return (
    <div>
    <Container>
      <Form className='w-50 m-auto mt-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
          
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required onChange={(e)=>setPass(e.target.value)}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form> 
              <br></br>
              <p>Don't have An Account?</p>
               <Link to="/signup" className='btn btn-primary'>SignUp</Link>
    </Container>
    </div>
  )
}

export default LogIn