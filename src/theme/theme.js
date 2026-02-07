import {
    bwThemeboy, bwThemegirl, eduBlack, expBlack, contactsBlack
} from './images'

export const darkTheme = {
    type: 'dark',
    primary: '#ffffff',
    primary400: '#f0f0f0',
    primary600: '#e0e0e0',
    primary80: '#ffffffcc',
    primary50: '#ffffff80',
    primary30: '#ffffff4d',
    secondary: '#0a0a0a',
    secondary70: '#0a0a0ab3',
    secondary50: '#0a0a0a80',
    tertiary: '#f5f5f5',
    tertiary80: '#f5f5f5cc',
    tertiary70: '#f5f5f5b3',
    tertiary50: '#f5f5f580',
    aboutimg1: bwThemeboy,
    aboutimg2: bwThemegirl,
    eduimg: eduBlack,
    expimg: expBlack,
    contactsimg: contactsBlack
}

export const lightTheme = {
    type: 'light',
    primary: '#000000',
    primary400: '#1a1a1a',
    primary600: '#0a0a0a',
    primary80: '#000000cc',
    primary50: '#00000080',
    primary30: '#0000004d',
    secondary: '#fafafa',
    secondary70: '#fafafab3',
    secondary50: '#fafafa80',
    tertiary: '#1a1a1a',
    tertiary80: '#1a1a1acc',
    tertiary70: '#1a1a1ab3',
    tertiary50: '#1a1a1a80',
    aboutimg1: bwThemeboy,
    aboutimg2: bwThemegirl,
    eduimg: eduBlack,
    expimg: expBlack,
    contactsimg: contactsBlack
}

export const bwThemeDark = darkTheme;
export const bwThemeLight = lightTheme;