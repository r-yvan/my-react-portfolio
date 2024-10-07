import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion"; // Import framer-motion // Import useInView
import profile from "../assets/me.png";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation(); // Initialize animation controls
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      // When the component is in view, start the animation
      controls.start({
        y: 0, // Move to original position
        opacity: 1, // Full opacity
        transition: {
          duration: 0.8, // Duration of the animation
          ease: "easeOut", // Easing function
        },
      });
    } else {
      // Reset to initial state when not in view
      controls.start({
        y: 50, // Move down
        opacity: 0, // Fade out
        transition: {
          duration: 0.5, // Duration of the exit animation
          ease: "easeIn", // Easing function for exit
        },
      });
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col justify-center bg-custom text-white pt-10">
      <div className="flex justify-center z-10 mb-20">
        <motion.h2
          initial={{ y: 50, opacity: 0 }} // Initial state for animation
          animate={controls} // Bind the controls to this component
          className="text-6xl font-bold"
        >
          About <span className="text-green-400">Me</span>
        </motion.h2>
      </div>
      <motion.div
        ref={ref} // Attach the ref to this element
        initial={{ y: 50, opacity: 0 }} // Initial state for animation
        animate={controls} // Bind the controls to this component
        className="grid grid-cols-12 grid-rows-1 gap-12"
      >
        <motion.div
          ref={ref} // Attach the ref to this element
          initial={{ y: 50, opacity: 0 }} // Initial state for animation
          animate={controls} // Bind the controls to this component
          className="col-start-3 col-end-7 pr-20 z-10"
        >
          <h1 className="font-bold text-3xl mb-10">
            A <span className="text-green-400">Full Stack Developer</span> and{" "}
            <span className="text-green-400">Cyber Security</span> Enthusiast
          </h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt felis nec augue vestibulum, sit amet cursus sapien
            feugiat. Curabitur sagittis convallis nisl, vel accumsan eros
            tincidunt in. Donec sodales, metus ac varius lobortis, lacus lorem
            volutpat urna, sed viverra arcu odio in justo.
          </p>
        </motion.div>
        <motion.div
          ref={ref} // Attach the ref to this element
          initial={{ y: 50, opacity: 0 }} // Initial state for animation
          animate={controls} // Bind the controls to this component
          className="col-start-7 col-end-11 row-end-1 grid grid-cols-10 grid-rows-[35px_35px_35px_35px_35px_35px_35px_35px_35px_35px_35px] z-20"
        >
          <div className="w-72 h-72 bg-green-400 rounded-2xl row-start-1 col-start-3"></div>
          <div className="w-72 h-72 border-white border-4 rounded-2xl ml-5 mt-5"></div>
          <div className="w-80 h-80 col-start-2 row-start-2 overflow-hidden rounded-2xl z-20">
            <img className="" src={profile} alt="Rubuto Yvan" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
