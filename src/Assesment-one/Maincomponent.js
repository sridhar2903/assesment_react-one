import React from 'react'
import { Functioncomponent,Classcomponent } from './Funclass';
import './style.css'


class Maincomponent extends React.Component{
  state={
    Showfuncomponent:false,
    Showclasscomponent:false
  };

 gotofun=()=>{
    this.setState({
      Showfuncomponent:!this.state.Showfuncomponent,
    })
 }

 gotoclass=()=>{
  this.setState({
    Showclasscomponent:!this.state.Showclasscomponent,
  })
}
  

render (){
    return (
      <>
        
      <h1 id="headstyle">Styling using Functional and Class Component</h1>
    
      
      
          <button id="fpara" onClick={this.gotofun}>To see Styling using Functional Component</button>
          <button id="cpara" onClick={this.gotoclass}>To see Styling using Class Component</button>
       
           <div class="flex">
         <div class="fun">{this.state.Showfuncomponent&&<Functioncomponent/>}</div>
          <div class="class">{this.state.Showclasscomponent&&<Classcomponent/>}</div>
          </div>
      </>
    )
  }
}

export default Maincomponent
