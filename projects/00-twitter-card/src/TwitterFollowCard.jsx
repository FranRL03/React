import { useState } from "react"

/* eslint-disable react/prop-types */

export function TwitterFollowCard ({userName = 'unknow', children, initialIsFollowing}) {

    { /* ESTAMOS UTILIZANDO LOS ESTADOS PARA ACTUALIZAR EL VALOR DEL BOTON DE SEGUIR.
    EN ESTA LINEA EL PRIMER VALOR "isFollowing" ES EL VALOR DEL ESTADO Y EL SEGUNDO VALOR
    "setIsFollowing" ES EL VALOR ALQUE SE QUIERE ACTUALIZAR, EL "useState(initialIsFollowing)" ES DONDE 
    INDICAMOS EL VALOR POR DEFECTO */ }

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' 
            src={`https://unavatar.io/${userName}`} alt="avatar" />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUsername'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}