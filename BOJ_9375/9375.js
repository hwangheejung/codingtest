const fs = require('fs');
[tc,...array] = fs.readFileSync('example.txt').toString().trim().split("\n");

let clothes=[];
let count=-1; //0��° index�� �����̹Ƿ�
for(let i=0;i<array.length;i++){
  if(isNaN(array[i]))// ���ڰ� �ƴϸ� 
  {

    clothes[count].push(array[i].split(" ")); //clothes�迭�� ������ push

  }
  else{ //���ڸ�
    clothes.push([]); //�迭�� ����ش�. 
    count ++;
  }
}
let result ="";
for(let i of clothes){
  let count =1;
  let arr =i;
  let map = new Map(); //map ����
  for(let j =0;j<arr.length;j++){
    {map.has(arr[j][1])? 
      map.set(arr[j][1],map.get(arr[j][1])+1)://value�� map�� �����ϸ�
      map.set(arr[j][1],1);
  }
}
for(let m of map.values()){
  count *=m+1; //������ ���ϴ� ����� ���� ��������ϹǷ�
}
result += (count-1)+'\n';
}
console.log(result);