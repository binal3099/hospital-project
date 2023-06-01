import React from 'react'
import Topbar from '../Topbar/Topbar'
import Header2 from '../Header/Header2'
import DepartmentSec from '../DepartmentSec/DepartmentSec'
import Footer from '../Footer/Footer'
function Department() {
    return (
        <div>
            <div className='main-header'>
                <Topbar />
                <Header2 />
            </div>
            <DepartmentSec />
            <Footer />
        </div>
    )
}

export default Department