import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Pricing } from 'src/app/shared/components/models/pricing.model';
import {
  screenMatrix,
  screenQuantities,
  directQuantitiesPrices,
  tax,
  garments,
  screen
} from 'src/app/shared/constants/pricing';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'my-pricing',
  templateUrl: './pricing.page.html',
  styleUrls: ['./pricing.page.scss']
})
export class PricingPage implements OnInit {
  modalRef: BsModalRef;

  title: string =
    'GET THE BEST T-SHIRT & APPAREL PRINTING QUOTE AT THE FAIREST PRICE';

  submitted: boolean = false;
  tab: string = '1';

  form: FormGroup;

  pricing: Pricing = new Pricing();

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.calculate();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit(form: any) {
    this.submitted = true;
  }

  openChat(chat) {
    chat.intercom.show();
  }

  switchTab(tab: string) {
    this.tab = tab;

    if (tab === '3') {
      this.pricing.quantity = 1;
      this.pricing.location.length = 0;
      this.pricing.location.push('fullcoverage');
      this.setGarment('best');
      this.pricing.printPrice = 13;
    } else {
      if (tab === '2') {
        this.pricing.quantity = 1;
        this.pricing.printPrice = directQuantitiesPrices[0].price;
      } else {
        this.pricing.quantity = 12;
      }

      this.pricing.location.length = 0;
      this.pricing.location.push('fullfront');

      console.log(this.pricing);

      this.calculate();
    }
  }

  //Location Functions
  checkLocation(x: string): boolean {
    if (this.pricing.location.length > 0) {
      return this.pricing.location.includes(x);
    } else {
      return false;
    }
  }

  toggleLocation(location: string) {
    if (this.tab === '1') {
      if (this.pricing.location.includes(location)) {
        this.pricing.location = this.pricing.location.filter(
          item => item !== location
        );
      } else {
        this.pricing.location.push(location);
      }
    } else {
      if (this.pricing.location) {
        if (this.pricing.location.includes(location)) {
          this.pricing.location = this.pricing.location.filter(
            item => item !== location
          );
        } else {
          this.pricing.location.push(location);
        }
      }
    }

    this.calculate();
  }

  // Garments
  setGarment(quality: any) {
    this.pricing.garmentQuality = quality.toString();

    switch (quality) {
      case 'good':
        this.pricing.garmentPrice = garments.good;
        break;

      case 'better':
        this.pricing.garmentPrice = garments.better;
        break;

      case 'best':
        this.pricing.garmentPrice = garments.best;
        break;
    }

    this.calculate();
  }

  // Colors Functions
  setColor(color: number) {
    this.pricing.colors = color;
    this.calculate();
  }

  toggleUnderbase() {
    this.pricing.underbaseColor = !this.pricing.underbaseColor;
    this.calculate();
  }

  hasColors(): any {
    let color;
    if (this.pricing.location.length > 0) {
      if (this.pricing.underbaseColor) {
        color = this.pricing.location.length * (this.pricing.colors + 1);
      } else {
        color = this.pricing.location.length * this.pricing.colors;
      }
    } else {
      color = 0;
    }

    this.pricing.colorsCount = color;
  }

  printCostAndColor() {
    console.log(this.pricing.colorsCount);
    let printValue = 0;

    if (this.pricing.colorsCount !== 0) {
      printValue = this.pricing.colorsCount * 10 - 10;
    }

    this.pricing.printCostAndColor = printValue;
  }

  printCost() {}

  getPrintPriceIndex(): any {
    const key = this.pricing.quantity;
    let value;
    screenQuantities.forEach(qnt => {
      if (qnt.from <= key && qnt.to >= key) {
        value = qnt.index;
      }
    });
    return value;
  }

  printPrice() {
    let printPrice;
    if (this.tab === '1') {
      const printLocation = this.pricing.location.length;

      if (printLocation === 0) {
        printPrice = 0;
      } else {
        const index = this.getPrintPriceIndex();
        let colorIndex = this.pricing.underbaseColor
          ? this.pricing.colors + 1
          : this.pricing.colors;

        if (colorIndex === 9) {
          colorIndex = 8;
        }

        printPrice = screenMatrix[colorIndex][index] * printLocation;
      }
      this.pricing.printPrice = printPrice;
    } else if (this.tab === '3') {
      printPrice = 13;
      this.pricing.printPrice = printPrice;
    } else {
      let index;
      if (this.pricing.location.length > 0) {
        index = this.pricing.quantity - 1;

        this.pricing.printPrice =
          directQuantitiesPrices[index].price * this.pricing.location.length;
        // }
      } else {
        this.pricing.printPrice = 0;
      }
    }
  }

  totalPricePerShirt(): number {
    const totalPricePerShirt =
      this.pricing.printPrice + this.pricing.garmentPrice;

    this.pricing.pricePerShirt = totalPricePerShirt;

    return totalPricePerShirt;
  }

  // Calculations
  calculate() {
    if (this.tab === '1') {
      this.hasColors();
      this.printCostAndColor();
    }

    this.printPrice();
    this.totalPricePreTax();
    this.totalPrice();
  }

  totalPricePreTax() {
    const price = this.pricing.quantity * this.totalPricePerShirt();
    let total;

    if (this.tab === '1') {
      total = price + this.pricing.printCostAndColor;
    } else {
      total = price;
    }

    this.pricing.priceExTax = total;
  }

  totalPrice() {
    this.pricing.totalPrice =
      this.pricing.priceExTax * tax + this.pricing.priceExTax;
  }

  // Quantity Functions
  updateQnt(type: string) {
    if (this.tab === '1') {
      if (type === '-' && this.pricing.quantity < 13) {
        this.pricing.quantity = this.pricing.quantity;
      } else {
        switch (type) {
          case '+':
            this.pricing.quantity = this.pricing.quantity + 1;
            break;

          case '-':
            this.pricing.quantity = this.pricing.quantity - 1;
            break;
        }
      }
    } else {
      if (this.pricing.quantity > 1) {
        switch (type) {
          case '+':
            this.pricing.quantity = this.pricing.quantity + 1;
            break;

          case '-':
            this.pricing.quantity = this.pricing.quantity - 1;
            break;
        }
      } else if (this.pricing.quantity === 1 && type === '+') {
        this.pricing.quantity = this.pricing.quantity + 1;
      } else {
        return;
      }
    }

    this.calculate();
  }

  // On Key Press event
  onKeyDown(e: any) {
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
      (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
      (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
      (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
      (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
    ) {
      return; // let it happen, don't do anything
    }
    // Ensure that it is a number and stop the keypress
    else if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      document.getElementById('qnt-validate').style.opacity = '1';
      setTimeout(() => {
        document.getElementById('qnt-validate').style.opacity = '0';
      }, 2000);

      e.preventDefault();
    } else if (parseInt(e.key) < 12 && this.tab === '1') {
      e.preventDefault();
    } else if (parseInt(e.key) < 1 && this.tab === '2') {
      e.preventDefault();
    } else if (parseInt(e.key) < 1 && this.tab === '3') {
      e.preventDefault();
    }
  }
}
