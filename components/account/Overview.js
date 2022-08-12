import React, { useState } from 'react';
import { Card, Table, Form, Checkbox, Button  } from 'antd';


const layout = {
  labelCol: {
    span: 5,
  },
  style: { maxWidth: "700px" }
};

const tailLayout = {
  wrapperCol: {
    offset: 16,
    span: 16,
  },
};

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Charity",
    dataIndex: "charity",
    key: "charity",
  },
  {
    title: "Hours",
    dataIndex: "hours",
    key: "hours",
  },
  {
    title: 'Redeem',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <Checkbox></Checkbox>,
  },
];

const data = [
  {
    id: 1,
    charity: "Red Cross",
    hours: 3
  },
  {
    id: 2,
    charity: "City Harvest",
    hours: 5
  }
];

function Overview() {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try{
      setLoading(true);
      console.log(values);

      setLoading(false);
    } catch(error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Card style={{ margin: '1rem 0'}}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0" }}>
          My Volunteer Hour NFT
        </h1>
      </Card>
      <Card>
        <Table columns={columns} dataSource={data} />
        <Button type="primary" htmlType="submit" className="primary-bg-color">
          Redeem
        </Button>
        <br />
        <br />
        <p>1 Volunteering hour can be redeemed for one DoGood token</p>
        <p>DoGood Token Balance: 0</p>
      </Card>
    </div>
  )
}

export default Overview;