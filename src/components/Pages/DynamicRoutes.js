import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Home/Header/Header';
import Home from '../Home/Home';
import About from './About';
import BookBlood from './BloodBookingForm';
import BloodTest from './BloodTest';
import Contact from './Contact';
import BloodTestDetails from './DetailsPages/BloodTestDetails';
import ScanDetails from './DetailsPages/ScanDetails';
import DynamicPage from './DynamicPage';
import Faq from './Faq';
import Scan from './Scan';
import BookScan from './ScanBookingForm';
function DynamicRoutes() {
    const { data, status } = useQuery('dataNav', () =>
        axios.get('https://miracleinside.info/wp-json/myroutes/menu')
    );

    const navigationHandler = (item, index) => {
        switch (item.url) {
            case '/':
                return <Route key={index} path="/" element={<Home />} />;
            case '/scan':
                return <Route key={index} path="/scan" element={<Scan />} />;
            case '/bloodtest':
                return (
                    <Route
                        key={index}
                        path="/bloodtest"
                        element={<BloodTest />}
                    />
                );
            case '/contact':
                return (
                    <Route key={index} path="/contact" element={<Contact />} />
                );
            default:
                if (item.type_label === 'Page') {
                    let tempPath = item.url.split('/');
                    //          console.log(`/${tempPath[tempPath.length - 2]}`);
                    return (
                        <Route
                            key={index}
                            path={`/${tempPath[tempPath.length - 2]}`}
                            element={<DynamicPage id={item.object_id} />}
                        />
                    );
                }
                if (item.url.split('/')[2] === 'faq') {
                    return (
                        <Route key={index} path="/:id/faq" element={<Faq />} />
                    );
                } else {
                    return (
                        <Route
                            key={index}
                            path={item.url}
                            element={<About id={item?.url.split('/')[1]} />}
                        />
                    );
                }
        }
    };

    return (
        <div className="wrapper">
            <Router>
                <Header navbar={status === 'success' && data?.data} />
                <Routes>
                    {status === 'success' &&
                        data?.data.length > 0 &&
                        data.data.map(navigationHandler)}
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/bloodtest/:id/:slug"
                        element={<BloodTestDetails />}
                    />
                    <Route path="/scan/:id/:slug" element={<ScanDetails />} />
                    <Route path="/:id/faq" element={<ScanDetails />} />
                    <Route path="/bookscan" element={<BookScan />} />
                    <Route path="/bookbloodtest" element={<BookBlood />} />
                </Routes>
            </Router>
        </div>
    );
}

export default DynamicRoutes;
