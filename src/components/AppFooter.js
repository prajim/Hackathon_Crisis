import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Room 4 you  &amp; Crisis managemtn Dashboard
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
