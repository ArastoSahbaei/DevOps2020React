import { Routes } from './routes/Routes'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import './shared/css/GlobalCSS.css'

function App() {
	return (
		<Routes>
			<NavigationBar />
		</Routes>
	);
}

export default App;
