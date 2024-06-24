async function importPhrases() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        
        if(response.ok) {
            const phrases = await response.json()
            let id = document.querySelector('#advice__card__id')
            let txt = document.querySelector('#advice__card__txt')
            id.textContent = `ADVICE #${phrases.slip.id}`
            txt.textContent = `"${phrases.slip.advice}"`
        } else {
            throw new Error('Failed to fetch advice')
        }
    } catch (error) {
        console.log(error)
    }
}

document.querySelector('.advice__card__dice').addEventListener('click', function() {
    var button = this
    button.classList.remove("test")
    void button.offsetWidth
    button.classList.add("test")
    importPhrases().catch((error) => console.log(error))
})