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
      <input type="text" onkeyup="searchItems()" id="myInput" placeholder="Search for names..">
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

  return `
   <div class="recipes">

       ${props.results.map(function(recipeitem){
         return DisplayRecipe(recipeitem)
         }).join("")
       }

   </div>
  `
}




/*Making a search function, This searches by the title of the recipe item and is update each time the user presses a key (onkeyup)*/
/* https://www.w3schools.com/howto/howto_js_filter_lists.asp */
function searchItems(){

  const myInput = document.getElementById('myInput');
  const myItem = document.getElementsByClassName('recipe-item');
  var filter = myInput.value.toUpperCase();





  for (var i = 0; i < myItem.length; i++){

      var itemName = myItem[i].getElementsByTagName('h4')[0];
      var txtContent = itemName.textContent || itemName.innerText;

  if(txtContent.toUpperCase().indexOf(filter) > -1){
      myItem[i].style.display = "";
    } else{
      myItem[i].style.display = "none";
    }
  }



}
