import React from "react";
import Employee from "./Data";
import { Button, Table } from "react-bootstrap";
const Home = () => {
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
                    <td>{items.name}</td>
                    <td>{items.age}</td>
                    <td>
                      <Button>Add</Button>
                      &nbsp;
                      <Button
                        onClick={(id) => {
                          Employee.filter((items) => {
                            return items.id !== Employee.id;
                          });
                        }}
                      >
                        Delete
                      </Button>
                      &nbsp;
                      <Button>Edit</Button>
                      &nbsp;
                    </td>
                  </tr>
                );
              })
            : "no data"}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
