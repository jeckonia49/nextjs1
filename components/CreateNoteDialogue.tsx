"use client";
import React           from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Input
} from "@/components/ui/input"
import {
   Button
} from "@/components/ui/button"
import { useMutation } from "@tanstack/react-query";
import axios           from "axios"

import {Plus}          from "lucide-react";
type Props = {};

const CreateNoteDialogue = (props: Props) => {
  const [input, setInput] = React.useState("");
  const createNoteBook = useMutation({
    mutationFn: async ()=>{
      const response = await axios.post("/api/createNoteBook", {name: input});
      return response.data
    }
  })
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  
    if(input === ""){
      window.alert("Please enter a name for your note book");
      return
    }
    createNoteBook.mutate(undefined, {
      onSuccess: ()=>{ 
        console.log("Note created")
      },
      onError:(error)=>{
        console.error("Could not create a note book", error)
      }
    })
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="border-dashed border-2 border-green-400 h-full rounded-md flex items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
            <Plus className="w-6 h-6 text-green-600" strokeWidth={3} />
            <h2 className="text-green-600 font-semiibold sm:mt-2">
              New Note Book
            </h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Note Book</DialogTitle>
            <DialogDescription>
              You can now create new noot book
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <Input placeholder="Name..." value={input} onChange={(e)=>setInput(e.target.value)} />
            <div className="h-8"></div>
            <div className="flex items-center gap-2">
              <Button  type="reset" variant={"secondary"}>
                Cancel
              </Button>
              <Button type="submit" className="text-green-600">
                submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateNoteDialogue;
