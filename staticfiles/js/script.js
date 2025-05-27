document.addEventListener("DOMContentLoaded", function () {
	// For Custom Select Arrow
	const select = document.getElementById("formDropdown");

	if (select) {
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
	}

	// For modal

	const addMediaItem = document.getElementById("addMediaItem");
	const addModal = document.getElementById("addModal");
	const closeModalBtn = document.getElementById("closeModalBtn");

	addMediaItem.addEventListener("click", openAddModal);
	closeModalBtn.addEventListener("click", closeAddModal);

	function openAddModal() {
		addModal.classList.add("active");
		document.body.style.overflow = "hidden";
	}

	function closeAddModal() {
		addModal.classList.remove("active");
		document.body.style.overflow = "auto";
	}
});
