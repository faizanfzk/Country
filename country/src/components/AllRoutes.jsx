import { Routes,Route } from "react-router-dom"
import { Home } from "./Home"
import { AddCountry } from "./AddCountry"
import { AddCity } from "./AddCity"


export const AllRoutes=()=>{
    return(
       
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addcountry" element={<AddCountry/>}/>
            <Route path="/addcity" element={<AddCity/>}/>

           

        </Routes>
   
    )
}