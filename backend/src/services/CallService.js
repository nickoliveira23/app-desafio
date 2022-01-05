const connection = require('../database/connection');


class Call {

    constructor(origin, receiver, min) {
        this.origin = origin;
        this.receiver = receiver;
        this.min = min;
    }

    async normalCall() {
        try {
            const value = await connection('dddList')
                .where({
                    origin: this.origin,
                    receiver: this.receiver
                })
                .select('value')
                .first()

            if (value) {
                return value.value * this.min;
            } else {
                return 0;
            }

        } catch (error) {
            console.log(error);
        }
    }

    async planCall(plan) {
        try {
            const value = await connection('dddList')
                .where({
                    origin: this.origin,
                    receiver: this.receiver
                })
                .select('value')
                .first()

            if (value) {
                var response = 0;
                switch (plan) {
                    case "TalkMore30":
                        response = (value.value * 0.1) * (this.min - 30);
                        if (response >= 0) {
                            return response
                        } else {
                            return 0;
                        }
                        break;
                    case "TalkMore60":
                        response = (value.value * 0.1) * (this.min - 60);
                        if (response >= 0) {
                            return response
                        } else {
                            return 0;
                        }
                        break;
                    case "TalkMore120":
                        response = (value.value * 0.1) * (this.min - 120);
                        if (response >= 0) {
                            return response
                        } else {
                            return 0;
                        }
                        break;
                }
            }
        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = { Call };
