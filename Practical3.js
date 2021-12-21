function convert_String(arr){
    var titles=[];
    var titleValues = [];
    for(let i=0;i<arr.length;i++){
        for (const [key, value] of Object.entries(arr[i])) {
            titles.push(key)
            titleValues.push(value)
        }
    }
    var str_1 = titles.join(',');
    var str_2 = titleValues.join(',');
    var resultantString = str_1.concat("\\n",str_2);
    console.log(resultantString);
}
convert_String([{col1:'a', col2:'b'}]);