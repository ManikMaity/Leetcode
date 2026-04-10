type EventFn = (...args: any[]) => void;

type EvenFnObj = {
	id: string;
	cb: EventFn;
};
type EventMap = Map<string, EvenFnObj[]>;

class Emitter {
	private eventMap: EventMap;
	constructor() {
		this.eventMap = new Map();
	}

	#uniqeId(): string {
		const id = crypto.randomUUID();
		return id;
	}

	#releaseEventFn(evName: string, fnId: string) {
		const alreadyHas = this.eventMap.has(evName);
		const eventFns = this.eventMap?.get(evName);
		if (!alreadyHas || !eventFns || eventFns?.length < 1) {
			console.error(`Event not found`);
		}
		if (eventFns) {
			const filteredFns = eventFns?.filter((v) => v.id !== fnId);
			this.eventMap.set(evName, filteredFns);
		}
	}

	subscribe(evName: string, cbFn: EventFn) {
		const alreadyHas = this.eventMap.has(evName);
		const eventFns = this.eventMap?.get(evName);
		const id = this.#uniqeId();

		const eventObj: EvenFnObj = {
			id,
			cb: cbFn,
		};

		if (alreadyHas && eventFns) {
			this.eventMap.set(evName, [...eventFns, eventObj]);
		} else {
			this.eventMap.set(evName, [eventObj]);
		}

		return {
			release: () => {
				this.#releaseEventFn(evName, id);
			},
		};
	}

	emit(evName: string, ...rest: any[]) {
		const alreadyHas = this.eventMap.has(evName);
		const eventFns = this.eventMap?.get(evName);
		if (!alreadyHas || !eventFns || eventFns?.length < 1) return;
		for (let i = 0; i < eventFns.length; i++) {
			const cbObj = eventFns[i];
			cbObj.cb(...rest);
		}
	}
}


const emitter = new Emitter();
function cb1(...args : any[]) {
  console.log('cb1', args);
}

function cb2(...args : any[]) {
  console.log('cb2', args);
}

const sub1 = emitter.subscribe('ev1', cb1);
const sub2 = emitter.subscribe('ev1', cb2);
emitter.emit("ev1", 1, 5, 6)

console.log("After release------")
sub1.release()
emitter.emit("ev1", 1, 5, 6)
