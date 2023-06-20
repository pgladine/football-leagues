
import Header from '../header/Header'

export default function PageLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
