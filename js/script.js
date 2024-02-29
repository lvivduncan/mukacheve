"strict mode"

const body = document.body

{
	const menuButton = document.getElementById("menu-button")
	const menu = document.getElementById("menu")

	menuButton.addEventListener("click", () => {
		menu.classList.toggle("active")
		menuButton.classList.toggle("active")
	})	
}

// modal search form
if(document.querySelector('#form-modal')){

	const formModal = document.querySelector('#form-modal')
	const formModalInput = formModal.querySelector('input[type="search"]')

	formModalInput.addEventListener('click', () => {
		formModal.className = 'active'
		body.className = 'transparent'
	})

	const formClose = document.querySelector('#form-close')
	formClose.addEventListener('click', () => {
		formModal.className = ''
		body.className = ''	
	})

	document.addEventListener('keydown', function(event){
		if(event.key == 'Escape'){
			formModal.className = ''
			body.className = ''	
		}
	})

	const bodyCover = document.querySelector('#body-cover')
	bodyCover.addEventListener('click', () => {
		formModal.className = ''
		body.className = ''			
	})
}