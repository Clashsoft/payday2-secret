const achievementData = [
    ["Diamonds are Forever", "When the four thieves stole precious rocks from the small store they left before the law could get to the scene."],
    ["A Good Haul", "In the house of capitalism the four thieves stole a large amount of valuables before making their escape."],
    ["I Will Pass Through Walls", "Under the cover of night and shadows the thieves stole many bags of valuables and not a single drop of blood was spilled."],
    ["All Eggs in One Basket", "The four thieves placed their loot in the street, then a large bird came and took it all in one single swoop."],
    ["Hostage Situation", "The four thieves guarded the innocent until they made their escape with the valuable bounty from the house of carbon."],
    ["But Wait - There’s More", "From a well guarded transport the Four Thieves found out about a secret shipment containing a valuable weapon."],
    ["We’re Gonna Need a Bigger Boat", "As The four thieves stole the valuable weapon they also took all the munitions they could find."],
    ["Self Checkout", "When the four thieves were asked to destroy a large store their actions were as fast as they were devastating"],
    ["Platinum Card (Or: “Yeah, He’s a Gold Digger”)", "The four thieves strolled down the street cleaning out each stop they passed despite every effort the law couldn’t stop them."],
    ["What’s in the Box?", "Great value rained from the sky and the four thieves opened any packages in their quest for riches"],
    ["Let’s do th...", "The four thieves stole a valuable head ornament so fast that no one had a chance to react."],
    ["They Don't Pay Us Enough", "The four thieves were asked to steal something very dangerous they took everything of value and left nothing behind."],
    ["Bring It Back Safe", "As the earth shook the four thieves stole ten boxes of great value."],
    ["Let Them Boogie", "As people were dancing to the music the four thieves crept through the shadows and stole what was locked away."],
    ["The Grinch", "As the snow fell, the fours thieves attacked a large store and took everything of value."],
    ["Out of bounds", "The four thieves were surrounded on the docks but they kept their enemies away from the loot until it was all sent away"],
    ["Lord of War", "On the day that burned the four thieves absconded with all the elements of death."],
    ["Full Measure", "In an old abandoned house the four thieves made as much blue as they could with the resources available."],
    ["Doctor Fantastic", "The four thieves with all their wit could identify the mechanism they needed to steal with the greatest of ease."],
    ["I Wasn't Even There!", "Under the cover of darkness the four thieves quietly stole the valuable metal and replaced it with white dust."],
    ["I'm A Swinger", "The four thieves influenced the world around them and changed the course of society without anyone ever find out."],
    ["Don't bring the Heat", "The four thieves robbed the largest bank ever built without alerting the law."],
    ["Walk Faster", "A house full thugs and low lifes could not stop the four thieves from reaching their target."],
    ["Watch The Power Switch!", "The four thieves held their ground as their friend worked and because of their efforts he was completely uninterrupted."],
    ["Silent But Deadly", "When the four thieves were betrayed their revenge was precise and quiet no one knew they had been there until it was too late."],
    ["Cat Burglar", "The four thieves stole a rare rock of great value and importance without anyone noticing that they were there."],
    ["High Roller", "The four thieves attacked the house of smiles and fortune they quickly opened the vault and found their goal."],
    ["I've got the Power", "By the docks the four thieves went about their business without interruptions."],
    ["Pump It Up", "In the forest four thieves kept the pipe from their river intact."],
    ["Settling a Scar", "The four thieves attacked the mansion with great speed and ferocity."],
    ["Sound of Silence", "As the party was in full swing the four thieves went about their business and none ever knew they were there."],
    ["Dr. Evil", "The four thieves once created for themselves a large fortune."],
    ["OVERDRILL", "The hidden vault was hard to find and difficult to open but the four thieves worked together and claimed the legendary treasure."],
    ["Remember, No Russian", "As the liquid turned to vapor the four thieves watched over the dead never letting their power by taken away thereby staving off the darkness."],
    ["Hazzard County", "The four thieves stole goats and hidden treasures once the deed was done they quickly made their escape together."],
    ["Santa Slays Slackers", "The four thieves guarded the packer as they prepared the next shipment even as the law came charging in."],
    ["Gone in 240 seconds", "When stealing from the saddlers workshop the four thieves did so in a great hurry."],
    ["Full Throttle", "The four thieves attacked a train in motion they quickly made it to the last cars to see what they were after and made it to their escape."],
    ["Quick Draw", "A room full of riches, a house full of thugs. The four thieves were quick and deadly and before anyone knew it all the thugs were dead."],
    ["A Rendezvous With Destiny", "The four thieves made their way through the abandoned building and quickly found their charge."],
    ["Pacifish", "The four thieves did not spill blood while on the boat."],
    ["Not Even Once", "The four thieves interrupted a deal of great value but even though they were surrounded and cornered no one fell in the onslaught that followed."],
    ["Making a Statement", "Surrounded, the four thieves overcame grave danger and escaped the house of massacre."],
    ["Clean House", "The four thieves snuck into the mountain keep and they stole everything of value kept there."],
    ["1...2...3... JUMP!", "On the day they came in to the word flying through the heavens the four thieves all fell together."],
    ["It's Nice To Be Nice", "The four thieves were surrounded in the street but they fought their way through the onslaught of enemies and not a single innocent was harmed."],
    ["Attacked Helicopter", "As the four thieves rescued the incarcerated man. They shot the large bird that tried to stop them from sending them into safety."],
    ["The Fuel Must Flow", "In a place of ice and snow, the four thieves made their vessel seaworthy without the guards being able to stop them."],
    ["Blood Diamond", "The four thieves overcame incredible difficulties in obtaining the blood stained jewel."],
    ["Waste Not, Want Not", "In the famous store for rings and rare stones the four thieves took everything of value despite the best efforts of the law."],
    ["All the Gold in Brooklyn", "For every month in the year four thieves would take tribute from the institution."],
    ["Stalker", "The four thieves understood the importance of never letting the quarry out of your sight until the task of destroying your nemesis complete."],
    ["Hack This!", "As the four thieves emerged from the mountain they were met by a hail of bullets but they easily out matched their foes."],
    ["Press [F] to pay Respects", "The four thieves found someone who deserved their respect."],
    ["Beacon of... nope", "When the four thieves came to the aid of their long lost friend they knew darkness was their ally."],
    ["Keeping the Cool", "In a place of healing the four thieves stole a vial of vile blood with speed and threats they keep all the people under control."],
    ["The Pacifist", "While Stealing A bomb from a train the four thieves did not spill a single drop of blood"],
];

const achievements = achievementData.map(v => ({
    title: v[0],
    riddle: v[1],
    normalized: normalize(v[1]),
}));

const inputField = document.getElementById('inputField');
const listGroup = document.getElementById('listGroup');

function inputChanged() {
    const inputText = inputField.value;
    const normalized = normalize(inputText);

    removeChildren(listGroup);
    if (normalized === "") {
        return;
    }

    for (let achievement of achievements) {
        if (achievement.normalized.startsWith(normalized)) {
            listGroup.insertAdjacentHTML('beforeend', `
            <li class="list-group-item">
            <h3>${achievement.title}</h3>
            <i>${achievement.riddle}</i>
            </li>
            `);
        }
    }
}

function normalize(text) {
    return text.replace(/[^a-zA-Z0-9]+/g, '').toUpperCase();
}

function removeChildren(node) {
    while (node.lastChild) {
        node.removeChild(node.lastChild)
    }
}
