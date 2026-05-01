import { Card, Typography, Tag, Button, Carousel } from 'antd';
import { GithubOutlined, LinkOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useEffect, useRef } from 'react';
import type { CarouselRef } from 'antd/es/carousel';
import '../styles/projects.css';

const { Title, Paragraph } = Typography;

export default function Projects() {
  const imageCarouselRefs = useRef<(CarouselRef | null)[]>([]);

  const projects = [
    {
      title: 'Academic World Dashboard',
      description: 'CS411 Database Systems Project • July 2025 - October 2025',
      longDescription: [
        'Built a comprehensive analytics dashboard for exploring academic publications, faculty productivity, and university research performance using Dash and Python.',
        'Integrated MySQL, MongoDB, and Neo4j databases to enable real-time, multi-source querying and interactive visualizations for research insights.',
        'Implemented faculty comparison, keyword-based search, and data management widgets with responsive layouts and dynamic updates.',
        'Optimized database queries using indexing, transactions, and materialized views to improve retrieval performance and reliability.'
      ],
      tech: ['Python', 'Dash', 'Plotly', 'MySQL', 'MongoDB', 'Neo4j'],
      github: 'https://github.com/CS411DSO-SU25/RongWei',
      demo: 'https://www.youtube.com/watch?v=n4ST6as_j3o',
      images: ['/academicProjectSnap.png']
    },
    {
      title: 'Anniversary Report Tool',
      description: 'GeoEngineers | Corporate Alliance Program • Sept 2023 - June 2024',
      longDescription: [
        'Engineered an automated tracking system using React and PostgreSQL, streamlining employee milestone recognition.',
        'Developed a real-time notification system for anniversaries and milestones with Node.js, enhancing HR engagement and efficiency.'
      ],
      tech: ['React', 'PostgreSQL', 'Node.js'],
      github: 'https://github.com/yourusername/anniversary-tool',
      demo: 'https://anniversary-tool-demo.com',
      images: ['/geoEngineerSnap.png']
    },
    {
      title: "The Wizard's Apprentice",
      description: 'Game Development • Sept 2023 - Dec 2023',
      longDescription: [
        'Architected and developed a 3D platformer combat game using C# and Unity, featuring progressive ability unlocking and engaging combat mechanics.',
        'Designed and implemented a health system, scoring mechanism, and multi-level progression with Unity and 3D modeling, enhancing gameplay experience.'
      ],
      tech: ['C#', 'Unity', '3D Modeling'],
      github: 'https://github.com/yourusername/wizards-apprentice',
      demo: 'https://wizards-apprentice-demo.com',
      images: ['/start_screen.png']
    }
  ];

  useEffect(() => {
    imageCarouselRefs.current = imageCarouselRefs.current.slice(0, projects.length);
  }, [projects.length]);

  const navigateImageGallery = (projectIndex: number, direction: 'prev' | 'next') => {
    const carousel = imageCarouselRefs.current[projectIndex];
    if (carousel) direction === 'prev' ? carousel.prev() : carousel.next();
  };

  return (
    <div className="projects-background">
      <div className="projects-container">
        <Title level={1} className="projects-title">
          Projects
        </Title>

        {/* Two-column grid */}
        <div className="projects-scroll-container">
  <div className="projects-inline">
    {projects.map((project, index) => (
      <Card
        key={index}
        className="project-card"
        cover={
          <div className="project-image-container">
            {project.images.length > 1 ? (
              <>
                <Carousel
                  autoplay={false}
                  dots={true}
                  infinite={true}
                  speed={500}
                  ref={(ref) => {
                    imageCarouselRefs.current[index] = ref;
                  }}
                  className="image-gallery-carousel"
                >
                  {project.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="gallery-image-wrapper">
                      <img
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        src={image}
                        className="project-image"
                      />
                    </div>
                  ))}
                </Carousel>

                <div className="image-gallery-controls">
                  <button
                    className="gallery-control-button prev-button"
                    onClick={() => navigateImageGallery(index, 'prev')}
                  >
                    <LeftOutlined />
                  </button>
                  <button
                    className="gallery-control-button next-button"
                    onClick={() => navigateImageGallery(index, 'next')}
                  >
                    <RightOutlined />
                  </button>
                </div>
              </>
            ) : (
              <img alt={project.title} src={project.images[0]} className="project-image" />
            )}
            <div className="project-overlay"></div>
          </div>
        }
        bordered={false}
      >
        <Title level={3} className="project-card-title">{project.title}</Title>
        <Paragraph className="project-card-subtitle">{project.description}</Paragraph>

        <div className="project-description-list">
          {project.longDescription.map((desc, i) => (
            <Paragraph key={i} className="project-card-description-item">
              • {desc}
            </Paragraph>
          ))}
        </div>

        <div className="project-tags">
          {project.tech.map((tech) => (
            <Tag className="project-tag" key={tech}>
              {tech}
            </Tag>
          ))}
        </div>

        <div className="project-buttons">
          <Button
            className="github-button"
            icon={<GithubOutlined />}
            href={project.github}
            target="_blank"
            size="large"
          >
            GitHub
          </Button>
          <Button
            className="demo-button"
            icon={<LinkOutlined />}
            href={project.demo}
            target="_blank"
            size="large"
          >
            Live Demo
          </Button>
        </div>
      </Card>
    ))}
  </div>
</div>
      </div>
    </div>
  );
}
