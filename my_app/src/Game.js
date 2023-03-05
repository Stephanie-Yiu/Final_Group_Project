import "./Game.css";
import CloseIcon from "@mui/icons-material/Close";
import Crop75Icon from "@mui/icons-material/Crop75";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import slapjack from "./img/slapjackscreen.png";
import singledog from "./img/singledog.png";
import snakegame from "./img/snakegame.png";
import choosecolor from "./img/choosecolor.png";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link } from "react-router-dom";

function Games() {
  return (
    <div className="container pb-5">
      <h1 className="d4d4 fw-bold text-center about-title mt-5 py-5 display-5 mb-3">
        {"< PlayGround />"}
      </h1>

      <div className="green text-center position-relative py-1 test">
        <h3>
          OUR GAMES
          <SportsEsportsIcon />
          <span className="position-absolute end-0 pe-3 d-none d-sm-inline">
            <HorizontalRuleIcon /> <Crop75Icon /> <CloseIcon />
          </span>
        </h3>
      </div>
      <div className="gameContainer text-center p-3">
        <div className="row mb-4">
          <div className="col-md-6 p-4 position-relative">
            <Link
              to="https://slackjack-group-projectdan-ji-ban.joannayau1996.repl.co/"
              target="_blank"
              className="gamelink"
            >
              <img
                src={slapjack}
                alt="Slap_Jack_Game"
                className="game-img w-100"
                id="game1"
              />
            </Link>
            <h2 className="gameText fw-bold fs-1">Slap Jack</h2>
          </div>
          <div className="col-md-6 p-4  position-relative">
            <Link
              to="https://quickwittedwarlikebaitware.joannayau1996.repl.co/"
              target="_blank"
              className="gamelink"
            >
              <img
                src={singledog}
                alt="single_Dog_game"
                className="game-img w-100"
                id="game2"
              />
            </Link>
            <h2 className="gameText fw-bold fs-1">Single Dog</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 p-4  position-relative">
            <Link
              to="https://sanke-game.kevin14tsui.repl.co/"
              target="_blank"
              className="gamelink"
            >
              <img
                src={snakegame}
                alt="snake_game"
                className="game-img w-100"
                id="game3"
              />
            </Link>
            <h2 className="gameText fw-bold fs-1">Snake Game</h2>
          </div>
          <div className="col-md-6 p-4  position-relative">
            <Link
              to="https://judiciousessentialdatasets.joannayau1996.repl.co/"
              target="_blank"
              className="gamelink"
            >
              <img
                src={choosecolor}
                alt="choose_color_not_name_game"
                className="game-img w-100"
                id="game4"
              />
            </Link>
            <h2 className="gameText fw-bold fs-1">Choose Color Not Name</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
