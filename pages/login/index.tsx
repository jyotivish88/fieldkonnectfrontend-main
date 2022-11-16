import React, { useState } from 'react'
import Router from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { postAuthLogin } from "../../store/login/actions"
import PropTypes from 'prop-types'
import logoimage from '../../assets/logo/whitelogo.png'
import Link from 'next/link'
import { Container, Button, Form, Jumbotron } from 'react-bootstrap';

export default function Login() {
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState('')
  const [requestData, setRequestData] = useState({})
  const handleInputChange = (event:any) => {
    const { name, value } = event.target
    setRequestData({ ...requestData, [name]: value })
  }
  const callback = async (resp:any) => {
    if (resp.id) {
      Router.push('dashboard')
    }
  };
  const handleFormSubmit = () => {
    try {

      dispatch(postAuthLogin(requestData, callback));
    }
    catch (e) {
      console.log(e, "Error in the Login");
    }
  };

  return (
    <Container fluid>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" name="username" onChange={handleInputChange} placeholder="Enter Email / Mobile" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleInputChange} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleFormSubmit}>
        Submit
      </Button>
    </Container>
  )
}