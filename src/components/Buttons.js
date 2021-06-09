// src/components/Buttons.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function AllButtons() {
  return (
    <div>
      <h2>Buttons</h2>
      <h3>Click on these buttons!</h3>
      <div>
            <Link to={"/signup"}>
              <span>
                <span>
                  <h2>Signup</h2>
                </span>
              </span>
            </Link>
      </div>
    </div>
  );
}