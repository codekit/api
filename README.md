# Request data from Lowes.com API


- Install the chrome Extension "Allow-Control-Allow-Origin" for to make cross domain AJAX request to "lowes.com" domain.
- Enable cross-origin resource sharing.

Make an AJAX Request to http://m.lowes.com/  

```js
$.ajax({
        type: 'GET',
        url: 'http://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0&refinements=5003703',
        contentType: 'text/plain',
        xhrFields: { // to enable CORS
            withCredentials: false
        },
        headers: {},
        success: function (result) {}
        // Loop through the result data. Show Products.
        });
```
Hover on the Products,

```js
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
                // Code for to show Large image, product info, price of hovered Product
            });

        });
        $('#addcart').click(function () { // Add to Cart button alerts the Price of Product in masthead when clicked
            var productPrice = $('#heroprice .prodprice').html();
            alert("Price is" + productPrice);
        });
    }
```

Application is made responsive for use on iPad and iPhone
