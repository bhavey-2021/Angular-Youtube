import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {proimg:'https://m.media-amazon.com/images/I/61OvV27-44L._AC_SL1500_.jpg', name:'Laptop',id:'pro01',price:15000},
    {proimg:'https://www.tcl.com/usca/content/dam/tcl/products/mobile/10L-720x480.png', name:'Mobile',id:'pro02',price:50000},
    {proimg:'https://images.philips.com/is/image/PhilipsConsumer/58PUT6604_94-IMS-en_IN?$jpglarge$&wid=960', name:'TV',id:'pro03',price:1000},
    {proimg:'https://upload.wikimedia.org/wikipedia/commons/0/08/LGwashingmachine.jpg', name:'Washing machine',id:'pro04',price:1500},
  ]
}
