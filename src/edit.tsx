/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { BlockEditProps } from '@wordpress/blocks';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes,setAttributes}: BlockEditProps<{question: string; answers: {answer: string; isCorrect: boolean}[] | [] }>) {
	const addAnswer = () => {
		setAttributes({answers: [...attributes.answers, {answer: '', isCorrect: false}]})
	}
	

	return (
		<div {...useBlockProps()}>
			<RichText tagName='h4' value={attributes.question} onChange={ value => setAttributes({question: value}) }  />
			
			<div className='answer-list'>
				{
					attributes.answers.map( (answer,index) => {
						return (
							<div key={index}>
								<RichText tagName='p' value={answer.answer} onChange={ value => {
									setAttributes( { answers: attributes.answers.map( (ans,i) => {
										if( index === i ) {
											return {
												...ans,
												answer: value
											}
										} else {
											return {...ans}
										}
									} )  } );
								} } />
							</div>
						)
					} )
				}
			</div>
			<button onClick={addAnswer}>Add Answer</button>
		</div>
	);
}

