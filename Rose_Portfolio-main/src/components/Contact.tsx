// components/Contact.tsx
import { Typography, Row, Col, Button, Card, Form, Input, message } from 'antd';
import { 
  LinkedinOutlined, 
  GithubOutlined, 
  MailOutlined,
  SendOutlined,
  EnvironmentOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import '../styles/global.css';
import '../styles/contactS.css';

const { Title, Text } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const [sending, setSending] = useState(false);

  const onFinish = async (values: any) => {
    try {
      setSending(true);
      
      // Prepare the data for our API
      const messageData = {
        name: values.name,
        email: values.email,
        subject: 'Contact Form Submission', // Default subject
        message: values.message
      };

      // Send the data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Show success message
      message.success('Message sent successfully! I will get back to you soon.');
      
      // Reset the form
      form.resetFields();
    } catch (error) {
      console.error('Error sending message:', error);
      message.error('Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="contact-background">
        <div className="contact-container">
          <Title level={1} className="contact-title">Contact Me</Title>
          
          <Row gutter={[32, 32]} className="contact-row">
            <Col xs={24} md={8}>
              <Card className="contact-info-card">
                <div className="contact-info-content">
                  <div className="contact-info-item">
                    <EnvironmentOutlined className="contact-icon" />
                    <span className="contact-text">Seattle, WA</span>
                  </div>
                  <div className="contact-info-item">
                    <PhoneOutlined className="contact-icon" />
                    <span className="contact-text">(206) 849-6276</span>
                  </div>
                  
                  <div className="social-media-header-container">
                    <h3 className="social-media-header">
                      <span>S</span>
                      <span>o</span>
                      <span>c</span>
                      <span>i</span>
                      <span>a</span>
                      <span>l</span>
                      <span>&nbsp;</span>
                      <span>M</span>
                      <span>e</span>
                      <span>d</span>
                      <span>i</span>
                      <span>a</span>
                    </h3>
                  </div>
                  
                  <div className="contact-social">
                    <Button 
                      type="primary" 
                      shape="circle"
                      icon={<LinkedinOutlined />}
                      href="https://www.linkedin.com/in/rose-wei/"
                      target="_blank"
                      size="large"
                      className="social-button"
                    />
                    <Button 
                      type="primary"
                      shape="circle"
                      icon={<GithubOutlined />}
                      href="https://github.com/Rose-Wei10"
                      target="_blank"
                      size="large"
                      className="social-button"
                    />
                    <Button 
                      type="primary"
                      shape="circle"
                      icon={<MailOutlined />}
                      href="mailto:rosewei6@gmail.com"
                      size="large"
                      className="social-button"
                    />
                  </div>
                </div>
              </Card>
            </Col>
            
            <Col xs={24} md={16}>
              <Card className="contact-form-card">
                <Form
                  form={form}
                  name="contact"
                  onFinish={onFinish}
                  layout="vertical"
                  size="large"
                >
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                  >
                    <Input placeholder="Your Name" />
                  </Form.Item>
                  
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input placeholder="Your Email" />
                  </Form.Item>
                  
                  <Form.Item
                    name="message"
                    rules={[{ required: true, message: 'Please enter your message' }]}
                  >
                    <TextArea 
                      placeholder="Your Message" 
                      rows={5}
                    />
                  </Form.Item>
                  
                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      icon={<SendOutlined />}
                      size="large"
                      block
                      className="send-button"
                      loading={sending}
                    >
                      {sending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}