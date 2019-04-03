import {Injectable} from '@angular/core';

@Injectable()
export class SharedBrowseProductAndCategoryService {
  public productList = [];
  public productCategory = [];
  public breadCrum = [];
  constructor() {}
}
