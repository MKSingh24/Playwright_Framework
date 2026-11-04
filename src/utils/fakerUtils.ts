import { faker } from '@faker-js/faker';


export interface User {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
}

// export function generateUser(): User {

//   return {
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     email: faker.internet.email(),
//     telephone: faker.phone.number('##########'),
//     password: 'Test@123'
//   }

export const generateUser = (): User => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  telephone: faker.helpers.fromRegExp('[6-9][0-9]{9}'),
  password: 'Test@123'
});