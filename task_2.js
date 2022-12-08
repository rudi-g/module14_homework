// parsing and converting JSON into js object

const jsonStr = `
   {
    "list": [
        {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
        },
        {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
        }
    ]
   }
`;

const data = JSON.parse(jsonStr);
const list = data.list;
const result = {list: []};

for (let person of list) {
    result.list.push({
        name: person.name,
        age: Number(person.age),
        prof: person.prof,
    })
}

console.log(result);
