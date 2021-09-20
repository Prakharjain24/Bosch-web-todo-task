import { Table, Tag, Space } from "antd";
import { useEffect, useState } from "react";

interface ICreateTask {
  company: string;
  project: string;
  taskname: string;
  priority: string;
  taskdescription: string;
}

const columns = [
  {
    title: "Task Id",
    dataIndex: "taskid",
    key: "taskid",
  },
  {
    title: "Task Name",
    dataIndex: "taskname",
    key: "taskname",
  },
  {
    title: "Project",
    dataIndex: "project",
    key: "project",
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
  {
    title: "Remove",
    dataIndex: "remove",
    key: "remove",
  },
];

const data = [
  {
    taskid: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    action: "nikhil",
  },
];

export const RenderTable = () => {
  //   const [state, setState] = useState<any>();

  //   useEffect(() => {
  //     let localData =  JSON.parse(localStorage.getItem("task") || "{}") as ICreateTask;
  //     console.log(5662,localData)
  //   },[]);
  return (
    <>
      {/* {console.log("state : ", state)} */}
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};
