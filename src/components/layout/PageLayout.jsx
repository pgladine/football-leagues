import Header from '../header/Header'
import './page-layout.css'

export default function PageLayout({ children }) {
  return (
    <div className='layout-rows'>
      <Header />
      <div className='layout-columns'>
        <div className='layout-background'></div>
        <div className='page-container'>{children}</div>
        <div className='layout-background'></div>
      </div>
    </div>
  )
}
