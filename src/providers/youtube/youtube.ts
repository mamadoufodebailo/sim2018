import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Constant} from "../../modele/constant";

/*
  Generated class for the YoutubeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YoutubeProvider {

  constructor(public http: HttpClient) {

  }

  getPlaylistChannel(channel){
    return this.http.
    get(Constant.YOUTUBE_URL + "/playlists?key=" + Constant.YOUTUBE_KEY + "&channelId=" + channel +
      "&part=snippet,id&maxResults=" + Constant.COUNT_ELEMENT);
  }

  getListsVideo(listId){
    return this.http.
    get(Constant.YOUTUBE_URL + "/playlistItems?key=" + Constant.YOUTUBE_KEY + "&playlistId=" + listId +
      "&part=snippet,id&maxResults=" + Constant.COUNT_ELEMENT);
  }

}
