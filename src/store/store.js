import { atom, selector } from 'recoil';

export const formListState = atom({
  key: 'form',
  default: {
    surveyName: '설문조사',
    formData: [],
  },
});

// export const optionState = atom({
//   key: 'option',
//   default: [],
// });

export const formNumState = atom({
  key: 'key',
  default: 0,
});

// export const idState = atom({
//   key: 'num',
//   default: 0,
// });

// export const todoListState = atom({
//   key: 'todo',
//   // 유니크한 키값 줘야함
//   default: [
//     {
//       id: 1,
//       text: 'reading a bible',
//       done: true,
//     },
//     {
//       id: 2,
//       text: '농구하기',
//       done: false,
//     },
//   ],
// });

// export const TodoListFilter = atom({
//   key: 'filter',
//   default: 'Show all',
// });

// export const filteredTodoListState = selector({
//   key: 'todoList',
//   get: ({ get }) => {
//     const List = get(todoListState);
//     const Filter = get(TodoListFilter);

//     switch (Filter) {
//       case 'Show completed':
//         return List.filter(todo => todo.done);

//       case 'Show uncompleted':
//         return List.filter(todo => !todo.done);

//       default:
//         return List;
//     }
//   },
// });
