import React from "react";

const userData = {
    experience: [
       
        {
          title: "Full Stack Coding Bootcamp",
          company: "University of Washington Extension",
          year: "2022",
          desc: "A 24-week intensive program focused on gaining technical programming skills in HTML, CSS, JacaScript, jQuery, Responsive Design, Bootstrap, Firebase, Cookies, Local Storage, React.js, MySQL, MongoDB, Express, Security and Session Storage, User Authentication, MERN Stack (MongoDB, Express.js, React.js, Node.js)",
        },
        {
          title: "Customer Serivces Coordinator, Museum Store Manager and Buyer ",
          company: "Whatcom Museum ",
          year: "2010-2016",
          desc: "Increased museum store profits by 50% with  knowledge of demographics and appealing to target markets. Managed customer service for the museum, building lasting relationships with patrons while gaining a passion for pleasing customers. Trained staff in the Point of Sales system used throughout the  museum campus. Managed the Bellingham Bay online History Cruise ticket system and customer service line, and made sure everyone on board was happy. Traveled around the US attending conferences and tradeshows, gaining knowledge in sales, customer satisfaction, and buying."
        },
      
        {
          title: "Bachelor's Degree",
          company: "Washington State University",
          year: "2012",
          companyLink: "https://intel.com",
          desc: "Graduated with Bachelor's Degree in Social Sciences, with concentrations in Psychology, Politcal Science and Socialogy, and a minor in Business.",
        },
       
      ]
}

const Experience = () => {
  return (
    <section className="dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left" style={{color: '#bb91a6'}}>
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-gray-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-gray-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800" style={{color: '#eab5d0'}}>
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <p className="text-gray-500">
        {company}
      </p>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
}

export default Experience; 