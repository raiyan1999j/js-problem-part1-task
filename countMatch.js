function countMatch(arr,num){
    let count = 0;

    for(let items of arr){
        if(items === num){
            count +=1
        }
    }

    return count;
}

console.log(countMatch([5,8,5,9,5,24,98],5));