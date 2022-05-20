import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/Auth-context/Auth-context";

const Signup = () => {
  const { signup, login, isLoading } = useAuth();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { email, password } = data;
  console.log("data from signup page", data);

  return (
    <>
      <div className="container w-25 p-5 shadow mt-5">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            signup(data);
            login({ email, password });
          }}
        >
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              First Name
            </label>
            <input
              onChange={(event) =>
                setData({ ...data, firstName: event.target.value })
              }
              type="text"
              className="form-control"
              placeholder="eg: Anish"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Last Name
            </label>
            <input
              onChange={(event) =>
                setData({ ...data, lastName: event.target.value })
              }
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="eg: Kumar"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              onChange={(event) =>
                setData({ ...data, email: event.target.value })
              }
              type="email"
              className="form-control"
              placeholder="eg: Anishkumar@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              onChange={(event) =>
                setData({ ...data, password: event.target.value })
              }
              type="password"
              className="form-control"
              placeholder="eg: Anish@123sd"
            />
          </div>
          <div className=" mt-4 d-flex flex-column justify-content-center">
            <button type="submit" className="btn btn-primary w-100">
              SignUp
            </button>
            <Link
              className="mt-4 link-primary d-flex justify-content-center"
              to="/signin"
            >
              Already Have Account ?
            </Link>
          </div>
        </form>
        {isLoading && }
      </div>
    </>
  );
};
export { Signup };
