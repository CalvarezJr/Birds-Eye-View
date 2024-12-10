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
        <div>
          <div className="row justify-content-between">
            <h1 className="display-2 text-white text-center mb-5">Portfolio</h1>
          </div>
          <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
            {projects.map((project, idx) => (
              <Project project={project} key={"project" + idx} />
            ))}
          </div>
        </div>
      //    <Carousel>
      //    <Carousel.Item>
      //      <ExampleCarouselImage text="First slide" />
      //      <Carousel.Caption>
      //        <h3>First slide label</h3>
      //        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      //      </Carousel.Caption>
      //    </Carousel.Item>
      //  </Carousel>
      );
}

export default Portfolio;