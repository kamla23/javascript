function vowels(n){
    let s = '';
    let count = 0;
    for(let i = 0; i <= n; i++){
           if("a","e","i","o","u" === i){
            count = count + 1;
            s = count;
            return s;
           }
    }

}
console.log(vowels("hour", "word","english","Anger"));