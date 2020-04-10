import { Pipe, PipeTransform } from '@angular/core';
import { Owner } from 'src/app/api/models';

@Pipe({
  name: 'ownerProfileTitle'
})
export class OwnerProfileTitlePipe implements PipeTransform {

  transform(owner: Owner): unknown {
    return `${owner.first_name} ${owner.last_name}`;
  }

}
