import { Typography, Timeline, Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import { 
  ReadOutlined,
  CodeOutlined,
  ToolOutlined
} from '@ant-design/icons';
import '../styles/resume.css';

const { Title, Paragraph } = Typography;

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const resumeSection = document.getElementById('resume');
      if (resumeSection) {
        const rect = resumeSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.7);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = {
    programmingLanguages: [
      { name: 'Java', level: 100 },
      { name: 'JavaScript & TypeScript', level: 95 },
      { name: 'HTML5/CSS3', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'C', level: 75 },
      { name: 'C++', level: 70 },
    ],
    toolsAndTechnologies: [
      { name: 'Git', level: 100 },
      { name: 'React', level: 95 },
      { name: 'Unity', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Linux', level: 75 },
    ],
  };

  const renderSkillSection = (title: string, skills: Array<{ name: string; level: number }>, icon: React.ReactNode) => (
    <div className={`skill-section ${isVisible ? 'animate-in' : ''}`}>
      <div className="skill-header">
        {icon}
        <Title level={3} className="skill-title">{title}</Title>
      </div>
      <Row gutter={[16, 8]} className="skill-grid">
        {skills.map((skill, index) => (
          <Col xs={24} sm={12} key={skill.name}>
            <div 
              className="skill-item" 
              style={{ animationDelay: `${0.1 + (index * 0.1)}s` }}
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-container">
                <div 
                  className="skill-bar-fill" 
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    background: `linear-gradient(90deg, #108ee9 ${skill.level / 2}%, #87d068)`
                  }}
                ></div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );

  return (
    <div className="resume-background" id="resume">
      <div className="resume-inner-container">
        <Title level={1} className="section-title resume-title">
          Education
        </Title>
        
        <div className="education-content">
          <div className={`education-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="education-header">
              <ReadOutlined className="education-icon" />
              <Title level={3} className="education-title">Academic Background</Title>
            </div>
            
            <Timeline
              className="education-timeline"
              items={[
                {
                  children: (
                    <div className="education-item">
                      <Title level={4} className="university-name">
                        University of Illinois Urbana-Champaign
                      </Title>
                      <div className="education-details">
                        <div className="education-degree">M.S. in Computer Science</div>
                        <div className="education-years">2025 - Present</div>
                      </div>
                      <Paragraph className="education-description">
                        Pursuing a Master’s in Computer Science with focus on Machine Learning, Data Systems, and Applied AI. 
                        Engaging in advanced coursework and research that bridges theory and large-scale system implementation.
                        Collaborating with peers on real-world projects exploring intelligent systems and efficient data pipelines.
                      </Paragraph>
                    </div>
                  ),
                },
                {
                  children: (
                    <div className="education-item">
                      <Title level={4} className="university-name">
                        Western Washington University
                      </Title>
                      <div className="education-details">
                        <div className="education-degree">B.S. in Computer Science</div>
                        <div className="education-years">2020 - 2024</div>
                      </div>
                      <Paragraph className="education-description">
                        Completed a comprehensive undergraduate program emphasizing software engineering, algorithms, 
                        and data structures. Developed strong foundations in full-stack development and system design 
                        through academic projects, internships, and research. Graduated with distinction and a passion 
                        for building intelligent, efficient software systems.
                      </Paragraph>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
        
        <Title level={1} className="section-title skills-main-title">
          Skills
        </Title>
        
        <div className="skills-content">
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12} className="skills-column">
              {renderSkillSection(
                'Programming Languages', 
                skillCategories.programmingLanguages,
                <CodeOutlined className="skill-icon" />
              )}
            </Col>
            
            <Col xs={24} lg={12} className="skills-column">
              {renderSkillSection(
                'Tools and Technologies', 
                skillCategories.toolsAndTechnologies,
                <ToolOutlined className="skill-icon" />
              )}
            </Col>
          </Row>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="animated-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  );
}
