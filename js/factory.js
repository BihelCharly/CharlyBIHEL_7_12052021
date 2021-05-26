function Factory() {

    this.createCard = function(object) {

        // INIATE NEW OBJECT
        let newCard;
        const newRecipe = function() {};
        newCard = new newRecipe();

        // CONTAINER
        newCard.container = (() => {
            let element = document.createElement('article');
            element.className = 'card';
            return element;
        })();
        // IMG
        newCard.image = (() => {
            let element = document.createElement('div');
            element.className = 'card__img';
            return element;
        })();
        // DESCRIPTION
        newCard.description = (() => {
            let element = document.createElement('div');
            element.className = 'card__description';
            return element;
        })();
        // INGREDIENT CONTAINER
        newCard.ingredientsContainer = ((title, ingredients) => {
            let element = document.createElement('div');
            element.className = 'ingredients';
            element.insertAdjacentHTML("beforeend", '<p>' + title + '</p>');
            ingredients.forEach(item => {
                element.insertAdjacentHTML("beforeend", '<p>' + item.ingredient + ': ' + item.quantity + '</p>');
            });
            return element;
        })(object.name, object.ingredients);
        // RECIPE PART / HOW TO PART
        newCard.howTo = ((recipe, time) => {
            let element = document.createElement('div');
            element.className = 'howto';
            element.insertAdjacentHTML("beforeend", '<p><i class="far fa-clock"></i>' + time + ' min</p>');
            element.insertAdjacentHTML("beforeend", '<p>' + recipe + '</p>');
            return element;
        })(object.description, object.time);

        // APPEND ELEMENT TROUGHT THE DOM
        newCard.container.append(newCard.image);
        newCard.container.append(newCard.description);
        newCard.description.append(newCard.ingredientsContainer);
        newCard.description.append(newCard.howTo);
        sectionRecipes.appendChild(newCard.container);

        // RETURN OBJECT
        return newCard;
    };
}