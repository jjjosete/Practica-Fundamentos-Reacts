import Header from './Header.js'
function Layout({children, title, ...props}) {
    return (
        <div className='layout' {...props}>
            <Header {...props}/>
                <main>
                    <h2>
                        {title}
                    </h2>
                    <section>
                        {children}
                    </section>
                </main>
            <footer>© 2022 KeepCoding</footer>
        </div>
    )
}

export default Layout;