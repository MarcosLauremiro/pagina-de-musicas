import { products } from "./productsData.js"
import { render } from "./render.js"

export const filterAlbum = (array) => {
    const inputValue = document.querySelector('#valueFilter')

    inputValue.addEventListener('input', () => {
        const pValue = document.querySelector('.header-filter-value__container > p')
        pValue.innerHTML = ''

        pValue.innerHTML = `Até R$ ${inputValue.value}.00`

        const capterFilter = array.filter((album) => {
            return album.price <= inputValue.value
        })
        console.log(capterFilter)
        
        render(capterFilter)
    })
}

export const filterCategory = (arrayProdutos) => {
    const categorys = document.querySelectorAll('.gender__container button')
    
    categorys.forEach(element => {
        element.addEventListener('click', (e) => {
            let idcategory = element.id - 1
            
            if(idcategory == 0){
                render(arrayProdutos)
            }else{
                
            }
        })
    });
}