import { getTurtles } from "./database.js";


export const TurtleList = () => {
        
    const allTurtles = getTurtles()
    
    let turtleHtmlString = ""
    
    
    for( let singleTurtleObject of allTurtles){
        turtleHtmlString += `<div class="card">
        <ul>
            <li>${singleTurtleObject.cardTitle}</li>
            <li>${singleTurtleObject.text}</li>
            <li>${singleTurtleObject.quote}</li>
        </ul>
        
        <img class="turtle_img" src=${singleTurtleObject.image} alt="Ninja Turtles">
    </div>`
    }


    return turtleHtmlString

}