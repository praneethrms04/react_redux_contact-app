import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const EditContact = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
    }
  }, [currentContact]);

  const submitHandler = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find(
      (contact) =>
      //  contact.id !== parseInt(id) &&
        contact.email === email
    );
    const checkPhone = contacts.find(
      (contact) => contact.phone === parseInt(phone)
    );
    if (!name || !email || !phone) {
      return toast.warn("Please fill in all fields !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (checkEmail) {
      return toast.error("Email Already Exists !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (checkPhone) {
      return toast.error("Phone Number is Already Exists !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    const data = {
      id: parseInt(id),
      name,
      email,
      phone,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact Updated successfully !", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/");
    // console.log(data);
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h1 className="fw-bolder pt-4 pb-2">Edit Contact {id}</h1>
        <div className="row">
          <div className="col-md-4 mx-auto p-5 bg-secondary rounded">
            {currentContact ? (
              <form onSubmit={submitHandler}>
                <div className="form-group m-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group  m-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group  m-3">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="d-flex">
                    <input
                      className="btn btn-success fw-bolder"
                      type="submit"
                      value="Update"
                    />
                    <Link
                      to="/"
                      className="btn btn-primary ms-2 text-dark fw-bolder"
                    >
                      Home
                    </Link>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center text-warning">
                <h4 className="bg-dark rounded p-3">
                  No contact on this id {id}
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditContact;
