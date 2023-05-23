/*export interface IloginData {
    username: string
    password: string
}

export class LoginData {
    ruleForm: IloginData = {
        username: "",
        password: ""
    }
}
*/

export class LoginData{
    public username:string;
    public password:string;

    constructor(){
        this.username = "";
        this.password = "";
    }
    
}