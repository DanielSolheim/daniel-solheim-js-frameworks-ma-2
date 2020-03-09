var  api = 'https://raw.githubusercontent.com/DanielSolheim/json-filer/master/recipe.json';
var rootElem = document.getElementById('root2');


  fetch(api)
     .then(result => result.json())
     .then((res) =>{
       rootElem.innerHTML = App(res)
     })
     .catch(err => console.log(err));




function App(props){

    return `
     <header>
       <h1> Check these awesome meals </h1>
      </header>
        ${RecipeContainer(props)}
      <footer>
           <p><i> @Daniel Solheim </i></p>
      </footer>
    `
}


function DisplayRecipe(props){
  return `
    <div class="recipe-item">
       <h4 class="recipe-title"> ${props.title}</h4>
       <img class="recipe-img" src="${props.thumbnail}" alt="${props.title}"></img>
       <a class="recipe-link" href="${props.href}">See recipe! </a>
       <p class="recipe-ingredients"><b>Ingredients:</b> ${props.ingredients}</p>
    </div>

  `
}


function RecipeContainer(props){

  props.results.forEach(element =>{
   word = element.ingredients.split(",");
   console.log(word);
   console.log(word.length)
 })




  return `
   <div class="recipes">

       ${props.results.map(function(recipeitem){
         return DisplayRecipe(recipeitem)
         }).join("")
       }

   </div>
  `
}
