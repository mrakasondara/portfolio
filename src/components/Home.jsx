const Home = () =>{
    return (
        <div className="w-full flex md:flex-row flex-col gap-[5rem] md:gap-3 justify-center font-poppins">
            <div className="w-full md:w-[45%] justify-center items-center md:items-start flex flex-col text-3xl font-bold px-5 py-3 gap-2 order-2 md:order-1">
                <h2>Hi,</h2>
                <h2>I'm <span className="text-primary">mrakasondara</span></h2>
                <p className="text-[20px] font-normal">I'm Front End Developer</p>
                <button className="bg-primary text-[15px] text-white rounded-full px-2 py-1 w-32 shadow-lg shadow-slate-300 hover:bg-transparent hover:border hover:border-primary hover:text-primary transition">CV</button>
                <ol className="mt-4 text-sm text-primary flex gap-4">
                    <li><a href="" className="bg-black/70 px-2 py-1 rounded-full">Git</a></li>
                    <li><a href="" className="bg-black/70 px-2 py-1 rounded-full">In</a></li>
                    <li><a href="" className="bg-black/70 px-2 py-1 rounded-full">Ins</a></li>
                </ol>
            </div>
            <div className="w-full md:w-[45%] bg-red-500 md:order-2 order-1">
                
            </div>
        </div>
    )
}
export default Home