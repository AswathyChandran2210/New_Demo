let cars=["alto","dzire","esspresso"]
console.log(typeof cars)
console.log(cars)


console.log("Hello-----")

console.log("-------------------------")

//function calling another function
let SumResult =(a,b) =>{
    console.log("The Result is");
    console.log("-------------------");
    let s=a+b;
    return s
}

//let final=SumResult(10,20)
//console.log(final)
function Display_Result()
{
   
    //showing the type of Display_Result
    console.log("The type of Display_Result is......",typeof Display_Result)
    //Calling the second function


}
Display_Result();
Display_Result=SumResult(10,20);
console.log("The answer is----",Display_Result)
let firstage=11
let secondage=12
console.log("----------------Age---------------")
if (firstage<18 && secondage<18)
{
    console.log("Non eligible for applying the licence")
    console.log(firstage)
    console.log(secondage)
}
else if(firstage>18 && secondage>18)
{
    console.log("Eligible for applying the lisence")
    console.log(firstage)
    console.log(secondage)
}
else
{
    console.log("Eligiblefor apllying licence since age is 18")
}
