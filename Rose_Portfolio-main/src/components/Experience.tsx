// components/Experience.tsx
import { Typography, Card } from 'antd';
import '../styles/experience.css';

const { Title, Paragraph } = Typography;

export default function Experience() {
  return (
    <div className="experience-background">
      <div className="experience-container">
        <Title level={1} className="experience-title">
          Professional Experience
        </Title>
        
        <div className="single-experience-container">
          <Card className="experience-card centered-experience">
            <Title level={4}>TradingFlow Internship</Title>
            <Title level={5}>Redmond, WA • July 2024 - Present</Title>
            <Title level={5} className="role-title">Full Stack Developer</Title>
            <Paragraph>
              <ul>
                <li>Engineered a full-stack options data portal using <strong>Next.js</strong>, <strong>React</strong>, <strong>TypeScript</strong>, and Clerk, featuring streamlined user authentication and subscription management through Stripe integration</li>
                <li>Developed and deployed custom APIs with <strong>Clickhouse</strong> database for efficient options data storage and retrieval, enabling data downloads based on user specifications</li>
                <li>Enhanced platform functionality and advanced AI stock training capabilities, resulting in improved customer experience and 30% increase in user engagement</li>
              </ul>
            </Paragraph>
          </Card>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="experience-floating-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
      </div>
    </div>
  );
}