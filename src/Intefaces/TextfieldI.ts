export interface TextfieldI {
    placeholder: string;
    onchange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    value?:string;
  }
  