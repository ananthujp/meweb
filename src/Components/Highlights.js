import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import useReducer from "../hooks/reducerHook";
const { Meta } = Card;
const FullElement = ({ title, img, details }) => {
  return (
    <div className="flex flex-col">
      <img src={img} className="w-full h-44 object-cover" alt="" />
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-semibold text-lg text-gray-800">{title}</h1>
        <textarea className=" text-sm text-gray-500">{details}</textarea>
      </div>
    </div>
  );
};
const HighlightComp = ({ title, img, details }) => {
  const { setOverlay } = useReducer();

  return (
    // <div className="flex flex-col mx-2 rounded-lg bg-white p-2 gap-2 w-2/5 shadow-md">
    //   <img className="w-full h-32 object-cover" src={img} alt="" />
    //   <h1 className=" font-bold">{title}</h1>
    //   <h1 className=" font-light text-sm">{details}</h1>
    //   <div className="bg-rose-600 text-white p-1 text-sm w-20 rounded-md cursor-pointer">
    //     Read More
    //   </div>
    // </div>
    <Card
      loading={false}
      className="flex flex-col justify-between shadow-sm hover:shadow-xl"
      style={{
        width: 300,
        marginRight: 30,
      }}
      cover={
        <img alt="example" className="w-full h-64 object-cover" src={img} />
      }
      actions={[
        <ArrowTopRightOnSquareIcon
          onClick={() =>
            setOverlay({
              child: <FullElement title={title} img={img} details={details} />,
              visible: true,
            })
          }
          className="w-4 mx-auto my-auto"
        />,
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta title={title} description={details} />
    </Card>
  );
};
function Highlights() {
  const Items = [
    {
      title: "Subject-Specific Gait Intervention Using WeARS",
      img: "https://drive.google.com/uc?id=1EDY1ERktj0GXntFkMe4v6Z8rcXz9PWan",
      details:
        "A single-joint abnormality affects gait to cause multi-joint adaptation.",
      link: "",
    },
    {
      title: "Confinement plate effects on boiling heat transfer",
      img: "https://drive.google.com/uc?id=1jxrEuadgeyia7_mo-6eocEIEW5cF0vGI",
      details:
        "A super-hydrophobic confinement plate achieves up to 80% increase in heat transfer.",
      link: "",
    },
    {
      title: "Learning",
      img: "https://drive.google.com/uc?id=1kG76N-pyD7aOUXkDSYIS6xrMuX5sgeQI",
      details: "Snapshots of active-learning pedagogy",
      link: "",
    },
  ];
  return (
    <div className="flex flex-col">
      <h1 className="my-1 font-bold text-xl">Highlights</h1>
      <div className="flex flex-row w-full overflow-x-auto mt-4">
        {Items.map((doc, i) => (
          <HighlightComp
            key={`highlights.comp${i}`}
            title={doc.title}
            img={doc.img}
            details={doc.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Highlights;
