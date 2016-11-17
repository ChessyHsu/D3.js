//2016.11.16
function f(){
	var width = 1024;
	var height = 768;
	var ctrl = d3.select("content").append("svg").attr("width", width).attr("height", height);
	d3.csv("https://ChessyHsu.github.io/D3.js/weather.csv", 
		function(data)
		{
			var ln = data.length;
			console.log(data);
			var maxy1 = d3.max(data, function(d){ return d.TX02; });
			var lines1 = d3.line().x(function(d,i){return i*(width/ln);}).y(function(d){return height-d.TX02*((	height)/maxy1)});	
			ctrl.append("path	").data([data]).attr("d", lines1).attr("stroke", "red").attr("fill", "none");	
	
			var maxy2 = d3.max(data, function(d){ return d.TX04; });
			var lines2 = d3.line().x(function(d,i){return i*(width/ln);}).y(function(d){return height-d.TX04*((	height)/maxy1)});	
			ctrl.append("path	").data([data]).attr("d", lines2).attr("stroke", "blue").attr("fill", "none");	
			
		}		
	);
}