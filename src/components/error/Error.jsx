import './error.css'

export default function Error({ error }) {
  return (
    <div className='error'>
      {error.response?.status === 404 && <h2>LO SENTIMOS, ESTA INFORMACIÓN NO ESTÁ DISPONIBLE</h2>}
      {error.response?.status === 429 && <h2>DEMASIADAS PETICIONES, ESPERA UNOS SEGUNDOS</h2>}
    </div>
  )
}
