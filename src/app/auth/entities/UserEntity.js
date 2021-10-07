module.exports = (user) => {
  const obj = {
    idCadaster: user.idCadaster || undefined,
    name: user.name || null,
    status: 'A',
    uuid: user.uuid || null,
    idClass: user.idClass || null,
  };
  return obj;
};
