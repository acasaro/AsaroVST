const drawerWidth = 380;
const styles = (theme) => ({
  header: {
    display: "flex",
    background: "#2E3A46",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    height: 40,
    minHeight: 40,
    // necessary for content to be below app bar
    justifyContent: "start",
    color: "#D8D8D8",
    fontWeight: 700,
  },
  drawer: {
    paddingTop: 74,
    color: "#fff",
    background: "#3A4752",
    borderRight: "solid 3px #979797",
    width: drawerWidth,
    height: "100%",
    // height: "110vh",
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerToolbar: {
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    background: "#46545f",
    padding: theme.spacing(0, 2),
    height: 40,
    color: "#D8D8D8",
  },
  drawerToolbarSecondary: {
    justifyContent: "start",
    alignItems: "center",
    display: "flex",
    background: "#46545f",
    padding: theme.spacing(0, 2),
    height: 40,
    color: "#D8D8D8",
  },
  toolButton: {
    color: "#D8D8D8",
  },
});
export default styles;
