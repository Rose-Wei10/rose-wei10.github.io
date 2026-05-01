// components/Landing.tsx
import { useEffect, useState } from 'react';
import { Typography, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../styles/landingS.css';

const { Title } = Typography;

export default function Landing() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-section">
      <div className="landing-content">
        <Title 
          className={`welcome-text ${visible ? 'fade-in' : ''}`}
          style={{ color: 'white' }}
        >
          Welcome to Rose Portfolio!
        </Title>
        <Button 
          type="text" 
          icon={<DownOutlined />} 
          onClick={scrollToContent}
          className="scroll-button"
        >
          Explore
        </Button>
      </div>
    </div>
  );
}