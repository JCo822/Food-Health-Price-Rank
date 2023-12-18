/*This file connexcts to the FoodData DB to collect food and nutrient data 
to rank.*/
async function getData() {
    const response = await fetch('https://api.nal.usda.gov/fdc/v1/foods/list?api_key=Gc65U58qrQeHMFVvgFLdzAcTK7pNtr3eNOOhmzok');
    const data = await response.json();
    data = JSON.parse(this.response).forEach(food => console.log(food.fdcId));
}
console.log(getData);

