      var faqs = document.querySelectorAll('.faq-list li');

        // Loop through each FAQ item
        faqs.forEach(function(faq) {
            // Add click event listener
            faq.addEventListener('click', function() {
                // Toggle the 'answer' class for the clicked FAQ item
                this.classList.toggle('answer');
            });
        });
		      // Function to display a pop-up message when the FAQ page loads
        window.onload = function() {
            alert("Welcome to FAQs! Please submit your details in the Contact Us page to reach you back.");
        };
  