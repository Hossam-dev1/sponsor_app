import { Component, EventEmitter, Input, OnInit, SimpleChanges, ViewChild, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'kt-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  lang: string = 'en';

  @Input() form!: UntypedFormGroup;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() isTreeUi!: boolean;
  @Input() form_control_name!: any;
  @Input() form_control_filter!: any;
  @Input() validation_type!: string;
  @Input() dataList: any[] = [];
  @Input() is_multi: boolean = false;
  @Input() optional: boolean = false;
  @Input() isLoading: boolean = false;

  @Output() onSelectChange = new EventEmitter();

  constructor(
  ) {

  }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const dataList = changes['dataList']?.currentValue;
  }


  onMatSelectChange(event: MatSelectChange) {
    this.onSelectChange.emit(event.value)
  }


}
