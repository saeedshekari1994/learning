import React from 'react';
import './Quiz.css'
export default class Quiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {
                    id: 1,
                    questionText: 'What is the capital of France?',
                    answerOptions: [
                        { id:11, answerText: 'New York', isCorrect: false },
                        { id:12, answerText: 'London', isCorrect: false },
                        { id:13, answerText: 'Paris', isCorrect: true },
                        { id:14, answerText: 'Dublin', isCorrect: false },
                    ],
                },
                {
                    id:2,
                    questionText: 'Who is CEO of Tesla?',
                    answerOptions: [
                        { id:21, answerText: 'Jeff Bezos', isCorrect: false },
                        { id:22, answerText: 'Elon Musk', isCorrect: true },
                        { id:23, answerText: 'Bill Gates', isCorrect: false },
                        { id:24, answerText: 'Tony Stark', isCorrect: false },
                    ],
                },
                {
                    id:3,
                    questionText: 'The iPhone was created by which company?',
                    answerOptions: [
                        {id:31, answerText: 'Apple', isCorrect: true },
                        {id:32, answerText: 'Intel', isCorrect: false },
                        {id:33, answerText: 'Amazon', isCorrect: false },
                        {id:34, answerText: 'Microsoft', isCorrect: false },
                    ],
                },
                {
                    id: 4,
                    questionText: 'How many Harry Potter books are there?',
                    answerOptions: [
                        {id:41, answerText: '1', isCorrect: false },
                        {id:42, answerText: '4', isCorrect: false },
                        {id:43, answerText: '6', isCorrect: false },
                        {id:44, answerText: '7', isCorrect: true },
                    ],
                },
            ],
            currentQuestion: 0,
            showScore: false,
            score: 0
        }
    }
    selectAnswerHandler(answerIsCorrect){
        if(answerIsCorrect){
            this.setState((prevState) => {
                return {score : prevState.score + 1 }
            })
        }
        if(this.state.currentQuestion >= this.state.questions.length -1){
            this.setState({showScore : true})
        }else{
            this.setState((prevState) => {
                return {currentQuestion : prevState.currentQuestion + 1}
            })
    
        }
    }
    render() {
        return (
            <div className='app'>
                
                {(this.state.showScore) ? (
                    <div className='score-section'>
                    You scored {this.state.score} out of 4
                    </div>) :

                    
                     (
                        <div>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {this.state.currentQuestion + 1}</span>/ {this.state.questions.length}
                                </div>
                                {/* mahale starte project step1 */}
                                <div className='question-text'>{this.state.questions[this.state.currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section'> 

                            {/* step2  map zadan*/} 

                                {this.state.questions[this.state.currentQuestion].answerOptions.map(answer =>
                                (
                                <div key={answer.id}>
                                    {/* step3 : onclick tarif kardan ruye button */}
                                    <button onClick={this.selectAnswerHandler.bind(this,answer.isCorrect)}>{answer.answerText}</button>
                                </div>

                                  ))}
                            </div>

                        </div>
                    )
                }
            </div>
        )
    }
}

