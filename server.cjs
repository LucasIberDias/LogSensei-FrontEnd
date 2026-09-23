const express = require("express");
const path = require("path");
const { execSync } = require("child_process");

const app = express();

const PORT = process.env.PORT || 8080;

console.log("Gerando build do frontend...");

execSync("npm run build", {
    stdio: "inherit"
});

console.log("Build concluído.");

app.use(express.static(path.join(__dirname, "dist")));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Frontend rodando na porta ${PORT}`);
});