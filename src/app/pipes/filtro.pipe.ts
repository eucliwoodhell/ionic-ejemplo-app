import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(
    arreglo: any[], 
    text: string= '',
    columna: string = 'title'
    ): any[] {
    console.log(arreglo);
    console.log(text);


    if ( text === ''){
      return arreglo;
    }


    if ( !arreglo ){
      return arreglo;
    }

    text = text.toLocaleLowerCase();


    return arreglo.filter( 
      item => item[columna].toLowerCase().includes( text )
     );
  }

}
