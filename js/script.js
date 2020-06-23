// script.js

$(function(){

	//$("button").click(function() {
		//$("#box").fadeOut(1000);
	//});

	//$('h1,h2,h3,h4').css("border", "solid 1px green");

	//$('div#container').css('border', 'solid 1px red');

	//$('p.lead').css('color', 'green');

	//$('li:first').css('border','solid 1px red');

	//$(':header').css('font-size','4px');

	//$('div:contains("Brad")').css('color', 'blue');

	/*----------
		JQUERY EVENTS
		--------------*/

		$('#box').click(function() {
			alert('you just clicked it!!')
		});

		$('input').blur(function(){
			if( $(this).val() =="" ){
				$(this).css('border','solid 1px red');
				$('#box').text('Forgot to add text?');
			}

		});

		$('input').keydown(function() {
			if($(this).val() !== ""){
				$(this).css('border','solid 1px #777');
				$('#box').text('Thanks for that');

			}
		});

		$('#box').hover(function() {

			$(this).text('you hovered!');

		}, function() {
			$(this).text('you hovered out!');
		});
});



/*.....................
	JQUERY CHAINING
	................*/

	$('.notification-bar').delay(1000).slideDown().delay(1).fadeOut();


	/*-------------------
		JQUERY HIDE/SHOW
		------------------*/

		//$('div.hidden').show();
		//$('div.hidden').text('Im a trendy coat bag');

		//$('h1').text('I have ate 10 computers in my day');

		//$('p').fadeOut(2000);

		$('#box1').click(function(){
			$(this).fadeTo(1000, 0.25, function(){
					

					$(this).slideUp();
			});
		});

		$('div.hidden').slideDown(2000);

		$('button').click(function(){
			$('#box1').slideToggle();
		});


		/*---------------
			jQUERY ANIMATE
			---------------*/

			

			$('#left').click(function() {
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=2px"
        }, function() {
            // animation is complete
        });
    });

			$('#up').click(function() {
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function() {
            // animation is complete
        });
    });

$('#right').click(function() {
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function() {
            // animation is complete
        });
    });

$('#down').click(function() {
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1"
        }, function() {
            // animation is complete
        });
    });



/*----------------
	CSS STYLING WITH JQUERY
	--------------*/

	$('#circle2').css({'background':'#8a8d22', 
					   'display':'inline-block', 
					   'color':'white', 
					   'text-align':'center',
					   'line-height':'140px',
					   'height':'140px',
					   'width':'140px'}).addClass('circleShape');


	/*======================
		Car Game
		-------------*/




		//Click the GO button

		$('#go').click(function(){


			// build a function that checks to see if a car has won the race
			function checkIfComplete() {

				if(isComplete == false) {
					isComplete = true;
				} else {
					place = "second"
				}
			}

			//get the width of the cars
			var carWidth = $('#car1').width();

			//get the width of the racetrack
			var raceTrackWidth = $(window).width() - carWidth;

			// generate a random # between 1 and 5000

			var raceTime1 = Math.floor( (Math.random() * 5000) + 1);
			var raceTime2 = Math.floor( (Math.random() * 5000) + 1);

			//set a flag variable to FALSE by default

			var isComplete = false;

			// set a flag variable to FIRST by default
			var place = 'first';

			//animate car 1
			$('#car1').animate({

				//move the car width of the racetrack
				left: raceTrackWidth

			}, raceTime1, function() {

					//animation is complete

					//run a function

					checkIfComplete();

					// give some text feedback in the race info box

					$('#raceInfo1 span').text('Finished in ' + place +
					 ' place and clocked in at ' + raceTime1 + ' milliseconds!');


			});


//animate car 2
		$('#car2').animate({

				//move the car width of the racetrack
				left: raceTrackWidth

			}, raceTime2, function() {

					//animation is complete

					//run a function

					checkIfComplete();

					// give some text feedback in the race info box

					$('#raceInfo2 span').text('Finished in ' + place +
					 ' place and clocked in at ' + raceTime2 + ' milliseconds!');


			});

		//reset
		$('#reset').click(function(){
			$('.car').css('left', '0');
			$('.raceInfo span').text('');
		})

		});

		