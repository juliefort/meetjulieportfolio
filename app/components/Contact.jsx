import { RoughNotation } from "react-rough-notation";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Contact = () => {
   return(
    <div className="mt-20 contact flex flex-col items-center">
        <div className="mb-12 w-full gap-2 mt-8 flex flex-col justify-center items-center">
                <RoughNotation type="circle" show={true} color="#FFC72C">
                    <h3 className="font-bold font-caption text-4xl p-2 px-8  text-center items-start text-white"> Une demande ? </h3>
                </RoughNotation>
                <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="#FFC72C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-corner-left-down"><polyline points="14 15 9 20 4 15"/><path d="M20 4h-7a4 4 0 0 0-4 4v12"/></svg>
        </div>
       
        <div className="cardContact flex flex-row justify-evenly items-center">
            <Image src="/image/photo.jpeg" width={60} height={60} className="contactImage rounded-full" alt="Photo de Julie Fort"></Image>
            <div className="flex flex-col gap-2">
                <p className="text-white text-sm border-b border-white text-center"> Me joindre : </p>
                <ul className="flex gap-3 justify-center">
                        <Link 
                        href= "https://github.com/juliefort" target="_blank"
                        className={cn(buttonVariants({ variant: "outline"}), 'size-8 p-0')} >
                            <GithubIcon size={20} className="text-foreground" />
                        </Link>
                        <Link 
                        href= "https://www.linkedin.com/in/julie-fort-ba1b9a223/" target="_blank"
                        className={cn(buttonVariants({ variant: "outline"}), 'size-8 p-0')} >
                            <LinkedInIcon size={20} className="text-foreground" />
                        </Link>
                        <a href="mailto:juliefort01@gmail.com">
                            <svg width="28" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </a>
                    </ul>
            </div>
        </div>
    </div>
   )
}