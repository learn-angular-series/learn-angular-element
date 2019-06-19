import { Input, Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'common-panel',
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">{{title}}</h3>
      </div>
      <div class="panel-body">
        <button class="btn btn-primary" (click)="handleClick()">{{label}}</button>
      </div>
    </div>
  `,
  styles: [`
    .btn-primary:hover {
        color: #fff;
        background-color: #286090;
        border-color: #204d74;
    }
    .btn.focus, .btn:focus, .btn:hover {
        color: #333;
        text-decoration: none;
    }
    .btn-primary {
        color: #fff;
        background-color: #337ab7;
        border-color: #2e6da4;
    }
    .btn {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
        border-radius: 4px;
    }
    .panel {
        margin-bottom: 20px;
        background-color: #fff;
        border: 1px solid transparent;
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }
    .panel-primary {
        border-color: #337ab7;
    }
    .panel-primary > .panel-heading {
        color: #fff;
        background-color: #337ab7;
        border-color: #337ab7;
    }
    .panel-heading {
        padding: 10px 15px;
        border-bottom: 1px solid transparent;
            border-bottom-color: transparent;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PanelComponent {
  @Input() title = "标题";
  @Input() label = '按钮';
  @Output() clickBtn = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {

  }

  handleClick() {
    this.clickBtn.emit(this.label);
  }
}
