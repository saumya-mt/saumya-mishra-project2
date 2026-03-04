# Sudoku Project 2

Single-player Sudoku web app built with React, React Router, and Context API.

## Project Links

- GitHub Repo: https://github.com/saumya-mt/saumya-mishra-project2
- Render App: https://saumya-mishra-project2.onrender.com
- Video Walkthrough: 

## Collaborator
None

## Writeup

### 1. What were some challenges you faced while making this app?

One of the biggest challenges was organizing game logic so the board stayed valid while still feeling responsive to user input. It took careful state management to support locked starter cells, editable user cells, invalid highlighting, reset behavior, and puzzle completion checks all at once. Routing and page structure were straightforward, but making sure each game mode generated correctly and behaved consistently required extra testing. Another challenge was balancing code readability with the amount of Sudoku logic needed in the utility layer.

### 2. Given more time, what additional features, functional or design changes would you make?

Given more time, I would add a stronger player experience around progress and replay value. I would include difficulty presets beyond easy/normal, keyboard shortcuts, and better accessibility support for screen readers and focus states. I would also refine the visual polish with richer transitions, clearer status feedback, and improved mobile ergonomics. On the technical side, I would add automated tests for board generation and validation to reduce regression risk.

### 3. What assumptions did you make while working on this assignment?

I assumed mocked pages like login, register, and scores only needed basic UI and not full backend integration. I also assumed the assignment allowed either Render or another hosting provider, so deployment was prepared for hosted static build output. For puzzle behavior, I assumed correctness meant enforcing Sudoku placement rules, validating user entries, and locking input after a valid completion state. I also assumed fake placeholder profile/credit data was acceptable where real personal links were optional.

### 4. How long did this assignment take to complete?

Estimated time spent: 15 days

### 5. What bonus points did you accomplish? (Include links and details)

- Bonus: Local Storage persistence 
  - Code: `src/context/SudokuContext.jsx`
  - Details: Game state is saved and restored via `localStorage`, and cleared on reset/completion.
- Bonus: Backtracking-based generation with unique-solution checks (attempted)
  - Code: `src/utils/sudoku.js`
  - Details: Board generation uses backtracking, and puzzle carving verifies unique solvability.
- Bonus: Hint system 
  - Code: `src/components/GameControls.jsx`, `src/context/SudokuContext.jsx`, `src/components/SudokuCell.jsx`
  - Details: Hint highlights a valid single-candidate cell when available.
- Bonus: Early submission
  - Status: Yes




