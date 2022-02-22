import React  from "react";
import './style.css'

 export function  Functioncomponent()  {
  return (
    <div class="box1">
    <p class="para1">This is created using Functional Component</p>
    <p>This is done using external CSS </p>
    <p style={{color:"red"}}>This is done using inline CSS</p>

    </div>
  )
}

export class Classcomponent extends React.Component{
  render()
  {
    return(
      <div class="box2">
      <p class="para2">This is created using Class Component</p>
      <p>This is done using external CSS </p>
    <p style={{color:"red"}}>This is done using inline CSS</p>
      </div>
    )
  }
  
}    

