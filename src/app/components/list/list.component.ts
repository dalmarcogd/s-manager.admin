import {BaseDTO} from '../../model/base/base.dto';
import {Component} from '@angular/core';
import {ListService} from './list.service';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ["./list.component.css"]
})
 export abstract class ListComponent<T extends BaseDTO> extends BaseComponent {

    abstract getListService(): ListService<T>;
}
