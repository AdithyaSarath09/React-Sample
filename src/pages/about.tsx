
const AboutUs = () => {
  return (
    <>
      <style>
        {`
          .about-container {
            position: absolute;    /* FIX */
            top: 0;                /* FIX */
            left: 0;               /* FIX */

            width: 100vw;
            height: 100vh;
            background-color: lightblue;

            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .about-title {
            font-size: 48px;
            font-weight: bold;
            color: blue;
          }
        `}
      </style>

      <div className="about-container">
        <h1 className="about-title">About Us</h1>
      </div>
    </>
  );
};

export default AboutUs;
