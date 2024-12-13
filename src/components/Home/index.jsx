import "./index.css";

function Home() {
  return (
<>
  <div className="flex justify-center items-center p-0 head-text relative w-full">
    {/* <img
      className="home-img animate__animated animate__zoomIn"
      src="./img/homepage-2.jpg"
      alt="Birds Eye View Homepage"
    /> */}
    <div className="w-screen h-screen relative overflow-hidden">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
    >
      <source src="./img/example-video.mp4" type="video/mp4" />
    </video>
    </div>
    <div className="text-on-image animate__animated animate__fadeInDown absolute">
      <h1 className="heading text-5xl md:text-7xl font-bold text-jet-black">Birds Eye View</h1>
    </div>
  </div>
  <div className="container mx-auto mt-5 max-w-7xl">
    <div className="text-center py-5">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Who We Are</h1>
    </div>
    <div className="p-4">
      <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
        Welcome to Birds Eye View, your trusted partner in advanced drone
        videography and photography services tailored specifically for roofing
        professionals and insurance companies. Founded in 2024, we set out to
        revolutionize how businesses capture and present aerial imagery.
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center py-5">
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Our Mission</h1>
        <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed mt-4">
          Our mission is to provide high-quality, reliable aerial
          imagery that enhances inspections, streamlines claim processes, and
          helps roofing companies showcase their projects from a unique
          perspective. We use state-of-the-art equipment to capture stunning
          visuals and the latest drone technology to ensure safety,
          compliance, and superior-quality imagery.
        </p>
      </div>
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Why Us?</h1>
        <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed mt-4">
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
    <div className="text-center py-5">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Our Services</h1>
      <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed mt-4">
        Currently servicing the Denton-County area. <br />
        Comprehensive drone inspections for roofing assessments. <br />
        High-resolution aerial photography for property evaluations. <br />
        Real-time footage for insurance claim support.
      </p>
    </div>
    <div className="text-center py-5 pb-9">
      <button className="btn btn-large border-2 border-yellow-ochre hover:border-sky-blue text-sky-blue hover:text-yellow-ochre hover:scale-150 transform duration-300 text-xl md:text2xl lg:text-3xl px-6 py-2 rounded">
        <a
          href="/quote"
          className="">
          Get A Free Quote Today!
        </a>
      </button>
    </div>
  </div>
</>

  );
}

export default Home;
