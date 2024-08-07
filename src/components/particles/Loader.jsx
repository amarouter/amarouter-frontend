import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <Spinner animation="border" role="status" style={{}}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
