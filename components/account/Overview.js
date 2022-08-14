import React, { useEffect, useState } from 'react';
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
    render: (id) => <p>{id.toString()}</p>,
  },
  {
    title: "Charity",
    dataIndex: "charity",
    key: "charity",
    render: (charity) => <p>{charity}</p>,
  },
  {
    title: "Hours",
    dataIndex: "hour",
    key: "hour",
    render: (hour) => <p>{hour.toString()}</p>,
  },
  {
    title: 'Redeem',
    dataIndex: "isRedeemed",
    key: 'isRedeemed',
    fixed: 'right',
    width: 100,
    render: (isRedeemed) => <Checkbox disabled={isRedeemed} />,
  },
];

function Overview({ account, volunteerContract }) {
  const [form] = Form.useForm();

  const [volunteerNFTs, setVolunteerNFTs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(volunteerContract) fetchNFTs();
  }, [volunteerContract])

  const fetchNFTs = async (values) => {
    try{
      setLoading(true);
      const nfts = await volunteerContract.fetchUserVolunteerNFTs(account);
      console.log(nfts);
      setVolunteerNFTs(nfts);

      setLoading(false);
    } catch(error) {
      console.error(error);
      setLoading(false);
    }
  };
  

  const redeemNFTs = async () => {
    try{
      setLoading(true);
      const transaction = await volunteerContract.redeemVolunteerNFT("1");
      const tx = await transaction.wait();
      console.log(tx);

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
        <Table columns={columns} dataSource={volunteerNFTs} />
        <Button type="primary" htmlType="submit" className="primary-bg-color" onClick={redeemNFTs}>
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