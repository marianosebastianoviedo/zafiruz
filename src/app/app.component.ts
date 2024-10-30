import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.setLanguageCode();
    }
    async setLanguageCode(){
      await Device.getLanguageCode().then((info)=>{
      this.translate.setDefaultLang(info.value);
      console.log(info);
    });
  };
}
