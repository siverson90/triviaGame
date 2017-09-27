Trivia game:

Psuedocode:

User is presented with a screen and a start game button.


**Create an initalize function that is an on click listener tied to a button's ID

After clikc start user sees a time reamining which is counting down.

**Have a setInterval when start button is clicked, can organize within the on click listener

User then sees all the questions on a single form.

**Will need to have a loop setup that grabs the Question: Answers and correct answer. Loop through the array's length. 

**within the loop it will call the render 

** render function will contain the HTML display character that task's the arugments like Q, A1,A2, A3,A4 and C4 (which are labeled correctly in the array object) add 

When user selects potential answer via radio button that question should be logged and counted
** use a toggle for answered / unanswered OR use a button to assign value
**

When the timer runs out, questions disappear and show All Done! with correct answers; Incorrect answers and Unanswered.


Arichieture:

---Array of objects:

---render fucntion (q1, A1, A2, etc..)
var to create new div
$($div).html (all formatting)

---on.click fnction that starts the timer

-- have a global that counts each time a setInteveral is called, decrementing

-- track correct and incorrect and unanswered.

--Have a function called by the timer=== 0 that renders correct As, Incorrect A's and Unanswered

Creattion:
1. Create Array of Objects
2. Create start game button and intiailze
3. create render function- nest For loop; 1 loop creating the div structure and the next function append information into the divs 
4. 



