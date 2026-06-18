
// Player Info
let playerInfo = {
    name: "",
    health: 3,
    strength: 10,
    agility: 10,
    inventory: ["Sword", "Potion"],
    hasAllies: false
};


// Function 1: Displays the Status for each chapter
const displayStatus = (chapter) => {
    alert
    (`
        --- START OF CHAPTER ${chapter} ---
    Current Health: ${playerInfo.health}
    Strength: ${playerInfo.strength} | Agility: ${playerInfo.agility}
    Inventory: ${playerInfo.inventory.join(", ")}
    `);
}

// Function 2: Drink potion for healing
const drinkPotion = () => {
    // Check if potion exists in the array
    if (playerInfo.inventory.includes("Potion")) {
        alert("You consumed the potion 🧪. Your wounds healed! ❤️‍🩹 (+1 Health)");
        playerInfo.health += 1;
        
        // Removes potion in the array once drinked
        let potion = playerInfo.inventory.indexOf("Potion");
        playerInfo.inventory.splice(potion, 1);
    } else {
        alert("You look through your backpack, and you don't have any Potions left!");
    }
}


// Game Intro
alert("Welcome to Adventure Quest: A short Story-Based Survival with scenario based choice paths");
let characterName = prompt("Enter your Adventurer's name: ");

if (characterName) {
    playerInfo.name = characterName;
}

alert(`Welcome, ${playerInfo.name}! Your journey begins now.`);


// For loop from Chapter 1 to 5
for (let chapter = 1; chapter <= 5; chapter++) {
    
    // Player health, if dead break out of the for loop
    if (playerInfo.health <= 0) {
        break;
    }
    
    displayStatus(chapter); // Display status every start of chapter

    // CHAPTER 1: THE WEAK GOBLIN
    if (chapter === 1) {
        let choice1 = prompt("You enter the dungeon and while you are walking you encountered a weak goblin that blocks your path. \nA. Fight\nB. Run").toUpperCase();
        
        if (choice1 === "A") { // choice A
            alert("You wield your Sword 🗡️ and defeated the goblin safely without injuries!  (+2 Strength, +2 Agility)"); // +2 str, and +2 agi
            playerInfo.strength += 2; 
            playerInfo.agility += 2;
        } else if (choice1 === "B") { // choice B
            let confirmEscape = confirm("Are you sure you want to run away? 🏃"); // Confirmation for choice B
            if (confirmEscape) {
                alert("You successfully sneak past the goblin safely and went into the next room. 🥷🏿 ");
            } else {
                alert("You hesitated! The goblin stabs you before you escaped. 🔪🩸 (-1 Health)"); // -1 health
                playerInfo.health -= 1;
            }
        } else { // Invalid Answer
            alert("Invalid choice! You panicked and the goblin hit you while you stood still. 🩸 (-1 Health)"); // -1 health
            playerInfo.health -= 1;
        }
    }

    // CHAPTER 2: THE SPIKE TRAP
    else if (chapter === 2) {
        let choice2 = prompt("While you are walking down 👣 the path a mechanical pressure plate clicks right under your boot!\nA. Dodge\nB. Disarm").toUpperCase();
        
        if (choice2 === "A") { // choice A
            // Stat Check
            if (playerInfo.agility >= 12) { 
                alert("With your high Agility, you dodged out of the way, before the trap triggered! (+2 Agility)"); // +2 agi
                playerInfo.agility += 2;
            } else {
                alert("You were too slow! The spikes graze your leg. 🩸 (-1 Health)"); // -1 health
                playerInfo.health -= 1;
            }
        } else if (choice2 === "B") { // choice B
            // 50% Random Chance Check
            let randomRoll = Math.floor(Math.random() * 2) + 1; // 1 or 2

            if (randomRoll < 2) {
                alert("Success! You carefully disarmed the trap mechanisms and escaped the area.");
            } else {
                alert("Failure! The trap springs while you are messing with it. ⚠️🩸 (-1 Health)"); // -1 health
                playerInfo.health -= 1;
            }
        } else { // Invalid Answer
            alert("Invalid choice! The trap springs while you are standing lost in thoughts. ⚠️🩸 (-1 Health)"); // -1 health
            playerInfo.health -= 1;
        }
    }

    // CHAPTER 3: THE TRAPPED ADVENTURERS
    else if (chapter === 3) {
        let choice3 = prompt("You stumble upon a small goblin camp with a cage holding trapped guild adventurers. (If you rescue them you have a risk of getting killed or injured) \nA. Rescue Them\nB. Sneak Past").toUpperCase();
        
        if (choice3 === "A") {
            alert("You attacked 🗡️ the goblin guards and confused them by running around 🏃. After that you sneakily went to break the cage lock while the goblins were distracted and lost! The adventurers who escaped helped you fight back! but the fight takes a toll on you and you got injured while trying to free them 🩸, but you gained loyal companions. ⚔️ (+2 strenght and -1 Health)"); // +2 str, and -1 health
            playerInfo.strength += 2;
            playerInfo.health -= 1;
            playerInfo.hasAllies = true;
        } else if (choice3 === "B") {
            alert("You stayed in the shadows 🥷🏿 and avoided getting involved. You leave them behind to avoid a dangerious situation.");
        } else {
            alert("Invalid choice! You can't decide, and just left and avoided getting involved.");
        }
    }

    // CHAPTER 4: LOOT CHEST
    else if (chapter === 4) {
        let choice4 = prompt("Right outside the massive boss door, you discovered a loot chest which may be a trap. (You think about it deeply) \nA. Loot the Box\nB. Ignore Loot Box").toUpperCase();
        
        if (choice4 === "A") {
            alert("You opened the chest and pulled out a sturdy Shield 🛡️! Which can be used later on. ");
            playerInfo.inventory.push("Shield");

            let usePotion = confirm("While you are taking a breath, do you also want to drink your potion? 🧪");
            if (usePotion) {
                // Called Function to drink potion
                drinkPotion();
            } else {
                alert("You decide to save your potion 🧪 for later, but you feel a bit more nervous about the upcoming fight.");
            }
        } else if (choice4 === "B") {
            let usePotion2 = confirm("You didn't opened the suspecious loot chest. Would you like to use your Potion right now instead?");
            if (usePotion2) {
                drinkPotion();
            }
        } else {
            alert("Invalid choice! You instead just left without doing anything the loot box was left untouched.");
        }
    }

    // CHAPTER 5: THE OGRE BOSS FIGHT
    else if (chapter === 5) {
        let choice5 = prompt("You entered the boss room and saw a Giant Ogre! 🧌 The Huge Ogre jump right at you to attack! (You can counter, but thinks deeply that you need to have the strength and speed to counter effectively) \nA. Counter Attack\nB. Defensive Stance").toUpperCase();
        
        if (choice5 === "A") {
            if ((playerInfo.strength >= 14 && playerInfo.agility >= 14) && playerInfo.inventory.includes("Sword")) {
                alert("Unleashing your strength and fast agility, you counter attacked faster than the Giant Ogres attack, and dealt a critical blow 🗡️🩸. Then the other adventurers came and gave you a helping hand 🤝🏻 on finishing off the Ogre. With their help you dealt a finishing blow by cutting off its head. 🗡️");
            } else {
                alert("Your weapon, strength, and agility is insufficient! The Ogre hits you violently to death. 🩸 (-4 Health)");
                playerInfo.health -= 4;
            }
        } else if (choice5 === "B") {
            if (playerInfo.inventory.includes("Shield") && playerInfo.hasAllies) {
                alert("You raised your Shield! 🛡️ and absorbs the heavy hit cleanly and survived, but can't find the oppening to attack. But then the adventurers came and helped you get the opening that you need to catch the ogre off guard and kill it ⚔️ with one blow after stunning the ogre with your shield. You successfully looted the boss and with the other adventurers and left the dungeon.");
            } else if (playerInfo.hasAllies) {
                alert("You didn't have a shield and tried to block only using your sword and hoped for the best. But at the last moment the adventurers you saved came back and helped you 🗡️🛡️.. They also blocked the Ogre's attack and together you all defeated the boss through hardship. Everyone was injured but no one died. You successfully looted the boss and with the other adventurers and left the dungeon.");
            } else {
                alert("You try to brace yourself, but without a shield, you are crushed completely. 🩸 (-4 Health)");
                playerInfo.health -= 4;
            }
        } else {
            alert("Invalid choice! The Ogre smashes you flat while you hesitate. 🩸 (-4 Health)");
            playerInfo.health -= 4;
        }
    }
}


alert("--- GAME END STATUS ---");

if (playerInfo.health <= 0) {
    alert(`☠️ GAME OVER: ${playerInfo.name} \nPerished inside the dungeon. The shadows claim another soul.`); // GAME OVER
} else {
    if (playerInfo.hasAllies === true) { // ENDING A & B
        alert(`🏆 ENDING A (Hero Victory):\n${playerInfo.name} saved the guild members and defeated the strong goblins and their OGRE boss! The Guild recognized ${playerInfo.name} as a HERO who saved and risked his life for adventurers who he didn't even knew and also being able to defeat the OGRE boss.`);
    } else {
        alert(`🥈 ENDING B (Selfish Adventurer):\n${playerInfo.name} successfully cut down the Ogre but felt no remorsed for the adventurers who was left behind, and walked out into the sunlight completely alone with no one to share the victory with. You collect your bounty in silence.`);
    }
}

alert("Thank you for playing!! ✨");