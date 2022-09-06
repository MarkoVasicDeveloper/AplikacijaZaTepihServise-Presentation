import './Neon.css';

export default function Neon () {
    return (
        <div className='neonContainer'>
            <div className="uvLampDiv animateLampDiv">
                <div className="lamp animateLamp"></div>
            </div>
            <h3 data-text={'Stedi vreme i novac'} >Stedi vreme i novac</h3>
            <p>
                Izbacivanjem bezpotrebnih manuelnih
                procesa ustedecete na vremenu. Takodje se eleminisu i brojni
                troskovi vezani za papirologiju, njeno skladistenje i cuvanje.
            </p>
        </div>
    )
}