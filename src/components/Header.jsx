import PropTypes from "prop-types";
import Button from "./Button";
function Header({ title }) {
  const handleClick = () => {
    console.log("Click with handle");
  };
  return (
    <header>
      <h1>{title}</h1>
      <Button
        handleClick={handleClick}
        color="purple"
        text="Show Add Task Bar"
      />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

/* Header.defaultProps{
    title:"Task Tracker",
}; */
export default Header;
