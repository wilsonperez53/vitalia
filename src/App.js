import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MealPlan from './pages/MealPlan';
import Reminders from './pages/Reminders';
import Tips from './pages/Tips';
import Assistance from './pages/Assistance';
import Tracking from './pages/Tracking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meal-plan' element={<MealPlan />} />
        <Route path='/reminders' element={<Reminders />} />
        <Route path='/tips' element={<Tips />} />
        <Route path='/assistance' element={<Assistance />} />
        <Route path='/tracking' element={<Tracking />} />
      </Routes>
    </Router>
  );
}

export default App;