import { Button } from '@wordpress/components';
import { QuizBlockProps } from '../types';

type Props = {
	answerOption: {
		answer: string;
		isCorrect: boolean;
	};
	questionType: string;
	attributes: Readonly< QuizBlockProps >;
	setAttributes: ( attrs: Partial< QuizBlockProps > ) => void;
	number: number;
};

const AnswerOption = ( {
	answerOption,
	questionType,
	attributes,
	setAttributes,
	number,
}: Props ) => {
	return (
		<div className="answer-option">
			<div className="answer-text">
				<input
					type="text"
					name="answer_text"
					value={ answerOption.answer }
					onChange={ ( e ) => {
						setAttributes( {
							answers: attributes.answers.map( ( ans, i ) => {
								if ( number === i ) {
									return {
										...ans,
										answer: e.target.value,
									};
								}
								return { ...ans };
							} ),
						} );
					} }
				/>
			</div>

			<div className="answer-correction">
				<input
					type="radio"
					name="question_answer"
					value={ answerOption.answer.toLowerCase() }
					checked={ answerOption.isCorrect === true }
					onChange={ ( e ) => {
						setAttributes( {
							answers: attributes.answers.map( ( ans, i ) => {
								if ( number === i ) {
									return {
										...ans,
										isCorrect: true,
									};
								}
								return { ...ans, isCorrect: false };
							} ),
						} );
					} }
				/>
			</div>
			<div className="answer-deletion">
				{ attributes.questionType === '2' &&
				attributes.answers.length !== 1 ? (
					<Button
						style={ { color: '#dc2626' } }
						variant="tertiary"
						icon={ 'trash' }
						onClick={ () => {
							setAttributes( {
								answers: attributes.answers.filter(
									( ans, i ) => number !== i
								),
							} );
						} }
					></Button>
				) : null }
			</div>
		</div>
	);
};

export default AnswerOption;
