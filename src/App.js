import { Routes, Route } from 'react-router-dom';
// @import components
import MainLayout from 'layout/MainLayout';
// @import dependencies
import { Helmet } from 'react-helmet';

function App() {
  const handleLogout = () => {
    console.log('logout');
  };

  return (
    <>
      <Helmet>
        <title>Lyca</title>
        <meta name='description' content='Your page description here' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Helmet>
      <Routes>
        <Route path='/*' element={<MainLayout handleLogout={handleLogout} />} />
      </Routes>
    </>
  );
}

export default App;
