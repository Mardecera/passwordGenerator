const getInfoSecurity = (passwordLength) => {
    let icon = ''
    let text = ''
    let color = ''
    let backColor = ''
    let percent = 100

    if (passwordLength >= 14) {
        icon = 'Check'
        text = 'Contraseña muy segura'
        color = '#07bd3a'
        backColor = '#44bd67'
        percent = 100
    } else if (passwordLength < 14 && passwordLength > 10) {
        icon = 'Warning'
        text = 'Contraseña media segura'
        color = '#ffa500'
        backColor = '#ffa50059'
        percent = 50
    } else {
        icon = 'Cancel'
        text = 'Contraseña insegura'
        color = '#ed1374'
        backColor = '#ed13743b'
        percent = 20
    }
    return { icon, text, color, backColor, percent }
}

export default getInfoSecurity
