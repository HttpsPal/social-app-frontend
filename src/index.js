import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import App from "./App";
import Store from "./app/Store";

import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<StrictMode>
		<CookiesProvider>
			<Provider store={Store}>
				<App />
			</Provider>
		</CookiesProvider>
	</StrictMode>
);
