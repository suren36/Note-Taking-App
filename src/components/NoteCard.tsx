import React from 'react'




type NoteCardProps = {
    title: string;
    description: string;
    tags: string[];

  };
export const NoteCard = (
    { title, description, tags }: NoteCardProps
    

) => {
  return (
    <div>

        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <div className="mt-2">
            {tags.map((tag, index) => (
                <span
                key={index}
                className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
                >
                {tag}
                </span>
            ))}
            </div>
        </div>

        
    </div>
  )
}
