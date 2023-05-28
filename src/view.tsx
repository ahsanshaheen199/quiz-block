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

	if ( isCorrectAnswer !== undefined ) {
		return isCorrectAnswer ? (
			<div className="flex h-28 rounded border border-green-500 items-center justify-center text-white bg-green-500">
				<p className="text-base">Answer is correct</p>
			</div>
		) : (
			<div className="flex h-28 rounded border border-red-500 items-center justify-center text-white bg-red-500">
				<p className="text-base">Answer is incorrect</p>
			</div>
		);
	}

	return (
		<div>
			<h3 className="text-2xl mb-5">{ props.question }</h3>
			<div className="answer-list space-y-2">
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

			<div className="mt-5">
				<button
					onClick={ submitAnswer }
					className="cursor-pointer rounded border-none text-white py-3 px-4 text-base bg-green-700"
				>
					{ __( 'Submit Answer', 'quiz-block' ) }
				</button>
			</div>
		</div>
	);
};
