const cards = document.querySelectorAll('.card')
window.onload = function () {
	cards.forEach((card) => {
		card.addEventListener('click', function () {
			let link = card.querySelector('.watch-more-video').parentElement
            location.href=link.href
            console.log(location.href);
		})
	})
}
