"strict mode"

const body = document.body

const menuButton = document.getElementById("menu-button")
const menu = document.getElementById("menu")

menuButton.addEventListener("click", () => {
	menu.classList.toggle("active")
	menuButton.classList.toggle("active")
})	

// modal window add news
const addNews = document.querySelector('#add-news')

document.querySelector('#feedback span').addEventListener('click', () => {
	addNews.className = 'active'
	body.className = 'transparent'

	// закриваємо примусово меню 
	menu.classList.remove("active")
	menuButton.classList.remove("active")
})

// натискаємо ескейп
document.addEventListener('keydown', function(event){
	if(event.key == 'Escape'){
		// форма пошуку є тільки на сторінці пошуку, тому перевірка
		if(document.querySelector('#form-modal')) document.querySelector('#form-modal').className = ''

		body.className = ''	
		addNews.className = ''
	}
})

// клік на документі поза формою
document.querySelector('#body-cover').addEventListener('click', () => {
	// форма пошуку є тільки на сторінці пошуку, тому перевірка
	if(document.querySelector('#form-modal')) document.querySelector('#form-modal').className = ''

	body.className = ''	
	addNews.className = ''		
})

// modal search form
if(document.querySelector('#form-modal')){

	const formModal = document.querySelector('#form-modal')
	const formModalInput = formModal.querySelector('input[type="search"]')

	formModalInput.addEventListener('click', () => {
		formModal.className = 'active'
		body.className = 'transparent'
	})

	document.addEventListener('keydown', function(event){
		if(event.key == 'Escape'){
			formModal.className = ''
			body.className = ''	
			addNews.className = ''	
		}
	})

	document.querySelector('#body-cover').addEventListener('click', () => {
		formModal.className = ''
		body.className = ''
		addNews.className = ''		
	})
}

// клік на хрестик (форма подати новину або форма пошуку)
document.body.addEventListener('click', function(event){
	if(event.target.id == 'form-close') {
		// форма пошуку є тільки на сторінці пошуку, тому перевірка
		if(document.querySelector('#form-modal')) document.querySelector('#form-modal').className = ''

		body.className = ''	
		addNews.className = ''	
	}
})

// media home page
{
    const headers = document.querySelectorAll('.masonry-header li')
    const mains = document.querySelectorAll('.masonry article')

    for(let i = 0; i < headers.length; i++){

        headers[i].addEventListener('click', function(){

            if(this.dataset.header === 'ALL') {

                for(let k = 0; k < mains.length; k++) {

                    mains[k].className = 'show'
                }
            } else {

                for(let k = 0; k < mains.length; k++){

                    if(mains[k].dataset.main.includes(headers[i].dataset.header)){

                        mains[k].className = 'show'
                    } else {
                        
                        mains[k].className = 'hidden'
                    }
                }            
            }


        })
    }
}