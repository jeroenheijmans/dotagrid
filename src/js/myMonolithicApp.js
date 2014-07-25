var dotaGrid = (function (dg) {

    dg.Hero = function(row, col, hero) {
        var self = this;
        self.id = hero.id;
        self.key = hero.key;
        self.name = hero.name;
        self.row = ko.observable(row);
        self.col = ko.observable(col);
        self.imageSrc = "http://cdn.dota2.com/apps/dota2/images/heroes/" + self.key + "_vert.jpg";
        self.tooltip = hero.name + " (" + hero.atk + ", " + hero.roles.join(", ") + ")";
        
        self.getX = function(colCount) {
            var min = -27.200001,
                max = 1037.550049,
                range = max - min;
            if (self.id == 102) { console.log(colCount ); }
            return min + (self.col() / (colCount-1) * range);
        }
        
        self.getY = function(rowCount) {
            var min = 36.099998,
                max = 305.700012,
                range = max - min;
            
            return min + (self.row() / (rowCount-1) * range);
        }
    };    

    dg.Cell = function(row, col, hero) {
        var self = this;
        self.row = row;
        self.col = col;
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
                    
                    row.cells.push(new dg.Cell(r, c, hero));
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
                var sourceCell = self.activeCell();
                var targetCell = cell;
            
                sourceHero = sourceCell.hero();                
                targetHero = cell.hero();
                
                if (!!sourceHero) {
                    sourceHero.row(targetCell.row);
                    sourceHero.col(targetCell.col);
                }
                
                if (!!targetHero) {
                    targetHero.row(sourceCell.row);
                    targetHero.col(sourceCell.col);
                }
                
                // Switch cells' references to heroes:
                sourceCell.hero(targetHero);
                targetCell.hero(sourceHero);
                
                // Clear active cell:
                self.activeCell(null);
            }
        };
                
        self.gridfile = ko.computed(function() {
            var rowCount = self.rowCount(), colCount = self.colCount();
            var file = '"fulldeck_layout.txt"\n{\n';
            
            var heroes = self.heroList();
            for (var i = 0; i < heroes.length; i++) {
                file += '\t"' + i + '"\n';
                file += '\t{\n';
                file += '\t\t"HeroID"\t\t"' + heroes[i].id + '"\n';
                file += '\t\t"x"\t\t"' + heroes[i].getX(colCount) + '"\n';
                file += '\t\t"y"\t\t"' + heroes[i].getY(rowCount) + '"\n';
                file += '\t\t"scale"\t\t"0.390228"\n';
                file += '\t\t"zpos"\t\t"0"\n';            
                file += '\t}\n';
            }
            
            file = file + "}";            
            return file;
        }).extend({throttle: 200});
    };
    
    return dg;
}(dotaGrid || {}));

$(document).ready(function() {
    var vm = new dotaGrid.Grid();
    ko.applyBindings(vm);
});