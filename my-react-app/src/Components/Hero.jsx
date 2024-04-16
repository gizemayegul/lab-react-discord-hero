import background from "../assets/discord-background.png";
export default function Hero() {
  return (
    <div className="Hero-container">
      <h1>
        IMAGINE A <br />
        PLACE...
      </h1>
      <p>
        where you can belong to a school club, a gaming group, or <br /> a
        worldwide art community. Where just you and a handful of
        <br /> friends can spend time together. A place that makes it easy to
        <br />
        talk every day and hang out more often.
      </p>
      <div className="hero-body">
        <div className="button-container">
          <button>Download for Mac</button>
          <button>Open Discord in your browser</button>
        </div>
        <div className="img-container">
          <img src={background} alt="background" />
        </div>
      </div>
    </div>
  );
}
