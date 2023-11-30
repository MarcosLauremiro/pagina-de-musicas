
export const render = (array) => {
    const ulControler = document.querySelector('.albuns__container')
    ulControler.innerHTML = ''

    array.forEach(album => {
        const liContainer = document.createElement('li')
        const divCapa = document.createElement('div')
        const figureCapa = document.createElement('figure')
        const imgCapa = document.createElement('img')
        
        const divBandaAno = document.createElement('div')
        const figcapBanda = document.createElement('figcaption')
        const figcapAno = document.createElement('figcaption')
        
        const divInfo = document.createElement('div')
        const h3Titulo = document.createElement('h3')
        const divValue = document.createElement('div')
        const spanValue = document.createElement('span')
        const bntConprar = document.createElement('button')

        ulControler.append(liContainer)

        liContainer.append(divCapa)
        divCapa.append(figureCapa)
        figureCapa.append(imgCapa)
        
        divCapa.append(divBandaAno)
        divBandaAno.append(figcapBanda)
        divBandaAno.append(figcapAno)

        liContainer.append(divInfo)
        divInfo.append(h3Titulo)
        divInfo.append(divValue)
        divValue.append(spanValue)
        divValue.append(bntConprar)

        liContainer.classList.add('album')
        divCapa.classList.add('capa')

        imgCapa.src = album.img

        divBandaAno.classList.add('banda-ano')
        figcapBanda.innerHTML = album.band
        figcapAno.innerHTML = album.year

        divInfo.classList.add('infos')
        h3Titulo.innerHTML = album.title
        spanValue.innerHTML = `R$ ${album.price.toFixed(2)}`
        bntConprar.innerHTML = 'Comprar'
        bntConprar.classList.add('button')
        
    });



}

export const rendergender = (array, arrayAlbuns) =>{
    const divContainer = document.querySelector('.gender__container')
    divContainer.innerHTML = '' 

    array.forEach((gender, index) => {
        const buttonGender = document.createElement('button')

        divContainer.append(buttonGender)

        buttonGender.classList.add('button')

        buttonGender.innerHTML = gender

        buttonGender.id = index

        buttonGender.addEventListener('click', (e) => {
            console.log(buttonGender.id)
            if(buttonGender.id == 0){
                render(arrayAlbuns)
            }
            let categoryFilter = arrayAlbuns.filter((element) => element.category == buttonGender.id)
            if(buttonGender.id == 0){
                categoryFilter = arrayAlbuns 
                render(categoryFilter)
            }else{
                render(categoryFilter)
            }
            
        
            console.log(categoryFilter)
        })
    });
}