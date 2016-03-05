System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var SoundCloudSearch;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            SoundCloudSearch = (function () {
                function SoundCloudSearch(http) {
                    this.clientId = '758445f03a3b5d68bc5889e416ece1e7';
                    this.http = http;
                    console.log(this.http);
                }
                SoundCloudSearch.prototype.search = function (keyword) {
                    var _this = this;
                    var uri = this.makeSearchUri(keyword);
                    return this.http.get(uri)
                        .map(function (res) { return _this.handleResponse(res); })
                        .catch(this.handleError);
                };
                SoundCloudSearch.prototype.handleResponse = function (res) {
                    var data = res.json();
                    var result = [];
                    if (data && data.collection) {
                        data.collection.forEach(function (item) {
                            var song = {};
                            song.streamUrl = item.stream_url;
                            song.name = item.title;
                            song.artist = item.user.username;
                            song.provider = 1;
                            song.idFromProvider = item.id;
                            song.duration = item.duration;
                            song.imageUrl = item.artwork_url;
                            song.link = item.permalink_url;
                            result.push(song);
                        });
                    }
                    return result;
                };
                SoundCloudSearch.prototype.handleError = function (error) {
                    console.log(error);
                };
                SoundCloudSearch.prototype.makeSearchUri = function (keyword) {
                    return 'http://api.soundcloud.com/tracks?linked_partitioning=1&client_id=' + this.clientId + '&q=' + keyword;
                };
                SoundCloudSearch = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SoundCloudSearch);
                return SoundCloudSearch;
            })();
            exports_1("SoundCloudSearch", SoundCloudSearch);
        }
    }
});
//# sourceMappingURL=SoundCloudSearch.js.map