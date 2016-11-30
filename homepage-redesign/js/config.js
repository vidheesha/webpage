var bbHomepageConstants = {

    apiPrefix: calculateUrlPrefix(window.location.href)

};

// Function takes in a complete URL and return the protocol and
// base URL up to the first /.
// Examples:
// -- https://www.beachbody.com returns https://www.beachbody.com/
// -- https://www.beachbody.com/checkout/dt.do returns https://www.beachbody.com/
function calculateUrlPrefix(baseUrl) {

    var getBaseUrl = baseUrl;
    var protocolSize = 0;

    // Do we start with https?
    if(baseUrl.indexOf("https://") > -1) {
        protocolSize = 8;
        getBaseUrl = baseUrl.replace("https://", "");
    }
    else if(baseUrl.indexOf("http://") > -1) {
        protocolSize = 7;
        getBaseUrl = baseUrl.replace("http://", "");
    }

    var indexOfFirstSlash = getBaseUrl.indexOf("/");
    var ret = "";
    if(indexOfFirstSlash === -1) {
        ret = baseUrl + '/';
    }
    else {
        ret = baseUrl.substr(0, indexOfFirstSlash + protocolSize + 1);
    }

    return ret;
}

//// Tests
//function testCalculateUrlPrefix(testUrl, expectedResultUrl) {
//    var result = calculateUrlPrefix(testUrl);
//
//    if(result !== expectedResultUrl) {
//       alert('Did not match: ' + result + ' to ' + expectedResultUrl);
//    }
//}
//testCalculateUrlPrefix('https://www.beachbody.com', 'https://www.beachbody.com/');
//testCalculateUrlPrefix('https://www.beachbody.com/checkout/dt.do', 'https://www.beachbody.com/');
//testCalculateUrlPrefix('https://www.beachbody.com/', 'https://www.beachbody.com/');
//testCalculateUrlPrefix('https://beachbody-v142-revgreen.aws.marketlive.com/', 'https://beachbody-v142-revgreen.aws.marketlive.com/');
//testCalculateUrlPrefix('https://localhost:8443/', 'https://localhost:8443/');
//testCalculateUrlPrefix('https://localhost:8443', 'https://localhost:8443/');
//testCalculateUrlPrefix('http://localhost:8443/', 'http://localhost:8443/');
//testCalculateUrlPrefix('http://localhost:8443', 'http://localhost:8443/');
