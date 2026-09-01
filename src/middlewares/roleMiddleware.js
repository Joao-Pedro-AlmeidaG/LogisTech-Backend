const roleMiddleware = (rolesPermitidas = []) => {
  return (req, res, next) => {
    if (!req.usuario || !rolesPermitidas.includes(req.usuario.perfil)) {
      return res.status(403).json({ error: 'Acesso negado. Permissão insuficiente.' });
    }
    next();
  };
};

module.exports = roleMiddleware;
