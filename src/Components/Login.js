import React, { useEffect, useRef, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import useReducer from "../hooks/reducerHook";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
function Login() {
  const FormData = useRef();
  const { user, setUser, setOverlay, overlay } = useReducer();
  const [loading, setLoad] = useState(false);
  const onFinish = () => {
    setLoad(true);
    const loginID = FormData.current.getFieldValue();
    getDocs(
      query(collection(db, "users"), where("username", "==", loginID.username))
    ).then((doc) =>
      //(doc) => console.log(doc.docs.length)
      doc.docs.map((dic) => {
        if (dic.data().password === loginID.password) {
          setUser({ name: "superman" });
          setOverlay({ ...overlay, visible: false });
          setLoad(false);
        } else {
          console.log("Login Failed");
          setLoad(false);
        }
      })
    );
    // if (loginID.username === "super" && loginID.password === "pass") {
    //   setUser({ name: "superman" });
    //   setOverlay({ ...overlay, visible: false });
    // } else {
    //   console.log("Login Failed");
    // }
  };

  return (
    <div className="flex flex-col justify-between">
      <h1 className="mx-auto mb-4">Login</h1>
      <Form
        name="basic"
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 16 }}
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button loading={loading} htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
