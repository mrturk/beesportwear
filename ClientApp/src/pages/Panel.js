import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function Panel() {
  let history = useHistory();

  useEffect(() => {
    console.log(localStorage.getItem("auth"));
    if (localStorage.getItem("auth") !== "true") {
      history.push("/Login");
    }
  });
  return (
    <>
      <div>panel</div>
    </>
  );
}
