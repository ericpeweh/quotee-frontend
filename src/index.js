// Dependencies
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import swDev from "./swDev";

// Redux
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
swDev();
