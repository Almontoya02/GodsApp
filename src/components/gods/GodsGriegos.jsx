import React from 'react'
import "./styles.css"
import { Tarjetgod } from './Tarjetgod'
import { getGodsByCategory } from '../selectors/getGodsByCategory';
export const GodsGriegos = () => {
  const dioses = getGodsByCategory("Dioses Griegos");
  return (
    <>
    <div className='mainContent'>
      <div className='contentTitle'>
        <div className='containerText'>
          <p className="m-3">

            <img className='mainimg m-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Raffaello%2C_concilio_degli_dei_02.jpg/1200px-Raffaello%2C_concilio_degli_dei_02.jpg' align="left"/>
            <h1 className='mt-2'>
              Dioses Griegos
            </h1>
            La mitología griega son una serie de explicaciones que los habitantes de la Antigua Grecia tenían para comprender el mundo que les envolvía. Eran las creencias que los griegos tenían sobre aspectos como la creación del universo, el origen del hombre, la inteligencia humana, el sentimiento del amor y de la guerra, etcétera. Todas las condiciones del ser humano eran explicadas en estos mitos que reunían a grandes dioses que vivían en el Olimpo y se encargaban de gestionar todo lo que ocurría en el mundo. En este artículo de unComo vamos a descubrirte cuáles son los principales dioses griegos para que los conozcas pero, también, para que sepas a qué se dedicaban cada uno de ellos.
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
