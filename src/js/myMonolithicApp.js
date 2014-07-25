var dotaGrid = (function (dg) {

    dg.Hero = function(row, col, hero) {
        var self = this;
        self.key = hero.key;
        self.name = hero.name;
        self.row = ko.observable(row);
        self.col = ko.observable(col);
        self.imageSrc = "http://cdn.dota2.com/apps/dota2/images/heroes/" + self.key + "_vert.jpg";
        self.tooltip = hero.name + " (" + hero.atk + ", " + hero.roles.join(", ") + ")";
    };    

    dg.Cell = function(hero) {
        var self = this;
        self.hero = ko.observable(hero);
    };

    dg.Row = function() {
        var self = this;
        self.cells = ko.observableArray([]);
    };

    dg.Grid = function(){
        var self = this;
        self.rowCount = ko.observable(7);
        self.colCount = ko.observable(25);
        
        self.cellWidth = ko.observable(10);        
        self.cellWidthPx = ko.computed(function() { return self.cellWidth() + "px"; });
        self.cellHeight = ko.observable(12);
        self.cellHeightPx = ko.computed(function() { return self.cellHeight() + "px"; });
                
        self.activeCell = ko.observable(null);
        self.rows = ko.observableArray([]);
        
        self.heroList = ko.observableArray([]);
                
        self.resizeGrid = function(){
            self.rows.removeAll();
            self.cellWidth(960 / self.colCount());
            self.cellHeight(self.cellWidth() * 272 / 235);
                    
            var i = 0;
            
            for (var r = 0; r < self.rowCount(); r++) {
                var row = new dg.Row();
                
                for (var c = 0; c < self.colCount(); c++) {
                    var hero = null;
                    
                    if (!!tempHeroes[i]) {
                        hero = new dg.Hero(r, c, tempHeroes[i]);
                        self.heroList.push(hero);
                        i++;
                    }
                    
                    row.cells.push(new dg.Cell(hero));
                }
                
                self.rows.push(row);
            }            
        }
        
        self.resizeGrid();        
        
        self.activateCell = function (cell) {        
            if (self.activeCell() === null) {
                self.activeCell(cell);
            } 
            else if (self.activeCell() === cell) {
                self.activeCell(null);
            } 
            else {
                sourceHero = self.activeCell().hero();
                targetHero = cell.hero();
                self.activeCell().hero(targetHero);
                cell.hero(sourceHero);
                self.activeCell(null);
            }
        };
    };
    
    return dg;
}(dotaGrid || {}));

$(document).ready(function() {
    var vm = new dotaGrid.Grid();
    ko.applyBindings(vm);
});