import React from "react";
import { assets } from "../assets/assets";
import { motion } from 'framer-motion';

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create AI Images</h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt="Sample AI generated image"
          className="w-80 xl:w-96 rounded-lg"
        />
        <div className="max-w-xl">
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Step into the future of creativity with our AI-powered Text to Image Generator — a
            revolutionary tool that transforms your words into stunning, high-quality visuals within
            seconds. Whether you're a designer, marketer, or simply someone with a creative idea,
            this tool empowers you to bring imagination to life using the power of artificial
            intelligence.
          </p>
          <p className="text-gray-600 mb-4">
            Just type a description, and watch as our advanced AI interprets it and generates a
            unique image that perfectly matches your vision. No design skills needed — just your
            words.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
