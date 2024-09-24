import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const users = [
        {
            userName: 'fran_7203',
            name: 'Fran',
            isFollowing: true
        },
        {
            userName: 'midudev',
            name: 'Miguel Angel',
            isFollowing: false
        },
        {
            userName: null,
            name: 'Elon Musk',
            isFollowing: false
        }
    ]

    return (
        <div className='App'>

            {/* CHILDREN ES LO QUE ESTÁ ENVOLVIENDO LAS ETIQUETAS, DE ESTA FORMA SI SEGUIMOS ESCRIBIENDO TEXTO
            SE VA RENDERIZANDO */}

            {/* <TwitterFollowCard userName={"fran_7203"} initialIsFollowing>
                Fran
            </TwitterFollowCard>

            <TwitterFollowCard userName={"midudev"}>
                Miguel Angel
            </TwitterFollowCard>

            <TwitterFollowCard>
                Elon Musk
            </TwitterFollowCard> */}

            {
                users.map(({ userName, name, isFollowing}) => (
                    // la key deberia ser el uuid de la base de datos
                    <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}> 
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </div>
    )
}