const originalPerson = {
    fullName:{ firstName:'John',lastName:'Doe'}
};
const clonePerson = {...originalPerson};
clonePerson.fullName.firstName = 'Will'
console.log(originalPerson.fullName.firstName);

//bla bla
// add new conflict 