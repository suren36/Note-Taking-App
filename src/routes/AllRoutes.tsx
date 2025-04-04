
import { Route,Routes } from 'react-router'

import { NewNote } from '../pages/NewNote'
import { NoteData } from '../types/types'
import { Tag } from '../types/types'
import { Note } from '../types/types'
import { NoteList } from '../pages/NoteList'




interface AllRoutesProps {
  notes: Note[];
  availableTags: Tag[];
  onCreateNote: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  onUpdateTag: (id: string, label: string) => void; // Add this
  onDeleteTag: (id: string) => void;

}




export const AllRoutes : React.FC<AllRoutesProps> = ({ notes, onCreateNote, onAddTag, availableTags }) => {
  return (

<Routes>
  <Route
    path="/"
    element={
      <NoteList 
        
          availableTags={availableTags}
          
          notes={notes}
      

      />
    }
  />
  <Route
    path="/new"
    element={
      <NewNote
        onSubmit={onCreateNote}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    }
  />
  <Route path="/edit" element={<div>Edit</div>} />
  <Route path="/delete" element={<div>Delete</div>} />
  <Route path="/:id">
    <Route index element={<h1>Show</h1>} />
    <Route path="edit" element={<h1>Edit</h1>} />
    <Route path="*" element={<h1>Oops</h1>} />
  </Route>
</Routes>

)
}
