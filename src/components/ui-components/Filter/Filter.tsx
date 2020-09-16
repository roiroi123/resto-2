import React,{useContext,useState} from 'react'
import Button from "react-bootstrap/Button";
import { MealsContext } from "App";
import axios from "axios";


function filterReducer(state: any, action: any) {
    if (action.type ==='SearchByName') {
        const { payload } = action;
        console.log(state);
        
        return {...state,state}
    }
}



export default function Filter(props:any) {
   const [state,dispatch]=useContext(MealsContext)
   const [getValueInp,setValueInp] = useState("")
   console.log(state);
   


   
    
    return (
        <div>
            <input type="text" onChange={e=>setValueInp(e.target.value)}/>
            <Button onClick={()=>{
                  dispatch({type:"FILTER_MEAL",payload:getValueInp})    
            }}>Search</Button>
            
        </div>
    )
}
