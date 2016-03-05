System.register(['angular2/core', '../../services/SearchFactory.ts', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, SearchFactory_ts_1, common_1;
    var SearchBoxCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SearchFactory_ts_1_1) {
                SearchFactory_ts_1 = SearchFactory_ts_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SearchBoxCmp = (function () {
                function SearchBoxCmp(searchFactory) {
                    var _this = this;
                    this.searchResult = new core_1.EventEmitter();
                    this.keyword = new common_1.Control();
                    this.searchFactory = searchFactory;
                    this.searchClient = this.searchFactory.getSearchClient(1);
                    this.keyword
                        .valueChanges
                        .debounceTime(200)
                        .distinctUntilChanged()
                        .flatMap(function (keywordStr) { return _this.searchClient.search(keywordStr.toString()); })
                        .subscribe(function (data) {
                        _this.searchResult.emit(data);
                    });
                }
                SearchBoxCmp.prototype.ngOnInit = function () {
                };
                SearchBoxCmp.prototype.search = function (keyword) {
                    var _this = this;
                    this.searchClient
                        .search(keyword)
                        .subscribe(function (data) {
                        _this.searchResult.emit(data);
                    });
                };
                // AngularJS 2 uses "$event" as the token for the emitted value in the event-binding's dependency-injection context.
                SearchBoxCmp.prototype.onInputKeyword = function ($event) {
                    // 13 is return key
                    if ($event.keyCode == 13) {
                        return this.search($event.target.value);
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SearchBoxCmp.prototype, "searchResult", void 0);
                SearchBoxCmp = __decorate([
                    core_1.Component({
                        selector: 'search-box',
                        template: "\n\t<div class=\"row\" id=\"searchbox\" >\n\t\t<div class=\"col-xs-12\">\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-group\" >\n\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\tng-model='query'\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\tid=\"form-field-search\"\n\t\t\t\t\t\t\t\t\t[ngFormControl]=\"keyword\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t<span class=\"icon-search\"></span>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t",
                        styles: ["\n\t#searchbox {\n\t\tpadding: 10px 10px 0 6px;\n\t}\n\n\tspan.icon-search{\n\t\tbackground-image: url(/images/icon-search.png);\n\t\tbackground-size: 17px;\n\t\tposition: absolute;\n\t\twidth: 17px;\n\t\theight: 16px;\n\t\ttop: 8px;\n\t\tleft: 21px;\n\t}\n\n\tbutton.search,\n\tinput#form-field-search{\n\t\tborder-radius: 5px;\n\t\tborder: 1px solid #ccc;\n\t\tcolor: #363636;\n\t\tbox-shadow: none;\n\t\tpadding: 6px 30px;\n\t\theight: 32px;\n\t}\n\n\tbutton.search{\n\t\tbackground: #ffc803;\n\t}\n\t"],
                        providers: [
                            SearchFactory_ts_1.SearchFactory
                        ],
                        directives: [common_1.NgFormControl]
                    }), 
                    __metadata('design:paramtypes', [SearchFactory_ts_1.SearchFactory])
                ], SearchBoxCmp);
                return SearchBoxCmp;
            })();
            exports_1("SearchBoxCmp", SearchBoxCmp);
        }
    }
});
//# sourceMappingURL=SearchBox.js.map