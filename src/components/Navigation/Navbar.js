import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ navbar }) => {
    const navFiltered = navbar?.filter((item) => item.type_label !== 'Page');
    return (
        <>
            <ul className="navbar-nav ml-auto">
                {navFiltered?.length > 0 &&
                    navFiltered.map((item, index) => (
                        <li className="nav__item" key={index}>
                            <Link
                                to={`${item?.url}`}
                                className="nav__item-link"
                            >
                                {item?.post_title}
                            </Link>
                        </li>
                    ))}
            </ul>
            <a
                href="https://miracleinside3d4dbabyscancentre.gettimely.com/Booking/Location/89781?mobile=True"
                className="btn btn__primary btn__rounded ml-30"
            >
                <i className="icon-calendar" />
                <span>Book Now</span>
            </a>
        </>
    );
};

export default Navbar;
