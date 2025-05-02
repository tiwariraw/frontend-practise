// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
// 	// window.history.pushState({ name: "Ashish Tiwari" }, 'About Us', 'http://127.0.0.1:5501/about');
// 	// console.log(window.history);
// 	// console.log(window.history.state);

// 	window.history.pushState(null, '', 'about');
// 	window.history.pushState(null, '', 'contact');
// })

const user = {
	name: 'ashish',
	outer1: () => {
		console.log(this)
	},
	outer2() {
		console.log(this)
	}
}

user.outer1();
user.outer2();

