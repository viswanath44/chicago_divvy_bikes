// Manually selected a distinct color combination for the 11 types of categories
let colors = [
  "#a6cee3",
  "#1f78b4",
  "#33a02c",
  "#fb9a99",
  "#e31a1c",
  "#6a3d9a",
  "#f032e6",
  "#fdbf6f",
  "#f0027f",
  "#000000",
];

d3.select("#legend")
  .style("width", "fit-content")
  .append("div")
  .style("height", "4")
  .attr("id", "Yearly")
  .append("div")
  .text(`Year`)
  .style("text-align", "center")
  .style("font-weight", "700")
  .style("font-size", "22px");

var legend = d3
  .select("#legend")
  .append("svg")
  .attr("height", "400")
  .attr("width", "150")
  .style("text-align", "left");

colors.map((col, index) => {
  legend
    .append("circle")
    .attr("r", 9.5)
    .attr("cx", 40)
    .attr("cy", 20 + 30.5 * index)
    .style("fill", col);
  legend
    .append("text")
    .attr("x", 70)
    .attr("y", 25 + 31 * index)
    .text(
      [
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
      ][index]
    )
    .style("font-size", "20px")
    .style("font-weight", "500")
    .attr("alignment-baseline", "bottom");
});
