import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";

export default function Create() {
    const[user ,setUser]=useState();
   
    useEffect(() => {
      axios.get("http://localhost:3001/user")
        .then(result => {
          console.log(result.data);
            setUser(result.data);
        })
        .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
      console.log(`http://localhost:3001/delete/${id}`);
      try {
        const data = await axios.delete(`http://localhost:3001/delete/${id}`);
        alert(data.data.message);
      } catch (error) {
        alert(error.message);
      }
    }
    
    

  return (
    <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
      <Link to="/add-data" className="btn btn-success float-start m-3 ms-4 ">Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
          
          {user && user.data.map((user,index)=>{

               return( 
                   <tr key={index}>
                  <td>{user.uid}</td> 
                  <td>{user.name}</td> 
                  <td>{user.email}</td> 
                  <td>{user.age}</td> 
                  <td><Link to={`/edit/${user._id}`} className="btn btn-success me-2 px-4">Edit</Link>
                  <button  onClick={()=>handleDelete(user._id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
               )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}
