import { Outlet } from 'react-router-dom';
import Header from './Header.js'
function Layout() {
    return (
        <div className='layout' >
            <Header/>
                <main>
                    <Outlet />
                  {/*  <h2>
                        {title}
                    </h2>
                    <section>
                        {children}</section>*/}
                </main>
            <footer>© 2022 KeepCoding</footer>
        </div>
    )
}

export default Layout;