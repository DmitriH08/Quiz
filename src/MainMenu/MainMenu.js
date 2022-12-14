import React, { useState } from 'react';
// import RenderCoponents from "./MainMenu/RenderComponents"
// vse to chto nize = poluechaem iz app.js v vide propsov
export const MainMenu = ({ title, question, lastElement, score,  }) => {
({handleChange})=>{
        console.log(question, lastElement);
       
       
        }
    return (

        <div className="header">
            <div className="top">
                <div className="modal"> <h1>{title}</h1>
                </div>
                <h1 className="task-box">{question}</h1>
                
                <div className="answer-box">
                <button  onClick={handleChange} value = {'begginer'} > Beginner</button>
                <button onClick={handleChange} value = {'Middle'}> Middle</button>
                <button> Master</button>
                <button> GrandMaster</button>


                </div>
            </div>
            </div>
      
    );

};

