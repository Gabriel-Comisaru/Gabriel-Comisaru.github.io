const modal = document.getElementById("foodModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

const foodImages = {
	sushi: "https://th.bing.com/th/id/R.9228eda2c25f410f9a83e1667b2f1104?rik=%2fW6sdh1BIx%2bT1A&pid=ImgRaw&r=0",
	pasta: "https://th.bing.com/th/id/OIP.7Z_920eymh8JocugnBWFYwHaHa?w=194&h=195&c=7&r=0&o=5&pid=1.7",
	shrimps: "https://th.bing.com/th/id/R.d814036f36289b588eabb83bdeb086f5?rik=kR6JQRs7xgrOTQ&pid=ImgRaw&r=0",
	fries: "https://th.bing.com/th/id/OIP.ArPgw_JVtntN3Fh7xGMMSgHaHa?rs=1&pid=ImgDetMain"
};

document.querySelectorAll(".food").forEach(item => {
	item.addEventListener("click", () => {
		const food = item.dataset.food;
		modal.style.display = "block";
		modalImg.src = foodImages[food];
		captionText.textContent = item.textContent;
	})
});

closeBtn.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target === modal) {
		modal.style.display = "none";
	}
};

