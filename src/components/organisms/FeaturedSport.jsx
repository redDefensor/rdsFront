import { useState, useEffect } from 'react'

const FeaturedSport = () => {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    fetch('https://rds-production-f5c8.up.railway.app/posts/tag/sports')
      .then(res => res.json())
      .then(data => {
        setFeatured(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main className='max-w-[1200px] w-3/4 my-0 mx-auto mt-4 mb-4 border-b border-gray-800 pb-4'>
      <h2 className='text-xl font-bold mb-4 text-light bg-green-950 pl-2 border-l-2 border-orange-700'>Deportes</h2>
      <div className='grid grid-cols-3 gap-8'>
        <article className='col-span-2'>
          <figure className='overflow-hidden rounded-2xl'>
            <img src={featured[0]?.imgs[0]} alt='' />
          </figure>
          <a href={`/post/${featured[0]?._id}`}>
            <h1 className='text-light text-lg font-bold my-2 hover:text-primary cursor-pointer'>{featured[0]?.title}</h1>
          </a>
          <p className='text-gray-400 text-sm line-clamp-3'>{featured[0]?.excerpt}</p>
          <a href={`/post/${featured[0]?._id}`} className='text-primary hover:text-primary/80 mt-2 block text-sm font-light'>Leer más</a>
        </article>
        <section className='col-span-1 flex flex-col gap-4'>
          {featured.slice(1, 3).map(item => (
            <article key={item._id}>
              <figure className='h-40 overflow-hidden rounded-2xl'>
                <img src={item.imgs[0]} alt='' className='h-full w-full object-cover hover:scale-102 transition-all duration-500' />
              </figure>
              <a href={`/post/${item._id}`}>
                <h1 className='text-light text-lg font-bold my-2 hover:text-primary cursor-pointer'>{item.title}</h1>
              </a>
              <a href={`/post/${item._id}`} className='text-primary hover:text-primary/80 mt-2 block text-sm font-light'>Leer más</a>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}

export default FeaturedSport
