
import { useState } from 'react'
import First from './Component/First/First'

import Nav from './Component/Navbar/Nav'
import Seconds from './Component/Second/Seconds'
// import { setitem } from './Local'

function App() {
  const[values, setvalues]=useState([])
  // console.log(values.id)
 const Click=(time)=>{
    const sum =[...values,time]
    setvalues(sum)
    // setitem(time)
  }


  const[read , setread]=useState(0)
  // console.log(read)
  const Run=(ran)=>{
    const sum =parseInt(ran)
    
    setread(read +sum)

  }  
  
  return(
    <div>
      <Nav></Nav>
     <div className='flex max-w-5xl mx-auto gap-3'>
     <First Click={Click} Run={Run} ></First>
     <Seconds values={values} read ={read} ></Seconds>
     </div>
    </div>
  )
}

export default App
