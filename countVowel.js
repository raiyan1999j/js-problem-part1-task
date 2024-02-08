function countVowel(text){
    const vowel = ['a','e','i','o','u'];
    const textArr = text.toLowerCase().split("");
    let count = 0;
    let arr =[];

    for(let items of textArr){
        for(let repeat of vowel){
            if(items == repeat){
                count += 1;
                arr.push(items);
            }
        }
    }

    return `number of ${count} vowels are ${arr}`;
}

console.log(countVowel('I am a hard working person'));