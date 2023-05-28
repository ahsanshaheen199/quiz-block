import domReady from '@wordpress/dom-ready';
import { render, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { QuizBlockProps } from './types';
import FrontendAnswerOption from './components/FrontendAnswerOption';

domReady( function () {
	const quizContainer = document.querySelectorAll( '.quiz-block-container' );

	quizContainer.forEach( ( div ) => {
		const preElement = div.querySelector( 'pre' ) as HTMLPreElement;
		const data = JSON.parse( preElement.innerText );
		render( <App { ...data } />, div );
		div.classList.remove( 'quiz-block-container' );
	} );
} );

const App = ( props: QuizBlockProps ) => {
	const [ userAnswer, setUserAnswer ] = useState< {
		answer: string;
		isCorrect: boolean;
	} >();
	const [ isCorrectAnswer, setIsCorrectAnswer ] = useState<
		boolean | undefined
	>( undefined );

	const submitAnswer = () => {
		if ( userAnswer?.isCorrect ) {
			setIsCorrectAnswer( true );
		} else {
			setIsCorrectAnswer( false );
		}
	};

	return (
		<div>
			<h3>{ props.question }</h3>
			<div className="answer-list">
				{ props.answers.map( ( answer, index ) => {
					return (
						<FrontendAnswerOption
							key={ index }
							answerOption={ answer }
							onChange={ ( value ) => {
								setUserAnswer( value );
							} }
						/>
					);
				} ) }
			</div>

			<div className="submit-answer-button-wrapper">
				<button
					style={ {
						padding: '.75rem 1rem',
						color: 'white',
						backgroundColor: '#007cba',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					} }
					onClick={ submitAnswer }
				>
					{ __( 'Submit Answer', 'quiz-block' ) }
				</button>
			</div>
		</div>
	);
};
