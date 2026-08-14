import './App.css'

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact']

const skillGroups = [
  {
    title: 'Languages',
    skills: ['C++', 'Python', 'JavaScript', 'C', 'SQL'],
  },
  {
    title: 'Development',
    skills: ['React', 'HTML', 'CSS', 'Node.js', 'Firebase'],
  },
  {
    title: 'AI / ML',
    skills: ['TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Google Colab'],
  },
]

const featuredProjects = [
  {
    number: '01',
    category: 'Machine Learning',
    title: 'FasalSathi',
    description:
      'AI-powered crop yield prediction & optimization with practical insights for better agricultural outcomes.',
    stack: ['Python', 'XGBoost', 'LSTM', 'CNN'],
    link: 'https://github.com/',
    repo: 'https://github.com/',
  },
  {
    number: '02',
    category: 'Web App',
    title: 'EduNavia',
    description:
      'Personalized university and course navigator designed to simplify academic planning and informed decision-making.',
    stack: ['React', 'Node.js', 'Firebase', 'JS'],
    link: 'https://github.com/',
    repo: 'https://github.com/',
  },
  {
    number: '03',
    category: 'Computer Vision',
    title: 'Skin Cancer Detection',
    description:
      'MobileNetV2-driven lesion classification system for early skin cancer detection using image analysis.',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
    link: 'https://github.com/',
    repo: 'https://github.com/',
  },
]

const miniProjects = [
  {
    title: 'Student Management System',
    description: 'Python OOP + JSON-based records and automation for academic data handling.',
  },
  {
    title: 'Library Management System',
    description: 'Internship project focused on efficient cataloging, circulation, and record management.',
  },
]

const experience = [
  {
    period: '2024 — Present',
    role: 'Software Developer & AI Enthusiast',
    company: 'Independent Projects',
    details:
      'Building practical software solutions and AI-driven products that combine research, engineering, and product thinking.',
  },
  {
    period: '2023 — 2024',
    role: 'Developer Intern',
    company: 'Hands-on Learning',
    details:
      'Worked on end-to-end projects involving problem solving, machine learning, and application development workflows.',
  },
]

const achievements = [
  'Built multiple industry-inspired AI and software projects across healthcare, education, and agriculture.',
  'Focused on strong fundamentals in data structures, algorithms, and scalable application design.',
  'Exploring backend systems, ML pipelines, and modern product engineering practices.',
]

const codingProfiles = [
  { label: 'LeetCode', href: 'https://leetcode.com/' },
  { label: 'CodeChef', href: 'https://www.codechef.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/' },
]

const resumeLink = 'https://drive.google.com/'

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">SHREYSHI</div>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main className="portfolio">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Hi, I&apos;m Shreyshi.</p>
            <h1>
              <span>Software Developer</span>
              <span className="highlight-line">building intelligent &amp; scalable solutions.</span>
            </h1>
            <p className="lead">
              I enjoy turning ideas into practical software and exploring the intersection of development,
              data and AI.
            </p>

            <div className="cta-row">
              <a href="#projects" className="primary-button">
                Explore my work <span aria-hidden="true">→</span>
              </a>
              <a href={resumeLink} target="_blank" rel="noreferrer" className="secondary-button">
                Download Resume <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="status-pill">
              <span className="status-label">Currently exploring</span>
              <span className="status-value">Backend Development · System Design · AI/ML</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-orb orb-one" />
            <div className="visual-orb orb-two" />
            <div className="dashboard-card main-card">
              <span className="chip">AI / ML</span>
              <strong>Model Pipelines</strong>
              <small>Predictive systems × computer vision</small>
            </div>
            <div className="dashboard-card floating-card">
              <span className="chip chip-cyan">System Design</span>
              <strong>Scalable Apps</strong>
            </div>
            <div className="mini-metrics">
              <div>
                <span>Projects</span>
                <strong>10+</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>AI</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section content-section">
          <div className="section-heading">
            <span>ABOUT</span>
          </div>
          <div className="about-grid">
            <p>
              I&apos;m a software developer with a strong interest in building intelligent, data-driven products.
              My work blends engineering fundamentals with AI/ML exploration to create solutions that are both
              useful and scalable.
            </p>
            <div className="meta-block">
              <p>
                <strong>Education</strong>
                <span>B.Tech / Computer Science &amp; Engineering</span>
              </p>
              <p>
                <strong>Interests</strong>
                <span>Backend Development · Data Structures · Machine Learning</span>
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section content-section">
          <div className="section-heading">
            <span>TECH STACK</span>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section content-section">
          <div className="section-heading">
            <span>FEATURED PROJECTS</span>
          </div>

          <div className="project-list">
            {featuredProjects.map((project) => (
              <article key={project.number} className="project-card">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <span className="project-number">{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list project-tags">
                  {project.stack.map((tag) => (
                    <span key={tag} className="tag tag-light">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.link}>Live Demo <span aria-hidden="true">→</span></a>
                  <a href={project.repo}>GitHub <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>

          <div className="mini-projects">
            {miniProjects.map((project) => (
              <div key={project.title} className="mini-project-card">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section content-section">
          <div className="section-heading">
            <span>EXPERIENCE</span>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <div key={`${item.role}-${item.company}`} className="timeline-item">
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="company-name">{item.company}</p>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" className="section content-section">
          <div className="section-heading">
            <span>ACHIEVEMENTS</span>
          </div>
          <ul className="achievement-list">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section content-section">
          <div className="section-heading">
            <span>CODING PROFILES</span>
          </div>
          <div className="profile-row">
            {codingProfiles.map((profile) => (
              <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer" className="profile-pill">
                {profile.label}
              </a>
            ))}
          </div>

          <div className="contact-card">
            <div>
              <span className="contact-label">Contact</span>
              <h3>Let&apos;s build something meaningful.</h3>
            </div>
            <a href="mailto:shreyshi@example.com">shreyshi@example.com</a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
