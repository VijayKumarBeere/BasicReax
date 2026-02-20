import {BrowserRouter,Routes, Route, Link} from 'react-router-dom'
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Login from './Login';
import './RoutingTest.css';
import { lazy, Suspense } from 'react';
// import User, { Orders, Profile, UserAccess } from './UserProfile';
const About = lazy(()=>import('./About'))
const Home =lazy(()=>import('./Home'))
const Contact =lazy(()=>import('./Contact'))
const Login =lazy(()=>import('./Login'))

function Header(){
    return(
        <ul className='list-group'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/login'>Login</Link></li>
            {/* <li><Link to='/user'>User</Link></li>
            <li><Link to='/user/100/John'>User - 100</Link></li>
            <li><Link to='/user/1/Vijay?category=dev&posts=34'>Vijay</Link></li> */}
        </ul>
    )
}

function ErrorPage()
{
    return(
        <>
            <h1>Oops! Page not found</h1>
            <desc>Error: 404</desc>
        </>
    )
}
function Test(){
    return(
    <>
        <BrowserRouter>
            <Header></Header>
            <Suspense fallback={<div>Loading..</div>}> 
                {/* Fallback attribute will be used to run when server data is fetching up
                    Since we're using this application in local server, it is working fast.
                    In real time, fetching up the data consumes time.
                */}
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='about' element={<About/>} />
                    <Route path='contact' element={<Contact/>} />
                    <Route path='login' element={<Login/>} />
                    {/* <Route path='home' element={<Home/>} /> */}
                    {/* <Route path='user' element={<User/>}> 
                        <Route path='orders' element={<Orders />}/>
                        <Route path ='profile' element={<Profile />}/>
                    </Route> */}
                    {/*Query parameters doesn't need to be passed in above path, can be defined in url and access it using useLocation() hook */}
                    {/* <Route path='user/:id/:name' element={<UserAccess/>} /> */}
                    <Route path='*' element={<ErrorPage/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </>
    )
}
export default Test;