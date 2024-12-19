$(document).ready(function() {
    const board = $("#scrabble-board");
    const tileRack = $("#tile-rack");
    const wordDisplay = $("#word-display");
    const scoreDisplay = $("#score-display");
    const remainingTilesDisplay = $("#remaining-tiles");
    const highestScoreDisplay = $("#highest-score");

    let currentWord = "";
    let currentScore = 0;
    let highestScore = 0;
    let remainingTiles = 93;
    const dictionary = {}; // Load dictionary dynamically

    // Scrabble tile configuration
    const scrabbleBoard = {
        slots: [{
                letterMultiplier: 1,
                wordMultiplier: 1,
                image: "Scrabble_BlankSquare.jpg"
            },
            {
                letterMultiplier: 1,
                wordMultiplier: 2,
                image: "Scrabble_DoubleWord.jpg"
            },
            {
                letterMultiplier: 1,
                wordMultiplier: 1,
                image: "Scrabble_BlankSquare.jpg"
            },
            {
                letterMultiplier: 1,
                wordMultiplier: 1,
                image: "Scrabble_BlankSquare.jpg"
            },
            {
                letterMultiplier: 1,
                wordMultiplier: 1,
                image: "Scrabble_BlankSquare.jpg"
            },
            {
                letterMultiplier: 1,
                wordMultiplier: 2,
                image: "Scrabble_DoubleWord.jpg"
            },
            {
                letterMultiplier: 1,
                wordMultiplier: 1,
                image: "Scrabble_BlankSquare.jpg"
            }
        ]
    };
    // Scrabble tile configuration
    const scrabbleTiles = {
        A: {
            value: 1,
            originalDistribution: 9,
            numberRemaining: 9,
            image: "Scrabble_Tiles/Scrabble_Tile_A.jpg"
        },
        B: {
            value: 3,
            originalDistribution: 2,
            numberRemaining: 2,
            image: "Scrabble_Tiles/Scrabble_Tile_B.jpg"
        },
        C: {
            value: 3,
            originalDistribution: 2,
            numberRemaining: 2,
            image: "Scrabble_Tiles/Scrabble_Tile_C.jpg"
        },
        D: {
            value: 2,
            originalDistribution: 4,
            numberRemaining: 4,
            image: "Scrabble_Tiles/Scrabble_Tile_D.jpg"
        },
        E: {
            value: 1,
            originalDistribution: 12,
            numberRemaining: 12,
            image: "Scrabble_Tiles/Scrabble_Tile_E.jpg"
        },
        F: {
            value: 4,
            originalDistribution: 2,
            numberRemaining: 2,
            image: "Scrabble_Tiles/Scrabble_Tile_F.jpg"
        },
        G: {
            value: 2,
            originalDistribution: 3,
            numberRemaining: 3,
            image: "Scrabble_Tiles/Scrabble_Tile_G.jpg"
        },
        H: {
            value: 4,
            originalDistribution: 2,
            numberRemaining: 2,
            image: "Scrabble_Tiles/Scrabble_Tile_H.jpg"
        },
        I: {
            value: 1,
            originalDistribution: 9,
            numberRemaining: 9,
            image: "Scrabble_Tiles/Scrabble_Tile_I.jpg"
        },
        J: {
            value: 8,
            originalDistribution: 1,
            numberRemaining: 1,
            image: "Scrabble_Tiles/Scrabble_Tile_J.jpg"
        },
        K: {
            value: 5,
            originalDistribution: 1,
            numberRemaining: 1,
            image: "Scrabble_Tiles/Scrabble_Tile_K.jpg"
        },
        L: {
            value: 1,
            originalDistribution: 4,
            numberRemaining: 4,
            image: "Scrabble_Tiles/Scrabble_Tile_L.jpg"
        },
        M: {
            value: 3,
            originalDistribution: 2,
            numberRemaining: 2,
            image: "Scrabble_Tiles/Scrabble_Tile_M.jpg"
        },
        N: {
            value: 1,
            originalDistribution: 6,
            numberRemaining: 6,
            image: "Scrabble_Tiles/Scrabble_Tile_N.jpg"
        },
        O: {
            value: 1,
            originalDistribution: 8,
            numberRemaining: 8,
            image: "Scrabble_Tiles/Scrabble_Tile_O.jpg"
        },
        P: {
            value: 3,
            originalDistribution: 2,
            numberRemaining: 2,
            image: "Scrabble_Tiles/Scrabble_Tile_P.jpg"
        },
        Q: {
            value: 10,
            originalDistribution: 1,
            numberRemaining: 1,
            image: "Scrabble_Tiles/Scrabble_Tile_Q.jpg"
        },
        R: {
            value: 1,
            originalDistribution: 6,
            numberRemaining: 6,
            image: "Scrabble_Tiles/Scrabble_Tile_R.jpg"
        },
        S: {
            value: 1,
            originalDistribution: 4,
            numberRemaining: 4,
            image: "Scrabble_Tiles/Scrabble_Tile_S.jpg"
        },
        T: {
            value: 1,
            originalDistribution: 6,
            numberRemaining: 6,
            image: "Scrabble_Tiles/Scrabble_Tile_T.jpg"
        },
        U: {
            value: 1,
            originalDistribution: 4,
            numberRemaining: 4,
            image: "Scrabble_Tiles/Scrabble_Tile_U.jpg"
        },
        V: {
            value: 4,
            originalDistribution: 2,
            numberRemaining: 2,
            image: "Scrabble_Tiles/Scrabble_Tile_V.jpg"
        },
        W: {
            value: 4,
            originalDistribution: 2,
            numberRemaining: 2,
            image: "Scrabble_Tiles/Scrabble_Tile_W.jpg"
        },
        X: {
            value: 8,
            originalDistribution: 1,
            numberRemaining: 1,
            image: "Scrabble_Tiles/Scrabble_Tile_X.jpg"
        },
        Y: {
            value: 4,
            originalDistribution: 2,
            numberRemaining: 2,
            image: "Scrabble_Tiles/Scrabble_Tile_Y.jpg"
        },
        Z: {
            value: 10,
            originalDistribution: 1,
            numberRemaining: 1,
            image: "Scrabble_Tiles/Scrabble_Tile_Z.jpg"
        },
        _: {
            value: 0,
            originalDistribution: 2,
            numberRemaining: 2,
            image: "Scrabble_Tiles/Scrabble_Tile_Blank.jpg"
        }
    };
    // Initialize the game
    function initializeGame() {
        currentWord = "";
        currentScore = 0; // Initialize current score
        highestScore = 0; // Initialize highest score
        remainingTiles = 93; // Reset remaining tiles count
        wordDisplay.text("");
        scoreDisplay.text("0"); // Reset score display
        highestScoreDisplay.text("0"); // Reset highest score display
        remainingTilesDisplay.text(remainingTiles);
        generateBoard();
        generateTiles();
        // Add this to handle tile alignment in the rack
        setupTileRackDroppable();
    }
    function setupTileRackDroppable() {
        // Make the tile rack droppable for tiles
        tileRack.droppable({
            accept: ".tile",
            drop: function(event, ui) {
                const tile = ui.draggable;
                // Append the tile back to the tile rack
                $(this).append(tile);
                // Reset its CSS position so it aligns correctly in the rack
                tile.css({
                    top: "0",
                    left: "0",
                    position: "relative", // Reset the position to relative
                });
                reinitializeDraggable(tile); // Ensure the tile remains draggable
                // Rebuild the word to reflect changes
                buildWord();
            },
        });
    }
    function generateTiles() {
        const letters = Object.keys(scrabbleTiles); // Possible letters for the tiles
        const existingTiles = tileRack.find(".tile").length; // Count current tiles in the rack
        const emptySlots = 7 - existingTiles; // Calculate how many tiles to add
        let tilesAdded = 0;
        while (tilesAdded < emptySlots) {
            const randomLetter = letters[Math.floor(Math.random() * letters.length)];
            const tileData = scrabbleTiles[randomLetter];

            if (tileData.numberRemaining > 0) {
                tileData.numberRemaining--;

                // Create the tile element
                const tile = $("<div>")
                    .addClass("tile")
                    .css("background-image", `url(${tileData.image})`)
                    .data("letter", randomLetter)
                    .data("original", randomLetter === "_" ? "blank" : "letter") // Mark blank tiles
                    .draggable({
                        revert: "invalid", // Revert if not dropped in a valid spot
                        start: function() {
                            $(this).css("z-index", 1000); // Bring tile to the front while dragging
                        },
                        stop: function() {
                            $(this).css("z-index", ""); // Reset z-index after dropping
                        }
                    });

                tileRack.append(tile); // Add the tile to the rack
                tilesAdded++;
            }
        }

        reinitializeDraggable(tileRack.find(".tile")); // Ensure all tiles are draggable
    }
    function generateBoard() {
        board.empty();
        scrabbleBoard.slots.forEach((slot) => {
            const cell = $("<div>")
                .addClass("board-slot")
                .css("background-image", `url(${slot.image})`)
                .css({
                    position: "relative"
                })
                .data("letterMultiplier", slot.letterMultiplier) // Add letter multiplier to the slot
                .data("wordMultiplier", slot.wordMultiplier) // Add word multiplier to the slot
                .droppable({
                    accept: ".tile",
                    drop: function(event, ui) {
                        const tile = ui.draggable;
                        $(this).append(tile);
                        tile.css({
                            top: "0",
                            left: "0",
                        });
                        tile.addClass("dropped");
                        setTimeout(() => tile.removeClass("dropped"), 1000);

                        // Open modal for blank tiles
                        if (tile.data("letter") === "_") {
                            openLetterSelectionModal(tile);
                        }

                        buildWord();
                    }
                });
            board.append(cell);
        });

        // Add droppable functionality to the tile rack for returning tiles
        tileRack.droppable({
            accept: ".tile",
            drop: function(event, ui) {
                const tile = ui.draggable;
                $(this).append(tile);
                tile.css({
                    top: "0",
                    left: "0",
                });
                // Check if the tile is a blank tile with a selected letter
                if (tile.data("original") === "blank") {
                    resetBlankTile(tile);
                }
                reinitializeDraggable(tile); // Reinitialize draggable functionality
                buildWord(); // Rebuild the word to reflect the tile removal
            }
        });
    }
    // Function to reset the blank tile
    function resetBlankTile(tile) {
        tile.data("letter", "_"); // Reset the tile's letter to blank
        tile.css("background-image", `url(Scrabble_Tiles/Scrabble_Tile_Blank.jpg)`); // Reset appearance
    }
    function updateScoreDisplay() {
        scoreDisplay.text(currentScore);
        highestScoreDisplay.text(highestScore);
    }
    function reinitializeDraggable(elements) {
        elements.draggable({
            revert: "invalid",
            containment: "#game-container",
            start: function() {
                $(this).css("z-index", 1000);
            },
            stop: function() {
                $(this).css("z-index", "");
            }
        });
    }
    // Calculate the score for the current word on the board
    function calculateScore() {
        let wordMultiplier = 1; // Multiplier for the entire word
        let score = 0; // Total base score for the word
        $(".board-slot").each(function() {
            const tile = $(this).find(".tile");
            if (tile.length) {
                const letter = tile.data("letter");
                const letterValue = scrabbleTiles[letter].value;
                // Get multipliers from the slot
                const slotData = $(this).data();
                const letterMultiplier = slotData.letterMultiplier || 1; // Default to 1 if no multiplier
                const slotWordMultiplier = slotData.wordMultiplier || 1; // Default to 1 if no multiplier
                // Calculate base score with letter multiplier
                score += letterValue * letterMultiplier;
                // Accumulate word multiplier (apply only once to the total word)
                if (slotWordMultiplier > 1) {
                    wordMultiplier = Math.max(wordMultiplier, slotWordMultiplier);
                }
            }
        });
        // Apply the word multiplier to the total score
        return score * wordMultiplier;
    }

    // Build the current word from the board
    function buildWord() {
        let tempWord = [];
        $(".board-slot").each(function() {
            const tile = $(this).find(".tile");
            if (tile.length) {
                tempWord.push(tile.data("letter")); // Add the letter of the tile
            } else {
                tempWord.push("_"); // Add an underscore for empty slots
            }
        });
        // Trim leading and trailing underscores
        while (tempWord[0] === "_") tempWord.shift(); // Remove leading underscores
        while (tempWord[tempWord.length - 1] === "_") tempWord.pop(); // Remove trailing underscores
        currentWord = tempWord.join(""); // Join the characters into the currentWord
        wordDisplay.text(currentWord || ""); // Update display or show ""
        validateWord();
    }
    // Load the dictionary file
    function loadDictionary() {
        fetch("dictionary.txt")
            .then(response => response.text())
            .then(data => {
                const words = data.split("\n");
                words.forEach(word => {
                    const trimmedWord = word.trim().toLowerCase();
                    if (trimmedWord) dictionary[trimmedWord] = true; // Add word to dictionary object
                });
                console.log("Dictionary loaded successfully!");
            })
            .catch(error => {
                console.error("Failed to load dictionary.txt:", error);
                alert("Failed to load the dictionary file. Please ensure it is accessible through VS Code Live Server.Open VS Code and right click on index.html and click Open with Live Server.And it works! ");
            });
    }

    // Validate the current word
    function validateWord() {
        if (!currentWord) {
            wordDisplay.css("color", ""); // Reset color if no word is formed
            currentScore = 0; // Reset current score
            updateScoreDisplay(); // Update the score display
            return;
        }
        const lowercaseWord = currentWord.toLowerCase();
        const wordScore = calculateScore(); // Calculate the score for the current word
        // Always update the current score for the formed word
        currentScore = wordScore;
        updateScoreDisplay(); // Display the current score
        if (dictionary[lowercaseWord]) {
            wordDisplay.css("color", "#339933"); // Green color for valid word
        } else {
            wordDisplay.css("color", "red"); // Red color for invalid word
        }
    }
    // Function to open the modal and let the user select a letter
    function openLetterSelectionModal(tile) {
        const modal = $("#letter-selection-modal");
        const letterOptions = $("#letter-options");
        // Clear existing options
        letterOptions.empty();
        // Generate letter options
        const letters = Object.keys(scrabbleTiles).filter(letter => letter !== "_"); // Exclude blank
        letters.forEach(letter => {
            const img = $("<img>")
                .attr("src", `Scrabble_Tiles/Scrabble_Tile_${letter}.jpg`) // Set the correct image path
                .addClass("letterTileInDialog") // Add a class for styling
                .attr("letter", letter) // Add a custom attribute to store the letter
                .css({
                    width: "50px", // Set the size of the tile
                    height: "50px",
                    margin: "5px",
                    cursor: "pointer"
                })
                .on("click", function() {
                    setBlankTileLetter(tile, letter); // Set the selected letter
                    modal.hide(); // Hide the modal after selection
                });

            letterOptions.append(img); // Add each image to the modal
        });
        // Show the modal
        modal.show();
        // Close modal on cancel
        $("#close-modal").on("click", function() {
            modal.hide();
        });
    }
    // Function to set the blank tile letter
    function setBlankTileLetter(tile, letter) {
        tile.data("letter", letter); // Update the tile's data
        tile.css("background-image", `url(Scrabble_Tiles/Scrabble_Tile_${letter}.jpg)`); // Update the tile's appearance
        buildWord(); // Rebuild the word after setting the blank tile letter
    }
    // Event handlers
    $("#submit-word").on("click", function() {
        if (!currentWord) {
            alert("No word formed! Please form a valid word.");
            return;
        }
        const lowercaseWord = currentWord.toLowerCase();
        if (currentWord && dictionary[lowercaseWord]) {
            // Add current score to the highest score
            highestScore += currentScore;
            highestScoreDisplay.text(highestScore);
            // Add word score to current score
            currentScore = 0; // Reset current score
            updateScoreDisplay();
            // Deduct the tiles used from the rack but NOT from remainingTiles
            // Calculate the number of tiles used
            let tilesUsed = 0;
            $(".board-slot").each(function() {
                const tile = $(this).find(".tile");
                if (tile.length) {
                    tilesUsed++;
                }
            });
            // Deduct the tiles used from the remaining count
            remainingTiles -= tilesUsed;
            remainingTilesDisplay.text(remainingTiles);
            // Clear the board slots
            $(".board-slot").each(function() {
                $(this).find(".tile").remove();
            });
            // Reset the rack with new tiles
            generateTiles();
            // Reinitialize draggable functionality for all tiles
            reinitializeDraggable($(".tile"));
            // Reset the current word and UI
            currentWord = "";
            wordDisplay.text("");
            wordDisplay.css("color", ""); // Reset color
            // Check if the game is over
            if (remainingTiles <= 0) {
                alert("Game Over! No more tiles remaining.");
                initializeGame(); // Restart the game
            }
        } else {
            alert("Invalid word! Please try again.");
        }
        // Hide the modal
        hideLetterSelectionModal();
    });

    $("#deal-tiles").on("click", function() {
        const letters = Object.keys(scrabbleTiles); // Possible letters for the tiles
        const existingTiles = tileRack.find(".tile").length; // Count current tiles in the rack
        const emptySlots = 7 - existingTiles; // Calculate empty slots if any

        let tilesAdded = 0;

        // Case 1: If there are empty slots, refill them
        if (emptySlots > 0) {
            while (tilesAdded < emptySlots) {
                const randomLetter = letters[Math.floor(Math.random() * letters.length)];
                const tileData = scrabbleTiles[randomLetter];
                // Check if tiles of this type are still available
                if (tileData.numberRemaining > 0) {
                    // Decrease only the available tiles count for the letter
                    tileData.numberRemaining--;
                    // Create the tile element
                    const tile = $("<div>")
                        .addClass("tile")
                        .css("background-image", `url(${tileData.image})`)
                        .data("letter", randomLetter)
                        .data("original", randomLetter === "_" ? "blank" : "letter") // Mark blank tiles
                        .draggable({
                            revert: "invalid", // Revert if not dropped in a valid spot
                            start: function() {
                                $(this).css("z-index", 1000); // Bring tile to the front while dragging
                            },
                            stop: function() {
                                $(this).css("z-index", ""); // Reset z-index after dropping
                            }
                        });

                    tileRack.append(tile); // Add the tile to the rack
                    tilesAdded++;
                }
            }
        } else {
            // Case 2: If there are no empty slots but no valid word is formed
            // Clear the tile rack and refill it
            tileRack.empty(); // Remove all tiles from the rack

            // Refill the rack with a new set of tiles
            while (tilesAdded < 7) {
                const randomLetter = letters[Math.floor(Math.random() * letters.length)];
                const tileData = scrabbleTiles[randomLetter];
                // Check if tiles of this type are still available
                if (tileData.numberRemaining > 0) {
                    // Decrease only the available tiles count for the letter
                    tileData.numberRemaining--;
                    // Create the tile element
                    const tile = $("<div>")
                        .addClass("tile")
                        .css("background-image", `url(${tileData.image})`)
                        .data("letter", randomLetter)
                        .data("original", randomLetter === "_" ? "blank" : "letter") // Mark blank tiles
                        .draggable({
                            revert: "invalid", // Revert if not dropped in a valid spot
                            start: function() {
                                $(this).css("z-index", 1000); // Bring tile to the front while dragging
                            },
                            stop: function() {
                                $(this).css("z-index", ""); // Reset z-index after dropping
                            }
                        });
                    tileRack.append(tile); // Add the tile to the rack
                    tilesAdded++;
                }
            }
        }
        // Reinitialize draggable functionality for all tiles
        reinitializeDraggable(tileRack.find(".tile"));
        // Preserve the current board and word state
        wordDisplay.text(currentWord || "");
        updateScoreDisplay();
        // Hide the modal
        hideLetterSelectionModal();
    });

    // Function to hide the letter selection modal
    function hideLetterSelectionModal() {
        $("#letter-selection-modal").hide();
    }

    $("#reset-game").click(function() {
        initializeGame();
        currentScore = 0; // Reset the current score
        updateScoreDisplay(); // Clear bonus display
        // Hide the modal
        hideLetterSelectionModal();
    });

    // Start the game
    initializeGame();
    loadDictionary();
});