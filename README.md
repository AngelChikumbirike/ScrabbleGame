Write-Up: Scrabble Game Implementation
Features Overview
Fully Working Features:
1.
Tile Drag-and-Drop Functionality
•
Users can drag letter tiles from the tile rack to the scrabble board and vice versa.
•
Tiles correctly snap into place within board slots or back into the rack, retaining their relative positioning.
•
The reinitializeDraggable() function ensures the tiles remain draggable even after being moved between the board and the rack.
2.
Single Row Scrabble Board:
•
A single row of scrabble board slots is implemented with proper bonus slots ("Double Word Score").
•
Each slot is a droppable area, and it accepts tiles dynamically, updating the word formed on the board.
3.
Word Validation:
•
Words formed on the board are validated against a dynamically loaded dictionary.txt file.
•
Valid words are highlighted in green, while invalid words are shown in red.
•
The validateWord() function effectively checks the word against the dictionary.
4.
Dynamic Score Calculation:
•
Scores are calculated based on the letter values and slot multipliers (e.g., "Double Word Score").
•
The calculateScore() function incorporates multipliers accurately, and scores are displayed dynamically as tiles are placed.
5.
Tile Rack Management:
•
The tile rack holds up to 7 tiles at a time, replenished automatically when tiles are removed or used.
•
The generateTiles() function ensures that new tiles are added only if the rack has available slots.
6.
Blank Tile Functionality:
•
Blank tiles can be dynamically assigned a letter via a modal that pops up when a blank tile is placed on the board.
•
The assigned letter updates the tile's visual appearance and the formed word accordingly.
7.
Game Restart and Reset:
•
The "Restart Game" button resets all game components, including the board, rack, scores, and tile pool.
8.
Remaining Tiles and Score Tracking:
•
The remaining tiles in the pool are tracked and displayed.
•
The highest score achieved is recorded and displayed throughout the session.
Partially Working Features
1.
Drag-and-Drop Behavior in Rack:
•
Tiles can be dragged and returned to the rack successfully.
•
However, when tiles are dropped into the rack, they sometimes overlap or shift positions due to incomplete handling of tile alignment within the rack.
2.
Remaining Tiles Display in Deal Tiles Scenario:
•
The count of remaining tiles is tracked and displayed on the screen.
•
There are occasional inconsistencies when tiles are removed and returned to the rack or shuffled using the "Deal Tiles" button, leading to a mismatch between the displayed and actual count of tiles in the pool.
Features Not Yet Implemented
1.
UI Enhancements:
•
The design is functional but could benefit from styling improvements, animations, and visual feedback for interactions.
2.
Timer or Turn Limits:
•
There is no timer or move limit to add pressure or challenge to the game. Implementing a timer could enhance the gameplay experience.
3.
Mobile Responsiveness:
•
The drag-and-drop functionality may not be optimized for mobile devices with touchscreens. Adding touch-friendly features is essential for wider accessibility.
4.
Tile Locking:
•
There is no feature to lock tiles in place once they are correctly placed on the board. This could help players avoid accidentally moving placed tiles.
Challenges Faced During Development
1.
Drag-and-Drop Functionality:
•
Implementing drag-and-drop required careful handling of z-index, position, and revert properties to ensure tiles snapped correctly into place.
2.
Dynamic Word Updates:
•
Keeping track of the word dynamically while allowing tiles to move back and forth between the rack and the board was challenging.
•
The buildWord() function had to be carefully designed to rebuild the word from the board state.
3.
Dictionary Integration:
•
The dictionary.txt file only works when served via VS Code's live server.
•
Fetching the file dynamically in a local environment without a live server caused cross-origin issues.
4.
Tile Replenishment Logic:
•
Replenishing tiles in the rack while maintaining a finite tile pool required additional logic to track the number of tiles remaining for each letter.
5.
Blank Tile Management:
•
Dynamically assigning letters to blank tiles required integrating a modal while ensuring the word updates correctly after the assignment.
Future Improvements
1.
Multi-Row and Multi-Player Support:
•
Expand the board to include all rows and add support for multiple players with turn-based gameplay.
2.
Word Orientation and Adjacency Validation:
•
Implement checks for valid word placement, including horizontal/vertical alignment and connectivity to existing words.
3.
Enhanced UI/UX:
•
Improve the visual design and animations to create a more engaging user experience.
4.
Comprehensive Scoring Rules:
•
Incorporate additional bonus squares like "Triple Letter Score" and "Triple Word Score."
5.
Game State Persistence:
•
Add the ability to save and load the game state for longer sessions.
