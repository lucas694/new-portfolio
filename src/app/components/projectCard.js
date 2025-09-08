"use client";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link.js";



const ProjectCard = (props) => {
    const {id,img,title,description,gitlink,link,onMouseEnter,onMouseLeave} = props
    const [isHovered, setIsHovered] = useState(false)

    const colors = [
        "#f0ead2", // amarelo clarinho
        "#d7c6f7",// roxo claro
        "#f7e6e8",  // branco rosado 
        "#e2f7da", // verde clarinho
        "#dbeaff", // azul clarinho
      ];

    // pega cor baseada no id 
    const randomColor = colors[id % colors.length];

    return(
        <div key={id} className="group w-[330px] sm:w-[440px] md:w-[590px] lg:w-[460px] xl:w-[590px] rounded-xl flex flex-col 
        object-auto transition-all duration-300"
        onMouseEnter={() => {setIsHovered(true); onMouseEnter?.();}}
        onMouseLeave={() => {setIsHovered(false); onMouseLeave?.();}}>
            <div className="relative h-[240px] md:h-[350px] lg:h-[320px] xl:h-[350px] overflow-hidden rounded-xl flex items-center justify-center"
            style={{ backgroundColor: randomColor }} // 🎨 cor randômica
            >
                <Image
                src={img}
                height={1000}
                width={1000}
                alt={title}
                className={`w-[419px] h-[230px] sm:w-[489px] md:h-[360px] md:w-[630px] lg:h-[310px] lg:w-[560px] xl:h-[350px] xl:w-[635px] 
                absolute transition-all duration-300 ${isHovered ? "scale-105" : "scale-100"}`}
                />
            </div>
            <div className="flex flex-row justify-between items-center py-5 px-5 xl:py-8 xl:px-5">
                <div className="text-left ">
                    <h2 className="text-base xl:text-lg font-semibold">{title}</h2>
                    <p className="text-xs xl:text-sm text-gray-400">{description}</p>
                </div>
                <div className="flex flex-row items-center">
                    <a href={gitlink} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-lg md:text-2xl mr-3"/>
                    </a>
                    <Link href={link} target="_blank" className="border-2 border-gray-600 rounded-3xl px-5 py-3 text-white 
                    hover:text-black hover:bg-white transition-all duration-300 cursor-pointer">
                        <FiArrowRight className="text-lg md:text-xl transform group-hover:-rotate-45 transition-transform duration-300 ease-in-out" />
                    </Link>  
                </div>
                
            </div>
        </div>
    )
};export default ProjectCard