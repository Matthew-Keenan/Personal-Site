module.exports = {
content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
],
theme: {
    extend: {
    colors: {
      black: {
        DEFAULT: '#111111',
        900: '#111111',
        800: '#1a1a1a',
        700: '#222222',
      },
      white: {
        DEFAULT: '#ffffff',
        100: '#f9f9f9',
        200: '#f3f3f3',
      },
      gray: {
        50: '#f8f9fa',
        100: '#f1f3f4',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111111',
      },
      primary: {
        50: '#f8f9fa',
        100: '#f1f3f4',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#222222',
        800: '#1a1a1a',
        900: '#111111',
      },
    },
    fontFamily: {
        sans: ['Inter', 'sans-serif'],
    },
    },
},
plugins: [],
}