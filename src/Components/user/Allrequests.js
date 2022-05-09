import { Table } from "antd";
import React, { useState } from "react";
export default function Allrequests() {
  const columns = [
    {
      title: "Username",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },

    { title: "Loanamount", dataIndex: "address", key: "1" },
    { title: "Interests", dataIndex: "address", key: "2" },
    { title: "Months", dataIndex: "address", key: "2" },
    { title: "Created at", dataIndex: "address", key: "2" },

    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a>Status</a>,
    },
  ];

  const data = [
    {
      key: "1",
      name: "Tharunsai",
      age: 32,
      address: "New york",
    },
    {
      key: "2",
      name: "Dinesh",
      age: 40,
      address: "London",
    },
  ];
  return (
    <>
      <div style={{ padding: "100px" }}>
        <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />;
      </div>
    </>
  );
}
