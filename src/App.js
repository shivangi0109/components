import Sidebar from './components/Sidebar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';

function App() {

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/">
        <DropdownPage />
      </Route>
      <Route path="/buttons">
        <ButtonPage />
      </Route>
    </div>
  )
};

export default App;