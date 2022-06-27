let matrix = [
    [4, -2, 5],
    [1, -4, -12],
    [0, 1, -3]
]
let k=0
let i=0
let j=0
let sum=0
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix.length;j++){

        if(matrix[i][j]<0 && matrix[i][j]%2==0){
            k=k+1
            
        }
    }
   
}
console.log(k);

for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix.length;j++){

        if(matrix[i][j]<0 && matrix[i][j]%2==0){
           
            sum=sum+matrix[i][j]
        }
    }
   
}
console.log(sum);

