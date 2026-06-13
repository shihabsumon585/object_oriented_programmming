
// getter

// setter

class BankAccount {
    public readonly userId: number;
    public userName: string;
    private _userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }

    // addBalance(balance: number) {
    //     this._userBalance = this._userBalance + balance;
    // }

    // I want to do this using setter !
    set addBalance(amount: number){
        this._userBalance = this._userBalance + amount;
    }

    // getBalance(){
    //     console.log("Present Balance: ", this._userBalance);
    // }

    // I want to do this using getter !
    get getBalance(){
        return this._userBalance;
    }
}

const shihabBhaiAccount = new BankAccount(222, "Md Shihab Sumon", 3200);

// shihabBhaiAccount.addBalance(70000);
// shihabBhaiAccount.addBalance(2000);

// shihabBhaiAccount.getBalance();

shihabBhaiAccount.addBalance = 500;
shihabBhaiAccount.addBalance = 300;
console.log(shihabBhaiAccount.getBalance);


