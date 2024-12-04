import { FiDivideCircle } from "react-icons/fi";
import "./index.css";

function Home() {
  return (
    <>
      <div className="container-fluid p-0 head-text">
        {/* <img
        className="home-img animate_animated animate__zoomIn"
        src="./img/homepage-2.jpg"
        alt="Birds Eye View Homepage"
      /> */}
        <video className="video" width="1920" height="1080" autoPlay loop muted>
          <source src="./img/example-video.mp4" type="video/mp4" />
        </video>
        <div className="text-on-image animate_animated animate__fadeInDown">
          <h1 className="heading display-1">Carlos Alvarez</h1>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row text-center py-5">
          <div className="">
            <h1 className="display-2">Who We Are</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-4">
            <p className="fs-1">
              Welcome to Birds Eye View, your trusted partner in advanced drone
              videography and photography services tailored specifically for
              roofing professionals and insurance companies. Founded in 2024, we
              set out to revolutionize how businesses capture and present aerial
              imagery.
            </p>
          </div>
          <div className="row text-center py-5">
          <div className="col-12 col-lg-6">
            <h1 className="display-2">Our Mission</h1>
          </div>
          <div  className="col-12 col-lg-6">
          <h1 className="display-2">Why Us?</h1>
          </div>
        </div>
          <div className="col-12 col-lg-6">
            <p className="fs-2">
             Our mission is to provide high-quality, reliable aerial
              imagery that enhances inspections, streamlines claim processes and
              helps roofing companies showcase their projects from a unique
              perspective. We use state-of-the-art equipment to capture stunning
              visuals and the latest drone technology to ensure safety,
              compliance, and superior-quality imagery.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-2">
             At Birds Eye View, we
              prioritize safety and uphold the highest standards in all our
              operations. Our commitment to quality ensures that our clients
              receive the most accurate and impactful imagery available. We
              invite you to explore our services and see how we can assist you.
              Contact us today for a free consultation to discuss your aerial
              imagery needs!
            </p>
          </div>
        </div>
        <div className="row text-center py-5">
            <div className="col-12">
                <h1 className="display-2">
                    Our Services
                </h1>
            </div>
        </div>
        <div className="col-12 text-center pb-5">
            <p className="fs-2">
            Currently servicing the Denton-County area. <br />
            Comprehensive drone inspections for roofing assessments.<br /> 
            High-resolution aerial photography for property evaluations.<br /> 
            Real-time footage for insurance claim support.
            </p>
        </div>
        <div className="row text-center pb-5">
            <div className="col-12">
                <button type="button" className="btn btn-large btn-outline-primary fs-1">
                    Get A Free Quote Today!
                </button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
