import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import styles from "../App.css";
import axios from "axios";

function UserReg() {
  const [addName, setAddName] = useState("");
  const [addCompany, setAddCompany] = useState("");
  const [addSalary, setAddSalary] = useState("");
  const [addImage, setAddImage] = useState("");
  const [addColor, setAddColor] = useState();

  const submit = () => { 
    let load = {
      name: addName,
      company: addCompany,
      salary: addSalary,
      img: addImage,
      color: addColor,
    };
    if (
      addName !== "" &&
      addCompany !== "" &&
      addSalary !== "" &&
      addImage !== ""
    ) {
      axios
        .post("http://localhost:8000/users", load)
        .then(() => {
          setAddName("");
          setAddCompany("");
          setAddSalary("");
          setAddImage("");
          setAddColor();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Plese enter details");
    }
  };

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
              value={addName}
              onChange={(e) => setAddName(e.target.value)}
            />
            <Form.Control
              size="sm"
              type="text"
              className="mt-2"
              placeholder="Company"
              value={addCompany}
              onChange={(e) => setAddCompany(e.target.value)}
            />
            <Form.Control
              size="sm"
              type="number"
              className="mt-2"
              placeholder="Salary"
              value={addSalary}
              onChange={(e) => setAddSalary(e.target.value)}
            />
            <Form.Control
              size="sm"
              type="text"
              className="mt-2"
              placeholder="Image Url"
              value={addImage}
              onChange={(e) => setAddImage(e.target.value)}
            />
            <div className="d-flex">
              <p className="mt-2 ms-2 text-secondary color-text">Add color</p>
              <Form.Control
                size="sm"
                type="color"
                className="mt-2 ms-3"
                placeholder="Image Url"
                value={addColor}
                onChange={(e) => setAddColor(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-2">
            <Button className="btn-sm" onClick={submit}>
              Add
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserReg;
