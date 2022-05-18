import React from 'react'
import "./styles.css"
import { Tarjetgod } from './Tarjetgod'
import { getGodsByCategory } from '../selectors/getGodsByCategory';

export const GodsNordicos = () => {
  const dioses = getGodsByCategory("Dioses Nordicos");
  return (
    <>
    <div className='mainContent'>
      <div className='contentTitle'>
        <div className='containerText'>
          <p className="m-3">

            <img className='mainimg m-2' src='https://www.losandes.com.ar/resizer/cjdDZxfBHF60yjfQ4Oj6KSTE8A4=/1023x574/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/3W2XUEU4CJBAZHIVSGKASUHTPA.png' align="left"/>
            <h1 className='mt-2'>
              Dioses Nordicos
            </h1>
            Los dioses nórdicos surgen de la mitología germánica y nórdica. La diferencia principal entre ambas mitologías es el nombre de cada deidad, mismo hecho que sucedía entre la mitología romana y griega. Ahora bien, los dioses griegos y romanos son muy populares y buena parte de la sociedad conoce sus nombres, sin embargo, existe un desconocimiento más generalizado sobre los dioses nórdicos.
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
