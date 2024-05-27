const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('mostrar-menu')
        toggle.classList.toggle('mostrar-icono')
    })
}

showMenu('nav-toggle', 'nav-menu')