var dotaGrid = (function (dg) {

    dg.Hero = function() {
        var self = this;
        self.id = ko.observable(128);
        self.name = ko.observable("Sniper");
    };
    

    dg.Col = function() {
        var self = this;
        self.hero = ko.observable(new dg.Hero());
    };

    dg.Row = function(cols) {
        var self = this;
        self.cols = ko.observableArray(cols);
    };

    dg.Grid = function(){
        var self = this;
        self.rowCount = ko.observable(7);
        self.colCount = ko.observable(25);
        
        self.cellWidth = ko.computed(function() { return 800 / self.colCount(); });        
        self.cellWidthPx = ko.computed(function() { return self.cellWidth() + "px"; });
        self.cellHeight = ko.computed(function() { return self.cellWidth() * 1.15; });
        self.cellHeightPx = ko.computed(function() { return self.cellHeight() + "px"; });
        
        self.rows = ko.observableArray([]);
        
        for (var r = 0; r < self.rowCount(); r++) {
            var cols = [];
            for (var c = 0; c < self.colCount(); c++) {
                cols.push(new dg.Col());
            }
            var row = new dg.Row(cols);
            self.rows.push(row);
        }
    };
    
    return dg;
}(dotaGrid || {}));

$(document).ready(function() {
    var vm = new dotaGrid.Grid();
    ko.applyBindings(vm);
});