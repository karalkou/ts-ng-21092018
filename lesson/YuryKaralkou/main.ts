import { interval, of } from 'rxjs';
import { mergeMap, take, tap } from 'rxjs/operators';
import { Observable, Subscriber, from } from 'rxjs/index';

const sequence$: Observable<number> = from([1, 2, 3, 4, 5]);

// class DoubleSubscriber extends Subscriber<number> {
//     public _next(value: number) {
//         this.destination.next && this.destination.next(value * 2);
//     }
// }
//
// const double = (source: Observable<number>) => {
//     return source.lift({
//         call(subscribe: Subscriber<number>) {
//             source.subscribe(new DoubleSubscriber(subscribe));
//         }
//     });
// };
//
// sequence$.pipe(double)
//     .subscribe((value: number) => {
//         console.log(value);
//     });


class MultiplySubscriber extends Subscriber<number> {

    private readonly num: number;

    public constructor(subscribe: Subscriber<number>, num: number) {
        super(subscribe);
        this.num = num;
    }

    public _next(value: number) {
        this.destination.next && this.destination.next(value * this.num);
    }
}

const multi = (num: number) => (source: Observable<number>) => {
    return source.lift({
        call(subscribe: Subscriber<number>) {
            source.subscribe(new MultiplySubscriber(subscribe, num));
        }
    });
};

sequence$.pipe(multi(3))
    .subscribe((value: number) => {
        console.log(value);
    });
// customMap((x)=>x*4)