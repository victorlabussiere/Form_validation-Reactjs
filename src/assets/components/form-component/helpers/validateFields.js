function validateField(callback) {
    let fieldsets = document.querySelectorAll('form fieldset')
    let inputs = []
    fieldsets.forEach(e => e.querySelectorAll('input').forEach(i => {
        inputs.push(i)
    }))

    let count = 0

    for (let input of inputs) {
        input.style = 'border: unset'
        if (!input.value) {
            count++
            input.style = 'border: 2px solid red'
            if (count > 0) {
                input.focus()
                return
            };
        }
    }

    callback()
}

export { validateField }