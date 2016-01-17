
casper.test.begin('body exists', 1, function(test) {
    var dom_id = 'body';
    casper.start();
    casper.open('http://localhost:8000/fireflies-demo/demo0.html');
    casper.waitForSelector(dom_id, function() {
        test.assertExists(dom_id);
    });
    casper.run(function() {
        test.done();
    });
});