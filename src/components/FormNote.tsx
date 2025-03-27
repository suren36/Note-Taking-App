import { useRef,useState } from "react";
import CreatableSelect from "react-select/creatable";
import { Link } from "react-router";
import { NoteData, Tag } from "../types/types";



// import Select from "react-select";

type NoteFormProps = {
    onSubmit : (data : NoteData)=>void
}




export const FormNote = ({onSubmit} :NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markDownRef = useRef<HTMLTextAreaElement>(null);

  const [selectedTags,setSelectedTags] = useState<Tag[]>([]);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();
    onSubmit({
title : titleRef.current!.value,
description : markDownRef.current!.value,
tags : []


    })
    
    
    }

  return (
    <>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              ref={titleRef}
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter username"
              required
            />
          </div>

          {/* React Select Dropdown */}
          <div className="form-group">
            <label className="block text-gray-700">Role</label>

            <CreatableSelect isMulti />
          </div>

          <div className="form-group">
            <label className="form-group">Description</label>

            <textarea
              ref={markDownRef}
              name="description"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter description"
              rows={15}
              required
            ></textarea>
            <div className="buttons flex justify-center gap-3">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600  mt-4"
              >
                Submit
              </button>

              <Link to="..">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600  mt-4">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
