var calcium = {type: "survey-multi-choice",
	       questions: [{prompt: "<p style='text-align:left;max-width:800px'>The recommended daily calcium intake for a 20-year-old is 1,000 milligrams (mg). One cup of milk contains 299 mg of calcium and one cup of juice contains 261 mg of calcium. Which of the following inequalities represents the possible number of cups of milk <i>m</i> and cups of juice <i>j</i> a 20-year-old could drink in a day to meet or exceed the recommended daily calcium intake from these drinks alone?</p>",
			    options: ["299<i>m</i> + 261<i>j</i> ≥ 1000","299<i>m</i> + 261<i>j</i> > 1000", "299/<i>m</i> + 261/<i>j</i> ≥ 1000", "299/<i>m</i> + 261/<i>j</i> > 1000"]}],
	       data: {answer: "0",
		      type_: "distractor"}
	       
	      }


var hotel = {type: "survey-multi-choice",
	     questions: [{prompt: "<p style='text-align:left;max-width:800px'>Aaron is staying at a hotel that charges $99.95 per night plus tax for a room. A tax of 8% is applied to the room rate, and an additional onetime untaxed fee of $5.00 is charged by the hotel. Which of the following represents Aaron’s total charge, in dollars, for staying <i>x</i> nights?</p>",
			  options: ["(99.5 + 0.08<i>x</i>)+5","1.08(99.95<i>x</i>) + 5", "1.08(99.95<i>x</i> +5)", "1.08(99.95 + 5)<i>x</i>"]}],
	     data: {answer: "1",
		   type_: "distractor"}
	    }

var profit = {type: "survey-multi-choice",
	      questions: [{prompt: "<p style='text-align:left;max-width:800px'>A company’s manager estimated that the cost C, in dollars, of producing n items is C equals 7 n plus 350. The company sells each item for $12. The company makes a profit when total income from selling a quantity of items is greater than the total cost of producing that quantity of items. Which of the following inequalities gives all possible values of <i>n</i> for which the manager estimates that the company will make a profit?</p>",
			   options: ["<i>n</i><70","<i>n</i><84","<i>n</i>>70","<i>n</i>>84"]}],
	      data: {answer: "2",
		   type_: "distractor"}
	     }

var primates = {type: "survey-multi-choice",
		questions: [{prompt: "<p style='text-align:left;max-width:800px'>At a primate reserve, the mean age of all the male primates is 15 years, and the mean age of all female primates is 19 years. Which of the following must be true about the mean age <i>m</i> of the combined group of male and female primates at the primate reserve?</p>",
			     options: ["<i>m</i>=17", "<i>m</i> > 17", "<i>m</i> < 17", "15 < <i>m</i> < 19"]}],
		data: {answer: "3",
		   type_: "distractor"}
	       }


var gas = {type: "survey-multi-choice",
	   questions: [{prompt: "<p style='text-align:left;max-width:800px'>The gas mileage for Peter’s car is 21 miles per gallon when the car travels at an average speed of 50 miles per hour. The car’s gas tank has 17 gallons of gas at the beginning of a trip. If Peter’s car travels at an average speed of 50 miles per hour, which of the following functions <i>f</i> models the number of gallons of gas remaining in the tank <i>t</i> hours after the trip begins?</p>",
			options: ["<i>f</i>(<i>t</i>) = 17 - 21/(50<i>t</i>)", "f(<i>t</i>) = 17 - (50<i>t</i>)/21", "<i>f</i>(<i>t</i>) = (17 - 21<i>t</i>)/50", "<i>f</i>(<i>t</i>) = (17 - 50<i>t</i>)/21"]}],
	   data: {answer: "1",
		   type_: "distractor"}
	  }

var city = {type: "survey-multi-choice",
	    questions: [{prompt: "<p style='text-align:left;max-width:800px'>In planning maintenance for a city’s infrastructure, a civil engineer estimates that, starting from the present, the population of the city will decrease by 10 percent every 20 years. If the present population of the city is 50,000, which of the following expressions represents the engineer’s estimate of the population of the city <i>t</i> years from now?</p>",
			 options: ["50,000(0.1)^(20<i>t</i>)", "50,000(0.1)^(20/<i>t</i>)" , "50,000(0.9)^(20<i>t</i>)" , "50,000(0.9)^(20/<i>t</i>)"]}],
	    data: {answer: "1",
		   type_: "distractor"}
	   }

var distractor_questions = [calcium, hotel, profit, primates, gas, city]

var distractor_intro = {type: "html-keyboard-response",
			stimulus: "<p style='text-align:left;max-width:800px'>In this portion of the experiment, you will complete a series of math problems. You may use a calculator, pen/pencil and paper to solve the problems. Please take time and ensure your answers reflect your best effor. Press spacebar to continue.</p>",
			choices: [32],
			data: {type_: "instructions"}
		       }

distractor_questions = jsPsych.randomization.shuffle(distractor_questions)
// Divide the distractor questions into two sets
distractor_questions = [[distractor_intro, distractor_questions[0], distractor_questions[1], distractor_questions[2]],
			[distractor_intro, distractor_questions[3], distractor_questions[4], distractor_questions[5]]]


var intermediate1 = {type: "survey-multi-choice",
	    questions: [{prompt: "<p style='text-align:left;max-width:800px'>On Saturday afternoon, Armand sent <i>m</i> text messages each hour for 5 hours, and Tyrone sent text <i>p</i> messages each hour for 4 hours. Which of the following represents the total number of messages sent by Armand and Tyrone on Saturday afternoon?</p>",
			 options: ["9<i>mp</i>", "20<i>mp</i>" , "5<i>m</i> + 4<i>p</i>" , "4<i>m</i> + 5<i>p</i>"]}],
	    data: {answer: "3",
		   type_: "distractor"}
	   }


var intermediate2 = {type: "survey-multi-choice",
	    questions: [{prompt: "<p style='text-align:left;max-width:800px'>If 16 + 4<i>x</i> is 10 more than 14, waht is the value of 8<i>x</i>?</p>",
			 options: ["2", "6" , "16" , "80"]}],
	    data: {answer: "3",
		   type_: "distractor"}
	   }

var intermediate_trials = [distractor_intro, intermediate1, intermediate2]
