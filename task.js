// Exo 1

let compareProprty = (obj1, obj2) => {
    for (const prop in obj1)
        if (obj1[prop] !== obj2[prop])
            return false
            
    return true
}

console.log(compareProprty({
    name: "Abdelraouf",
    age: 20
},
{
    name: "Abdelraouf",
    age: 20
}))

// Exo 2

let difference = (arr1, arr2) => {
    let result = []

    for (const x of arr1)
        if (arr2.includes(x))
            result.push(x.toString())

    return result
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]))