/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
let page = document.querySelector('.page');
let student = document.getElementsByClassName("student-item cf");
let pplPerPage = 10;
const studentList = document.querySelector(".student-list");
const totalPages = Math.ceil(student.length / pplPerPage);
//console.log(totalPages);
const div = document.createElement('div');
const ul = document.createElement('ul');




// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

function showPage (student, page) {
  for (let i = 0; i < student.length; i+=1) {
    if (i < (pplPerPage * page) && i >= ((pplPerPage * page) - pplPerPage)) {
      student[i].style.display = '';
    } else {
      student[i].style.display = 'none';
    }
  }
};
showPage(student, 1) ;



// Create and append the pagination links - Creating a function that can do this is a good approach
const appendPageLinks = (student) => {
  div.className = 'pagination';
  page.appendChild(div);
  div.append(ul);
  for ( let i = 0 ; i<totalPages; i+=1) {
    let buttonLi = document.createElement('li');
    let buttonA = document.createElement('a');
  ul.append(buttonLi);
    buttonA.href = '#';
    buttonA.textContent = i+1;
    buttonLi.appendChild(buttonA);
    
  // Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
buttonA.addEventListener('click', (e) => {
  let link = document.querySelectorAll('a');
  link.className='link';
  not = event.target.textContent;
  showPage(student,not);
  for (let i = 0 ; i<link.length ; i+=1) {
     }
   })
 }
}



  
    appendPageLinks(student);
  
  




