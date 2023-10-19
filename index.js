const main = document.getElementById("main"); //finds the element by id
main.remove("main");//removes the element

const newHeader = document.createElement("h1");//creates a new element
//document.body.append("h1")
newHeader.setAttribute("id", "victory")//sets the Id = victory

newHeader.textContent = "David Butterton is the champion";//adds content to the element newHeader




