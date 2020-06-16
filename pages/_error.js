import React from "react";
import Link from "next/link";

const errorPage = () => (
  <div>
    <h1>Oops, Something went wrong dawg !!</h1>
    <p>
      {" "}
      Try{" "}
      <Link href="/">
        <a>Going Back Tho</a>
      </Link>
    </p>
  </div>
);

export default errorPage;
