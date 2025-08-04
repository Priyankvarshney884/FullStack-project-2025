import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { LoginUser } from '../../api/user'; // Adjust the import path as necessary

function Login() {
   const onFinish= async(values)=>{
      try{
        const response = await LoginUser(values);
        if(response.success) {
          alert("Login successful!");
        } else {
          alert("Login failed: " + response.message);
        }
        console.log("Login successful:", response);
      }
      catch(error) {
        console.error("Login error:", error);
        alert("An error occurred during Login. Please try again.");
    }
    };
  return (
    <main className="App-header">
      <h1>Login to BookMyShow</h1>
      <section className="mw-500 text-center px-3">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            className="d-block"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Please enter a valid email" }
            ]}
          >
            <Input type="email" placeholder="Enter your Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className="d-block"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input type="password" placeholder="Enter your Password" />
          </Form.Item>

          <Form.Item className="d-block">
            <Button
              type="primary"
              block
              htmlType="submit"
              style={{ fontSize: "1rem", fontWeight: "600" }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <p>
          New User? <Link to="/register">Register Here</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;