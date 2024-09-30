import { useEffect, useState } from "react"

const FollowMouse = () => {


  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // EJECUTA EL CODIGO QUE DEFINIMOS CUANDO SE RENDERIZA LA PAGINA O EN ESTE CASO 
  // CUANDO CAMBIA LA VARIABLE "enable"
  useEffect(() => {
    console.log('effect', { enabled })

    // ESTE CODIGO MUESTRA LA POSICION DEL PUNTERO
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // ESTO SE EJECUTA SIEMPRE QUE DEJE DE RENDERIZARSE O CUANDO CAMBIE LA VARIABLE, 
    // EN ESTE CASO "enable" EL COMPONENTE PARA LIMPIAR EL EVENTO ANTERIOR
    return () => {
      console.log("cleanup")
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-remove')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgb(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -40,
        top: -40,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App() {

  return (
    <main>
     <FollowMouse></FollowMouse>
    </main>
  )
}

export default App
