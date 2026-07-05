import app from "./app";
import { config } from "./config";

function main() {
    app.listen(config.port, () => {
        console.log(`RentNest app listening on port ${config.port}`)
    });
}

main();