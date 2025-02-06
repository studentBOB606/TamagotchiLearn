    const openBtn = document.getElementById("openModal")
    const closeBtn = document.getElementById("closeModal")
    const modal = document.getElementById("modal")

    openBtn.addEventListener("click", () => {
        modal.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
    });

    document.addEventListener('DOMContentLoaded', function() {
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        const dropdownItems = document.querySelectorAll('.dropdown-item');

        dropdownToggle.addEventListener('click', function() {
            dropdownMenu.classList.toggle('show');
        });

        // Close the dropdown if clicked outside
        window.addEventListener('click', function(event) {
            if (!event.target.matches('.dropdown-toggle')) {
                if (dropdownMenu.classList.contains('show')) {
                    dropdownMenu.classList.remove('show');
                }
            }
        });

        // Add click event listeners to dropdown items
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                const selectedImage = item.getAttribute('data-image'); // Get the image URL
                document.body.style.backgroundImage = selectedImage; // Set the background image
                document.body.style.backgroundSize = 'cover'; // Ensure the image covers the entire background
                dropdownToggle.textContent = item.textContent; // Update the dropdown toggle text
                dropdownMenu.classList.remove('show'); // Close the dropdown
            });
        });
    });

