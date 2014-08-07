// Code under MIT License: http://opensource.org/licenses/mit-license.php

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
                
            return min + (self.col() / (colCount-1) * range);
        }
        
        self.getY = function(rowCount) {
            var min = 36.099998,
                max = 305.700012,
                range = max - min;
            
            return min + (self.row() / (rowCount-1) * range);
        }
        
        self.dto = ko.computed(function() {
            var retval = {
                id: self.id,
                row: self.row(),
                col: self.col()
            };
            
            return retval;
        });
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

    dg.Grid = function(model, availableHeroes){
        var self = this;
        self.rowCount = ko.observable(model.rowCount || 6);
        self.colCount = ko.observable(model.colCount || 21);
        
        self.cellWidth = ko.observable(10);        
        self.cellWidthPx = ko.computed(function() { return self.cellWidth() + "px"; });
        self.cellHeight = ko.observable(12);
        self.cellHeightPx = ko.computed(function() { return self.cellHeight() + "px"; });
                
        self.activeCell = ko.observable(null);
        self.rows = ko.observableArray([]);
        
        self.freeTextFilter = ko.observable("");
        self.heroList = ko.observableArray([]);
        
        self.isDimmed = function(cell) {
            if (!self.freeTextFilter()) {
                return false;
            }
        
            if (!cell.hero()) {
                return false;
            }
            
            return cell.hero().name.toLowerCase().indexOf(self.freeTextFilter().toLowerCase()) === -1;
        };
        
        var internalGrid = {};
        
        self.resetGrid = function() {
            self.rows.removeAll();
            internalGrid = {}
            self.cellWidth(960 / self.colCount());
            self.cellHeight(self.cellWidth() * 272 / 235);
            
            for (var r = 0; r < self.rowCount(); r++) {
                var row = new dg.Row();
                
                for (var c = 0; c < self.colCount(); c++) {
                    var cell = new dg.Cell(r, c, null);
                    row.cells.push(cell);
                    var key = r + ";" + c;
                    internalGrid[key] = cell;
                }
                
                self.rows.push(row);
            }
            
            loadHeroes(model.heroes);
        }
        
        function clearHeroesFromGrid() {
            var rows = self.rows();
            for (var r = 0; r < rows.length; r++) {
                var cells = rows[r].cells();                
                for (var c = 0; c < cells.length; c++) {
                    cells[c].hero(null);
                }
            }
            return null;
        }
        
        function findEmptyCell() {
            var rows = self.rows();
            for (var r = 0; r < rows.length; r++) {
                var cells = rows[r].cells();                
                for (var c = 0; c < cells.length; c++) {
                    if (!cells[c].hero()) {
                        return cells[c];
                    }
                }
            }
            return null;
        }
        
        var loadHeroes = function(existingHeroes) {
            self.heroList.removeAll();
            
            clearHeroesFromGrid();
            
            for (var i = 0; i < availableHeroes.length; i++) {
                var matchedExistingHeroes = $.grep(existingHeroes, function(item) { return item.id === availableHeroes[i].id; });
                var cell = null, r, c;
                
                if (matchedExistingHeroes.length === 1) {
                    r = matchedExistingHeroes[0].row;
                    c = matchedExistingHeroes[0].col;
                    cell = internalGrid[r + ";" + c];
                } else {
                    cell = findEmptyCell();
                    r = cell.row;
                    c = cell.col;
                }
                            
                var hero = new dg.Hero(r, c, availableHeroes[i]);
                self.heroList.push(hero);
                cell.hero(hero);
            }
        };
        
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
        
        self.scale = ko.computed(function() {
            var normalDotaScale = 0.390228, normalDotaCols = 21, normalDotaRows = 6;
            var xRatio = normalDotaCols / self.colCount();
            var yRatio = normalDotaRows / self.rowCount();
            
            var ratio = xRatio < yRatio ? xRatio : yRatio;
            
            return normalDotaScale * ratio;
        });
        
        self.gridfile = ko.computed(function() {
            var rowCount = self.rowCount(), colCount = self.colCount();
            var scale = self.scale();
            var file = '"fulldeck_layout.txt"\n{\n';
            
            var heroes = self.heroList();
            for (var i = 0; i < heroes.length; i++) {
                file += '\t"' + i + '"\n';
                file += '\t{\n';
                file += '\t\t"HeroID"\t\t"' + heroes[i].id + '"\n';
                file += '\t\t"x"\t\t"' + heroes[i].getX(colCount) + '"\n';
                file += '\t\t"y"\t\t"' + heroes[i].getY(rowCount) + '"\n';
                file += '\t\t"scale"\t\t"' + scale + '"\n';
                file += '\t\t"zpos"\t\t"0"\n';            
                file += '\t}\n';
            }
            
            file = file + "}";            
            return file;
        }).extend({throttle: 200});
        
        self.fileToSave = ko.computed(function() {
            var data = {
                rowCount: self.rowCount(),
                colCount: self.colCount(),
                heroes: []
            };
            
            var heroes = self.heroList();
            
            for (var i = 0; i < heroes.length; i++) {
                data.heroes.push(heroes[i].dto());
            }
            
            var result = JSON.stringify(data);
            return result;
        });
        
        self.saveDgFile = function() {
            window.prompt("Press CTRL+C to copy the file contents to the clipboard:", self.fileToSave());
        };
        
        self.fileToLoad = ko.observable();
                
        function LoadTemplate(template) {
            self.rowCount(template.rowCount);
            self.colCount(template.colCount);            
            self.resetGrid();
            loadHeroes(template.heroes);
        }
        
        self.loadDgFile = function() {
            var file = self.fileToLoad();
            if (!file) { return; }
            var data = JSON.parse(file);
            LoadTemplate(data);
        };
        
        self.exportDgFileToClipboard = function() {
            window.prompt("Copy to clipboard: Ctrl+C, Enter", dgFile());
        }
        
        self.importDgFile = function() {
            var data = window.prompt("Paste a saved DotaGrid config:");
            if (!!data) {
                loadDgfile(data);
            }
        }
        
        self.loadAlphabetically = function() { LoadTemplate({rowCount: 7, colCount: 23, heroes: model.heroes}); };
        self.loadDefault = function() { LoadTemplate(globalTemplates.Default); };
        self.loadColorBased = function() { LoadTemplate(globalTemplates.ColorBased); };
        self.loadRoleAndAttack = function() { LoadTemplate(globalTemplates.RolesAndAttackType); };
        self.loadMostPlayed = function() { LoadTemplate(globalTemplates.MostPlayed681b); };
        
        LoadTemplate(globalTemplates.Default);
    };
    
    return dg;
}(dotaGrid || {}));

$(document).ready(function() {
    var vm = new dotaGrid.Grid(defaultModel, globalAvailableHeroes);
    ko.applyBindings(vm);
});