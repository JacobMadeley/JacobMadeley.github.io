function sortTable() {
    var sortByName = document.getElementById('sortByName').value;
    var sortByUsage = document.getElementById('sortByUsage').value;
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("language_table");
    var switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName('TD')[0];
            y = rows[i + 1].getElementsByTagName('TD')[0];
            if (sortByName === 'ascending') {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }else{
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
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

function filterOptions() {
    var sortByUsage = document.getElementById('sortByUsage').value;
    var filterOptionsDiv = document.getElementById('filterOptionsDiv');
    filterOptionsDiv.innerHTML = '';

    if (sortByUsage === 'Web Development') {
        var frontendOption = document.createElement('label')
        frontendOption.innerHTML = '<input type="checkbox" value="frontEnd"> Front End';
        filterOptionsDiv.appendChild(frontendOption);

        var backendOption = document.createElement('label')
        backendOption.innerHTML = '<input type="checkbox" value="backEnd"> Back End';
        filterOptionsDiv.appendChild(backendOption);
    }

    if (sortByUsage === 'Mobile App Development') {
        var androidOption = document.createElement('label')
        androidOption.innerHTML = '<input type="checkbox" value="androidAppDevelopment"> Android App Development';
        filterOptionsDiv.appendChild(androidOption);

        var iosOption = document.createElement('label')
        iosOption.innerHTML = '<input type="checkbox" value="iOSAppDevelopment"> iOS App Development';
        filterOptionsDiv.appendChild(iosOption);
    }
}