import { atom, selector } from 'recoil';

const checkedListAtom = atom({
    key: 'checkedListAtom',
    default: []
  });

const checkedListValue = selector({
    key: 'checkedListValue', 
    get: ({ get }) => {
      const cLA = get(checkedListAtom);
      return cLA;
    }
})

export default checkedListAtom;

export { checkedListValue };
