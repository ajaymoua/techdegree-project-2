/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
//Global variables
const listItem = document.getElementsByClassName("student-item cf"); //retrieve list of all students 
const perPage = 10; //maximum listItem(s) display per page


//Student list page filter
function showPage (list, page) {
   const startIndex = (page* perPage) - perPage;
   const endIndex = (page * perPage) - 1;
      for(let index = 0; index < list.length; index ++){ //display 'none' of all students 
            list[index].style.display = 'none';
         if(index >= startIndex && index <= endIndex){ //display the select students per select page
            list[index].style.display = 'block';
      }
   }
}

/*Pagination links for showPage() by finding out the total amount of 'pagesNeed' then create a div, ul, li, and a
  to append them to and show the active pagination link on the bottom of the index.html page */
const appendPageLinks = (list) => {
   const pagesNeed = Math.ceil(list.length/perPage); 
   const pageDiv = document.querySelector('.page');
   const paginationDiv = document.createElement('div');
   const ul = document.createElement('ul');
   paginationDiv.className = 'pagination';
   paginationDiv.appendChild(ul);
   pageDiv.appendChild(paginationDiv);
   
   //create total pagination links it needs for list
   for(let i = 0; i < pagesNeed; i++){ 
      const li = document.createElement('li');
      const a = document.createElement('a');
      ul.appendChild(li);
      li.appendChild(a);
      a.href = '#';
      a.textContent = i+1; //display page number on pagination link, +1 because reference starts at 0
      
      
     if(a.textContent === '1'){ //setting  'active' pagination link of initial page '1'
        a.className = 'active';
        }  
      
      //event handler of mousce click on pagination links
      a.addEventListener('click', () => {
         showPage(list, i+1); //to display of page click
         const anchorClass = document.querySelectorAll('.pagination ul li a'); //location of 'a' where the class 'active' is locate
         for(let i = 0; i < anchorClass.length; i++){ 
            anchorClass[i].classList.remove('active');  //remove the previous 'active' pagination link clicked
            } 
            event.target.classList.add('active'); //setting pagination link click as 'active'  
      });          
   }

}
 
showPage(listItem, 1); //initial page '1' to display filtered list of students  
appendPageLinks(listItem);




