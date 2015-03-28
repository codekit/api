$(document).ready(function () {


    function getResponse() {

        /*    $.ajax({
                type: "GET",
                cache: false,
                url: "http://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0&refinements=5003703",
                success: function (result) {
                    console.log(result);

                }

            });*/

        $.ajax({

            type: 'GET',

            url: 'http://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0&refinements=5003703',


            contentType: 'text/plain',

            xhrFields: {

                // 'Access-Control-Allow-Credentials: true'.
                withCredentials: false
            },

            headers: {
                // Set any custom headers here.
                // If you set any non-simple headers, your server must include these
                // headers in the 'Access-Control-Allow-Headers' response header.
            },

            success: function () {
                // Here's where you handle a successful response.
            },

            error: function () {
                // Here's where you handle an error response.
                // Note that if the error was due to a CORS issue,
                // this function will still fire, but there won't be any additional
                // information about the error.
            }
        });

    }
    getResponse();


});