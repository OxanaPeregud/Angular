import {Component, Inject, OnInit} from '@angular/core';
import {Dish} from "../shared/dish";
import {DishService} from "../services/dish.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public dishes: Dish[] | undefined;
  public selectedDish: Dish | undefined;
  public errMess: string | undefined;

  constructor(private dishService: DishService,
              @Inject('BaseURL') public BaseURL: any) {
  }

  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes,
        errmess => this.errMess = <any>errmess);
  }
}
