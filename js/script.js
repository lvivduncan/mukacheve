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



// 
{
    const scrolls = document.querySelectorAll('.notice-scroll')
    
    for(let i = 0; i<scrolls.length; i++){
        
        let interval 

        const scroll = scrolls[i]

        const ul = scroll.querySelector('ul')

        let li = ul.querySelectorAll('li')

        if (li.length <= 1) {

            li.forEach(element => ul.append(element.cloneNode(true)))
            
            li.forEach(element => ul.append(element.cloneNode(true)))

            li = scroll.querySelectorAll('li')
        }

        scroll.innerHTML += '<div class="notice-nav"><span class="left"></span><span class="right"></span></div>'

        scroll.addEventListener('click', event => {

            const ul = scroll.querySelector('ul')

            if (event.target.className == 'left') {

                const last = ul.lastElementChild
                ul.prepend(last)

                ul.style.transition = 'none'
                ul.classList.add('to-right')
                
                setTimeout(() => {

                    ul.classList.remove('to-right')
                    ul.style.transition = '.5s'
                }, 50)
            }
        })

        scroll.addEventListener('click', event => {
            const ul = scroll.querySelector('ul')

            if (event.target.className == 'right') {

                const first = ul.firstElementChild
                ul.append(first)

                ul.style.transition = 'none'

                ul.classList.add('to-left')

                setTimeout(() => {

                    ul.classList.remove('to-left')
                    ul.style.transition = '.5s'
                }, 50)
            }
        })

        interval = setInterval(() => {

            const ul = scroll.querySelector('ul')

            const first = ul.firstElementChild

            ul.append(first)

            ul.style.transition = 'none'

            ul.classList.add('to-left')

            setTimeout(() => {

                ul.classList.remove('to-left')
                ul.style.transition = '.5s'
            }, 50)
         
        }, 3500)

        scroll.addEventListener('mouseover', () => {
            
            clearInterval(interval)
        })
        
        scroll.addEventListener('mouseout', () => {

            interval = setInterval(() => {

                const ul = scroll.querySelector('ul')

                const first = ul.firstElementChild
                ul.append(first)

                ul.style.transition = 'none'
                ul.classList.add('to-left')

                setTimeout(() => {

                    ul.classList.remove('to-left')
                    ul.style.transition = '.5s'
                }, 50)
            
            }, 3500)          
        })
    }
}