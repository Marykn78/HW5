//1
let arr=["",''];
function findTrue(array,counter=0){
    for(let x of array){
        if(x){
            counter ++;
        }
    }
    return counter;
}
console.log(findTrue(arr));

let array=[1,3,4,"m",0,'',8,[1,2,0]];
function findT(array,count=0){
    return count=array.filter(Boolean).length;
}
console.log(findT(array));

//2
obj={
    a:1,
    b:2,
    c:3,
}
function convertArray(obj,array=[]){
    for(let key in obj){
        array.push([key,obj[key]])
    }
    return(array);
}
console.log(convertArray(obj))

//3
Array1 = [1,0,2,3,4,1]
Array2 = [3,5,6,7,8] 
Array3=[];
indexArray =0;
while(indexArray<Array1.length && indexArray<Array2.length){
    Array3.push(Array1[indexArray]+Array2[indexArray]);
    indexArray ++;
}
if(indexArray < Array1.length){
    for(let x=indexArray;x<Array1.length;x++){
        Array3.push(Array1[indexArray]);
    }
console.log(Array3);
}
else{
    for(let y=indexArray;y<Array2.length;y++){
        Array3.push(Array2[indexArray]);
    }
console.log(Array3);
}
//4
let str ="Aliso";
console.log(str.substring(1,2));
result =[]
for(let x=0;x<str.length;x++){
    for(let y=x+1;y<=str.length;y++){
        result.push(str.substring(x,y));
    }
}
console.log(result);

//for(let y=0;y<str.lenght;y++){
    // console.log(str.substring(y,y+1));
// }


//5
function change(str){
    str =String(str);
    result =[str[0]];
    for(let x=0;x<str.length;x++){
        if(str[x]%2==0 && str[x+1]%2==0){
            result.push('-',str[x+1]);
        }
        else{
            result.push(str[x+1]);
        }
    }
    return result.join('');
}

console.log(change(4425468));
//6

// const nestedObject = { 
//     data: { 
//         info: { 
//             stuff: { 
//                 thing: { 
//                     moreStuff: { 
//                         magicNumber: 44, 
//                         something: 'foo2'
//                     } 
//                 } 
//             } 
//         } 
//     } 
// }
let array_1 = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];
function countInteger(obj){
    let counter = 0;
    for(let x of Object.values(obj)){
        if(typeof x =="object"){
            counter=counter+countInteger(x);
        }
        if(typeof x =="number"){
            counter++;
        }
    }
    return counter;
}
console.log(countInteger(array_1));
console.log(countInteger(nestedObject));

// for(let x=0 ; x<=Array1.length;x++){
//(3)
//     for(let y=0;y<=Array2.length;y++){
//         sum=0;
//         sum=Array1[x]+Array2[y];
//         Array3.push(sum)
//         console.log(sum)
//         break ;
//     }
// }
// console.log(Array3);




// const nestedObject = { 
//     data: { 
//         info: { 
//             stuff: { 
//                 thing: { 
//                     moreStuff: { 
//                         magicNumber: 44, 
//                         something: 'foo2'
//                     } 
//                 } 
//             } 
//         } 
//     } 
// }
let array_2 = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];
function count(array,number=[]){
    for(let key in array){
        if(typeof array[key]=== "number") number.push(array[key]);
        else if(typeof array[key]=== "object" && array[key] !== null) count(array[key],number);
    }
    return number.length;
}
console.log(count(nestedObject));

const nestedObject = { 
    data: { 
        info: { 
            stuff: { 
                thing: { 
                    moreStuff: { 
                        magicNumber: 44, 
                        something: 'foo2'
                    } 
                } 
            } 
        } 
    } 
}
function findeInt(obj,num){
    for(let x in obj){
        if(obj[x]=== num) return true;
        else if(typeof obj[x]==="object") return findeInt(obj[x],num);
    }
    return false;
}
console.log(findeInt(nestedObject,44));


// const findeInt=(obj,num)=>{
//     for(let x in obj){
//         if(obj[x]=== num) return true;
//         else if(typeof obj[x]==="object"){
//             return findeInt(obj[x],num);
//         }

//     }
//     return false;
// }
// console.log(findeInt(nestedObject,44));
