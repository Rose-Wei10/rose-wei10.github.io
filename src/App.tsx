// src/App.tsx
import { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import type { MenuProps } from 'antd';
import {
  UserOutlined,
  FileOutlined,
  ReadOutlined,
  ProjectOutlined,
  ExperimentOutlined,
  ContactsOutlined,
  MenuOutlined
} from '@ant-design/icons';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const { Header, Content } = Layout;

export default function App() {
  const [activeSection, setActiveSection] = useState('landing');
  const [showHeader, setShowHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > window.innerHeight * 0.5);

      const sections = ['about', 'resume', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuProps['items'] = [
    {
      key: 'about',
      icon: <UserOutlined />,
      label: 'About Me',
      onClick: () => scrollToSection('about'),
    },
    {
      key: 'resume',
      icon: <ReadOutlined />,
      label: 'Education', 
      onClick: () => scrollToSection('resume'),
    },
    {
      key: 'experience',
      icon: <ExperimentOutlined />,
      label: 'Experience',
      onClick: () => scrollToSection('experience'),
    },
    {
      key: 'projects',
      icon: <ProjectOutlined />,
      label: 'Projects',
      onClick: () => scrollToSection('projects'),
    },
    {
      key: 'contact',
      icon: <ContactsOutlined />,
      label: 'Contact',
      onClick: () => scrollToSection('contact'),
    },
  ];

  const renderMenu = () => (
    <Menu
      mode={isMobile ? "vertical" : "horizontal"}
      items={menuItems}
      selectedKeys={[activeSection]}
      className="nav-menu"
    />
  );

  return (
    <Layout className="layout">
      <Header className={`header visible`}>
        <div className="header-content">
          <div className="logo">Rose Portfolio</div>
          
          {isMobile ? (
            <>
              <Button
                className="mobile-menu-button"
                icon={<MenuOutlined />}
                onClick={() => setMobileMenuOpen(true)}
              />
              <Drawer
                title="Menu"
                placement="right"
                onClose={() => setMobileMenuOpen(false)}
                open={mobileMenuOpen}
                className="mobile-menu-drawer"
              >
                {renderMenu()}
              </Drawer>
            </>
          ) : (
            renderMenu()
          )}
        </div>
      </Header>

      <div className="landing-section">
        <Landing />
      </div>

        <section id="about" className="">
          <AboutMe />
        </section>

        <section id="resume" className="">
          <Resume />
        </section>

        <section id="experience" className="">
          <Experience />
        </section>

        <section id="projects" className="">
          <Projects />
        </section>
      
      
      {/* Contact section outside Content */}
      <section id="contact" className="contact-section">
        <Contact />
      </section>
      
      {/* Footer */}
      <Footer />
    </Layout>
  );
}