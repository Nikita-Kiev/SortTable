function sortTable(n, compareType) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  
  // Set the sorting direction to ascending:
  dir = "asc";
  
  while (switching) {
    switching = false;
    rows = table.rows;
  
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      
      // get two rows
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      var xBigger = false;
      
      // compare rows base on comparingType
      if(compareType == 'string') {
        xBigger = x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()
      }
      else if(compareType == 'int') {
        xBigger = +x.innerHTML > +y.innerHTML;
      }

      if (dir == "asc") {
        if(xBigger) shouldSwitch= true;
      } 
      else if (dir == "desc") {
        if(!xBigger) shouldSwitch = true;
      }
      
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      }
      else {
        if (switchcount === 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
    
  }
}