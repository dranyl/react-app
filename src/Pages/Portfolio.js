import React from 'react'

const Portfolio = () => {
  return (
    <section className='container'>
      <p class='lead'>
        <i class='fab fa-connectdevelop'></i> Personal project
      </p>
      <div class='post bg-white p-1 my-1'>
        <div>
          <a href='profile.html'>
            <img
              // class='round-img'
              // src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
              src='./assets/dranyl-img1.png'
              alt=''
            />
            <h4>My first personal website</h4>
          </a>
        </div>
        <div>
          <p class='my-1'>This is test sadfkj askfjasl;kdf jasdlfkjsdklf</p>
        </div>
      </div>

      <div class='post bg-white p-1 my-1'>
        <div>
          <a href='profile.html'>
            <img
              // class='round-img'
              // src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
              src='./assets/dranyl-screenshot.png'
              alt=''
            />
            <h4>My first personal website</h4>
          </a>
        </div>
        <div>
          <p class='my-1'>This is test sadfkj askfjasl;kdf jasdlfkjsdklf</p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
