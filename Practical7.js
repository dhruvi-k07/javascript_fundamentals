function checkRegex(str){
    var regex1 = new RegExp(/^(y|yes)$/i)
    var regex2 = new RegExp(/^(n|no)$/i)
    var result = null;
    if(str.startsWith('y'||'Y')){
        result = str.match(regex1);
        if(result){
            return true;
        }
    }
    else if(str.startsWith('n' || 'N')){
        result = str.match(regex2);
        if(result){
            return false;
        }
    }
    else{
        return 0;
    }
}

console.log(checkRegex('y'));
console.log(checkRegex('no'));