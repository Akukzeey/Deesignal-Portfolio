import Home from './components/Home'
import './global.scss'
import {createBrowserRouter,createRoutesFromElements,Route,Outlet,RouterProvider} from 'react-router-dom';
export default function App(){

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root/>}>
                <Route index element={<Home/>}/>
            </Route>
        )
    )

    return(
        <RouterProvider router={router}/>
    )
}

const Root = () => {
    return (
        <>
    <Outlet/>
       </>
    )
}