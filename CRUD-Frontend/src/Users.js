import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
function Users() {
  const[user ,setUser]=useState();
 console.log(user)
  useEffect(() => {
    axios.get("http://localhost:3001/user")
      .then(result => {
        console.log(result.data);
          setUser(result.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className='d-flex gap-2  mt-5 ms-5 w-100 h-100 '>
    {user && user.data.map((user,index)=>{

      return( 
    <Card key={index} style={{ width: '18rem' }}>
    <Card.Body className='my-3'  >
      <Card.Title className='my-3'>{user.uid}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted my-3">{user.name}</Card.Subtitle>
      <Card.Link href="#" className='my-3'>{user.email}</Card.Link>
      <Card.Subtitle className="mb-2 text-muted my-3">{user.age}</Card.Subtitle>
    </Card.Body>
  </Card>
)
})
}
    </div>
  )
}

export default Users