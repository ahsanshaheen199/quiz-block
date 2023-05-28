import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { BlockEditProps } from '@wordpress/blocks';
import { Button, SelectControl } from '@wordpress/components';
import AnswerOption from './components/AnswerOption';
import { QuizBlockProps } from './types';

export default function Edit( {
	attributes,
	setAttributes,
}: BlockEditProps< QuizBlockProps > ) {
	const addAnswer = () => {
		setAttributes( {
			answers: [
				...attributes.answers,
				{ answer: 'Option', isCorrect: false },
			],
		} );
	};

	return (
		<div { ...useBlockProps() }>
			<RichText
				tagName="h4"
				value={ attributes.question }
				onChange={ ( value ) => setAttributes( { question: value } ) }
				placeholder="Type your question"
				style={ { marginTop: '10px', marginBottom: '25px' } }
			/>

			<div className="select-wrapper">
				<SelectControl
					label={ __( 'Question Type', 'quiz-block' ) }
					value={ attributes.questionType }
					options={ [
						{ label: 'True Or False', value: '1' },
						{ label: 'Single Choice', value: '2' },
					] }
					onChange={ ( value ) => {
						setAttributes( {
							questionType: value,
							answers:
								value === '1'
									? [
											{
												answer: 'First Option',
												isCorrect: true,
											},
											{
												answer: 'Second Option',
												isCorrect: false,
											},
									  ]
									: [
											{
												answer: 'First Option',
												isCorrect: true,
											},
											{
												answer: 'Second Option',
												isCorrect: false,
											},
											{
												answer: 'Third Option',
												isCorrect: false,
											},
									  ],
						} );
					} }
				/>
			</div>

			<div className="answer-heading">
				<div className="answer-text">
					<span className="text-base">
						{ __( 'Answers', 'quiz-block' ) }
					</span>
				</div>
				<div className="answer-correction">
					<span className="text-base">
						{ __( 'Correction', 'quiz-block' ) }
					</span>
				</div>
				<div className="answer-deletion"></div>
			</div>

			<div className="answer-list">
				{ attributes.answers.map( ( answer, index ) => {
					return (
						<AnswerOption
							key={ index }
							answerOption={ answer }
							questionType={ attributes.questionType }
							setAttributes={ setAttributes }
							attributes={ attributes }
							number={ index }
						/>
					);
				} ) }
			</div>

			{ attributes.questionType === '2' ? (
				<div className="add-answer-button-wrapper">
					<Button variant="primary" onClick={ addAnswer }>
						{ __( 'Add Answer', 'quiz-block' ) }
					</Button>
				</div>
			) : null }
		</div>
	);
}
