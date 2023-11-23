import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./home.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import Tables from "../../components/Tables/Tables";

import Spiner from "../../components/Spinner/Spiner"

function Home() {
  const navigate = useNavigate();

  const [Show,setShow] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setShow(false)
    },1500)
  },[])

  const adduser = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="container">
        <div className="main_div">
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-4">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success" className="search_btn">
                  Search
                </Button>
              </Form>
            </div>
            <div className="add_btn">
              <Button variant="primary" onClick={adduser}>
                <i class="fa-solid fa-plus"></i>&nbsp; Add User
              </Button>
            </div>
          </div>
          <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
            <div className="export_csv">
              <Button className="export_btn">Export The Csv</Button>
            </div>
            <div className="filter_gender">
              <div className="filter">
                <h3>Filter By Genter</h3>
                <div className="genter d-flex justify-content-between">
                  <Form.Check
                    type={"radio"}
                    label={`All`}
                    name="genter"
                    value={"All"}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Male`}
                    name="genter"
                    value={"Male"}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`FeMale`}
                    name="genter"
                    value={"FeMale"}
                  />
                </div>
              </div>
            </div>
            <div className="filter_newold">
              <h3>Short By Value</h3>
              <Dropdown className="text-center">
                <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                  <i class="fa-solid fa-sort"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>New</Dropdown.Item>
                  <Dropdown.Item>Old</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="filter_status">
              <div className="status">
                <h3>Filter By Status</h3>
                <div className="status d-flex justify-content-around flex-wrap">
                  <Form.Check
                    type={"radio"}
                    label={`All`}
                    name="status"
                    value={"All"}
                    // onChange={(e)=>setStatus(e.target.value)}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Active`}
                    name="status"
                    value={"Active"}
                    // onChange={(e)=>setStatus(e.target.value)}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`InActive`}
                    name="status"
                    value={"InActive"}
                    // onChange={(e)=>setStatus(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {Show ? <Spiner /> : <Tables />}
      </div>
    </>
  );
}

export default Home;
