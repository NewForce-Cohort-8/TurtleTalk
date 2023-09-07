const database = {
    turtles: [
        {
            image: "https://i.ebayimg.com/images/g/RvQAAOSwH6tZjnK-/s-l1600.jpg",
            cardTitle: "Check out these cool dudes",
            quote: "Cowabunga" ,
            text: "I love turtles"
        },
        {
            image: "https://teeturtle-s3-web.s3.amazonaws.com/accounts/1/products/1986199883781/PXR-Fin-Noggin-Dude_4200x4200_SEPS-1000x1000.jpg",
            cardTitle: "Check out these cool dudes",
            quote: "Cowabunga" ,
            text: "I love turtles"
        },
        {
            image: "https://i.ebayimg.com/images/g/RvQAAOSwH6tZjnK-/s-l1600.jpg",
            cardTitle: "Check out these cool dudes",
            quote: "Cowabunga" ,
            text: "I love turtles"
        }
    
    ]
}

export const getTurtles = () => {
    return database.turtles.map(copyOfSingleTurtleObject => ({...copyOfSingleTurtleObject}))
}