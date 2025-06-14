import '../styles/global.css'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {
    return (
        <div className="font-sans text-gray-900">
            <Component {...pageProps} />
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
            />
        </div>
    )
}