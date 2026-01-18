import './Breadcrumbs.css'

function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          {index > 0 && <span className="breadcrumb-separator"> / </span>}
          {item.link ? (
            <a href={item.link} className="breadcrumb-link">
              {item.label}
            </a>
          ) : (
            <span className="breadcrumb-text">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumbs
