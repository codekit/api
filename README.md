# Request data from Lowes.com - API

Demo: http://codekit.github.io/api  (requires [CORS Plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) from Chrome)  
Source: https://github.com/codekit/api

Ajax is used to exchange data with a server or update a web page without refreshing. Exchanging data with a server on another domain is restricted due to the same origin policy, which prevents a document or script loaded from one origin from getting or setting properties of a document from another origin.

Cross-Origin Resource Sharing (CORS) defines how the browser and server must communicate when accessing sources across origins.
The idea is to use custom HTTP headers to allow both the browser and the server to know about each other to determine if the request or response should succeed or fail.

For a simple request, one that uses either GET or POST, the request is sent with an extra header called Origin. 

Example `Origin: http://www.abc.com`

If the server decides that the request should be allowed, it sends a `Access-Control-Allow-Origin` header echoing back the same origin that was sent or * if it’s a public resource. 

Example:
`Access-Control-Allow-Origin: http://www.abc.com`

Due to this constraint, Install the chrome Extension [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) to make cross domain AJAX request to "lowes.com" domain. Enable cross-origin resource sharing.  

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
        $('#heroimage').append('<img src=' + itemHover + ' alt="Washers" > ');
        var itemdesc = $('p.desc').html();
        $('#herodesc').append('<p>' + itemdesc + '</p>');
        var itemprice = $('p.priceTag').html();
        $('#heroprice').html(itemprice);
        var itemArray = $('.itemList');

        itemArray.each(function (i) {
            $(this).mouseenter(function () {
                // Code for to show Large image, product info, price of hovered Product
            });

        });
        $('#addcart').click(function () { // Add to Cart button alerts the Price of Product in masthead when clicked
            var productPrice = $('#heroprice').html();
            alert("Price is" + productPrice);
        });
    }
```

Application is made responsive for use on iPad and iPhone.

```css
/* For Tablets */
@media only screen and (max-width: 1024px) {
    body {
        margin: 0 3%;
    }
    #herobrand {
        margin: 0;
    }
    #herocart {
        margin-left: 1em;
    }
    #herodesc p {
        width: 323px;
        line-height: 1.3em;
    }
    #results li {
        margin: 0.7em 2.7em 0.7em 0;
    }
}

/* For Smartphones */
@media only screen and (max-width: 480px) {
    #heroimage {
        padding-left: 30px;
    }
    #herobrand {
        margin-left: 30px;
    }
    #herocart {
        margin-left: 5em;
    }
    #herodesc p {
        width: 323px;
        line-height: 1.3em;
    }
    #heroprice {
        margin-top: 2em;
    }
    #results li {
        margin: 0.5em 4em;
    }
}
```
