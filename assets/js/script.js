// !  --------------------task 1-------------------

// let n=+prompt("1-ci ededi daxil et");
// let m=+prompt("2-ci ededi daxil et");
// let count=0;
// for (let i = n; i<= m; i++) {
// if (i%2!=0) {
//     count++
// }
// }
// console.log(count);

// !  --------------------task 2-------------------

// let n=+prompt("ededi daxil et");
// if (n==1 || n==0) {
//     console.log("daxil etdiyiniz eded sade ve murekkeb eded deyil");
// }
// else if (n%2==0&&n!=2||n%3==0&&n!=3||n%5==0&&n!=5) {
//     console.log("daxil etdiyiniz eded murekkeb ededdir");
//  }
//  else{
//     console.log("daxil etdiyiniz eded sade ededdir");
//  }


// !  --------------------task 3-------------------

// let n=+prompt("ededi daxil et");
// let testnum=1;
// let result=false;
// let count=0;
// do {
//     if (testnum==n) {
//         result=true;
//         console.log(`Daxil etdiyiniz ${n} ededi 2 ustu ${count} quvvetindedir`);
//         break;
//     }
//     else{
//         testnum*=2;
//         count++;
//     }
// } while (testnum<=n);
// if (!result) {
//   console.log(`Daxil etdiyiniz ${n} ededi 2-nin quvveti deyil`);
// }

// !  --------------------task 4-------------------

// let n=+prompt("ededi daxil et");
// let count=1;

// while (n>=10) {
//     n=n/10;
//     count++;
// }
// console.log(`daxil edilen eded ${count} mertebelidir`);

// !  --------------------task 5-------------------

// let sum=0;
// let numbers=[2,4,6,8,7,11];
// numbers.forEach(element => {
//     sum+=element;
// });
// console.log(sum);

// !  --------------------task 6-------------------

// let result=0;
// let num=-1;
// let index=0;
// let numbers=[2,11,5,7,8,15];
// numbers.forEach(element => {
//     num++;
//     if (element>result) {
//         result=element;
//         index=num;
//     }
// });
// console.log(`en boyuk eded ${index}-ci indexde olan ${result} ededidir`);

// !  --------------------task 7-------------------

// let numbers=[2,11,5,7,8,15];
// let sum=numbers[0]+numbers[numbers.length-1];
// console.log(sum);

// !  --------------------task 8-------------------

// let n=+prompt("ededi daxil et");
// if (n==0) {
//     console.log("0 'tek ve ya cem eded deyil");
// }
// else if (n%2==0) {
//     console.log(`${n} cut ededdir`);
// }
// else {
// console.log(`${n} tek ededdir`);
// }

// !  --------------------task 9-------------------

// let n=+prompt("ededi daxil et");
// if (n%21==0) {
//     console.log("daxil etdiyiniz eded 3 ve 7 ye bolunur");
// }
// else{
//     console.log("daxil etdiyiniz eded 3 ve 7 ye bolunmur");
// }

// !  --------------------task 10-------------------

// let n=+prompt("ededi daxil et");
// let m=+prompt("ededi daxil et");
// if (n%2==0&&m%2==0&&n!=0&&m!=0) {
//     console.log(n+m);
// }
// else{
//     console.log("daxil etdiyiniz ededlerden biri ve ya her ikisi cut eded deyil");
// }

// !  --------------------task 11-------------------

// let n=+prompt("ededi daxil et");
// let m=+prompt("ededi daxil et");
// let count=0;
// if (n<m) {
//     for (let i = n; i <=m; i++) {
//               if (i%2==1) {
//                 count++;
//               }
//     }
//     console.log(`tek ededlerin sayi ${count}`);
// }
// else{
//     console.log("duzgun eded daxil edin");
// }

// ! --------------------task 12-------------------

// let n=+prompt("ededi daxil et");
// let m=+prompt("ededi daxil et");
// let sum=0;
// if (n<m) {
//     for (let i = n; i <=m; i++) {
//               if (i%2==1) {
//                sum+=i;
//               }
//     }
//     console.log(`tek ededlerin cemi ${sum}`);
// }
// else{
//     console.log("duzgun eded daxil edin");
// }

// ! --------------------task 13-------------------

//  let m=+prompt("ededi daxil et");
//  let result=1;
//  for (let i = 1; i <m; i++) {
//   if (i%2==0) {
//     result*=i;
//   }
//  }
//  console.log(result);

// ! --------------------task 13-------------------

//  let m=+prompt("tempraturu daxil edin daxil et");
//  if (m<15 && m>0) {
//     console.log("hava soyuqdur");
//  }
//  else if (m<0) {
//     console.log("hava cox soyuqdur");
//  }
//  else{
//     console.log("hava istidir");
//  }

// ! -------------------- lab task-------------------

//  let word1=prompt("sozu daxil edin daxil edin");
//  let word2=prompt("sozu daxil edin daxil edin");
//  if (word1.length==word2.length) {
//     if (word1.split("").sort().join("")==word2.split("").sort().join("")) {
//         console.log("Anaqramdir");
//     }
//     else{
//         console.log("Anaqram deyil");
//     }
//  }
//  else{
//     console.log("Anaqram deyil");
//  }

//---------------------------------------------------------------------

// let word1=prompt("sozu daxil edin daxil edin");
// let word2=prompt("sozu daxil edin daxil edin");

// word1=word1.split("").reverse().join("");
// if (word1==word2) {
//     console.log("duzdur");
// }
// else{
//     console.log("duz deyil");
// }


let sentence=prompt("cumle daxil edin");

let arraywords=sentence.split(" ");

for (let i = 0; i < arraywords.length; i++) {
    let word=arraywords[i].split("").sort().join("");
    for (let j=i; j < arraywords.length; j++) {
        if ( arraywords[j].split("").sort().join("")==word && i!=j) {
        console.log("anaqram olan sozler: " +arraywords[i] +" ve "+arraywords[j]);
        
        }
    }
}




