var arr = [-4, 3, -9, 0, 4, 1];
let posNum = []
let negNum = []
let zero = []
for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
        negNum.push(arr[i])
    } else if (arr[i] > 0){
        posNum.push(arr[i])
    } else {
        zero.push(arr[i])
    }
}
let positives = posNum.length / arr.length
positives = positives.toFixed(6)
let negatives = negNum.length / arr.length
negatives = negatives.toFixed(6)
let zeroNumbers = zero.length / arr.length
zeroNumbers = zeroNumbers.toFixed(6)

console.log(positives)
console.log(negatives)
console.log(zeroNumbers)