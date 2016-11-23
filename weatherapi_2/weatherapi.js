$(document).ready(function(){

// var weather = new XMLHttpRequest();
// weather.open('GET', 'http://api.wunderground.com/api/09f8aa654d3c3800/conditions/q/NY/Brooklyn.json', true);
// weather.send();

// var resp = JSON.parse(weather['response']);
// console.log(resp[current_observation][display_location][full]);
// });
	$("#submit-button").click(function(){
		

	var cold = ["Brrr it's cold", "Shit, stay inside", "Cancel all your plans, it's way too cold out"]
	var warm = ["Great, it's warm out!", "Awww yeah, tank top weather!", "Flip flops, dude"];

		$.ajax({
			url: "http://api.wunderground.com/api/09f8aa654d3c3800/conditions/q/NY/Brooklyn.json",
			dataType: 'json',
			method: 'get',
			cache: true,
				success: function(data){
				var location = (data.current_observation.observation_location.city)
				var temp = (data.current_observation.temp_f);
				$("body").append("<div id='climate'>The current temperature in " + location + " is " + temp + " degrees</div>");
				if(temp >= 60) {
					var rando = warm[Math.floor(Math.random() * warm.length)]
					$("body").append(rando);
				} else {
					var rando = cold[Math.floor(Math.random() * warm.length)]
					$("body").append(rando);
				}
		   	}


		});	

	// })

});