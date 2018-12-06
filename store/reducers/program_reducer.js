const ADD_PROGRAM = "PROGRAM/PROGRAM/ADD_PROGRAM";
const UPDATE_PROGRAM = "PROGRAM/PROGRAM/UPDATE_PROGRAM";
const DELETE_PROGRAM = "PROGRAM/PROGRAM/DELETE_PROGRAM";

const initialState = {
  programs: []
};

export default function program_reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PROGRAM:
      return {
        program: [...state.program, action.program]
      };
    case UPDATE_PROGRAM:
      let program = [...state.program];
      let indexOfUpdate = program.findIndex(program => {
        return program.title == action.program.title;
      });
      program[indexOfUpdate] = action.program;
      return {
        ...state,
        program: program
      };
    case DELETE_PROGRAM:
      return {
        program: state.program.filter(function(program) {
          return program.title != action.program.title;
        })
      };
    default:
      return state;
  }
}

export function addProgram(program) {
  return {
    type: ADD_PROGRAM,
    program
  };
}

export function updateProgram(program) {
  return {
    type: UPDATE_PROGRAM,
    program
  };
}

export function deleteProgram(program) {
  return {
    type: DELETE_PROGRAM,
    program
  };
}
