const fs = require('fs');
const [nm,...arr] = fs.readFileSync("example.txt").toString().trim().split("\n"); //d�Է¹ޱ�
const [n,m] = nm.split(' ');
const pw = new Map(); //map ����

for(let i=0;i<n;i++){
 
    pw.set(arr[i].split(' ')[0],arr[i].split(' ')[1]);  
//����Ʈ �ּҴ� key�� ��й�ȣ�� value�� map �� �ֱ�
}

let result ='';

for(let i=n;i<arr.length;i++){
        result+=pw.get(arr[i])+"\n"; //map key�� �´� value �������� 
}
console.log(result);