import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast';
import EditorPage from './pages/EditorPage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div>
        <Toaster 
        position="top-right"
        toastOptions = {{
          success: {
            theme: {
              primary: '#4aed88',
            }
          }
        }}
        />
        </div>      
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/editor/:roomId" element={<EditorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
