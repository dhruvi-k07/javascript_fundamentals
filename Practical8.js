var input = [ { name: 'fred', age: 48 },
{ name: 'barney', age: 36 },
{ name: 'fred', age: 40 } ];
var ordered_by = ['name'];
var orders = ['asc'];

/*function sort_objArray(arr, ord_arr, type_arr){
    for(var i=0; i<ord_arr.length; i++ ){
        console.log("1");
        if(ord_arr[i] === 'name' ){
            if( type_arr[i] === 'asc' ){
                arr.sort(function(a,b){
                    if(a.name > b.name){return 1;}
                    else{ return -1; }
                });
                console.log(arr);
            }
            else {
                arr.sort(function(a,b){
                    if(a.name > b.name){return -1;}
                    else{ return 1; }
                });
            }
        }
        if(ord_arr[i] === 'age'){
            if( type_arr[i] === 'asc' ){
                arr.sort(function(a,b){
                    return a.age - b.age;
                });
            }
            else {
                arr.sort(function(a,b){
                    return b.age - a.age;
                });
                console.log(arr);
            }
        }
    }
}*/

/*function sort_arr(arr, prop1, prop2){
    var new_arr = [...arr].sort((a,b) => {
        if(a[prop1] === b[prop1]){
            if(a[prop2] === b[prop2]) return 0;
            else {
                return (a[prop2] < b[prop2]) ? -1 : 1;
            }
        }else {
            return (a[prop1] < b[prop1]) ? -1 : 1;
        }
    });
    return new_arr;
}*/

/*function sort_arr (arr, ord_arr, ord){
    var new_arr = [...arr];
    for(var i=0; i<ord_arr.length; i++ ){
        new_arr.sort((a,b) => {
            if(ord[i] === 'asc'){
                if(a[ord_arr[i]] === b[ord_arr[i]]){
                    if(ord[i+1] === 'asc'){
                        if(a[ord_arr[i+1]] === b[ord_arr[i+1]]) return 0;
                        else {
                            return (a[ord_arr[i+1]] > b[ord_arr[i+1]]) ? -1 : 1;
                        }
                    }
                    if(ord[i+1] === 'desc'){
                        if(a[ord_arr[i+1]] === b[ord_arr[i+1]]) return 0;
                        else {
                            return (a[ord_arr[i+1]] > b[ord_arr[i+1]]) ? 1 : -1;
                        }
                    }
                }
                else{
                    return (a[ord_arr[i]] > b[ord_arr[i]]) ? -1 : 1;
                }
            }
            if(ord[i] === 'desc'){
                if(a[ord_arr[i]] === b[ord_arr[i]]){
                    if(ord[i+1] === 'asc'){
                        if(a[ord_arr[i+1]] === b[ord_arr[i+1]]) return 0;
                        else {
                            return (a[ord_arr[i+1]] < b[ord_arr[i+1]]) ? -1 : 1;
                        }
                    }
                    if(ord[i+1] === 'desc'){
                        if(a[ord_arr[i+1]] === b[ord_arr[i+1]]) return 0;
                        else {
                            return (a[ord_arr[i+1]] < b[ord_arr[i+1]]) ? 1 : -1;
                        }
                    }
                }
                else{
                    return (a[ord_arr[i]] < b[ord_arr[i]]) ? 1 : -1;
                }
            }
        })
    }
    return new_arr;
}*/

function sort_arr (arr, ord_arr, ord){
    var new_arr = [...arr];
    for(var i=0; i<ord_arr.length; i++ ){
        new_arr.sort((a,b) => {
                if(a[ord_arr[i]] === b[ord_arr[i]]){
                    if(ord[i+1] === 'asc'){
                        if(a[ord_arr[i+1]] === b[ord_arr[i+1]]) return 0;
                        else {
                            return (a[ord_arr[i+1]] < b[ord_arr[i+1]]) ? -1 : 1;
                        }
                    }
                    if(ord[i+1] === 'desc'){
                        if(a[ord_arr[i+1]] === b[ord_arr[i+1]]) return 0;
                        else {
                            return (a[ord_arr[i+1]] < b[ord_arr[i+1]]) ? 1 : -1;
                        }
                    }
                }
                else{
                    return (a[ord_arr[i]] < b[ord_arr[i]]) ? -1 : 1;
                }
        });
    }
    return new_arr;
}

var abc = sort_arr(input, ordered_by , orders);
console.log(abc)