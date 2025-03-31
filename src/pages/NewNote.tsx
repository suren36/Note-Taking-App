
import { FormNote } from '../components/FormNote'


type NewNoteProps = {
  onSubmit: (data: any) => void;
  onAddTag?: (tag: any) => void;
};

export const NewNote   = ({ onSubmit }: NewNoteProps) => {
  return (
    <div className='container mx-auto p-5 border-purple-200 border-2 rounded-lg mt-10'>
<h1 className='mb-4 text-center text-6xl text-purple-950'>

   Add Notes
</h1>

<FormNote  onSubmit={(data) => console.log( data)}  />

    </div> 
  )
}
