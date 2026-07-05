import app from "./app";
import { config } from "./config";
import { prisma } from "./lib/prisma";

async function main() {
    try {
        await prisma.$connect();
        console.log("Database Connected Successfully")
        app.listen(config.port, () => {
            console.log(`RentNest app listening on port ${config.port}`)
        });
    } catch (error) {
        await prisma.$disconnect();
        console.log(error);
        process.exit(1);
    }
}

main();