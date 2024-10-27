import React from "react";
import Particles from "react-tsparticles";
import particlesObject from "../assets/config/particlesConfig";

const ParticlesBackground = () => {
  return <Particles params={particlesObject}></Particles>;
};

export default ParticlesBackground;
