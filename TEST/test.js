const user = {
  name: 'John',
  surname: 'Smith',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

const admin = {
  __proto__: user,
  isAdmin: true,
};

// getter triggers!
console.log(admin.fullName); // John Smith (*)
console.log(admin.hasOwnProperty('name'));

// setter triggers!
admin.fullName = 'Alice Cooper'; // (**)
console.log(admin.hasOwnProperty('name'));
