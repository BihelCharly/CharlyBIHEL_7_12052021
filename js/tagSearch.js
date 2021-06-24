// TABLEAU DUPLIQUé ET UTILISé POUR ENCHAINER LES RECHERCHES A CHAQUE CLICK
let duplicatedArray = [];
// VARIABLE UTILISéE SI AUCUN ELEMENT N'EST TROUVé
let status = true;

// DEFINIT DANS QUEL TABLEAU FAIRE LA RECHERCHE PUIS APPEL LA FONCTION DE FILTRE
function searchWithTags(status, value, where) {
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
        duplicatedArray = filterArrayWithTags(arrayToWorkWith, value, where);
        if (duplicatedArray.length === 0) {
            showError();
        } else {
            status = true;
            cleanAllDropDown();
            arrayIngredients = [];
            arrayDevices = [];
            arrayUtensils = [];
            duplicatedArray.forEach(function(object) {
                displayRecipes(object);
            });
            treatmentsForElementsInDropDown();
        }
    }
}

// FONCTION DE FILTRE QUI RETOURNE LES OBJETS CORRESPONDANT A LA VALEUR ENVOYé PAR LE LISTENER
function filterArrayWithTags(array, value, parentClassName) {
    let test;
    let valueToLowerCase = value.toLowerCase();
    let firstLetterToCap = firstCharCap(valueToLowerCase);
    let filter = array.filter(function(object) {
        switch (parentClassName) {
            case 'ingredients__list list':
                test = object.ingredients.filter(function(element) {
                    let results = testsValue(element.ingredient, valueToLowerCase, firstLetterToCap);
                    return results;
                });
                break;
            case 'utensils__list list':
                test = object.ustensils.filter(function(element) {
                    let results = testsValue(element, valueToLowerCase, firstLetterToCap);
                    return results;
                });
                break;
            case 'devices__list list':
                test = testsValue(object.appliance, valueToLowerCase, firstLetterToCap);
                return test;
        }
        if (test.length > 0) {
            return object;
        }
    });
    return filter;
}