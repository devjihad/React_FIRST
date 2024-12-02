import { FaBookmark } from "react-icons/fa6";

export default function Singular({val,Click,Run}){
    // console.log(Run)

const {owner_name,owner_image,cover_image,title, reading_time,date, hashtags, id}=val
return(
    <div className="border-2 mb-5 rounded-md" >
      <img height={'400px'} width={'700px'} className="rounded-lg" src={cover_image} alt="" />
<div className="p-3">
<div className="flex justify-between">
      <div className="flex gap-3">
      <img className="rounded-3xl h-20 w-24" src={owner_image} alt="" />
      <div>
        <h1 className="text-2xl font-medium">{owner_name}</h1>
        <h1>{date}</h1>

      </div>

      </div>
     <div>
     <button className="text-black-900" onClick={()=>Click(val)} ><FaBookmark /></button>
     
     <h1>{reading_time}</h1>
     </div>
      </div>
      <h1 className="text-5xl font-medium mt-2">{title}</h1>
      <p>{hashtags}</p>
      <button className="bg-slate-400 rounded-lg text-white" onClick={()=>Run(reading_time)} >Mark as Read</button>
</div>
    </div>
)
}