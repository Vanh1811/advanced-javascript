function initDropdown(dropdownId){
    const toggleButton = document.querySelector(`[data-dropdown-id="${dropdownId}"]`)
    const dropdownMenu = document.getElementById(dropdownId)

    if (toggleButton && dropdownMenu){
        toggleButton.addEventListener('click', () => toggleDropdown(dropdownMenu))
        toggleButton.addEventListener('mouseenter', () => toggleDropdown(dropdownMenu, true))

        const dropdownContainer = document.querySelector('.dropdown-container')
        dropdownContainer.addEventListener('mouseleave', () => toggleDropdown(dropdownMenu, false))
    }
}

function toggleDropdown (dropdownMenu, show){
    if(show === undefined){
        show = !dropdownMenu.style.display || dropdownMenu.style.display === 'none'
    }

    dropdownMenu.style.display = show ? 'block' : 'none'
}

export { initDropdown }