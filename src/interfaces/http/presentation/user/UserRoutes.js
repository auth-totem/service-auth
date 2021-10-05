module.exports = ({ userController }) => [
  {
    method: 'get',
    path: '/user',
    handler: userController.getUserList,
  },
  {
    method: 'get',
    path: '/user/:id',
    handler: userController.getUser,
  },
  {
    method: 'post',
    path: '/user',
    handler: userController.createUser,
  },
  {
    method: 'get',
    path: '/health',
    handler: userController.health,
  },
];
