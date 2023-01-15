import { PlusIcon, TrashIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Form, Button, Checkbox, Input } from "antd";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import useReducer from "../hooks/reducerHook";
import { imgList } from "../Images";
const ContactCard = ({ data, id, trash }) => {
  return (
    <div className="relative flex flex-col mx-auto w-3/5 md:w-64 overflow-hidden rounded-md shadow-md border border-gray-200">
      {trash && (
        <TrashIcon
          onClick={() =>
            deleteDoc(doc(db, "People", "TRInjm0tAFTucocoGSvj", "Faculty", id))
          }
          className="absolute text-red-500 w-5 z-5 hover:text-blue-400 rounded-full -mt-0 mr-2 top-2 right-0"
        />
      )}
      <img className="w-full h-36 object-cover" src={data.img} alt="" />
      <div className="mx-4 text-left flex flex-col">
        <h1 className="text-lg font-bold mt-4 text-blue-500">{data.name}</h1>
        <h1 className="text-sm font-semibold">{data.grade}</h1>
        <h1 className="text-sm font-thin">
          <strong className="font-semibold">Research area : </strong>
          {data.research}
        </h1>
        <h1 className="text-sm font-thin">
          <strong className="font-semibold">Office NO : </strong>
          {data.office}
        </h1>
        <h1 className="text-sm font-thin">
          <strong className="font-semibold">Email id : </strong>
          {data.email} -AT- iitgn.ac.in
        </h1>
        <a href={data.webUrl} className="text-sm mb-4">
          Personal Webpage
        </a>
      </div>
    </div>
  );
};
const ContactCardPhD = ({ data, id, trash }) => {
  return (
    <div className="relative flex flex-col mx-auto w-3/5 md:w-64 min-w-64 overflow-hidden rounded-md shadow-md border border-gray-200">
      {trash && (
        <TrashIcon
          onClick={() =>
            deleteDoc(doc(db, "People", "TRInjm0tAFTucocoGSvj", "Faculty", id))
          }
          className="absolute text-red-500 w-5 z-5 hover:text-blue-400 rounded-full -mt-0 mr-2 top-2 right-0"
        />
      )}
      <img className="w-full h-36 object-cover" src={data.img} alt="" />
      <div className="mx-4 text-left flex flex-col">
        <h1 className="text-lg font-bold mt-4 text-blue-500">{data.name}</h1>
        <h1 className="text-sm font-semibold">{data.post}</h1>
        <h1 className="text-sm font-thin">
          <strong className="font-semibold">Joining Year : </strong>
          {data.jy}
        </h1>
        <h1 className="text-sm font-thin">
          <strong className="font-semibold">Advisor : </strong>
          {data.adv}
        </h1>
        <h1 className="text-sm font-thin">
          <strong className="font-semibold">Email id : </strong>
          {data.email} -AT- iitgn.ac.in
        </h1>
        <a href={data.webUrl} className="text-sm mb-4">
          Personal Webpage
        </a>
      </div>
    </div>
  );
};
const AddStudent = () => {
  const FormData = useRef();
  const [show, change] = useState(false);
  const [loading, setLoading] = useState(false);
  const onFinish = () => {
    setLoading(true);
    addDoc(
      collection(db, "People", "TRInjm0tAFTucocoGSvj", "Student"),
      FormData.current.getFieldValue()
    ).then(() => {
      change(false);
      setLoading(false);
    });
  };
  return (
    <div className="flex flex-col mx-auto w-3/5 md:w-64 overflow-hidden rounded-md shadow-md border border-gray-200">
      <div className="w-full h-36 bg-green-400">
        <PlusIcon className="w-36 text-white mx-auto" />
      </div>
      <div className="mx-4 text-left flex flex-col h-44 overflow-y-auto mt-2">
        {!show ? (
          <h1
            onClick={() => change(!show)}
            className="text-lg cursor-pointer font-bold mt-4 text-blue-500 "
          >
            Add New
          </h1>
        ) : (
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
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Photo"
              name="img"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Joining Year"
              name="jy"
              rules={[{ required: true, message: "Please input your grade!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Advisor :"
              name="adv"
              rules={[
                { required: true, message: "Please input your research area!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button loading={loading} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
};
const AddUser = () => {
  const FormData = useRef();
  const [show, change] = useState(false);
  const [loading, setLoading] = useState(false);
  const onFinish = () => {
    setLoading(true);
    addDoc(
      collection(db, "People", "TRInjm0tAFTucocoGSvj", "Faculty"),
      FormData.current.getFieldValue()
    ).then(() => {
      change(false);
      setLoading(false);
    });
  };
  return (
    <div className="flex flex-col mx-auto w-3/5 md:w-64 overflow-hidden rounded-md shadow-md border border-gray-200">
      <div className="w-full h-36 bg-green-400">
        <PlusIcon className="w-36 text-white mx-auto" />
      </div>
      <div className="mx-4 text-left flex flex-col h-44 overflow-y-auto mt-2">
        {!show ? (
          <h1
            onClick={() => change(!show)}
            className="text-lg cursor-pointer font-bold mt-4 text-blue-500 "
          >
            Add New
          </h1>
        ) : (
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
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Photo"
              name="img"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Grade"
              name="grade"
              rules={[{ required: true, message: "Please input your grade!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Research Area"
              name="research"
              rules={[
                { required: true, message: "Please input your research area!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Office Number"
              name="office"
              rules={[
                { required: true, message: "Please input your office number!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Website"
              name="webUrl"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button loading={loading} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
};
function People({ id }) {
  const params = useParams();
  const [data2, setData] = useState();
  const [data3, setData3] = useState();
  const n = Math.round(Math.random() * (imgList.length - 1 - 0) + 0);
  const imgSrc = imgList[n];
  const { user } = useReducer();
  useEffect(() => {
    id === 1
      ? onSnapshot(
          query(
            collection(db, "People", "TRInjm0tAFTucocoGSvj", "Faculty"),
            orderBy("name")
          ),
          (dc) =>
            setData(dc.docs.map((dic) => ({ data: dic.data(), id: dic.id })))
        )
      : onSnapshot(
          query(
            collection(db, "People", "TRInjm0tAFTucocoGSvj", "Student"),
            orderBy("name")
          ),
          (dc) =>
            setData(dc.docs.map((dic) => ({ data: dic.data(), id: dic.id })))
        );
  }, [id]);
  useEffect(() => {
    console.log(data2);
  }, [data2]);

  const dataPhD = [
    {
      name: "Akshat Khanna",
      jy: "2018",
      Research: "Gravitational Wave Astronomy",
      adv: "AB 5/326",
      email: "asengupta",
      webUrl: "",
      img: "https://physics.iitgn.ac.in/img/srs/akshat.jpg",
    },
    {
      name: "Akshat Khanna",
      jy: "2018",
      Research: "Gravitational Wave Astronomy",
      adv: "AB 5/326",
      email: "asengupta",
      webUrl: "",
      img: "https://physics.iitgn.ac.in/img/srs/akshat.jpg",
    },
    {
      name: "",
      jy: "",
      Research: "",
      adv: "",
      email: "",
      webUrl: "",
      img: "",
    },
  ];
  return (
    <div className="w-full flex flex-col -mt-2">
      <div className="relative text-center">
        <img
          src={imgSrc}
          className="w-full h-64 object-cover filter brightness-[40%]"
          alt=""
        />
        <h1 className=" text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          {id === 1 ? "Faculty" : "PhD Students"}
        </h1>
      </div>
      <div className="flex flex-wrap  mx-auto mt-5 pb-24 gap-5">
        {user && (id === 1 ? <AddUser /> : <AddStudent />)}
        {id === 1
          ? data2?.map((doc) => (
              <ContactCard
                data={doc.data}
                id={doc.id}
                key={`$key{doc.id}`}
                trash={user ? true : false}
              />
            ))
          : data2?.map((doc) => (
              <ContactCardPhD
                data={doc.data}
                id={doc.id}
                key={`$key{doc.id}`}
                trash={user ? true : false}
              />
            ))}
      </div>
    </div>
  );
}

export default People;
