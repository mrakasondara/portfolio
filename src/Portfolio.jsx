import { Routes,Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Project from "./components/Project"
import Contact from "./components/Contact"


const Portfolio = () =>{
    return (
        <div className="w-full flex flex-col justify-center  ">
            <Header/>
            <div className="w-full rounded-lg px-[2rem] py-2 mt-[5rem]">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default Portfolio