// components/AboutMe.tsx
import { Row, Col, Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import '../styles/aboutme.css';

const { Title, Paragraph } = Typography;

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.7);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1sbmZ3L64xzkz6GPhovuV-o50C3C9MkAW3xI5opbWAa0/edit?usp=sharing', '_blank');
  };

  return (
    <div className="about-background">
      <div className="about-container">
        <div className={`about-content ${isVisible ? 'animate-in' : ''}`}>
          <Title level={1} className="about-title">About Me</Title>
          
          <Row gutter={[48, 48]} align="middle" className="about-row">
            <Col xs={24} md={12} className="about-image-col">
              <div className="about-image-container">
                <div className="about-image-wrapper">
                  <img src="/rose_image.jpg" alt="Rose Wei" className="about-image" />
                  <div className="image-decoration"></div>
                </div>
                <div className="pulse-circle"></div>
              </div>
            </Col>
            
            <Col xs={24} md={12} className="about-text-col">
              <div className="about-intro">
                <Title level={2} className="name-title">Rose Wei</Title>
                <Title level={4} className="role-title">Software Engineer</Title>
                
                <Button 
                  icon={<DownloadOutlined />} 
                  size="large"
                  onClick={handleResumeClick}
                  className="resume-button"
                >
                  Download Resume
                </Button>
                
                <div className="about-paragraphs">
                  <Paragraph className="about-paragraph">
                  As a recent Master’s graduate in Computer Science from the University of Illinois Urbana-Champaign, 
                  I’m passionate about building robust and scalable applications as a full-stack developer, with a 
                  particular focus on backend technologies. With experience developing both web applications and 3D 
                  games, I continuously expand my technical toolkit and approach complex problems with clean, efficient, 
                  and well-structured code. Currently based in Washington state, I’m eager to apply my diverse skills to 
                  innovative projects that create meaningful impact.
                  </Paragraph>
                  
                  {/* <Paragraph className="about-paragraph">
                    Add more details about your background, what drives you, and what you're
                    looking to achieve in your career.
                  </Paragraph> */}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="about-decorations">
        <div className="decoration-element element-1"></div>
        <div className="decoration-element element-2"></div>
        <div className="decoration-element element-3"></div>
      </div>
    </div>
  );
}