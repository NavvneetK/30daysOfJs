// ACTIVITY 1
// TASK1

for (let i = 1; i < =10; i++) {
    console.log(i);  //OUTPUT: 1 2 3 4 5 6 7 8 9 10
}
// TAsk2
for (let i = 1; i < =10; i++) {
    console.log(i*5); //OUTPUT: 5 10 15 20 25 30 35 40 45 50 
}

// ACTIVITY 2
// TASK3
let sum = 0;
let num=10;
while (num >= 0) {
    sum += num;
  num--;
}

console.log(`The sum is ${sum}`); 

// TAsk4
let n=10;
while(n>=0){
  console.log(n);
  n--;
}


// ACTIVITY 3
// TASK5
let i = 1;
do {
    console.log(i);
    i++;
} while (i <=5);

// TAsk6
let n=5,ans=1;
do{
  ans*=n;
  n--;
}while(n>0);

console.log(ans);

// ACTIVITY 4
// TASK7
for(let i = 1; i < =5; i++){
  for(let j=1;j<=i;j++){
    console.log("*");}
}

// ACTIVITY 5
// TASK8
for (let i = 1; i < =10; i++) {
  if(i==5) continue;
    console.log(i);  //OUTPUT: 1 2 3 4 6 7 8 9 10
}
// TAsk9
for (let i = 1; i < =10; i++) {
  if(i===7) break;
    console.log(i);  //OUTPUT: 1 2 3 4 5 6 
}

