// HANDLES
const panels = document.querySelectorAll('.panel')
const tabs = document.querySelectorAll('.tab')

const panel1 = document.querySelector('.panel-1')
const panel2 = document.querySelector('.panel-2')
const panel3 = document.querySelector('.panel-3')

// FUNCTIONS
const onTabClick = (e) => {
    console.log(e.target)
    // Remove red underline from all tabs
    tabs.forEach((tab) =>
        tab.firstElementChild.classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    )
    // Add red underline to selected tab
    e.target.classList.add('border-softRed', 'border-b-4')

    // Add hidden class to all panels
    panels.forEach((panel) => {
        panel.classList.add('hidden')

        // Activate tab based on target
        // e.target.getAttribute('data-target')
        panel.classList.contains(e.target.dataset.target) &&
            panel.classList.remove('hidden')
    })
}

// EVENT LISTENERS
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))
