import './App.css'
import { AllRoutes } from './routes/AllRoutes.js';
import { useLocalstorage } from './hooks/useLocalstorage.js'; // ✅ Import added
import { RawNote,Tag,NoteData } from './types/types.js';
import { useMemo } from 'react';
import { v4 as uuidV4 } from 'uuid';


function App() {
  const [notes, setNotes] = useLocalstorage<RawNote[]>("NOTES", []);
  const [tags,setTags] = useLocalstorage<Tag[]>("TAGS", []);
const notesWithTags = useMemo(() => {
  return notes.map(note => {
    return {
      ...note,
      tags: tags.filter(tag => note.tagsIds.includes(tag.id))
    };
  });
}, [notes, tags]);



function onCreateNote(data : NoteData){

  setNotes(prevNotes=>{
    return [
      ...prevNotes,{
        ...data, id:uuidV4(),tagsIds : tags.map(tag=> tag.id)
      }
    ]
  })
}
function addTag(tag : Tag){
setTags(prev =>[...prev,tag])
}


  return (
    <>
      <AllRoutes onCreateNote={onCreateNote} onAddTag={addTag} />

    </>
  );
}

export default App;
