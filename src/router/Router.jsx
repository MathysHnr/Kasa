import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Housing from '../pages/Housing/Housing'
import Error from '../pages/Error/Error'

function Router() {
    return (
        <BrowserRouter
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/logement/:id" element={<Housing />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
