import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:4000/questions')
        .then(response => response.json())
        .then(data => setQuestions(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>/* display QuestionItem components here after fetching */<QuestionItem /></ul>
    </section>
  );
}

export default QuestionList;
