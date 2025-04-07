import { Route, Routes } from "react-router";

import { NewNote } from "../pages/NewNote";
import { NoteData } from "../types/types";
import { Tag } from "../types/types";
import { Note } from "../types/types";
import { NoteList } from "../pages/NoteList";
import { NoteLayout } from "../pages/NoteLayout";
import {NoteDetail } from "../pages/NoteDetail";
import { EditNote } from "../pages/EditNote";
import { useParams } from "react-router";

interface AllRoutesProps {
  notes: Note[];
  availableTags: Tag[];
  onCreateNote: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  onUpdateNote: (id: string, data: NoteData) => void;



}

export const AllRoutes: React.FC<AllRoutesProps> = ({
  notes,
  onCreateNote,
  onAddTag,
  availableTags,
  onUpdateNote,

}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<NoteList availableTags={availableTags} notes={notes} />}
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
 
      <Route path="/delete" element={<div>Delete</div>} />
      <Route path="/:id" element={<NoteLayout notes={notes} />}>
        <Route index element=
          {<NoteDetail/>}
         />
        <Route path="edit" element={ <EditNote
            onSubmit={(data) => {

              const { id } = useParams();
              if (id) {
                onUpdateNote(id, data);
              } else {
                console.error("Note ID is undefined");
              }
            }}
            onAddTag={onAddTag}
            availableTags={availableTags}
          />} />
      </Route>
      <Route path="*" element={<h1>Oops</h1>} />

    </Routes>
  );
};
