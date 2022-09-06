fetch('http://127.0.0.1:5000/report/best-customers')
    .then(response => response.json())
    .then(customers => {
        let rows = customers.map(element => createReportCustomerTemplate(element));
        let table = $("#customers tbody");
        table.append(rows);
    });


function createReportCustomerTemplate(customer) {
    let template = $("#report-customer-template")[0].innerHTML;
    return Mustache.render(template, customer);
}
