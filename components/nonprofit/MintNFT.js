import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Form, Select, Input, Button, Typography  } from 'antd';

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

function MintNFT() {
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

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <Card style={{ margin: '1rem 0'}}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0" }}>
          Mint Volunteer Hour NFT
        </h1>
      </Card>
      <Card>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="charities"
            label="Charities"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="volunteerAddress"
            label="Volunteer Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="volunteerHours"
            label="Volunteer Hours"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout} loading={loading}>
            <Button type="primary" htmlType="submit" className="primary-bg-color">
              Mint
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default MintNFT;