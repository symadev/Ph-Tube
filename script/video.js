console.log('video script added');

function getTimestring( time){
  //get hour and rest second
  const hour = parseInt(time / 3600);
  let remainingSecond= time % 3600;
  const minute = parseInt(remainingSecond /60);
  remainingSecond=  parseInt(remainingSecond/60);
  return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}

const removeActiveClass= () => {
const buttons = document.getElementsByClassName(" category-btn")
console.log(buttons);
for(let btn of buttons){
btn.classList.remove("active")
}
}
//1-- fetch, load and show categories on html
//create loadCategories

const loadCategories =() =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
      .then(res => res.json())
      .then(data => displayCategories(data.categories))
      .catch((error) => console.log(error));
};
const loadVideos =() =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
      .then(res => res.json())
      .then(data =>displayVideos(data.videos))
      .catch((error) => console.log(error));
};


const loadCategoryVideos=(id)=>{
  // alert (id);
//fetch
fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
      .then(res => res.json())
      .then(data =>{
        //shobaik active call remove koro
removeActiveClass();
        //id ar class k active koro
        const activeBtn= document.getElementById(`btn-${id}`);
        activeBtn.classList.add("active");
        displayVideos(data.category)
      })
      .catch((error) => console.log(error));

};

const cardDemo = {
    "category_id": "1003",
    "video_id": "aaac",
    "thumbnail": "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
    "title": "Laugh at My Pain",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
            "profile_name": "Kevin Hart",
            "verified": false
        }
    ],
    "others": {
        "views": "1.1K",
        "posted_date": "13885"
    },
    "description": "Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more."
}
const displayVideos = (videos) =>{

    const videoContainer = document.getElementById("videos");
    videoContainer.innerHTML="";

if(videos.length == 0){
  videoContainer.classList.remove("grid");
  videoContainer.innerHTML= `
  <div class="min-h-[300px]  w-full flex flex-col gap-5 justify-center items-center">
  <img src="design/Icon.png" />
  <h2 class="text-white font-bold"> Opps! sorry, There is no content here </h2>
  </div>
  
  `; 
  return;
}
else{
  videoContainer.classList.add("grid");
}



    videos.forEach((video) => {
    console.log(video);

    const card = document.createElement ("div");
    card.classList = "card card-compact ";
      card.innerHTML = 
      `
      <figure class=" h-[200px]  relative">
    <img
      src=${video.thumbnail}
      class="w-full h-full object-cover"
      alt="Shoes"  />
      ${video.others.posted_date ?.length == 0? "" : `<span class="absolute text-xs right-2 bottom-2 rounded bg-black text-white p-1">${getTimestring(video.others.posted_date)}</span>`}
      
  </figure>
  <div class="card-body px-0 py-2 flex gap-2">
    <div>
    <img  class="w-10 h-10 rounded-full object-cover " src=${video.authors[0].profile_picture}
     alt="card-body"  />
    </div>
  <div>
  <h2 class="font-bold">${video.title}</h2>
  <div class="flex items-center gap-2">
  <p class="text-gray-400">${video.authors[0].profile_name}</p>

  ${video.authors[0].verified=== true  ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>`: ""}
  
  </div>
  <p></p>
  </div>
  </div>
      
      `;
      videoContainer.append(card);

});

};


//create displaycategiries
const displayCategories = (categories) =>{

    const categoryContainer = document.getElementById("categories");
    categories.forEach((item) => {
      console.log(item);
      //create a button
      const buttonContainer = document.createElement ("div");
     
      buttonContainer.innerHTML = `
      <button id="btn-${item.category_id}" onclick= "loadCategoryVideos( ${item.category_id})" class="btn category-btn">
      ${item.category}
      </button>
      
      `;

      //add botton to category container
      categoryContainer.append(buttonContainer);

      
    });
    
};


loadCategories ();
loadVideos();


