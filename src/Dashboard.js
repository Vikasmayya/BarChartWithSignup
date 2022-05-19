import React, { Component }  from 'react';
import * as d3 from "d3";

class Dashboard extends Component {
  componentDidMount() {
    this.drawChart();
  }
  
  drawChart() {
    const sample = [
      {
        language: 'Rust',
        value: Math.floor(Math.random() * 100) + 1 ,
        color: '#000000'
      },
      {
        language: 'Kotlin',
        value: Math.floor(Math.random() * 100) + 1,
        color: '#00a2ee'
      },
      {
        language: 'Python',
        value: Math.floor(Math.random() * 100) + 1,
        color: '#fbcb39'
      },
      {
        language: 'TypeScript',
        value: Math.floor(Math.random() * 100) + 1,
        color: '#007bc8'
      },
      {
        language: 'Go',
        value: Math.floor(Math.random() * 100) + 1,
        color: '#65cedb'
      },
      {
        language: 'Swift',
        value: Math.floor(Math.random() * 100) + 1,
        color: '#ff6e52'
      },
      {
        language: 'JavaScript',
        value: Math.floor(Math.random() * 100) + 1,
        color: '#f9de3f'
      },
      {
        language: 'C#',
        value: Math.floor(Math.random() * 100) + 1,
        color: '#5d2f8e'
      },
      {
        language: 'F#',
        value: Math.floor(Math.random() * 100) + 1,
        color: '#008fc9'
      },
      {
        language: 'Clojure',
        value: Math.floor(Math.random() * 100) + 1,
        color: '#507dca'
      }
    ];

    const svg = d3.select('svg');
    const svgContainer = d3.select('#container');
    
    const margin = 80;
    const width = 700 - 2 * margin;
    const height = 500 - 2 * margin;

    const chart = svg.append('g')
      .attr('transform', `translate(${margin}, ${margin})`);

    const xScale = d3.scaleBand()
      .range([0, width])
      .domain(sample.map((s) => s.language))
      .padding(0.3)
    
    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 100]);

    // vertical grid lines
    const makeXLines = () => d3.axisBottom()
      .scale(xScale)

    const makeYLines = () => d3.axisLeft()
      .scale(yScale)

    chart.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    chart.append('g')
      .call(d3.axisLeft(yScale));

    // vertical grid lines
    chart.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0, ${height})`)
      .call(makeXLines()
        .tickSize(-height, 0, 0)
        .tickFormat('')
      )

    chart.append('g')
      .attr('class', 'grid')
      .call(makeYLines()
        .tickSize(-width, 0, 0)
        .tickFormat('')
      )

    const barGroups = chart.selectAll()
      .data(sample)
      .enter()
      .append('g')

    barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.language))
      .attr('y', (g) => yScale(g.value))
      .attr('height', (g) => height - yScale(g.value))
      .attr('width', xScale.bandwidth())

    barGroups 
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.value) + 30)
      .attr('text-anchor', 'middle')
      .text((a) => `${a.value}%`)
    
    svg
      .append('text')
      .attr('class', 'label')
      .attr('x', -(height / 2) - margin)
      .attr('y', margin / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Love meter (%)')

    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Languages')

    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Most loved programming languages all over the world')

    svg.append('text')
      .attr('class', 'source')
      .attr('x', width - margin / 2)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'start')
      .text('Note: These are all the randomly created data')
  
    
    
    
  }
        
  render(){
    return <div id='layout'>
    {/*  <h2>Bar chart </h2> */}
    <div id='container'>
      <svg viewBox='0 0 750 500'/>
    </div>
  </div>
  }
}    

export default Dashboard;