import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  NgZone
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastyService } from "ng2-toasty";
import { ProgressService } from "../services/progress.service";
import { ProductService } from "../services/product.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-product-upload",
  templateUrl: "./product-upload.component.html",
  styleUrls: ["./product-upload.component.css"]
})
export class ProductUploadComponent implements OnInit {
  @ViewChild("fileInput")
  fileInput: ElementRef;
  progress: any;

  constructor(
    private zone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private toasty: ToastyService,
    private progressService: ProgressService,
    private productService: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  uploadFile(event: any) {
    debugger;
    this.progressService.startTracking().subscribe(
      progress => {
        debugger;
        this.zone.run(() => {
          this.progress = progress;
        });
      },
      null,
      () => {
        this.progress = null;
      }
    );
    const fi = event.srcElement;
    if (fi.files && fi.files[0]) {
      const fileToUpload = fi.files[0];

      const formData: FormData = new FormData();
      formData.append("file", fileToUpload);
      // this.http.post('http://localhost:5001/api/product/' + 'UploadFiles/', formData)
      // .subscribe(r => console.log(r));
      // }
      // this.productService.save(formData).subscribe(
      //   r => {
      //     console.log(r);
      //   },
      //   err => {
      //     this.toasty.error({
      //       title: "Error",
      //       msg: "error",
      //       theme: "bootstrap",
      //       showClose: true,
      //       timeout: 5000
      //     });
      //   }
      // );
    }
  }
}
