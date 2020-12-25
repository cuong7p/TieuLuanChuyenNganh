import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartArr = [];
  constructor() { }
  public addCart = (item: any) => {
    item.quantity = 1;
    item.donGia = parseFloat(item.donGia);
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    console.log(cart);
    let flag = 0;
    if (cart.length > 0) {
      //  sau khi add 1 product bất kì
      cart.forEach((el: any) => {
        if (el.maSP === item.maSP) {
          el.quantity += 1;
          el.donGia = el.donGia *  el.quantity;
          flag = 1;
          return;
        }
      });
      if (flag === 0) {
        cart.push(item);
      }
    } else {
      cart.push(item);
    }
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  public sumCart = () => {
    let sum = 0;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.forEach((item: any) => {
      sum += item.donGia;
    });
    return sum;
  }
  public removeOne = (id: any) => {
    let newCart: never[] = [];
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.forEach((item: any) => {
      if (item.maSP === id) {
        newCart = cart.filter((el: any) => el !== item);
        return;
      }
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    return newCart;
  }
  public removeAll = () => {
    const newCart: never[] = [];
    localStorage.setItem('cart', JSON.stringify(newCart));
    return newCart;
  }
  public showCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart;
  }
}
