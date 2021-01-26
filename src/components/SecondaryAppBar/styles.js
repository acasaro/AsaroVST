const drawerWidth = 280;

const styles = (theme) => ({
  toolbar: {
    display: "flex",
  },
  appBar: {
    background: "#1F2933",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appTitle: {
    flexGrow: 1,
    textAlign: "center",
    color: "#D8D8D8",
  },

  appBarShift: {
    borderBottom: "10px solid #EF854B",
    // width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  button: {
    marginLeft: 15,
  },
});
export default styles;
