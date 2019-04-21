    import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
    import {NgForm} from '@angular/forms';
    import {HttpClient} from '@angular/common/http';
    import {share} from 'rxjs/operators';
    import {SharedBrowseProductAndCategoryService} from '../module/services/shared-browse-product-and-category.service';
    import {DataService} from '../../../services/data.service';
    import {Router} from '@angular/router';

    @Component({
      selector: 'app-add-product',
      templateUrl: './add-product.component.html',
      styleUrls: ['./add-product.component.css']
    })
    export class AddProductComponent implements OnInit {
      // private image;
      private src = null;
      private  width = 0;
      private  height = 0;
      private touched = false;
      private specification = [];
      private num;
      private image;
      private imageType = ['jpg', 'jpeg', 'png'];
      private error = false;
      constructor(private httpClient: HttpClient,
                  private service: SharedBrowseProductAndCategoryService,
                  private dataService: DataService,
                  private router: Router) {
        this.num = 1;
        this.specification.push(this.num);
      }
      @ViewChild('product') Form: NgForm;

      ngOnInit() {
        console.log(this.service.productList);
      }

      onUpload(event) {
        const ele = event.target;
        if (ele.files.length > 0) {
          // console.log(image);
          console.log(ele.files[0]);
          const ext = ele.files[0].name.split('.')[ele.files[0].name.split('.').length - 1];
          this.error = !this.imageType.includes(ext) || !(ele.files[0].size <= 5000000);
          if (!this.error) {
            const th = this;
            const reader = new FileReader();
            reader.onload = function (e) {
              th.src = e.target['result'];
              th.width = 200;
              th.height = 200;
            };
            reader.readAsDataURL(ele.files[0]);
            const image = new FormData();
            image.append('file', ele.files[0]);
            this.image = image;
          }
        }
      }
      onSubmit(form: NgForm) {

        if (form.valid) {
          this.touched = true;
          // console.log(this.imageType.includes(ext));
          if (!!this.src && !this.error) {
            form.value['category_index_id'] = this.service.breadCrum[this.service.breadCrum.length - 1].category_index_id;
            form.value['shop_id'] = this.dataService.shop_details.data.shop_id;
            form.value['specification'] = Object.values(form.value['specification']);
            this.image.append('data', form.value);
            const fData = new Blob([JSON.stringify(form.value)], {
              type: 'application/json',
            });
            this.image.append('data', fData);
            this.httpClient.post('http://localhost/php/api/write/add_new_product.php', this.image).pipe(share())
              .subscribe(res => {
                console.log(res);
                this.service.productList.push(res['product']);
                this.router.navigate(['main/browse/viewCategory']).then();
              }, err => {
                console.log(err);
              });
          }
        }
      }
      onAdd(form: NgForm) {
        console.log(this.Form);
        this.specification.push(++this.num);
        console.log(form.controls.specification['controls']);
        // setTimeout(() => {
        //   form.controls.specification['controls']['spec' + this.num].markAsPristine({ onlySelf: true });
        //   form.controls.specification['controls']['value' + this.num].markAsPristine({ onlySelf: true });
        //   form.controls.specification['controls']['spec' + this.num].markAsUntouched({ onlySelf: true});
        //   form.controls.specification['controls']['value' + this.num].markAsUntouched({ onlySelf: true });
        //   form.controls.specification['controls']['spec' + this.num].updateValueAndValidity({ onlySelf: true });
        //   form.controls.specification['controls']['value' + this.num].updateValueAndValidity({ onlySelf: true });
        //   form.controls.specification['controls']['spec' + this.num].setErrors(null);
        //   form.controls.specification['controls']['value' + this.num].setErrors(null);
        // });
      }
      onRemove() {
        if (this.num > 1) {
          this.num--;
          this.specification.pop();
        }
      }
    }
