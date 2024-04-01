import React, { useState } from 'react'
const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear())
  return (
    <div className="contenu footer">
      <p>© {currentYear} Pierre CLIO. All rights reserved.</p>
    </div>
  )
}
export default Footer
