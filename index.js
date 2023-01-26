

let outputContainer=document.getElementById('outputContainer');
let input=document.getElementById('input');
async function findMeal(){
    let myArray=[];
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);
    // console.log(api);
    const result=await api.json();
    // console.log(result);
    myArray=result.meals;
   if(input.value==""){
    outputContainer.innerHTML=""
    outputContainer.innerHTML=`
    <h2>Find your meal</h2>
    `
   }
   else{
    outputContainer.innerHTML=""

    // console.log(myArray);
    // const resultData=await result.json();
    // console.log(resultData);
    result.meals.map((ele)=>{
        // console.log(ele);

        outputContainer.innerHTML += `
        <img src=${ele.strMealThumb} alt="">
        `
    })
   }
}