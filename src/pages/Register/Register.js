import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./register.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import man from "../../Assets/man.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });

  console.log(input);

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const options = [
    { value: "Active", label: "Active" },
    { value: "Invalid", label: "Invalid" },
  ];
  const handleInputValue = (e) => {
    const { name, value } = e.target; // Use e.target.name and e.target.value
    setInput({
      ...input,
      [name]: value,
    });
  };

  const setStatusvalue = (e) => {
    setStatus(e.value);
  };

  const setProfile = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);

  const submitform = (e) => {
    const { fname, lname, email, mobile, gender, location } = input;
    e.preventDefault();
    if (fname === "") {
      toast.error("First name is Required !");
    } else if (lname === "") {
      toast.error("Last name is Required !");
    } else if (email === "") {
      toast.error("Email is Required !");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !");
    } else if (mobile === "") {
      toast.error("Mobile is Required !");
    } else if (mobile.length > 10) {
      toast.error("Enter Valid Mobile!f");
    } else if (gender === "") {
      toast.error("Gender is Required !");
    } else if (status === "") {
      toast.error("Status is Required !");
    } else if (image === "") {
      toast.error("Prfile is Required !");
    } else if (location === "") {
      toast.error("location is Required !");
    } else {
      toast.success("user Registered successfully!");
    }
    
  };
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-1">Register your Details</h2>
        <Card className="shadow mt-3 p-3">
          <div className="profile_div text-center">
            <img src={preview ? preview : man} alt="pic" />
          </div>
          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  value={input.fname}
                  placeholder="Enter your name"
                  onChange={handleInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  value={input.lname}
                  placeholder="Enter your last name"
                  onChange={handleInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={input.email}
                  placeholder="Enter email"
                  onChange={handleInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={input.mobile}
                  placeholder="Enter mobile number"
                  onChange={handleInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select your Genter</Form.Label>
                <Form.Check
                  type={"radio"}
                  name={"Gender"}
                  value={"Male"}
                  label={"Male"}
                  onChange={handleInputValue}
                />
                <Form.Check
                  type={"radio"}
                  name={"Gender"}
                  value={"Female"}
                  label={"Female"}
                  onChange={handleInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select your Status</Form.Label>
                <Select options={options} onChange={setStatus} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select your Profile</Form.Label>
                <Form.Control
                  type="text"
                  name="profile"
                  placeholder="Profile"
                  onChange={setProfile}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Enter your Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={input.location}
                  placeholder="Enter your Location"
                  onChange={handleInputValue}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onSubmit={submitform}>
                Submit
              </Button>
            </Row>
          </Form>
          <ToastContainer position="top-center" />
        </Card>
      </div>
    </>
  );
}

export default Register;
