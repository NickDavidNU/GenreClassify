


var row_count = 1;
var selected = "Bicep Curls";

var weekly_data = [['Day', 'Reps', 'Weight'],
['2/26/17',  10, 20],
['2/27/17',  15, 25],
['2/28/17',  17, 35],
['3/1/17',  20, 40],
['3/2/17',  22, 65],
['3/3/17',  25, 68],
['3/4/17',  30, 70]];

var monthly_data = [['Month', 'Reps', 'Weight'],
['October',  100, 20],
['November',  105, 25],
['December',  107, 35],
['January',  200, 40],
['February',  210, 65],
['March',  30, 65]];

var data = monthly_data;
var monthly = true;

function downloadCSV(){
  window.open('data/user_workout_data_export.csv');
}

function change_weekly() {
  data = weekly_data;
  drawChart();
  document.getElementById("weeklybutton").style.color = "#477eed";
  document.getElementById("monthlybutton").style.color = "#fff";
  monthly = false;
}

function change_monthly() {
  data = monthly_data;
  drawChart();
  document.getElementById("monthlybutton").style.color = "#477eed";
  document.getElementById("weeklybutton").style.color = "#fff";
  monthly = true;
}

function Alert_first_row() {
    window.alert("You must have at least one row");
}

function clearRows(){
  while (row_count > 0){
    DeleteRowAtIndex(1);
    row_count--;
  }
  makenewrow();
  row_count = 1;
}

function DeleteRowAtIndex(i){
  document.getElementById("firsttable").deleteRow(i);
}

function Delete_row_f(btn) {
   if(row_count > 1) {
        var i = btn.parentNode.parentNode.rowIndex;
        document.getElementById("firsttable").deleteRow(i);
        row_count--;
   } else {
     Alert_first_row();
   }
}

function makenewrow() {
  row_count += 1;

  //Using jQuery instead

  $("#firsttable").append("<tr align='center'><td><input type='text' name='name1'></input></td><td><input type='number' name='set1' min='0'></input></td><td><input  type='number' name='weight1' min='0'></input></td><td><input type='number' name='rep1' min='0'></input></td><td><button onclick='Delete_row_f(this)'>X</button></td></tr>");

}
var row_count = 1;
var selected = "Blues";

var disp = [['Pass', 'Percent', ],
['Yes',  60],
['No',  40]];



var data = disp;
var monthly = true;





function optionClicked(i){
  if (i == 1){
 selected = "Blues";

 disp = [['Pass', 'Percent', ],
['Yes',  60],
['No',  40]];

  } 
    else if (i == 2){
 selected = "Classical";

 disp = [['Pass', 'Percent', ],
['Yes',  90],
['No',  10]];

  } else {
    selected = "Deadlifts";
    weekly_data = [['Day', 'Reps', 'Weight'],
    ['2/26/17',  20, 100],
    ['2/27/17',  25, 125],
    ['2/28/17',  35, 135],
    ['3/1/17',  35, 140],
    ['3/2/17',  40, 145],
    ['3/3/17',  40, 147],
    ['3/4/17',  45, 149]];
    monthly_data = [['Month', 'Reps', 'Avg. Weight'],
    ['October',  200, 100],
    ['November',  230, 125],
    ['December',  247, 135],
    ['January',  253, 140],
    ['February',  255, 145],
    ['March', 100, 150]];

  }



  drawChart();
  document.getElementById("buttontitle").innerHTML = selected;
}

function dropDownClicked() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var ddata = google.visualization.arrayToDataTable(data);

        var options = {
          title: 'Function Performance',
          curveType: 'function',
          legend: { position: 'bottom' },
          backgroundColor: { fill: "#F4F4F4" },
            width: 1200,
            height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('curve_chart'));

        chart.draw(ddata, options);
      }
