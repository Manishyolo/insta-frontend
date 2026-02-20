import React from 'react'
import AppRoutes from './Approutes'
import "./style.scss"
import { AuthProvider } from './features/auth/auth.context'

const App = () => {
  return (
 <AuthProvider>


 <AppRoutes></AppRoutes>
 </AuthProvider>

  )
}

export default App