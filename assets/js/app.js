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


    function itemHover(item) {

        var itemHover = $('.hover')[0].src;
        $('#heroimage').append('<img src=' + itemHover + ' alt="photo" > ');
        var itemdesc = $('p.desc').html();
        $('#herodesc').append('<p>' + itemdesc + '</p>');
        var itemprice = $('p.priceTag').html();
        $('#heroprice').append('<p class="prodprice">' + itemprice + '</p>');
        var itemArray = $('.itemList');
        itemArray.each(function (i) {
            $(this).mouseenter(function () {
                $('#heroimage').html('');
                $('#herodesc').html('');
                $('#heroprice').html('');
                var bigImage = $('.hover')[i].src;
                $('#heroimage').append('<img src=' + bigImage + ' alt="photo" > ');
                var itemDesc = $('p.desc').html();
                $('#herodesc').append('<p>' + itemDesc + '</p>');
                var itemPrice = $('p.priceTag').html();
                $('#heroprice').append('<p>' + itemPrice + '</p>');

            });
        });
    }
    $('#addcart').click(function () {
        var productPrice = $('.prodprice').html();
        alert("Price is" + productPrice);
    });

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
                $('#results').append('<li class="itemList"> <img src=' + productImageSm + ' alt="photo" class="itemImage"> <img src=' + productImagelg + ' class="hover"> <p class="desc"> ' + productBrand + ' ' + productdesc + ' </p> <p class="priceTag"> $ ' + productPrice + ' </p>' + viewBtn + '</li>');

                console.log(productBrand);


            }
            itemHover(i);
        },

        error: function () {}
    });
});