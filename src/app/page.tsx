import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail  } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16">
      <div className="flex flex-col items-center">
        <Image 
          src="/profile.jpg" 
          alt="Gadderz profile picture" 
          width={180} 
          height={180} 
          priority
          className="rounded-full ring ring-violet-600 ring-offset-1 dark:ring-offset-black" />
        <p className="font-bold text-xl pt-4">GADDERZ</p>
        <p>a curious software developer</p>
        <div className="flex flex-row gap-12 my-8">
          <a 
            href="https://github.com/gadderz" 
            className="rounded-full ring ring-white ring-offset-8 dark:ring-offset-black hover:ring-violet-600 transition-all duration-400"
            target="_blank"
            rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/vinicius-gadelha-md/" className="rounded-full ring ring-white ring-offset-8 dark:ring-offset-black hover:ring-violet-600 transition-all duration-400">
            <Linkedin />
          </a>
          <a href="mailto:vinicius.gadelha@outlook.com.br" className="rounded-full ring ring-white ring-offset-8 dark:ring-offset-black hover:ring-violet-600 transition-all duration-400">
            <Mail />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <Card className={cn("w-[320px] h-[300px] flex flex-col justify-between")}>
          <CardHeader>
            <CardTitle>Articles</CardTitle>
            <CardDescription>written by me as a way to consolidate my knowledge</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>See more</Button>
          </CardFooter>
        </Card>

        <Card className={cn("w-[320px] h-[300px] flex flex-col justify-between")}>
          <CardHeader>
            <CardTitle>Pophub</CardTitle>
            <CardDescription>a project to list and rank the pop universe!</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Go to repository</Button>
          </CardFooter>
        </Card>
      </div>

      <p className="my-4">Gadderz @ 2024</p>
    </main>
  );
}
