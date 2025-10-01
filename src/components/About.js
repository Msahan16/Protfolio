import React, { useEffect } from 'react';
import './About.css';
import awsLogo from '../assests/Amazon-Web-Services-AWS-Logo.png';
import fileLogo from '../assests/file.png';
import southEasternLogo from '../assests/South_Eastern_University_of_Sri_Lanka_logo.png';
import londonMetLogo from '../assests/London_Metropolitan_University_Logo.jpg';

const About = () => {
  useEffect(() => {
    const skillBoxes = document.querySelectorAll('.skill-category');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );
    skillBoxes.forEach(box => observer.observe(box));

    const paragraphs = document.querySelectorAll('.about-text p, .education-item');
    const paraObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.3 }
    );
    paragraphs.forEach(p => paraObserver.observe(p));

    return () => {
      skillBoxes.forEach(box => observer.unobserve(box));
      paragraphs.forEach(p => paraObserver.unobserve(p));
    };
  }, []);

  const renderSkills = (skills) => (
    <ul>
      {skills.map((skill, i) => (
        <li key={i}>
          <div className="skill-line">
            <span className="skill-name">{skill.name}</span>
            <span className="progress-percent">{skill.width}</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: skill.width }}></div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Logos Marquee Above Education */}
      <section id="about" className="about">
        <div className="logos-marquee about-logos-top">
          <div className="logos-track">
            {[
              "java", "python", "php", "react", "laravel", "mysql", "javascript", "csharp", "wordpress", "html5"
            ].map((tech, index) => (
              <img
                key={index}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                alt={tech}
              />
            ))}
            <img src={awsLogo} alt="AWS" />
            {[
              "java", "python", "php", "react", "laravel", "mysql", "javascript", "csharp", "wordpress", "html5"
            ].map((tech, index) => (
              <img
                key={`dup-${index}`}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                alt={tech}
              />
            ))}
            <img src={awsLogo} alt="AWS" />
          </div>
        </div>

        {/* Education Section */}
        <h2 className="section-title">Education</h2>
        <div className="about-text">
          <div className="education-item">
            <h4>
              <img src={southEasternLogo} alt="SEUSL" className="inline-logo" />
              Bachelor of Science in Management Information Technology
            </h4>
            <ul>
              <li><strong>Institution:</strong> South Eastern University of Sri Lanka</li>
              <li><strong>Class:</strong> Second Upper Division</li>
              <li>Built a strong foundation in information technology and software development principles through project-based learning and hands-on experience.</li>
            </ul>
          </div>

          <div className="education-item">
            <h4>
              <img src={londonMetLogo} alt="London Met" className="inline-logo" />
              Bachelor of Engineering in Software Engineering
            </h4>
            <ul>
              <li><strong>Institution:</strong> London Metropolitan University</li>
              <li><strong>Focus:</strong> Software design, engineering best practices, and full-stack development methodologies.</li>
              <li>Enhanced capabilities in building scalable, maintainable software with emphasis on quality and performance.</li>
            </ul>
          </div>
        </div>

        {/* About Me Section */}
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I am a passionate full-stack developer delivering high-quality web and mobile applications across industries.</p>
            <p>Proficient in frameworks such as Laravel, Django, Yii2, and .NET, with frontend expertise in React.js, Bootstrap 5, and Tailwind CSS.</p>
            <p>Strong programming skills in Python, PHP, C#, and Java enable the implementation of complex business logic and automation.</p>
            <p>Experienced in DevOps and cloud deployment using AWS, EC2, VPS hosting, cPanel, and hPanel to ensure scalable and reliable applications.</p>
            <p>Worked on projects ranging from WordPress, Shopify, and Joomla websites to enterprise internal tools and online booking systems.</p>
            <p>Holder of certifications in WordPress, cybersecurity, and ticketing systems.</p>
          </div>

          {/* Skills */}
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-row">
              <div className="skill-category">
                <h4><img className="skill-logo" src={fileLogo} alt="Programming" />Programming</h4>
                {renderSkills([
                  { name: "Python", width: "90%" },
                  { name: "PHP", width: "100%" },
                  { name: "C#", width: "75%" },
                  { name: "Java", width: "80%" },
                  { name: "HTML5", width: "100%" }
                ])}
              </div>

              <div className="skill-category">
                <h4><img className="skill-logo" src={fileLogo} alt="Frontend" />Frontend</h4>
                {renderSkills([
                  { name: "React.js", width: "85%" },
                  { name: "Bootstrap 5", width: "90%" },
                  { name: "Tailwind", width: "95%" },
                  { name: "Next.js", width: "80%" },
                  { name: "JavaScript", width: "90%" }
                ])}
              </div>

              <div className="skill-category">
                <h4><img className="skill-logo" src={fileLogo} alt="Frameworks" />Frameworks</h4>
                {renderSkills([
                  { name: "Laravel", width: "100%" },
                  { name: ".NET", width: "95%" },
                  { name: "Yii2", width: "70%" },
                  { name: "Django", width: "85%" },
                  { name: "CakePHP", width: "80%" }
                ])}
              </div>

              <div className="skill-category">
                <h4><img className="skill-logo" src={fileLogo} alt="DevOps" />DevOps</h4>
                {renderSkills([
                  { name: "AWS", width: "95%" },
                  { name: "EC2", width: "75%" },
                  { name: "Hostinger VPS", width: "70%" },
                  { name: "cPanel", width: "85%" },
                  { name: "hPanel", width: "65%" },
                  { name: "Docker", width: "90%" }
                ])}
              </div>

              <div className="skill-category">
                <h4><img className="skill-logo" src={fileLogo} alt="Web Development" />Web Development</h4>
                {renderSkills([
                  { name: "WordPress", width: "100%" },
                  { name: "Nice Page", width: "100%" },
                  { name: "Joomla", width: "100%" },
                  { name: "Shopify", width: "100%" },
                  { name: "Workflow", width: "98%" },
                  { name: "Custom Websites", width: "100%" }
                ])}
              </div>

              <div className="skill-category">
                <h4><img className="skill-logo" src={fileLogo} alt="Database" />Database</h4>
                {renderSkills([
                  { name: "MySQL", width: "100%" },
                  { name: "PostgreSQL", width: "80%" },
                  { name: "MongoDB", width: "75%" },
                  { name: "SQLite", width: "95%" },
                  { name: "Firebase", width: "70%" },
                  { name: "Oracle", width: "85%" }
                ])}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
