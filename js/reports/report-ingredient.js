fetch('http://127.0.0.1:5000/report/most-requested')
    .then(response => response.json())
    .then(ingredient => {
        let rows = ingredient.map(element => createReportIngredientTemplate(element));
        let table = $("#ingredient tbody");
        table.append(rows);
    });


function createReportIngredientTemplate(ingredient) {
    let template = $("#report-ingredient-template")[0].innerHTML;
    return Mustache.render(template, ingredient);
}
