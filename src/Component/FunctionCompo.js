import React from "react";


 const FunctionCompo = () => {

    const inlinecss ={
        fontsize:'20px',
        color:'blue',
        fontweight:'none',
        } 

    return(
        <div className='box box1'>
        <h1>This is created using Functional Component</h1>
   
        <p className="external">This is created using external CSS</p>
       
        <p style={inlinecss}> This is created using inline CSS</p>
   
   
        </div>
    )
}

export default FunctionCompo