const fs = require('fs');
const [n,input] = fs.readFileSync('example.txt').toString().trim().split("\n");


const inputArr = input.split(" ");


let stack=[];
let answer =[];

for(let i=0;i<n;i++){
    const currentTower ={
        index : i+1,
        height : Number(inputArr[i])
    };

    if(!stack.length){
        stack.push(currentTower);
        answer.push(0);
        continue;
    }

    if(stack[stack.length-1].height<currentTower.height){
        while(stack.length){
            if(stack[stack.length-1].height>=currentTower.height){
                break;
            }
            else
            {
                stack.pop();
            }
        }

        answer.push(!stack.length ?0 : stack[stack.length-1].index);
        stack.push(currentTower);
    }else{
        answer.push(!stack.length ?0 : stack[stack.length-1].index);
        stack.push(currentTower);
    }
}
console.log(answer.join(" "));