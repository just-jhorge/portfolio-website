import Link from "next/link";
import { FileText } from "lucide-react";
import { Cursor } from "@/components/cursor";

const Resume = () => {
  return (
    <section className="py-8">
      <div className="container space-y-2">
        <p className="flex items-center space-x-2 text-neutral-500">
          <FileText className="h-4 w-4 mr-2" /> resume
        </p>
        <div className="space-y-5">
          <p className="text-sm max-w-xl text-neutral-400">
            my passion for creating solutions 💡 to everyday problems has led me
            to work with some reputable clients. seeing my imagination or that
            of my client come to life, digital life obviously 😂, is something i
            find really fascinating. you can download my result to learn more
            about my professional life
            <Cursor />
          </p>
          <button className="flex items-center text-xs border border-dashed text-neutral-300 border-neutral-700 px-2 py-2 sm:py-1 rounded-sm bg-neutral-800 hover:bg-neutral-800/60">
            <Link href="/assets/resume.pdf" download>
              download resume
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
