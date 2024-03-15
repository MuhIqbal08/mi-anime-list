import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import Navbar from './components/Navigation/Navbar';
import Loader from './components/Loader';
// import Popular from './components/Popular';
// import DetailPage from './components/Detail/[id]';
// import Home from './components/Home';
// import Page from './components/Search/[keyword]';

const Home = React.lazy(() => import('./components/Home'));
const Page = React.lazy(() => import('./components/Search/[keyword]'));
const Popular = React.lazy(() => import('./components/Popular'));
const DetailPage = React.lazy(() => import('./components/Detail/[id]'));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:keyword" element={<Page />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/anime/:id" element={<DetailPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
