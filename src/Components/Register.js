import React, { useEffect, useRef, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import useReducer from "../hooks/reducerHook";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { message, notification } from "antd";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Register() {
  const FormData = useRef();
  //const { message, modal, notification } = App.useApp();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const { setUser, setOverlay, overlay } = useReducer();
  const [loading, setLoad] = useState(false);
  const [state, setState] = useState(0);
  const auth = getAuth();
  const onFinish = () => {
    //setLoad(true);
    const loginID = FormData.current.getFieldValue();
    if (
      state === 0 &&
      loginID.email.split("@").length > 1 &&
      loginID.email.split("@")[1].split(".").length > 1
    ) {
      //send email notification
      console.log(Math.floor(1000 + Math.random() * 9000));
      setState(1);
    } else if (state === 1) {
      setLoad(true);
      createUserWithEmailAndPassword(auth, loginID.email, loginID.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoad(false);
          setOverlay({ ...overlay, visible: false });
          message.success("Account created successfully!");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      console.log("invalid email");
    }

    // getDocs(
    //   query(collection(db, "users"), where("username", "==", loginID.username))
    // ).then((doc) =>
    //   //(doc) => console.log(doc.docs.length)
    //   doc.docs.map((dic) => {
    //     if (dic.data().password === loginID.password) {
    //       setUser({ name: "superman" });
    //       setOverlay({ ...overlay, visible: false });
    //       message.success("Logged in successfully!");
    //       setLoad(false);
    //     } else {
    //       console.log("Login Failed");
    //       setLoad(false);
    //     }
    //   })
    // );
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
        style={{
          maxWidth: 600,
        }}
        //onFinishFailed={onFinishFailed}
        autoComplete="off"
        className=""
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        {state === 1 && (
          <Form.Item label="Code">
            <Input className="w-1/2" />
          </Form.Item>
        )}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
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
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
