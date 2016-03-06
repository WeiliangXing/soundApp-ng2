import {Component, OnInit} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {SongItemCmp} from './SongItem.ts';
import {PlaylistService} from '../services/PlaylistService.ts';
@Component({
	selector: 'playlist',
	directives: [SongItemCmp, NgFor],
	template: `
	<a href="#"
			title="DeleteAll"
			class="delete-all-button"
			(click)='deleteAll()'
			>
			<i class="glyphicon icon-delete-all"></i></a>
	<div class="tab-pane" id="playlistContainer">
		<song-item *ngFor="#song of data" [song]="song" [show-add]="false" [show-play]="true" [show-delete]="true"></song-item>
	</div>
	`,
	styles: [`
	#playlistContainer{
		padding:7px;
		max-height: 400px;
		overflow-y: scroll;
	}
	`]
})
export class PlaylistCmp implements OnInit{
	private data: Array<any>;

	constructor(private playlistService: PlaylistService) {
		this.playlistService
				.getAll()
				.subscribe(playlistData => {
					this.data = playlistData;
				});
		this.playlistService.publishChanges();
	}

	ngOnInit() {

	}

	deleteAll(){
		this.playlistService.deleteAll();
	}

}
