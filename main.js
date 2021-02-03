const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration:'1000',
    reset:true
})

sr.reveal('.home_title', {})
sr.reveal('.home_scroll', {delay: 100})
sr.reveal('.home_img', {origin:'right', delay: 150})

sr.reveal('.about_img', {delay: 100})
sr.reveal('.about_subtitle', {delay: 20})
sr.reveal('.about_profession', {delay:100})
sr.reveal('.about_text', {delay: 100})
sr.reveal('.about_social-icon', {delay: 100, interval: 100})

sr.reveal('.gallery_img', {interval: 100})


sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_name', {distance: '10px', delay: 50, interval: 50})
sr.reveal('.skills_img', {delay: 100})

sr.reveal('.portfolio_img', {interval: 100})

sr.reveal('.contact_subtitle', {})
sr.reveal('.contact_text', {interval: 100})
sr.reveal('.contact_input', {delay: 100})
sr.reveal('.contact_button', {delay: 150})

/*DARK MODE*/

const options = {
    bottom: '32px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }

  const darkmode = new Darkmode(options);

    darkmode.showWidget();