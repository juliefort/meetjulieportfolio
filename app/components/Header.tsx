import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import Link from "next/link";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { cn } from "@/lib/utils";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4 p-8">
            <Section className=" flex items-baseline">
                <h1 className="text-lg font-bold text-white"> MEET JULIE</h1>
                <div className="flex-1" />
                    <ul className="flex gap-3">
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
                    </ul>
            </Section>
        </header>
    )
}