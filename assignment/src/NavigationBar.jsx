import { Link, NavLink } from "react-router-dom";

function NavigationBar () {
    return(
        <nav className="clearfix">
            {/* <Link to='/add-customer'>Add Customer</Link>
            <Link to="customers"></Link> */}
            <NavLink to='/charcter-details' activeClassName='active'>Character Details</NavLink>
            <NavLink to='/comics' activeClassName='active'>Comics</NavLink>
        </nav>
        
    )
}

export default NavigationBar