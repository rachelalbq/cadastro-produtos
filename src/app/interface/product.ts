export interface iRoot {
  products: iProduct[]
  total: number
  skip: number
  limit: number
}

export interface iProduct {
  id: number
  title: string
  price: number
  category: string
  images: string[]
}
