import { RoughNotation } from "react-rough-notation";

export const Experiences = () => {
    return(
        
        <div id="experiences">
            <div className="experiences mb-20 w-full mt-8 pb-8 flex justify-center">
                <RoughNotation type="underline" show={true} color="#FFC72C">
                    <h3 className="font-bold font-caption text-4xl  p-2 text-center items-start text-white"> Expériences : </h3>
                </RoughNotation>
            </div>

            <div className="timeLineLeft flex pr-80">
                <div className="mt-6">
                    <p className="font-caption text-white text-3xl"> 2023 - 2024 </p>
                    <div className="experienceCard text-slate-800 bg-slate-300 flex flex-wrap justify-center items-center">
                        <p className="font-caption  md:text-lg sm:text-base text-center border-b border-black pt-1"> Graduate Développeur </p>
                        <div>
                        <p className="font-caption  md:text-lg sm:text-base text-center border-b border-black pt-1"> web et web mobile </p>
                        <p className="text-sm text-center mb-4 pt-6"> Studi </p> 
                        </div>
                    </div>
                </div>
                    <div className="timelineContainer flex[1] flex items-center justify-start">
                        <div className="pointExperiences"></div>
                        <div className="timeLine"> </div>
                    </div> 
                </div>
                          
                <div className="timeLineRight flex flex[1]">
                    <div className="timelineContainer flex[1] flex items-center justify-start">
                    
                        <div className="pointExperiences"></div>
                        <div className="timeLine"> </div>
                    </div>
                    <div className="mt-6">
                        <p className="font-caption text-white text-3xl"> 2022 - 2023 </p>
                        <div className="experienceCard text-slate-800 bg-slate-300 flex flex-wrap justify-center items-center">
                            <p className="font-caption md:text-lg sm:text-base border-b border-black pt-1"> Assembleuse de bijoux </p>
                            <p className="text-sm mb-4"> Beblue Bijoux, Montréal </p> 
                        </div>
                    </div>
                </div>
                    
                <div className="timeLineLeft flex pr-80">
                <div className="mt-6">
                    <p className="font-caption text-white text-3xl"> 2020 - 2022 </p>
                    <div className="experienceCard text-slate-800 bg-slate-300 flex flex-wrap justify-center items-center">
                        <p className="font-caption  md:text-lg sm:text-base text-center border-b border-black pt-1"> Conseillère en bijouterie </p>
                        <p className="text-sm text-center mb-4"> L&apos;atelier d&apos;Amaya, Montpellier </p> 
                    </div>
                    </div>
                    <div className="timelineContainer flex[1] flex items-center justify-start">
                        <div className="pointExperiences"></div>
                        <div className="timeLine"> </div>
                    </div>
                </div>
            
                
                <div className="timeLineRight flex flex[1]">
                    <div className="timelineContainer flex[1] flex items-center justify-start">
                        <div className="pointExperiences"></div>
                        <div className="timeLine"> </div>
                    </div>
                    <div className="mt-6">
                        <p className="font-caption text-white text-3xl"> 2020 </p>
                        <div className="experienceCard text-slate-800 bg-slate-300 flex flex-wrap justify-center items-center">
                            <p className="font-caption  md:text-lg sm:text-base text-center border-b border-black pt-1"> Conseillère en prêt-à-porter </p>
                            <p className="text-sm mb-4"> Sessun, Montpellier </p> 
                        </div>
                    </div>
                </div>

                <div className="timeLineLeft flex pr-80">
                <div className="mt-6">
                    <p className="font-caption text-white text-3xl"> 2019 </p>
                    <div className="experienceCard text-slate-800 bg-slate-300 flex flex-wrap justify-center items-center">
                        <p className="font-caption  md:text-lg sm:text-base text-center border-b border-black pt-1"> Tutrice pédagogique </p>
                        <p className="text-sm text-center mb-4"> ITIC Université Paul Valéry, Montpellier </p> 
                    </div>
                </div>
                    <div className="timelineContainer flex[1] flex items-center justify-start">
                        <div className="pointExperiences"></div>
                        <div className="timeLine"> </div>
                    </div> 
                </div>

                <div className="timeLineRight flex flex[1]">
                    <div className="timelineContainer flex[1] flex items-center justify-start">
                        <div className="pointExperiences"></div>
                        <div className="timeLine"> </div>
                    </div>

                    <div className="mt-6">
                        <p className="font-caption text-white text-3xl"> 2018-2019 </p>
                        <div className="experienceCard text-slate-800 bg-slate-300 flex flex-wrap justify-center items-center">
                            <p className=" flex flex-wrap font-caption text-center md:text-lg sm:text-base border-b border-black pt-1"> Accompagnatrice en insertion </p>
                            <p className="text-sm  mb-4"> UFCV, Montpellier </p>
                        </div>
                    </div>
                </div>

                <div className="timeLineLeft flex pr-80">
                <div className="mt-6">
                    <p className="font-caption text-white text-3xl"> 2017-2019 </p>
                    <div className="experienceCard text-slate-800 bg-slate-300 flex flex-wrap justify-center items-center">
                        <p className="font-caption  md:text-lg sm:text-base text-center border-b border-black pt-1"> Bac +2 Information-Communication</p>
                        <p className="text-sm text-center mb-4"> ITIC Université Paul Valéry, Montpellier </p> 
                    </div>
                </div>
                    <div className="timelineContainer flex[1] flex items-center justify-start">
                        <div className="pointExperiences"></div>
                        <div className="timeLine"> </div>
                    </div> 
                </div>
                  
        </div>     
    )
}