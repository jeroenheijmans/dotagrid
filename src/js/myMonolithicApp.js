var dotaGrid = (function (dg) {

    dg.Hero = function(row, col, hero) {
        var self = this;
        self.key = hero.key;
        self.name = hero.name;
        self.row = ko.observable(row);
        self.col = ko.observable(col);
        self.imageSrc = "http://cdn.dota2.com/apps/dota2/images/heroes/" + self.key + "_vert.jpg";
    };    

    dg.Cell = function(hero) {
        var self = this;
        self.hero = ko.observable(hero);
    };

    dg.Row = function(cols) {
        var self = this;
        self.cols = ko.observableArray(cols);
    };

    dg.Grid = function(){
        var self = this;
        self.rowCount = ko.observable(7);
        self.colCount = ko.observable(25);
        
        self.cellWidth = ko.observable(10);        
        self.cellWidthPx = ko.computed(function() { return self.cellWidth() + "px"; });
        self.cellHeight = ko.observable(12);
        self.cellHeightPx = ko.computed(function() { return self.cellHeight() + "px"; });
        
        self.rows = ko.observableArray([]);
        
        self.resizeGrid = function(){
            self.rows.removeAll();
            self.cellWidth(960 / self.colCount());
            self.cellHeight(self.cellWidth() * 272 / 235);
                    
            var i = 0;
            
            for (var r = 0; r < self.rowCount(); r++) {
                var cols = [];
                for (var c = 0; c < self.colCount(); c++) {
                    var hero = !!tempHeroes[i] ? new dg.Hero(r, c, tempHeroes[i]) : null;
                    i++;
                    cols.push(new dg.Cell(hero));
                }
                var row = new dg.Row(cols);
                self.rows.push(row);
            }            
        }
        
        self.resizeGrid();
        
    };
    
    return dg;
}(dotaGrid || {}));

$(document).ready(function() {
    var vm = new dotaGrid.Grid();
    ko.applyBindings(vm);
});