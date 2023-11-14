import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'
import House1 from '../../assets/images/House1.jpeg'
import House2 from '../../assets/images/House2.jpeg'
import House3 from '../../assets/images/House3.jpeg'
import House4 from '../../assets/images/House4.jpeg'

const WidgetsDropdown = () => {
  return (  
    <CRow>
      <CCol>
        <div className="widgetsHouses">
        <img src={House1} alt="House1" />
        <img src={House2} alt="House2" />
        <img src={House3} alt="House3" />
        <img src={House4} alt="House4" />
        </div>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
