import React from 'react'
import Breadcrumb from './Breadcrumb'
import Sidebar from './Sidebar'
import ServiceOrdersTable from './ServiceOrdersTable'
import '../../styles/MyServiceOrders/MyServiceOrders.css'

function App() {
  return (
    <div className="app">
      {/* <Breadcrumb /> */}
      <div className="orders-layout">
        <Sidebar />
        <ServiceOrdersTable />
      </div>
    </div>
  )
}

export default App
