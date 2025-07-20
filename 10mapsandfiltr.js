const myArr=[1,2,3];
// const newArr=myArr.filter((num)=>num>4)

// const newArr=myArr.map((num)=>num*3).filter((num)=>num%2==0)
// console.log(newArr)

const newval=myArr.reduce((acc,currval)=>{
    console.log(`${acc} and ${currval}`)
    return acc+currval})
console.log(newval)