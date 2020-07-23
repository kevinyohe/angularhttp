import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private HttpCient: HttpClient) { }

  getContacts(){
    // Headers
    const httpHeaders = new HttpHeaders();

    httpHeaders.append('content-type', 'application/json')


    return this.HttpCient.get('http://localhost:3000/contacts', { headers: httpHeaders });  //returns observable
  }
  createContact(createResource){
    const httpHeaders = new HttpHeaders();

    httpHeaders.append('content-type', 'application/json')
    return this.HttpCient.post('Http://localhost:3000/contacts', createResource, {headers: httpHeaders})
  }
  updateContact(contactId, updateResource){
    const httpHeaders = new HttpHeaders();

    httpHeaders.append('content-type', 'application/json')
    let url = 'Http://localhost:3000/contacts/' + contactId
    return this.HttpCient.put(url, updateResource, {headers: httpHeaders})
  }
}
