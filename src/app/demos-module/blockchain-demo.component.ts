import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BlockchainService } from './services/blockchain.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'blockchain-demo',
    styleUrls: ['blockchain-demo.component.css'],
    templateUrl: 'blockchain-demo.component.html'
})
export class BlockchainDemoComponent implements OnInit {

    _address: string = '1MEXc2kArQxrXzJSkWBK5T9CpGLP4UiS8R';
    _receivedBitcoins: number = 0;
    _usdExchangeRate = 0;

    constructor(public _blockchainService: BlockchainService) { }

    ngOnInit(): void {
        let self = this;
        //Get current USD exchange rate
        self._blockchainService.getUsdExchangeRate().subscribe((value: number) => {
            self._usdExchangeRate = value;
        });
        let btcs = new WebSocket('wss://ws.blockchain.info/inv');
        btcs.onopen = () => {
            btcs.send(JSON.stringify({'op':'addr_sub', 'addr':self._address}));
        };
        btcs.onmessage = (onmsg) => {
            let response = JSON.parse(onmsg.data);
            let getOuts = response.x.out;
            let countOuts = getOuts.length;
            for(let i = 0; i < countOuts; i++) {
            //check every output to see if it matches specified address
            let outAdd = response.x.out[i].addr;
            let specAdd = self._address;
                if(outAdd == specAdd) {
                    let amount = response.x.out[i].value;
                    self._receivedBitcoins = amount / 100000000;  // Converts from satoshi to Bitcoins (BTC)
                };
            };
        }
    }

}
