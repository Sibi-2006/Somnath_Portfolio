import React from 'react';
import pfp from "./Images/tojipfp.jpg";
export default function Home() {
  const handleResumeDownload = () => {
    const resumeUrl = './Resume_Somnath.pdf'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Somnath_R_Resume.pdf'; 
    link.click();
  };

  return (
    <div id="home" className="w-11/12 mx-auto p-4 mt-10 mainframe">
      <div className="flex flex-col md:flex-row justify-between my-5">
        <div className="w-full md:w-1/3 flex flex-col justify-center text-left">
          <p className="text-sm text-gray-500">Welcome to my portfolio</p>
          <h1 className="title">Somnath.R</h1>
          <h4 className="text-blue-400 text-2xl font-semibold mt-2">
            Mainframe Developer
          </h4>
          <p className="text-md mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo quam iusto
          </p>

          <button
            className="resume-btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mt-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-blue-400/50"
            onClick={handleResumeDownload}
          >
            Download Resume
          </button>
        </div>

        <div className="md:w-1/3">
          <img
            className="hidden md:block rounded-lg shadow-lg"
            src={pfp}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
