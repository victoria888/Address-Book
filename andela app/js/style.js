
let  data = [];
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var numbersInput = document.getElementById("numbers");

///////////var messageBox = document.getElementById("display");
// The data is being stored in the array.
function insert() {
    var name, email, numbers;
    name = nameInput.value;
    email = emailInput.value;
    numbers = numbersInput.value;

    data.push({
        name:name,
        email:email,
        numbers:numbers

    });
    nameInput.value = "";
    emailInput.value ="";
    numbersInput.value ="";
    show();
}
 
let modal = document.getElementById('contact-modal');

    let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    function showDetails() {
        modal.style.display = "block";
        let modalBody = document.getElementById('modal-content');

        let content = `<span class="close">&times;</span><div><table id="info-table">
                    <tbody id="info-body">
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone Number</td>
                    </tr>
                    <tr class="contact-row">
                <td>

                ${currentContact.name}</td>
                <td>${currentContact.email}</td>
                <td>${currentContact.numbers}</td>
            </tr>
                    </tbody>
                </table>`;
        content += `<input type="button" value="Delete" id="btn_del">
                    <input type="button" value="Edit" id="btn_edit"></div>`;
        modalBody.innerHTML = content;
    }

    let currentContact; //used to save selected contact item in memory
function show(){
    let tableBody = document.getElementById("table-body");
    for(let i =0; i< data.length; i++){
        console.log("Reaching javascript");
        let contact = data[i];
        currentContact = contact;
        tableBody.innerHTML += `<tr class="contact-row">
                <td>${contact.name}</td>
            </tr>`

    }


    let allRows = document.getElementsByClassName("contact-row");
    for(let i=0; i< allRows.length; i++){
        let row = allRows[i];
        row.onclick = function () {
            let row = allRows[i];
            console.log("seeing click event");
            showDetails();
        }
    }
}



