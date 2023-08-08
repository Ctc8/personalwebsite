// const darkModePref = window.matchMedia('(prefers-color-scheme: dark)').matches;
// if (darkModePref) {
//     document.body.classList.add('dark-mode');
// }

function toggleDarkMode() {
    // Education section
    let educationHeaderDark = document.getElementById('educationHeader') 
    educationHeaderDark.classList.toggle('education-Header-dark-mode')

    let educationBackgroundDark = document.getElementById('educationBackground')
    educationBackgroundDark.classList.toggle('education-Background-dark-mode')

    let educationContainerDark = document.getElementById('educationContainer')
    educationContainerDark.classList.toggle('education-Container-dark-mode')

    let educationCardDark = document.querySelectorAll('.educationCard')
    educationCardDark.forEach(element => {
        element.classList.toggle('education-Card-dark-mode')
    })

    // About section
    document.body.classList.toggle('main-body-dark-mode')

    let aboutHeaderDark = document.getElementById('aboutHeader')
    aboutHeaderDark.classList.toggle('about-Header-dark-mode')

    let aboutCardDark = document.getElementById('about-card')
    aboutCardDark.classList.toggle('aboutCard-dark-mode')

    // Skills section
    let skillsHeaderDark = document.getElementById('skillsHeader')
    skillsHeaderDark.classList.toggle('skills-Header-dark-mode')

    let skillsBackgroundDark = document.getElementById('skillsBackground')
    skillsBackgroundDark.classList.toggle('skills-Background-dark-mode')

    let skillsCommentDark = document.getElementById('skillsComment')
    skillsCommentDark.classList.toggle('skills-Comment-dark-mode')

    let iconsTextDark = document.querySelectorAll('.icons-text')
    iconsTextDark.forEach(element => {
        element.classList.toggle('iconsText-dark-mode')
    })

    let skillsSubHeader = document.querySelectorAll('.skillsSubHeader')
    skillsSubHeader.forEach(element => {
        element.classList.toggle('skillsSubHeader-dark-mode')
    })

    let iconsDark = document.querySelectorAll('.icons-img')
    iconsDark.forEach(element => {
        element.classList.toggle('iconsImg-dark-mode')
    })

    // Portfolio section
    let portfolioBackgroundDark = document.getElementById('portfolioBackground')
    portfolioBackgroundDark.classList.toggle('portfolio-Background-dark-mode')

    let projectCardDark = document.querySelectorAll('.projectCard')
    projectCardDark.forEach(element => {
        element.classList.toggle('project-Card-dark-mode')
    })

    let portfolioHeaderDark = document.getElementById('portfolioHeader')
    portfolioHeaderDark.classList.toggle('portfolio-Header-dark-mode')

    let projectToolsDark = document.querySelectorAll('.projectTools')
    projectToolsDark.forEach(element => {
        element.classList.toggle('projectTools-dark-mode')
    })

    // Closing section
    let closingDark = document.getElementById('closingContainer')
    closingDark.classList.toggle('closingContainer-dark-mode')

}

const darkModeButton = document.getElementById('dark-mode-btn')
darkModeButton.addEventListener('click', toggleDarkMode)