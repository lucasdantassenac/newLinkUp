export interface Post {
    description:string,
    photoBase64Url?:string, 
    likesQuantity:number,
    commentsQuantity:number 
    comments:string[]
}