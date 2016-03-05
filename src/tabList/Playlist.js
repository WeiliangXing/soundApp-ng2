System.register(['angular2/core', 'angular2/common', './SongItem.ts', '../services/PlaylistService.ts'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, SongItem_ts_1, PlaylistService_ts_1;
    var PlaylistCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (SongItem_ts_1_1) {
                SongItem_ts_1 = SongItem_ts_1_1;
            },
            function (PlaylistService_ts_1_1) {
                PlaylistService_ts_1 = PlaylistService_ts_1_1;
            }],
        execute: function() {
            PlaylistCmp = (function () {
                function PlaylistCmp(playlistService) {
                    var _this = this;
                    this.playlistService = playlistService;
                    this.playlistService
                        .getAll()
                        .subscribe(function (playlistData) {
                        _this.data = playlistData;
                    });
                    this.playlistService.publishChanges();
                }
                PlaylistCmp.prototype.ngOnInit = function () {
                };
                PlaylistCmp = __decorate([
                    core_1.Component({
                        selector: 'playlist',
                        directives: [SongItem_ts_1.SongItemCmp, common_1.NgFor],
                        template: "\n\t<div class=\"tab-pane\" id=\"playlistContainer\">\n\t\t<song-item *ngFor=\"#song of data\" [song]=\"song\" [show-add]=\"false\" [show-play]=\"true\" [show-delete]=\"true\"></song-item>\n\t</div>\n\t",
                        styles: ["\n\t#playlistContainer{\n\t\tpadding:7px;\n\t\tmax-height: 400px;\n\t\toverflow-y: scroll;\n\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [PlaylistService_ts_1.PlaylistService])
                ], PlaylistCmp);
                return PlaylistCmp;
            })();
            exports_1("PlaylistCmp", PlaylistCmp);
        }
    }
});
//# sourceMappingURL=Playlist.js.map