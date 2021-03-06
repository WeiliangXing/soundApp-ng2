System.register(['angular2/core', './SoundCloudSearch.ts'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, SoundCloudSearch_ts_1;
    var SearchFactory;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SoundCloudSearch_ts_1_1) {
                SoundCloudSearch_ts_1 = SoundCloudSearch_ts_1_1;
            }],
        execute: function() {
            SearchFactory = (function () {
                function SearchFactory(soundCloudSearch) {
                    this.soundCloudSearch = soundCloudSearch;
                }
                SearchFactory.prototype.getSearchClient = function (provider) {
                    if (provider == 1) {
                        return this.soundCloudSearch;
                    }
                    return null;
                };
                SearchFactory = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [SoundCloudSearch_ts_1.SoundCloudSearch])
                ], SearchFactory);
                return SearchFactory;
            })();
            exports_1("SearchFactory", SearchFactory);
        }
    }
});
//# sourceMappingURL=SearchFactory.js.map