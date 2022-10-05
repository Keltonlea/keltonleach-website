import React from 'react';
import Image from 'next/image';

const userData = {
    projects: [
          {
            id: 1, 
            title: "Coding Crush--Coming Soon!",
            link: "",
            imgUrl: "",
            repo: ""
        },
        {
            id: 2, 
            title: "Flicks Finder",
            link: "https://keltonlea.github.io/Project-1/",
            imgUrl: "/ProjectImages/ficks.png",
            repo: "https://github.com/Keltonlea/Project-1"
        },
        {
            id: 3, 
            title: "Dungeons and Dragons Character Creator",
            link: "https://guarded-bayou-66527.herokuapp.com/",
            imgUrl: "/ProjectImages/ddscreenshot.png",
            repo: "https://github.com/Jean424/DnD-Character-Creater"
           
        },
        {
            id: 4, 
            title: "Text Editor",
            link: "https://pure-bastion-96627.herokuapp.com/",
            imgUrl: "/ProjectImages/text-editor.jpg",
            repo: "https://github.com/Keltonlea/J.A.T.E"
        },
        {
            id: 5, 
            title: "The Tech Blog",
            link: "https://mvc-tech-blog-kelton.herokuapp.com/",
            imgUrl: "/ProjectImages/tech-blog.png",
            repo: "https://github.com/Keltonlea/tech-blog"
        },
        {
            id: 7, 
            title: "Book Search",
            link:"https://young-lowlands-07206.herokuapp.com/",
            imgUrl: "/ProjectImages/book-search.png",
            repo: "https://github.com/Keltonlea/book-search"
        },
        {
            id: 8, 
            title: "Readme Generator",
            imgUrl: "/ProjectImages/readme.gif",
            repo: "https://github.com/Keltonlea/readme-gen"
        },
        {
            id: 7, 
            title: "Team Profile Generator",
            imgUrl: "/ProjectImages/team.gif",
            repo: "https://github.com/Keltonlea/team-profile-generator"
        },
        {
            id: 9,
            title: "E-Commerce Backend",
            imgUrl: "/ProjectImages/ecommerce.png",
            repo: "https://github.com/Keltonlea/retail-backend"
        }
      ]
}

const Projects = () => {
    return (
      <section className="dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left" style={{color: '#bb91a6'}}>
            Projects
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-20 pb-40">
            {userData.projects.map((proj, i) => (
              <ProjectCard
                title={proj.title}
                link={proj.link}
                imgUrl={proj.imgUrl}
                number={`${i + 1}`}
                key={i}
                repo={proj.repo}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  const ProjectCard = ({ title, link, imgUrl, repo }) => {
    return (
    <>
    <div className="project-card relative overflow-hidden">
        <div className="h-72 object-cover">
        <Image
            src={imgUrl}
            alt="portfolio"
            layout='fill'
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
        />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl rounded-md px-2" style={{backgroundColor: '#eab5d0'}}>
        {title}
        </h1>

      <h1 className="absolute bottom-10 right-20 text-pink-200 font-bold text-xl">
            { link ? <a href={link} className="w-full block shadow-2xl"><img src="https://img.icons8.com/material-outlined/24/000000/link--v1.png" className="project-link"/></a> : null }
      </h1>

      <h1 className="absolute bottom-10 right-10 text-pink-200 font-bold text-xl">
            { repo ? <a href={repo} className="w-full block shadow-2xl"><img src="https://img.icons8.com/material-outlined/24/000000/github.png" className="project-link"/></a> : null }
      </h1>
      </div>
    </>
)};

export default Projects; 

  