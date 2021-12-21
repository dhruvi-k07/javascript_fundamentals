var obj = { name: 'JJ', job: 'Programmer', age: 22};
var renameKey = { name: 'firstName', job: 'Role' };
console.log("hi")
for(var key in renameKey){
    if(obj[key]){
        obj[renameKey[key]] = obj[key];
        delete obj[key];
    }
}

console.log(obj);