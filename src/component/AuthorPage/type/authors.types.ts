export type Author ={
    avatar:string,
    bio:string,
    created_at:string,
    follower_accounts:number,
    id:number,
    name:string
}

export type Authors = Author[];

export type  DataCreateAuthor ={
    name:string,
    email:string,
    bio:string,
    avatar:string
}