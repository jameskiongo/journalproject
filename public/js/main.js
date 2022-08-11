// getting modal date js
let dateToday = document.getElementById("date-today");

      let today = new Date();
      let day = `${today.getDate() < 10 ? "0": ""}${today.getDate()}`;
      // month
      let month = `${(today.getMonth() + 1) < 10 ? "0": ""}${today.getMonth() + 1}`; 
      //year
      let year = today.getFullYear();

      dateToday.textContent = `${day}/${month}/${year}`;

//end modal date js

//opening modal click x and outside

//get modal element
var modal = document.getElementById('simpleModal');

//get open modal
var modalPress = document.getElementById('modalPress');

//get close button
var closeBtn = document.getElementById('closeBtn');

//listener open events
modalPress.addEventListener('click', openModal);
//close button event listener
closeBtn.addEventListener('click', closeModal);
//click outside modal listener 
window.addEventListener('click', clickOutside);

//function to open modal
function openModal(){
      modal.style.display = 'flex';
}

//close button listerner
function closeModal(){
      modal.style.display = 'none';
}
function clickOutside(e){
      if(e.target==modal){
      modal.style.display = 'none';
      }
}
//end of closing modal