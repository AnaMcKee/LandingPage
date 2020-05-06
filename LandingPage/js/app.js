/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
// const firstLi = document.querySelector('li');
const sections = document.querySelectorAll('section');
const navContainer = document.querySelector('.navbar__menu');
let containerCount = document.getElementsByClassName("landing__container").length;
/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
	// select the section elements, it will give us an array to iterate

	for (let section of sections){
		const newLi = document.createElement('li');
		newLi.innerHTML = section.dataset.nav;
		const ulist = document.getElementById('navbar__list');
		ulist.appendChild(newLi);
		// adding id of the section to li
		newLi.dataset.nav = section.id;
		// innerText of the id
        newLi.innerText = section.dataset.nav;

	}
}

function addClass() {
	const navSection = document.querySelectorAll('li');
	for (let i of navSection){
	  	i.classList.add('menu__link');

  }
}

// Add class 'active' to section when near top of viewport
function makeActive() {
    for (const section of sections) {
        // get the position of each section
        const box = section.getBoundingClientRect();
        const activeLink = document.querySelector('li[data-nav="' + section.id + '"]');
        // if the section is in view
        if (box.top <= 150 && box.bottom >= 150 ){
            // Apply active state on the current section and the corresponding Nav link.
            section.classList.add('your-active-class');
            activeLink.classList.add('active');
        }else{
            //Remove active state from other section and corresponding Nav link.
            section.classList.remove('your-active-class');
            activeLink.classList.remove('active');
        }
    }

}

function clickNav (){
    navContainer.addEventListener('click', function(e){
        const elementToScrollTo = document.querySelector('#'+e.target.dataset.nav);
        elementToScrollTo.scrollIntoView();
    });
}


// /**
//  * End Main Functions
//  * Begin Events
//  *
// */
// // Build menu
buildNav();

// // Scroll to section on link click

// // Set sections as active
addClass();
document.addEventListener('scroll', function() {
    makeActive();
});

clickNav();