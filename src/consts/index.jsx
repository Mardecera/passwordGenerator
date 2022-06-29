const maxLongPassword = 32
const minLongPassword = 8
const numbers = '1234567890'
const symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"'
const uppercase = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnñopqrstuvwxyz'
const configDefault = {
    passwordLength: 24,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
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

export {
    maxLongPassword,
    minLongPassword,
    numbers,
    symbols,
    uppercase,
    lowercase,
    configDefault,
    settingConfig
}
