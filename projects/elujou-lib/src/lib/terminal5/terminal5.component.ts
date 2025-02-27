import { Component } from '@angular/core';
import { XteechangeComponent } from '../xteechange/xteechange.component';
import { GraafMudelToojoudComponent } from '../graafMudelToojoud/graafMudelToojoud.component';

//import { products } from '../products';

@Component({
  selector: 'terminal5-component',
  templateUrl: './terminal5.component.html',
  styleUrls: ['./terminal5.component.scss'],
  standalone: true,
  imports: [XteechangeComponent, GraafMudelToojoudComponent]
})
export class Terminal5Component {
  
  tekst1 = 'Ettevõtte tööjõu tootlikkus on teiste ettevõtetega võrreldes ';
  tekst2 = '. Tööjõu tootlikkus näitab, kui palju käivet suudab ettevõte luua teatud tööjõukulude juures. Tööjõu tootlikkuse vähenemine viitab sellele, et palkade tõus on olnud suurem kui käibe kasv (või käibe vähenemine on olnud ulatuslikum kui palkade vähendamine).';
  //tekst3 = ' ja ettevõttesse investeeritud varade puhasrentaablus ';
  //tekst4 = '. Tasuvuse suurendamiseks tuleb teatud müügitulu ja/või varade mahu juures luua suhteliselt enam kasumit.';

  muutuja1 = '';
  //muutuja2 = '';
  //muutuja3 = '';
  
  koondEfektTekst = '';

  key: string = 'toojoudMadal';
  localValue: string = '';
  madalString: string;

  toomadal: any;
  madalNumber: number;

  getToojoudMadal() {
    this.toomadal = new XteechangeComponent;
    this.madalNumber = this.toomadal.model5y1;
        
    //this.madalString = localStorage.getItem(this.key);
    //this.madalNumber=Number(this.madalString);
    return this.madalNumber;
  }

  key2: string = 'toojoudKeskmine';
  keskmineString: string;

  tookeskmine: any;
  keskmineNumber: number;

  getToojoudKeskmine() {
    this.tookeskmine = new XteechangeComponent;
    this.keskmineNumber = this.tookeskmine.model5y2;

    //this.keskmineString = localStorage.getItem(this.key2);
    //this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'toojoudKorge';
  korgeString: string;

  tookorge: any;
  korgeNumber: number;

  getToojoudKorge() {
    this.tookorge = new XteechangeComponent;
    this.korgeNumber = this.tookorge.model5y3;
    
    //this.korgeString = localStorage.getItem(this.key3);
    //this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }

  valik = 1;
  valikTekst = 'algtekst';

  toojoudTekstValik() {
    if (this.valik == 1) {
      this.valikTekst = this.toojoudTekst();
    }

    else if (this.valik == 0) {
      this.valikTekst = this.toojoudTekstPuudu();
    }
    return this.valikTekst;
  }

  puudutekst: string;
  toojoudTekstPuudu () {
    this.puudutekst = "andmed puuduvad";
    return this.puudutekst;
  }

  toojoudTekst() {
    this.getToojoudMadal();
    this.getToojoudKeskmine();
    this.getToojoudKorge();

    if (this.madalNumber>this.keskmineNumber && this.madalNumber>this.korgeNumber) {
      this.muutuja1 = 'väiksem';       
    //  this.muutuja2 = 'väike';
    //  this.muutuja3 = 'väike';
    }

    else if (this.keskmineNumber>this.madalNumber && this.keskmineNumber>this.korgeNumber) {
      this.muutuja1='sama suur';
    //  this.muutuja2 = 'keskpärane';
    //  this.muutuja3 = 'keskpärane';
    }

    else if (this.korgeNumber>this.madalNumber && this.korgeNumber>this.keskmineNumber) {
      this.muutuja1='suurem';
    //  this.muutuja2 = 'suur';
    //  this.muutuja3 = 'suur';
    }

    else if (this.keskmineNumber===this.madalNumber && this.keskmineNumber===this.korgeNumber) {
      this.muutuja1='sama suur';
    //  this.muutuja2 = 'keskpärane';
    //  this.muutuja3 = 'keskpärane';
    }
    

    
  this.koondEfektTekst = this.tekst1+this.muutuja1+this.tekst2;
  //+this.muutuja2+this.tekst3+this.muutuja3+this.tekst4;

  localStorage.setItem("toojoudTekst", this.koondEfektTekst);
  
  return this.koondEfektTekst;
}





}