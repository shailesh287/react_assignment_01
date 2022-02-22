import React,{Component} from "react";

 class ClassCompo extends Component{
    render(){
        const inlinecss ={
            fontsize:'10px',
            color:'blue',
            fontweight:'none',
            }

        return(
            <div className='box box2'>
            <h1>This is created using Class Component </h1> 
      
            <p className='external'>This is created using external CSS</p>
           <p style={inlinecss}>This is created using inline CSS</p>
            
            
            </div>
        )
    }
}
export default ClassCompo