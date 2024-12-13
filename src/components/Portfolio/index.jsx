import { useState } from "react";
import Project from "../Project";

function Portfolio() {
    const [projects] = useState([
        {
          desc: "E-commerce, React, MongoDB, GraphQl",
          vid: "./projects/first-home.mp4"
        },
      ]);
    
      return (
        // <div>
        //   <div className="row justify-content-between">
        //     <h1 className="display-2 text-white text-center mb-5">Portfolio</h1>
        //   </div>
        //   <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        //     {projects.map((project, idx) => (
        //       <Project project={project} key={"project" + idx} />
        //     ))}
        //   </div>
        // </div>
        <div className="bg-gradient-to-b from-cloud-white to-sky-blue">
        <div className="flex flex-wrap justify-center gap-6 p-6">
          <div className="w-full md:w-[960px] transform duration-500 hover:scale-105">
            <video
              src="https://res.cloudinary.com/dgrsguxri/video/upload/v1733949219/first-home_h3dypy.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full rounded-lg shadow-lg border-4 border-jet-black hover:border-yellow-ochre"
            ></video>
          </div>
          <div className="w-full md:w-[960px] transform duration-500 hover:scale-105">
            <video
              src="https://res.cloudinary.com/dgrsguxri/video/upload/v1733949226/second-home_ftsuxr.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full rounded-lg shadow-lg border-4 border-jet-black hover:border-yellow-ochre"
            ></video>
          </div>
        </div>
      
        <div className="flex flex-wrap justify-center gap-6 p-6">
          <div className="w-full md:w-[960px] transform duration-500 hover:scale-105">
            <video
              src="https://res.cloudinary.com/dgrsguxri/video/upload/v1733949224/third-home_qdstix.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full rounded-lg shadow-lg border-4 border-jet-black hover:border-yellow-ochre"
            ></video>
          </div>
          <div className="w-full md:w-[960px] transform duration-500 hover:scale-105">
            <video
              src="https://res.cloudinary.com/dgrsguxri/video/upload/v1734024517/fourth-home_1_1_phyonr.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full rounded-lg shadow-lg border-4 border-jet-black hover:border-yellow-ochre"
            ></video>
          </div>
        </div>
      </div>
      
      );
}

export default Portfolio;