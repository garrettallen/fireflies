var fireFlies = function() {

  function checkCss() {
    if (document.styleSheets.length === 0) {
      document.head.innerHTML += "<style></style>";
    }
  }

  function randomTranslate(position, max) {
    return Math.floor((Math.random() * max) - position);
  }

  function keyframeFactory(class_name, x, y, width, height) {
    return "\
      @keyframes " + class_name + " {\
        15% {\
            transform: translate(" + randomTranslate(x, width) + "px, " + randomTranslate(y, height) + "px) scale(3, 3);\
          opacity: 0.8;\
        }\
        45% {\
            opacity: 0;\
        }\
        75% {\
            transform: translate(" + randomTranslate(x, width) + "px, " + randomTranslate(y, height) + "px) scale(4, 4);\
          opacity: 0.8;\
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
    var flies = config.number_flies || 40;
    var color = config.color || '#ffb149';
    var element = config.elem || 'body';
    var element_dom;
    if (document.querySelectorAll(element).length) {
      element_dom = document.querySelectorAll(element)[0];
    } else {
      console.error("No elements were found that match the selector: '" + element + "'. Please check it and try again.");
      return;
    }
    var clientRect = element_dom.getBoundingClientRect();
    var height = clientRect.height;
    var width = clientRect.width;
    for (var fly = 0; fly < flies; fly++) {
      var class_name = "a" + fly;
      var animation_name = "k" + fly;
      flyNodes.push('<div class=' + class_name + '>&bull;</div>');
      var size = 1 + Math.ceil(Math.random() * 4);      
      var speed = 20 + (Math.random() * 40) + "s";
      var x = Math.floor(Math.random() * width);
      var y = Math.floor(Math.random() * height);
      document.styleSheets[0].insertRule(ruleFactory(class_name, speed, size, color, animation_name, x, y), 0);
      document.styleSheets[0].insertRule(keyframeFactory(animation_name, x, y, width, height), 0);
    }

    var position = 'relative';
    if (element == 'body') {
      position = 'absolute';
    }
    element_dom.innerHTML += ("<div id='flies' style='position: " + position
      + "; top: 0; left:0; overflow:hidden; width:" + width + "px; height: "
      + height + "px;'>" + flyNodes.join('') + "</div>");
  }

  return function(config) {
    checkCss();
    hatchFlies(config);
    return;
  };

}();
