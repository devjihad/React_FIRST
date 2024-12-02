const get=()=>{
    const Item = localStorage.getItem('value')
    if(Item){
        return JSON.parse(Item)
    }
    return[]
}
const setitem =(id)=>{
   const gettem= get()
    gettem.Push(id)
    localStorage.setItem('value',JSON.stringify(gettem))
}
export{setitem}