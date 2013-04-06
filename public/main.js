var MAP_WIDTH = 1132;
var MAP_HEIGHT = 554;
var PROJECTION_SCALE = 180;

var svg = d3.select("body").append("svg")
  .attr("width", MAP_WIDTH)
  .attr("height", MAP_HEIGHT);
  
d3.json("world.json", function(error, world) {
  var projection = d3.geo.miller()
    .scale(PROJECTION_SCALE)
    .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2 + 80]);

  var path = d3.geo.path().projection(projection);

  svg.append("path")
    .datum(topojson.object(world, world.objects.subunits))
    .attr("d", path);
});
