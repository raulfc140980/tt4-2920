import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './components/counter/counter';
import { ListProducts } from './components/list-products/list-products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Counter, ListProducts],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'my-app-angular';
  name = 'Raul';
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJffy5BZAhq_f19LjrAPi-Idsx05wdFOHUjAs'
  isLoggedIn = true;
  items = ["item A", "item B", "item C", "item D", "item E", "item F", "item G"];
  isActive = false
  textColor = 'red';
  fontSize = 50;
  counterName = 'Abs Counter';

clickButton() {
    console.log("Button Pressed");
    this.name = 'Messi';
    this.imageUrl = 'https://www.istockphoto.com/photo/button-blue-blank-gm154401486-17919852';  
    this.isActive = true;
    this.textColor = 'yellow';
    this.fontSize--;
  }

logout(){
    this.isLoggedIn = false;
  }

login(){
    this.isLoggedIn = true;
  }
}
