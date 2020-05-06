# Approach and Process
What in my process and approach to this project would I do differently next time?
- Plan more before starting!! The credit cards were too much to add in and I should've categorised them so that my JSX file could render the different cards (eg. no minimum spend, multiple thresholds, category based) before adding in the cards and thresholds table. 


What in my process and approach to this project went well that I would repeat next time?
- Showing my website to my friends who saw a use for it which keeps me going


# Code and Code Design
What in my code and program design in the project would I do differently next time?
- Thinking the changing navbar for login and logout is too hard so I didn't try
- Conditionally rendering jsx files instead of just creating separate jsx files

``` 
console.log('From the index.jsx file', this.props.result);
		if (this.props.result === undefined) {
			console.log("it's a message")
			return (
				<Layout>
					<h1 className='text-center m-3 display-3'>No cards yet</h1>
					<div className='text-center col-12'>
						<a href='/cards/new'>
							<button type='button' class='btn btn-outline-dark btn-lg m-3'>
								Add a new card &raquo;
							</button>
						</a>
					</div>
				</Layout>
			);
		}
``` 


What in my code and program design in the project went well? Is there anything I would do the same next time?
- Github is great, because I can work on the same project in both my laptop and home PC. 
- Switching from npm to yarn solved all the issues with node in my home PC. 
- On Heroku, trying out 'npm start' to see what the error is -> going back to the basic problem


# WDI Unit 2 Post Mortem
What habits did I use during this unit that helped me?
- Working on a little bit each time
- Writing down the MVC circuit, writing down the AJAX steps


What habits did I have during this unit that I can improve on?
- Use more paper to plan things out and write down bugs and features so I remember them for later


# How is the overall level of the course during this unit? (instruction, course materials, etc.)
- Supportive learning environment
- The floobits is a bit of a mess, it would be nicer if Akira started new files instead of continuously building on them, and also if he named his variables better