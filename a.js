let arr = new Array();
const newArr = (item) => 
{
    if(item.age > 28)
    {
        arr.push(item);
    }
}

const users = 
[
    {name: 'Ahmad', age: 30},
    {name: "Yasser", age: 28},
    {name: "Jarle", age: 35},
    {name: "Svein", age: 61}
]

users.forEach(newArr)
console.log(arr);
