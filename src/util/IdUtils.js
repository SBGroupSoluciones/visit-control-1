import { visitList } from "./Visit";

export const idGenerate = async (code) => {
  return visitList().then((visits) => {
    console.log("================================ Visitas", visits);
    let biggerNumber = 0;

    if (visits) {
      visits.map((item) => {
        const codeItem = item.id.split("-");

        if (codeItem[0] == code && codeItem[1] > biggerNumber) {
          biggerNumber = codeItem[1];
        }
      });
    }

    return `${code}-${parseInt(biggerNumber) + 1}`;
  });
};
