import { Link,useLocation } from "react-router-dom"

const Header = () =>{
    const location = useLocation()
    const {pathname} = location 
    return(
        <div className="w-full flex justify-between md:justify-around md:gap-[2rem] px-5 py-4 items-center shadow-md font-poppins">
                <h1 className="text-xl font-bold text-primary">mrakasondara</h1>
                    <ol className="flex gap-2">
                        <li className={`font-semibold hover:text-primary hover:underline hover:underline-offset-2 transition ${pathname == "/" ? 'text-primary underline underline-offset-2' : 'text-black'}`}><Link to="/">Home</Link></li>
                        <li className={`font-semibold hover:text-primary hover:underline hover:underline-offset-2 transition ${pathname == "/project" ? 'text-primary underline underline-offset-2' : 'text-black'}`}><Link to="/project">Project</Link></li>
                        <li className={`font-semibold hover:text-primary hover:underline hover:underline-offset-2 transition ${pathname == "/contact" ? 'text-primary underline underline-offset-2' : 'text-black'}`}><Link to="/contact">Contact</Link></li>
                    </ol>
        </div>
    )
}
export default Header