import express from "express";
import { NotificationService } from "./service";

const app = express();
app.use(express.json());
const svc = new NotificationService();

app.post("/api/v1/notifications/send", async (req, res) => { await svc.send(req.body); res.json({ status: "sent" }); });
app.get("/health", (_, res) => res.json({ status: "healthy" }));
app.listen(3001, () => console.log("Notification service on :3001"));
