import Home from './assets/home.png';

import { useState } from 'react';
import PrimerPaso from './components/PrimerPaso';
import SegundoPaso from './components/SegundoPaso';

function App() {

  const [identificacion, setIdentificacion] = useState('');
  const [activo, setActivo] = useState(false);
  const [error, setError] = useState(false);
  const [condiciones, setCondiciones] = useState(false);

  
  const [actual, setActual] = useState(1);

  // if (!error && !condiciones && activo) { setActual(2) }

  return (
    <div className="md:flex md:min-h-screen ">
      <aside className="md:w-4/6 bg-blue-900">
        <img className='bg-cover' src={Home} alt="" />
        {/* <h2 className="text-4xl font-black text-white text-center">CRM - Clientes</h2>

                <nav className="mt-10">
                    <a className={` text-2xl block mt-2 hover:text-blue-300`} href='/'>Clientes</a>
                    <a className={`text-2xl block mt-2 hover:text-blue-300`} href='/clientes/nuevo'>Nuevo Cliente</a>
                </nav> */}

      </aside>

      <main className="md:w-2/6 p-10 md:h-screen overflow-y-scroll text-center">
        <h1 className="font-bold text-4xl">MiClaro</h1>
        <h1 className="font-bold text-4xl">Registro</h1>
        <div className="flex gap-12 mt-16 justify-center text-white font-bold text-xl">
          <div className="p-4 shadow-sm w-16 h-16 rounded-full" style={{ background: `${actual === 1 ? '#EF3829' : '#F6D1CE'}` }}>1</div>
          <div className="p-4 shadow-sm w-16 h-16 rounded-full" style={{ background: `${actual === 2 ? '#EF3829' : '#F6D1CE'}` }}>2</div>
          <div className="p-4 shadow-sm w-16 h-16 rounded-full" style={{ background: `${actual === 3 ? '#EF3829' : '#F6D1CE'}` }}>3</div>
          <div className="p-4 shadow-sm w-16 h-16 rounded-full" style={{ background: `${actual === 4 ? '#EF3829' : '#F6D1CE'}` }}>4</div>
        </div>
        {
          !error && !condiciones && activo ?
            ( <SegundoPaso actual={actual} setActual={setActual} /> ) : (
            <PrimerPaso
              identificacion={identificacion}
              setIdentificacion={setIdentificacion}
              setActivo={setActivo} setError={setError}
              error={error} condiciones={condiciones} activo={activo}
              setCondiciones={setCondiciones}
              setActual={setActual}
            />
           )
        }
      </main>

    </div>
  )
}

export default App
