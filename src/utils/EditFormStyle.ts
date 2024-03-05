export const FormStyle = {
  container: {
    border: "black solid 3px",
    mt: 4,
    borderRadius: "4px",
    pt: 2,
    pb: 3,
    px: 10,
    background: "linear-gradient(to left bottom, #61a8c7, #fff)"
  },
  inputContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: 4,
  },  
  inputTitle: {
    font: "35px Fira Sans, sans-serif",
    pr: 3,    
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  title:{
    font: "60px Fira Sans, sans-serif",
    userSelect: "none",
    textTransform: "uppercase",
  },
  button: {
    font: "35px Fira Sans, sans-serif",
    color: "#000",
    mt: 3,
    border: "solid 3px #000",
    alignSelf: "end",
    "&:hover" : {
      backgroundColor: "#61a8c7",
      boxShadow: "3px 5px 5px -1px #000",
    }
  }
};