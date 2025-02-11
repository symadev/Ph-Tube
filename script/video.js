console.log('video script added');
//1-- fetch, load and show categories on html


//create loadCategories

const loadCategories =() =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
      .then(res => res.json())
      .then(data => displayCategories(data.categories))
      .catch((error) => console.log(error));
};

//create displaycategiries
const displayCategories = (categories) =>{

    const categoryContainer = document.getElementById("categories");
    categories.forEach((item) => {
      console.log(item);
      //create a button
      const button = document.createElement ("button");
      button.classList= "btn";
      button.innerText = item.category;

      //add botton to category container
      categoryContainer.append(button);

      
    });
    
};


loadCategories ();


