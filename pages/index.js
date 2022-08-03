import React from 'react';
import { Row, Col, Card, Typography, Button } from 'antd';
import { SmileOutlined, GiftOutlined, DollarCircleOutlined } from '@ant-design/icons';

const styles = {
  Landing: {
    WebkitBoxPack: "start",
    margin: "10px auto",
    maxWidth: "1000px",
  },
  SubHeader: {
    color: '#3AA628',
    fontSize: '26px',
    marginBottom: '-10px'
  },
  SubHeader2: {
    color: '#3AA628',
    fontSize: '22px',
  },
};

function App() {
  return <div style={styles.Landing}>
    <br />
    <br />
    <Row gutter={16}>
      <Col className="gutter-row" xs={{ span: 32 }} md={{ span: 12 }}>
        <Typography.Title style={{ marginTop: '3rem', marginBottom: 0}}>
          Volunteer to Earn
        </Typography.Title>
        <p style={styles.SubHeader}>Volunteer</p>
        <p style={styles.SubHeader}>Earn DoGood tokens</p>
        <br />
        <Button className="primary-bg-color" type="primary" size="large">
          Get STARTED
        </Button>
      </Col>
      <Col className="gutter-row" xs={{ span: 32 }} md={{ span: 12 }}>
        <center>
          <img src="/home-img.png" alt="Home" width={300} height={300} />
        </center>
      </Col>
    </Row>
    <br />
    <br />
    <br />
    <Row gutter={16}>
      <Col className="gutter-row" xs={{ span: 32 }} md={{ span: 12 }} lg={{ span: 8}}>
        <Card>
          <center>
            <SmileOutlined style={{ fontSize: '3rem'}} />
            <h2>
              Volunteer
            </h2>
            <p>Volunteer with your favorite non-profit organization</p>
          </center>
        </Card>
      </Col>
      <Col className="gutter-row" xs={{ span: 32 }} md={{ span: 12 }} lg={{ span: 8}}>
        <Card>
          <center>
            <GiftOutlined style={{ fontSize: '3rem'}} />
            <h2>Earn</h2>
            <p>Receive NFT tracking your volunteering hours and redeem it for DoGood tokens </p>
          </center>
        </Card>
      </Col>
      <Col className="gutter-row" xs={{ span: 32 }} md={{ span: 12 }} lg={{ span: 8}}>
        <Card>
          <center>
            <DollarCircleOutlined style={{ fontSize: '3rem'}} />
            <h2>Reward</h2>
            <p>Buy company sponsored items with your DoGood tokens</p>
          </center>
        </Card>
      </Col>
    </Row>
  </div>;
}

export default App;