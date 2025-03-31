import { FormNote } from '../components/FormNote';
import { NoteData, Tag } from '../types/types';

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void; // Made required (adjust if FormNote allows undefined)
  availableTags: Tag[];
};

export const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
  return (
    <div className="container mx-auto max-w-4xl p-5 border-purple-300 border-2 rounded-lg mt-10">
      <h1 className="mb-4 text-center text-6xl text-purple-950">Add Notes</h1>
      <FormNote
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
};