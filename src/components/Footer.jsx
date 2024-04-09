import React, { useState } from 'react'
const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear())
  return (
    <footer className="contenu footer">
      <p>© {currentYear} Pierre CLIO. All rights reserved.</p>
    </footer>
  )
}
export default Footer
