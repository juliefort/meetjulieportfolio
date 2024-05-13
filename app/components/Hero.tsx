import { Section } from "./Section";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";



export const Hero = () => {

    return (
        <Section className="flex max-md:flex-col items-start pt-16 pb-8 mb-24 max-sm:gap-0 max-sm:flex-row">
            <div className="flex-[2] flex flex-col gap-3 text-center items-center presentation">
                <RoughNotation type="highlight" show={true} color="#FFC72C">
                <h2 className="text-white font-bold text-5xl"> Hello, I'm Julie </h2>
                </RoughNotation>
        
                <h3 className="text-white text-2xl"> Développeuse Full Stack </h3>
                <p className="text-white w-9/12">
                    Actuellement étudiante en tant que Développeuse Web au sein de l'école Studi, 
                    en partenariat avec Digital Campus, c'est naturellement que je me suis tournée 
                    vers l'univers digital à la suite de mes études en communication, faisant écho 
                    à ma soif d'apprendre et de concevoir des interfaces utilisateurs toujours plus 
                    attrayantes et intuitives. 
                </p>
                
                <a href="https://drive.google.com/file/d/1AhlVDJ3Ytkk-If2AZ2YITypJtNsSnSji/view?usp=sharing" target="_blank" type="button" className="border-primary button rounded-lg text-primary border px-8 py-1">
                    Mon CV
                </a>
            </div>
            <div className="flex-sm[1]">
                 <img src="/image/photo.jpeg" className="headerImage w-8/12 h-auto rounded-full max-md:w-12" alt="Photo de Julie Fort"></img>
            </div>
        </Section>

    )
}
