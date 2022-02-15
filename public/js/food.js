const { inputForm } = document.forms;
const wrapper = document.querySelector('.wrapper');
const foodname = document.getElementById('foodname');
const servingQty = document.getElementById('servingQty');
const servingWeight = document.getElementById('servingWeight');
const calories = document.getElementById('calories');
const totalFat = document.getElementById('totalFat');
const saturatedFat = document.getElementById('saturatedFat');
const cholesterol = document.getElementById('cholesterol');
const sodium = document.getElementById('sodium');
const totalCarbon = document.getElementById('totalCarbon');
const dietary = document.getElementById('dietary');
const sugar = document.getElementById('sugar');
const protein = document.getElementById('protein');
const potassium = document.getElementById('potassium');

inputForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(inputForm));

  const res = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },

    body: JSON.stringify(formData),
  });
  let dataFromBack;
  if (res.ok) {
    dataFromBack = await res.json();
    foodname.innerText = dataFromBack.food_name;
    servingQty.innerText = dataFromBack.serving_qty;
    servingWeight.innerText = dataFromBack.serving_weight_grams;
    calories.innerText = dataFromBack.nf_calories;
    totalFat.innerText = dataFromBack.nf_total_fat;
    saturatedFat.innerText = dataFromBack.nf_saturated_fat;
    cholesterol.innerText = dataFromBack.nf_cholesterol;
    sodium.innerText = dataFromBack.nf_sodium;
    totalCarbon.innerText = dataFromBack.nf_total_carbohydrate;
    dietary.innerText = dataFromBack.nf_dietary_fiber;
    sugar.innerText = dataFromBack.nf_sugars;
    protein.innerText = dataFromBack.nf_protein;
    potassium.innerText = dataFromBack.nf_potassium;
  } else {
    alert('такого продукта нет!');
  }
  const response = await fetch(`https://g.tenor.com/v1/search?q=${dataFromBack.food_name}&key=PAWYSBYXQYU0`);

  const resGif = await response.json();
  const dataFromApi = resGif.results;
  console.log();
  console.log(dataFromApi);
  wrapper.innerHTML = `
   <img src="${dataFromApi[0].media[0].gif.url}" alt="Card image cap"/>
`;
});
