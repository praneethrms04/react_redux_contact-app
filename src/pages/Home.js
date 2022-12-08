import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteContact } from "../redux/contact/action/conatactActions";
import Navbar from "../components/Navbar";
import Table from "react-bootstrap/Table";

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const deleteHandler = (id) => {
    // dispatch({ type: "DELETE_CONTACT", payload: id });
    dispatch(deleteContact(id));
    toast.success("Contact Deleted successfully !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-5 text-right">
            <Link to="/add" className="btn btn-outline-dark ml-auto ">
              Add Contact
            </Link>
          </div>
          <div className="col-md-10 mx-auto">
            <Table striped bordered hover>
              <thead>
                <tr className="bg-dark text-white text-center">
                  <th>ID</th>
                  <th>FULL NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE NUMBER</th>
                  <th>Edit & Delete</th>
                </tr>
              </thead>
              <tbody>
                {contacts.length > 0 ? (
                  contacts.map((contact, id) => (
                    <tr className="text-center" key={id}>
                      <td>{contact.id + 1}</td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                      <td>
                        <Link
                          to={`/edit/${contact.id}`}
                          className="btn btn-sm btn-primary "
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          onClick={() => deleteHandler(contact.id)}
                          className="btn btn-sm btn-danger ms-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="text-center">
                    <th>--</th>
                    <th>--</th>
                    <th>No Contacts</th>
                    <th>--</th>
                    <th>--</th>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
