const fs = require('fs');
const [nk,inputArr] = fs.readFileSync('example.txt').toString().trim().split('\n').map(v=>v.split(' ').map(Number));

const [n,k] = nk


let sum=0;
const answer=[];
for(let i=0;i<k;i++){
    sum+=inputArr[i];
}
answer.push(sum);

for(let i=k;i<n;i++){
    sum = sum - inputArr[i-k]+inputArr[i];
    answer.push(sum);
}
console.log(Math.max(...answer));