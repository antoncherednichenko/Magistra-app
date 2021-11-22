
export default function Game({complexity, windows, game}) {

    return (
        <>
            <ul>
                <li>{complexity}</li>
                <li>{windows}</li>
                <li>{game}</li>
            </ul>
        </>
    )
}