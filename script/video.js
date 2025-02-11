console.log('video script added');
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
    videos.forEach((video) => {
    console.log(video);

    const card = document.createElement ("div");
    card.classList = "card card-compact ";
      card.innerHTML = 
      `
      <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
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
      const button = document.createElement ("button");
      button.classList= "btn";
      button.innerText = item.category;

      //add botton to category container
      categoryContainer.append(button);

      
    });
    
};


loadCategories ();
loadVideos();


