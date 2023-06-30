import useClima from '../hooks/userClima';
import Formulario from './Formulario';
import Loading from './Loading';
import Resultado from './Resultado';

const AppClima = () => {

  const {resultado,cargando,noResultado} =useClima();
  
    // console.log(resultado)
  
  return (
    <>
      <main className="dos-columnas">
        
        <Formulario/>
        {
          cargando 
          ? 
            <Loading/>
          :
            resultado?.name !== ''
          ? 
            <Resultado/> 
          :
            noResultado 
          ?
            <div className='flex justify-center items-center'><p className='text-center text-red-600 bg-red-300 block p-4 rounded shadow-lg font-extrabold uppercase text-xl'>There was a problem, we couldn't show results</p></div>
          :
            <div className='flex justify-center items-center'><p className='text-center text-green-600 bg-green-300 block p-4 rounded shadow-lg font-extrabold uppercase text-xl'>Weather Info will be displayed here!!</p></div>
            
          }
        
      </main>
    </>
  )
}

export default AppClima