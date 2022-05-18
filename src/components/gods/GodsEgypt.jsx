import React from 'react'
import "./styles.css"
import { Tarjetgod } from './Tarjetgod'
import { getGodsByCategory } from '../selectors/getGodsByCategory';
export const GodsEgypt = () => {
  const dioses = getGodsByCategory("Dioses de Egipto");
  return (
    <>
    <div className='mainContent'>
      <div className='contentTitle'>
        <div className='containerText'>
          <p className="m-3">

            <img className='mainimg m-2' src='https://cdn-60815825c1ac183d583ef599.closte.com/wp-content/uploads/2020/06/dioses-egipcios-1.jpg' align="left"/>
            <h1 className='mt-2'>
              Dioses de Egipto
            </h1>
            La mitología egipcia es una de las más completas que podemos encontrar, 
            por eso los dioses de Egipto ocupaban un papel central en la vida de esta antigua civilización hasta tal punto que los rituales que conocemos en la actualidad provenientes de esta cultura, como es el caso de la momificación, se desprendían del deseo de mantener el cuerpo intacto para la otra vida, la que disfrutarían en el más allá junto a los dioses.
          </p>
        </div>
      </div>
      <div className='containerTarjets'>

          {
            dioses.map(dios=>(
              <Tarjetgod key={dios.id} {...dios}/>
          ))
          }
  
      </div> 
    </div>
    </>
  )
}
