import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
// import DefaultLayout from './components/Layout/DefaultLayOut';
import { DefaultLayOut } from './components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        // let Layout = route.layout === null ? Fragment : DefaultLayOut;
                        let Layout = DefaultLayOut;
                        if (route.layout === null) {
                            Layout = Fragment;
                        } else if (route.layout != null) {
                            Layout = route.layout;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
