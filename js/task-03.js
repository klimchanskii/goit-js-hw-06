const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// method №1

// const addImages = [...images].map(element => `<li gallery__list > <img class="gallery__img" src=${element.url} alt="${element.alt}"></li>`).join('')
// console.log(addImages)
const gallery = document.querySelector('.gallery')
// gallery.insertAdjacentHTML("afterbegin",addImages)

// gallery.children.classList.add("new_class")
// // const entreForIamges = document.querySelectorAll ("li")
// // entreForIamges.classList.add(new_class)

// method №2
const arrImages = images.map(element => {
  const addLi = document.createElement("li");
  addLi.classList.add("gallery__list")

  const addimg = document.createElement("img")
  addimg.classList.add("gallery__img")
  addimg.src = element.url
  addimg.alt = element.alt
  addLi.appendChild(addimg)
  return addLi
  
})
console.log(arrImages)
gallery.append(...arrImages)




