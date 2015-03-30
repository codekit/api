/*$(document).ready(function () {
    function getResponse() {
        $.ajax({
            type: "GET",
            cache: false,
            url: "http://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0&refinements=5003703",
            success: function (result) {
                console.log(result);
            }
        });
    }
    getResponse();
}); */

$(document).ready(function () {
    $('#results').html('');
    $.ajax({
        type: 'GET',
        url: 'http://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0&refinements=5003703',
        contentType: 'text/plain',
        xhrFields: { // to enable CORS. code from HTML5rocks.com
            withCredentials: false
        },
        headers: {},
        success: function (result) {
            console.log(result);
            for (var i = 0; i < 6; i++) {
                var productBrand = result.ProductsList[i].ProductInfo.Brand;
                var productdesc = result.ProductsList[i].ProductInfo.p_product_description;
                var productPrice = Math.floor((result.ProductsList[i].ProductInfo.p_product_price) * 100 / 100).toFixed(2);
                var productImageSm = result.ProductsList[i].imageURLs.sm;
                var productImagelg = result.ProductsList[i].imageURLs.lg;
                var productSpecs = result.ProductsList[i].ProductInfo.p_product_specs;
                var viewBtn = '<div class="viewBtn">View More</div>';
                $('#results').append('<li> <img src=' + productImageSm + ' alt="photo" class="hover"> <p> ' + productBrand + ' ' + productdesc + ' </p> <p class="priceTag"> $ ' + productPrice + ' </p>' + viewBtn + '</li>');


                console.log(productBrand);
            }
            $('#hero').append('<img src=' + productImagelg + ' alt="photo" > ');
        },
        error: function () {}
    });
});