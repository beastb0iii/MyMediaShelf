// For Custom Select Arrow
const select = document.getElementById("formDropdown");

const closeArrow = () => {
	setTimeout(() => {
		select.classList.remove("open");
	}, 100);
};

select.addEventListener("focus", () => {
	select.classList.add("open");
});

select.addEventListener("blur", closeArrow);
select.addEventListener("change", closeArrow);
