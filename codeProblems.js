

function addToZero(Arr) {
    let zeroSum = false
    for (let i = 0; i <Arr.length; i++) {
        for (let j = 0; j <Arr.length; j++){
            let ans = Arr[i] + Arr[j]
            if (ans === 0){
                return sumPos === true
            }else{
                return sumPos === false
            }
        }
    }
     console.log(sumPos)
}

newArr = [1,2,3,4]

addToZero(newArr)