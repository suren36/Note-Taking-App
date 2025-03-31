// App.tsx
import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { useLocalstorage } from './hooks/useLocalstorage';
import { RawNote, Tag, NoteData } from './types/types';
import { useMemo } from 'react';
import { v4 as uuidV4 } from 'uuid';

function App() {
  const [notes, setNotes] = useLocalstorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalstorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map(note => ({
      ...note,
      tags: tags.filter(tag => note.tagsIds.includes(tag.id))
    }));
  }, [notes, tags]);

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        {
          ...data,
          id: uuidV4(),
          tagsIds: tags.map(tag => tag.id)
        }
      ];
    });
  }

  function onAddTag(tag: Tag) {
    setTags(prevTags => {
      // Check for duplicates
      if (prevTags.some(t => t.id === tag.id || t.label === tag.label)) {
        return prevTags;
      }
      return [...prevTags, tag];
    });
  }

  function onUpdateTag(id: string, label: string) {
    setTags(prevTags => {
      return prevTags.map(tag => {
        if (tag.id === id) {
          return { ...tag, label };
        }
        return tag;
      });
    });
  }

  function onDeleteTag(id: string) {
    setTags(prevTags => prevTags.filter(tag => tag.id !== id));
  }

  return (
    <div className="App">
      <AllRoutes
        notes={notesWithTags}

        availableTags={tags}
        onCreateNote={onCreateNote}
        onAddTag={onAddTag}
        onUpdateTag={onUpdateTag}
        onDeleteTag={onDeleteTag}
      />
    </div>
  );
}

export default App;