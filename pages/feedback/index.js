import React, { useState } from "react";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Feedback = () => {
  const [userData, setuserData] = useState({ name: "", email: "" });
  const [dataOnConsole, setDataOnConsole] = useState(false);
  const router = useRouter();
  const submItFormData = (e) => {
    console.log("userData", userData); // when we submit the data this function triggeres and console.log used
    e.preventDefault(); // stop all defaulw work of submit data function
    setDataOnConsole(true);
  };
  return (
    <>
      {!dataOnConsole ? (
        <div className={style.form_page}>
          <p onClick={() => router.replace("/")} className={style.backButton}>
            {"<--   Back"}
          </p>
          <div>
            <form onSubmit={submItFormData}>
              <h3>Form Submit</h3>
              <div className={`form-group ${style.form_row}`}>
                <label htmlFor="Name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="pwd"
                  value={userData.name}
                  onChange={(e) => {
                    setuserData({ ...userData, name: e.target.value });
                  }}
                  required
                />
              </div>
              <div className={`form-group`}>
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={userData.email}
                  onChange={(e) => {
                    setuserData({ ...userData, email: e.target.value });
                  }}
                  required
                />
              </div>
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <>
          <h3 className={style.dataOnConsole}>
            Yeee :) Data is printed on Console
          </h3>
        </>
      )}
    </>
  );
};

export default Feedback;
