const projects = [
  {
    title: "AI-Assisted Search-and-Rescue Drone",
    description:
      "A modular autonomous drone platform integrating flight control, onboard perception, LiDAR sensing, and human detection for search-and-rescue scenarios.",
    status: "Active",
  },
  {
    title: "Computational Tissue Engineering",
    description:
      "A scaffold-based regenerative medicine model combining electromagnetic stimulation, drug release dynamics, and AI-driven optimization.",
    status: "Research",
  },
  {
    title: "ChemSim Neural Network",
    description:
      "A chemistry-focused machine learning project exploring molecular property prediction and computational modeling.",
    status: "In Development",
  },
];

const skills = [
  "Electrical Engineering",
  "Embedded Systems",
  "Robotics",
  "AI / ML",
  "Python",
  "C++",
  "Control Systems",
  "Scientific Computing",
];

const contacts = [
  {
    label: "Email",
    href: "mailto:ikitotony@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Tonyflexc",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tony-ikito-73430b282?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

function InfoCard({ eyebrow, title, description }) {
  return (
    <div className="panel soft-panel">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, status }) {
  return (
    <article className="panel project-card">
      <span className="status-pill">{status}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <section className="hero-section">
        <div className="hero-glow hero-glow-right" />
        <div className="hero-glow hero-glow-left" />

        <div className="container hero-content">
          <div className="hero-badge">Engineering • Robotics • AI • Research</div>
          <h1>Tony Ikito</h1>
          <p className="hero-copy">
            I work at the intersection of engineering, computation, and
            scientific discovery, building systems that range from physical
            prototypes and electronics to computational models and intelligent
            algorithms used to explore complex scientific problems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid three-col">
          <InfoCard
            eyebrow="Focus"
            title="Hands-on Engineering"
            description="Building real systems under real constraints: sensing, control, power, safety, and computation."
          />
          <InfoCard
            eyebrow="Approach"
            title="Theory + Execution"
            description="Strong mathematical thinking paired with practical prototyping, iteration, debugging, and system integration."
          />
          <InfoCard
            eyebrow="Goal"
            title="Impactful Technology"
            description="Designing tools that can matter in the real world — from rescue robotics to science-driven healthcare and computational discovery."
          />
        </div>
      </section>

      <section className="section section-tight" id="projects">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Portfolio</p>
            <h2>Featured Projects</h2>
          </div>
          <div className="card-grid three-col">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="panel">
            <p className="eyebrow">About</p>
            <h2>Engineer, builder, relentless debugger</h2>
            <p>
              I’m an engineering student focused on robotics, embedded systems,
              computation, AI, and science. My work sits at the intersection of
              rigorous STEM thinking and hands-on experimentation. I care about
              solving difficult technical problems, not just making pretty slides
              about them. Fancy vapor is cheap. Function is king.
            </p>
          </div>

          <div className="panel">
            <p className="eyebrow">Skills</p>
            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bottom" id="contact">
        <div className="container">
          <div className="panel contact-panel">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something real</h2>
            <p>
              You can reach me directly through email, GitHub, or LinkedIn.
            </p>
            <div className="contact-list">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "Email" ? undefined : "_blank"}
                  rel={contact.label === "Email" ? undefined : "noreferrer"}
                  className="contact-link"
                >
                  {contact.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
