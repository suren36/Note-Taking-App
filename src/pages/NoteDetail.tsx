import { useNote } from "./NoteLayout";
import { Link } from "react-router";
import ReactMarkdown from "react-markdown";

export const NoteDetail = () => {
  const note = useNote();


  return (
    <>
      <section className="flex justify-between items-center px-4 py-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="note-title">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            NoteList
          </h1>
        </div>
        <div className="note-action">
          <Link to={`/${note.id}/edit`}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Edit
            </button>
          </Link>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
          >
            Delete
          </button>
    
            <Link to="..">
              <button
                type="button"
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Back
              </button>
            </Link>
  
        </div>
      </section>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-4 m-4">
        <h1 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {note.title}
        </h1>
       
        <div className="flex flex-wrap gap-2">
          {note.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tag.label}
            </span>
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          <ReactMarkdown>{note.description}</ReactMarkdown>
        </p>





      </div>
      
      

    </>
  );
};
