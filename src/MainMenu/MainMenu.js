import React from 'react';
// import RenderCoponents from "./MainMenu/RenderComponents"
// vse to chto nize = poluechaem iz app.js v vide propsov
export const MainMenu = ({ handleChange }) => {

    

return (

    <div className="header">
        <div className="top">
            <div className="modal"> <h1>Welcome </h1>
            </div>
            <h1 className="task-box">Choose a level</h1>
            {/*handleChange eto analogija AddEventListener,*/}
            {/*tolko mozno takze peredavat dannie ot rebenka k roditelju cherez  object event (e)*/}
            <div className="answer-box">
            <button onClick={handleChange} value = {'Begginer'} > Beginner</button>
            <button onClick={handleChange} value = {'Middle'}> Middle</button>
            <button onClick={handleChange} value = {'Master'}> Master</button>
            <button onClick={handleChange} value = {'Hardcore'}> GrandMaster</button>


            </div>
        </div>
        </div>
  
);

};

