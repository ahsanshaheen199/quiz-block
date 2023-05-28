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
				className="peer hidden"
			/>
			<label
				htmlFor={ `answer_text-${ id }` }
				className="flex justify-between w-full text-base cursor-pointer p-4 border border-gray-200 rounded peer-checked:text-white peer-checked:bg-blue-500 peer-checked:border-blue-600 hover:text-gray-600 hover:bg-gray-100"
			>
				<span>{ answerOption.answer }</span>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					className="h-6 w-6 hidden peer-checked:block"
				>
					<circle
						cx={ 12 }
						cy={ 12 }
						r={ 12 }
						fill="#fff"
						opacity="0.2"
					/>
					<path
						d="M7 13l3 3 7-7"
						stroke="#fff"
						strokeWidth={ 1.5 }
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</label>
		</div>
	);
};

export default FrontendAnswerOption;
