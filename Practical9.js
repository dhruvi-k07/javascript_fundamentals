var input = {a : 1, b: '2', c: 3};
var remove_key = ['b','f'];

for(let i=0; i<remove_key.length;i++){
    if(input[remove_key[i]]){
        delete input[remove_key[i]];
    }
}

var new_input = JSON.stringify(input)
console.log(new_input);