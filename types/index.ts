export type TProduct = {
    id:string;
    imageId:string;
    name:string;
    price:number;
    brand:"nike" | "adidas" | "puma" | "reebok" | "under armour";
    category:string;
    size: "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46";
    gender: "male" | "female" | "unisex";
    color:"red" | "blue" | "green" | "yellow" | "black" | "white" | "grey";
    rating:number;
}