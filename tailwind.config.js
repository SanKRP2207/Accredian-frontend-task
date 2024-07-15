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
        'custom-imageh': "url('https://s3-alpha-sig.figma.com/img/f8bf/9271/2c05e77a4b76d26c35bb05a554cb6838?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gCEL5dcPrIEYoe8w6frkh0lXLLj-Nm0SqTYpYfgaGc1Ug-HZHsr3pBBN10IkZvg9aTR3tPLFv~~zx6ElFqlyvyYS7q8qF8HWiFQ2hySDXIFL5bpZ04q8ggm822hGPfFUJ1IEGAiVvF5c7R9tRs9-TaSJLVloFXvQ9RhaVs1VxGVVwKD3AoiN8Y0Yar5zwLLJCW3zEa9WHBbn3wmJYrT0q~Lv55J7uhsSPS~nZ2wKk-N3KUljvpVa-QsCkQ8NRE69JNRXVQOCwytik1O1pvts2tOTlecyQoyKPkoif8nuQWQZlZaKhJOzbRhT1v-NnvQ8t2Ptixsbl1D0cSRhn-5MAQ__')",
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

