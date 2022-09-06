import './Fire.css';

export default function Fire() {

    return (
        <div className="containerDescription">
          <div className="title" >
            <h3 className='fireH3'>Potpuno besplatan!</h3>
            <svg>
              <filter id="fire" >
                <feTurbulence id="turbulence" baseFrequency={'0.1 0.1'} numOctaves="2" seed={3} >
                  <animate attributeName="baseFrequency" dur='5s' values='0.1 0.1;0.10 0.2' repeatCount={'indefinite'}></animate>
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale={10}></feDisplacementMap>
              </filter>
            </svg>
          </div>
          <p>
            Da, dobro ste procitali! Osnovna verzija Washer softvera je potpuno besplatna.
            Ona je dovoljna za 90% tepih servisa u Srbiji i regionu.
          </p>
      </div>
    )
}