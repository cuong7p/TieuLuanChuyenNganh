export class User{
    UserID!: Int32Array;
    FirstName!: string;
    LastName!: string;
    Phone!: string;
    Address!: string;
    urlHinh!: string;
}

export class Account{
    accountID!: Int32Array;
    email!: string;
    password!: string;
    userID!: Int32Array;
    role!: string;
}
