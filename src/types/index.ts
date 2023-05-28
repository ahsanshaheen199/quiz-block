export type QuizBlockProps = {
	question: string;
	answers: { answer: string; isCorrect: boolean }[] | [];
	questionType: string;
};
