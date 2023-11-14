import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Rooms 4 you
        </a>
        <span className="ms-1">&copy; 2023 rooms4you.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
