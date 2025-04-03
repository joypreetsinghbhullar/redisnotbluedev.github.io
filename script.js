const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
	document.body.classList.toggle("dark-mode");
	localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load theme from local storage
if (localStorage.getItem("theme") === "dark") {
	document.body.classList.add("dark-mode");
}
