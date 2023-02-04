import React, { useEffect, useRef, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import useReducer from "../hooks/reducerHook";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { db } from "../firebase";
import { message, notification } from "antd";
function Login() {
  const FormData = useRef();
  //const { message, modal, notification } = App.useApp();
  const auth = getAuth();
  const { setUser, setOverlay, overlay } = useReducer();
  const [loading, setLoad] = useState(false);
  const onFinish = () => {
    //setLoad(true);
    const loginID = FormData.current.getFieldValue();
    signInWithEmailAndPassword(auth, loginID.username, loginID.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser({ name: user.email });
        setOverlay({ ...overlay, visible: false });
        message.success("Logged in successfully!");
        setLoad(false);
      })
      .catch((err) => err && message.error(err.message));

    // if (loginID.username === "super" && loginID.password === "pass") {
    //   setUser({ name: "superman" });
    //   setOverlay({ ...overlay, visible: false });
    // } else {
    //   console.log("Login Failed");
    // }
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <div className="flex flex-col justify-between px-6">
      <Form
        {...layout}
        name="basic"
        // labelCol={{ span: 0 }}
        // wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        ref={FormData}
        //onFinishFailed={onFinishFailed}
        autoComplete="off"
        className=""
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button
            onClick={() => setOverlay({ ...overlay, visible: false })}
            className="mr-2"
            danger
          >
            Cancel
          </Button>
          <Button loading={loading} htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
