class Programmer {
    constructor(domElement) {
      // assign this.domElement to the passed in domElement
      this.domElement = domElement;
      // create a reference to the ".expandButton" class. 
        this.expandButton = this.domElement.querySelector('.programmer');
      // Set a click handler on the expandButton reference, calling the expandArticle method.
      this.expandButton.addEventListener('click', () => this.expandArticle());
    }


    expandArticle() {
      // Using our reference to the domElement, toggle a class to expand or hide the article.
      this.domElement.classList.toggle('programmer-open');
    }
  }

const toggleMenu = (element) => {

    element.classList.toggle('nav--open');
    
}
const menu = document.querySelector('.nav-container');
const menuButton = document.querySelector('.nav-button');
menuButton.addEventListener('click', () => {
  
    toggleMenu(menu);
    
  })
  /* START HERE: 
  
  - Select all classes named ".article" and assign that value to the articles variable.  
  
  - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.
  
  */
  
  let programmers = document.querySelectorAll('.card');
  programmers.forEach((programmer) => { return new Programmer(programmer) });