import { PersonValidator } from '@app/user/usecase/PersonValidator'

export interface PersonStructure {
  _id: string;
  firstname: string;
  lastname: string;
  birthday: string;
}

export class Person implements PersonStructure {
  public readonly _id: string;
  public readonly firstname: string;
  public readonly lastname: string;
  public readonly birthday: string;
  public constructor (person: PersonStructure) {
    const {
      _id,
      firstname,
      lastname,
      birthday
    } = (new PersonValidator()).validate(person)
    this._id = _id
    this.firstname = firstname
    this.lastname = lastname
    this.birthday = birthday
  }
}
