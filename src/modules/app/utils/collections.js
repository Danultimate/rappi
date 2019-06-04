// collecting categories ids recursively
const gatherFromSublevel = (item, ids) => {
  ids.push(item.id);
  if (item.sublevels) {
    for (let i = 0; i < item.sublevels.length; i++) {
      gatherFromSublevel(item.sublevels[i], ids);
    }
  }

  return ids;
}

const gatherSublevelsIds = (item) => {
  return gatherFromSublevel(item, []);
};

export {
  gatherSublevelsIds,
}