import { useState, useEffect } from 'react'
import QR from '../../assets/qr.png'
import { useParams } from 'react-router'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`https://rds-production-f5c8.up.railway.app/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)
      })
      .catch(err => console.log(err))
  }, [id])

  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  useEffect(() => {
    fetch('https://rds-production-f5c8.up.railway.app/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(shuffleArray(data))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main className='max-w-[1200px] w-3/4 my-0 mx-auto flex gap-4 py-4 border-b border-gray-800 relative'>
      <article className='w-4/6 relative'>
        <h1 className='text-light text-3xl my-4 font-bold hover:text-primary cursor-pointer'>{post?.title}</h1>
        <figure className='overflow-hidden rounded-2xl'>
          <img className='h-full w-full object-cover' src={post?.imgs?.[0]} alt='' />
        </figure>
        <div className='text-sm font-light flex items-center gap-2 my-4'>
          <p className='text-gray-500'><span className='text-primary'>Autor: </span>RDS-TV</p>
          <div className='bg-gray-800 w-px h-4' />
          <p className='text-gray-500'><span className='text-primary'>Fecha: </span>{post?.date}</p>
        </div>
        <div className='text-gray-400 flex flex-col gap-4'>
          {post?.content?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className='mt-4'>
          {
            post?.imgs?.length > 1 && (
              <div className='flex flex-col gap-4'>
                {post?.imgs?.slice(1, 3).map((img, index) => (
                  <figure key={index} className='overflow-hidden rounded-2xl'>
                    <img className='h-full w-full object-cover' src={img} alt='' />
                  </figure>
                ))}
              </div>
            )
          }
        </div>
        <section className='flex justify-center mt-6'>
          <article className='w-3/4 flex gap-2 border border-[#128c7e] bg-[#075e54] text-light rounded-3xl overflow-hidden'>
            <div className='w-1/2 h-full p-4 flex flex-col justify-center items-center gap-4'>
              <h3 className='text-center text-[#dcf8c6] font-bold'>Súmate a nuestro grupo de WhatsApp</h3>
              <p>Tenemos un grupo de WhatsApp donde compartimos novedades, info útil y algunas sorpresas exclusivas. Es la forma más fácil de estar en contacto y no perderte nada.</p>
            </div>
            <div className='w-1/2 h-full bg-[#25d366] p-4 flex flex-col justify-center items-center gap-4'>
              <p className='text-center text-[#075e54] font-bold'>Escaneá el QR</p>
              <figure className='h-[150px] w-[150px] overflow-hidden mx-auto shadow-2xl'>
                <img src={QR} alt='' className='h-full w-full object-cover' />
              </figure>
              <p className='text-center text-[#075e54]'>o tocá el <a href='#' className='text-[#34b7f1] bg-[#075e54] px-2 py-1 rounded-full mx-2'>enlace</a> y únete en segundos.</p>
            </div>
          </article>
        </section>
      </article>
      <aside className='w-2/6 max-h-[900px] overflow-auto border border-gray-800 rounded-2xl p-4 flex flex-col justify-center'>
        <h2 className='text-light border-l-2 border-primary pl-4 bg-gray-950'>Recomendadas para tí</h2>
        <ul className='mt-4 flex flex-col gap-5'>
          {
            posts.slice(0, 3).map(item => (
              <li key={item._id} className='flex flex-col items-center gap-2 border-b border-gray-800 pb-4 last:border-b-0'>
                <figure className='w-[95%] h-[150px] overflow-hidden rounded-2xl'>
                  <img src={item?.imgs?.[0]} alt='' className='h-full w-full object-cover hover:scale-110 transition-all' />
                </figure>
                <a href={`/post/${item._id}`}><p className='w-[95%] text-light text-sm flex flex-col hover:text-primary cursor-pointer'>{item.title}<span className='text-[12px] text-gray-400 mt-2'>{item.createdAt}</span></p></a>
              </li>
            ))
          }
        </ul>
      </aside>
    </main>
  )
}

export default Post
