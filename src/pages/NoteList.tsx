import ReactSelect from "react-select";
import { useMemo, useState } from "react";
import { Tag } from "../types/types";
import { Link } from "react-router";
import { NoteData } from "../types/types";
import {NoteCard} from "../components/NoteCard"

type SimplifiedNote ={
  tags: Tag[];
  title: string;
  description: string;


}


type NoteListProps = {
  availableTags: Tag[];
  notes: SimplifiedNote[]; 
  
};

export const NoteList = ({ availableTags ,notes }: NoteListProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState<string>("");


  const transformedNote = notes.map((note) => {
    return {
      tag: note.tags,
      title: note.title,
      description: note.description,
    };
  });
  const filteredNotes = notes.filter(note => {
  const matchesTitle = title === "" || note.title.toLowerCase().includes(title.toLowerCase());
  const matchesTags = selectedTags.length === 0 || selectedTags.every(tag =>
    note.tags.some(noteTag => noteTag.id === tag.id)
  );
  return matchesTitle && matchesTags;
});

 

  return (
    <>
      <section className="flex justify-between items-center px-4 py-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="note-title">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            NoteList
          </h1>
        </div>
        <div className="note-action">

          <Link to="new">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Create
          </button>
          </Link>
       
<Link to="..">
<button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Edit
          </button>
</Link>
       
        </div>
      </section>




      <form className="grid grid-cols-12 gap-2 p-4" action="">
        <div className="form-group  col-span-6">
          <label className="block text-gray-700 text-lg font-medium">
            Title
          </label>

          <input
            type="text"
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Note title"
            required
          />
        </div>
        <div className="form-group col-span-6">
          <label className="block text-gray-700 text-lg font-medium">
            Tags
          </label>
          <ReactSelect
          className="mt-1"  
            value={selectedTags.map((tag) => ({
              label: tag.label,
              value: tag.id,
            }))}
            options={availableTags.map((tag) => ({
              label: tag.label,
              value: tag.id,
            }))}
            onChange={(tags) => {
              setSelectedTags(
                tags?.map((tag) => ({
                  id: tag.value,
                  label: tag.label,
                })) || []
              );
            }}
            isMulti
            placeholder="Select or create tags..."
            noOptionsMessage={() => "Type to create a new tag"}
          />
        </div>
      </form>

{
  <div className="grid grid-cols-12 gap-2   p-4">


{notes.map((note) => {
  return (
    <div className="col-span-4" key={note.title}>
      <NoteCard  
      
        title={note.title}
        description={note.description}
        tags={note.tags.map((tag) => tag.label)} // Assuming tags is an array of strings
      />
    </div>
  );
})}



  </div>
}










        </>
     )}
      

