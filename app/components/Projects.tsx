import { RoughNotation } from "react-rough-notation";
import { projects } from "../data/constants";


export const Projects = () => {
    return (
        <div id="projects" className="mt-24 flex flex-wrap justify-center">
            <div className="w-full mb-16 mt-8 pb-8 flex justify-center">
                <RoughNotation type="underline" show={true} color="#FFC72C">
                    <h3 className="font-bold font-caption text-4xl  p-2 text-center items-start text-white"> Mes projets : </h3>
                </RoughNotation>
            </div>

        <div className="projects md:grid grid-cols-2 grid-rows-2 gap-20 justify-evenly">
            {projects.map((project) => (

                <div className="flex flex-col pb-8 items-center text-slate-800">
                    <img src={project.image} className="projectsImages rounded-md"></img>
                    <p className="font-caption text-white md:text-lg sm:text-base border-black border-b border-slate-600 pt-1"> {project.title} </p> 
                    <a href={project.github} target="_blank" type="button" className="border-slate-600 button rounded-lg border px-4 py-1 mt-4 text-white text-sm" > Voir le repository -> </a>
                </div>
            
            ))}
        </div>
        </div>
    )
}