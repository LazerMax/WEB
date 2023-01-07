"use strict";

require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.to-string.js");
var characters = [{
  name: 'sword',
  health: 10
}, {
  name: 'which',
  health: 100
}, {
  name: 'which',
  health: 0
}, {
    name: 'archer',
  health: 0
}];
var alive = characters.filter(function (item) {
  return item.health > 0;
});