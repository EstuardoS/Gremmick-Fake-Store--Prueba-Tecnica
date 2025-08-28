type Product = { id:number; title:string; price:number; image:string; description?:string; category?:string }

export async function fetchProducts(){
  try {
    const { data } = await useFetch<Product[]>('https://fakestoreapi.com/products', { server: true })
    if (data.value?.length) return data.value
    throw new Error('Empty')
  } catch {
    // Fallback local
    const local = await import('~/data/products.json')
    return (local.default ?? []) as Product[]
  }
}

export async function fetchProductById(id: string | number){
  try {
    const { data } = await useFetch<Product>(`https://fakestoreapi.com/products/${id}`, { server: true })
    if (data.value) return data.value
    throw new Error('Empty')
  } catch {
    const local = await import('~/data/products.json')
    return (local.default as Product[]).find(p=>String(p.id)===String(id))
  }
}
