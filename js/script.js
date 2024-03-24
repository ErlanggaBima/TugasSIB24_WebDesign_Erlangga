let carousel = document.getElementById("carousel-container");
let slides = carousel.getElementsByClassName("mySlides");
let prev = document.createElement("button");
let next = document.createElement("button");
let dots = [];
let currentSlide = 0;

// Set the text content of the prev and next buttons
prev.textContent = "Previous";
next.textContent = "Next";

// Add the prev and next buttons to the carousel container
carousel.appendChild(prev);
carousel.appendChild(next);

// Add event listeners to the prev and next buttons
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

// Create the dots and add them to the carousel container
for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("span");
  dot.className = "dot";
  if (i === 0) dot.className += " active";
  dots.push(dot);
  carousel.appendChild(dot);
}

// Set the text content of the dots
for (let i = 0; i < dots.length; i++) {
  dots[i].textContent = `${i + 1} / ${slides.length}`;
}

// Set the display of the first slide to block
slides[currentSlide].style.display = "block";

// Set the interval for changing slides
setInterval(nextSlide, 3000);

// Function to show the previous slide
function prevSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide--;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  slides[currentSlide].style.display = "block";
  updateDots();
}

// Function to show the next slide
function nextSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  slides[currentSlide].style.display = "block";
  updateDots();
}

// Function to update the active dot
function updateDots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[currentSlide].classList.add("active");
}


// login
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // Di sini Anda bisa menambahkan logika untuk memeriksa kredensial
  // Misalnya, Anda dapat mengirimkan data ke server untuk memvalidasi login.
  // Untuk tujuan contoh, kita hanya akan mencetak kredensial yang diisi.
  console.log("Username:", username);
  console.log("Password:", password);
});

