const obj = {
    categories: document.querySelector("#categories"),
    childrenCategories: document.querySelectorAll(".item"),
}
console.log(`Number of categories:${categories.children.length}`)

obj.childrenCategories.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements:${element.lastElementChild.children.length}`)
    
});