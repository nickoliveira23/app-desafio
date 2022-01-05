const { Call } = require('../services/CallService')

module.exports = {
    async phoneCall(req, res) {
        try {
            const { origin, receiver, min, plan } = req.body;

            let call = new Call(origin, receiver, min);

            if (plan == "default" || plan == "") {

                const response = await call.normalCall();


                return res.json(response);
            }
            else {
                const response = await call.planCall(plan);


                return res.json(response);
            }
        } catch (error) {
            return res.json('Something went wrong')
        }
    },
}