import {Component,OnInit, NgZone} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BrowserXhr } from '@angular/http';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { ProgressService,BrowserXhrWithProgress } from "../services/progress.service";
import { ProductService } from "../services/product.service";
import { HttpClient } from "@angular/common/http";



@Component({
  selector: "app-product-upload",
  templateUrl: "./product-upload.component.html",
  styleUrls: ["./product-upload.component.css"],
  providers: [
    { provide: BrowserXhr, useClass: BrowserXhrWithProgress },
    ProgressService
  ]
})
export class ProductUploadComponent implements OnInit {
  progress: number = 0;

  constructor(
    private zone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private toasty: ToastyService,private toastyConfig: ToastyConfig,
    private progressService: ProgressService,
    private productService: ProductService,
    private http: HttpClient
  ) {
    this.toastyConfig.theme = 'bootstrap';
    this.toastyConfig.timeout = 5000;
    this.toastyConfig.showClose =true;
  }

  ngOnInit() {
  }
  uploadFile(event: any) {
    debugger;
    this.progressService.startTracking().subscribe(
      progress => {
        debugger;
        this.zone.run(() => {
          debugger;
          this.progress = progress;
        });
      },
      null,
      () => {
        this.progress = null;
      }
    );
    const fileInput = event.srcElement;
    if (fileInput.files && fileInput.files[0]) {
      const fileToUpload = fileInput.files[0];
      fileInput.value='';
      // this.http.post('http://localhost:5001/api/product/' + 'UploadFiles/', formData)
      // .subscribe(r => console.log(r));
      // }
      this.productService.upload(fileToUpload).subscribe(
        r => {
          debugger;
          this.toasty.success({
            title: "success",
            msg: "uploaded successfully",
          });
        },
        err => {
          this.toasty.error({
            title: "Error",
            msg: "error",
          });
        }
      );
    }
  }
}
