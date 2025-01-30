import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

export default function App() {
  const itemsInCart = 1;
  const greeting = "Bienvenid@ a ReactClothes! Que vas a comprar hoy?"
  return (
    <>
      <header className='fixed w-full'>
        <NavBar itemsInCart={itemsInCart} />
        <ItemListContainer greeting={greeting} />
      </header>
      <main className='w-full h-full flex flex-col items-center justify-center'>
        <img width={256} height={256} className='grayscale' alt="Logo de ReactClothes" src="/reactclothes-logo.webp" />
        <h1 className='text-3xl font-bold text-[#0081a3]'>ReactClothes, vestite con React!</h1>
        <p className='text-xl max-w-md'>
          Sitio web en desarrollo.
        </p>
      </main>
    </>
  )
}