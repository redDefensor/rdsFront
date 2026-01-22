import Featured from '../../components/organisms/Featured'

const Home = () => {
  return (
    <>
      <main className='max-w-[1200px] w-3/4 my-0 mx-auto flex gap-4 py-4 border-b border-gray-800'>
        <section className='w-4/6'>
          <article className='w-full relative'>
            <span className='absolute left-4 top-4 bg-primary text-light px-2 rounded-sm'>Destacada</span>
            <figure className='overflow-hidden rounded-2xl'>
              <img className='h-90 w-full object-cover hover:scale-110 transition-all' src='https://erbol.com.bo/sites/default/files/fiscalia-eeuu.jpg' alt='' />
            </figure>
            <h1 className='text-light text-3xl my-4 font-bold hover:text-primary cursor-pointer'>Fiscalía y delegación de EEUU hablan para fortalecer el combate al narcotráfico</h1>
            <p className='text-gray-400'>Representantes de la Fiscalía de Bolivia participaron de una reunión de alto nivel con una delegación de la Oficina de Asuntos Internacionales de Narcóticos y Cumplimiento de la Ley (INL) de Estados Unidos, con la fiscalidad de dialogar sobre la cooperación bilateral en esta área estratégica.</p>
          </article>
        </section>
        <aside className='w-2/6 border border-gray-800 rounded-2xl p-4 flex flex-col justify-center'>
          <h2 className='text-light border-l-2 border-primary pl-4 bg-gray-950'>Destacadas</h2>
          <ul className='mt-4 flex flex-col gap-5'>
            <li className='flex items-center gap-2 border-b border-gray-800 pb-4'>
              <p className='text-light text-sm flex flex-col'>Fiscalía y delegación de EEUU hablan para fortalecer el combate al narcotráfico<span className='text-[12px] text-gray-400 mt-2'>12/ene/2025</span></p>
              <img src='https://erbol.com.bo/sites/default/files/fiscalia-eeuu.jpg' alt='' className='h-[100px] w-[100px] object-cover hover:scale-110 transition-all' />
            </li>
            <li className='flex items-center gap-2 border-b border-gray-800 pb-4'>
              <p className='text-light text-sm flex flex-col'>Fiscalía y delegación de EEUU hablan para fortalecer el combate al narcotráfico<span className='text-[12px] text-gray-400 mt-2'>12/ene/2025</span></p>
              <img src='https://erbol.com.bo/sites/default/files/fiscalia-eeuu.jpg' alt='' className='h-[100px] w-[100px] object-cover hover:scale-110 transition-all' />
            </li>
            <li className='flex items-center gap-2 border-b border-gray-800 pb-4'>
              <p className='text-light text-sm flex flex-col'>Fiscalía y delegación de EEUU hablan para fortalecer el combate al narcotráfico<span className='text-[12px] text-gray-400 mt-2'>12/ene/2025</span></p>
              <img src='https://erbol.com.bo/sites/default/files/fiscalia-eeuu.jpg' alt='' className='h-[100px] w-[100px] object-cover hover:scale-110 transition-all' />
            </li>
          </ul>
          <button className='bg-gray-950 text-light py-3 mt-4 cursor-pointer hover:text-primary hover:rounded-2xl transition-all'>Más artículos</button>
        </aside>
      </main>
      <Featured />
    </>
  )
}

export default Home
