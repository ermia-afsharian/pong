import './styles/game.css';
import Game from './partials/Game';
import {BOARD_WIDTH, BOARD_HEIGHT} from './settings';




// create a game instance
const game = new Game('game', 512, 256);

(function gameLoop() {
  game.render();

  requestAnimationFrame(gameLoop);
})();
