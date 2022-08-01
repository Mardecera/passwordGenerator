const languages = {
   spanish: {
      name: 'spanish',
      title: 'Generador de contraseñas',
      levelPassword: {
         labels: {
            good: 'Contraseña muy segura',
            medium: 'Contraseña media segura',
            bad: 'Contraseña insegura',
         },
         title: 'Nivel de seguridad de la contraseña',
      },
      charactersPassword: {
         labels: [
            'Incluye números',
            'Incluye símbolos',
            'Incluye mayúsculas',
            'Incluye minúsculas',
         ],
         notification:
            'Se debe tener al menos un carácter para la contraseña. 😢',
      },
      longPassword: {
         label: 'Longitud de contraseña',
      },
      refreshPassword: {
         label: 'Nueva contraseña',
         title: 'Crear nueva contraseña',
      },
      copyPassword: {
         label: 'Copiar contraseña',
         title: 'Copiar contraseña',
         notification: 'Contraseña copiada! 😊',
      },
   },
   english: {
      name: 'english',
      title: 'Password generator',
      levelPassword: {
         labels: {
            good: 'Very strong password',
            medium: 'Medium strong password',
            bad: 'Weak password',
         },
         title: 'Password security level',
      },
      charactersPassword: {
         labels: [
            'Includes numbers',
            'Includes symbols',
            'Includes uppercase',
            'Includes lowercase',
         ],
         notification: 'Must have at least one character for password. 😢',
      },
      longPassword: {
         label: 'Password length',
      },
      refreshPassword: {
         label: 'New Password',
         title: 'Create new password',
      },
      copyPassword: {
         label: 'Copy password',
         title: 'Copy password',
         notification: 'Password copied! 😊',
      },
   },
}

export default languages
