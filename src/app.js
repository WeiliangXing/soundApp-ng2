System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http', './services/SearchFactory.ts', './services/PlaylistService.ts', './services/SoundCloudSearch.ts', './services/SoundCloudPlayer.ts', './services/SoundManagerSoundPlayer.ts', './services/SoundManager.ts', './player/Player.ts', './tabList/TabList.ts', './services/LocalStorage.ts', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, http_1, SearchFactory_ts_1, PlaylistService_ts_1, SoundCloudSearch_ts_1, SoundCloudPlayer_ts_1, SoundManagerSoundPlayer_ts_1, SoundManager_ts_1, Player_ts_1, TabList_ts_1, LocalStorage_ts_1;
    var AppCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (SearchFactory_ts_1_1) {
                SearchFactory_ts_1 = SearchFactory_ts_1_1;
            },
            function (PlaylistService_ts_1_1) {
                PlaylistService_ts_1 = PlaylistService_ts_1_1;
            },
            function (SoundCloudSearch_ts_1_1) {
                SoundCloudSearch_ts_1 = SoundCloudSearch_ts_1_1;
            },
            function (SoundCloudPlayer_ts_1_1) {
                SoundCloudPlayer_ts_1 = SoundCloudPlayer_ts_1_1;
            },
            function (SoundManagerSoundPlayer_ts_1_1) {
                SoundManagerSoundPlayer_ts_1 = SoundManagerSoundPlayer_ts_1_1;
            },
            function (SoundManager_ts_1_1) {
                SoundManager_ts_1 = SoundManager_ts_1_1;
            },
            function (Player_ts_1_1) {
                Player_ts_1 = Player_ts_1_1;
            },
            function (TabList_ts_1_1) {
                TabList_ts_1 = TabList_ts_1_1;
            },
            function (LocalStorage_ts_1_1) {
                LocalStorage_ts_1 = LocalStorage_ts_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppCmp = (function () {
                function AppCmp() {
                }
                AppCmp = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n\t<div class='app'>\n\t\t<player></player>\n\t\t<tablist></tablist>\n\t</div>\n\t",
                        styles: [
                            "\n\t\t.app {\n\t\t\twidth: 320px;\n\t\t}\n\n\t\t"
                        ],
                        directives: [TabList_ts_1.TabListCmp, Player_ts_1.PlayerCmp],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            SoundCloudSearch_ts_1.SoundCloudSearch,
                            SearchFactory_ts_1.SearchFactory,
                            PlaylistService_ts_1.PlaylistService,
                            SoundCloudPlayer_ts_1.SoundCloudPlayer,
                            SoundManagerSoundPlayer_ts_1.SoundManagerSoundPlayer,
                            SoundManager_ts_1.SoundManager,
                            LocalStorage_ts_1.LocalStorage
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppCmp);
                return AppCmp;
            })();
            exports_1("AppCmp", AppCmp);
            browser_1.bootstrap(AppCmp);
        }
    }
});
//# sourceMappingURL=app.js.map