import './loader.css'

export default function Loader() {
  return (
    <div className="box" data-testid="loader">
      <div className="shadow"></div>
      <div className="gravity">
        <div className="ball"></div>
      </div>
    </div>
  )
}
