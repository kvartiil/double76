import { Component } from '@angular/core';
import { ElujouLib2Component } from '../lib/elujou-lib2/elujou-lib2.component';
import { UustestComponent } from '../lib/elujou-uustest/elujou-uustest.component';
import { TabComponent } from '../lib/tabx/tabx.component';

@Component({
  selector: 'lib-elujou-lib',
  standalone: true,
  templateUrl: './elujou-lib.component.html',
  styleUrls: ['./elujou-lib.component.scss'],
  imports: [ElujouLib2Component, UustestComponent, TabComponent],
  //declarations: [ElujouLib2Component]

  //imports: [], 
  //template: `
  //  <p>
  //    See, mis RIIALE vaja!!!!
  //  </p>
//  `,
//styles: ``
})
export class ElujouLibComponent {

muutuja = "esimene muutuja";

}
