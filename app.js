/**
 * Search area
 */
const searchButton = document.querySelector('.bx-search');
const searchSection = document.querySelector('.search-area');

searchButton.addEventListener('click', e => {
    showSection(searchSection, searchButton);
})

/**
 * Drop menu
 */
const menuButton = document.querySelector('.bx-menu');
const dropMenu = document.querySelector('.drop-menu');

menuButton.addEventListener('click', e => {
    showSection(dropMenu, menuButton)
})

/**
 * Function that accepts the section as a argument (section, button)
 * - add new class name to it
 * - check if the section has the class name or not, 
 *  - if has a class name, then change the opacity of the button, to be focus
 *  - else that keep it default
 */

function showSection (section, button) {
    section.classList.toggle('show-section');
    if (section.classList.contains('show-section')) {
        button.style.opacity = '.7'
    } else {
        button.style.opacity = '1'
    }
}

const buttons = document.querySelectorAll('.additional-buttons button');

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log('hi');
    })
})
