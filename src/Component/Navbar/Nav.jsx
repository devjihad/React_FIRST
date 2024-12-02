import img from '../../assets/img/1.webp'
export default function Nav (){
    return(
        <div className='flex justify-between max-w-6xl mx-auto border-b-4 py-2 mb-3'>
        <img height={'60px'} width={'80px'} className='rounded-3xl ' src={img} alt="" />
        <ol className="flex gap-5 text-2xl font-medium items-center">
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contact</li>
        </ol>
        <div className="flex gap-4 items-center">
        <button className="bg-neutral-700 rounded-lg h-[35px] w-20 text-xl font-medium text-white">Login</button>
        <button className="bg-neutral-700 rounded-lg h-[35px] w-20 text-xl font-medium text-white">Sign up</button>
        </div>
        
            
        </div>
    )
 
}