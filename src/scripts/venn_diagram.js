import {VennDiagram} from 'venn.js'
import {selectAll, select} from 'd3'

const sets = [ {sets: ['Ad Supported'], size: 37757}, 
             {sets: ['In App Purchase'], size: 6420},
             {sets: ['Editors Choice'], size: 24},
             {sets: ['Ad Supported', 'Editors Choice'], size: 15},
             {sets: ['In App Purchase', 'Editors Choice'], size: 19},
             {sets: ['Ad Supported','In App Purchase'], size: 4647},
             {sets: ['Ad Supported', 'In App Purchase', 'Editors Choice'], size: 13},];

  var colours = ['darkgreen', 'green', 'black'];

  var chart = VennDiagram()
  .width(600)
  .height(600)

  select("#venn").datum(sets).call(chart)
  selectAll("#venn .venn-circle path")
  .style("fill-opacity", 0.5)
  .style("fill", function(d,i) { return colours[i]; });