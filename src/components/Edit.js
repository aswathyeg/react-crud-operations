import React, { useState, useEffect } from "react";
import Employee from "./Data";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  let history = useNavigate();

  var index = Employee.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    let a = Employee[index];
    a.Name = name;
    a.Age = age;

    history("/");
  };
  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        {/* <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter id"
            required
            onChange={(e) => {
              setId(e.target.value);
            }}
            value={id}
          ></Form.Control>
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            required
            onChange={(e) => {
              setAge(e.target.value);
            }}
            value={age}
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
