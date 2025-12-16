class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    set password(password){
        this._password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(email){
        this._email = email;
    }

    get password(){
        return `${this._password}hitest`;
    }
}

const hassan = new User("hassan@example.com", "password123");
console.log(hassan.password); 
