import { Component } from '@angular/core';
import { CatalogueService } from './services/catalogue.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-Local';
  villes;
  courantVille;
  constructor(public catService:CatalogueService,

                  private  router:Router){}
   ngOnInit(): void {
          this.getCities();

   }
   private getCities() {
          this.catService.getResource(this.catService.host+"/villes")
            .subscribe(data=>{
              this.villes=data;
            },err=>{
              console.log(err);
            })
        }

        getHotelsByCities(c) {
          this.courantVille=c;
          this.router.navigateByUrl('/hotels/2/'+c.id);
        }
         onSelectedHotels() {
            this.courantVille=undefined;
            this.router.navigateByUrl("/hotels/1/0");
          }
}
