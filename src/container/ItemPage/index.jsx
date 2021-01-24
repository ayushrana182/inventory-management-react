import React from 'react';
import { Form, Input, Row, Col, Menu } from 'antd';
import { Link } from 'react-router-dom';

function ItemPage() {
  return (
    <div>
      <Row>
        <Menu
          style={{ margin: 10, width: '100%' }}
          theme="dark"
          mode="horizontal"
        >
          <Menu.Item key="1">
            <Link> Add Item</Link>
          </Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
        </Menu>
        <Form
          style={{ width: '100%' }}
          className="login-form "
          layout="inline"
          initialValues={{ remember: true }}
        >
          <Col lg={{ span: 10 }}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input className="from-input" placeholder="Username" />
            </Form.Item>
          </Col>
          <Col lg={{ span: 10 }}>
            <Form.Item
              name="Item Name"
              rules={[
                { required: true, message: 'Please input your Item Name!' },
              ]}
            >
              <Input className="from-input" placeholder="Item Name" />
            </Form.Item>
          </Col>
          <Col lg={{ span: 10 }}>
            <Form.Item
              name="Local Name"
              rules={[
                { required: true, message: 'Please input your Local Name!' },
              ]}
            >
              <Input className="from-input" placeholder="Local Name" />
            </Form.Item>
          </Col>
          <Col lg={{ span: 10 }}>
            <Form.Item
              name="Item Code"
              rules={[
                { required: true, message: 'Please input your Item Code!' },
              ]}
            >
              <Input className="from-input" placeholder="Item Code" />
            </Form.Item>
          </Col>
        </Form>
      </Row>
    </div>
  );
}

export default ItemPage;
