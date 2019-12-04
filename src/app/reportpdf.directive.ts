import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appReportpdf]'
})
export class ReportpdfDirective {

  @Input('appReportpdf') pdfsource: string;

  constructor(private el: ElementRef) {
    //el.nativeElement.data = 'https://greenfillproject.com/media/reports/report_21.pdf';
    //el.nativeElement.data = this.pdfsource;
     //console.log(this.pdfsource);
  }

  ngOnChanges(changes) {
    //console.log(this.pdfsource);
    this.changesrc(this.pdfsource);
  }

  private changesrc(source: string) {
    //console.log(this.pdfsource);
    this.el.nativeElement.data = source;
  }

}
