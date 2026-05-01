// components/Footer.tsx
import { Layout, Row, Col, Typography, Button } from 'antd';
import { 
  HeartFilled,
  ArrowUpOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined
} from '@ant-design/icons';
import '../styles/footerS.css';

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <AntFooter className="footer">
      <div className="footer-content">
        <Row gutter={[16, 24]} align="middle" justify="space-between">
          <Col xs={24} sm={8}>
            <div className="footer-logo"> </div>
          </Col>
          
          <Col xs={24} sm={8} className="footer-center">
            <Text className="copyright">
              © {currentYear} All rights reserved | Rose Wei
            </Text>
          </Col>
          
          <Col xs={24} sm={8} className="footer-right">
            {/* <div className="social-links">
              <Link href="https://github.com/Rose-Wei10" target="_blank">
                <GithubOutlined className="footer-icon" />
              </Link>
              <Link href="https://www.linkedin.com/in/rose-wei/" target="_blank">
                <LinkedinOutlined className="footer-icon" />
              </Link>
              <Link href="mailto:rosewei6@gmail.com">
                <MailOutlined className="footer-icon" />
              </Link>
            </div> */}
            
            <Button 
              type="text" 
              icon={<ArrowUpOutlined />} 
              onClick={scrollToTop}
              className="scroll-top-button"
            />
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
}