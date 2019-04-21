import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';



export class CustomRouteReuse implements RouteReuseStrategy {
  private handlers: {[key: string]: DetachedRouteHandle} = {};
  private viewProductDetailRoute;

  constructor() {

  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // console.log('shouldDetach');
    this.viewProductDetailRoute = route;
    // console.log(this.viewProductDetailRoute.url.join('/'));
    return route.url.join('/') === 'inventory';
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // console.log('store');
    this.handlers[route.url.join('/')] = handle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // console.log(route.url.join('/') === 'inventory' && !!this.handlers['inventory'] && this.viewProductDetailRoute.url.join('/') === 'viewProductDetails');
    console.log(route.url.join('/'));
    return (route.url.join('/') === 'inventory') && (!!this.handlers['inventory']) && (this.viewProductDetailRoute.url.join('/') === 'viewProductDetails');
 // return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    // console.log('retrieve');
    if (route.url.join('/') === 'inventory') {
    return this.handlers['inventory'];
    } else {
      return null;
    }
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // console.log('shouldReuseRoute');
    return future.routeConfig === curr.routeConfig ;
  }


}
