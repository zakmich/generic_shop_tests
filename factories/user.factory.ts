import { faker } from "@faker-js/faker/locale/en";
import { RegisterUser } from "../models/user.model";

export function randomRegisterUserData(): RegisterUser {
  const registerUserData: RegisterUser = {
    emailAddress: faker.internet.email(),
    registerPassword: faker.internet.password({ length: 15 }),
  };
  return registerUserData;
}
