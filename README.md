# Zombie Hoard

Zombie Hoard is a simple shoot-em up game where players control a tank to shoot down incoming zombies. Use the arrow keys to turn the tank left or right and the space bar to shoot bullets at the zombies. The objective is to survive as long as possible by eliminating the incoming threats.

## Gameplay Instructions

1. Use the **left arrow key** to turn the tank left.
2. Use the **right arrow key** to turn the tank right.
3. Press the **space bar** to shoot bullets at zombies.

The game features blob-shaped zombies that move towards the player's tank. The player must aim and shoot accurately to eliminate the zombies before they reach the tank. If a zombie collides with the player's tank, it's game over.

## Code Overview

The game consists of several JavaScript files:

### Blob.js

This file (`Blob.js`) contains code related to rendering the zombie blobs on the screen. The `Blob` object's `sprite.draw` method is responsible for drawing the blob on the canvas.

### Player.js

The `Player.js` file holds the code for player interactions. The player's tank can shoot bullets to eliminate zombies. The `bullet.addSpeed` function is used to add speed to bullets, and the player's ability to shoot is regulated based on certain conditions.

### index.html

The `index.html` file is the main HTML file that sets up the game interface. It includes references to necessary JavaScript files (`Player.js`, `sketch.js`) and the game's stylesheet (`style.css`). It provides instructions to players on how to play the game.

### sketch.js

The `sketch.js` file likely contains the main game logic and interactions. The provided code snippet seems incomplete, but it appears to involve functions related to handling collisions and gameplay.

### style.css

The `style.css` file contains styling rules for the game's HTML interface. It's used to adjust margins, padding, and text color to create a visually appealing interface.

## Playing the Game

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Follow the provided instructions to control the tank using arrow keys and shoot using the space bar.
4. Try to eliminate as many zombies as possible and survive for as long as you can!

Have fun playing Zombie Hoard! If you encounter any issues or have suggestions for improvements, feel free to contribute to the game's development.