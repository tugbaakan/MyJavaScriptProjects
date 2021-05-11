const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
populateUI();
let ticketPrice = +movieSelect.value;

//update count and total
function updateCountTotal (){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

    // copy selected seats into arr 
    // map through array
    // return a new array indexes
    const seatsIndex = [...selectedSeats].map( seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

}

// get data from local storage and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length >0)
    {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex =localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }

    
}


// movie select event
movieSelect.addEventListener('change', e=>{
    ticketPrice = +e.target.value;
    
    updateCountTotal();

    localStorage.setItem('selectedMovieIndex', e.target.selectedIndex);
    localStorage.setItem('selectedMoviePrice', e.target.value);

});

// seat click event
container.addEventListener('click', e=>{
    if(e.target.classList.contains('seat') 
        && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');
        updateCountTotal();
    }
    
});



updateCountTotal();
