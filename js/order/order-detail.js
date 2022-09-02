/**
 * Set the id to query the order
 */

let urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

fetch(`http://127.0.0.1:5000/order/id/${_id}`)
    .then(response => response.json())
    .then(order => {
        beverages = splitDetail(order.detail, 'beverage');
        ingredients = splitDetail(order.detail, 'ingredient');
        order.ingredients = ingredients;
        order.beverages = beverages;
        let template = createRowTemplate(order);
        $("#order").append(template);
    });


/**
 * Find the template tag and populate it with the data
 * @param order
 */
function createRowTemplate(order) {
    let template = $("#order-template")[0].innerHTML;
    return Mustache.render(template, order);
}


/**
 * Split the detail array in ingredients and beverages arrays
 * @param order @param name
 */
function splitDetail(order, name) {
    result = [];
    order.forEach(item => {
        if (item.beverage != null && name == 'beverage') result.push(item.beverage);
        if (item.ingredient != null && name == 'ingredient') result.push(item.ingredient);
    });
    return result;
}
