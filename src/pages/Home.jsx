import React from 'react';
import { Link } from 'react-router-dom';
import GlitchingTypingText from '../components/GlitchingTypingText';
import HTMLIcon from '../assets/images/html-icon.png';
import CSSIcon from '../assets/images/css-icon.png';
import JavaScriptIcon from '../assets/images/javascript-icon.png';
import ReactIcon from '../assets/images/react-icon.png';
import NodeJSIcon from '../assets/images/nodejs-icon.png';
import MongoDBIcon from '../assets/images/mongodb-icon.svg';
import PostgreSQLIcon from '../assets/images/postgresql-icon.png';
import aboutImage from '../assets/images/mepicture.jpg'; // Import placeholder image

const Home = () => {
  return (
    <div className="text-center p-4 md:p-8 lg:p-16 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          <GlitchingTypingText
            element='h1'
            $styling={{
              color: "#ce0000",
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "inherit",
            }}
            glitchDuration={3450}
          >
            Software Developer
          </GlitchingTypingText>
        </h1>
      </div>
      <p className="text-md md:text-lg lg:text-xl">
        I'm a web developer specializing in building exceptional digital experiences.
      </p>
      <div className="mt-8">
        <Link to="/Projects" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 inline-block">
          View My Projects
        </Link>
      </div>
      <div className="mt-8">
        <div className="bg-gray-300 rounded-md p-4 mb-8">
          <h2 className="text-lg font-semibold mb-4">Frontend Development</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex justify-center items-center mb-2">
                <img src={HTMLIcon} alt="HTML" className="h-16 w-16 mx-1" />
                <img src={CSSIcon} alt="CSS" className="h-16 w-16 mx-1" />
              </div>
              <p className="text-lg font-semibold mb-2">HTML/CSS</p>
            </div>
            <div className="text-center">
              <img src={JavaScriptIcon} alt="JavaScript" className="h-16 w-16 mx-auto mb-2" />
              <p className="text-lg font-semibold mb-2">JavaScript</p>
            </div>
            <div className="text-center">
              <img src={ReactIcon} alt="React" className="h-16 w-16 mx-auto mb-2" />
              <p className="text-lg font-semibold mb-2">React.js</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 rounded-md p-4 mb-8">
          <h2 className="text-lg font-semibold mb-4">Backend Development</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <img src={NodeJSIcon} alt="Node.js" className="h-16 w-16 mx-auto mb-2" />
              <p className="text-lg font-semibold mb-2">Node.js</p>
            </div>
            <div className="text-center">
              <img src={MongoDBIcon} alt="MongoDB" className="h-16 w-16 mx-auto mb-2" />
              <p className="text-lg font-semibold mb-2">MongoDB</p>
            </div>
            <div className="text-center">
              <img src={PostgreSQLIcon} alt="PostgreSQL" className="h-16 w-16 mx-auto mb-2" />
              <p className="text-lg font-semibold mb-2">PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
      {/* About me section */}
      <div className="mt-8">
        <Link to="/About">
          <img src={aboutImage} alt="About Me" className="rounded-full h-64 w-64 mx-auto mb-4 hover:opacity-80 cursor-pointer" />
        </Link>
        <p className="text-sm">About Me</p>
      </div>
    </div>
  );
}

export default Home;
