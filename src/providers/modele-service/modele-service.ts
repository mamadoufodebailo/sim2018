import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Constant} from "../../modele/constant";

/*
  Generated class for the ModeleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModeleServiceProvider {

  constructor(public http: HttpClient) {

  }

  getActualites(page){
    return this.http.get(Constant.API+'/information-'+page);
  }

  getExposants(page){
    return this.http.get(Constant.API+'/exposition-'+page);
  }

  getSponsors(page) {
    return this.http.get(Constant.API+'/sponsoring-'+page);
  }

  getRse(page) {
    return this.http.get(Constant.API+'/social-'+page);
  }

  getLive() {
    return this.http.get(Constant.API+'/stream');
  }

  getVideo(page) {
    return this.http.get(Constant.API+'/media-'+page);
  }

  getTemoignage(page) {
    return this.http.get(Constant.API+'/temoin-'+page);
  }

  getProgrammes(jour) {
    return this.http.get(Constant.API+'/programming-'+jour);
  }

  getPersonnage(id) {
    return this.http.get(Constant.API+'/person-'+id);
  }

  getPartenaires() {
    return this.http.get(Constant.API+'/partner');
  }

  getGalerie() {
    return this.http.get(Constant.API+'/galerie');
  }

  getLancement() {
    return this.http.get(Constant.API+'/start');
  }

  addContact(donnees:any) {
    return this.http.post(Constant.API+'/contact',donnees,
      {headers : new HttpHeaders({'Content-Type':'application/json'})})
  }

}
