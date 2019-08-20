import { Component, Prop, h, State, Method } from '@stencil/core';

@Component({
  tag: 'auto-complete-textbox',
  styleUrl: 'auto-complete-textbox.css',
  shadow: true
})

export class AutoCompleteTextbox {

  private initialDataSet: string[] = ["lorem", "ipsum", "dolor", "sit", "amet"];
  /**
   * This property can be used by host element to make functionality disabled
   */
  @Prop({attribute: 'disabled', reflect : true}) isDisabled:boolean = false;

  /**
   * The filterd data as per searched query
   */
  @Prop({reflect: false}) data: string[] = [];

  /**
   * Text box state as focused or not
   */
  @State() isFocused: boolean = false;

  textInput!: HTMLInputElement;

  /**
   * This method can be used to change/initialize autocomplete suggestions list.
   * Note - This will not append but reinitialize the suggestion data, so previous suggestion data will be overwritten.
   * @param d An array of string to initialize autocomplete suggestions dataset.
   */
  @Method() async initializeData(d: string[]) {
    this.initialDataSet = d;
    this.data = d;
  }

  componentWillLoad(){
    this.data = this.initialDataSet;
  }

  activate(state: boolean){
    this.isFocused = state;
  }

  filterData(e:KeyboardEvent = null){
    if(e && e.key === "Escape") {
      this.textInput.value = "";
    }

    if(this.textInput.value.trim()){
      this.data = this.initialDataSet.filter(x=>x.toLowerCase().indexOf(this.textInput.value.trim().toLowerCase()) >- 1);
    } else {
      this.data = this.initialDataSet;
    }
  }

  textChanged(_query:string){
    this.textInput.value = _query;
    this.filterData();
    this.activate(false);
  }

  render() {
    return (
      <div class="auto-complete-box">
        <input ref={(el) => this.textInput = el as HTMLInputElement} disabled={this.isDisabled} onFocus={(e:FocusEvent)=>{if(e)this.activate(true)}}
          onKeyUp={this.filterData.bind(this)} onChange={this.filterData.bind(this)}/>
        <ul class={this.isFocused ? "suggestion active" : "suggestion"}>
          {this.data.map((x)=>
            <li class="suggestion-item" onClick={(e:MouseEvent) => {if(e) this.textChanged(x)}}>{x}</li>
          )}
        </ul>
      </div>
    );
  }
}
