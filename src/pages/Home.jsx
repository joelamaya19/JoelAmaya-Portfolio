import React from 'react';
import { Link } from 'react-router-dom';
import GlitchingTypingText from '../components/GlitchingTypingText';

const Home = () => {
  return (
    <div className="text-center p-4 md:p-8 lg:p-16">
      <div className="mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          <GlitchingTypingText 
            element='h1'
            $styling={{
              color: "#0FF",
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
        <Link to="/Projects" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View My Projects
        </Link>
      </div>
    </div>
  );
}

export default Home;
