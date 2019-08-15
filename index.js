const achievementData = [
    ["Diamonds are Forever", "When the four thieves stole precious rocks from the small store they left before the law could get to the scene.", "In the Jewelry store job, steal and secure 4 bags without the escape car leaving the first time.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/e54a9fd99000afe0abfd18b47c33ffba25b4f9f0.jpg"],
    ["A Good Haul", "In the house of capitalism the four thieves stole a large amount of valuables before making their escape.", "In any Branch Bank job, secure loot bags for a value of at least $400.000.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/d8d1fedc8d903bf66096bfd4dbac1e47025d49ea.jpg"],
    ["I Will Pass Through Walls", "Under the cover of night and shadows the thieves stole many bags of valuables and not a single drop of blood was spilled.", "In the Shadow Raid job, secure at least 6 bags of loot and escape without killing anyone.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/c2a3293b506967932f149d7ed28b23ed58322df5.jpg"],
    ["All Eggs in One Basket", "The four thieves placed their loot in the street, then a large bird came and took it all in one single swoop.", "In the GO Bank job, have the plane pick up all bags of cash with the skyhook.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/823ed838f219485321088fe9c4a96c01b266e689.jpg"],
    ["Hostage Situation", "The four thieves guarded the innocent until they made their escape with the valuable bounty from the house of carbon.", "In the Diamond Store job, don't let any civilians escape, die or leave the Diamond store. Until all bags of loot from the diamond store are secured on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/43a09e35a5cf48ce4348793e09497f6424362fa1.jpg"],
    ["But Wait - There’s More!", "From a well guarded transport the Four Thieves found out about a secret shipment containing a valuable weapon.", "On any Armored Transport heist, find the plans for the Train Heist.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/bc30c61200b307a5d4fa482b913ecc78a9047848.jpg"],
    ["We’re Gonna Need a Bigger Boat", "As The four thieves stole the valuable weapon they also took all the munitions they could find.", "On the Train heist, steal and secure 20 bags worth of ammo.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/ce133493f475c676cb32e74fc4d036fddff5796e.jpg"],
    ["Self Checkout", "When the four thieves were asked to destroy a large store their actions were as fast as they were devastating", "In the Mallcrasher job, finish the heist and escape within 3 minutes.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/b1ddb214d6c935a487898e03647f4e3c51faca5b.jpg"],
    ["Platinum Card", "The four thieves strolled down the street cleaning out each stop they passed despite every effort the law couldn’t stop them.", "Complete the Four Stores job on the Death Sentence difficulty with the One Down mechanic activated.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/10fb74b723f437a620ce46391b3fccac61965de4.jpg"],
    ["Yeah, He’s a Gold Digger", "The four thieves strolled down the street cleaning out each stop they passed despite every effort the law couldn’t stop them.", "In the Four Stores job, find a gold bar in a safe.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/085f060c6ccb1dde110df62deea9eaf1a29f6d3c.jpg"],
    ["What’s in the Box?", "Great value rained from the sky and the four thieves opened any packages in their quest for riches", "On the White Xmas job open 40 packages before escaping on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/491a2e46c9c8aec9618249d83c169b647bd894a3.jpg"],
    ["Let’s do th...", "The four thieves stole a valuable head ornament so fast that no one had a chance to react.", "In the Ukrainian job, complete the heist within 35 seconds.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/1d7ec21391e0b89bfd8eba652b4bd1da6dc81e3d.jpg"],
    ["They Don't Pay Us Enough", "The four thieves were asked to steal something very dangerous they took everything of value and left nothing behind.", "In the Meltdown job, secure all additional loot.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/ab4b8ca6587e296d746b15205956c033dcc464ff.jpg"],
    ["Bring It Back Safe", "As the earth shook the four thieves stole ten boxes of great value.", "Complete the Aftershock job on Overkill difficulty.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/45391633b2c91a09fdd6a2f141c7bba9a9162504.jpg"],
    ["Let Them Boogie", "As people were dancing to the music the four thieves crept through the shadows and stole what was locked away.", "Complete the Nightclub job, without setting off the alarm on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/6638ad1d6f5d0fbea9bee49cd6c23e2c9fb1d0e3.jpg"],
    ["The Grinch", "As the snow fell, the fours thieves attacked a large store and took everything of value.", "On the Stealing Xmas job, secure all additional loot on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/4d1229949fb3a462469471fbeada8c1f950c604d.jpg"],
    ["Out Of Bounds", "The four thieves were surrounded on the docks but they kept their enemies away from the loot until it was all sent away", "On day 2 of the Watchdogs job, secure 12 bags without letting any law enforcer enter the warehouse on OVERKILL difficulty.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/2177c2456a4216d358d354d1e12afbf692609b98.jpg"],
    ["Lord of War", "On the day that burned the four thieves absconded with all the elements of death.", "On day 1 of the Firestarter job, steal all the weapons from the hangar.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/b52a5507f57815b1e19fff7bd756c04c88f563e7.jpg"],
    ["Full Measure", "In an old abandoned house the four thieves made as much blue as they could with the resources available.", "On day 1 of the Rats job, cook and secure 7 bags worth of meth without blowing up the lab on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/1999c4afd858cdf56b13e9ccd1720227d94b6d7a.jpg"],
    ["Doctor Fantastic", "The four thieves with all their wit could identify the mechanism they needed to steal with the greatest of ease.", "On day 2 of the Big Oil job, complete the heist with the first engine being correct.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/dc09994541fef85f8155fa4e8763dc830747c80b.jpg"],
    ["I Wasn't Even There!", "Under the cover of darkness the four thieves quietly stole the valuable metal and replaced it with white dust.", "On day 3 of the Framing Frame job, send the gold by zip-line without ever tripping the alarm.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/14ba55c00f6fd0da4ce747ca0df645de8da94c57.jpg"],
    ["I'm A Swinger", "The four thieves influenced the world around them and changed the course of society without anyone ever find out.", "In the Election Day job, complete the heist in stealth and swing the votes to the republican favor.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/3b237f3e2bbc888d511ace0e3e9487e9411706fd.jpg"],
    ["Don't Bring the Heat", "The four thieves robbed the largest bank ever built without alerting the law.", "In the Big Bank job, complete the heist without triggering the alarm.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/3fdce01be620c404986adcbd025c1ec3e1653993.jpg"],
    ["Walk Faster", "A house full thugs and low lifes could not stop the four thieves from reaching their target.", "In day two of the Hotline Miami job, reach the Commissar’s apartment in under 210 seconds on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/32477ea3535953143f51270eb1a29cba33befa20.jpg"],
    ["Watch the Power Switch!", "The four thieves held their ground as their friend worked and because of their efforts he was completely uninterrupted.", "On day 2 of the Hoxton Breakout job, don't let the cops turn off the power while Hoxton is in the server room on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/7cbac8c71e3dddc10cedd131eed62881dbcd7d20.jpg"],
    ["Silent But Deadly", "When the four thieves were betrayed their revenge was precise and quiet no one knew they had been there until it was too late.", "Complete the Hoxton Revenge job without triggering the alarm.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/6aea5c12cca8526096d13d7f3ebb6bde8fe65e2b.jpg"],
    ["Cat Burglar", "The four thieves stole a rare rock of great value and importance without anyone noticing that they were there.", "In the Diamond job, complete the heist without triggering the alarm.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/18d0a44150e64c39565bd1f06d3250f9e0a0739a.jpg"],
    ["High Roller", "The four thieves attacked the house of smiles and fortune they quickly opened the vault and found their goal.", "Complete the Golden Grin Casino heist under 14 minutes.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/58016e39c4fef77ecba96c89b93897508c85b3e0.jpg"],
    ["I've Got the Power", "By the docks the four thieves went about their business without interruptions.", "In the Bomb: Dockyard heist, don't let the enemies cut the power.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/6f851793f9a675eaeaf9ae85037ac8dc53f55fd0.jpg"],
    ["Pump It Up", "In the forest four thieves kept the pipe from their river intact.", "In the Bomb: Forest heist, do not let the cops disconnect the water hose while you are using the river water pump.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/dcfb0d410da7171f1285dc67262554751c986264.jpg"],
    ["Settling a Scar", "The four thieves attacked the mansion with great speed and ferocity.", "Complete the Scarface Mansion job within 15 minutes in loud on the OVERKILL difficulty and above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/98fa5c16f66a82800e90461c5cc958fc68dafb66.jpg"],
    ["Sound of Silence", "As the party was in full swing the four thieves went about their business and none ever knew they were there.", "Complete the Alesso Heist without your crew killing anyone.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/4586e6d0679c4d484536d9de3ae58ababb1e657b.jpg"],
    ["Dr. Evil", "The four thieves once created for themselves a large fortune.", "Print and secure $1,000,000 worth of counterfeit money in the Helicopter on the Counterfeit job.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/4aaf9d8c062919e39239135340c6333c3fd984de.jpg"],
    ["OVERDRILL", "The hidden vault was hard to find and difficult to open but the four thieves worked together and claimed the legendary treasure.", "In the First World Bank job, solve the PAYDAY: The Heist secret on the Death Wish difficulty or above and enter the OVERVAULT.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/1524cdf40961c07df66e857880b8daa4b7bafd4a.jpg"],
    ["Remember, No Russian", "As the liquid turned to vapor the four thieves watched over the dead never letting their power by taken away thereby staving off the darkness.", "In the Boiling Point job, scan all 4 bodies without letting the mercenaries turn off the power or stop the scanner on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/4656a40c76a7485a4774a9ca06abef267bd644f1.jpg"],
    ["Hazzard County", "The four thieves stole goats and hidden treasures once the deed was done they quickly made their escape together.", "Complete the second day of the Goat Simulator heist within 4 minutes from when the escape car is available.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/63274b1a712af82ca4c6b681a2db5800ef6d142e.jpg"],
    ["Santa Slays Slackers", "The four thieves guarded the packer as they prepared the next shipment even as the law came charging in.", "In the Santa’s Workshop job, keep all the elves alive for 30 minutes after the first assault starts on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/8d1a5560fe8b22ffe47dcbbd0ba01a382c41adc0.jpg"],
    ["Gone in 240 Seconds", "When stealing from the saddlers workshop the four thieves did so in a great hurry.", "In the Car Shop job, complete the heist within 4 minutes.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/bfa71a572c0efba950f5a337f02f75e9cdb37600.jpg"],
    ["Full Throttle", "The four thieves attacked a train in motion they quickly made it to the last cars to see what they were after and made it to their escape.", "Complete the second day of The Biker Heist job within 120 seconds on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/2960c70dc914ca4763a0eb2237ea709aaa9db342.jpg"],
    ["Quick Draw", "A room full of riches, a house full of thugs. The four thieves were quick and deadly and before anyone knew it all the thugs were dead.", "In the Panic Room job, kill all gangsters within 60 seconds after masking up on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/16a22e8db3f57639b8547b7e8d3643ba44cd2c8f.jpg"],
    ["A Rendezvous With Destiny", "The four thieves made their way through the abandoned building and quickly found their charge.", "On the Brooklyn 10-10 job, reach Charon within 6 minutes on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/252234b69f526c68268f6925827cfe596e45cf0a.jpg"],
    ["Pacifish", "The four thieves did not spill blood while on the boat.", "Complete the Yacht Heist job without killing anyone.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/854a490575c2b27138085beed4a593314ec0c0d1.jpg"],
    ["Not Even Once", "The four thieves interrupted a deal of great value but even though they were surrounded and cornered no one fell in the onslaught that followed.", "Complete the Undercover job on OVERKILL difficulty or above without anyone in your crew getting downed or cuffed.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/32e52a46550594b3153bc97b71eda3bdac1667a0.jpg"],
    ["Making a Statement", "Surrounded, the four thieves overcame grave danger and escaped the house of massacre.", "Finish the Slaughterhouse job on the OVERKILL difficulty or above without anyone killing a single sniper.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/bf53374d39a299e679957645ba7a066f0084becc.jpg"],
    ["Clean House", "The four thieves snuck into the mountain keep and they stole everything of value kept there.", "In the Beneath the Mountain job, secure all of the loot from the vaults and mountain-top in the escape helicopter.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/3dbb6d7705b9ab434012da54a9a168f9bbf39b35.jpg"],
    ["1... 2... 3... JUMP!", "On the day they came in to the word flying through the heavens the four thieves all fell together.", "In the Birth of Sky job, have the entire crew jump out of the airplane within 1 minute and 23 seconds on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/f54817a939eb9f63cff76909d9c51205c33a9401.jpg"],
    ["It's Nice to be Nice", "The four thieves were surrounded in the street but they fought their way through the onslaught of enemies and not a single innocent was harmed.", "Complete the Heat Street job without killing any civilians on the Hard difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/07c63ad86d44c34b024841aac17d9d3ea1a6e314.jpg"],
    ["Attacked Helicopter", "As the four thieves rescued the incarcerated man. They shot the large bird that tried to stop them from sending them into safety.", "In the Green Bridge job, kill the helicopter turret before the plane picks up the prisoner on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/3a5750dcdecbe31fb07762a0cbc43c9b464f81a4.jpg"],
    ["The Fuel Must Flow", "In a place of ice and snow, the four thieves made their vessel seaworthy without the guards being able to stop them.", "In the Alaskan Deal job don't let the cops cut off the flow of fuel from the tank to the ship on OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/5371d6caedd6b1d8c118cc2c0308aff0a41a7a49.jpg"],
    ["Blood Diamond", "The four thieves overcame incredible difficulties in obtaining the blood stained jewel.", "On the Diamond Heist secure the red diamond on Overkill difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/dd16c89bccebd83c58612d5ba5e1200907227ee6.jpg"],
    ["Waste Not, Want Not", "In the famous store for rings and rare stones the four thieves took everything of value despite the best efforts of the law.", "On day 1 of the Reservoir Dogs job, loot and secure all available bags of diamonds and jewelry in the Garnet Group boutique on the Overkill difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/2f638b7fe932044312febee9cfd7205839aca39f.jpg"],
    ["All the Gold in Brooklyn", "For every month in the year four thieves would take tribute from the institution.", "On the Brooklyn Bank Job escape with at least 12 bags of gold on the Very Hard Difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/9a83c93d97049d19e1cbce37696e2fbcf10abd56.jpg"],
    ["Stalker", "The four thieves understood the importance of never letting the quarry out of your sight until the task of destroying your nemesis complete.", "In the Breakin' Feds job, have Commissioner Garret marked at all time after he left his office, until you have opened his safe.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/90a6ec1d72850bdee8997031830ad30d6de7e070.jpg"],
    ["Hack This!", "As the four thieves emerged from the mountain they were met by a hail of bullets but they easily out matched their foes.", "In the Henry's Rock job, destroy the security turrets instead of shutting them down on the OVERKILL difficulty or above.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/b1aec43a69df0cfa8ff72c655fb9e3c072331e39.jpg"],
    ["Press [F] to Pay Respects", "The four thieves found someone who deserved their respect.", "Press [F] to pay respects.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/12d52b5a225088944b498ba46cbed5b1c6dd8688.jpg"],
    ["Beacon of.. Nope", "When the four thieves came to the aid of their long lost friend they knew darkness was their ally.", "In the Hell's Island job, Shoot out the light on the lighthouse.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/db7ae9afa1941906d545f6a74a0e04a3668af3c6.jpg"],
    ["Keeping the Cool", "In a place of healing the four thieves stole a vial of vile blood with speed and threats they keep all the people under control.", "Complete the No Mercy job on the hard difficulty or above without raising the alarm before reaching the ICU.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/f021e8f5c1a8e21861216c7ef048de2e60ae7432.jpg"],
    ["The Pacifist", "While Stealing A bomb from a train the four thieves did not spill a single drop of blood", "Complete the Murky Station job without anyone in the crew killing anyone.", "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/d255432c8e71083e9702db564a2759db71aa25d4.jpg"],
];

const achievements = achievementData.map(v => ({
    title: v[0],
    riddle: v[1],
    normalized: normalize(v[1]),
    desc: v[2],
    image: v[3],
}));

const inputField = document.getElementById('inputField');
const listGroup = document.getElementById('listGroup');

inputChanged();

function inputChanged() {
    const inputText = inputField.value;
    const normalized = normalize(inputText);

    removeChildren(listGroup);
    for (let achievement of achievements) {
        if (!achievement.normalized.startsWith(normalized)) {
            continue;
        }

        let riddleIndex = indexSearch(0, achievement.riddle.length, i => {
            let normalizedRiddleSub = normalize(achievement.riddle.substring(0, i));
            return normalizedRiddleSub.length - normalized.length;
        });

        listGroup.insertAdjacentHTML('beforeend', `
        <li class="list-group-item">
        <img class="float-right" src="${achievement.image}" alt="${achievement.title}">
        <h3>${achievement.title}</h3>
        <code><u>${achievement.riddle.substring(0, riddleIndex)}</u>${achievement.riddle.substring(riddleIndex)}</code>
        <p>
        <b>${achievement.desc}</b>
        </li>
        `);
    }
}

function indexSearch(min, max, comparator) {
    let index;
    while (true) {
        index = (min + max) >> 1;
        if (min === max) {
            break;
        }

        let compare = comparator(index);
        if (compare === 0) {
            break;
        }
        if (compare > 0) {
            max = index - 1;
        }
        if (compare < 0) {
            min = index + 1;
        }
    }
    return index;
}

function normalize(text) {
    return text.replace(/[^a-zA-Z0-9]+/g, '').toUpperCase();
}

function removeChildren(node) {
    while (node.lastChild) {
        node.removeChild(node.lastChild)
    }
}
