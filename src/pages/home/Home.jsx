import { useState, useEffect } from 'react'
import Featured from '../../components/organisms/Featured'
import FeaturedSport from '../../components/organisms/FeaturedSport'
import Video from '../../components/organisms/Video'

const Home = () => {
  const [hero, setHero] = useState([])
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    fetch('https://rds-production-f5c8.up.railway.app/posts/tag/principal')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setHero(data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/posts/tag/featured')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setFeatured(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <main className='max-w-[1200px] w-3/4 my-0 mx-auto flex gap-4 py-4 border-b border-gray-800'>
        <section className='w-4/6'>
          <article className='w-full relative'>
            <span className='absolute left-4 top-4 bg-primary text-light px-2 rounded-sm'>Principal</span>
            <figure className='overflow-hidden rounded-2xl'>
              <img className='h-90 w-full object-cover hover:scale-102 transition-all duration-500' src={hero[0]?.imgs[0]} alt='' />
            </figure>
            <a href={`/post/${hero[0]?._id}`}><h1 className='text-light text-3xl my-4 font-bold hover:text-primary cursor-pointer'>{hero[0]?.title}</h1></a>
            <p className='text-gray-400 line-clamp-2'>{hero[0]?.excerpt}</p>
          </article>
        </section>
        <aside className='w-2/6 border border-gray-800 rounded-2xl p-4 flex flex-col justify-center'>
          <h2 className='text-light border-l-2 border-primary pl-4 bg-gray-950'>Destacadas</h2>
          <ul className='mt-4 flex flex-col gap-5'>
            {
              featured.map(item => (
                <li key={item._id} className='w-full flex items-center gap-2 border-b border-gray-800 pb-4'>
                  <a className='cursor-pointer' href={`/post/${item._id}`}><p className='text-light text-sm flex flex-col w-3/4 hover:text-primary'>{item.title}<span className='text-[12px] text-gray-400 mt-2'>{item.createdAt}</span></p></a>
                  <div className='w-40 h-20 overflow-hidden'>
                    <img src={item.imgs[0]} className='h-full w-full object-cover hover:scale-102 transition-all duration-500' />
                  </div>
                </li>
              ))
            }
          </ul>
          <button className='bg-gray-950 text-light py-3 mt-4 cursor-pointer hover:text-primary hover:rounded-2xl transition-all'>Más artículos</button>
        </aside>
      </main>
      <Video />
      <Featured />
      <FeaturedSport />
    </>
  )
}

export default Home
