var obj1 = { hair: 'long', beard: true };
var obj2 = { hair: 'long', beard: true };

function compare(a1,a2){
    const key1 = Object.keys(a1);
    const key2 = Object.keys(a2);
    if(key1.length !== key2.length){
        return false;
    }
    for(let key of key1){
        if(a1[key] !== a2[key]) {return false};
    }
    return true;
}

var result = compare(obj1,obj2);
console.log(result);
