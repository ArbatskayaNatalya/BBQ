// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap'

import '../stylesheets/application.scss'
const images = require.context('../images', true)

import '../scripts/map'
import '../scripts/lightbox'

import Glide from '@glidejs/glide'
document.addEventListener('DOMContentLoaded', () => {
  const glide = new Glide('.glide', {
    type: 'carousel',
    focustAt: 'center',
    breakpoints: {
        1840: {
          perView: 8
        },
        1460: {
          perView: 6
        },
        1180: {
          perView: 5
        },
        700: {
          perView: 4
        },
        360: {
          perView: 3
        }
      }
  })
  glide.mount()
})

Rails.start()
ActiveStorage.start()

