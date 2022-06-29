const maxLongPassword = 32
const minLongPassword = 8
const numbers = '1320657984'
const symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"'
const uppercase = 'IQYMTCNJSRVGFAWBUKXEÑOPDZHL'
const lowercase = 'vgbshqjpunecñfoakzxdwiyrltm'
const configDefault = {
    passwordLength: 24,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    actives: function () {
        return +this.numbers + +this.symbols + +this.lowercase + +this.uppercase
    },
}
const settingConfig = [
    {
        name: 'números',
        type: 'numbers',
    },
    {
        name: 'símbolos',
        type: 'symbols',
    },
    {
        name: 'mayúsculas',
        type: 'uppercase',
    },
    {
        name: 'minúsculas',
        type: 'lowercase',
    },
]

const infoSecuritySettings = {
    good: {
        icon: 'Check',
        text: 'Contraseña muy segura',
        color: '#07bd3a',
        backColor: '#44bd67',
        percent: 100,
    },
    medium: {
        icon: 'Warning',
        text: 'Contraseña media segura',
        color: '#ffa500',
        backColor: '#ffa50059',
        percent: 50,
    },
    bad: {
        icon: 'Cancel',
        text: 'Contraseña insegura',
        color: '#ed1374',
        backColor: '#ed13743b',
        percent: 20,
    },
}

/** Result */
const resultConfig = {
    actionResetTitle: 'Crear nueva contraseña',
    actionCopyTitle: 'Copiar contraseña',
}

export {
    maxLongPassword,
    minLongPassword,
    numbers,
    symbols,
    uppercase,
    lowercase,
    configDefault,
    settingConfig,
    resultConfig,
    infoSecuritySettings,
}
