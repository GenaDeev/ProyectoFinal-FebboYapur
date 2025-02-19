import ItemListContainer from '../components/ItemListContainer';

export const Home = () => {
    return (
        <main className='w-full h-full flex flex-col items-center pt-36'>
            <img width={64} height={64} className='grayscale' alt="Logo de ReactClothes" src="/reactclothes-logo.webp" />
            <h1 className='text-2xl font-bold text-[#0081a3]'>ReactClothes, vestite con React!</h1>
            <h2 className='text-xl font-bold text-[#0081a3]'>¿Qué vestirás?</h2>
            <ItemListContainer/>
        </main>
    )
}