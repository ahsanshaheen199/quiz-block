import { useId } from '@wordpress/element';

type Props = {
	answerOption: {
		answer: string;
		isCorrect: boolean;
	};
	onChange: ( value: { answer: string; isCorrect: boolean } ) => void;
};

const FrontendAnswerOption = ( { answerOption, onChange }: Props ) => {
	const id = useId();

	return (
		<div className="answer-text">
			<input
				id={ `answer_text-${ id }` }
				type="radio"
				name="answer_text"
				value={ answerOption.answer
					.split( ' ' )
					.join( '_' )
					.toLowerCase() }
				onChange={ ( e ) => {
					onChange( answerOption );
				} }
			/>
			<label
				style={ { cursor: 'pointer' } }
				htmlFor={ `answer_text-${ id }` }
			>
				{ answerOption.answer }
			</label>
		</div>
	);
};

export default FrontendAnswerOption;
