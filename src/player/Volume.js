System.register(['angular2/core', 'angular2/common', '../services/SoundManager.ts', '../interfaces/Events.ts'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, SoundManager_ts_1, Events_ts_1;
    var VolumeCmp;
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
            }],
        execute: function() {
            VolumeCmp = (function () {
                function VolumeCmp(soundManager) {
                    var _this = this;
                    this.soundManager = soundManager;
                    this.isMute = false;
                    this.soundManager.on(Events_ts_1.Events.Volume, function (isMute) {
                        _this.isMute = isMute;
                    });
                }
                VolumeCmp.prototype.toggleMute = function () {
                    this.soundManager.toggleMute();
                };
                VolumeCmp = __decorate([
                    core_1.Component({
                        selector: 'volume',
                        template: "\n\t\t<a id=\"btnToggleVolume\" href='#' (click)='toggleMute()'>\n\t\t\t<img src='/images/sound.png' [class.hide]='isMute'/>\n\t\t\t<img src='/images/mute.png' [class.hide]='!isMute'/>\n\t\t</a>\n\t",
                        styles: ["\n\n\t\t#btnToggleVolume {\n\t\t\t\twidth:20px;\n\t\t}\n\t\t#btnToggleVolume img{\n\t\t\t\twidth:20px;\n\t\t\t\tpadding-top:15px;\n\t\t}\n\n\t\t#btnToggleVolume i{\n\t\t\t\tmargin-top:13px;\n\t\t\t\tcolor:#c7b4ab;\n\t\t}\n\t"],
                        directives: [common_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [SoundManager_ts_1.SoundManager])
                ], VolumeCmp);
                return VolumeCmp;
            })();
            exports_1("VolumeCmp", VolumeCmp);
        }
    }
});
//# sourceMappingURL=Volume.js.map