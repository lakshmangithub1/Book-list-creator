// creating book constructor  

function Book(title, author, serialnumber) { 
    this.title = title; 
    this.author = author; 
    this.serialnumber = serialnumber;

} 

// ui constructor 
function UI() {} 
UI.prototype.addlists = function(newBook) {
    let body = document.getElementById("listBooks") 
    let tr = document.createElement('tr'); 
    tr.innerHTML = `
    <td>${newBook.title}</td>
    <td>${newBook.author}</td>
    <td>${newBook.serialnumber}</td> 
    <td><a href ="#" class="delete">X</a></td>
    `; 
    body.appendChild(tr);
} 
UI.prototype.clearinputs = function() {
    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("snumber").value="";
} 

UI.prototype.deleteItem = function(target) {
    if (target.className === 'delete') { 
        target.parentElement.parentElement.remove();

    }
}


// getting elements 

document.getElementById("form").addEventListener("submit", function(e) { 
    
    const title = document.getElementById("title").value,
          author = document.getElementById("author").value,
          serialnumber = document.getElementById("snumber").value 


    let newBook = new Book(title, author, serialnumber); 
    

    let ui = new UI(); 
    if (title ==='' || author==='' || serialnumber==="") {
        alert("please fill the details")
    }
    else {
        ui.addlists(newBook); 
        ui.clearinputs();
    }

    
    
    e.preventDefault();
}); 

//delete item  

document.getElementById("listBooks").addEventListener("click", function(e) {
    
    const ui = new UI(); 
    ui.deleteItem(e.target);
    e.preventDefault();
})