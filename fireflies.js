var fireFlies = function() {

  function randomTranslate(position, max) {
    return Math.floor((Math.random() * max) - position);
  }

  function keyframeFactory(class_name, x, y, width, height) {
    // Todo: make the keyframe percent random
    return "\
      @keyframes " + class_name + " {\
        15% {\
            transform: translate(" + randomTranslate(x, width) + "px, " + randomTranslate(y, height) + "px) scale(3, 3);\
          opacity: 1;\
        }\
        45% {\
            opacity: 0;\
        }\
        75% {\
            transform: translate(" + randomTranslate(x, width) + "px, " + randomTranslate(y, height) + "px) scale(4, 4);\
          opacity: 1;\
        }\
      }";
  }

  function ruleFactory(rule_name, duration, size, color, animation_name, x, y) {
    return "\
      ." + rule_name + " {\
        position: absolute;\
        top: " + y + "px;\
        left: " + x + "px;\
        color: " + color + ";\
        text-shadow: 0 0 3px " + color + ";\
        font-size: " + size + "px;\
        opacity: 0; \
        animation: " + animation_name + " " + duration + " ease-in-out infinite;\
      }";
  }

  function hatchFlies(config) {
    var config = (config || {});
    var flyNodes = [];
    var flies = config.number_flies || 20;

    // These need to be set to the containing element or html.body
    var h = config.height || 333;
    var w = config.width|| 500;

    for (var fly = 0; fly < flies; fly++) {
      var random_class = "a" + fly;
      var random_keyframe = "k" + fly;
      flyNodes.push('<div class=' + random_class + '>&bull;</div>');
      var size = 1 + Math.ceil(Math.random() * 4);
      var color = '#ffb149';
      var speed = 20 + (Math.random() * 40) + "s";
      var x = Math.floor(Math.random() * w);
      var y = Math.floor(Math.random() * h);

      // Todo: check for existing stylesheets first, might be none
      document.styleSheets[0].insertRule(ruleFactory(random_class, speed, size, color, random_keyframe, x, y), 0);
      document.styleSheets[0].insertRule(keyframeFactory(random_keyframe, x, y, w, h), 0);
    }

    document.body.innerHTML += ("<div id='flies'>" + flyNodes.join('') + "</div>");
  }

  return function(config) {
    hatchFlies(config);
    return;
  };

}();
