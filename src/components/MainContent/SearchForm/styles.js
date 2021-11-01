import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	searchBar: {
		width: "100%",
		height: "100%",
		border: "none",
		boxShadow: "none",
		borderRadius: "15px"
	},
	searchFormContainer: {
		position: "sticky",
		zIndex: "10",
		top: "24px",
		width: "100%",
		borderRadius: "15px",
		border: "1px solid rgba(0, 0, 0, 0.12)",
		boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
		opacity: "1",
		transition: "0.2s ease-out"
	},
	hide: {
		opacity: "0.5 !important"
	},
	searchFormContainerMobile: {
		height: "56px",
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		zIndex: 2,
		display: "flex",
		boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
		border: "1px solid rgba(0, 0, 0, 0.12)",
		borderRadius: 0
	},
	advancedSearchContainer: {
		borderLeft: "1px solid rgba(0, 0, 0, 0.08)",
		textAlign: "center"
	}
}));

export default useStyles;
