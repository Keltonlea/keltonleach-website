import React from 'react';
import Image from 'next/image'; 
import aboutImg from '../public/ProjectImages/aboutImg.png'; 

const userData = {
    about: {
        title:
          "Hi, I'm Kelton! A Full Stack Web Developer from the Pacific Northwest.",
    },
    email: 'kelton.leach@gmail.com',
    resumeUrl: 'https://docs.google.com/document/d/e/2PACX-1vROJMivmlHWEIpPHotB8RT_YsrFROmFMf5hi5ERYtA7gO9TBAd6hZZaQvqtmHCSJpQX2YoWWJzTqpPW/pub'
}

 const AboutMe = () => {
  return (
    <section className="dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800">
        <h1 className="about-title text-5xl md:text-9xl font-bold py-20 text-center md:text-left" style={{color: '#bb91a6'}}>
          About Me
        </h1>
      </div>

      {/* <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20 justify-center">
          <p
            className="leading-loose text-xl md:text-4xl font-semibold  mx-1"
            style={{ lineHeight: '3rem', color:'#eab5d0' }}
          >
            {userData.about.title}
          </p>
        </div>
      </div> */}

      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          <div className="inline-flex flex-col">
            <div>
              <Image 
                src={aboutImg} 
                alt='graphic of woman using tech'
                width='400em'
                height='400em'
              />
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200" style={{color: '#bb91a6'}}>
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                Feel free to send me an <a
                    href={`mailto:${userData.email}`}
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                    style={{color: '#eab5d0'}}
                >email</a>
                .
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200" style={{color: '#bb91a6'}}>
                Resume
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                View my current <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  download
                  style={{color: '#eab5d0'}}
                >
                  resume
                </a>
                .
              </p>
            </div>
          </div>
        
          <div className="col-span-1 md:col-span-2">
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
            I was born in Mountain View, California. After high school I moved to the south 
             where I attended University of Tennessee before moving back out west and earning my bachelors degree in Social Sciences at 
             Washington State University. Currently I live in Bellingham, WA which I am happy
          to call my home for the last 9 years.                 <br></br>
                <br></br>
                <br></br>
                <br></br>
                Before becoming a stay at home mom I worked in customer service and product management
          for an art museum. I was ready to continue my education and jump into a field I 
          felt excited about: web development. I graduated in September 2022 with experience in HTML, CSS, JavaScript,
          jQuery, Responsive Design, Bootstrap, Firebase, Cookies, Local Storage, React.js, MySQL, MongoDB, Express,
          Security and Session Storage, User Authentication, and MERN STACK. I am passionate about leveraging my background in psychology,
          business, and customer service to build more intuitive user experiences on the web. In my spare time I like to spend as much time as possible with my daughter, 
          hike, read, paddle board and travel when I can.             </p>
      
            <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50 mt-4" style={{backgroundColor: '#bb91a6'}}>
              Technologies
            </h1>

                <div className="flex flex-row flex-wrap mt-1 justify-center">
                    <img src="https://img.icons8.com/color/70/000000/javascript.png" alt="javascript-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/html-5.png" alt="html-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/css3.png" alt="css-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/json--v1.png" alt="json-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/react-native.png" alt="react-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/bootstrap.png" alt="bootstrap-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/api.png" alt="api-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/ios-filled/70/000000/jquery.png" alt="jquery" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/nodejs.png" alt="node-icon" className="h-20 w-20 mx-2my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/mongodb.png" alt="mongodb" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/sql.png" alt="sql-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/npm.png" alt="npm-icon" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/graphql.png" alt="graphql" className="h-20 w-20 mx-2 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/git.png" alt="git-icon" className="h-20 w-20 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/visual-studio-code-2019.png" alt="vs-icon" className="h-20 w-20 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/github--v1.png" alt="github" className="h-20 w-20 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/heroku.png" alt="heroku" className="h-20 w-20 my-4"/>
                    <img src="https://img.icons8.com/color/70/000000/wordpress.png" alt="wordpress" className="h-20 w-20 my-4"/>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe; 