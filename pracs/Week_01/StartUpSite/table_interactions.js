function sortTable() {
    var sortByName = document.getElementById('sortByName').value;
    var table = document.getElementById("language_table");
    var rows = table.rows;
    var switching = true;
    while (switching) {
        switching = false;
        for (var i = 1; i < (rows.length - 1); i++) {
            var shouldSwitch = false;
            var x = rows[i].getElementsByTagName('TD')[0];
            var y = rows[i + 1].getElementsByTagName('TD')[0];
            var xValue = x.innerHTML.toLowerCase();
            var yValue = y.innerHTML.toLowerCase();
            if (sortByName === 'ascending') {
                if (xValue > yValue) {
                    shouldSwitch = true;
                    break;
                }
            }else{
                if (xValue < yValue) {
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
        createFilterOption(filterOptionsDiv, 'frontend', 'Front-End');
        createFilterOption(filterOptionsDiv,'backend', 'Back-End');
    }

    if (sortByUsage === 'Mobile App Development') {
        createFilterOption(filterOptionsDiv, 'androidAppDevelopment', 'Android App Development');
        createFilterOption(filterOptionsDiv, 'iOSAppDevelopment', 'iOS App Development');
    }
}

function createFilterOption(parentElement, value, label) {
    var option = document.createElement('label');
    option.innerHTML = '<input type="checkbox" value="' + value + '">' + label + '</input>';
    parentElement.appendChild(option);
}