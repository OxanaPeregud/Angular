import {Component, OnInit} from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
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
    this.dish = this.dishService.getDish(id);
  }

  public goBack(): void {
    this.location.back();
  }
}
