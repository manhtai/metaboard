const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./src/**/*.{ts,tsx,html}",
    ],
    options: {
      whitelistPatterns: [/^bg-/, /^text-/],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        'body': { color: config('theme.colors.blue.900') },
      })
    })
  ],
}
