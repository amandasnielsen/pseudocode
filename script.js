// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock

/*
START

    FUNCTION splitNota
        INPUT "Summa:"
        SET totalAmount = INPUT
        
        INPUT "Antal vänner:"
        SET numberOfFriends = INPUT
        
        INPUT "Dricks:"
        SET tip = INPUT
        
        // Total amount to pay inculding tips
        CALCULATE totalAmountWithTip = totalAmount + (totalAmount * tip)
        
        // Split amount with number of friends
        CALCULATE amountPerPerson = totalAmountWithTip / numberOfFriends
        
        PRINT "Varje person ska betala: ", amountPerPerson
    ENDFUNCTION

    CALL FUNCTION "splitNota"

END
*/


// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();


FUNCTION play()
    // The valid english words in this game
    SET dictionary = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]

    // The start and end-word
    SET startWord = "FOUR"
    SET endWord = "FIVE"

    // Initialize currentWord to startWord
    SET currentWord = startWord

    PRINT "Start word is: ", currentWord
    PRINT "Goal word is: ", endWord

    // Loop until you reach the endWord
    WHILE currentWord ≠ endWord
        PRINT "Enter a new word: "
        SET newWord = INPUT

        // Check if the new word is in our dictionary
        IF newWord IS NOT IN dictionary THEN
            PRINT "Oh no! The word is not in our dictionary. Try again!"
            CONTINUE
        END IF

        // Check if the word has one different letter
        IF CALL FUNCTION isOneLetterApart(currentWord, newWord) THEN
            SET currentWord = newWord
        ELSE
            PRINT "The word can only have one different letter. Try again!"
            CONTINUE
        END IF

        PRINT "Current word is: ", currentWord
    END WHILE

    // If the loop ends, the player has reached the endWord
    PRINT "Congratulations! You did it! You reached the final word: ", endWord
END FUNCTION

FUNCTION isOneLetterApart(wordOne, wordTwo)
    // Counts the amount of different letters
    SET diffCount = 0

    // Loops through all the letters in the words
    LOOP through i = 0 to length(wordOne) - 1
        IF wordOne[i] ≠ wordTwo[i] THEN
            CALCULATE diffCount = diffCount + 1
        ENDIF
    ENDLOOP

    // Return true if only one letter is different, otherwise false
    IF diffCount = 1 THEN
        RETURN true
    ELSE
        RETURN false
    ENDIF
ENDFUNCTION

*/