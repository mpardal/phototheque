const filter = document.querySelector('#filtre')

const mariage = document.querySelectorAll('.mariage')
const grossesse = document.querySelectorAll('.grossesse')
const bebe = document.querySelectorAll('.bebe')
const couple = document.querySelectorAll('.couple')
const portrait = document.querySelectorAll('.portrait')
const famille = document.querySelectorAll('.famille')
const bapteme = document.querySelectorAll('.bapteme')



    function getFilterValue (){
        mariage.innerText = mariage.style.display = 'none'
        const filterValue = document.querySelector('#filtre').value
        switch (filterValue){
            case 'mariageTheme':
                mariage.innerText = mariage.style.display = 'block'
                console.log(filterValue)
                break
            case 'grossesseTheme':
                console.log(filterValue)
                break
            case 'bebeTheme':
                console.log(filterValue)
                break
            case 'coupleTheme':
                console.log(filterValue)
                break
            case 'portraitTheme':
                console.log(filterValue)
                break
            case 'familleTheme':
                console.log(filterValue)
                break
            case 'baptemeTheme':
                console.log(filterValue)
                break
            default:
                console.log(filterValue)
        }
    }

