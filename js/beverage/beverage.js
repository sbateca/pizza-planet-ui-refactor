fetch('http://127.0.0.1:5000/beverage')
    .then(response => response.json())
    .then(beverages => {
        let rows = beverages.map(element => createBeveragesTemplate(element));
        let table = $("#beverages tbody");
        table.append(rows);
    });


function createBeveragesTemplate(beverage) {
    let template = $("#beverage-item-template")[0].innerHTML;
    return Mustache.render(template, beverage);
}
