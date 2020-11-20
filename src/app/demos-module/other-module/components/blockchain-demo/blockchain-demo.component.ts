import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../../services/blockchain.service';

@Component({
    selector: 'app-blockchain-demo',
    styleUrls: ['./blockchain-demo.component.css'],
    templateUrl: './blockchain-demo.component.html'
})
export class BlockchainDemoComponent implements OnInit {

    address = '1MEXc2kArQxrXzJSkWBK5T9CpGLP4UiS8R';
    receivedBitcoins = 0;
    usdExchangeRate = 0;

    constructor(public blockchainService: BlockchainService) { }

    ngOnInit(): void {
        const self = this;
        // Get current USD exchange rate
        self.blockchainService.getUsdExchangeRate().subscribe((value: number) => {
            self.usdExchangeRate = value;
        });
        const btcs = new WebSocket('wss://ws.blockchain.info/inv');
        btcs.onopen = () => {
            btcs.send(JSON.stringify({op: 'addr_sub', addr: self.address}));
        };
        btcs.onmessage = (onmsg) => {
            const response = JSON.parse(onmsg.data);
            const getOuts = response.x.out;
            const countOuts = getOuts.length;
            for (let i = 0; i < countOuts; i++) {
                // check every output to see if it matches specified address
                const outAdd = response.x.out[i].addr;
                const specAdd = self.address;
                if (outAdd === specAdd) {
                    const amount = response.x.out[i].value;
                    self.receivedBitcoins = amount / 100000000;  // Converts from satoshi to Bitcoins (BTC)
                }
            }
        };
    }

}
