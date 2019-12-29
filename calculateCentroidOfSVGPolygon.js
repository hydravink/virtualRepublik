function calculateCentroid(polygon_id){
	var x = new Array();
	var y = new Array();
	var x_sum = 0;
	var y_sum = 0;
	for(var i = 0; i < document.querySelector(polygon_id).points.numberOfItems; i++){
    	x[i] = document.querySelector(polygon_id).points.getItem([i]).x;
    	y[i] = document.querySelector(polygon_id).points.getItem([i]).y;
	}

	for(var i = 0; i < document.querySelector(polygon_id).points.numberOfItems; i++){
		x_sum = x_sum + parseInt(x[i],10);
    	y_sum = y_sum + parseInt(y[i],10);
	}
	
  var centroid = new Array();
	centroid[0] = x_sum/document.querySelector(polygon_id).points.numberOfItems;
	centroid[1] = y_sum/document.querySelector(polygon_id).points.numberOfItems;
    
  return centroid;
}
