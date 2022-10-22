
const likes = document.getElementById('likes');

likes.addEventListener("click", (ev) =>{
    likes.classList.toggle("active");



if (likes.classList.contains('active')){
    console.log("Coordinate(X) = " + event.clientX + "<br>Coordinate(Y) = " + event.clientY);
    

    confetti();
}
});

const likes1 = document.getElementById('likes1');

likes1.addEventListener("click", (ev) =>{
    likes1.classList.toggle("active");



if (likes1.classList.contains('active')){
    console.log("Coordinate(X) = " + event.clientX + "<br>Coordinate(Y) = " + event.clientY)
    const client = document.body.getBoundingClientRect();

    confetti({
       
    });
    
}
});

       
 const  load = document.getElementById('load');
 const  loads = document.getElementById( 'loads');


 load.addEventListener("click", (ev) =>{
    load.classList.toggle("active");
        
        
        
        if (load.classList.contains('active')){
            load.style.display = "none";
            loads.style.display = "none";
            document.getElementById('square').style.visibility = 'visible';
        
        
        }

        });