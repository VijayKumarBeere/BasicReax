import './header.css'
let loggedIn =true;
function Header(){
    return(
            <ul className="list-group">
                <li>Home</li>
                <li>Contact</li>
                <li>About Us</li>
                {
                    loggedIn? (<li>Log Out</li>):(<li>Login</li>)
                }
            </ul>
        // <div>
        //     <input type="checkbox" id="chkSubscribe" className="test"></input>
        //     <label htmlFor="chkSubscribe">Subscribe</label>
        // </div>
    )
}
export default Header;