const extractNames = (collection = [] as { name: string }[]) => {
  return collection.map((el) => el.name);
};

export default extractNames;
