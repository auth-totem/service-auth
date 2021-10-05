module.exports = (wallet) => {
  const obj = {
    idWallet: wallet.idWallet || undefined,
    idCadaster: wallet.idCadaster || null,
    codeWallet: wallet.codeWallet || null,
    creationDate: new Date(),
    status: 'A',
  };
  return obj;
};
