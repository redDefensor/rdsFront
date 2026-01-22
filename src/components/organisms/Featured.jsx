const Featured = () => {
  return (
    <main className='max-w-[1200px] w-3/4 my-0 mx-auto mt-4 mb-4 border-b border-gray-800 pb-4'>
      <h2 className='text-xl font-bold mb-4 text-light bg-gray-950 pl-2 border-l-2 border-primary'>Noticias</h2>
      <div className='grid grid-cols-3 gap-4'>
        <article>
          <figure className='overflow-hidden rounded-2xl'>
            <img src='https://erbol.com.bo/sites/default/files/fiscalia-eeuu.jpg' alt='' />
          </figure>
          <h1 className='text-light text-lg font-bold my-2 hover:text-primary cursor-pointer'>Fiscalía y delegación de EEUU hablan para fortalecer el combate al narcotráfico</h1>
          <p className='text-gray-400 text-sm'>Representantes de la Fiscalía de Bolivia participaron de una reunión de alto nivel con una delegación de la Oficina de Asuntos Internacionales de Narcóticos y Cumplimiento de la Ley (INL) de Estados Unidos, con la fiscalía de dialogar sobre la cooperación bilateral en esta área estratégica.</p>
        </article>
        <article>
          <figure className='overflow-hidden rounded-2xl'>
            <img src='https://erbol.com.bo/sites/default/files/fiscalia-eeuu.jpg' alt='' />
          </figure>
          <h1 className='text-light text-lg font-bold my-2 hover:text-primary cursor-pointer'>Fiscalía y delegación de EEUU hablan para fortalecer el combate al narcotráfico</h1>
          <p className='text-gray-400 text-sm'>Representantes de la Fiscalía de Bolivia participaron de una reunión de alto nivel con una delegación de la Oficina de Asuntos Internacionales de Narcóticos y Cumplimiento de la Ley (INL) de Estados Unidos, con la fiscalía de dialogar sobre la cooperación bilateral en esta área estratégica.</p>
        </article>
        <article>
          <figure className='overflow-hidden rounded-2xl'>
            <img src='https://erbol.com.bo/sites/default/files/fiscalia-eeuu.jpg' alt='' />
          </figure>
          <h1 className='text-light text-lg font-bold my-2 hover:text-primary cursor-pointer'>Fiscalía y delegación de EEUU hablan para fortalecer el combate al narcotráfico</h1>
          <p className='text-gray-400 text-sm'>Representantes de la Fiscalía de Bolivia participaron de una reunión de alto nivel con una delegación de la Oficina de Asuntos Internacionales de Narcóticos y Cumplimiento de la Ley (INL) de Estados Unidos, con la fiscalía de dialogar sobre la cooperación bilateral en esta área estratégica.</p>
        </article>
      </div>
    </main>
  )
}

export default Featured
