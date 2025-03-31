
import { Route,Routes } from 'react-router'
import { HomePage } from '../pages/HomePage'
import { NewNote } from '../pages/NewNote'
import { NoteData } from '../types/types'
import { Tag } from '../types/types'


interface AllRoutesProps {
  onCreateNote: (data: NoteData) => void;
  onAddTag?: (tag: Tag) => void;


}



export const AllRoutes : React.FC<AllRoutesProps> = ({ onCreateNote, onAddTag }) => {
  return (

<Routes>


<Route path="/" element={<HomePage/>} />
<Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={onAddTag} />} />
<Route path ="/edit" element ={<div>edit</div>} />
<Route path ="/delete" element ={<div>delete</div>} />
<Route path ="/:id">

<Route index element={<h1>Show</h1>}/>
<Route path = "edit" element={<h1>Edit</h1>}/>
<Route path = "*" element={<h1>Opps</h1>}/>



</Route>
</Routes>

)
}
