
import styled from "styled-components";
import { skills } from "../data/constants";
import { RoughNotation } from "react-rough-notation";



export const Skills = () => {
    return (
        <div id="skills">
            <div className="w-full mt-8 pb-8 flex flex-wrap justify-center">
                <RoughNotation type="underline" show={true} color="#FFC72C">
                    <h3 className="font-bold text-4xl flex flex-column p-2 text-center items-start text-white font-caption"> Compétences : </h3>
                </RoughNotation>
                    <div className="skillContainer mt-20 w-full flex flex-wrap items-center justify-center p-8 gap-8">
                        {skills.map((skill) =>(
                            <div className="skills w-full flex-wrap">
                                <p className="skillTitle pt-6 text-center pb-4 text-white"> {skill.title} </p>
                                <div className="flex justify-center flex-wrap mb-5 gap-3">
                                    {skill.skills.map((skill) => (
                                        <div className="skillItem mt-2 flex items-center justify-center gap-2">
                                            <img src={skill.image} className="w-6 h-6"></img>
                                                {skill.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        
                        ))}
                    </div>
            </div>
        </div>
    );
}