/*
[
    {name: "santi", surname: "barre"},
    {food: "pizza", surname: "lopez"}
]

salida: [name, surname, food]
*/

//Dado un array de objetos, debo de encontrar sus claves unicas

//const array= [{name:"santi", surname: "barre", age: 18}]
const uniqueKey = (array) =>{
    const arrayOfKeys = array.map((element) => Object.keys(element))
    const uniqueKeys = [].concat(...arrayOfKeys)
    const uniqueKeysSet = new Set (uniqueKeys)
    return Array.from(uniqueKeysSet)
};

module.exports= {uniqueKey}