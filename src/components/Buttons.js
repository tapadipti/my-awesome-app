// src/components/Buttons.js

import { Link } from "react-router-dom";

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