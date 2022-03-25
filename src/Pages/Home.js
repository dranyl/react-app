import React from 'react'

const Home = () => {
  return (
    <section className='container'>
      <div className='profile-grid my-1'>
        <div className='profile-top bg-primary p-2'>
          <img className='round-img my-1' src='./assets/profile.jpg' alt='' />
          <h1 className='large'>Lynard Salingujay</h1>
          <p className='lead'>Software Developer</p>
          <p>Auckland, New Zealand</p>
          <div className='icons my-1'>
            <a
              href='https://dranyl.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fas fa-globe fa-2x'></i>
            </a>
            <a
              href='https://github.com/dranyl'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github fa-2x'></i>
            </a>
            <a
              href='https://twitter.com/dranyl_105'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter fa-2x'></i>
            </a>
            {/* <a href='#' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-facebook fa-2x'></i>
            </a> */}
            <a
              href='https://www.linkedin.com/in/lynardsalingujay/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin fa-2x'></i>
            </a>
            {/* <a href='#' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-youtube fa-2x'></i>
            </a> */}
            <a
              href='https://www.instagram.com/dranyl_105/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram fa-2x'></i>
            </a>
          </div>
        </div>

        <div className='profile-about bg-light p-2'>
          <h2 className='text-primary'>Profile</h2>
          <p>
            I am a highly motivated IT professional, specializing in software
            development and systems support, and I have with proven in-depth
            international experience working with major global corporations and
            start-up enterprise.
          </p>
          <div className='line'></div>
          <h2 className='text-primary'>Skill Set</h2>
          <div className='skills'>
            <div className='p-1'>
              <i className='fa fa-check'></i> Java
            </div>
            <div className='p-1'>
              <i className='fa fa-check'></i> Python
            </div>
            <div className='p-1'>
              <i className='fa fa-check'></i> JavaScript
            </div>
            <div className='p-1'>
              <i className='fa fa-check'></i> HTML/CSS
            </div>
            <div className='p-1'>
              <i className='fa fa-check'></i> Docker
            </div>
          </div>
        </div>

        <div className='profile-exp bg-white p-2'>
          <h2 className='text-primary'>Experience</h2>
          <div>
            <h3 className='text-dark'>Rakuten Trade</h3>
            <p>Jan 2017 - May 2019</p>
            <p>
              <strong>Position: </strong>Senior Java Developer
            </p>
            {/* <p>
              <strong>Technology Used: </strong>
              Java, Python, Docker, PostgreSQL
            </p> */}
          </div>
          <div>
            <h3 className='text-dark'>OCBC Bank</h3>
            <p>May 2016 - Jan 2017</p>
            <p>
              <strong>Position: </strong>IT Specialist
            </p>
            {/* <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p> */}
          </div>
          <div>
            <h3 className='text-dark'>Standard Chartered Bank</h3>
            <p>Nov 2014 - Mar 2016</p>
            <p>
              <strong>Position: </strong>Support Analyst
            </p>
            {/* <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p> */}
          </div>
        </div>

        <div className='profile-edu bg-white p-2'>
          <h2 className='text-primary'>Education</h2>
          <div>
            <h3>Eastern Institute of Technology</h3>
            <p>May 2020 - Oct 2021</p>
            <p>
              <strong>Degree: </strong>Masters
            </p>
            <p>
              <strong>Field Of Study: </strong>Information Technology
            </p>
            {/* <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
