import { clashDisplay } from "../lib/fonts.js";
import Image from "next/image";
import AboutBg from "../../../public/assets/img/b.png";
import { getFrontEndSkills } from "../utils/utils.js";
import SpanSkills from "./spanSkills.js";

const About = () => { 
    const frontEndSkills = getFrontEndSkills();
    
    return (
        <section className="w-full flex flex-col justify-center items-center py-10 px-4 md:py-20" id="about">
            <h1 className={`text-3xl md:text-5xl font-bold text-center ${clashDisplay.className} antialiased`}>
                Sobre 
                <span className="ml-4 text-purple-500">Mim</span>
            </h1>
            <p className="mt-8 text-center text-base font-normal text-[#a9a9bd]">
                Um pouco sobre a minha trajetória e habilidades como desenvolvedor web.
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
                        Desenvolvedor Front-End Júnior
                    </h1>
                    <p className="mt-8 text-center text-sm font-normal text-[#a9a9bd] md:text-base">
                        Sou estudante no último semestre de Sistemas de informação e desenvolvedor front-end em busca da primeira experiência profissional. Tenho experiência prática adquirida por meio de projetos independentes, onde aplico React.js, Next.js, Redux, TailwindCSS, TypeScript, JavaScript, HTML, CSS e Styled Components para construir aplicações web modernas, responsivas e de alta performance.
                        Gosto de desenvolver interfaces dinâmicas, otimizar a experiência do usuário e escrever código limpo e bem estruturado, sempre buscando aprender e evoluir como profissional.
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

                        <div className="w-full flex flex-col p-6 text-center lg:w-1/2 
                        hover:-translate-y-1 transition-all">
                            <h1 className="text-xl font-bold mb-4">Back-end</h1>
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
                    <h1 className="text-xl font-bold text-[#f6f7ff]">📚 Educação</h1>
                    <h1 className="text-sm md:text-base text-[#a9a9bd] mt-2">
                        <strong>Graduação: Sistemas de informação</strong> -
                        Universidade Nove de Julho (2022 - 2025)
                    </h1>
                    <h1 className="text-sm md:text-base text-[#a9a9bd] mt-2">
                        <strong>Cursos Relevantes:</strong> -
                        Desenvolvimento Web - React.js - JavaScript 
                    </h1>
                </div>
                <div className="flex flex-col border border-white/15 rounded-xl w-full p-4 md:p-8 md:w-[50%]
                hover:-translate-y-1 transition-all">
                    <h1 className="text-xl font-bold text-[#f6f7ff]">💼 Experiência profissional</h1>
                    <h1 className="text-sm md:text-base text-[#a9a9bd] mt-2">
                        <strong>Desenvolvedor Front-End (Projetos Independentes) | 2022 - Presente</strong>
                    </h1>
                    <p className="text-sm md:text-base text-[#a9a9bd] ">Desenvolvimento e manutenção de projetos próprios com foco em aprimorar habilidades em front-end. Experiência prática na criação de aplicações web responsivas utilizando React.js, Next.js, Redux, TailwindCSS, TypeScript, JavaScript, HTML, CSS e Styled Components. Atividades nesses projetos incluem implementação de interfaces modernas, gerenciamento de estado com Redux, aplicação de boas práticas de design responsivo e integração de componentes reutilizáveis.</p>    
                </div>
            </div>
        </section>
    );
};

export default About;
