# Sudoku Project 2

Single-player Sudoku web app built with React, React Router, and Context API.

## Project Links

- GitHub Repo: https://github.com/saumya-mt/saumya-mishra-project2
- Render App: https://saumya-mishra-project2.onrender.com
- Video Walkthrough: https://northeastern-my.sharepoint.com/personal/mishra_sau_northeastern_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fmishra%5Fsau%5Fnortheastern%5Fedu%2FDocuments%2FRecordings%2FWeb%2Ddevelopment%20Project2%2D20260304%5F153036%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E7c622d92%2D3395%2D482a%2Da901%2D50ae905475b2

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
  - Details: The Context initializes state with a lazy useReducer initializer that first attempts to load sudoku-project2-state from window.localStorage. On every state update, a useEffect serializes and saves the latest board/timer/game metadata, so refreshes do not lose progress. Validation checks are applied before accepting saved data to avoid loading corrupted/incompatible payloads. Local storage is explicitly cleared when the player resets the puzzle and when a puzzle is completed, matching the assignment rule that persistence should stop once a game ends. All localStorage access is centralized in Context (getSavedState, save effect, clearSavedState) rather than scattered across UI components.
- Bonus: Backtracking-based generation with unique-solution checks (attempted)
  - Code: `src/utils/sudoku.js`
  - Details: Puzzle generation is split into two phases: (1) generate a full valid solved board with recursive backtracking (fillBoard) and candidate search, then (2) remove values while preserving uniqueness (carvePuzzle). During carving, each candidate removal is tested with a solver-count routine (countSolutions) that stops early once more than one solution is found. A cell is only removed if the resulting puzzle still has exactly one solution. This produces valid easy/normal boards with clue ranges configured per mode (MODE_CONFIG) while enforcing uniqueness rather than only checking validity.
- Bonus: Hint system 
  - Code: `src/components/GameControls.jsx`, `src/context/SudokuContext.jsx`, `src/components/SudokuCell.jsx`
  - Details: A dedicated Hint button dispatches SHOW_HINT from the controls. In Context, the hint logic scans editable empty cells, computes legal candidates (getCandidates), and selects a cell only when it has exactly one valid value (single-candidate rule). When found, state is updated with both selectedCell and hintCell so the UI focuses and highlights that location without auto-filling it. SudokuCell applies a specific hint style (cell.hint) so users get guidance while still entering the value themselves.


- Bonus: Early submission
  - Status: Yes




