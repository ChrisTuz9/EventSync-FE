import { Component } from 'react'
import '../styles/global.css'

export default function App({Component, pageProps}) {
    return (
        <div className="font-sans text-gray-900">
            <Component {...pageProps} />
        </div>
    )
}