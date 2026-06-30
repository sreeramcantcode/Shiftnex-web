import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const MAILERLITE_API = "https://connect.mailerlite.com/api";

app.post("/api/subscribe", async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Server misconfigured" });
    }

    const payload = { email };
    if (name) payload.fields = { name };
    if (process.env.MAILERLITE_GROUP_ID) {
      payload.groups = [process.env.MAILERLITE_GROUP_ID];
    }

    const response = await fetch(`${MAILERLITE_API}/subscribers`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || "Failed to subscribe" });
    }

    res.json({ success: true, subscriber: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Newsletter API running on port ${PORT}`);
});
