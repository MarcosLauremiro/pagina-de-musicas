/* Desenvolva sua lógica aqui ... */
import { categories, products } from './productsData.js'
import { themeDark } from './theme.js'
import { render, rendergender } from './render.js'
import { filterAlbum, filterCategory } from './filter.js'

themeDark()
render(products)
rendergender(categories, products)
filterAlbum(products)
filterCategory(products)
