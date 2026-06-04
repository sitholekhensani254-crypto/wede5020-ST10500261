// Contact Form
const contactForm = document.querySelector(".contact-section form");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
            }
        });

        if (valid) {
            alert("Thank you! Your message has been sent successfully.");
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
}

// Enquiry Form
const enquiryForm = document.querySelector("form");

if (enquiryForm && !contactForm) {
    enquiryForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = enquiryForm.querySelector('input[type="text"]').value;
        const email = enquiryForm.querySelector('input[type="email"]').value;
        const message = enquiryForm.querySelector("textarea").value;

        if (name && email && message) {
            alert("Your enquiry has been submitted.");
            enquiryForm.reset();
        } else {
            alert("Please complete all fields.");
        }
    });
}

// Product Cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });

    card.addEventListener("click", () => {
        alert("Opening " + card.innerText);
    });
});
const searchBar = document.getElementById("searchBar");

if (searchBar) {
    searchBar.addEventListener("keyup", function() {
        const search = searchBar.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();

            if (text.includes(search)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}
