// Components
import { Grid, Paper, Chip, Typography, Tooltip, Button } from "@material-ui/core";

// Styles
import useStyles from "./styles";

const DraftItem = ({ draft, mobile, onClick }) => {
	let quotes = draft.quotes;
	if (quotes.length > 160) {
		quotes = quotes.substring(0, 160) + "...";
	}
	const tags = JSON.parse(draft.tags);
	const classes = useStyles();

	const mobileStyle = `${mobile ? classes.draftItemContainerMobile : classes.draftItemContainer}`;

	return (
		<Paper className={`${classes.draftItem} ${mobileStyle}`} component={Grid} container>
			<Grid item xs={12}>
				<Typography variant="h6" className={classes.quotes}>
					{quotes}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Paper component="ul" className={classes.chipContainer} elevation={0}>
					{tags.map((tag, index) => {
						if (index < 5) {
							return (
								<li key={tag}>
									<Chip size="small" label={`#${tag}`} className={classes.chip} />
								</li>
							);
						}
						return null;
					})}
				</Paper>
			</Grid>
			<Grid
				container
				item
				xs={12}
				justifyContent={mobile ? "center" : "space-between"}
				alignItems="center"
				className={classes.detailContainer}
			>
				<Typography
					variant="body2"
					color="textSecondary"
					className={classes.lastEdited}
					component={Grid}
					item
				>
					Last edited: {draft.date}
				</Typography>
				{!mobile && (
					<Grid item className={classes.editButtonContainer}>
						<Tooltip title="Open draft" placement="top">
							<Button
								variant="contained"
								color="primary"
								className={classes.editButton}
								size="small"
								onClick={() => onClick(draft.key)}
							>
								Open
							</Button>
						</Tooltip>
					</Grid>
				)}
			</Grid>
		</Paper>
	);
};

export default DraftItem;
