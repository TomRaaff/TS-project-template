export default function addClick() {
	document.addEventListener('click', function (event: MouseEvent) {
		alert('You clicked me!');
	}, false);
	console.log('some-code.ts is loaded');
}
