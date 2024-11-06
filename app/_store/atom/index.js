import { atom, selector } from 'recoil';
import data from '@/app/_components/dataGame';

export const todoAtom = atom({
    key: 'todosAtom',
    default: data
});

export const todoLastIdSelector = selector({
    key: 'todoLastIdSelector',
    get: ({ get }) => {
        const todo = get(todoAtom);
        return todo.at(-1)?.id??0;
    }
})