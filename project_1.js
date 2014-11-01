var jsonCircles = [
	{
		"x_axis": 30,
		"y_axis": 30,
		"radius": 20,
		"color": "green"
	}, {
		"x_axis": 70,
		"y_axis": 70,
		"radius": 20,
		"color": "purple"
	}, {
		"x_axis": 110,
		"y_axis": 100,
		"radius": 20,
		"color": "red"
	}];

var spaceCircles = [30, 70, 110];

var svgContainer = d3.select("body").append("svg")
																		.attr("width", 200)
																		.attr("height", 200);

var circles = svgContainer.selectAll("circle")
													.data(jsonCircles)
													.enter()
													.append("circle");

var circleAttributes = circles
												.attr("cx", function (d) { return d.x_axis; })
												.attr("cy", function (d) { return d.y_axis; })
												.attr("r", function (d) { return d.radius; })												
												.style("fill", function (d) {return d.color; });

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