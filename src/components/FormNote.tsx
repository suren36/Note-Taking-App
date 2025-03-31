// components/FormNote.tsx
import { useRef, useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { Link } from "react-router";
import { NoteData, Tag } from "../types/types";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
  note?: NoteData;
};

export const FormNote = ({ 
  onSubmit, 
  onAddTag, 
  availableTags,
  note 
}: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markDownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(note?.tags || []);
  const [selectKey, setSelectKey] = useState(0);
const navigate = useNavigate();
  // Force select to update when availableTags changes
  useEffect(() => {
    setSelectKey(prev => prev + 1);
  }, [availableTags]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current?.value || "",
      description: markDownRef.current?.value || "",
      tags: selectedTags,
    });

    navigate("../");
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label className="block text-gray-700 text-lg font-medium">Title</label>
          <input
            ref={titleRef}
            type="text"
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Note title"
            required
            defaultValue={note?.title}
          />
        </div>

        <div className="form-group">
          <label className="block text-gray-700 text-lg font-medium">Tags</label>
          <CreatableSelect
            key={`select-${selectKey}`}
            className="mt-1"
            classNamePrefix="select"
            onCreateOption={(label) => {
              const newTag = { id: uuidV4(), label };
              onAddTag(newTag);
              setSelectedTags(prev => [...prev, newTag]);
            }}
            value={selectedTags.map(tag => ({
              label: tag.label,
              value: tag.id,
            }))}
            options={availableTags.map(tag => ({
              label: tag.label,
              value: tag.id,
            }))}
            onChange={(tags) => {
              setSelectedTags(
                tags?.map(tag => ({
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

        <div className="form-group">
          <label className="block text-gray-700 text-lg font-medium">Description</label>
          <textarea
            ref={markDownRef}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Note content"
            rows={15}
            required
            defaultValue={note?.description}
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Link to=".." className="flex">
            <button
              type="button"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};