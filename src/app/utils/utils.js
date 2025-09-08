import { FiGithub } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";




const frontEndSkills = [
    {id:1,name:"React.js"},
    {id:2,name:"Next.js"},
    {id:3,name:"Redux"},
    {id:4,name:"TailwindCSS"},
    {id:5,name:"TypeScript"},
    {id:6,name:"JavaScript"},
    {id:7,name:"HTML"},
    {id:8,name:"CSS"},
    {id:9,name:"Styled Components"},
]
export function getFrontEndSkills(){
    return frontEndSkills
}

const AllProjects =[
    //{
    //    id:1 ,
    //    tittle:"Meu Portfolio",
    //    description: "Full-Stack Project",
    //    img:"/assets/img/project-2.png",
    //    link:"https://portfolio-react-nine-sigma.vercel.app",
    //    GitLink:"https://github.com/lucas694/Portfolio"
    //},
    {
        id:2 ,
        title:"Agency Page",
        description: "Full-Stack Project",
        img:"/assets/img/project-cards/agency.png",
        link:"https://agency-three-ivory.vercel.app",
        GitLink:"https://github.com/lucas694/Agency"
    },
    {
        id:3 ,
        title:"Portlight",
        description: "Full-Stack Project",
        img:"/assets/img/project-cards/portlight.png",
        link:"https://portlight.vercel.app",
        GitLink:"https://github.com/lucas694/Portlight"
    },
    {
        id:4 ,
        title:"Fitness Gym",
        description: "Full-Stack Project",
        img:"/assets/img/project-cards/fitness.png",
        link:"https://fitness-gym-theta.vercel.app",
        GitLink:"https://github.com/lucas694/FitnessGym"
    },
    {
        id:5 ,
        title:"Digital Marketing",
        description: "Full-Stack Project",
        img:"/assets/img/project-cards/digital-mark.png",
        link:"https://digital-marketing-seven.vercel.app",
        GitLink:"https://github.com/lucas694/digital-Marketing"
    },
    {
        id:6 ,
        title:"NFT Marketplace",
        description: "Full-Stack Project",
        img:"/assets/img/project-cards/nft.png",
        link:"https://nft-marketplace-drab-six.vercel.app",
        GitLink:"https://github.com/lucas694/Nft-Marketplace"
    },
    {
        id:7 ,
        title:"Shadient",
        description: "Full-Stack Project",
        img:"/assets/img/project-cards/shadient.png",
        link:"https://shadient-ppzc.vercel.app",
        GitLink:"https://github.com/lucas694/Shadient"
    },
    {
        id:8 ,
        title:"Pokedex App",
        description: "Full-Stack Project",
        img:"/assets/img/project-cards/pokemon.png",
        link:"https://pokedex-pied-six.vercel.app",
        GitLink:"https://github.com/lucas694/pokedex"
    },
    //{
    //    id:3 ,
    //    title:"Valorant App",
    //    sdescription: "Full-Stack Project",
    //    simg:"/assets/img/project.png",
    //    slink:"https://valorant-mobile.vercel.app",
    //    GitLink:"https://github.com/lucas694/ValorantMobile"
    //},
    
    //*
    //    id:6 ,
    //    title:"Agriculture Page",
    //    description: "Full-Stack Project",
    //    img:"/assets/img/project.png",
    //    link:"https://agriculture-store.vercel.app",
    //    GitLink:"https://github.com/lucas694/AgricultureStore"
    //},
    //{
    //    id:11 ,
    //    title:"Ladding Page",
    //    description: "Full-Stack Project",
    //    img:"/assets/img/project.png",
    //    link:"https://landing-page-ten-iota-86.vercel.app",
    //    GitLink:"https://github.com/lucas694/Landing-page"
    //},
  ]
  
  export function getProjects(){
    return AllProjects;
  }

const SocialMedias =[
    {id:1,link:"https://github.com/lucas694",icon:<FiGithub />        ,},
    {id:2,link:"mailto:lucasassuncao694@gmail.com",icon:<LuMail />        ,},
    {id:3,link:"https://www.linkedin.com/in/lucascardoso-assuncao/",icon:<FiLinkedin />        ,},
]
export function getSocialMedias(){
    return SocialMedias
}