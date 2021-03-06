System.register(['angular2/core', 'angular2/common', '../services/SoundManager.ts', '../interfaces/Events.ts', "./Controls.ts", './Volume.ts', './SongImage.ts', './timeSeeker/TimeSeeker.ts', './TimeInfo.ts'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, SoundManager_ts_1, Events_ts_1, Controls_ts_1, Volume_ts_1, SongImage_ts_1, TimeSeeker_ts_1, TimeInfo_ts_1;
    var PlayerCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (SoundManager_ts_1_1) {
                SoundManager_ts_1 = SoundManager_ts_1_1;
            },
            function (Events_ts_1_1) {
                Events_ts_1 = Events_ts_1_1;
            },
            function (Controls_ts_1_1) {
                Controls_ts_1 = Controls_ts_1_1;
            },
            function (Volume_ts_1_1) {
                Volume_ts_1 = Volume_ts_1_1;
            },
            function (SongImage_ts_1_1) {
                SongImage_ts_1 = SongImage_ts_1_1;
            },
            function (TimeSeeker_ts_1_1) {
                TimeSeeker_ts_1 = TimeSeeker_ts_1_1;
            },
            function (TimeInfo_ts_1_1) {
                TimeInfo_ts_1 = TimeInfo_ts_1_1;
            }],
        execute: function() {
            PlayerCmp = (function () {
                function PlayerCmp(soundManager) {
                    var _this = this;
                    this.song = null;
                    this.soundManager = soundManager;
                    this.soundManager.on(Events_ts_1.Events.ChangeSong, function (song) {
                        _this.song = song;
                        _this.totalTime = _this.soundManager.getTotalTime();
                    });
                }
                PlayerCmp.prototype.ngOnInit = function () {
                    var _this = this;
                    this.soundManager.on(Events_ts_1.Events.Pause, function () {
                        _this.isPlaying = false;
                    });
                    this.soundManager.on(Events_ts_1.Events.Play, function () {
                        _this.isPlaying = true;
                    });
                    this.soundManager.on(Events_ts_1.Events.PlayResume, function () {
                        _this.isPlaying = true;
                    });
                    this.soundManager.on(Events_ts_1.Events.Time, function (time) {
                        _this.currentTime = time;
                        _this.totalTime = _this.soundManager.getTotalTime();
                    });
                };
                PlayerCmp = __decorate([
                    core_1.Component({
                        selector: 'player',
                        template: "\n\t<section class=\"player\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-4 player-image\">\n\t\t\t\t<song-image [song]=\"song\"></song-image>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-8 player-info\">\n\t\t\t\t<h2 class='song-title' *ngIf='song'>{{ song.name }}</h2>\n\t\t\t\t<h3 class=\"song-artist\" *ngIf='song'>{{ song.artist }}</h3>\n\t\t\t\t<div class='controllerGroup'>\n\t\t\t\t\t<div class='pull-left'>\n\t\t\t\t\t\t<controls [song]=\"song\" [is-playing]=\"isPlaying\"></controls>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='pull-right'>\n\t\t\t\t\t\t<volume></volume>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<time-info [song]=\"song\" [time]=\"currentTime\" [total-time]=\"totalTime\"></time-info>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<time-seeker [time]=\"currentTime\" [total-time]=\"totalTime\"></time-seeker>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t",
                        styles: ["\n\t.player{\n\t\tpadding-top:7px;\n\t\tpadding-left:7px;\n\t\tpadding-bottom: 18px;\n\t\tpadding-right: 7px;\n\t\tbackground-color: #fff;\n\t}\n\n\t.song-title {\n\t\tfont-size: 14px;\n\t\tmargin-top:4px;\n\t\tpadding-bottom: 0;\n\t\tcolor:#000;\n\t\tmargin-bottom: 7px;\n\t}\n\n\t.song-artist{\n\t\tfont-size: 13px;\n\t\tmargin-top: 6px;\n\t\tcolor:#939393;\n\t}\n\t.player-info {\n\t\tpadding-left:0;\n\t}\n\n\t.controllerGroup{\n\t\tdisplay: block;\n\t\tmargin-top: 15px;\n\t}\n\n\t.controllerGroup a {\n\t\ttext-decoration: none;\n\t\toutline: none;\n\t}\n\n\t.controllerGroup a:focus {\n\t\ttext-decoration: none;\n\t\toutline: none;\n\t}\n\t"],
                        directives: [common_1.NgIf, Controls_ts_1.ControlsCmp, Volume_ts_1.VolumeCmp, SongImage_ts_1.SongImageCmp, TimeSeeker_ts_1.TimeSeekerCmp, TimeInfo_ts_1.TimeInfoCmp]
                    }), 
                    __metadata('design:paramtypes', [SoundManager_ts_1.SoundManager])
                ], PlayerCmp);
                return PlayerCmp;
            })();
            exports_1("PlayerCmp", PlayerCmp);
        }
    }
});
//# sourceMappingURL=Player.js.map