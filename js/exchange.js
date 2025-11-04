(() => {
	let pricePounds;
	const exchangeRate = 0.86;
	let priceEuros;
	
	const convertForm = document.getElementById('myForm');
	const msg = document.getElementById('msg');
	
	convertForm.addEventListener('submit', (ev) => {
		// Prevent the default form submission (which would refresh the page)
		ev.preventDefault();
		
		priceEuros = 0;
		
		// parseFloat() converts the string "12.5" into the number 12.5
		pricePounds = parseFloat(document.getElementById('pounds').value);
		
		if(isNaN(pricePounds)){
			msg.style.display = "block";
			msg.innerHTML = "You must enter a number";
			msg.classList.add('error');
		} else {
			if(pricePounds === 0){
				msg.style.display = "block";
				msg.innerHTML = "You must enter more than zero.";
			    msg.classList.add('error');
			} else {
				priceEuros = pricePounds * exchangeRate;
				msg.style.display = "block";
				
				// Round the result to 2 decimal places (e.g., 8.6 becomes "8.60")
				priceEuros = priceEuros.toFixed(2);
				
				// Display the result with the euro symbol (&euro; = €)
				msg.innerHTML = "You will get &euro;" + priceEuros;
				msg.classList.remove('error');
			}
		}
	});
	
	// Add an event listener that triggers when the pounds input field gains focus
	// (when the user clicks into the field)
	document.getElementById('pounds').addEventListener('focus', (ev) => {
		ev.target.value = "";
		msg.innerHTML = "";
        msg.classList.remove('error');
	});
})(); // The () at the end immediately invokes (runs) the function