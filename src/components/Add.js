import React, { useState } from "react";
import Employee from "./Data";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); //to hide all other events
  };
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Add;
