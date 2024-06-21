import CategoryBar from '@/Components/CategoryBar'
import TopBar from '@/Components/TopBar'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <>
      <TopBar />
      <CategoryBar />
      {children}
    </>
  )
}

export default MainLayout