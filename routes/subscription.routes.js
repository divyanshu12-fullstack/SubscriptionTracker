import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({ title: "Get all subscription" });
});
subscriptionRouter.get('/:id', (req, res) => res.send({ title: "Get subscription details" }));
subscriptionRouter.post('/', (req, res) => res.send({ title: "Create subscription" }));
subscriptionRouter.put('/:id', (req, res) => res.send({ title: "Update Subscription" }));
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: "Delete subscription" }));
subscriptionRouter.get('/:id', (req, res) => res.send({ title: "Get subscription details" }));
subscriptionRouter.get('/:id', (req, res) => res.send({ title: "Get subscription details" }));
subscriptionRouter.put('/upcoming-renewals', (req, res) => res.send({ title: "Get subscription details" }));



export default subscriptionRouter;