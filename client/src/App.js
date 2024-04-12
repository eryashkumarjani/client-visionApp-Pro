import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Suspense fallback={<h1>Please wait...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default App;
