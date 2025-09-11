"use client";
import { clashDisplay } from "../lib/fonts";
import { motion } from "framer-motion";
import { Spotlight } from "./spotlight";
import { useTranslation } from "react-i18next";


const Hero = () => {
    const { t } = useTranslation();
    return (    
        <section className="relative overflow-hidden" id="home">
            <div className="w-full flex flex-col items-center justify-center ">
                <div className="hidden md:block absolute -top-10 left-0 w-full h-full">
                    <Spotlight />
                </div>

                <div className="flex flex-col items-center justify-center px-4 lg:pl-10 xl:pl-0">
                    <motion.div 
                    initial={{ opacity: 0, y: 100, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="pt-24 xl:pt-28 flex space-x-2">
                        <span className="text-3xl">👋🏻 </span>
                        <h2 className="font-bold text-3xl lg:text-4xl text-transparent 
                        bg-gradient-to-r from-purple-500 to-white bg-clip-text pb-1">
                            {t('HeroHello')}
                        </h2>
                    </motion.div>
                    <h1 className={`text-[#f6f7ff] my-8 relative z-10 mx-auto max-w-3xl text-center font-bold text-5xl md:text-6xl lg:text-8xl ${clashDisplay.className}`}> 
                        {"Frontend Developer".split(" ").map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    ease: "easeInOut",
                                }}
                                className="mr-2 inline-block">
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.8,
                        }}
                        className="relative z-10 mx-auto max-w-xl my-8 text-center text-base md:text-lg font-normal text-[#a9a9bd]"
                    >
                        {t('HeroText')}
                    </motion.p>
                    
                    <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="relative z-10 mt-8 w-full flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-4  ">
                        <a href="#contact">
                            <button className="w-full md:w-60 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] px-6 py-3 bg-purple-500 rounded-lg text-white font-light  cursor-pointer
                            transition-all duration-300 hover:-translate-y-0.5 ease-linear hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-purple-400">
                                {t('HeroContactButton')}
                            </button>   
                        </a>
                        <a href="https://github.com/lucas694" target="_blank">
                            <button className="w-full md:w-60 transform rounded-lg border bg-transparent px-6 py-3 font-medium border-gray-700 text-white cursor-pointer
                            transition-all duration-300 hover:-translate-y-0.5  hover:bg-gray-900">
                                Github
                            </button>
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Hero;