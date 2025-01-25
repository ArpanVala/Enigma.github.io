let movieInput=document.getElementById("movieInput");
let btn=document.getElementById("btn");
let top1=document.getElementById("top");




function findMovie(){
    let movieName=movieInput.value;
    let url=`https://www.omdbapi.com/?t=${movieName}&apikey=4fbe5bae`;
    if (movieName.length<=0){
        alert("Please enter movie name");
    } 
    else{
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data);

            if (data.Response == 'True')
            {
            top1.innerHTML=` 
            <!--poster-->
            <div class="poster">
            <img src="${data.Poster}" alt="movie Poster">
            </div>
            
            <div class="content">
                    <!-- movie information -->
                    <h1 id="title">${data.Title}</h1>
                    <ul>
                        <li>${data.Year}</li>
                        <li>${data.Runtime}</li>
                        <li id="star"><img src="img/star.png" alt="star" width="30px">${data.imdbRating}</li>
                    </ul>
                    <h4>Genre : <span>${data.Genre}</span></h4>
                    <h4>Director : <span>${data.Director}</span></h4>
                    <h4>Writer : <span>${data.Writer}</span></h4>
                    <h2>Plot : <span>${data.Plot}</span></h2>
                    <h2>Cast : <span>${data.Actors}</span></h2>
                </div>
            `;
            }
            else{
                top1.innerHTML=`<div id="nodata"><h3> ${data.Error}</h3></div>`;
            }
        });

        
    }
}

btn.addEventListener("click",findMovie);

movieInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
    }
});

window.addEventListener("load", function() {
    movieInput.focus();
});

// window.addEventListener("load",findMovie);
