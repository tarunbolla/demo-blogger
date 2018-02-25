export class Comment {

    postId: number; 
    id: number; 
    name: string;
    email: string;
    body: string;
    
    constructor(
        postId: number, 
        id: number, 
        name: string,
        email: string, 
        body: string
    ) { }
}