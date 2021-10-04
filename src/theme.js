// Dependencies
import { createTheme } from "@material-ui/core";

const baseTheme = createTheme({
	// Dialog modal
	overrides: {
		MuiDialog: {
			paper: {
				borderRadius: "15px"
			}
		},
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: "#cfd8ff",
				color: "white"
			}
		},
		MuiButton: {
			textPrimary: {
				color: "white",
				borderRadius: "15px",
				backgroundColor: "#8896cd"
			}
		},
		MuiMenu: {
			paper: {
				borderRadius: "15px"
			}
		}
	},
	typography: {
		fontFamily: [
			"proxima-nova",
			"Roboto",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(",")
	}
});

export const lightTheme = createTheme({
	...baseTheme,
	palette: {
		// type: "dark",
		primary: {
			main: "#ff9aa2",
			light: "#ffc7cb"
		},
		secondary: {
			light: "#cfd8ff",
			main: "#8896cd"
		},
		info: {
			main: "#ffdac1"
		},
		success: {
			main: "#81d4b6",
			dark: "#86cfb5"
		}
	}
});

export const darkTheme = createTheme({
	...baseTheme,
	palette: {
		type: "dark",
		primary: {
			main: "#ff9aa2",
			light: "#ffc7cb"
		},
		secondary: {
			light: "#cfd8ff",
			main: "#8896cd"
		},
		info: {
			main: "#ffdac1"
		},
		success: {
			main: "#81d4b6",
			dark: "#86cfb5"
		}
	},
	// Dialog modal
	overrides: {
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: "#8896cd",
				color: "white"
			}
		}
	}
});
