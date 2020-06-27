import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIO } from '../config/config';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, coleccion: string = 'usuario'): any {
    let url = URL_SERVICIO+'/img';
    if(!img){
      return url+='/usuario/xxxxx';
    }

    switch(coleccion){
      case 'usuario':
        url+='/usuario/'+img;
        break;
      default:
        url+='/usuario/xxxxxx';
        break;
    }

    return url;
  }

}
