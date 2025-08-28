import { defineStore } from 'pinia'
export type CartItem = { id:number; title:string; price:number; image:string; qty:number }

export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] as CartItem[] }),
  getters: {
    totalItems: s => s.items.reduce((a,b)=>a+b.qty,0),
    totalPrice: s => s.items.reduce((a,b)=>a + b.qty * Number(b.price||0), 0)
  },
  actions: {
    add(item: Omit<CartItem,'qty'>, qty=1){
      const i = this.items.findIndex(x=>x.id===item.id)
      if(i>=0) this.items[i].qty += qty
      else this.items.push({...item, qty})
    },
    remove(id:number){ this.items = this.items.filter(i=>i.id!==id) },
    clear(){ this.items = [] }
  }
})
