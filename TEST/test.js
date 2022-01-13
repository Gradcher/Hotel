let user = {
  name: 'Ketrin',
};
let client = {};

delete user?.name; // delete user.name if user exists
delete client?.age.g; // the same — delete undefined;

console.log(user.name); // undefined
