import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div className="HeroSection" initial={{opacity:0, y:-200}} animate={{ opacity:1, y:0}} viewport={{once:true}} transition ={{ease:'linear', delay:1.5, duration:1.5}}>
      <div className="logo-wrapper">
        <img src="/logo.svg" alt="" />
      </div>
      <p className="hello">Hello I'm</p>
      <h1>Wahab Mufidat</h1>
      <h2>FRONT-END WEB DEVELOPER</h2>
    </motion.div>
  );
};

export default HeroSection;
