import React from 'react';
import Skills from '../../component/Skills';
import { resume } from '../../data';
import "./about.css";
import ResumeItem from '../../component/ResumeItem';


const about = () => {
  return (

     <main className="section container">
    <section id="about-us" className="section">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">About Us</h2>
        <div className="section-line"></div>
      </div>
      <div className="section-content">
        <p>
        👋 Hey there! I'm HAMID HUSSAIN, a Frontend Developer who transforms ideas into captivating digital experiences.</p>

<p>🚀 With atleast one year of experience in the ever-evolving world of web development, I recently completed Frontend development course from Youtube, which has given me the latest skills and knowledge in tne web development industry. I've honed my skills to create visually stunning and highly functional websites. My passion lies in crafting seamless user interfaces that not only look great but also drive engagement and conversions.
</p>
<p>🛠️ I'm well-versed in a toolkit of frontend technologies:
</p>
<p>
⚙️ Languages: HTML, CSS, JavaScript 
📊 Frameworks: React
🎨 Styling: CSS
🌐 Responsive Design: Bootstrap, CSS Grid, Flexbox
🔧 Version Control: GitHub
🌟 Animation: CSS animations
</p>

<p>💡 I thrive on pushing the boundaries of what's possible in the frontend realm. Whether it's creating intuitive user interfaces, optimizing website performance, or ensuring cross-browser compatibility, I'm always up for the challenge.</p>

<p>🤝 Collaboration is at the heart of my approach. I've had the privilege of working with diverse teams, including designers, UX/UI experts, and backend developers. My ability to communicate effectively and find innovative solutions to complex problems ensures successful project outcomes.</p>

<p>🌐 Beyond coding, I'm passionate about web accessibility. I advocate for making the web inclusive for all users by adhering to WCAG guidelines and best practices.</p>

<p>📈 Let's connect and explore how I can contribute to your organization's growth or take your digital projects to the next level. I'm open to exciting opportunities, freelance work, and collaboration with forward-thinking individuals and teams.
</p>
<p>🌟 Ready to bring your web ideas to life? Let's chat!
 Github Repository: <a>https://github.com/03554718903?tab=repositories</a></p>

 <span>CONTACT: 03433563121</span>

      </div>
    </div>
  </section>

      <div className="seperator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid"><Skills/></div>
      </section>

      <div className="seperator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">Experience And Education</h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if(val.category === 'experience') { 
                return <ResumeItem key={val.id}{...val}/>;
              }
            })}
          </div>
          
          <div className="resume__data">
            {resume.map((val) => {
              if(val.category === 'education') { 
                return <ResumeItem key={val.id}{...val}/>;
              }
            })}
          </div>

        </div>
      </section>
    </main>
  )
}

export default about;
