import { Routes } from './routes/Routes'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import { UserProvider } from './shared/provider/UserProvider'
import './shared/css/GlobalCSS.css'

function App() {
	return (
		<UserProvider>
			<Routes>
				<NavigationBar />
			</Routes>
		</UserProvider>
	);
}

export default App;
