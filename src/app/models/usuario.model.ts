export class Usuario{
    constructor(
        public nombre: string,
        public password: string,
        public email: string,
        public role?: string,
        public img?: string,
        public _id?: string
    ){}
}