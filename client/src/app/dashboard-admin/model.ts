export class User{
    userID!: Int32Array;
    firstName!: string;
    lastName!: string;
    phone!: string;
    address!: string;
    urlHinh!: string;
}

export class Account{
    accountID!: Int32Array;
    email!: string;
    password!: string;
    userID!: Int32Array;
    role!: string;
}
