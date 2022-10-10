// let and const
//     let color = "Red";
//     console.log(color);

// Normal fns
//     function myFun(color){
//         console.log(color)
//     }

// arrow fns
//     const myFun=(color)=>{
//         console.log(color)
//     }
//     myFun("red")

// return fns
//     const square=num=>
//         num*num
//     console.log(square(5))

// spread and rest operators(...)
//     spread --> arrow elements
//         const array=[1,2,3]
//         const newArray=[...array,4,5]
//         console.log(newArray)

//     spread --> object properties
//         const employee={
//             name:'Sathiya'
//         }
//         const NewEmp={
//             ...employee,
//             ID:'INC48'
//         }
//         console.log(NewEmp)

//     Rest
//         function sortarray(...args){
//             console.log(args.sort())
//         }
//         sortarray(3,1,6)
    
// Reference(arrays,objects) and primitive(string,boolean)
// reference
// const emp={
//     name:'Aditi'
// }
// const newEmp = emp;
// newEmp.name="Sathiya"
// console.log(emp)
// console.log(newEmp)

// const emp={
//     name:'Aditi'
// }
// const newEmp = {...emp};
// newEmp.name="Sathiya"
// console.log(emp)
// console.log(newEmp)

// Map function
// const num=[1,2,3]
// const doublenum=num.map(ele=>ele*2)
// console.log(doublenum)