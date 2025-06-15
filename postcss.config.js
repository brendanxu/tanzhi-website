// postcss.config.js

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    '@tailwindcss/postcss': {}, // <-- 这里的单引号是关键！
    autoprefixer: {},
  },
}

export default config