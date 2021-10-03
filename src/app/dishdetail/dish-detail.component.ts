import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Dish} from "../shared/dish";
import {DishService} from "../services/dish.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

  public dish: Dish | undefined;

  constructor(private dishService: DishService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dishService.getDish(id)
      .subscribe(dish => this.dish = dish);
  }

  public goBack(): void {
    this.location.back();
  }
}
