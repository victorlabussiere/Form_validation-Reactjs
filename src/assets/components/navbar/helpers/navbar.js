let liClasses = function (step, n) {
    let classesLi = [
        ['link active', 'link', 'link'],
        ['link checked', 'link active', 'link'],
        ['link checked', 'link checked', 'link active']
    ]

    return classesLi[step][n];
}

let iconClasses = function (step, n) {
    let classesIcons = [
        ['material-icons active', 'material-icons', 'material-icons'],
        ['material-icons checked', 'material-icons active', 'material-icons'],
        ['material-icons checked', 'material-icons checked', 'material-icons active'],
    ]

    return classesIcons[step][n]
}

export { iconClasses, liClasses }