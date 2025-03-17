//my ramens image with ramen details in the object 
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];
//  creating a function to display the ramen in the ramen image array and places it at the place for food div space
function displayRamens(){
    const ramenMenu = document.getElementById('placeForFood');
    ramens.forEach(ramen =>{
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.dataset.id = ramen.id;
        img.addEventListener('click',clickCaller);
        ramenMenu.appendChild(img);
        });
}
// creating the callback function to handle the click
function clickCaller(e){
    const ramenId = e.target.dataset.id;
    const ramen = ramens.find(range => range.id == ramenId);

    // place to show the image when a ramen is clicked updating the ramen image 
    const selectedImage= document.getElementById('selected-ramen-image');
    selectedImage.src = ramen.image;
    selectedImage.alt = ramen.name;
    selectedImage.style.display = 'block';

    //fetching the data of the ramen details
    document.getElementById('ramen-name').textContent=ramen.name;
    document.getElementById('ramen-restaurant').textContent = ramen.restaurant;
    document.getElementById('ramen-rating').textContent = ramen.rating;
    document.getElementById('ramen-comment').textContent = ramen.comment;
 }
 //function for the form and pushing the new ramen to the ramen array
function mySubmission(){
    const form = document.getElementById("new-ramen");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const newRamen = {
            id: ramens.length + 1,
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: Number(form.rating.value),
            comment: form.comment.value
        };
        ramens.push(newRamen);
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.dataset.id = newRamen.id;
        img.addEventListener('click', clickCaller);
        document.getElementById('placeForFood').appendChild(img);
        form.reset();
    
    });
}
function main(){
        displayRamens();
        mySubmission();
}
document.addEventListener('DOMContentLoaded',main)