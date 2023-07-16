function controlDisplay(step, n) {
    let displayControl = [
        ['', 'hidden', 'hidden', 'hidden'],
        ['hidden', '', 'hidden', 'hidden'],
        ['hidden', 'hidden', '', 'hidden'],
        ['hidden', 'hidden', 'hidden', ''],
        ['hidden', 'hidden', 'hidden', 'hidden'],
    ]
    return displayControl[step][n]
}

export { controlDisplay }