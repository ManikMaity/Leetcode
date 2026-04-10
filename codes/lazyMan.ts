type CallbackLog = (str: string) => void;
type QueueCb = () => void;

function LazyMan(name: string, cbLog: CallbackLog) {
	class LazyManClass {
		name: string;
		queue: QueueCb[];
		constructor(name: string) {
			this.name = name;
			this.queue = [
				() => {
					cbLog(`Hi, I'm ${this.name}`);
					this.next();
				},
			];

			setTimeout(() => this.next(), 0)
		}

		next() {
			const cb = this.queue.shift();
			cb?.();
		}

		eat(str: string) {
			this.queue.push(() => {
				cbLog(`Eat ${str}`);
				this.next();
			});
			return this;
		}

		sleep(sec: number) {
			this.queue.unshift(() => {
				setTimeout(() => {
					cbLog(`Wake up after ${sec} seconds.`);
					this.next();
				}, sec * 1000);
			});
			return this
		}
	}

	return new LazyManClass(name);
}



LazyMan("Manik", (s) => {console.log(s)}).eat("Pie").sleep(2).eat("Banana") 
