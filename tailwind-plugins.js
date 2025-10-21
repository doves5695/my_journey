/* eslint-disable indent */
const plugin = require('tailwindcss/plugin');

module.exports = {
    customStyles:
        plugin(function ({ addComponents }) {
            addComponents({
                '.flex_center': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            })
        })
}