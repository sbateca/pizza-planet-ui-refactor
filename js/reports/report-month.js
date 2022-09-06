fetch('http://127.0.0.1:5000/report/most-revenue-month')
    .then(response => response.json())
    .then(month => {
        months = new Array();
        months.push(month);
        let rows = months.map(element => createReportMonthTemplate(element));
        let table = $("#month tbody");
        table.append(rows);
    });


function createReportMonthTemplate(month) {
    let template = $("#report-month-template")[0].innerHTML;
    return Mustache.render(template, month);
}
