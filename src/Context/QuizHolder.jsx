import React,{ useState } from 'react';
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [
  {
    "question": "HTML stands for __________",
    "a": "HyperText Markup Language",
    "b": "HyperText Machine Language",
    "c": "HyperText Marking Language",
    "d": "HighText Marking Language",
    "correct": "a"
},
{
    "question": "What is the correct syntax of doctype in HTML5?",
    "a": "</doctype html>",
    "b": "<doctype html>",
    "c": "<doctype html!>",
    "d": "<!doctype html>",
    "correct": "d"
},
{
    "question": "Which of the following tag is used for inserting the largest heading in HTML?",
    "a": "head",
    "b": "h1",
    "c": "h6",
    "d": "heading",
    "correct": "b"
},
{
    "question": "In which part of the HTML metadata is contained?",
    "a": "head tag", 
    "b": "title tag",
    "c": "html tag",
    "d": "body tag",
    "correct": "a"
},
{
    "question": "How do we write comments in HTML?",
    "a": "</…….>", 
    "b": "<!……>",
    "c": "</……/>",
    "d": "<…….!>",
    "correct": "b"
},
{
    "question": "Which of the following elements in HTML5 defines video or movie content?",
    "a": "<video>",
    "b": "<movie>",
    "c": "<audio>",
    "d": "<media>",
    "correct": "a"
},
{
    "question": "Which element is used for or styling HTML5 layout?",
    "a": "CSS",
    "b": "jQuery",
    "c": "JavaScript",
    "d": "PHP",
    "correct": "a"
},
{
    "question": "Which character is used to represent when a tag is closed in HTML?",
    "a": "#",
    "b": "!",
    "c": "/",
    "d": "*",
    "correct": "c"
},
{
    "question": "Among the following, which is the HTML paragraph tag?",
    "a": "<p>",
    "b": "<pre>",
    "c": "<hr>",
    "d": "<a>",
    "correct": "a"
},
{
    "question": "Which of the following HTML tag is used to create an unordered list?",
    "a": "<ul>",
    "b": "<ll>",
    "c": "<li>",
    "d": "<ol>",
    "correct": "a"
},
{
    "question": "How to create a checkbox in HTML Form?",
    "a": "<input type=”text”>",
    "b": "<input type=”textarea”>",
    "c": "<input type=”checkbox”>",
    "d": "<input type=”button”>",
    "correct": "c"
},
{
    "question": "Which of the following extension is used to save an HTML file?",
    "a": ".hl",
    "b": ".h",
    "c": ".html",
    "d": ".hmlt",
    "correct": "c"
}
]

export default function QuizHolder(props) {
  const [start,setStart] = useState(false);
  const [exit,setExit] = useState(false);
  const [correct,setCorrect] = useState(0);
  return (
    <QuizContext.Provider value={{
        start,exit,setStart,setExit,quizzes,correct,setCorrect
    }}>
        {props.children}
    </QuizContext.Provider>
  )
}
export {QuizContext};