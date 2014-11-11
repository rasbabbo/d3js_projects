var circleData = [
	{ "cx":20, "cy": 20, "radius": 20, "color": "green"},
	{ "cx":70, "cy": 70, "radius": 20, "color": "purple"}];

var rectangleData = [
	{ "rx": 110, "ry": 110, "height": 30, "width": 30, "color": "blue"},
	{ "rx": 160, "ry": 160, "height": 30, "width": 30, "color": "red"}];

var svgContainer = d3.select("body").append("svg")
																		.attr("width", 200)
																		.attr("height", 200);

var circles = svgContainer.selectAll("circle")
													.data(circleData)
													.enter()
													.append("circle");

var circleAttributes = circles
											 .attr("cx", function (d) {return d.cx; })																	
											 .attr("cy", function (d) {return d.cy; })
											 .attr("r", function (d) {return d.radius; })
											 .style("fill", function (d) {return d.color; });

var rectangles = svgContainer.selectAll("rect")
													.data(rectangleData)
													.enter()
													.append("rect");

var rectangleAttributes = rectangles
													.attr("x", function (d) {return d.rx; })
													.attr("y", function (d) {return d.ry; })
													.attr("height", function (d) {return d.height; })
													.attr("width", function (d) {return d.width; })
													.style("fill", function (d) {return d.color; });


// var jsonRectangles = [
// 	{ "x_axis" : 10, "y_axis": 10, "height": 20, "width":20, "color" : "green" },
// 	{ "x_axis" : 160, "y_axis": 40, "height": 20, "width":20, "color" : "purple" },
// 	{ "x_axis" : 70, "y_axis": 70, "height": 20, "width":20, "color" : "red" }
// ];


// //these are holders for the max coord. set dynamically by the x/y values
// var max_x = 0;
// var max_y = 0;

// //finds the max x/y values - remember to add the size of the object
// for (var i = 0; i < jsonRectangles.length; i++) {
// 	var temp_x, temp_y;
// 	var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
// 	var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;

// 	if (temp_x >= max_x) {
// 		max_x = temp_x;
// 	}

// 	if (temp_y >= max_y) {
// 		max_y = temp_y;
// 	}
// }

// var svgContainer = d3.select("body").append("svg")
// 																		.attr("width", max_x + 20)
// 																		.attr("height", max_y + 20);

// var rectangles = svgContainer.selectAll("rect")
// 															.data(jsonRectangles)
// 															.enter()
// 															.append("rect");

// var rectangleAttributes = rectangles
// 													.attr("x", function(d) { return d.x_axis; })
// 													.attr("y", function(d) { return d.y_axis; })
// 													.attr("height", function(d) { return d.height; })
// 													.attr("width", function(d) { return d.width; })
// 													.style("fill", function(d) { return d.color; });


//using josn to dynamicaly alter visuals
// var jsonCircles = [
// 	{
// 		"x_axis": 30,
// 		"y_axis": 30,
// 		"radius": 20,
// 		"color": "green"
// 	}, {
// 		"x_axis": 70,
// 		"y_axis": 70,
// 		"radius": 20,
// 		"color": "purple"
// 	}, {
// 		"x_axis": 110,
// 		"y_axis": 100,
// 		"radius": 20,
// 		"color": "red"
// 	}];

// var spaceCircles = [30, 70, 110];

// var svgContainer = d3.select("body").append("svg")
// 																		.attr("width", 200)
// 																		.attr("height", 200);

// var circles = svgContainer.selectAll("circle")
// 													.data(jsonCircles)
// 													.enter()
// 													.append("circle");

// var circleAttributes = circles
// 												.attr("cx", function (d) { return d.x_axis; })
// 												.attr("cy", function (d) { return d.y_axis; })
// 												.attr("r", function (d) { return d.radius; })												
// 												.style("fill", function (d) {return d.color; });

// var circleAttributes = circles
// 												.attr("cx", function (d) { return d; })																						
// 												.attr("cy", function (d) { return d; })																						
// 												.attr("r", 20)
// 												.style("fill", function(d) {
// 													var returnColor;
// 													if (d < 31) { returnColor = "green"; 
// 													} else if (d === 70) { returnColor = "purple"; 
// 													} else if (d > 75) { returnColor = "red"; }
// 													return returnColor;
// 													});

// CREATING NEW ELEMENTS CUSTOMIZED BY COLOR AND SIZE THROUGH DATA

// var circleRadii = [40, 20, 10];

// var svgContainer = d3.select("body").append("svg")
// 																	.attr("width", 200)
// 																	.attr("height", 200);

// var circles = svgContainer.selectAll("circle")
// 													.data(circleRadii)
// 													.enter()
// 													.append("circle");

// var circleAttributes = circles
// 											.attr("cx", 50)
// 											.attr("cy", 50)
// 											.attr("r", function (d) { return d; })
// 											.style("fill", function(d) {
// 												var returnColor;
// 												if (d === 10) { returnColor = "white";
// 											} else if (d === 20 ) { returnColor = "red";
// 											} else if (d === 40 ) { returnColor = "blue"; }
// 											return returnColor;
// 											});




// SIMPLE DATA LOOP THROUGH D3, PLACING INDEX AND DATA AND CREATING NEW ELEMENT FOR EACH
// var theData = [1, 2, 3];

// var p = d3.select("body").selectAll("p")
// 	.data(theData)
// 	.enter()
// 	.append("p")
// 	// .text( function (d) {
// 	// 	return d;
// 	// });
// 	.text(function (d,i) {
// 		return "i =" +i + "foos"+ " d = " +d+"foos";
// 	});