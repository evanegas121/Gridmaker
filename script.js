let numRows = 0;
let numCols = 0;
let colorSelected; 
let table = document.getElementById("grid");

//Add a row
function addR() {
    // alert("Clicked Add Row")
    numRows +=1;
    var addRow = table.insertRow();
    var addCol;
    for (var i = 0; i <= numCols; i++){
        addCol = addRow.insertCell()
    }
    addClick()

}
//Add a column
function addC() {
    // alert("Clicked Add Col")
    numCols += 1;
    let tableRows = table.getElementsByTagName('tr');
    for (let i = 0; i < tableRows.length; i++){
        tableRows[i].insertCell();
    }
    addClick()
 }

//Remove a row
function removeR() {
    // alert("Clicked Remove Row")
    numRows -= 1
    table.deleteRow(-1)
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
    numCols -= 1;
    let tableRows = table.getElementsByTagName('tr');
    for (let i = 0; i < tableRows.length; i++){
        tableRows[i].deleteCell(-1);
    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}


function fill(){
    //alert("Clicked Fill All")
    let tableCols =  table.getElementsByTagName('td')
    for(let i=0; i < tableCols.length;i++){
        tableCols[i].style.backgroundColor = colorSelected;
    }
}

function addClick(){
    let color = table.getElementsByTagName("td")
    for(let i = 0; i < color.length;i++){
        color[i].addEventListener("click", colorfunction)
    }
}

function colorfunction(e){
    e.target.style.backgroundColor = colorSelected
}

function clearAll(){
    //alert("Clicked Clear All")
    let tableCols =  table.getElementsByTagName('td')
    for(let i=0; i < tableCols.length;i++){
        tableCols[i].removeAttribute("style") ;
    }
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}

