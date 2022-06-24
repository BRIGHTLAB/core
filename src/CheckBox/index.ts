const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x":10, "y":20}';
const coor: { x: number; y: number } = JSON.parse(json);

let numb: number | boolean = false;
