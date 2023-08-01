const { uniqueKey } = require('../src/libs/objects-array')

test("La funcion no explota", () =>{
    uniqueKey([])
})

test("Si recibe un array vacio, devuelve un array vacio", () =>{
    const resultado = uniqueKey([])
    expect(resultado).toEqual([])
})

test("Si recibe un array con un objeto vacio, devuelve un array vacio", () =>{
    const resultado = uniqueKey([{}])
    expect(resultado).toEqual([])
})

test("Si recibe un array con un objeto de una clave, devuelve esa clave", () =>{
    const array=[{name:"santi"}]
    const resultado = uniqueKey(array)
    expect(resultado).toEqual(["name"])
})

test("Si recibe un array con un objeto con 3 claves, devuelve las claves", () =>{
    const array=[{name:"santi", surname: "barre", age: 18}]
    const resultado = uniqueKey(array)
    expect(resultado).toEqual(["name", "surname", "age"])
})

test("Si recibe un array con dos objetos de una clave diferente, devuelve las claves", () =>{
    const array=[{name:"santi"},{surname:"barre"}]
    const resultado = uniqueKey(array)
    expect(resultado).toEqual(["name", "surname"])
})

test("Si recibe un array con dos objetos con la misma clave, devuelve una sola clave", () =>{
    const array=[{name:"santi"},{name:"pedro"}]
    const resultado = uniqueKey(array)
    expect(resultado).toEqual(["name"])
})

test("Si recibe un array con muchos objetos con claves diferentes e iguales, devuelve las claves unicas", () =>{
    const array=[{name:"santi"},
    {name:"pedro", food:"pizza", sport: "soccer"},
    {sport:"soccer", city: "Bogota", surname:"barre"}]
    const resultado = uniqueKey(array)
    expect(resultado).toEqual(["name", "food", "sport", "city", "surname"])
})