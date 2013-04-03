var svg = d3.select("body").append("svg")
  .attr("width", 960)
  .attr("height", 1160);
  
d3.json("world.json", function(error, world) {
  svg.append("path")
    .datum(topojson.object(world, world.objects.subunits))
    .attr("d", d3.geo.path().projection(d3.geo.mercator()));
});
