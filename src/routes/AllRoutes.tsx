
import { Route,Routes } from 'react-router'
import { HomePage } from '../pages/HomePage'
import { NewNote } from '../pages/NewNote'



export const AllRoutes = () => {
  return (

<Routes>


<Route path="/" element={<HomePage/>} />
<Route path ="/new" element ={<NewNote/>} />
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
