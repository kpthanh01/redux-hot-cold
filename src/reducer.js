import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from './action';

const initialState = {
	guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export const gameReducer = (state=initialState, action) => {
	if(action.type === RESTART_GAME){

	}

	if(action.type === MAKE_GUESS){

	}

	if(action.type === GENERATE_AURAL_UPDATE){

	}
	return state;
};