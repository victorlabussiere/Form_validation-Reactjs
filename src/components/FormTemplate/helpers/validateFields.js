function validateField(step, callback) {
    let fieldsets = document.querySelectorAll('form fieldset')
    let inputs = []
    fieldsets[step].querySelectorAll('input').forEach(e => inputs.push(e))

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

    return callback()
}

export { validateField }