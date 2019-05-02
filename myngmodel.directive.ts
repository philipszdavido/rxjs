import { Directive, ElementRef,EventEmitter,Input,Output,Renderer2, HostListener } from '@angular/core';
const log = console.log;

@Directive({
  selector: '[appMyNgModel]',
  exportAs: 'appMyNgModel'
})
export class MyngmodelDirective implements OnChanges {
  @Input('appMyNgModel') appMyNgModel: any
  @Output('appMyNgModelChange') appMyNgModelChange=new EventEmitter()
  @HostListener('input', ['$event.target'])
  _handleInput(targetElem: any) {
    const value = targetElem.value
    this.appMyNgModelChange.emit(value)
  }

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnChanges(changes: any) {
    log('chnages')
    this.renderer.setProperty(this.element.nativeElement,'value',this.appMyNgModel,'')
  }

}
