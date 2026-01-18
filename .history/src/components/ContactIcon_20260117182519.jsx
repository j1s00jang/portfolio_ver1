import './ContactIcon.css'

function ContactIcon({ className }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    >
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export default ContactIcon
