System.register(['angular2/core', './SearchBox.ts', './SearchResult.ts'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, SearchBox_ts_1, SearchResult_ts_1;
    var SearchTabCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SearchBox_ts_1_1) {
                SearchBox_ts_1 = SearchBox_ts_1_1;
            },
            function (SearchResult_ts_1_1) {
                SearchResult_ts_1 = SearchResult_ts_1_1;
            }],
        execute: function() {
            SearchTabCmp = (function () {
                function SearchTabCmp() {
                    this._searchResult = [];
                }
                SearchTabCmp.prototype.onReceiveSearchResult = function (data) {
                    this._searchResult = data;
                };
                SearchTabCmp = __decorate([
                    core_1.Component({
                        selector: 'search-tab',
                        template: "\n\t<div class=\"search-tab\">\n\t\t<search-box (searchResult)=\"onReceiveSearchResult($event)\"></search-box>\n\t\t<search-result [result]=\"_searchResult\"></search-result>\n\t",
                        styles: ["\n\t\t.search-tab {\n\t\t\tmax-height: 400px;\n\t\t\toverflow-y: scroll;\n\t\t\toverflow-x: hidden;\n\t\t\tmin-height: 400px;\n\t\t}\n\t"],
                        directives: [SearchBox_ts_1.SearchBoxCmp, SearchResult_ts_1.SearchResultCmp]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchTabCmp);
                return SearchTabCmp;
            })();
            exports_1("SearchTabCmp", SearchTabCmp);
        }
    }
});
//# sourceMappingURL=SearchTab.js.map