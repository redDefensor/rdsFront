import { useState, useEffect } from 'react'

const Featured = () => {
  const URL = import.meta.env.VITE_API_URL
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    fetch(`${URL}/posts/tag/featured`)
      .then(res => res.json())
      .then(data => {
        setFeatured(data)
      })
      .catch(err => console.log(err))
  }, [URL])

  return (
    <main className='max-w-[1200px] w-3/4 my-0 mx-auto mt-4 mb-4 border-b border-gray-800 pb-4'>
      <h2 className='text-xl font-bold mb-4 text-light bg-gray-950 pl-2 border-l-2 border-primary'>Política</h2>
      <div className='grid grid-cols-3 gap-8'>
        {featured.map(item => (
          <article key={item._id}>
            <figure className='w-full h-48 overflow-hidden rounded-2xl'>
              <img src={item.imgs[0]} alt='' className='h-full w-full object-cover hover:scale-102 transition-all duration-500' />
            </figure>
            <a href={`/post/${item._id}`}>
              <h1 className='text-light text-lg font-bold my-2 hover:text-primary cursor-pointer'>{item.title}</h1>
            </a>
            <p className='text-gray-400 text-sm line-clamp-3'>{item.excerpt}</p>
            <a href={`/post/${item._id}`} className='text-primary hover:text-primary/80 mt-2 block text-sm font-light'>Leer más</a>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Featured
