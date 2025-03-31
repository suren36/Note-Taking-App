
  export type Note = {
    id: string;
  } & NoteData;
  
  export type RawNoteData = {
    title: string;
    tagsIds: string[];
    description: string;
  };
export type NoteData = {
    title: string;
    tags: string[];
    description: string;
  };
  export type RawNote = {
    id:string;
  }& RawNoteData;
  
  export type Tag = {
    id: string;
    label: string;
  };
  