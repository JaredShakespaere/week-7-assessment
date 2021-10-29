//Write a function that takes in an array of numbers. 
//The function should return True if any two numbers 
//in list sum to 0, and false otherwise.

function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        testNum = arr[i]
        for(let j = 0; j < arr.length; j++){
            otherNum = arr[j]
            
        };
        let tester = testNum + otherNum
        let trueCount = 0
        let falseCount = 0
            if(tester === 0){
                trueCount++
                console.log(trueCount + 'true')
            } else if(tester > 0){
               falseCount++
               console.log(falseCount + 'false')
            }else if(trueCount > 0){
                console.log(true)
            } else if(falseCount > 0){
                console.log(false)
            }
            
        }
        


    };

newArray = [1,-1,2,5,6,3]

sumZero(newArray)