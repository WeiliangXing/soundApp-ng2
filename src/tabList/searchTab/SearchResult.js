System.register(['angular2/core', 'angular2/common', '../../services/PlaylistService.ts', '../SongItem.ts'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, PlaylistService_ts_1, SongItem_ts_1;
    var SearchResultCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (PlaylistService_ts_1_1) {
                PlaylistService_ts_1 = PlaylistService_ts_1_1;
            },
            function (SongItem_ts_1_1) {
                SongItem_ts_1 = SongItem_ts_1_1;
            }],
        execute: function() {
            SearchResultCmp = (function () {
                function SearchResultCmp(playlistService) {
                    this.playlistService = playlistService;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SearchResultCmp.prototype, "result", void 0);
                SearchResultCmp = __decorate([
                    core_1.Component({
                        selector: 'search-result',
                        template: "\n\n\t<div class=\"tab-pane\" id=\"searchResult\">\n\t\t<div class=\"search media-list\" data-type=\"search\">\n\t\t\t<song-item *ngFor=\"#song of result\" [song]=\"song\" [show-add]=\"true\" [show-play]=\"true\"></song-item>\n\t\t</div>\n\n\t</div>\n\t",
                        styles: ["\n\t#searchResult{\n\t\tmargin: 0 5px 0 7px;\n\t}\n\n\t#search-help{\n\t\t\topacity: 0.8\n\t}\n\t#search-help img{\n\t\t\tmargin-left:40px;\n\t\t\tmargin-bottom: 15px;\n\t}\n\n\t#search-help p{\n\t\t\ttext-align: center;\n\t}\n\t"],
                        directives: [common_1.NgFor, SongItem_ts_1.SongItemCmp]
                    }), 
                    __metadata('design:paramtypes', [PlaylistService_ts_1.PlaylistService])
                ], SearchResultCmp);
                return SearchResultCmp;
            })();
            exports_1("SearchResultCmp", SearchResultCmp);
        }
    }
});
//# sourceMappingURL=SearchResult.js.map