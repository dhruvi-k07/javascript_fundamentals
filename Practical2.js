function convert_2DArray(str, delimiter = ','){
    const titles = str.slice(0,str.indexOf('\n')).split(delimiter);
    //console.log("Titles: " + titles);
    const titleValues = str.slice(str.indexOf('\n')+1).split('\n');
    //console.log("Title Values: " + titleValues);
    const resultantArray = titleValues.map(function(v){
        const values = v.split(delimiter);
        const storeValue = titles.reduce(function(obj,title,index){
            obj[title] = values[index];
            return obj;
        },{});
        return storeValue;
    });
    return resultantArray;
}
var ans = convert_2DArray('col1,col2\na,b\nc,d')
console.log(ans);