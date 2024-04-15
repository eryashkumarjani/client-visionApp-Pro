import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './components/loader/Loader';
import './App.scss';

function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default App;
