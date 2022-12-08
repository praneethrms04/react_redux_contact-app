import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../redux/contact/action/conatactActions";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

const AddContact = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find((element) => element.email === email);
    const checkPhone = contacts.find(
      (element) => element.phone === parseInt(phone)
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
      id: contacts.length - 1 + 1,
      name,
      email,
      phone,
    };
    // dispatch({ type: "ADD_CONTACT", payload: data });
    dispatch((addContact(data)))
    toast.success("Contact Added successfully !", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/");
    // console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h1 className="text-center fw-bolder pt-4 pb-2">Add Post</h1>
        <div className="row">
          <div className="col-md-4 mx-auto p-5 bg-dark rounded">
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
              <div className="form-group">
                <input
                  className="btn btn-block btn-light"
                  type="submit"
                  value="Add Student"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContact;
