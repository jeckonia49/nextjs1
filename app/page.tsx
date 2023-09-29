import TypewriterTitle   from "@/components/TypewriterTitle";
import { Button }        from "@/components/ui/button";
import Link              from "next/link";
import { ArrowRight  }   from 'lucide-react';


export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-7xl font-semibold text-teal-950 text-center">
          AI{" "}
          <span className="font-bold text-6xl text-blue-300">
            note taking
          </span>{" "}
          <span className="text-7xl text-red-300">application</span> with nextjs
        </h1>
        <div className="mt-4" />
        <h2 className="text-center font-semibold text-3xl text-slate-950">
          <TypewriterTitle />
        </h2>
        <div className="mt-8" />
        <div className="flex justify-center items-center">
          <Link href={"/dashboard"}>
            <Button className="bg-green-400 py-4 px-4 font-semibold">
              Get Started <ArrowRight  className="ml-2 w-5 h-5" strokeWidth={3} />
              </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
