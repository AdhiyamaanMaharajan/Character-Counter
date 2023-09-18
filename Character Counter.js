const textArea = document.getElementById("textarea");

const totalContainer = document.getElementById("total-container");

const remainingContainer= document.getElementById("remaining-container");

textArea.addEventListener("keyup", () => {
    updatecount();

})

updatecount();


function updatecount(){
    totalContainer.innerText = textArea.value.length ;
    remainingContainer.innerText = (textArea.getAttribute("maxLength") - textArea.value.length);
}