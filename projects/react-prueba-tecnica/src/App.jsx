import { useState, useEffect } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function App() {

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    // COMO QUEREMOS QUE ESTO SE RENDERIZE CUANDO SE INICIA LA PAGINA PUES PONEMOS EL ARRAY VACIO
    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                const threeFirstWord = fact.split(' ', 3).join(' ')
                console.log(threeFirstWord)

                fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
                    .then(res => res.json())
                    .then(resposne => {
                        console.log(resposne)
                        const { url } = resposne
                        console.log(`${CAT_PREFIX_IMAGE_URL}${imageUrl}`);
                        setImageUrl(url)
                    })
            })
    }, [])

    return (

        <main>
            <h1>App de gatitos</h1>

            {/* ESTO ES UN RENDERIZADO CONDICIONAL QUE HACE QUE SI "fact" TIENE UN VALOR
            SE RENDERIZA ESA  LINEA SI NO TIENE VALOR PUES NO SE RENDERIZA */}
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image exytracted using first three words for ${fact}`} />}
        </main>
    )
}