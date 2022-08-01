const darkTheme = {
   name: 'dark',
   primaryColor: '#3e384a',
   secondaryColor: '#43d96d',
   tertiaryColor: '#eeeeee',
   quaternaryColor: '#5a5d6c',
   quinaryColor: '#5a5d6c',
   sextarioColor: '#293342',
   shadowBox: 'rgb(26 29 32 / 50%) 0px 8px 24px',
   settingsOutline: '0px',
   buttonSwitchThemeColor: '#ffa500',

   securityBarColor: {
      bad: '#f5549c',
      medium: '#ffa500',
      good: '#16ff57',
   },
}
const lightTheme = {
   name: 'light',
   primaryColor: '#476BB9',
   secondaryColor: '#33B35B',
   tertiaryColor: '#000000',
   quaternaryColor: '#FFFFFF',
   quinaryColor: '#ffffff',
   sextarioColor: '#ffa500',
   shadowBox: 'rgb(149 157 165 / 50%) 0px 8px 24px',
   settingsOutline: '1px solid rgba(209, 209, 209, 0.4)',
   buttonSwitchThemeColor: '#293342',

   securityBarColor: {
      bad: '#ed1374',
      medium: '#ffa500',
      good: '#07bd3a',
   },
}

const themes = {
   dark: darkTheme,
   light: lightTheme,
}

export default themes
