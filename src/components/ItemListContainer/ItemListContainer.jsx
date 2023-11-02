const ItemListContainer = ({ greeting }) => {
  const greetingStyles = {
    fontSize: "2.5rem",
    fontWeight: "700",
    textAlign: "center",
    color: "#f4f4f4",
    paddingTop: "50px",
  };
  return <div className="titulo" style={greetingStyles}>{greeting}</div>;
};

export default ItemListContainer;
