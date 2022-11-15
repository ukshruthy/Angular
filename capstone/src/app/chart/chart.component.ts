import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import  { DataService } from '../data.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { BaseChartDirective, Label } from 'ng2-charts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

isloggedIn:boolean;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Romantic', 'Bazz', 'PoP', 'Rythmn', 'Classic', 'Country Music', 'Hip-hop'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  
  public barChartData: ChartDataSets[] = [
    { data: [70, 67, 34, 64, 56, 23, 40], label: '2021' },
    { data: [28, 48, 50, 19, 66, 27, 46], label: '2020' },
    { data: [56, 34, 76, 49, 23, 62, 66], label: '2019' }
  ];
  mysong:any=[];
  isPlaylistListEmpty = true;
  constructor(private _Activatedroute:ActivatedRoute,private router:Router,private DataService:DataService) { 
    
    
    this.mysong = this.DataService.getdata();
    //this.barChartLabels = this.DataService..map(x => x.Song);
    //this.barChartData[0].data = this.DataService.views.map(x => x.views);
  //this.barChartData[0].data = this.DataService.mysong.map(x => this.s.Song);
    

    if (this.mysong === null) {
    
      this.DataService.getdata().subscribe(res => {
        this.mysong = this.DataService.getdata();
        if (this.mysong.length > 0) {
          this.isPlaylistListEmpty = false;
        }
      });
    }
 else {
  if (this.mysong.length > 0){
    this.isPlaylistListEmpty = false;
  }
 }


  }
s:any;
  ngOnInit(): void {
    if(localStorage.getItem('currentUser')){
      this.isloggedIn=true;
      }
      else
      {
        this.isloggedIn=false
      }
//     this.mysong = this.DataService.getdata();
   
 
//     if (this.mysong === null) {
      
//       this.DataService.getdata().subscribe(res => {
//         this.mysong = this.DataService.getdata();
//         if (this.mysong.length > 0) {
//           this.isPlaylistListEmpty = false;
//         }
//       });
//     }
//  else {
//   if (this.mysong.length > 0){
//     this.isPlaylistListEmpty = false;
//   }
//  }

  }
  
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  
  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
  }
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  public hideOne(): void {
    const isHidden = this.chart.isDatasetHidden(0);
    this.chart.hideDataset(0, !isHidden);
  }
  public hideOne1(): void {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }
  public hideOne2(): void {
    const isHidden = this.chart.isDatasetHidden(2);
    this.chart.hideDataset(2, !isHidden);
  }
  
}
