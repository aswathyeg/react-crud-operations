import React from "react";
import Employee from "./Data";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  let history = useNavigate();
  const handleDelete = (id) => {
    var index = Employee.map((e) => {
      return e.id;
    }).indexOf(id);
    Employee.splice(index, 1); //delete
    history("/");
  };
  const handleEdit = (id, name, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };
  return (
    <div style={{ margin: "10rem" }}>
      <Table striped bordered size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {Employee && Employee.length > 0
            ? Employee.map((items) => {
                return (
                  <tr>
                    <td>{items.id}</td>
                    <td>{items.Name}</td>
                    <td>{items.Age}</td>
                    <td>
                      <Button>Add</Button>
                      &nbsp;
                      <Button onClick={() => handleDelete(items.id)}>
                        Delete
                      </Button>
                      &nbsp;
                      <Link to="/edit">
                        <Button
                          onClick={() =>
                            handleEdit(items.id, items.Name, items.Age)
                          }
                        >
                          Edit
                        </Button>
                      </Link>
                      &nbsp;
                    </td>
                  </tr>
                );
              })
            : "no data"}
        </tbody>
      </Table>
      <br></br>
      <Link className="d-grid gap-2" to="/create">
        <Button size="lg">Create</Button>
      </Link>
    </div>
  );
};

export default Home;
