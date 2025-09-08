"use client";
import { clashDisplay } from "../lib/fonts.js";
import ProjectCard from "../components/projectCard.js"
import {getProjects} from "../utils/utils.js"
import { useTranslation } from "react-i18next";


const Projects = () => {
    const AllProjects = getProjects();
    const { t } = useTranslation();

    return(
        <section className="w-full flex flex-col justify-center items-center py-10 px-4 md:py-20" id="projects">
            <h1 className={`text-3xl md:text-5xl font-bold text-center ${clashDisplay.className} antialiased`}>
                {t('featured')}  
                <span className="ml-4 text-purple-500">{t('projects')}</span>
            </h1>
            <p className="mt-8 text-center text-base font-normal text-[#a9a9bd]">
                {t('subtitleProjects')}
            </p>
            
            <div className="max-w-[1250px] flex flex-col mt-20 space-y-6 
            lg:justify-center lg:flex-wrap lg:flex-row lg:space-y-0 lg:gap-12 ">
                {AllProjects.slice(0).map((item)=>
                    <ProjectCard 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        img={item.img}
                        gitlink={item.GitLink}
                        link={item.link}
                    />
                )}
            </div>
        </section>
    )
};
export default Projects 