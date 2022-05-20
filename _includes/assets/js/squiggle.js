console.log("Hello");

if(!!window.IntersectionObserver){
	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
		if(entry.isIntersecting){
			console.log(entry);
			document.body.classList.add("header-not-at-top");
			observer.unobserve(entry.target);
		}
		});
	}, {rootMargin: "0px 0px -200px 0px"});
	document.querySelectorAll('#get-squiggle').forEach(item => { observer.observe(item) });
};

console.log("Whaaaaat");
