"use client";
import { clashDisplay } from "../lib/fonts.js";
import Image from "next/image";
import AboutBg from "../../../public/assets/img/b.png";
import { getFrontEndSkills } from "../utils/utils.js";
import SpanSkills from "./spanSkills.js";
import { useTranslation } from "react-i18next";


const About = () => { 
    const frontEndSkills = getFrontEndSkills();
    const { t } = useTranslation();
    
    return (
        <section className="w-full flex flex-col justify-center items-center py-10 px-4 md:py-20" id="about">
            <h1 className={`text-3xl md:text-5xl font-bold text-center ${clashDisplay.className} antialiased`}>
                {t('about')}
                <span className="ml-4 text-purple-500">{t('me')}</span>
            </h1>
            <p className="mt-8 text-center text-base font-normal text-[#a9a9bd] ">
                {t('subtitleAbout')}
            </p>
            
            <div className="max-w-[1250px] flex flex-col-reverse mt-20 md:flex-row md:space-x-6">
                <div className='border border-white/15 rounded-xl w-full overflow-hidden mt-4 md:mt-0 md:w-[45%] lg:w-[30%] 
                hover:-translate-y-1 transition-all'>
                    <Image
                        src={AboutBg}
                        alt="Notebook"
                        className="object-cover w-full h-full lg:h-[500px]"
                    />
                </div>
                <div className='flex flex-col border border-white/15 rounded-xl w-full p-4 md:p-8 md:w-[55%] lg:w-[70%] 
                hover:-translate-y-1 transition-all'>
                    <h1 className="text-3xl tracking-tighter text-center font-medium md:text-4xl">
                        {t('AboutH1Title')}
                    </h1>
                    <p className="mt-8 text-center text-sm font-normal text-[#a9a9bd] md:text-base">
                        {t('AboutDescrip')}
                    </p>

                    <div className="w-full flex flex-col items-center mt-6 lg:flex-row">
                        <div className="w-full flex flex-col p-6 text-center lg:w-1/2 
                        hover:-translate-y-1 transition-all">
                            <h1 className="text-xl font-bold mb-4">Front-end</h1>
                            <div className="flex flex-wrap gap-2 justify-center w-auto lg:justify-start">
                                {frontEndSkills.slice(0, 10).map((skill) => (
                                    <SpanSkills key={skill.id} skill={skill.name} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1250px] flex flex-col mt-8 space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
                <div className="flex flex-col border border-white/15 rounded-xl w-full p-4 md:p-8 md:w-[50%]
                hover:-translate-y-1 transition-all">
                    <h1 className="text-xl font-bold text-[#f6f7ff]">📚 {t('Education')}</h1>
                    <h1 className="text-sm md:text-base text-[#a9a9bd] mt-2">
                        <strong>{t('EducationFaculty1')}</strong>
                        {t('EducationFaculty2')}
                    </h1>
                    <h1 className="text-sm md:text-base text-[#a9a9bd] mt-2">
                        <strong>{t('RelevantCourses1')}</strong> 
                        {t('RelevantCourses2')}
                    </h1>
                </div>
                <div className="flex flex-col border border-white/15 rounded-xl w-full p-4 md:p-8 md:w-[50%]
                hover:-translate-y-1 transition-all">
                    <h1 className="text-xl font-bold text-[#f6f7ff]">💼 {t('ProfessionalExperience')}</h1>
                    <h1 className="text-sm md:text-base text-[#a9a9bd] mt-2">
                        <strong>{t('ProfessionalExperienceH1')}</strong>
                    </h1>
                    <p className="text-sm md:text-base text-[#a9a9bd] ">{t('ProfessionalExperienceP')}</p>    
                </div>
            </div>
        </section>
    );
};

export default About;
