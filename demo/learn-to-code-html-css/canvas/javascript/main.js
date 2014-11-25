(function(){
   var can_coordinates = document.getElementById("can_coordinates");
   var context = can_coordinates.getContext("2d");
   var flag = 0;
    for (var x = 0.5; x < 500; x += 10) {
		  context.moveTo(x, 0);
		  context.lineTo(x, 375);
		  flag ++ ;
		}
		for (var y = 0.5; y < 375; y += 10) {
		  context.moveTo(0, y);
		  context.lineTo(500, y);
		} 
		context.strokeStyle = "#eee";
    context.stroke();

    context.beginPath();
		context.moveTo(0, 40);
		context.lineTo(240, 40);
		context.moveTo(260, 40);
		context.lineTo(500, 40);
		context.moveTo(495, 35);
		context.lineTo(500, 40);
		context.lineTo(495, 45);
    context.moveTo(60, 0);
		context.lineTo(60, 153);
		context.moveTo(60, 173);
		context.lineTo(60, 375);
		context.moveTo(65, 370);
		context.lineTo(60, 375);
		context.lineTo(55, 370);
    
    context.strokeStyle = "#000";
    context.stroke();

		context.font = "bold 12px sans-serif";
		context.fillText("x", 248, 43);
		context.fillText("y", 58, 165);
    
    context.textBaseline = "top";
		context.fillText("( 0 , 0 )", 12, 5);
    
    context.textAlign = "right";
    context.textBaseline = "bottom";
		context.fillText("( 500 , 375 )", 492, 370);

		context.fillRect(0, 0, 3, 3);
		context.fillRect(497, 372, 3, 3);

})();

(function draw_gradients(){
   var c2 = document.getElementById("can_gradients");
   var d_gradients = c2.getContext("2d");
   
   var my_g = d_gradients.createLinearGradient(0, 0, 300, 0); // create a gradient object
   my_g.addColorStop(0, "black");
   my_g.addColorStop(1, "white");

   d_gradients.fillStyle = my_g;
   d_gradients.fillRect(0, 0, 300, 225);
})();