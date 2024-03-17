import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const [updateName, setUpdateName] = useState("");
  const [updateCompany, setUpdateCompany] = useState("");
  const [updateSalary, setUpdateSalary] = useState("");
  const [updateImage, setUpdateImage] = useState("");

  const{id}=useParams()

  let nav=useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:8000/users/'+id)
    .then((res)=>{
      setUpdateName(res.data.name)
      setUpdateCompany(res.data.company)
      setUpdateSalary(res.data.salary)
      setUpdateImage(res.data.img)
    })
  },[])
  

  const updateInfo =()=>{
    let update ={
      name:updateName,
      company:updateCompany,
      salary:updateSalary,
      img:updateImage
    }
    axios.put('http://localhost:8000/users/'+id,update)
   .then(()=>{
    nav('/users')
   })
   .catch((err)=>{
    console.log(err)
   })
  }

  return (
    <div className="m-5 p-5 reg-card">
    
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="text-center ">
            <h3>User Register </h3>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <hr />
          </Card.Subtitle>
          <div>
            <Form.Control
              size="sm"
              type="text"
              className="mt-2"
              placeholder="Name"
              value={updateName}
              onChange={(e) => setUpdateName(e.target.value)}
            />
            <Form.Control
              size="sm"
              type="text"
              className="mt-2"
              placeholder="Company"
              value={updateCompany}
              onChange={(e) => setUpdateCompany(e.target.value)}
            />
            <Form.Control
              size="sm"
              type="number"
              className="mt-2"
              placeholder="Salary"
              value={updateSalary}
              onChange={(e) => setUpdateSalary(e.target.value)}
            />
            <Form.Control
              size="sm"
              type="text"
              className="mt-2"
              placeholder="Image Url"
              value={updateImage}
              onChange={(e) => setUpdateImage(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <Button className="btn-sm" onClick={updateInfo}>
              Add
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UpdateUser;
