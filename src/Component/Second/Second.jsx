

const Second = ({val}) => {
   
    return (
        <div>
            
           <div className="bg-slate-800 m-3 rounded-lg text-white p-3">
           <h1 className="text-xl">{val.title}</h1>
           <p>{val.hashtags}</p>
           </div>
        </div>
    );
};

export default Second;