// types/types.ts
export type Tag = {
  id: string;
  label: string;
};

export type NoteData = {
  title: string;
  description: string;
  tags: Tag[];
};

export type RawNoteData = {
  title: string;
  description: string;
  tagsIds: string[];
};

export type RawNote = {
  id: string;
} & RawNoteData;

export type Note = {
  id: string;
} & NoteData;