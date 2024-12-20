# Scrabble Game Implementation

## Features Overview

### Fully Working Features
1. **Tile Drag-and-Drop Functionality**
   - Users can drag letter tiles from the tile rack to the scrabble board and vice versa.
   - Tiles snap into place within board slots or back into the rack, maintaining their relative positioning.
   - The `reinitializeDraggable()` function ensures tiles remain draggable after being moved.

2. **Single Row Scrabble Board**
   - A single row of scrabble board slots with bonus slots like "Double Word Score."
   - Each slot acts as a droppable area, dynamically accepting tiles and updating the word formed.

3. **Word Validation**
   - Words formed on the board are validated against a dynamically loaded `dictionary.txt` file.
   - Valid words are highlighted in green, and invalid words are shown in red.
   - The `validateWord()` function efficiently checks word validity.

4. **Dynamic Score Calculation**
   - Scores are calculated based on letter values and slot multipliers (e.g., "Double Word Score").
   - The `calculateScore()` function incorporates multipliers accurately, with scores updating dynamically as tiles are placed.

5. **Tile Rack Management**
   - The tile rack holds up to 7 tiles at a time and is automatically replenished when tiles are used.
   - The `generateTiles()` function ensures new tiles are added only if there are available slots in the rack.

6. **Blank Tile Functionality**
   - Blank tiles can be dynamically assigned a letter via a modal when placed on the board.
   - The assigned letter updates the tile's appearance and the formed word.

7. **Game Restart and Reset**
   - A "Restart Game" button resets all components, including the board, rack, scores, and tile pool.

8. **Remaining Tiles and Score Tracking**
   - Tracks and displays the remaining tiles in the pool.
   - Records and displays the highest score achieved during the session.

---

### Partially Working Features
1. **Drag-and-Drop Behavior in Rack**
   - Tiles can be dragged and returned to the rack.
   - Occasionally, tiles overlap or shift positions when dropped into the rack due to incomplete alignment logic.

2. **Remaining Tiles Display in "Deal Tiles" Scenario**
   - The count of remaining tiles is tracked and displayed.
   - Occasional mismatches occur when tiles are removed, returned to the rack, or shuffled using the "Deal Tiles" button.

---

### Features Not Yet Implemented
1. **UI Enhancements**
   - Improved styling, animations, and visual feedback for user interactions.

2. **Timer or Turn Limits**
   - No timer or move limit is currently implemented. Adding one could enhance gameplay by introducing challenge.

3. **Mobile Responsiveness**
   - The drag-and-drop functionality is not optimized for mobile touchscreens.

4. **Tile Locking**
   - Tiles placed on the board are not locked, making it possible to accidentally move them.

---

## Challenges Faced During Development
1. **Drag-and-Drop Functionality**
   - Handling z-index, position, and revert properties to ensure tiles snap correctly into place.

2. **Dynamic Word Updates**
   - Tracking the word dynamically while allowing tiles to move between the rack and the board.
   - The `buildWord()` function rebuilds the word from the current board state.

3. **Dictionary Integration**
   - The `dictionary.txt` file only works when served via a live server (e.g., VS Code's Live Server).
   - Fetching the file dynamically in a local environment caused cross-origin issues.

4. **Tile Replenishment Logic**
   - Managing a finite tile pool while replenishing the rack required additional logic to track remaining tiles.

5. **Blank Tile Management**
   - Integrating a modal to dynamically assign letters to blank tiles while ensuring word updates were accurate.

---

## Future Improvements
1. **Multi-Row and Multi-Player Support**
   - Expand the board to include all rows and support turn-based gameplay for multiple players.

2. **Word Orientation and Adjacency Validation**
   - Add checks for horizontal/vertical alignment and connectivity to existing words.

3. **Enhanced UI/UX**
   - Improve visual design and animations for a more engaging experience.

4. **Comprehensive Scoring Rules**
   - Add additional bonus squares like "Triple Letter Score" and "Triple Word Score."

5. **Game State Persistence**
   - Implement the ability to save and load the game state for longer sessions.
