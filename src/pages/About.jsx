import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-lg text-gray-700 mb-4">
            Hello! I'm a passionate web developer with experience in building dynamic and responsive web applications using modern technologies.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            My journey into web development started with a curiosity for how websites are built and evolved into a full-fledged career. I enjoy solving problems, learning new skills, and continuously improving my craft.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Beyond coding, I love to spend my free time gaming and exploring new technologies. I believe in the power of technology to positively impact people's lives and am excited to be a part of this ever-evolving industry.
          </p>
          <Link to="/contact" className="text-blue-600 hover:underline">Contact me</Link> if you'd like to connect or collaborate on a project.
        </div>
      </div>
    </div>
  );
}

export default About;
