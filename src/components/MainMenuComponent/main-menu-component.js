import React from "react";
// import logo from '../images/h3waiting.gif.mp4
export const MainMenuComponent = ({handleChange, levelsList}) => {
    // handleChange - eto event kotoroe javlaetsa callback funkciej i kotoraja mozet peredavat evenet ot rebenka k roditelju
    // v nawem sluchae on peredaet event v App js
    return (
        <div className="header">
            <div className="top">
                <div className="modal"><h1>Welcome to Quiz of Heroes 3 + HotA</h1>
                </div>
                <h1 className="task-box">Choose Your level!</h1>
                <div className="button-box">
                    {/*levelsList - massiv knopok(urovnej) kotorie teper zapisanni v odnu peremennuju. */}
                    {/*Posle mi vizivaem ih po indexu, izhodja iz togo chto viberet user*/}
                    {levelsList.map((item, index) => (
                        <button className="button1" key={item} onClick={() => handleChange(item, index)} value={item}><h2 className="btnText"> {item.toUpperCase()}</h2> </button>
                    ))}
                    <div className="tenor-gif-embed" data-postid="13410506" data-share-method="host" data-aspect-ratio="1.25" data-width="100%">
                        <a href="https://tenor.com/view/heroes3sunrise-heroes3-heroes-iii-sunrise-sunrise-might-and-magic-gif-13410506">
                        </a> <a href="https://tenor.com/search/heroes3sunrise-gifs">
                    </a> <script>type="text/javascript" async src="https://tenor.com/embed.js"</script>
                    </div>
                </div>
            </div>
        </div>
    )
}
