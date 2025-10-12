//* api v2
// const extractNames = (collection = [] as { name: string }[]) => {
//   return collection.map((el) => el.name);
// };

//* api v3
const extractNames = (collection = [] as { name: { common: string } }[]) => {
  return collection.map((el) => el.name.common);
};

export default extractNames;
