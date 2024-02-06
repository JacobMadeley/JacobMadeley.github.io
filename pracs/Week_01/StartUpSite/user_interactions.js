document.getElementById('jsNavbarToggle').addEventListener('click', function () {
    var menu = document.getElementById('jsMenu');
    menu.classList.toggle('active');
});

function sortTable() {
    let table, rows, switching, i, x, y, shouldSwitch, dir;
    table = document.getElementById('languageTable');
    switching = true;
    dir = document.getElementById('sortOptions').value;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName('td')[0];
            y = rows[i + 1].getElementsByTagName('td')[0];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function filterTableByUsage() {
    let input, filter, table, tr, td, i;
    input = document.getElementById("filterOptions");
    filter = input.value.toUpperCase();
    table = document.getElementById("languageTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            if (i !== 0){
                let usageList = td.textContent.toUpperCase().split(", ");
                if (usageList.includes(filter) || filter === 'ALL') {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}
