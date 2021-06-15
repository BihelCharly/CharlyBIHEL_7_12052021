// TO PUSH ALL INGREDIENTS/INGREDIENTS/UTENSILS FROM ALL RECIPES
//// STEP 1 - ARRAYS
let arrayIngredients = [];
let arrayDevices = [];
let arrayUtensils = [];
//// STEP 2 - FUNCTION TO GET DATAS
recipes.forEach(item => {
    // GET INGREDIENTS
    for (let i = 0; i < item.ingredients.length; i++) {
        let elements = item.ingredients[i].ingredient;
        //let elementsTreatement = elements.substr(0, elements.indexOf(' ')).replace(/\./g, "");
        arrayIngredients.push(elements);
    }
    // GET UTENSILS
    for (let i = 0; i < item.ustensils.length; i++) {
        let elements = item.ustensils[i].charAt(0).toUpperCase() + item.ustensils[i].slice(1);
        arrayUtensils.push(elements);
    }
    // GET DEVICES
    let elements = item.appliance;
    arrayDevices.push(elements);
    // TO CALL FACTORY METHOD TO CREATE ARTICLES/CARDS
    displayRecipes(item);
});
// DELETE DUPLICATED ELEMENTS INSIDE ARRAYS
arrayIngredients = [...new Set(arrayIngredients)];
arrayDevices = [...new Set(arrayDevices)];
arrayUtensils = [...new Set(arrayUtensils)];

arrayToDropDown(arrayIngredients, ingredientsList);
arrayToDropDown(arrayDevices, devicesList);
arrayToDropDown(arrayUtensils, utensilsList);