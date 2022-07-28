const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addIngredientsForLi = ingredients.map((element )=>{
  let itemList = document.createElement("li");
  itemList.textContent = element;
  return itemList
})

const list = document.querySelector("#ingredients")
list.append(...addIngredientsForLi)

console.log(addIngredientsForLi);


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.