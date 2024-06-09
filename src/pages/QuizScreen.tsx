import {useState} from "react";

function MyQuizApp() {

    var questions = [
        {
            question: "HTML Stands For _________",
            options: [
                "Anchor Text Language",
                "HTML",
                "Case Cading Style Sheet",
                "HyperText markup language",
            ],
            correctAns: "HyperText markup language",
        },
        {
            question: "CSS Stands For _________",
            options: [
                "Casecading Style Sheet",
                "Java",
                "Ram",
                "Hypertext markup language",
            ],
            correctAns: "Casecading Style Sheet",
        },
        {
            question: "JS Stands For _________",
            options: ["Java Style", "Java Script", "Script", "Script Src"],
            correctAns: "Java Script",
        },
        {
            question: "DOM Stands For _________",
            options: ["Document Object Model", "html", "Css", "Java"],
            correctAns: "Document Object Model",
        },
        {
            question: "RAM Stands For _________",
            options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
            correctAns: "Random Access Memory",
        },
        {
            question: "ROM Stands For _________",
            options: [
                "Hyper Text Markup Language",
                "html",
                "HTml",
                "Read Only Memory",
            ],
            correctAns: "Read Only Memory",
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section>
            <div className="header">
                <h1>Quiz Application</h1>
            </div>

            <div className="body">
                <p>Question {currentIndex + 1}/{questions.length}</p>

                <h3>{questions[currentIndex].question}</h3>

                <section>
                    {questions[currentIndex].options.map((x, i) => (
                    <div key={i} className="options">
                        <button onClick={() => {
                            setCurrentIndex(currentIndex+1)
                        }}>{x}</button>
                    </div>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default MyQuizApp;