import { ethers } from "ethers";
import { readFileSync } from "fs";
import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("INSERT_YOUR_APP_ADDRESS_HERE")

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "CandyDAO Membership",
            description: "A DAO for candy lovers!",
            image: readFileSync("scripts/assets/candy.png")
        });
    });
})