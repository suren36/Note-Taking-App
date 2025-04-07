import { Note } from "../types/types";
import { Navigate, Outlet, useOutletContext, useParams } from "react-router";
import { NoteDetail } from "./NoteDetail";


type NoteLayoutProps = {
  notes: Note[];
};

export const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/" replace={true} />;

  return <Outlet context={note} />;
};

export function useNote() {
  return useOutletContext<Note>();
}
