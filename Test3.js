function longestWord(w){
    let s = '';
    for(let i = 0; i <= w.lenght; i++){
        if(w[i] > w[i + 1]){
            s = w[i];
        }else{
            s = w[i + 1];
        }
        return s;
    }
}
console.log(longestWord("school","algorithm","brain","sum"));