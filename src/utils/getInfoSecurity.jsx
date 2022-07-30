import { configDefault } from '../consts'

const getInfoSecurity = (config) => {
   const passwordLength = +config.passwordLength
   const actives = config.actives()
   let key = ''

   switch (actives) {
      case 1:
         passwordLength < 16
            ? (key = 'bad')
            : passwordLength >= 16 && passwordLength <= 18
            ? (key = 'medium')
            : (key = 'good')
         break
      case 2:
         passwordLength < 10
            ? (key = 'bad')
            : passwordLength >= 10 && passwordLength <= 14
            ? (key = 'medium')
            : (key = 'good')
         break
      case 3:
         passwordLength < 9
            ? (key = 'bad')
            : passwordLength >= 9 && passwordLength <= 13
            ? (key = 'medium')
            : (key = 'good')
         break
      case 4:
         passwordLength < 9
            ? (key = 'bad')
            : passwordLength >= 9 && passwordLength <= 12
            ? (key = 'medium')
            : (key = 'good')
         break
   }

   return configDefault.infoSecurity[key]
}

export default getInfoSecurity
