import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    NavLink,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()
const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link href="/"><NavLink className='font-weight-bold'>Friends App</NavLink></Link>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>

                        <React.Fragment>
                            <NavItem>
                                <Link href="/users" >
                                    <NavLink style={{ cursor: 'pointer' }}>Users</NavLink>
                                </Link>
                            </NavItem>
                        </React.Fragment>


                        <React.Fragment>
                            <NavItem>
                                <Link href="/crud/user" >
                                    <NavLink style={{ cursor: 'pointer' }}>Add New User</NavLink>
                                </Link>
                            </NavItem>
                        </React.Fragment>
                    </Nav>
                    <NavbarText>Friends App</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;