import CreateNoteDialogue from "@/components/CreateNoteDialogue";
import { Button }         from "@/components/ui/button";

import { Separator }      from "@/components/ui/separator";
import { UserButton }     from "@clerk/nextjs";

import { ArrowLeft }      from "lucide-react";
import Link               from "next/link";




type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="max-w-7xl mx-auto p-10">
        <div className="h-14" />
        <div className="flex justify-between items-center md:flex-row flex-col">
          <div className="flex items-center">
            <Link href="/">
              <Button className="bg-green-600" size={"sm"}>
                <ArrowLeft strokeWidth={3} className="mr-1 h-4 w-4" /> Back
              </Button>
            </Link>
            <div className="w-4" />
            <h1 className="text-3xl font-bold text-gray-700">My Note</h1>
            <div className="w-4" />
            <UserButton />
          </div>
        </div>
        
        <div className="h-8" />
        <Separator />
        <div className="h-8"></div>
        {/* list all notes */}
        <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">You have not notes yet</h2>
        </div>

        {/* display all the notes */}
        <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3">
            <CreateNoteDialogue />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
