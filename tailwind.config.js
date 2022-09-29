
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
          'profile-background':
              "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('./assets/imgs/home1.jpg')",
      }),
  },
  },
  plugins: [
    require('flowbite/plugin')
]
}