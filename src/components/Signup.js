// src/components/Buttons.js

import { Link } from "react-router-dom";

export default function AllButtons() {
  return (
    <div>
      <h2>Buttons</h2>
      <h3>Click on these buttons!</h3>
      <div>
      <a href="/" data-analytics='"Register", {"props":{"plan":"Navigation"}}'>Register</a>
      <br></br>
      <button onclick="sendYesToPlausible();">Yes!!!!! </button>
      <br></br>
      <button onclick="sendNoToPlausible();">No!!!!! </button>
      </div>
      <div>
            <Link to={"/"}>
              <span>
                <span>
                  <h2>Yes, I want to sign up</h2>
                </span>
              </span>
            </Link>

            <Link to={"/"}>
              <span>
                <span>
                  <h2>No, I don't want to sign up</h2>
                </span>
              </span>
            </Link>
      </div>
    </div>
  );
}