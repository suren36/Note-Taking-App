export type NoteData = {
    title: string;
    tags: string[];
    description: string;
  };
  
  export type Note = {
    id: string;
  } & NoteData;
  
  export type Tag = {
    id: string;
    label: string;
  };
  