const eronix = getAppDataPath(".eronix");
const mods = getAppDataPath(".eronix/mods");

/*-----[Côté : Forge|Mod]-----*/
if (eronix) {
    fs.mkdir(eronix, function (e) {
        /*const file = fs.createWriteStream(getAppDataPath(".eronix/forge.jar"));
        https.get("https://maven.minecraftforge.net/net/minecraftforge/forge/1.12.2-14.23.5.2860/forge-1.12.2-14.23.5.2860-installer.jar", function (response) { response.pipe(file); file.on("created", () => {
            setTimeout(() => {
                file.close();
            }, 3500);
        }); });*/
        setTimeout(() => {
            if (mods) {
                fs.mkdir(mods, function (e) {
                    const eronix = fs.createWriteStream(getAppDataPath(".eronix/mods/Eronix.jar")); https.get('https://cdn.discordapp.com/attachments/825428957716807732/1084223467785818132/Eronix-1.0.0.jar', function (response) { response.pipe(eronix); eronix.on("created", () => { eronix.close(); }); });
                    const optifine = fs.createWriteStream(getAppDataPath(".eronix/mods/Optifine.jar")); https.get('https://cdn.discordapp.com/attachments/1050461615025311744/1050461759879790602/OptiFine_1.12.2_HD_U_G5.jar', function (response) { response.pipe(optifine); optifine.on("created", () => { optifine.close(); }); });
                    const storageDrawers = fs.createWriteStream(getAppDataPath(".eronix/mods/storageDrawers.jar")); https.get('https://cdn.discordapp.com/attachments/1050461615025311744/1050461760144023763/StorageDrawers-1.12.2-5.4.2.jar', function (response) { response.pipe(storageDrawers); storageDrawers.on("created", () => { storageDrawers.close(); }); });
                    const chameleon = fs.createWriteStream(getAppDataPath(".eronix/mods/Chameleon.jar")); https.get('https://cdn.discordapp.com/attachments/1050461615025311744/1050461760433442826/Chameleon-1.12-4.1.3.jar', function (response) { response.pipe(chameleon); chameleon.on("created", () => { chameleon.close(); }); });
                    const customNPC = fs.createWriteStream(getAppDataPath(".eronix/mods/customNPC.jar")); https.get('https://cdn.discordapp.com/attachments/1050461615025311744/1050461759170953236/CustomNPCs_1.12.2-05Jul20.jar', function (response) { response.pipe(customNPC); customNPC.on("created", () => { customNPC.close() }); });
                    const Chisel = fs.createWriteStream(getAppDataPath(".eronix/mods/Chisel.jar")); https.get('https://cdn.discordapp.com/attachments/1077392509845655582/1077585915641331812/Chisel.jar', function (response) { response.pipe(Chisel); Chisel.on("created", () => { Chisel.close() }); });
                    const ironChest = fs.createWriteStream(getAppDataPath(".eronix/mods/ironChest.jar")); https.get('https://cdn.discordapp.com/attachments/1050461615025311744/1050461759523266661/ironchest-1.12.2-7.0.72.847.jar', function (response) { response.pipe(ironChest); ironChest.on("created", () => { ironChest.close() }); });
                    const CTM = fs.createWriteStream(getAppDataPath(".eronix/mods/CTM.jar")); https.get('https://cdn.discordapp.com/attachments/1077392509845655582/1077585915368710214/CTM.jar', function (response) { response.pipe(CTM); CTM.on("created", () => { CTM.close() }); });
                });
            };
        });
    }, 2000);
};
/*-----[Côté : Forge|Mod]-----*/
