//PrimeNumber

function PrimeNumber(target){
    for(let i = 1; i<= target; i++){
        let divisions = 0;
        for(let j = 1; j<=i ; j++){
            if(i % j === 0){
                divisions +=1;
            }
        }
        if(divisions <= 2){
            console.log("isPrimeNumber2 : ", i);
        }
    }
}
PrimeNumber(10)
