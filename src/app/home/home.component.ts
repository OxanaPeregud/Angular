import {Component, Inject, OnInit} from '@angular/core';
import {DishService} from "../services/dish.service";
import {PromotionService} from "../services/promotion.service";
import {Promotion} from "../shared/promotion";
import {Dish} from "../shared/dish";
import {Leader} from "../shared/leader";
import {LeaderService} from "../services/leader.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dish: Dish | undefined;
  public dishErrMess: string | undefined;
  public promotion: Promotion | undefined;
  public leader: Leader | undefined;

  constructor(private dishService: DishService,
              private promotionService: PromotionService,
              private leaderService: LeaderService,
              @Inject('BaseURL') public BaseURL: any) {
  }

  ngOnInit(): void {
    this.dishService.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
        errmess => this.dishErrMess = <any>errmess);
    this.promotionService.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion);
    this.leaderService.getLeader()
      .subscribe(leader => this.leader = leader);
  }
}
