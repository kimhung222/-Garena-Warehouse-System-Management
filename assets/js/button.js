
function addRow() {
    var table = document.getElementById("mytable");
    var x = document.getElementById("mytable").rows.length;
    var row = table.insertRow(x);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(5);
    cell1.innerHTML = x;
    cell2.innerHTML = "<input type=\"text\" name=\"mahang\" class=\"form-control\">";
    cell3.innerHTML = "<input type=\"text\" name=\"tenhang\" class=\"form-control\">";
    cell4.innerHTML = "<input type=\"text\" name=\"soluong\" class=\"form-control\">";
    cell5.innerHTML = "<input  type=\"text\" name=\"gianhap\" class=\"form-control\">";
    cell6.innerHTML = "<input type=\"text\" name=\"soluong\" class=\"form-control\">";
    cell7.innerHTML = "<input type=\"text\" name=\"soluong\" class=\"form-control\">";
}



function DeleteRow(){
	var x = document.getElementById("mytable").rows.length;
    document.getElementById("mytable").deleteRow(x-1);
}
