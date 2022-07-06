function checker(dog_name, string){
    let lowerT = string.toLowerCase();
    let lowerD = dog_name.toLowerCase();
    return (lowerT.split(" ").includes(lowerD) == true) ? "Matched Dog Name" : "No Match"
}


console.log(checker("og","My name is Dog"))


// #2

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1, 'even index')
        }
    }
    return arr
}

console.log(replaceEvens    (['hi','e','r','o']))