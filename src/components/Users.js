import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import img from "./vk.jpg";
import styles from "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const [apiData, setApiData] = useState([]);

  let colors = ["red", "green", "yellow", "blue", "black", "white", "orange"];

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = () => {
    axios.get("http://localhost:8000/users").then((res) => {
      console.log(res);
      setApiData(res.data);
    });
  };

  const deleteUser = (id) => {
    axios.delete("http://localhost:8000/users/" + id).then(() => {
      fetchingData();
    });
  };
  const changeColor = (id, name, salary, company, img, selectedColor) => {
    axios
      .put("http://localhost:8000/users/" + id, {
        name,
        salary,
        company,
        img,
        color: selectedColor,
      })
      .then(() => {
        fetchingData();
      });
  };

  return (
    <div className="m-2 p-2 d-flex">
      {apiData.map((element, index) => {
        return (
          <Card
            style={{ width: "15rem", backgroundColor: element.color }}
            key={index}
            className="m-3"
          >
            <Card.Body>
              <div className="profile-img text-center">
                <Image src={element.img} className="img" />
              </div>
              <hr />
              <div>
                <div className="d-flex">
                  <h6>
                    Name:<span className="ms-5">{element.name}</span>
                  </h6>
                </div>
                <div className="d-flex mt-2">
                  <h6>
                    Company:<span className="ms-4">{element.company}</span>
                  </h6>
                </div>
                <div className="d-flex mt-2">
                  <h6>
                    Salary:<span className="ms-5">{element.salary}</span>
                  </h6>
                </div>
                <div className="mt-2">
                  <select
                    className="colors"
                    onChange={(e) => {
                      changeColor(
                        element.id,
                        element.name,
                        element.salary,
                        element.company,
                        element.img,
                        e.target.value
                      );
                    }}
                  >
                    <option>select colors</option>
                    {colors.map((color) => {
                      return <option value={color}>{color}</option>;
                    })}
                  </select>{" "}
                </div>

                <div className="mt-3">
                  <Link to={`/updateUser/${element.id}`}>
                    <Button
                      className="float-start btn-sm"
                      variant="outline-warning"
                    >
                      Update
                    </Button>
                  </Link>

                  <Button
                    className="float-end btn-sm"
                    variant="outline-danger"
                    onClick={() => {
                      deleteUser(element.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Users;
