import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilterPipe',
  pure: false
})
export class ListFilterPipePipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) return [];
    return items.filter(it => it[field].toLowerCase().includes(value ? value.toLowerCase() : ''));
  }

}
