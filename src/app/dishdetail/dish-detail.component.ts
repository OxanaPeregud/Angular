import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Dish} from "../shared/dish";
import {DishService} from "../services/dish.service";
import {Location} from "@angular/common";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

  public dish: Dish | undefined;
  public dishIds: string[] | any;
  public prev: string | undefined;
  public next: string | undefined;

  constructor(private dishService: DishService,
              private route: ActivatedRoute,
              private location: Location,
              @Inject('BaseURL') public BaseURL: any) {
  }

  ngOnInit(): void {
    this.dishService.getDishIds()
      .subscribe((dishIds) => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
      .subscribe(dish => {
        this.dish = dish;
        this.setPrevNext(dish.id)
      });
  }

  public setPrevNext(dishId: string) {
    const index = this.dishIds?.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  public goBack(): void {
    this.location.back();
  }
}
