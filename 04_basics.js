// let myDate=new Date();
// console.log(myDate.toDateString())
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// const Timespatmp=Date.now();

// myDate.toLocaleDateString('default',{
//     weekday:"long"
// })
// console.log(myDate)
// console.log(Timespatmp)


// const Arr=[1,2,3,4,5];
// // const Arr1=[7,6,8,9,[1,2,3,4]];
// // const newArr=Arr1.flat(Infinity);
// // const arr2=[...Arr,...newArr]
// // console.log(arr2)
// console.log(Object.entries({name:"Bhaskar",age:21}))
// let score1=100
// let score2=100
// let score3=100

// console.log(Array.of(score1,score2,score3))

const mySum=Symbol("key")

const jsUser={
    name:"Bhaskar Negi",
    age:21,
    [mySum]:"myKey"

}
jsUser.greetings=function(){
    console.log("Hi ,Greeting to you")
}
jsUser.greetings1=function(){
    console.log(`Hi, ${jsUser.name} How are you`)
}
console.log(jsUser.greetings())
console.log(jsUser.greetings1())
