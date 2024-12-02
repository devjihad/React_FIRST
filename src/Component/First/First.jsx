import { useEffect } from "react";
import { useState } from "react";
import Singular from "./Singular";


const First = ({Click,Run}) => {
    // console.log(Click)
    const[valu , setvalue]=useState([])
    // console.log(valu)
    useEffect(()=>{
        fetch('../../../public/Data.json')
        .then(res=>res.json())
        .then(data=>setvalue(data))
    },[])
    
    return (
        <div className="md:w-2/3">
            
            {
                valu.map(val=><Singular Click={Click} key={val.date} val={val} Run ={Run}></Singular>)
            }
        </div>
    );
};

export default First;