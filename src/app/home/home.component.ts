import {Component, OnInit} from '@angular/core';
import {DishService} from "../services/dish.service";
import {PromotionService} from "../services/promotion.service";
import {Promotion} from "../shared/promotion";
import {Dish} from "../shared/dish";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dish: Dish | undefined;
  public promotion: Promotion | undefined;

  constructor(private dishService: DishService,
              private promotionService: PromotionService) {
  }

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }
}
