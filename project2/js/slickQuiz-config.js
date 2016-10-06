// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":  ""  ,
        "main":    "<h3>Test out what you learned about the Black Lives Matter movement with this fun quiz!</h3>"
       
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What year did the phrase 'Black Lives Matter' first appear on social media?",
            "a": [
                {"option": "2013",      "correct": false},
                {"option": "2010",     "correct": false},
                {"option": "2012",      "correct": true},
                {"option": "2015",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct!</span>In 2012, Alicia Garza first uses the phrase 'black lives matter' on a Facebook post. </p>",
            "incorrect": "<p><span>Not quite.</span> The phrase 'Black Lives Matter' first appeared on social media in 2012.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Who founded the Black Lives Matter Movement?",
            "a": [
                {"option": "Alicia Garza",               "correct": false},
                {"option": "Opal Tometi",   "correct": false},
                {"option": "Patrisse Cullor",               "correct": false},
                {"option": "All of the above", "correct": true} // no comma here
            ],
         
            "correct": "<p><span>That's correct!</span>Alicia Garza, Opal Tometi, and Patrisse Cullor all founded the movement together. </p>",
            "incorrect": "<p><span>Not quite.</span> All of the women mentioned co-founded the movement together.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What event was responsible with giving the Black Lives Matter hashtag national recognition?",
            "a": [
                {"option": "The death of Trayvon Martin",           "correct": false},
                {"option": "The death of Michael Brown",                  "correct": true},
                {"option": "The death of Oscar Grant",  "correct": false},
                {"option": "The death of Eric Garner",          "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct. </span>The death of Michael Brown caused the Black Lives Matter hashtag to gain national recognition. </p>",
            "incorrect": "<p><span>Not Quite.</span> In 2014, the death of Michael Brown caused the Black Lives Matter hashtag to gain national recognition.</p>" // no comma here
        },
        { // Question 4
            "q": "What are some of the guiding principles of the Black Lives Matter Movement?",
            "a": [
                {"option": "Diversity, globalism, and loving engagement.",    "correct": false},
                {"option": "Restorative justice, collective value, and empathy ",     "correct": false},
                {"option": "All of the above.",      "correct": true}
                
            ],
            "correct": "<p><span>That's correct!!</span>All of the above are guiding principles of the Black Lives Matter movement.  </p>",
            "incorrect": "<p><span>Not quite.</span> Everything menionted above is a guiding principle of the Black Lives Matter Movemet. </p>" // no comma here
        }
        
    ]
};