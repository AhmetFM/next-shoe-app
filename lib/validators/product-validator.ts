import {z} from "zod"

export const AVAILABLE_SIZES = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"] as const
export const AVAILABLE_BRANDS = ["nike", "adidas", "puma", "reebok", "under armour"] as const
export const AVAILABLE_COLORS = ["red", "blue", "green", "yellow", "black", "white", "grey"] as const
export const AVAILABLE_SORT = ["none", "price-asc", "price-desc", "rating"] as const

export const ProductFilterValidator = z.object({
    size: z.array(z.enum(AVAILABLE_SIZES)),
    brand: z.array(z.enum(AVAILABLE_BRANDS)),
    color: z.array(z.enum(AVAILABLE_COLORS)),
    sort: z.enum(AVAILABLE_SORT),
    price: z.tuple([z.number(), z.number()]),
})

export type ProductState = Omit<z.infer<typeof ProductFilterValidator>,"price"> &
 {price: {
    isCustom:boolean;
    range:[number,number]
}}