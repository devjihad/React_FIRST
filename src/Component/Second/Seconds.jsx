import Second from "./Second";



const Seconds = ({values, read }) => {
    // console.log(timee)
  return (
        <div className="md:w-1/3 bg-slate-500" >
            <h1 className="text-xl font-bold text-white p-2">Total reading time : {read}</h1>
            <div >
            <div className="border-b-2">
            <h1 className="text-2xl font-bold text-center ">Bookmark</h1>
            </div>
            {/* <hr className="border-2 border-b-black"/> */}
           {
            values.map(val=><Second key={val.id} val={val}></Second>)
           }
           
           
        </div>
        </div>
    );
};

export default Seconds;