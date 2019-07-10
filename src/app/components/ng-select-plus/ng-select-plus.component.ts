import { Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ListFilterPipePipe } from './../list-filter-pipe.pipe';

@Component({
  selector: 'app-ng-select-plus',
  templateUrl: './ng-select-plus.component.html',
  styleUrls: ['./ng-select-plus.component.css']
})
export class NgSelectPlusComponent implements OnInit, OnChanges {

  search: string;

  @Input() list: any[];
  @Input() placeholder: string;
  @Input() placeholderSearch ? = 'Search';
  @Input() showSearch ? = false;

  @Input() value?: any;
  @Input() text?: string;

  @Output() changedList ? = new EventEmitter(); // Retorna un array con los objecto seleccionado...
  @Output() shareIndividualCheckedList ? = new EventEmitter(); // Retorna el item que se proceso ya sea activando o no

  checkedList: any[];
  currentSelected: {};
  listText: string;
  showDropDown: boolean;
  all: boolean;

  constructor() {
      this.checkedList = [];
  }

  /**
   * @Description:
   */
  ngOnInit() {
  }

  toggleSelectAll(checked) {
    this.checkedList = [];
    if (checked) {
      this.list.forEach((value) => {
        value.checked = true;
        this.checkedList.push(value);
      });
      this.listText = this.checkedList.map(e => this.getValue(e)).join(', ');
    } else {
      this.list.forEach((value) => {
        value.checked = false;
      });
      this.listText = '';
    }

    this.shareCheckedlist();
    this.shareIndividualStatus();

  }

  /**
   * @Description:
   * @param {Boolean} checked
   * @param {Any} obj
   */
  getSelectedValue(checked: Boolean, obj: any) {
      obj.checked = checked;
      if (checked) {
          this.checkedList.push(obj);
          this.listText = this.checkedList.map(e => this.getValue(e)).join(', ');
      } else {
          const index = this.checkedList.indexOf(obj);
          this.checkedList.splice(index, 1 );
          this.listText = this.checkedList.map(e => this.getValue(e)).join(', ');
      }

      this.currentSelected = obj;
      this.shareCheckedlist();
      this.shareIndividualStatus();
  }

  /**
   * this clear selected items
   */
  clear() {
      this.checkedList = [];
      this.changedList.emit(this.checkedList);
      this.list.forEach((item) => {
          item.checked = false;
      })
  }

  /**
   * @Description:
   */
  shareCheckedlist() {
      this.changedList.emit(this.checkedList);
  }

  /**
   * @Description:
   */
  shareIndividualStatus() {
      this.shareIndividualCheckedList.emit(this.currentSelected);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['list']) {
      this.list = changes['list'].currentValue;
      this.proceList();
    }
  }

  /**
   * @Description:
   */
  proceList() {
      this.checkedList = [];
      if (this.list) {
        if (this.list.length > 0) {
            this.list.forEach((row) => {
              if (row.checked) {
                    this.checkedList.push(row);
                    this.listText = this.checkedList.map(e => this.getValue(e)).join(', ');
                }
            });
        }
      }
    }

    getValue(a: any) {
      let text;
      this.text ? text = a[this.text] : text = a.value;
      return text;
    }

    eventHandler($event) {
      const filter = this.list.filter(obj => {
        return obj.nombre == this.search;
      })
      console.log(filter);
    }

}
