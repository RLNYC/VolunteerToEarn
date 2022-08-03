import React from 'react';
import Link from 'next/link';
import { Layout, Menu, Button } from 'antd';

const styles = {
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
  logo: {
    width: '150px',
    fontSize: '16px',
    marginTop: '20px',
    color: 'green'
  }
};

function Navbar({ account, setAccount}) {


  return (
    <Layout.Header style={styles.header}>
      <p style={styles.logo}>VolunteerToEarn</p>
      <Menu
        theme="light"
        mode="horizontal"
        style={{
          display: "flex",
          fontSize: "17px",
          fontWeight: "500",
          marginLeft: "50px",
          width: "100%",
        }}
        defaultSelectedKeys={["landing"]}
      >
        <Menu.Item key="landing">
          <Link href="/">🏠 Home</Link>
        </Menu.Item>
      </Menu>
      <div style={styles.headerRight}>
      <Button
        style={{ margin: '0 1rem'}}
        type="primary"
      >
        { account ? account.substring(0, 7) + '...' + account.substring(35, 42) : "Connect to Wallet" }
      </Button>
      </div>
    </Layout.Header>
  )
}

export default Navbar;