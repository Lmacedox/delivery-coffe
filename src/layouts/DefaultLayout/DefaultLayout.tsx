import { LayoutContainer, LayoutContent } from './DefaultLayout.style'
import { Header } from '../../components'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <LayoutContent>
        <Header />
        <Outlet />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </LayoutContent>
    </LayoutContainer>
  )
}
