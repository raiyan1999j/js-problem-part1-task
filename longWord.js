function longWord(text){
    const textArr = text.toLowerCase().split(" ");
    const textArrLen = textArr.length;
    let findWord = textArr[0];

    for(let repeat=0; repeat<textArrLen;repeat++){
        if(textArr[repeat].length > findWord.length){
            findWord = textArr[repeat]
        }
    }

    return findWord;
}

console.log(longWord('I am learning Programming to become a programmer'));