module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 600,
      extrabold: 700,
    },
    colors: {
      primary: {
        50: '#F5FAFA',
        100: '#E0F1F1',
        200: '#C8E7E7',
        500: '#82BDBD',
        600: '#4BAEAE',
        700: '#199898',
        800: '#007979',
        900: '#004747',
      },
      pink: {
        50: '#FCF8FA',
        600: '#CC8DAD',
        700: '#BF7098',
        800: '#AD487B',
      },
      gray: {
        50: '#F9F9F9',
        100: '#ECEEEE',
        700: '#808B8B',
        800: '#616F6F',
        900: '#344242',
      },
      orange: '#F2994A',
      yellow: '#F2C94C',
      black: '#344242',
      white: '#FFFFFF',
    },
    fontSize: {
      xs: '1rem',
      sm: '1.25rem',
      base: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
      '2xl': '3rem',
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero1-pattern': "url('/img/Hero1.png')",
        'benefit-pattern': "url('/img/benefit-bg.png')",
      }),
    },
  },
  plugins: [],
};
