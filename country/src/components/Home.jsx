import { useEffect, useState } from "react"
import axios from "axios"

export const Home=()=>{
    const[data,setData]=useState()
   const [sort,setSort]=useState("asc")
    useEffect(()=>{
        axios({
            url:"http://localhost:8080/cities",
            method:"get",
            params:{
                _sort:"population",
                _order:sort,
            }
        }).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err.message)
        })

    },[sort])
    console.log(data)
  const handleChange=(e)=>{
    setSort(e.target.value)
  }

    return(
        <>
        <table>
            <div>
                <select value={sort} onChange={handleChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
         <thead>
          
                <th>Country</th>
                <th>City</th>
                <th>Population</th>
                <th>Add</th>
                <th>Delete</th>
                </thead>
        <tbody>
     
       
        {data?.map((e,i)=>{
            return(
            <tr key={i}>
               
                <td>{e.country}</td>
                <td>{e.city}</td>
                <td>{e.population}</td>
                <td><button>Add</button></td>
               <td><button>Delete</button></td> 

            </tr>
            )
        })}
      
      </tbody>
      </table>
      </>
    )
}