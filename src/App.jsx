import AppClima from './assets/components/AppClima';
import { ClimaProvider } from './assets/context/ClimaProvider';



function App() {

  return (
    <>
    <ClimaProvider>
      <header>
        <h1>Weather Inspector</h1>
      </header>
      <AppClima/>
    </ClimaProvider>
    </>
  )
}

export default App
