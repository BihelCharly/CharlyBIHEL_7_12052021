// TABLEAU DUPLIQUé ET UTILISé POUR ENCHAINER LES RECHERCHES A CHAQUE CLICK
let duplicatedArray = [];
// VARIABLE UTILISéE SI AUCUN ELEMENT N'EST TROUVé
let status = true;

// DEFINIT DANS QUEL TABLEAU FAIRE LA RECHERCHE PUIS APPEL LA FONCTION DE FILTRE
function searchWithTags(status, value) {
    cleanBothDiv();
    if (status === false) {
        showError();
    } else if (status === true) {
        let arrayToWorkWith = [];
        if (duplicatedArray.length === 0) {
            arrayToWorkWith = recipes;
        } else {
            arrayToWorkWith = duplicatedArray;
        }
        duplicatedArray = filterArrayWithTags(arrayToWorkWith, value);
        if (duplicatedArray.length === 0) {
            showError();
        } else {
            status = true;
            duplicatedArray.forEach(function(object) {
                displayRecipes(object);
            });
        }
    }
}

// FONCTION DE FILTRE QUI RETOURNE LES OBJETS CORRESPONDANT A LA VALEUR ENVOYé PAR LE LISTENER
function filterArrayWithTags(array, value) {
    let temporaryArray = [];
    array.filter(function(object) {
        object.ingredients.filter(function(element) {
            let testIngredient = element.ingredient.includes(value);
            if (testIngredient) {
                temporaryArray.push(object);
            }
        });
    });
    return temporaryArray;
}