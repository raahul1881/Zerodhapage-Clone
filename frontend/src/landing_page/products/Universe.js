import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="\media\images\smallcaseLogo .png" alt="Smallcase" />
          <p className="text-small text-muted">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="\media\images\streakLogo.png" alt="Streak" style={{ width: "140px", height: "auto" }} />
          <p className="text-small text-muted">Algo & Strategy platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="\media\images\sensibullLogo .svg" alt="Sensibull" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="\media\images\zerodhaFundhouse .png" alt="Zerodha Fund House" style={{ width: "140px", height: "auto" }}/>
          <p className="text-small text-muted">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="\media\images\goldenpiLogo.png" alt="GoldenPi" />
          <p className="text-small text-muted">Algo trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="\media\images\dittoLogo.png" alt="DittoLogo" style={{ width: "140px", height: "auto" }} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Signup now</button>
      </div>
    </div>
  );
}

export default Universe;
