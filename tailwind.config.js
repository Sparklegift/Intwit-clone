/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {


      scale: {
        '200': '2.00',
      },

      height: {
        '50': '40rem',
        '100': '100rem',
      },

      width: {
        '100': '100rem',
        '50': '50rem',
        '8.5/12': '60%',
        '97': '25rem',
        '98': '30rem',
        '3.5/12': '31%',
        '5.5/12': '43%',
      },


      inset: {
        '97': '28rem',
        '98': '30rem',
        '99': '40rem'
      },

      fontSize: {
        '2.5xl': '26px',
      },


      fontFamily: {
        'satReg': 'Satoshi Regular',
        'satIta': 'Satoshi Italic',
        'satLigt': 'Satoshi Light',
        'satMed': 'Satoshi Medium',
        'satBold': 'Satoshi Bold',

      },

      colors: {
        'Primary': '#D7AD5E',
        'hash': '#4E4D4D',
        'hash1': '#202020',
        'hash2': '#D3D3D3',
        'Whitey': '#F6F6F6',
        'option': '#E7D3AF',
        'dex': '#FFF8F8',
      },

      padding: {
        '15': '3.8rem',
      }
    },
  },
  plugins: [],
}

