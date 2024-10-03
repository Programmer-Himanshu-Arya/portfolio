"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const AboutPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className="min-h-screen text-white flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16"
      id="about"
    >
      <motion.div
        ref={ref}
        animate={controls}
        variants={fadeInUp}
        className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0"
      >
        <h1 className="pb-3 font-bold text-5xl">
          About <span className="text-purple">Us</span>
        </h1>
        <p className="text-lg mb-6" tabIndex={0}>
          Hello! I'm a passionate web developer with a keen eye for design and a
          love for creating engaging digital experiences. My journey in the
          world of web development has been an exciting adventure of continuous
          learning and growth.
        </p>
        <p className="text-lg mb-6" tabIndex={0}>
          I believe in the power of clean, efficient code and user-centric
          design. My goal is to craft websites and applications that not only
          look great but also provide seamless, intuitive experiences for users.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:w-1/2"
      >
        <Image
          src="/b5.svg"
          alt="Developer working on a laptop"
          className="w-full h-auto rounded-lg shadow-xl"
          width={100}
          height={100}
          tabIndex={0}
        />
      </motion.div>
    </div>
  );
};

export default AboutPage;
