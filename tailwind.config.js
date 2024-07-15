/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1A73E826',
        'custom-white': '#EEF5FF',
      },
      spacing: {
        '623': '623px',
        '28': '28px',
        '12': '12px',
      },
      fontSize: {
        '16.88': '16.88px',
      },
      lineHeight: {
        '28': '28px',
      },
      backgroundImage: {
        'custom-image': "url('https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KBHxy6DzW-bNyusAD84Pqb0SUQ~uGqreK8GToTu88B4W9-YKBm4KtNNUtsmzCXJu1iIrYU-911fT4FNKk2p5jFgQebLluxDLfyx81DFNXu~b0iUjJnPi8GOJe0WbtGCBIjH-MUiuCFzP5onWqzycTnK4huW~SiLGnndleLCIDMirSxA5LZ2HtUHbWVCxGFkGSl9E-RDDXQ1mU4rbKzm~FHztwXJaZmqSth86Ac5SVHu7gjdg-GLDbLwQcMxST2VK1muqNXQynf-5VhWbCKX~44xrdcxMiSzUmpRcufbTpeQfLq~Row-t5WpBbRPWbQsU0mKqZDXrTYmETsiLBGYBgw__')",
        'height': '0.1px',
        'width':'0.1px',
      },
      borderRadius: {
        'none': '0',
        'sm': '10px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

