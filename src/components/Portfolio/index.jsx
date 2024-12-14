function Portfolio() {
      return (
        <div className="bg-gradient-to-b from-cloud-white to-sky-blue">
        <div className="flex flex-wrap justify-center gap-6 p-6">
          <div className="w-full md:w-[800px] transform duration-500 hover:scale-105">
            <video
              src="https://res.cloudinary.com/dgrsguxri/video/upload/v1733949219/first-home_h3dypy.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full rounded-lg shadow-lg border-4 border-jet-black hover:border-yellow-ochre"
            ></video>
          </div>
          <div className="w-full md:w-[800px] transform duration-500 hover:scale-105">
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
          <div className="w-full md:w-[800px] transform duration-500 hover:scale-105">
            <video
              src="https://res.cloudinary.com/dgrsguxri/video/upload/v1733949224/third-home_qdstix.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full rounded-lg shadow-lg border-4 border-jet-black hover:border-yellow-ochre"
            ></video>
          </div>
          <div className="w-full md:w-[800px] transform duration-500 hover:scale-105">
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