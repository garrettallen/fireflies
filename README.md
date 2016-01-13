# Javascript Fireflies

Add fireflies to your website or wedsite. Inspired by the <a href="https://github.com/motyar/firefly">JQuery Fireflies</a>, but using CSS3 for animations.

### Configuration settings:

`number_flies` - the number of fireflies to use
`color` - the color of the fireflies
`elem` -  the selector of the DOM element to contain the fireflies

## Examples

See the <a href="http://garrettallen.github.io/fireflies/">demos</a> and the <a href="https://github.com/garrettallen/fireflies/tree/gh-pages">gh-pages branch</a> for working demos.

### Use defaults

```
<html>
<body style="background: #333; width: 100%; height: 100%;">
    <script src='fireflies.js'></script>
    <script>
        (function() {
            fireFlies();
        })();
    </script>
</body>
</html>
```

### Custom settings

```
<html>
<body>
    <div id="fireflies-container" style="width: 800px; height: 400px; background: #333;"></div>
    <script src='fireflies.js'></script>
    <script>
        (function() {
            fireFlies({
                "number_flies": 100,
                "color": "#fff",
                "elem": "#fireflies-container"
            });
        })();
    </script>
</body>
</html>
```