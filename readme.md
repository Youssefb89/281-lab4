# ENSE 281 - Lab 4: JavaScript and DOM

## Student Information
* **Name:** Youssef Abdelaziz
* **SID:** 200511755
* **Course:** ENSE 281 - Software Engineering Management
* **University:** University of Regina

## Lab Overview
This lab focuses on the introduction of JavaScript (JS) and the Document Object Model (DOM). The objective is to learn how to manipulate HTML and CSS on a web page using JavaScript to create real-time interactions.

The lab is divided into two parts:

### Part 1: Burn After Reading App
A simple "sticky note" application where users can post notes and delete ("burn") them once read.
* **Features:**
  * Users can input a title and content for a note.
  * Notes are dynamically added to the DOM as Bootstrap cards.
  * Notes cycle through a specific palette of 5 neon colors (`#ff7eb9`, `#ff65a3`, `#7afcff`, `#feff9c`, `#fff740`).
  * Each note has a "Burn" button (fire icon) that removes the specific note from the DOM.

### Part 2: Note-Vote Model
A JavaScript Object (JSON) model designed to represent the data structure for a "Note-Vote" application.
* **Data Structure:**
  * Defines a unique numerical identifier.
  * Stores the note creator and text content.
  * Maintains lists of usernames for upvotes and downvotes.

## Technologies Used
* **HTML5:** Page structure.
* **CSS / Bootstrap 5:** Styling and Card components.
* **JavaScript (ES6):** Logic for DOM manipulation and event listeners.
* **FontAwesome:** Icons for the "Burn" button.

## How to Run
1. Ensure all files (`index.html`, `script.js`) are in the same directory.
2. Open `index.html` in any modern web browser (Chrome or Firefox recommended).
3. Type a title and content into the input card and click **Post!** to see the JavaScript being used.

## Files Included
* `index.html`: The main structure of the application.
* `script.js`: Contains the logic for adding notes, color cycling, and deleting notes.
* `README.md`: Project documentation.

## References
* Lab Manual: ENSE 281 Lab 4 by Adam Tilson.
* Color Palette: [color-hex.com](https://www.color-hex.com/color-palette/29241).