﻿// This is just a temporary solution, need to find a better way to get up to date info.

// To add an hero:

// 1. First bit of JSON "borrowed" from:
//
// http://www.dota2.com/jsfeed/heropickerdata?l=english
//
// Overwrite "tempHeroesJson" with that content.

// 2. Then go to:
//
// https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=.....
//
// Using your key:
//
// http://steamcommunity.com/dev/apikey
//
// And manually add heroes to the second list, finding the "local name" from the first list.

// Finally, make sure you add the hero to globalTemplates as well, either by reconstructing those layouts and copying them below, or by manually editing the JSON.


var tempHeroesJson = {
  "antimage": {
    "name": "Anti-Mage",
    "bio": "The monks of Turstarkuri watched the rugged valleys below their mountain monastery as wave after wave of invaders swept through the lower kingdoms. Ascetic and pragmatic, in their remote monastic eyrie they remained aloof from mundane strife, wrapped in meditation that knew no gods or elements of magic. Then came the Legion of the Dead God, crusaders with a sinister mandate to replace all local worship with their Unliving Lord's poisonous nihilosophy. From a landscape that had known nothing but blood and battle for a thousand years, they tore the souls and bones of countless fallen legions and pitched them against Turstarkuri. The monastery stood scarcely a fortnight against the assault, and the few monks who bothered to surface from their meditations believed the invaders were but demonic visions sent to distract them from meditation. They died where they sat on their silken cushions. Only one youth survived--a pilgrim who had come as an acolyte, seeking wisdom, but had yet to be admitted to the monastery. He watched in horror as the monks to whom he had served tea and nettles were first slaughtered, then raised to join the ranks of the Dead God's priesthood. With nothing but a few of Turstarkuri's prized dogmatic scrolls, he crept away to the comparative safety of other lands, swearing to obliterate not only the Dead God's magic users--but to put an end to magic altogether. ",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Escape"],
    "roles_l": ["Carry", "Escape"]
  },
  "axe": {
    "name": "Axe",
    "bio": "As a grunt in the Army of Red Mist, Mogul Khan set his sights on the rank of Red Mist General. In battle after battle he proved his worth through gory deed. His rise through the ranks was helped by the fact that he never hesitated to decapitate a superior. Through the seven year Campaign of the Thousand Tarns, he distinguished himself in glorious carnage, his star of fame shining ever brighter, while the number of comrades in arms steadily dwindled. On the night of ultimate victory, Axe declared himself the new Red Mist General, and took on the ultimate title of 'Axe.' But his troops now numbered zero. Of course, many had died in battle, but a significant number had also fallen to Axe's blade. Needless to say, most soldiers now shun his leadership. But this matters not a whit to Axe, who knows that a one-man army is by far the best.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Initiator", "Disabler", "Jungler"],
    "roles_l": ["Durable", "Initiator", "Disabler", "Jungler"]
  },
  "bane": {
    "name": "Bane",
    "bio": "When the gods have nightmares, it is Bane Elemental who brings them.  Also known as Atropos, Bane was born from the midnight terrors of the goddess Nyctasha.  A force of terror too powerful to be contained by sleep, he surfaced from her slumbers, fed upon her immortality, and stole his vaporous form from her inky blood.  He is the essence of fear.  Mortals who hear his voice hear their darkest secrets whispered in their ear.  He calls to the hidden fear in every Hero's heart.  Wakefulness is no protection, for Bane's black blood, continuously dripping, is a tar that traps his enemies in nightmare.  In the presence of Bane, every Hero remembers to fear the dark.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Disabler", "Nuker", "Support"],
    "roles_l": ["Disabler", "Nuker", "Support"]
  },
  "bloodseeker": {
    "name": "Bloodseeker",
    "bio": "Strygwyr the Bloodseeker is a ritually sanctioned hunter, Hound of the Flayed Twins, sent down from the mist-shrouded peaks of Xhacatocatl in search of blood. The Flayed Ones require oceanic amounts of blood to keep them sated and placated, and would soon drain their mountain empire of its populace if the priests of the high plateaus did not appease them. Strygwyr therefore goes out in search of carnage. The vital energy of any blood he lets, flows immediately to the Twins through the sacred markings on his weapons and armor. Over the years, he has come to embody the energy of a vicious hound; in battle he is savage as a jackal. Beneath the Mask of the Bloodseeker, in the rush of bloody quenching, it is said that you can sometime see the features of the Flayers taking direct possession of their Hound.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Jungler"],
    "roles_l": ["Carry", "Jungler"]
  },
  "crystal_maiden": {
    "name": "Crystal Maiden",
    "bio": "Born in a temperate realm, raised with her fiery older sister Lina, Rylai the Crystal Maiden soon found that her innate elemental affinity to ice created trouble for all those around her. Wellsprings and mountain rivers froze in moments if she stopped to rest nearby; ripening crops were bitten by frost, and fruiting orchards turned to mazes of ice and came crashing down, spoiled. When their exasperated parents packed Lina off to the equator, Rylai found herself banished to the cold northern realm of Icewrack, where she was taken in by an Ice Wizard who had carved himself a hermitage at the crown of the Blueheart Glacier. After long study, the wizard pronounced her ready for solitary practice and left her to take his place, descending into the glacier to hibernate for a thousand years. Her mastery of the Frozen Arts has only deepened since that time, and now her skills are unmatched.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "Disabler", "Nuker", "LaneSupport"],
    "roles_l": ["Support", "Disabler", "Nuker", "Lane Support"]
  },
  "drow_ranger": {
    "name": "Drow Ranger",
    "bio": "Drow Ranger's given name is Traxex--a name well suited to the short, trollish, rather repulsive Drow people. But Traxex herself is not a Drow. Her parents were travelers in a caravan set upon by bandits, whose noisy slaughter of innocents roused the ire of the quiet Drow people. After the battle settled, the Drow discovered a small girl-child hiding in the ruined wagons, and agreed she could not be abandoned. Even as child, Traxex showed herself naturally adept at the arts they prized: Stealth, silence, subtlety. In spirit, if not in physique, she might have been a Drow changeling, returned to her proper home. But as she grew, she towered above her family and came to think of herself as ugly. After all,  her features were smooth and symmetrical, entirely devoid of warts and coarse whiskers. Estranged from her adopted tribe, she withdrew to live alone in the woods. Lost travelers who find their way from the forest sometimes speak of an impossibly beautiful Ranger who peered at them from deep among the trees, then vanished like a dream before they could approach. Lithe and stealthy, icy hot, she moves like mist in silence. That whispering you hear is her frozen arrows finding an enemy's heart. ",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry"],
    "roles_l": ["Carry"]
  },
  "earthshaker": {
    "name": "Earthshaker",
    "bio": "Like a golem or gargoyle, Earthshaker was one with the earth but now walks freely upon it. Unlike those other entities, he created himself through an act of will, and serves no other master. In restless slumbers, encased in a deep seam of stone, he became aware of the life drifting freely above him. He grew curious. During a season of tremors, the peaks of Nishai shook themselves loose of avalanches, shifting the course of rivers and turning shallow valleys into bottomless chasms. When the land finally ceased quaking, Earthshaker stepped from the settling dust, tossing aside massive boulders as if throwing off a light blanket. He had shaped himself in the image of a mortal beast, and named himself Raigor Stonehoof. He bleeds now, and breathes, and therefore he can die. But his spirit is still that of the earth; he carries its power in the magical totem that never leaves him. And on the day he returns to dust, the earth will greet him as a prodigal son.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Initiator", "Disabler", "Support", "LaneSupport"],
    "roles_l": ["Initiator", "Disabler", "Support", "Lane Support"]
  },
  "juggernaut": {
    "name": "Juggernaut",
    "bio": "No one has ever seen the face hidden beneath the mask of Yurnero the Juggernaut. It is only speculation that he even has one. For defying a corrupt lord, Yurnero was exiled from the ancient Isle of Masks--a punishment that saved his life. The isle soon after vanished beneath the waves in a night of vengeful magic. He alone remains to carry on the Isle's long Juggernaut tradition, one of ritual and swordplay. The last practitioner of the art, Yurnero's confidence and courage are the result of endless practice; his inventive bladework proves that he has never stopped challenging himself. Still, his motives are as unreadable as his expression. For a hero who has lost everything twice over, he fights as if victory is a foregone conclusion. ",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Pusher"],
    "roles_l": ["Carry", "Pusher"]
  },
  "mirana": {
    "name": "Mirana",
    "bio": "Born to a royal family, a blood princess next in line for the Solar Throne, Mirana willingly surrendered any claim to mundane land or titles when she dedicated herself completely to the service of Selemene, Goddess of the Moon. Known ever since as Princess of the Moon, Mirana prowls the sacred Nightsilver Woods searching for any who would dare poach the sacred luminous lotus from the silvery pools of the Goddess's preserve. Riding on her enormous feline familiar, she is poised, proud and fearless, attuned to the phases of the moon and the wheeling of the greater constellations. Her bow, tipped with sharp shards of lunar ore, draws on the moon's power to charge its arrows of light.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Nuker", "Disabler", "Escape"],
    "roles_l": ["Carry", "Nuker", "Disabler", "Escape"]
  },
  "nevermore": {
    "name": "Shadow Fiend",
    "bio": "It is said that Nevermore the Shadow Fiend has the soul of a poet, and in fact he has thousands of them. Over the ages he has claimed the souls of poets, priests, emperors, beggars, slaves, philosophers, criminals and (naturally) heroes; no sort of soul escapes him. What he does with them is unknown. No one has ever peered into the Abysm whence Nevermore reaches out like an eel from among astral rocks. Does he devour them one after another? Does he mount them along the halls of an eldritch temple, or pickle the souls in necromantic brine? Is he merely a puppet, pushed through the dimensional rift by a demonic puppeteer? Such is his evil, so intense his aura of darkness, that no rational mind may penetrate it. Of course, if you really want to know where the stolen souls go, there's one sure way to find out: Add your soul to his collection. Or just wait for Nevermore.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Nuker"],
    "roles_l": ["Carry", "Nuker"]
  },
  "morphling": {
    "name": "Morphling",
    "bio": "For dark eons the comet circled. Held in thrall to a distant sun, bound by gravity's inexorable pull, the massive ball of ice careened through the blackness between worlds, made strange by its dark journey. On the eve of the ancient war of the Vloy, it punched down through the sky and lit a glowing trail across the night, a sign both armies took for an omen. The frozen ball melted in a flash of boiling heat, as below two forces enjoined in battle across the border of a narrow river. Thus freed from its icy stasis, the Morphling was born into conflict, an elemental power at one with the tides of the ocean, capricious and unconstrained. He entered the fight, instinctively taking the form of the first general who dared set foot across the water, and then struck him dead. As the motley warriors clashed, he shifted from form to form throughout the battle, instantly absorbing the ways of these strange creatures--now a footsoldier, now an archer, now the cavalryman--until, by the time the last soldier fell, Morphling had played every part. The battle's end was his beginning.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Escape", "Initiator", "Nuker"],
    "roles_l": ["Carry", "Escape", "Initiator", "Nuker"]
  },
  "phantom_lancer": {
    "name": "Phantom Lancer",
    "bio": "The remote village of Pole had no knowledge of the wars raging in the heart of the kingdom. For them, the quiet of spear fishing, and a family meal were all that a full life required. Yet war came for them nonetheless. Joining the able-bodied conscripts as they filed passed their homes, the humble lancer Azwraith vowed to bring peace to his kingdom, and in so doing, his people. Placed with his kin in the vanguard of the final assault against the Dread Magus Vorn, the cost to his fellows was absolute. As the charging force battled toward the fortress, Azwraith alone among his kind remained standing, and he alone was able to infiltrate the keep. Focused and infuriated by the slaughter of his brothers, Azwraith bested each of the wizard's deadly traps and conjured guardians. Soon the simple fisherman arrived at Vorn's tower sanctum. The pair dueled through the night, pike to staff, as chaos raged below, and with a deafening cry Azwraith pierced his enemy. But the wizard did not simply expire; he exploded into uncountable shards of light, penetrating his killer with power. As the dust settled and the smoke of combat began to clear, Azwraith found himself standing among a throng of his kin. Each seemed to be dressed as he was, each seemed armed as he was, and he could sense that each thought as he did. Aware that his allies were approaching, he willed these phantoms to hide themselves, and one by one they began to vanish into nothingness. As the soldiers came upon the sanctum, they found the warrior that had bested the wizard. When they approached their champion, the lancer vanished. The pikeman who had stood before them was no more than another phantom.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Escape", "Pusher"],
    "roles_l": ["Carry", "Escape", "Pusher"]
  },
  "puck": {
    "name": "Puck",
    "bio": "While Puck seems at first glance a mischievous, childish character, this quality masks an alien personality. The juvenile form of a Faerie Dragon, a creature that lives for eons, Puck spends countless millennia in its childish form. So while it is technically true that Puck is juvenile, it will continue to be so when the cities of the present age have sloughed away into dust. Its motives are therefore inscrutable, and what appears to be play may in fact hide a darker purpose. Its endless fondness for mischief is the true indicator of Puck's true nature.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Initiator", "Nuker", "Disabler", "Escape"],
    "roles_l": ["Initiator", "Nuker", "Disabler", "Escape"]
  },
  "pudge": {
    "name": "Pudge",
    "bio": "In the Fields of Endless Carnage, far to the south of Quoidge, a corpulent figure works tirelessly through the night--dismembering, disembowelling, piling up the limbs and viscera of the fallen that the battlefield might be clear by dawn. In this cursed realm, nothing can decay or decompose; no corpse may ever return to the earth from which it sprang, no matter how deep you dig the grave. Flocked by carrion birds who need him to cut their meals into beak-sized chunks, Pudge the Butcher hones his skills with blades that grow sharper the longer he uses them. Swish, swish, thunk. Flesh falls from the bone; tendons and ligaments part like wet paper. And while he always had a taste for the butchery, over the ages, Pudge has developed a taste for its byproduct as well. Starting with a gobbet of muscle here, a sip of blood there...before long he was thrusting his jaws deep into the toughest of torsos, like a dog gnawing at rags. Even those who are beyond fearing the Reaper, fear the Butcher.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Disabler"],
    "roles_l": ["Durable", "Disabler"]
  },
  "razor": {
    "name": "Razor",
    "bio": "Among the emblematic powers that populate the Underscape, Razor the Lightning Revenant is one of the most feared. With his whip of lightning, he patrols the Narrow Maze, that treacherous webwork of passages by which the souls of the dead are sorted according to their own innate intelligence, cunning and persistence. Drifting above the Maze, Razor looks down on the baffled souls below, and delivers jolts of scalding electricity that both punish and quicken the souls as they decide their own fates, hurrying on toward luminous exits or endlessly dark pits. Razor is the eternal embodiment of a dominating power, abstract and almost clinical in his application of power. Yet he has a lordly air that suggests he takes a sardonic satisfaction in his work.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Durable", "Nuker"],
    "roles_l": ["Carry", "Durable", "Nuker"]
  },
  "sand_king": {
    "name": "Sand King",
    "bio": "The sands of the Scintillant Waste are alive and sentient--the whole vast desert speaks to itself, thinking thoughts only such a vastness can conceive. But when it needs must find a form to communicate with those of more limited scope, it frees a fragment of itself, and fills a carapace of magic armor formed by the cunning Djinn of Qaldin. This essential identity calls itself Crixalis, meaning 'Soul of the Sand,' but others know it as Sand King.  Sand King takes the form of a huge arachnid, inspired by the Scintillant Waste's small but ubiquitous denizens; and this is a true outward expression of his ferocious nature. Guardian, warrior, ambassador--Sand King is all of these things, inseparable from the endless desert that gave him life.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Initiator", "Disabler", "Nuker"],
    "roles_l": ["Initiator", "Disabler", "Nuker"]
  },
  "storm_spirit": {
    "name": "Storm Spirit",
    "bio": "Storm Spirit is literally a force of nature--the wild power of wind and weather, bottled in human form. And a boisterous, jovial, irrepressible form it is! As jolly as a favorite uncle, he injects every scene with crackling energy. But it was not always thus, and there was tragedy in his creation. Generations ago, in the plains beyond the Wailing Mountains, a good people lay starving in drought and famine. A simple elementalist, Thunderkeg by name, used a forbidden spell to summon the spirit of the storm, asking for rain. Enraged at this mortal's presumption, the Storm Celestial known as Raijin lay waste to the land, scouring it bare with winds and flood. Thunderkeg was no match for the Celestial--at least until he cast a suicidal spell that forged their fates into one: he captured the Celestial in the cage of his own body. Trapped together, Thunderkeg's boundless good humor fused with Raijin's crazed energy, creating the jovial Raijin Thunderkeg, a Celestial who walks the world in physical form. ",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Initiator", "Escape", "Disabler"],
    "roles_l": ["Carry", "Initiator", "Escape", "Disabler"]
  },
  "sven": {
    "name": "Sven",
    "bio": "Sven is the bastard son of a Vigil Knight, born of a Pallid Meranth, raised in the Shadeshore Ruins.  With his father executed for violating the Vigil Codex, and his mother shunned by her wild race, Sven believes that honor is to be found in no social order, but only in himself.  After tending his mother through a lingering death, he offered himself as a novice to the Vigil Knights, never revealing his identity.  For thirteen years he studied in his father's school, mastering the rigid code that declared his existence an abomination.  Then, on the day that should have been his In-Swearing, he seized the Outcast Blade, shattered the Sacred Helm, and burned the Codex in the Vigil's Holy Flame.  He strode from Vigil Keep, forever solitary, following his private code to the last strict rune. Still a knight, yes...but a Rogue Knight. He answers only to himself.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Disabler", "Initiator", "Carry", "Support"],
    "roles_l": ["Disabler", "Initiator", "Carry", "Support"]
  },
  "tiny": {
    "name": "Tiny",
    "bio": "Coming to life as a chunk of stone, Tiny's origins are a mystery on which he continually speculates.  He is a Stone Giant now, but what did he used to be?  A splinter broken from a Golem's heel?  A shard swept from a gargoyle-sculptor's workshop?  A fragment of the Oracular Visage of Garthos?  A deep curiosity drives him, and he travels the world tirelessly seeking his origins, his parentage, his people.  As he roams, he gathers weight and size; the forces that weather lesser rocks, instead cause Tiny to grow and ever grow.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Disabler", "Nuker", "Initiator", "Durable"],
    "roles_l": ["Disabler", "Nuker", "Initiator", "Durable"]
  },
  "vengefulspirit": {
    "name": "Vengeful Spirit",
    "bio": "Even the most contented Skywrath is an ill-tempered creature, naturally inclined to seek revenge for the slightest insult. But Vengeful Spirit is the essence of vengeance. Once a proud and savage Skywrath scion, Shendelzare was first in succession for the Ghastly Eyrie until a sister's treachery robbed her of her birthright. Snared in an assassin's net, Shendelzare tore free only at the cost of her wings, limping away in the ultimate humiliation: On foot. With her wings broken, she knew the Skywrath would never accept her as ruler; and in the highest roost of the Eyrie, inaccessible except by winged flight, her sister was untouchable. Unwilling to live as a flightless cripple, and desiring revenge far more than earthly power, the fallen princess drove a bargain with the goddess Scree'auk: She surrendered her broken body for an imperishable form of spirit energy, driven by vengeance, capable of doing great damage in the material plane. She may spend eternity flightless, but she will have her revenge.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "Disabler", "LaneSupport", "Initiator"],
    "roles_l": ["Support", "Disabler", "Lane Support", "Initiator"]
  },
  "windrunner": {
    "name": "Windranger",
    "bio": "The western forests guard their secrets well. One of these is Lyralei, master archer of the wood, and favored godchild of the wind.  Known now as Windranger, Lyralei's family was killed in a storm on the night of her birth--their house blown down by the gale, contents scattered to the winds. Only the newborn survived among the debris field of death and destruction.  In the quiet after the storm, the wind itself took notice of the lucky infant crying in the grass. The wind pitied the child and so lifted her into the sky and deposited her on a doorstep in a neighboring village.  In the years that followed, the wind returned occasionally to the child's life, watching from a distance while she honed her skills.  Now, after many years of training, Windranger fires her arrows true to their targets.  She moves with blinding speed, as if hastened by a wind ever at her back.  With a flurry of arrows, she slaughters her enemies, having become, nearly, a force of nature herself.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Disabler", "Nuker", "Support", "Escape"],
    "roles_l": ["Disabler", "Nuker", "Support", "Escape"]
  },
  "zuus": {
    "name": "Zeus",
    "bio": "Lord of Heaven, father of gods, Zeus treats all the Heroes as if they are his rambunctious, rebellious children. After being caught unnumbered times in the midst of trysts with countless mortal women, his divine wife finally gave him an ultimatum: 'If you love mortals so much, go and become one. If you can prove yourself faithful, then return to me as my immortal husband. Otherwise, go and die among your creatures.' Zeus found her logic (and her magic) irrefutable, and agreed to her plan. He has been on his best behavior ever since, being somewhat fonder of immortality than he is of mortals. But to prove himself worthy of his eternal spouse, he must continue to pursue victory on the field of battle.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Nuker", "Support"],
    "roles_l": ["Nuker", "Support"]
  },
  "kunkka": {
    "name": "Kunkka",
    "bio": "As The Admiral of the mighty Claddish Navy, Kunkka was charged with protecting the isles of his homeland when the demons of the Cataract made a concerted grab at the lands of men. After years of small sorties, and increasingly bold and devastating attacks, the demon fleet flung all its carnivorous ships at the Trembling Isle. Desperate, the Suicide-Mages of Cladd committed their ultimate rite, summoning a host of ancestral spirits to protect the fleet. Against the demons, this was just barely enough to turn the tide. As Kunkka watched the demons take his ships down one by one, he had the satisfaction of wearing away their fleet with his ancestral magic. But at the battle's peak, something in the clash of demons, men and atavistic spirits must have stirred a fourth power that had been slumbering in the depths. The waves rose up in towering spouts around the few remaining ships, and Maelrawn the Tentacular appeared amid the fray. His tendrils wove among the ships, drawing demon and human craft together, churning the water and wind into a raging chaos. What happened in the crucible of that storm, none may truly say. The Cataract roars off into the void, deserted by its former denizens. Kunkka is now The Admiral of but one ship, a ghostly rig which endlessly replays the final seconds of its destruction. Whether he died in that crash is anyone's guess. Not even Tidehunter, who summoned Maelrawn, knows for sure.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Disabler", "Initiator", "Carry", "Durable"],
    "roles_l": ["Disabler", "Initiator", "Carry", "Durable"]
  },
  "lina": {
    "name": "Lina",
    "bio": "The sibling rivalries between Lina the Slayer, and her younger sister Rylai, the Crystal Maiden, were the stuff of legend in the temperate region where they spent their quarrelsome childhoods together. Lina always had the advantage, however, for while Crystal was guileless and naive, Lina's fiery ardor was tempered by cleverness and conniving. The exasperated parents of these incompatible offspring went through half a dozen homesteads, losing one to fire, the next to ice, before they realized life would be simpler if the children were separated. As the oldest, Lina was sent far south to live with a patient aunt in the blazing Desert of Misrule, a climate that proved more than comfortable for the fiery Slayer. Her arrival made quite an impression on the somnolent locals, and more than one would-be suitor scorched his fingers or went away with singed eyebrows, his advances spurned. Lina is proud and confident, and nothing can dampen her flame.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Nuker", "Disabler", "Support"],
    "roles_l": ["Nuker", "Disabler", "Support"]
  },
  "lich": {
    "name": "Lich",
    "bio": "In life, the frost-mage Ethreain (not yet a Lich) had used the threat of destructive ice to enslave entire kingdoms. His subjects, aided by a few desperate magicians, eventually grew bold enough to ambush him. Armed with enough charmed rope to bind him forever, they tied the frost mage to adamant weights and dropped him in a pool known chiefly for being bottomless. It wasn't. He only fell for a year or so before an outcrop snagged him. There he rested, dead but undecaying, until the geomancer Anhil thought to verify the legend of the supposedly bottomless Black Pool. Anhil's plumbline snarled with the ropes that bound the drowned magician, and up he hauled an unexpected prize. Thinking that by rendering the dead undead, he could question the Lich about the properties of the pool, he removed the bindings and commenced a simple rite of resurrection. Even the descendants of Ethreain's enemies were long forgotten by time, so there were none to warn Anhil against imprudence. But he learned the error of his judgment almost immediately, as Lich threw off the shackles and consumed him.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "LaneSupport", "Nuker"],
    "roles_l": ["Support", "Lane Support", "Nuker"]
  },
  "lion": {
    "name": "Lion",
    "bio": "Once a Grandmaster of the Demon Witch tradition of sorcery, Lion earned fame among his brethren for fighting on the side of light and righteousness. But adulation corrupts. With powers surpassed only by his ambition, the mage was seduced by a demon and turned to evil, trading his soul for prestige. After committing horrible crimes that marred his soul, he was abandoned. The demon betrayed him, striking better deals with his enemies. Such was Lion's rage that he followed the demon back to hell and slew it, ripping it limb from limb, taking its demonic hand for his own. However, such demonoplasty comes at a cost. Lion was transfigured by the process, his body transformed into something unrecognizable. He rose from hell, rage incarnate, slaying even those who had once called him master, and laying waste to the lands where he had once been so adored. He survives now as the sole practitioner of the Demon Witch tradition, and those who present themselves as acolytes or students are soon relieved of their mana and carried off by the faintest gust of wind.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Disabler", "Nuker", "LaneSupport", "Support"],
    "roles_l": ["Disabler", "Nuker", "Lane Support", "Support"]
  },
  "shadow_shaman": {
    "name": "Shadow Shaman",
    "bio": "Born in the Bleeding Hills, Rhasta was just a starving youngling when picked up by a travelling con-man.  For two pins of copper, the old con-man would tell your fortune. For three, he'd castrate your pig, for five, he'd circumcise your sons. For a good meal, he'd don his shaman garb, read from his ancient books, and lay a curse upon your enemies. His strange new youngling, part hill troll, part...something else, worked as assistant and lent an air of the exotic to the con-man's trade. \r\nAlways one step ahead of cheated customers, one town ahead of a pursuing patronage, the two trekked across the blighted lands until one day the con-man realized that the little youngling could actually do what he only pretended at. His ward had a gift--a gift that customers valued. And so the youngling Rhasta was thrust before the crowds, and the trade-name Shadow Shaman was born. The two continued from town to town, conjuring for money as Shadow Shaman's reputation grew. Eventually, the pair's duplicitous past caught up with them, and they were ambushed by a mob of swindled ex-clients. The con-man was slain, and for the first time, Rhasta used his powers for darkness, massacring the attackers. He buried his beloved master, and now uses his powers to destroy any who would seek to do him harm.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Pusher", "Disabler", "Nuker", "Support"],
    "roles_l": ["Pusher", "Disabler", "Nuker", "Support"]
  },
  "slardar": {
    "name": "Slardar",
    "bio": "Slardar is a Slithereen, one of the Deep Ones, guardian of the great wealth of sunken cities and the ancient riches buried there. In the lightless gulf of the great ocean abysses, the Slithereen Guard carries his lure-light with him through the secret treasure rooms. Subaqueous thieves (sent into the deeps by covetous dryland sorcerers) are drawn in by its friendly glow, never to return. He is utterly loyal, and his taciturn nature hides deep knowledge of the most secret places of the sea. He rises to the shallows in spite of the pain caused him by brightness, to commit reconnaissance, to make sure no one is conspiring against the depths, and sometimes in relentless pursuit of the rare few who manage to steal off with an item from the Sunken Treasury. Because he has spent his whole life at great pressure, under tremendous weight of the sea, Slardar the Slithereen Guard is a creature of great power.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Durable", "Disabler", "Initiator"],
    "roles_l": ["Carry", "Durable", "Disabler", "Initiator"]
  },
  "tidehunter": {
    "name": "Tidehunter",
    "bio": "The Tidehunter known as Leviathan was once the champion of the Sunken Isles, but his motives are as mysterious as those of his people. We all know the importance of the Drylanders' shipping lanes, how empires may rise and fall according to who controls the open water. Far less is known of the submarine lanes, and how the warring tribes of the Meranthic Diaspora have carved out habitations through endless undersea skirmishes. In the fragile treaties between the Mer and Men, we can glimpse the extent of the drowned empires, but their politics appear complex and opaque. It would seem that Leviathan tired of such petty strife, and set off on his own, loyal only to his abyssal god, Maelrawn the Tentacular. He stalks the shallows now in search of men or meranths who stray into his path, and with a particular loathing for Admiral Kunkka, who has long been his nemesis for reasons lost in the deepest trenches of the sea.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Initiator", "Durable", "Disabler", "Support"],
    "roles_l": ["Initiator", "Durable", "Disabler", "Support"]
  },
  "witch_doctor": {
    "name": "Witch Doctor",
    "bio": "A wiry silhouette hitches forward--uneven of feature and limb, bizarre of gait, relentlessly criss-crossing the battlefield in search of that vital weak point where his talents can do most good, and most harm. Whether broken or mismade it is not clear, but still, none can doubt the power carried in his twisted physique. A long staff thumps the earth as Zharvakko the Witch Doctor advances, deploying a terrifying arsenal of fetishes, hexes and spells.  It is a body of magical knowledge learned and perfected over several lifetimes in the island highlands of Arktura, now wielded with precision accuracy against his enemies. Zharvakko can be your best friend or your worst enemy--healing allies and laying waste to all who oppose him.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "Disabler"],
    "roles_l": ["Support", "Disabler"]
  },
  "riki": {
    "name": "Riki",
    "bio": "Riki was born middle child to the great dynasty of Tahlin. With an older brother groomed for the throne, and a younger brother coddled and kept, Riki, the small middle son, seemed born for the art of invisibility.  It was an art he cultivated, and one which ultimately saved his life on the night that his people were betrayed and his family slaughtered. Of all the royal line, he alone escaped, small and agile, unassuming, using smoke as cover. He cut his way out of the royal grounds, using the advantage of surprise, quietly slitting the throats of one enemy warrior after another. Now free of his royal responsibilities, Riki uses his talents in service to a new trade: Stealth Assassin. He silences his enemies, sharpening his skills, hoping to one day take revenge on those who killed his family and robbed him of his birthright.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Escape"],
    "roles_l": ["Carry", "Escape"]
  },
  "enigma": {
    "name": "Enigma",
    "bio": "Nothing is known of Enigma's background. There are only stories and legends, most of them apocryphal, passed down through the ages. In truth, Enigma is a mystery for whom the only true biography is description: he is a universal force, a consumer of worlds. He is a being of the void, at times corporeal, other times ethereal. A beast between the planes. \r\nThere are stories that say he was once a great alchemist who tried to unlock the secrets of the universe and was cursed for his arrogance. Other legends tell that he is an ancient being of strange gravity, the abyss personified--a twisted voice from out the original darkness, before the first light in the universe. And there are older legends that say he is the first collapsed star, a black hole grown complicated and sentient--his motivations unknowable, his power inexorable, a force of destruction unleashed upon existence itself.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Disabler", "Initiator", "Jungler", "Pusher"],
    "roles_l": ["Disabler", "Initiator", "Jungler", "Pusher"]
  },
  "tinker": {
    "name": "Tinker",
    "bio": "Boush the Tinker's diminutive race is known for its intelligence, its cunning, and its prickly relationship with magic. As a matter of pride, they survive by their wits, and use only those powers of nature that may be unlocked through rational methodologies. Even this forbearance has led to a great deal of trouble, as Boush can attest. Once a key investigator of natural law, Boush the Tinker led a vast intellectual investigation into the workings of nature, founding a subterranean laboratory in the rumored, mist-wreathed wastes of the Violet Plateau. While scorning mages for the dangers they visit upon the world, Boush and his Tinker associates haughtily wrenched open a portal to some realm beyond comprehension and ushered in some nightmares of their own. A black mist rose from the cavernous interior of the Violet Plateau, shrouding it in permanent darkness from which sounds of horror perpetually emanate. Boush escaped with only his wits and the contraptions he carried, the sole Tinker to survive the Violet Plateau Incident. ",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Nuker", "Pusher"],
    "roles_l": ["Nuker", "Pusher"]
  },
  "sniper": {
    "name": "Sniper",
    "bio": "Kardel Sharpeye was born deep in the mountains of Knollen where, since time immemorial, Keen Folk have survived by hunting the strange, cliff-dwelling steepstalkers above their village, shooting them from a distance and collecting the carcasses where they fell. Sharpeye was among the best of these strange mountain keens for whom projectile weapons are but another appendage, and to shoot is as natural as to touch. \r\nOn his day of summoning, when he was to gain full standing in his village, Sharpeye took the ancient test: a single shot from the valley floor to strike a beast down from the cliffs. To miss was to be dishonored. With his entire village standing vigil, Sharpeye took his shot. A steepstalker fell; the crowd cheered.  But when the carcass was collected, the village grew silent, for the elders found that the bullet had pierced its glittering central eye then fallen to be clenched in the steepstalker's mandibles. This ominous sign was the literal opening of a dark prophecy, foretelling both greatness and exile for the gunman who made such a shot. Sharpeye the Sniper was thus, by his own skill, condemned to make his way apart from his people--and unwelcome back among them until he has fulfilled the remainder of the prophecy by attaining legendary stature on a field of battle.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry"],
    "roles_l": ["Carry"]
  },
  "necrolyte": {
    "name": "Necrophos",
    "bio": "In a time of great plague, an obscure monk of dark inclinations, one Rotund'jere, found himself promoted to the rank of Cardinal by the swift death of all his superiors. While others of the order went out to succor the ill, the newly ordained cardinal secluded himself within the Cathedral of Rumusque, busily scheming to acquire the property of dying nobles, promising them spiritual rewards if they signed over their terrestrial domains. As the plague receded to a few stubborn pockets, his behavior came to the attention of the greater order, which found him guilty of heresy and sentenced him to serve in the plague ward, ensorcelled with spells that would ensure him a slow and lingering illness. But they had not counted on his natural immunity. Rotund'jere caught the pox, but instead of dying, found it feeding his power, transforming him into a veritable plague-mage, a Pope of Pestilence. Proclaiming himself Necrophos, he travels the world, spreading plague wherever he goes, and growing in terrible power with every village his pestilential presence obliterates.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Durable"],
    "roles_l": ["Carry", "Durable"]
  },
  "warlock": {
    "name": "Warlock",
    "bio": "As Chief Curator and Head of Acquisitions for the Arcane Archives of the Ultimyr Academy, Demnok Lannik was tireless in his pursuit of lost, rare and forbidden tomes. No cursed temple was so foreboding, no cavern path so treacherous, that any concern for his own survival could dissuade him from entering if rumors hinted that some pamphlet of primordial lore might still survive in its depths. However, so often did his investigations trigger the wrath of protector entities, that he finally found it necessary to master the arts of magic. He bent himself to learning sorcery with the same thorough obsessiveness that marked his quest for incunabula, becoming the most powerful Warlock of the Academy in less time than most practitioners required to complete a course of undergraduate work. Almost as an afterthought, he carved a staff of Dreadwood and summoned into it a captive spirit from the Outer Hells. And anticipating the day when he will have recovered every last lost spellbook, he has commenced writing his own Black Grimoire. It will undoubtedly be instructive.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Initiator", "Support", "LaneSupport", "Disabler"],
    "roles_l": ["Initiator", "Support", "Lane Support", "Disabler"]
  },
  "beastmaster": {
    "name": "Beastmaster",
    "bio": "Karroch was born a child of the stocks. His mother died in childbirth; his father, a farrier for the Last King of Slom, was trampled to death when he was five. Afterward Karroch was indentured to the king's menagerie, where he grew up among all the beasts of the royal court: lions, apes, fell-deer, and things less known, things barely believed in. When the lad was seven, an explorer brought in a beast like none before seen. Dragged before the King in chains, the beast spoke, though its mouth moved not. Its words: a plea for freedom. The King only laughed and ordered the beast perform for his amusement; and when it refused, struck it with the Mad Scepter and ordered it dragged to the stocks. \r\nOver the coming months, the boy Karroch sneaked food and medicinal draughts to the wounded creature, but only managed to slow its deterioration. Wordlessly, the beast spoke to the boy, and over time their bond strengthened until the boy found he could hold up his end of a conversation.  He could, in fact, speak now to all the creatures of the King's menagerie. On the night the beast died, a rage came over the boy.  He incited the animals of the court to rebel and threw open their cages to set them amok on the palace grounds.  The Last King was mauled in the mayhem. In the chaos, one regal stag bowed to the boy who had freed him; and with Beastmaster astride him, leapt the high walls of the estate, and escaped. Now a man, Karroch the Beastmaster has not lost his ability to converse with wild creatures. He has grown into a warrior at one with nature's savagery.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Initiator", "Disabler", "Durable"],
    "roles_l": ["Initiator", "Disabler", "Durable"]
  },
  "queenofpain": {
    "name": "Queen of Pain",
    "bio": "The Ecclesiast-King of Elze nursed a desire for pain--forbidden pain. In a less prominent political figure, such desires might be considered unwise, but in a monarch of his stature, to satisfy such thirsts would have threatened the virtue of the Divine Throne itself. Therefore he turned to his dungeon full of demonologists, promising freedom to whoever could summon a personal succubus of torment and bind it entirely to his service. The creature who arrived, Akasha by name, visited upon him such exquisite torments that he named her his Secret Queen, and he began to spend all his spare moments submitting to her clever torments--eventually abdicating all his responsibilities in his pursuit of the painful pleasures that only she could bring. Queen of Pain could bring him to the brink of death, but she was rune-bound to keep him alive. At last the King's neglect of state brought on an uprising. He was dragged from his chamber and hurled from the Tower of Invocations, and at the moment of death, Queen of Pain was let loose into the world, freed from servitude--freed to visit her sufferings on anyone she deigned to notice.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Nuker", "Escape", "Carry"],
    "roles_l": ["Nuker", "Escape", "Carry"]
  },
  "venomancer": {
    "name": "Venomancer",
    "bio": "In the Acid Jungles of Jidi Isle, poison runs in the veins and bubbles in the guts of every creature that scuttles, climbs or swoops between fluorescent vines dripping with caustic sap. Yet even in this toxic menagerie, Venomancer is acknowledged as the most venomous. Ages ago, an Herbalist named Lesale crossed the Bay of Fradj by coracle, searching for potent essences that might be extracted from bark and root, and found instead a nightmare transformation. Two leagues into Jidi's jungle, Lesale encountered a reptile camouflaged as an epiphyte, which stung him as he mistakenly plucked it. In desperation, he used his partial knowledge of the jungle's herbal bounty, mixing the venom of the (swiftly throttled) reptile with the nectar of an armored orchid, to compound an antidote. In the moments before a black paralysis claimed him completely, he injected himself by orchid-thorn, and instantly fell into a coma. Seventeen years later, something stirred in the spot where he had fallen, throwing off the years' accumulation of humus: Venomancer. Lesale the Herbalist no longer--but Lesale the Deathbringer. His mind was all but erased, and his flesh had been consumed and replaced by a new type of matter--one fusing the venom of the reptile with the poisonous integument of the orchid. Jidi's Acid Jungles knew a new master, one before whom even the most vicious predators soon learned to bow or burrow for their lives. The lurid isle proved too confining, and some human hunger deep in the heart of the Venomancer drove Lesale out in search of new poisons--and new deaths to bring.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "Nuker", "Initiator", "Pusher"],
    "roles_l": ["Support", "Nuker", "Initiator", "Pusher"]
  },
  "faceless_void": {
    "name": "Faceless Void",
    "bio": "Darkterror the Faceless Void is a visitor from Claszureme, a realm outside of time. It remains a mystery why this being from another dimension believes the struggle for the Nemesis Stones is worth entering our physical plane, but apparently an upset in the balance of power in this world has repercussions in adjacent dimensions. Time means nothing to Darkterror, except as a way to thwart his foes and aid his allies. His long-view of the cosmos has given him a remote, disconnected quality, although in battle he is quite capable of making it personal.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Initiator", "Disabler", "Escape"],
    "roles_l": ["Carry", "Initiator", "Disabler", "Escape"]
  },
  "skeleton_king": {
    "name": "Wraith King",
    "bio": "For untold years, King Ostarion built a kingdom from the remains of his enemies. It was an obsessive's errand, done to pass the long eternities of a monarchy that seemed fated never to end. He believed that as long as he built up the towers of his palace, he could not die. But eventually he learned that he had been deluded... that bone itself could perish. Deeply mistrustful of flesh, he sought a more permanent way of extending his reign, and at last settled on pursuit of wraith energy, a form of pure spirit given off by certain dark souls at death. Should he infuse himself with Wraith Essence, he thought he might create a body as luminous and eternal as his ego. On the millennial solstice known as Wraith-Night, he submitted to a rite of transformation, compelling his subjects to harvest enough souls to fuel his ambition for immortality. No one knows how many of his champions died, for the only survivor who mattered was the Wraith King who rose with the sun on the following morn. Now he rarely spends a moment on his glowing throne--but strides out with sword drawn, demanding a fealty that extends far beyond death. ",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Carry", "Disabler"],
    "roles_l": ["Durable", "Carry", "Disabler"]
  },
  "death_prophet": {
    "name": "Death Prophet",
    "bio": "Krobelus was a Death Prophet--which is one way of saying she told fortunes for the wealthiest of those who wished to look beyond the veil. But after years of inquiring on behalf of others, she began to seek clues on her own fate. When death refused to yield its secrets, she tried to buy them with her life. But the ultimate price proved insufficient. Death disgorged her again and again, always holding back its deepest mysteries. Her jealousy grew. Others could die for eternity--why not she? Why must she alone be cast back on the shores of life with such tiresome regularity? Why was she not worthy of the one thing all other living creatures took for granted? Still, she would not be discouraged. Each time she returned from the grave, she brought a bit of death back with her. Wraiths followed her like fragments of her shattered soul; her blood grew thin and ectoplasmic; the feasting creatures of twilight took her for their kin.. She gave a little of her life with every demise, and it began to seem as if her end was in sight. With her dedication to death redoubled, and no client other than herself, Krobelus threw herself ever more fervently into death's abyss, intent on fulfilling the one prophecy that eluded her: That someday the Death Prophet would return from death no more.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Pusher", "Nuker", "Durable"],
    "roles_l": ["Pusher", "Nuker", "Durable"]
  },
  "phantom_assassin": {
    "name": "Phantom Assassin",
    "bio": "Through a process of divination, children are selected for upbringing by the Sisters of the Veil, an order that considers assassination a sacred part of the natural order.  The Veiled Sisters identify targets through meditation and oracular utterances.  They accept no contracts, and never seem to pursue targets for political or mercenary reasons. Their killings bear no relation to any recognizable agenda, and can seem to be completely random:  A figure of great power is no more likely to be eliminated than a peasant or a well digger. Whatever pattern the killings may contain, it is known only to them. They treat their victims as sacrifices, and death at their hand is considered an honor. Raised with no identity except that of their order, any Phantom Assassin can take the place of any other; their number is not known. Perhaps there are many, perhaps there are few. Nothing is known of what lies under the Phantom Veil. Except that this one, from time to time, when none are near enough to hear, is known to stir her veils with the forbidden whisper of her own name: Mortred.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Escape"],
    "roles_l": ["Carry", "Escape"]
  },
  "pugna": {
    "name": "Pugna",
    "bio": "In the realm of Pugna's birth, near the vents of the Nether Reaches, there stood a lamasery devoted to the Arts of Oblivion, which drew its power from the nether energies. The Grandmaster of the temple compound had himself passed into Oblivion several years prior, leaving his academy without a leader. From the moment of their master's death, the regents of the temple began rites of divination to identify their master's reincarnation, and eventually all signs converged on the immediate neighborhood. Several villages squatted in the shadow of the temple, their alleys and plazas full of the laughter of squalling children.  Pugna, a mere thirteen months of age, was but one candidate among the local brats, and on the appointed day he was presented at the temple alongside two other promising tots. The lamas offered a jumble of worn relics to the children, treasured possessions of their former grandmaster. One boy reached for a porphyry wand that had belonged to the lama...and put it in his nostril. An impish girl pulled out an amulet that had also been the lama's, and immediately swallowed it. Pugna regarded the other two coolly, gave a merry laugh, and blasted them with gouts of emerald flame, reducing them to ashes in an instant. He then snatched up the wand and amulet, saying 'Mine!' The regents hoisted the beaming Pugna on their shoulders, wrapped him in their grandmaster's vestments, and rushed him to the throne before his mood could change. Within five years, the temple itself was another pile of ash, which pleased Pugna to no end.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Nuker", "Pusher", "Support"],
    "roles_l": ["Nuker", "Pusher", "Support"]
  },
  "templar_assassin": {
    "name": "Templar Assassin",
    "bio": "Lanaya, the Templar Assassin, came to her calling by a path of curious inquiry. Possessed of a scientific bent, she spent her early years engaged in meticulous study of nature's laws--peering into grimoires of magic and alchemy, recreating experiments from charred fragments of the Violet Archives, and memorizing observations of the Keen recordkeepers. Already quiet and secretive by nature, the difficulty of acquiring these objects further reinforced her skills of stealth. Had she been less retiring, she might have become notorious among the guilds as a thief-scholar. Instead her investigations led her into far more obscure corners. As she devoted her furtive talents to unlocking the secrets of the universe, she instead unlocked a secret door that exists in nature itself: the entryway to the most Hidden Temple. The intelligences that waited beyond that portal, proved to be expecting her, and whatever mysteries they revealed in the moment of their discovery was nothing compared to the answers they held out to Lanaya should she continue in their service. She swore to protect the mysteries, but more to the point, in service to the Hidden Temple she satisfies her endless craving for understanding. In the eyes of each foe she expunges, a bit more of the mystery is revealed.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Escape"],
    "roles_l": ["Carry", "Escape"]
  },
  "viper": {
    "name": "Viper",
    "bio": "The malevolent familiar of a sadistic wizard who captured and hoped to tame him, Viper was curiously glad to have been sprung from the sealed and unchanging subterranean Nether Reaches where his race had lived for millions of years, after tectonic slippage had sealed off the Netherdrakes in luminous caverns. Viper spent some time appearing to submit to the wizard's enchainments, hoping to learn what he could of the dark magics the mage practiced. But he soon realized that few spells were as deadly as the toxins that were his birthright. Exuding an acid that swiftly ate away the bars of his cage, the Netherdrake slipped free of his confines, spit poison in the old spellcaster's eyes, and soared out to let the world know that it had a new master.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Durable"],
    "roles_l": ["Carry", "Durable"]
  },
  "luna": {
    "name": "Luna",
    "bio": "How had she been reduced to this?  She was once the Scourge of the Plains, a merciless leader of men and beasts, and able to sow terror wherever she dared.  Now she was far from her homeland, driven half mad from starvation and months of wandering, her army long dead or worse.  As she stood at the edge of an ancient forest, a pair of glowing eyes spied on from an elder branch.  Something beautiful and deadly sought a meal in the wilting dusk.  Without a sound, it turned and left.  Fury overtook her.  Clutching a rust-eaten dagger, she charged after the beast determined to reclaim even a shred of her past glory, but her quarry would not be caught.  Three times she cornered the creature among the rocks and trees, and three times she pounced only to witness its fading shadow darting further into the woods.  Yet the full moon shone brightly, and the creature's trail was easy to follow.  Arriving in a clearing atop a high hill, the beast's massive feline form sat in the open, attentive and waiting.  When the woman brandished her dagger, the creature reared and roared and charged.  Death, it seemed, had come for her at long last in this strange place.  She stood, calm and ready.  A flash of movement, and the beast snatched the dagger from her hand before vanishing into the forest.  Stillness.  Hooded figures approached. In reverent tones they revealed that Selemene, Goddess of the Moon, had chosen her, had guided her, had tested her. Unwittingly she had endured the sacred rites of the Dark Moon, warriors of the Nightsilver Woods.\r\nShe was offered a choice: join the Dark Moon and pledge herself to the service of Selemene, or leave and never return. She did not hesitate. Embracing her absolution, she renounced her bloody past, and took up a new mantle as Luna of the Dark Moon, the dreaded Moon Rider, ruthless and ever-loyal guardian of the Nightsilver Woods.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Nuker"],
    "roles_l": ["Carry", "Nuker"]
  },
  "dragon_knight": {
    "name": "Dragon Knight",
    "bio": "After years on the trail of a legendary Eldwurm, the Knight Davion found himself facing a disappointing foe: the dreaded Slyrak had grown ancient and frail, its wings tattered, its few remaining scales stricken with scale-rot, its fangs ground to nubs, and its fire-gouts no more threatening than a pack of wet matchsticks. Seeing no honor to be gained in dragon-murder, Knight Davion prepared to turn away and leave his old foe to die in peace. But a voice crept into his thoughts, and Slyrak gave a whispered plea that Davion might honor him with death in combat. Davion agreed, and found himself rewarded beyond expectation for his act of mercy: As he sank his blade in Slyrak's breast, the dragon pierced Davion's throat with a talon. As their blood mingled, Slyrak sent his power out along the Blood Route, sending all its strength and centuries of wisdom to the knight.  The dragon's death sealed their bond and Dragon Knight was born. The ancient power slumbers in the Dragon Knight Davion, waking when he calls it. Or perhaps it is the Dragon that calls the Knight...",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Durable", "Disabler", "Pusher"],
    "roles_l": ["Carry", "Durable", "Disabler", "Pusher"]
  },
  "dazzle": {
    "name": "Dazzle",
    "bio": "Each young acolyte to the Dezun order must complete a series of rites before becoming a shadow priest. The final rite, the rite of shades, is a harrowing spiritual journey through the Nothl Realm, an unpredictable domain from which not all visitants return.  Of those who do, some return mad. Others return with strange aptitudes. But all who go there are changed by their experiences. Driven by the need for enlightenment, Dazzle was the youngest of his tribe ever to request the sacred ritual. At first the order refused him, saying he was too young. But Dazzle was not to be dissuaded. Sensing something special in the headstrong young acolyte, the elders relented. Dazzle drank down the sacred potion and sat by the fire while the rest of his tribe danced through the night. In this ethereal dimension of the Nothl Realm, the properties of light and dark are inverted. Thus his brilliant healing light, beautiful to our eye, is actually a sinister kind of evil; and the darkest deeds are done in a dazzling glow. The elders' intuition was prophetic: Dazzle returned to his people as a Shadow Priest like none seen before, with the power to heal as well as to destroy. Now he uses his gift to cut down his enemies and mend his friends.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "LaneSupport"],
    "roles_l": ["Support", "Lane Support"]
  },
  "rattletrap": {
    "name": "Clockwerk",
    "bio": "Rattletrap descends from the same far-flung kindred as Sniper and Tinker, and like many of the Keen Folk, has offset his diminutive stature through the application of gadgetry and wit.  The son of the son of a clockmaker, Rattletrap was many years apprenticed to that trade before war rode down from the mountains and swept the plains villages free of such innocent vocations.  \"Your new trade is battle,\" his dying father told him as the village of their ancestors lay in charred and smoking ruins.    \r\nIt is a poor tradesman who blames his tools, and Rattletrap was never one to make excuses.  After burying his father among the ruins of their village, he set about to transform himself into the greatest tool of warfare that any world had ever seen. He vowed to never again be caught unprepared, instead using his talents to assemble a suit of powered Clockwerk armor to make the knights of other lands look like tin cans by comparison.  Now Rattletrap is alive with devices, a small but deadly warrior whose skills at ambush and destruction have risen to near-automated levels of efficiency.  An artisan of death, his mechanizations make short work of the unwary, heralding a new dawn in this age of warfare.  What time is it? It's Clockwerk time!",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Initiator", "Durable"],
    "roles_l": ["Initiator", "Durable"]
  },
  "leshrac": {
    "name": "Leshrac",
    "bio": "Leshrac, Tormented Soul, is an entity torn from the heart of nature, a liminal being that exists half in one plane of existence, half in another. His penetrating intelligence is such that he can never ignore for a moment the agonizing horror at the heart of all creation. Once a great philosopher who sought the meaning of existence, he plumbed the depths of nature with the haunted Chronoptic Crystals, and was forever altered by the hideous mysteries thereby revealed to him. Now the darkest depths of his enlightenment are illumined only by the fitful glare of his arrogance. Like other elemental characters, he is completely at one with nature, but in his case it is a nature lurid and vile. He alone sees the evil truth of reality, and has no use for those who believe the cosmos reserves a special reward for those who practice benevolence.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Nuker", "Pusher", "Disabler", "Support"],
    "roles_l": ["Nuker", "Pusher", "Disabler", "Support"]
  },
  "furion": {
    "name": "Nature's Prophet",
    "bio": "When Verodicia, Goddess of the Woods, had finished filling in the green places, having planted the coiled-up spirit in the seed, having lured the twining waters from deep within the rock, having sworn the sun its full attention to the growing things, she realized that her own time had reached its end, and like one of the leaves whose fate she had imprinted in the seed, she would fall without seeing the fruiting of her dream. It pained her to leave the world bereft, for the sprouts had not yet broken through the soil--and they would be tender and vulnerable to every sort of harm. She found in her seed pouch one last seed that she had missed in the sowing. She spoke a single word into the seed and swallowed it as she fell. Her vast body decomposed throughout the long winter, becoming the humus that would feed the seedlings in the spring. And on the morning of the vernal equinox, before the rest of the forest had begun to wake, that last seed ripened and burst in an instant. From it stepped Nature's Prophet, in full leaf, strong and wise, possessing Verodicia's power to foresee where he would be needed most in defense of the green places--and any who might be fortunate enough to call him an ally.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Jungler", "Pusher", "Carry", "Escape"],
    "roles_l": ["Jungler", "Pusher", "Carry", "Escape"]
  },
  "life_stealer": {
    "name": "Lifestealer",
    "bio": "In the dungeons of Devarque, a vengeful wizard lay in shackles, plotting his escape. He shared his cell with a gibbering creature known as N'aix, a thief cursed by the Vile Council with longevity, so that its life-sentence for theft and cozening might be as punishing as possible. Over the years, its chains had corroded, along with its sanity; N'aix retained no memory of its former life and no longer dreamt of escape. Seeing a perfect vessel for his plans, the wizard wove a spell of Infestation and cast his life-force into N'aix's body, intending to compel N'aix to sacrifice itself in a frenzy of violence while the mage returned to his body and crept away unnoticed. Instead, the wizard found his mind caught in a vortex of madness so powerful that it swept away his plans and shattered his will. Jarred to consciousness by the sudden infusion of fresh life, N'aix woke from its nightmare of madness and obeyed the disembodied voice that filled its skull, which had only the one thought: To escape. In that moment Lifestealer was born. The creature cast its mind into dungeon guards and soldiers, compelling them to open locks and cut down their companions, opening an unobstructed path to freedom while feeding on their lives. Lifestealer still wears the broken shackles as a warning that none may hold him, but on the inside remains a prisoner. Two minds inhabit the single form--a nameless creature of malevolent cunning, and the Master whose voice he pretends to obey.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Durable", "Jungler", "Escape"],
    "roles_l": ["Carry", "Durable", "Jungler", "Escape"]
  },
  "dark_seer": {
    "name": "Dark Seer",
    "bio": "Fast when he needs to be, and a cunning strategist, Ish'Kafel the Dark Seer requires no edged weapons to vanquish his enemies, relying instead on the strength of his powerful mind. His talent lies in his ability to maneuver the fight to his advantage. Hailing from a place he calls 'The Land behind the wall,' Dark Seer remains an outsider here--a warrior from a realm beyond the veil of this reality.  \r\nOnce a great general among his people, and a valiant defender of the god-king Damathryx, Dark Seer's army was wiped out by a much larger force in the final days of the Great Boundaries War. Facing certain defeat, he made one last desperate act: he led the enemy forces into the maze between the walls. At the last moment, just before capture, he crossed over--then sealed the walls forever in an explosive release of dark energy. When the dust settled, he saw that he had saved his people but found himself blinking at the sun of a different world, with no way to return.  Now he is committed to proving his worth as a military strategist, and vows to show that he's the greatest tactician this strange new world has ever seen.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Initiator", "Nuker", "Escape"],
    "roles_l": ["Initiator", "Nuker", "Escape"]
  },
  "clinkz": {
    "name": "Clinkz",
    "bio": "At the base of the Bleeding Hills stretches a thousand-league wood, a place called The Hoven, where black pools gather the tarry blood of the uplands, and the king-mage Sutherex sits in benevolent rule. Once a sworn protector of the Hoven lands, Clinkz earned a reputation for his skill with a bow. In the three-hundredth year of the king-mage, the demon Maraxiform rose from sixth hell to lay claim to the forest. In response, the king-mage decreed an unbreakable spell: to any who slew the demon would be granted Life Without End.\r\nUnaware of the spell, Clinkz waded into battle, defending his lands against the demon's fiery onslaught. Clinkz drove Maraxiform back to the gates of sixth-hell itself, where on that fiery threshold the two locked in a mortal conflict. Grievously wounded, the demon let out a blast of hellfire as Clinkz loosed his final arrow. The arrow struck the demon true as hellfire poured out across the land, lighting the black pools and burning Clinkz alive at the instant of the demon's death. Thus, the mage's spell took effect at the very moment of the archer's conflagration, preserving him in this unholy state, leaving him a being of bones and rage, caught in the very act of dying, carrying hell's breath with him on his journey into eternity.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Escape"],
    "roles_l": ["Carry", "Escape"]
  },
  "omniknight": {
    "name": "Omniknight",
    "bio": "Purist Thunderwrath was a hard-fighting, road-worn, deeply committed knight, sworn to the order in which he had grown up as squire to elder knights of great reputation. He had spent his entire life in the service of the Omniscience, the All Seeing One. Theirs was a holy struggle, and so embedded was he in his duty that he never questioned it so long as he had the strength to fight and the impetuous valor that comes with youth. But over the long years of the crusade, as his elders passed away and were buried in sorry graves at the side of muddy tracks, as his bond-brothers fell in battle to uncouth creatures that refused to bow to the Omniscience, as his own squires were chewed away by ambush and plague and bad water, he began to question the meaning of his vows--the meaning of the whole crusade. After deep meditation, he parted ways with his army and commenced a long trek back to the cave-riddled cliffs of Emauracus, and there he set a challenge to the priests of the Omniscience. No knight had ever questioned them before, and they tried to throw him into the pit of sacrifice, but Purist would not be moved. For as he faced them down, he began to glow with a holy light, and they saw that the Omniscience had chosen to reveal Itself to him. The Elder Hierophant led him on a journey of weeks down into the deepest chamber, the holy of holies, where waited not some abstract concept of wisdom and insight, not some carved relic requiring an injection of imagination to believe in, but the old one itself. It had not merely dwelt in those rocks for billions of aeons; no, It had created them. The Omniscience had formed the immense mineral shell of the planet around itself, as a defense against the numerous terrors of space. Thus the All Seeing One claimed to have created the world, and given the other truths revealed to Purist on that day, the knight had no reason to refute the story. Perhaps the Omniscience is a liar, deep in its prison of stone, and not the world's creator at all, but Omniknight never again questioned his faith. His campaign had meaning at last. And there can be no question that the glorious powers that imbue him, and give his companions such strength in battle, are real beyond any doubt.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "LaneSupport", "Support"],
    "roles_l": ["Durable", "Lane Support", "Support"]
  },
  "enchantress": {
    "name": "Enchantress",
    "bio": "Aiushtha appears to be an innocent, carefree creature of the woods, and while this is certainly true, it is hardly the sum of her story. She well understands the suffering of the natural world. She has wandered far, and fared through forests bright and drear, in every clime and every season, gathering friends, sharing news, bringing laughter and healing wherever she goes. For in worlds wracked by war, forests are leveled for the building of ships and siege engines; and even in places of peace, the woods are stripped for the building of homes, and as fuel for countless hearths. Aiushtha hears the pleas of the small creatures, the furtive folk who need green shade and a leafy canopy to thrive. She lends her ears to those who have no other listeners. She carries their stories from the wood to the world, believing that her own good cheer is a kind of Enchantment, that can itself fulfill the promise of a verdant future.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "Pusher", "Durable", "Jungler"],
    "roles_l": ["Support", "Pusher", "Durable", "Jungler"]
  },
  "huskar": {
    "name": "Huskar",
    "bio": "Emerging from the throes of the sacred Nothl Realm, Huskar opened his eyes to see the prodigal shadow priest Dazzle working a deep incantation over him. Against the ancient rites of the Dezun Order, Huskar's spirit had been saved from eternity, but like all who encounter the Nothl he found himself irrevocably changed. No longer at the mercy of a mortal body, his very lifeblood became a source of incredible power; every drop spilled was returned tenfold with a fierce, burning energy. However this newfound gift infuriated Huskar, for in his rescue from the Nothl, Dazzle had denied him a place among the gods. He had been denied his own holy sacrifice. In time the elders of the order sought to expand their influence and Huskar, they agreed, would be a formidable tool in their campaign. Yet becoming a mere weapon for the order that denied him his birthright only upset him further. As the first embers of war appeared on the horizon, he fled his ancestral home to find new allies, all the while seeking a cause worthy of unleashing the power his total sacrifice could bring.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Initiator", "Durable"],
    "roles_l": ["Carry", "Initiator", "Durable"]
  },
  "night_stalker": {
    "name": "Night Stalker",
    "bio": "Of the Night Stalker, there is no history, only stories. There are ancient tales woven into the lore of every race and every culture, of an impossible time before sunlight and daytime, when night reigned alone and the world was covered with the creatures of darkness--creatures like Balanar the Night Stalker. \r\nIt is said that on the dawn of the First Day, all the night creatures perished. All, that is, save one. Evil's embodiment, Night Stalker delights in his malevolence. He created the primal role of the Night Terror, the Boogeyman, and as long as there have been younglings, his is the specter summoned to terrify them. This is a role he relishes; nor are these empty theatrics. He does indeed stalk the unwary, the defenseless, those who have strayed beyond the lighted paths or denied the warnings of their communities. Night Stalker serves as living proof that every child's worst nightmare....is true.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Initiator"],
    "roles_l": ["Durable", "Initiator"]
  },
  "broodmother": {
    "name": "Broodmother",
    "bio": "For centuries, Black Arachnia the Broodmother lurked in the dark lava tubes beneath the smoldering caldera of Mount Pyrotheos, raising millions of spiderlings in safety before sending them to find prey in the wide world above. In a later age, the Vizier of Greed, Ptholopthales, erected his lodestone ziggurat on the slopes of the dead volcano, knowing that any looters who sought his magnetic wealth must survive the spider-haunted passages. After millennia of maternal peace, Black Arachnia found herself beset by a steady trickle of furfeet and cutpurses, bold knights and noble youths--all of them delicious, certainly, and yet tending to create a less than nurturing environment for her innocent offspring. Tiring of the intrusions, she paid a visit to Ptholopthales; and when he proved unwilling to discuss a compromise, she wrapped the Vizier in silk and set him aside to be the centerpiece of a special birthday feast. Unfortunately, the absence of the Magnetic Ziggurat's master merely emboldened a new generation of intruders. When one of her newborns was trodden underfoot by a clumsy adventurer, she reached the end of her silken rope. Broodmother headed for the surface, declaring her intent to rid the world of each and every possible invader, down to the last Hero if necessary, until she could ensure her nursery might once more be a safe and wholesome environment for her precious spiderspawn.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Pusher", "Carry", "Escape"],
    "roles_l": ["Pusher", "Carry", "Escape"]
  },
  "bounty_hunter": {
    "name": "Bounty Hunter",
    "bio": "When the hunted tell tales of Gondar the Bounty Hunter, none are sure of which are true. In whispered tones they say he was abandoned as a kit, learning his skill in tracking as a matter of simple survival. Others hear he was an orphan of war, taken in by the great Soruq the Hunter to learn the master's skill with a blade as they plumbed the dark forests for big game. Still others believe he was a lowly street urchin raised among a guild of cutpurses and thieves, trained in the arts of stealth and misdirection. Around campfires in the wild countryside his quarry speaks the rumors of Gondar's work, growing ever more fearful: they say it was he who tracked down the tyrant King Goff years after the mad regent went into hiding, delivering his head and scepter as proof. That it was he who infiltrated the rebel camps at Highseat, finally bringing the legendary thief White Cape to be judged for his crimes. And that it was he who ended the career of Soruq the Hunter, condemned as a criminal for killing the Prince's prized hellkite. The tales of Gondar's incredible skill stretch on, with each daring feat more unbelievable than the last, each target more elusive. For the right price, the hunted know, anyone can be found. For the right price, even the mightiest may find fear in the shadows.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Escape", "Nuker"],
    "roles_l": ["Carry", "Escape", "Nuker"]
  },
  "weaver": {
    "name": "Weaver",
    "bio": "The fabric of creation needs constant care, lest it grow tattered; for when it unravels, whole worlds come undone. It is the work of the Weavers to keep the fabric tight, to repair worn spots in the mesh of reality. They also defend from the things that gnaw and lay their eggs in frayed regions, whose young can quickly devour an entire universe if the Weavers let their attention lapse. Skitskurr was a master Weaver, charged with keeping one small patch of creation tightly woven and unfaded. But the job was not enough to satisfy. It nagged him that the original work of creation all lay in the past; the Loom had done its work and travelled on. He wanted to create rather than merely maintain--to weave worlds of his own devising.  He began making small changes to his domain, but the thrill of creation proved addictive, and his strokes became bolder, pulling against the pattern that the Loom had woven. The guardians came, with their scissors, and Weaver's world was pared off, snipped from the cosmic tapestry, which they rewove without him in it. Skitskurr found himself alone, apart from his kind, a state that would have been torment for any other Weaver. But Skitskurr rejoiced, for now he was free. Free to create for himself, to begin anew. The raw materials he needed to weave a new reality were all around him. All he had to do was tear apart this old world at the seams.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Escape"],
    "roles_l": ["Carry", "Escape"]
  },
  "jakiro": {
    "name": "Jakiro",
    "bio": "Even among magical beasts, a twin-headed dragon is a freak. Equal parts ice and fire, cunning and rage, the creature known as Jakiro glides over charred and ice-bound battlefields, laying waste to any who would bear arms against it. Pyrexae dragon clutches always contain two fledglings. Famous for their viciousness even from the first moments of life, newly hatched dragons of this species will try to kill their sibling while still in the nest. Only the strongest survive. In this way is the strength of the Pyrexae line ensured. By some accident of nature, the freak Jakiro hatched from a single egg, combining in a single individual the full range of abilities found within the diverse Pyrexae species. Trapped within the armature of its monstrous body, the powers of ice and fire combine, and now no enemy is safe.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Nuker", "Pusher", "LaneSupport", "Disabler"],
    "roles_l": ["Nuker", "Pusher", "Lane Support", "Disabler"]
  },
  "batrider": {
    "name": "Batrider",
    "bio": "There is no such thing as harmony among the creatures of the Yama Raskav Jungle. By bite, or claw, or pincer, or hoof, even the slightest sign of weakness means a swift death. They say the Rider was just a lad cutting chaff in his family's field when he was taken, swept up by a massive morde-bat looking for take-out. But this boy had a better idea, and wriggled his way from his captor's grip, onto the beast's back, and hacked it down with his tools. Emerging from the bloody wreckage and intoxicated by the thrill of flight, the boy realized he'd found his calling.  The boy grew, and every summer he'd return to his family's field, often setting out into the bush seeking to reclaim that first thrill of facing death in the form of jaws or a fatal fall. The years went on, but his fire only grew stronger. He studied the overgrowth, plunging deeper with each expedition, until finally he found his way to the caves at the heart of hostility. They say the Rider, on the eve of a scorching summer night, had nothing but a rope, a bottle of liquid courage and a burning determination to feel the skies once more, when he plunged inside...",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Initiator", "Disabler", "Nuker", "Escape"],
    "roles_l": ["Initiator", "Disabler", "Nuker", "Escape"]
  },
  "chen": {
    "name": "Chen",
    "bio": "Born in the godless Hazhadal Barrens, Chen came of age among the outlaw tribes who eked out an existence in the shimmering heat of the desert.  Using an ancient form of animal enthrallment, Chen's people husbanded the hardy desert locuthi, a stunted species of burrowing dragon that melted desert sands into tubes of glass where twice-a-year rains collected.  Always on the edge of starvation and thirst, fighting amongst their neighbors and each other, Chen's clan made the mistake, one fateful day, of ambushing the wrong caravan. \r\nIn the vicious battle that followed, Chen's clan was outmatched.  The armored Knights of the Fold made short work of the enthralled locuthi, who attacked and died in waves.  With their dragons dead, the tribesmen followed. Chen struggled, and slashed, and clawed, and perished--or would have. Defeated, on his knees, he faced his execution with humility, offering his neck to the blade. Moved by Chen's obvious courage, the executioner halted his sword. Instead of the blade, Chen was given a choice: death or conversion. Chen took to the faith with a ferocity. He joined the Fold and earned his armor one bloody conversion at a time. Now, with the fanaticism of a convert, and with his powers of animal enthrallment at their peak, he seeks out unbelievers and introduces them to their final reward.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "Jungler", "Pusher"],
    "roles_l": ["Support", "Jungler", "Pusher"]
  },
  "spectre": {
    "name": "Spectre",
    "bio": "Just as higher states of energy seek a lower level, the Spectre known as Mercurial is a being of intense and violent energy who finds herself irresistibly drawn to scenes of strife as they unfold in the physical world. While her normal spectral state transcends sensory limitations, each time she takes on a physical manifestation, she is stricken by a loss of self--though not of purpose. In the clash of combat, her identity shatters and reconfigures, and she begins to regain awareness. She grasps that she is Mercurial the Spectre--and that all of her Haunts are but shadows of the one true Spectre. Focus comes in the struggle for survival; her true mind reasserts itself; until in the final moments of victory or defeat, she transcends matter and is restored once more to her eternal form.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Durable"],
    "roles_l": ["Carry", "Durable"]
  },
  "doom_bringer": {
    "name": "Doom",
    "bio": "He that burns and is not consumed, devours and is never sated, kills and is beyond all judgment--Lucifer brings doom to all who would stand against him. Bearing away souls on the tip of a fiery sword, he is the Fallen One, a once-favored general from the realm behind the light, cast out for the sin of defiance: he would not kneel. \r\nSix times his name was tolled from the great bell of Vashundol. Six and sixty times his wings were branded, until only smoking stumps remained. Without wings, he slipped loose from the tethers that bound him within the light and he fell screaming to earth. A crater in the desert, Paradise lost.  Now he attacks without mercy, without motive, the only living being able to move freely between the seven dark dominions. Lashed by inescapable needs, twisted by unimaginable talents, Doom carries his own hell with him wherever he goes. Defiant to the last. Eventually, the world will belong to Doom.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Carry", "Nuker"],
    "roles_l": ["Durable", "Carry", "Nuker"]
  },
  "ancient_apparition": {
    "name": "Ancient Apparition",
    "bio": "Kaldr, the Ancient Apparition, is an image projected from outside time. He springs from the cold, infinite void that both predates the universe and awaits its end. Kaldr is, Kaldr was, Kaldr shall be...and what we perceive, powerful as it appears to us, is but the faintest faded echo of the true, eternal Kaldr. Some believe that as the cosmos ages and approaches its final moments, the brightness and power of Kaldr will also intensify--that the Ancient Apparition will grow younger and stronger as eternity's end draws nigh. His grip of ice will bring all matter to a stop, his image will cast a light too terrible to behold. An Apparition no longer!",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "Disabler"],
    "roles_l": ["Support", "Disabler"]
  },
  "ursa": {
    "name": "Ursa",
    "bio": "Ulfsaar the Warrior is the fiercest member of an ursine tribe, protective of his land and his people. During the long winters, while the mothers sleep and nurse their cubs, the males patrol the lands above as tireless, vigilant defenders of their ancient ways. Hearing dim but growing rumors of a spreading evil, Ulfsaar headed out beyond the boundaries of his wild wooded homeland, intending to track down and destroy the threat at its source, before it could endanger his people. He is a proud creature with a bright strong spirit, utterly trustworthy, a staunch ally and defender.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Jungler", "Durable"],
    "roles_l": ["Carry", "Jungler", "Durable"]
  },
  "spirit_breaker": {
    "name": "Spirit Breaker",
    "bio": "Barathrum the Spirit Breaker is a lordly and powerful being, a fierce and elemental intelligence which chose to plane-shift into the world of matter to take part in events with repercussions in the elemental realm that is his home. To that end, he assembled a form that would serve him well, both in our world and out of it. His physical form borrows from the strengths of this world, blending features both bovine and simian--horns, hooves and hands--as outward emblems of his inner qualities of strength, speed and cunning. He wears a ring in his nose, as a reminder that he serves a hidden master, and that this world in which he works is but a shadow of the real one.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Carry", "Initiator", "Disabler"],
    "roles_l": ["Durable", "Carry", "Initiator", "Disabler"]
  },
  "gyrocopter": {
    "name": "Gyrocopter",
    "bio": "After serving through a lifetime of wars, upheaval, riots, and revolutions, the brass figured Aurel had seen enough. But in addition to a few trinkets and his considerable pension, the erstwhile engineer left with something far more interesting: a long-forgotten, incomplete schematic for a Gyrocopter, the world's first manned, non-magical flying device. Retiring to the tropical obscurity of the Ash Archipelago with little else but time and money, he set to work building the device. As the years wore on and the remains of failed prototypes began to pile up, he began to wonder if mechanical flight was even possible. A decade and a day after his retirement, on a sunny afternoon with a southerly breeze, Aurel sat in his latest attempt bristling with indignation and expectant failure. With a grunt of effort he pulled the ignition cord and covered his head, waiting for the inevitable explosion. However to his great surprise he began to lift and, following a few panicked adjustments, stabilize. Within an hour, he was ducking and weaving with the breeze, level with the gulls, and Aurel found himself filled with the breathless wonder of flight. As dusk settled in he set a course back to his workshop, but no sooner had he turned his craft when a cannonball tore through his tailfin. Disentangling himself from the wreckage, he swam toward the nearest piece of land in sight, and cursed to see the ship responsible for the cannonball collecting the debris. Days later, when Aurel returned to his workshop, he set to work on yet another gyrocopter, this one capable of carrying a much heavier, more dangerous payload.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Disabler", "Initiator", "Nuker"],
    "roles_l": ["Disabler", "Initiator", "Nuker"]
  },
  "alchemist": {
    "name": "Alchemist",
    "bio": "The sacred science of Chymistry was a Darkbrew family tradition, but no Darkbrew had ever shown the kind of creativity, ambition, and recklessness of young Razzil. However, when adulthood came calling he pushed aside the family trade to try his hand at manufacturing gold through Alchemy. In an act of audacity befitting his reputation, Razzil announced he would transmute an entire mountain into gold. Following two decades of research and spending and preparation, he failed spectacularly, quickly finding himself imprisoned for the widespread destruction his experiment wrought. Yet Razzil was never one to take a setback lightly, and sought escape to continue his research. When his new cellmate turned out to be a fierce ogre, he found just the opportunity he needed. After convincing the ogre not to eat him, Razzil set about carefully concocting a tincture for it to drink, made from the moulds and mosses growing in the prison stone work. In a week's time, it seemed ready. When the ogre drank the potion, it flew into an unstoppable berserker rage, destroying the cell bars and exploding through walls and guards alike. They soon found themselves lost somewhere in the forest surrounding the city with a trail of wreckage in their wake and no signs of pursuit.  In the tonic's afterglow, the ogre seemed serene, happy, and even eager. Resolving to work together, the pair set off to collect the materials needed to attempt Razzil's Alchemic transmutation once more.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Carry", "Disabler"],
    "roles_l": ["Durable", "Carry", "Disabler"]
  },
  "invoker": {
    "name": "Invoker",
    "bio": "In its earliest, and some would say most potent form, magic was primarily the art of memory. It required no technology, no wands or appurtenances other than the mind of the magician. All the trappings of ritual were merely mnemonic devices, meant to allow the practitioner to recall in rich detail the specific mental formulae that unlocked a spell's power. The greatest mages in those days were the ones blessed with the greatest memories, and yet so complex were the invocations that all wizards were forced to specialize. The most devoted might hope in a lifetime to have adequate recollection of three spells--four at most. Ordinary wizards were content to know two, and it was not uncommon for a village mage to know only one--with even that requiring him to consult grimoires as an aid against forgetfulness on the rare occasions when he might be called to use it. But among these early practitioners there was one exception, a genius of vast intellect and prodigious memory who came to be known as the Invoker. In his youth, the precocious wizard mastered not four, not five, not even seven incantations: He could command no fewer than ten spells, and cast them instantly. Many more he learned but found useless, and would practice once then purge from his mind forever, to make room for more practical invocations. One such spell was the Sempiternal Cantrap--a longevity spell of such power that those who cast it in the world's first days are among us still (unless they have been crushed to atoms). Most of these quasi-immortals live quietly, afraid to admit their secret: But Invoker is not one to keep his gifts hidden. He is ancient, learned beyond all others, and his mind somehow still has space to contain an immense sense of his own worth...as well as the Invocations with which he amuses himself through the long slow twilight of the world's dying days.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Nuker", "Initiator", "Escape"],
    "roles_l": ["Carry", "Nuker", "Initiator", "Escape"]
  },
  "silencer": {
    "name": "Silencer",
    "bio": "Part of the seventh and final generation of a carefully designed pedigree, Nortrom was bred by the ancient order of the Aeol Drias to be the greatest magic user the world had ever seen. He was the prophesied one, the culmination of two-hundred years of careful pairings, a war-mage who would bring glory to the order, and destruction to their sworn enemies, The Knights of the Fold. \r\nRaised with other young mages in a hidden cantonment among the hills of the Hazhadal barrens, the order's preceptors waited for Nortrom's abilities to manifest. While the other students honed their talents with fire, or ice, or incantatory spells, Nortrom sat silent and talentless, unable to cast so much as a hex. As the day of final testing approached, he still hadn't found his magic. In disgust, the preceptors berated him, while the children laughed. \"You are no mage,\" the head of the order declared. Still, Nortrom did not slink away. He entered the day of testing and faced down the young mages who had mocked him. And then his preceptors learned a valuable lesson: a lack of magic can be the greatest magic of all. Nortrom silenced the young mages one by one and defeated them in single combat, until he alone stood as champion of the Aeol Drias, in fulfillment of the prophecy.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "Carry", "Initiator"],
    "roles_l": ["Support", "Carry", "Initiator"]
  },
  "obsidian_destroyer": {
    "name": "Outworld Devourer",
    "bio": "One of a lordly and magisterial race, Harbinger prowls the edge of the Void, sole surviving sentry of an outpost on the world at the rim of the abyss. From this jagged crystalline Outworld, forever on guard, he has gazed for eternities into the heavens, alert for any stirring in the bottomless night beyond the stars. Imprinted deep in the shining lattices of his intellect lies a resonant pattern akin to prophecy, a dark music implying that eventually some evil will wake out there, beyond the edges of creation, and turn its attention to our world. With his whole being focused on his vigil, Outworld Devourer paid little attention to events closer in to the sun. But at last the clamor of the Ancients, and a sense of growing threat from within as well as without, sent him winging sunward to visit the plains of war. Harbinger's place in our own prophecies is unambiguous: he must be considered an omen of worse things to come. But his arrival in itself is bad enough. ",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry"],
    "roles_l": ["Carry"]
  },
  "lycan": {
    "name": "Lycan",
    "bio": "Banehallow was noble-born to the house of Ambry, the greatest of the landed castes in the old kingdom of Slom. Before the Fall, as the King's wants grew strange, and his court grew crowded with sorcerers and charlatans, the house of Ambry was the first to rise against the avarice of the throne. No longer willing to pay homage and fealty, they instead sent six-thousand swords into the capital, where they were wiped out in the Massacre of the Apostates. And then came the teeth behind the old truth: When you strike a king's neck, you had better take his head. Enraged by the betrayal, the king exterminated the vast Ambry bloodline, sparing only the lord of the house and his youngest son, Banehallow. Before all the royal court, with the disgraced lord chained to the ornate marble floor, the King bade his magicians transform the boy into a wolf so that he might tear out his own father's throat. \"Do this,\" the king said, \"so that Lord Ambry will understand the bite of betrayal.\" Powerful magic was invoked, and the child was transformed. But though his body was changed, his spirit remained intact, and instead of biting the exposed neck of his father, he attacked his handlers, tearing them to pieces. A dozen of the King's knights perished under the wolf's teeth before they managed to drive it off into the night. Lord Ambry laughed from his chains even as the King ran him through with a sword. Now the heir to the lost house of Ambry, Banehallow wanders the trail as the Lycan, part warrior, part wolf, in search of justice for all that he lost.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Jungler", "Pusher", "Durable"],
    "roles_l": ["Carry", "Jungler", "Pusher", "Durable"]
  },
  "brewmaster": {
    "name": "Brewmaster",
    "bio": "Deep in the Wailing Mountains, in a valley beneath the Ruined City, the ancient Order of the Oyo has for centuries practiced its rites of holy reverie, communing with the spirit realm in grand festivals of drink.  Born to a mother's flesh by a Celestial father, the youth known as Mangix was the first to grow up with the talents of both lineages.  He trained with the greatest aesthetes of the Order, eventually earning, through diligent drunkenness, the right to challenge for the title of Brewmaster, that appellation most honored among the contemplative malt-brewing sect.   \r\nAs much drinking competition as mortal combat, Mangix for nine days drank and fought the elder master.  For nine nights they stumbled and whirled, chugged and struck, until at last the elder warrior collapsed into a drunken stupor, and a new Brewmaster was named.  Now the new, young Brewmaster calls upon the strength of his Oyo forebears to speed his staff.  When using magic, it is to his spirit ancestors that he turns.  Like all Brewmasters before him, he was sent out from his people with a single mission.  He wanders the land, striving toward enlightenment through drink, searching for the answer to the ancient spiritual schism.  Hoping to think the single thought that will unite the spirit and physical planes again.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Durable", "Initiator", "Pusher"],
    "roles_l": ["Carry", "Durable", "Initiator", "Pusher"]
  },
  "shadow_demon": {
    "name": "Shadow Demon",
    "bio": "Among the sovereign Demons with explicit access to this world, Doom scarcely bothers with the affairs of Noninfernals and Lesser Spectral Consorts, while Shadow Fiend passes through almost exclusively on collecting expeditions. The Shadow Demon, however, has always taken a deep and abiding interest in the material plane, as if sensing that mastery of this gritty dimensional nexus might be the key to total domination of all realities. Summoned first by minor wizards, the Shadow Demon granted every wish and put on increasingly impressive displays of power until he had the full attention of the greatest demonologists, and through them the various lords, tyrants, autarchs and heirophants who depended on sorcery to buttress their mundane power. So great was his deception that all his summoners considered themselves the master and Shadow Demon the servant; meanwhile, he eroded their identities and made their minds his own. In the end, most members of the cult were hollow puppets, extensions of his evil will. What Shadow Demon's next step would have been remains open to speculation, for around this time, Nevermore the Shadow Fiend bit into a particularly nasty-tasting soul and discovered that it held nothing but a foul nougat of Shadow Demon's essence. Alerted that a coup was underway, and that the ancient equilibrium of the Umbral Pact was about to be destabilized, Doom and Shadow Fiend briefly joined forces to destroy the burgeoning cult. Combining spells of incredible force, they undid Shadow Demon's centuries of patient work, reducing his cult to smithereens--and all its members to a bloody splatter. Nothing remained except a tiny speck of demon shadow. Immortal and irreducible, this mote of evil was enough to seed the Shadow Demon's next scheme, and in fits and starts, over further centuries, he began to regroup. Whatever that speck of shadow touched, it tainted, and its influence gradually grew. A chaos of damaged parts pulled together, reknit, and combined to give Shadow Demon a form even stronger than his former. He is all but complete now, and his plan for infinite dominion lacks all of its former weaknesses. It would seem that such a being of pure malice and malevolence, a threat to all creation, would be forever out of place in our world...yet Shadow Demon does not lack for followers. ",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "Disabler", "Nuker"],
    "roles_l": ["Support", "Disabler", "Nuker"]
  },
  "lone_druid": {
    "name": "Lone Druid",
    "bio": "Long before the first words of the first histories there rose the druidic Bear Clan. Wise and just they were, and focused in their ways to seek an understanding of the natural order. The arch forces of nature saw this, and so sought the most learned among them. Wise old Sylla, clan justiciar and seer, stepped forward for his kin, and to him was given the Seed with these words: 'When all of the world has dimmed, when civilization has left these lands, when the world is slain and wracked by the endless deserts at the end of ages, plant the Seed.' As he grasped his trust, Sylla felt his years recede and his vitality returned. Vast knowledge burst into his mind. He found himself able to project his very will into reality and, with some concentration, alter his own physical form as well. Yet subtle whispers and cruel ears brought word of the Seed and its power to other peoples, and a terrible war crashed upon the Bear Clan. As his ancestral home burned, Sylla took his burden and fled to the wild places. Ages passed, and time and myth forgot the Bear Clan, forgot Sylla and the Seed, forgot wondrous civilizations that rose and fell in Bear Clan's wake. For millenia Sylla has waited, waited for word from his deities, waited for peace to come to the ever warring realms, waited in exile and in secret for the end of all things and for the conclusion of his sacred commitment, preparing himself always to face and destroy whatever would dare threaten his purpose.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry", "Durable", "Pusher", "Jungler"],
    "roles_l": ["Carry", "Durable", "Pusher", "Jungler"]
  },
  "chaos_knight": {
    "name": "Chaos Knight",
    "bio": "The veteran of countless battles on a thousand worlds, Chaos Knight hails from a far upstream plane where the fundamental laws of the universe have found sentient expression.  Of all the ancient Fundamentals, he is the oldest and most tireless, endlessly searching out a being he knows only as \"The Light.\"  Long ago the Light ventured out from the progenitor realm, in defiance of the first covenant.  Now Chaos Knight shifts from plane to plane, always on the hunt to extinguish the Light wherever he finds it.  A thousand times he has snuffed out the source, and always he slides into another plane to continue his search anew.  \r\nUpon his steed Armageddon he rides, wading into battle with maniacal frenzy, drawing strength from the disorder of the universe.  A physical manifestation of chaos itself, in times of need he calls upon other versions of himself from other planes, and together these dark horsemen ride into battle, as unstoppable as any force of nature.  Only when the last Light of the world is scoured from existence will the search be ended.  Where rides the Chaos Knight, death soon follows.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Disabler", "Durable", "Pusher"],
    "roles_l": ["Carry", "Disabler", "Durable", "Pusher"]
  },
  "meepo": {
    "name": "Meepo",
    "bio": "\"If you ask me, life is all about who you know and what you can find. When you live up in the Riftshadow Ruins, just finding food can be tough. So you need to cut corners, you need to scrounge, you need to know your strengths. Some of the beasts up there can kill you, so you need a way to trap the weak and duck the strong. On the upside, the ruins have history, and history is worth a lot to some people. There used to be a palace there, where they had all these dark rituals. Bad stuff. If you survived the ceremony, they would shatter a crystal and split your soul into pieces. They made great art though! Sculptures and such. Let me tell you: sometimes you stumble onto some of those old carvings. Take a pack full of those to town and sell them, then get yourself food for a few weeks. If luck is really on your side, you might find a Riftshadow crystal. Get it appraised and start asking around. Someone always knows some crazy fool looking for this kind of thing. If all else fails, sell it to a Magus the next time one's in town. They love that stuff. Still, whatever you do, be careful handling those crystals. You do not want one to go off on you. It really hurts.\"",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Disabler", "Initiator"],
    "roles_l": ["Carry", "Disabler", "Initiator"]
  },
  "treant": {
    "name": "Treant Protector",
    "bio": "Far to the west, in the mountains beyond the Vale of Augury, lie the remains of an ancient power, a fount of eldritch energy nestled deep in the high woods. It is said that the things that grow here, grow strangely. To the forces of nature this is a sacred place, made to stay hidden and unknown. Many are the traps and dangers of this land.  There are all-consuming grasses, crossbred fauna and poisonous flowers, but none are so fierce as the mighty Treant Protectors. These ageless, titanic beings, charged with keeping the peace in this dangerous land, ensure that none within encroach without reason, and none without poach their secrets. For time untold they tended to their holy ground, uninterrupted, only dimly aware of the changing world beyond. Yet inevitably the wider world grew aware of this untamed land, and with each passing winter the outsiders grew bolder. Soon they arrived with tools to cut and with flames to burn, and often the Treants would ponder: who are these fragile, industrious creatures? What now had become of the wild, green world? There came and went an age of questions and of doubts, a thousand summers of long traditions set to scrutiny, while more and more the outsiders died and fed their earth. When all that bloomed had finally finished their say, curiosity had overcome caution. It was decided: a lone Protector would be sent into the wider world, and instructed to wander until the glaciers arose once more, to observe the changing land and its creatures, and to discover what unknown dangers could threaten their sacred ground.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Initiator", "LaneSupport", "Disabler"],
    "roles_l": ["Durable", "Initiator", "Lane Support", "Disabler"]
  },
  "ogre_magi": {
    "name": "Ogre Magi",
    "bio": "The ordinary ogre is the creature for whom the phrase 'As dumb as a bag of rock hammers' was coined. In his natural state, an ogre is supremely incapable of doing or deciding anything. Clothed in dirt, he sometimes finds himself accidentally draped in animal skins after eating lanekill. Not an especially social creature, he is most often found affectionately consorting with the boulders or tree-stumps he has mistaken for kin (a factor that may explain the ogre's low rate of reproduction).  However, once every generation or so, the ogre race is blessed with the birth of a two-headed Ogre Magi, who is immediately given the traditional name of Aggron Stonebreak, the name of the first and perhaps only wise ogre in their line's history. With two heads, Ogre Magi finds it possible to function at a level most other creatures manage with one. And while the Ogre Magi will win no debates (even with itself), it is graced with a divine quality known as Dumb Luck--a propensity for serendipitous strokes of fortune which have allowed the ogre race to flourish in spite of enemies, harsh weather, and an inability to feed itself.  It's as if the Goddess of Luck, filled with pity for the sadly inept species, has taken Ogre Magi under her wing. And who could blame her? Poor things.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Nuker", "Disabler", "Durable"],
    "roles_l": ["Nuker", "Disabler", "Durable"]
  },
  "undying": {
    "name": "Undying",
    "bio": "How long has it been since he lost his name? The torn ruin of his mind no longer knows.\r\nDimly he recalls armor and banners and grim-faced kin riding at his side. He remembers a battle: pain and fear as pale hands ripped him from his saddle. He remembers terror as they threw him into the yawning pit of the Dead God alongside his brothers, to hear the Dirge and be consumed into nothingness. In the darkness below, time left them. Thought left them. Sanity left them. Hunger, however, did not. They turned on each other with split fingernails and shattered teeth. Then it came: distant at first, a fragile note at the edge of perception, joined by another, then another, inescapable and unending. The chorus grew into a living wall of sound pulsing in his mind until no other thought survived. With the Dirge consuming him, he opened his arms to the Dead God and welcomed his obliteration. Yet destruction was not what he'd been chosen for. The Dead God demanded war. In the belly of the great nothing, he was granted a new purpose: to spread the Dirge across the land, to rally the sleepless dead against the living. He was to become the Undying, the herald of the Dead God, to rise and fall and rise again whenever his body failed him. To trudge on through death unending, that the Dirge might never end.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Pusher", "Disabler", "Initiator"],
    "roles_l": ["Durable", "Pusher", "Disabler", "Initiator"]
  },
  "rubick": {
    "name": "Rubick",
    "bio": "Any mage can cast a spell or two, and a few may even study long enough to become a wizard, but only the most talented are allowed to be recognized as a Magus. Yet as with any sorcerer's circle, a sense of community has never guaranteed competitive courtesy.\r\nAlready a renowned duelist and scholar of the grander world of sorcery, it had never occurred to Rubick that he might perhaps be Magus material until he was in the midst of his seventh assassination attempt. As he casually tossed the twelfth of a string of would-be killers from a high balcony, it dawned on him how utterly unimaginative the attempts on his life had become. Where once the interruption of a fingersnap or firehand might have put a cheerful spring in his step, it had all become so very predictable. He craved greater competition. Therefore, donning his combat mask, he did what any wizard seeking to ascend the ranks would do: he announced his intention to kill a Magus.\r\nRubick quickly discovered that to threaten one Magus is to threaten them all, and they fell upon him in force. Each antagonist's spell was an unstoppable torrent of energy, and every attack a calculated killing blow. But very soon something occurred that Rubick's foes found unexpected: their arts appeared to turn against them. Inside the magic maelstrom, Rubick chuckled, subtly reading and replicating the powers of one in order to cast it against another, sowing chaos among those who had allied against him. Accusations of betrayal began to fly, and soon the sorcerers turned one upon another without suspecting who was behind their undoing.\r\nWhen the battle finally drew to a close, all were singed and frozen, soaked and cut and pierced. More than one lay dead by an ally's craft. Rubick stood apart, sore but delighted in the week's festivities. None had the strength to argue when he presented his petition of assumption to the Hidden Council, and the Insubstantial Eleven agreed as one to grant him the title of Grand Magus.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Disabler", "Nuker"],
    "roles_l": ["Disabler", "Nuker"]
  },
  "disruptor": {
    "name": "Disruptor",
    "bio": "High on the wind-ravaged steppes of Druud, a gifted young stormcrafter called Disruptor was the first to unlock the secrets of the summer squalls.  Constantly under assault from both seasonal storms and encroachment from civilized kingdoms to the South, the upland Oglodi have for centuries struggled to subsist atop the endless tablelands.  They are the fractured remnant of a once-great civilization, a fallen tribe, their stormcraft strange and inscrutable, cobbled together from scraps of lost knowledge which even they no longer fully understand.  For those on the high plain, weather has become a kind of religion, worshiped as both the giver and taker of life.  But the electrical storms that bring life-sustaining rains arrive at a cost, and many are the charred and smoking corpses left in their wake.  \r\nAlthough small for his kind, Disruptor is fearless, and driven by an insatiable curiosity.  As a youth, while still unblooded and without a stryder, he explored the ruins of the ancestral cities, searching through collapsed and long-moldering libraries, rummaging through rusting manufactories.  He took what he needed and returned to his tribe.  Adapting a coil of ancient design, he harnessed the power of electrical differential and now calls down the thunder whenever he wishes.  Part magic, part craftsmanship, his coils hold in their glowing plates the power of life and death--a power wielded with precision against the landed castes to the South, and any interlopers who cross into ancient Oglodi lands.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Nuker", "Support", "Initiator", "Disabler"],
    "roles_l": ["Nuker", "Support", "Initiator", "Disabler"]
  },
  "nyx_assassin": {
    "name": "Nyx Assassin",
    "bio": "Deep in the Archive of Ultimyr, shelved between scholarly treatises on dragon cladistics and books of untranslatable spells, there is an ancient tome of entomological curiosities.  Compiled by scholars, the book describes the telepathic talents of the zealot scarab, a strange species of social insect with abilities unique to all the seven planes.    \r\nUnlike most grubs of his colony, Nyx Assassin did not arise from metamorphosis with the plodding thoughts and blunted appendages common to the worker caste of his kind. For his was a special transformation, guided by the grace of Nyx.  He was the chosen one, selected from the many and anointed with an extract of the queen goddess herself.  Not all survive the dark blessing of the queen's chamber, but he emerged with a penetrating mind, and dagger-like claws--his razor sharp mandibles raking the air while his thoughts projected directly into the minds of those around him.  Of all zealot scarabs, he alone was selected for the highest calling.  After his metamorphosis, he was reborn, by grace of Nyx, with abilities which shaped him for one thing and one thing only: to kill in the name of his goddess.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Disabler", "Nuker"],
    "roles_l": ["Disabler", "Nuker"]
  },
  "naga_siren": {
    "name": "Naga Siren",
    "bio": "Among the high-sworn of the Slithereen Guard there is a solemn vow oft repeated before battle:  No Slithereen may fail.  In truth, these words are equal parts oath and enforceable covenant, for those who fall short of their duty are banished from the order.  To fail is to be other than Slithereen.\r\nOnce most highly esteemed of her race, Slithice for many years commanded a battalion of her fellows, using her formidable voice as her greatest weapon.  Powerful, sinuous, serpentine, she led her deadly Guard in defense of the Deep Ones, and the great wealth of the sunken cities.  But in the final battle of Crey, her forces were driven back by a marauding army of levianths intent on finding tribute for their god Maelrawn.  After the long and bloody onslaught, as the bodies were cleared from the sunken halls, a single jeweled chalice was found missing from the trove.  Of her hundred Guard, only a handful survived, but their bravery and sacrifice were of little consequence.  What mattered was that treasure was taken.  Honor destroyed.  And so Naga Siren was cast out.  Banished to search for the stolen chalice.  Though she might add a hundred times her weight to the golden trove, she is doomed to live apart until that day she returns that which was taken.  For no amount of gold is equal in honor to the honor she lost.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Disabler", "Pusher", "Escape"],
    "roles_l": ["Carry", "Disabler", "Pusher", "Escape"]
  },
  "keeper_of_the_light": {
    "name": "Keeper of the Light",
    "bio": "Upon a pale horse he rides, this spark of endless suns, this Keeper of the Light.  Ezalor long ago escaped the Fundamental plane, separating from the other ancient forces to which he was bound within the great Primordial harmony.  He is a power grown sentient in the dawn of the universe, and now rides forth in all planes at once, one step ahead of pursuing chaos, bearing his gift with him at the end of a radiant staff.  His majestic truth lies hidden beneath the outward appearance of a slightly doddering old man who barely stays in the saddle.  However, when faced with the challenge of chaos, or the forces of darkness, his primordial light bursts forth, and his full power is revealed, transforming him once again into a force to be reckoned with.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Nuker", "Support", "LaneSupport"],
    "roles_l": ["Nuker", "Support", "Lane Support"]
  },
  "wisp": {
    "name": "Io",
    "bio": "Io is everywhere, and in all things.  Denounced by enemies as the great unmaker, worshiped by scholars as the twinkling of a divine eye, this strange Wisp of life-force occupies all planes at once, the merest fraction of its being crossing into physical existence at any one moment.  \r\nLike the great twin riders Dark and Light, and yet another ancient traveler whose true history is lost to the ages, Io the Wisp is a Fundamental of the universe, a force older than time, a wanderer from realms far beyond mortal understanding. Io is nothing less than the sum of all attractive and repulsive forces within the material field, a sentient manifestation of the charge that bind existence together. It is only in the controlled warping of these electrical waylines that Io's presence can be experienced on the physical plane. A benevolent, cooperative force, Io bonds its strange magnetism to others so that the power of allies might be enhanced.  Its motives inscrutable, its strength unimaginable, Io moves through the physical plane, the perfect expression of the mysteries of the universe.\r\n",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "LaneSupport", "Nuker"],
    "roles_l": ["Support", "Lane Support", "Nuker"]
  },
  "visage": {
    "name": "Visage",
    "bio": "Perched atop the entrance to the Narrow Maze sit the looming shapes of sneering gargoyles, the paths into the hereafter forever in their gaze.  Beasts and birds, men and monsters, all creatures that die and choose to travel beyond must someday pass beneath their sight.  For an untethered spirit, the decision to journey through the veil of death is irrevocable.  When chance comes, and by craft or cunning some restless soul escapes their hells and heavens, it is the dreaded gargoyle Visage, the bound form of the eternal spirit Necro'lic, who is dispatched to reclaim them.  Ruthless and efficient, unhindered by the principles of death and fatigue, Visage stalks its prey without mercy or end, willingly destroying all which may give shelter to the fugitive essence.  That which flaunts the laws of the afterlife may never rest, for while it is true that the dead may be revived, it is only a matter of time before Visage finds and returns them to their proper place.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Nuker", "Durable", "Disabler"],
    "roles_l": ["Nuker", "Durable", "Disabler"]
  },
  "slark": {
    "name": "Slark",
    "bio": "Little known to the inhabitants of the dry world, Dark Reef is a sunken prison where the worst of the sea-bred are sent for crimes against their fellows. It is a razor barbed warren full of murderous slithereen, treacherous Deep Ones, sociopathic meranths. In this dim labyrinth, patrolled by eels and guarded by enormous anemones, only the vicious survive. Pitched into Dark Reef for crimes unknown, Slark spent half a lifetime without kin or kindness, trusting no one, surviving through a combination of stealth and ruthlessness, keeping his thoughts and his plans to himself. When the infamous Dark Reef Dozen plotted their ill-fated breakout, they kept their plans a perfect secret, murdering anyone who could have put the pieces together--but somehow Slark discovered their scheme and made a place for himself in it. Ten of the Dozen died in the escape attempt, and two were captured, hauled back to Dark Reef, then executed for the entertainment of their fellow inmates. But Slark, the unsung thirteenth, used the commotion as cover and slipped away, never to be caught. Now a furtive resident of the carnivorous mangrove scrub that grips the southern reach of Shadeshore, Slark remains the only successful escapee from Dark Reef.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Escape"],
    "roles_l": ["Escape"]
  },
  "medusa": {
    "name": "Medusa",
    "bio": "Beauty is power. This thought comforted Medusa--the youngest and loveliest of three beautiful Gorgon sisters, born to a sea goddess--because she alone of the sisters was mortal. It comforted her, that is, until the day masked assailants invaded the Gorgon realm and tore the two immortal sisters from their home, unmoved by their beauty or by their tears. One of the invaders seized Medusa as well, but then cast her aside with a disgusted look: 'This one has the mortal stink upon her. We have no use for that which dies.' Humiliated, enraged, Medusa fled to the temple of her mother and cast herself before the goddess, crying, 'You denied me eternal life--therefore I beg you, give me power! Power, so I can dedicate what life I have to rescuing my sisters and avenging this injustice!' After long thought, the goddess granted her daughter's request, allowing Medusa to trade her legendary beauty for a face and form of terrifying strength. Never for a moment has Medusa regretted her choice. She understands that power is the only beauty worth possessing--for only power can change the world.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry"],
    "roles_l": ["Carry"]
  },
  "troll_warlord": {
    "name": "Troll Warlord",
    "bio": "It's an easy thing to offend a troll. A prickly and contentious race, trolls thrive on argument and strife, missing no excuse to raise their voices in dispute. Males grow to maturity in subterranean chambers beneath their matriarch's domicile, feeding and amusing themselves while contributing nothing. Often they stay for years beyond the age of maturity, while the matriarch provides them with sustenance. When young trolls are finally pushed from their sub-chamber, they gather with others of their kind, forming roving gangs of malcontents who complain loudly about all manner of vexation.     \r\nAs much as trolls love to argue, imagine how rare it is for a troll to be driven from his own kind for being too difficult to get along with. Such was Jah'rakal's fate, a monger troll from deep in the Hoven. So deluded was he, so bitter and abrasive, that even other trolls found his company intolerable. After one particularly vitriolic outburst in which he claimed the lion's share of loot from their latest raid, his cohorts finally snapped. They turned on him, beat him with clubs, and drove him from the encampment. Enraged at his banishment, he returned the next day, armed with steel, and slew them all, one by one. He then swore a blood oath: he would ever after be a fighting force unto himself. Now he roams the world as the Troll Warlord, bitter and angry, the Imperial high commander of an army of one.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Carry"],
    "roles_l": ["Carry"]
  },
  "centaur": {
    "name": "Centaur Warrunner",
    "bio": "It's said that a centaur's road is paved with the corpses of the fallen.  For the one called Warrunner, it has been a long road indeed.  To outsiders, the four-legged clans of Druud are often mistaken for simple, brutish creatures.  Their language has no written form; their culture lacks pictographic traditions, structured music, formalized religion.  For centaurs, combat is the perfect articulation of thought, the highest expression of self.  If killing is an art among centaurs, then Bradwarden the Warrunner is their greatest artist.  He rose to dominance on the proving grounds of Omexe, an ancient arena where centaur clans have for millennia gathered to perform their gladiatorial rites.  As his fame spread, spectators came from far and wide to see the great centaur in action.  Always the first to step into the arena, and the last to leave, he composes a masterpiece in each guttering spray, each thrust of blood-slickened blade-length.  It is the poetry of blood on steel, flung in complex patterns across the pale sands of the killing floor.\r\nWarrunner defeated warrior after warrior, until the arena boomed with the cheering of his name, and he found himself alone, the uncontested champion of his kind.  The great belt of Omexe was bestowed, wrapped around his broad torso, but in his victory, the death-artist found only emptiness.  For what is a warrior without a challenge?  The great centaur galloped out of Omexe that day with a new goal.  To his people, Warrunner is the greatest warrior to ever step into the arena.  Now he has set out to prove he is the greatest fighter who has ever lived.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Disabler", "Initiator"],
    "roles_l": ["Durable", "Disabler", "Initiator"]
  },
  "magnataur": {
    "name": "Magnus",
    "bio": "The master-smiths of Mt. Joerlak agree on only a single point: that the horn of a magnoceros is more precious than any alloy. And of all such horns, the largest and sharpest belongs to the beast they call Magnus. For half a generation, Magnus took easy sport goring hunters come to claim the treasures of his kin. Each time he would return to his cave with hooves and horns stained red, until his Matriarch urged him and all their kin to seek refuge to the north beyond the shadow of the mountain. But Magnus scoffed, having never failed to defend his people. The magnoceroi would stay, he decided, for a magnoceros does not believe in chance... nor does it ever change its mind. But when Mt. Joerlak erupted without warning, and half his kin perished in the fire and ash, Magnus changed his mind after all. The survivors pushed north, until they reached a blockade watched over by a hundred hunters armed with bow and steel. Magnus expected no less. He led his fiercest brothers and sisters in a charge against their enemies, and fought with a ferocity matched only by the fire-spewing mountain at his back. Meanwhile the magnoceros elders, mothers, and calves vanished into the drifts. The master-smiths are divided about what happened next. Some say Magnus reunited with his kin, while others claim he suffered mortal injuries and expired alongside the body of his Matriarch. Neither theory is correct. Magnus did vow to rejoin his kin...but only after seeking out those responsible for the eruption of Mt. Joerlak and watching them die upon his horn, for a magnoceros does not believe in chance.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Initiator", "Disabler", "Nuker", "Carry"],
    "roles_l": ["Initiator", "Disabler", "Nuker", "Carry"]
  },
  "shredder": {
    "name": "Timbersaw",
    "bio": "Rizzrack could still hear the screams in his mind.  He worked, frantically turning wrenches, twisting screws, building and carving and forging.  Sleep eluded him; he only built.  Months had passed since he had shut himself in his uncle's workshop, and his deliverance was nearly complete.  He rubbed his back as his eyes drifted shut, and saw a blanket of flowers floating on the placid waves of Augury Bay before exploding into a cloud of pollen that silenced lives as it seized the lungs.  He woke with a choking start.  For hours the rhythmic sound of a whetstone filled the shop as he sharpened a set of massive blades, his mind filled with images of strangling vines garroting neighbors, enwrapping homes.  The flooding of Augury Bay had been nothing compared to the violent horrors the waters left to take root beyond the city walls.  But the saw-suit would make him strong and safe he thought, allowing himself this sliver of hope before the full might of his fear crashed into his fading mind.  Branches and bark and blood.  When the city fell, Rizzrack fled trees that walked, and fought, and killed.  Trees had shattered the gates and swarmed into the city.  Trees had crushed and thrashed and stomped the last that Augury Bay could muster in defense, and stalked the few fleeing refugees.  In addled silence Rizzrack unspooled the thick chain from the suit's arm, his hands quaking as he inspected each link and ran a trembling finger along the claw attached at its end.  The saw-suit was ready.\r\nWith his hand trembling he sparked the bladed machine to life.  Terror drove him, terror of what awaited him and of what he would have to face to have any hope of calming his mind.  As the saw-suit shuddered to life he knew he must face this fear, and he knew he wouldn't like it one bit.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Nuker", "Escape"],
    "roles_l": ["Durable", "Nuker", "Escape"]
  },
  "bristleback": {
    "name": "Bristleback",
    "bio": "Never one to turn his back on a fight, Rigwarl was known for battling the biggest, meanest scrappers he could get his hands on. Christened Bristleback by the drunken crowds, he waded into backroom brawls in every road tavern between Slom and Elze, until his exploits finally caught the eye of a barkeep in need of an enforcer. For a bit of brew, Bristleback was hired to collect tabs, keep the peace, and break the occasional leg or two (or five, in the case of one unfortunate web-hund).\r\nAfter indulging in a night of merriment during which bodily harm was meted out in equal parts upon both delinquent patrons and his own liver, Bristleback finally met his match. \"Your tusks offend me, sir,\" he was heard to drunkenly slur to one particularly large fellow from the northern wastes whose bill had come due. What followed was a fight for the ages. A dozen fighters jumped in. No stool was left unbroken, and in the end, the impossible happened: the tab went unpaid. Over the weeks that followed, Bristleback's wounds healed, and his quills grew back; but an enforcer's honor can be a prickly thing. He paid the tab from his own coin, vowing to track down this northerner and extract redemption. And then he did something he'd never done before: he actually trained, and in so doing made a startling discovery about himself. A smile peeled back from his teeth as he flexed his quills. Turning his back to a fight might be just the thing.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Initiator", "Disabler"],
    "roles_l": ["Durable", "Initiator", "Disabler"]
  },
  "tusk": {
    "name": "Tusk",
    "bio": "It had been a brawl to remember. There stood Ymir, the Tusk, the Terror from the Barrier, the Snowball from Cobalt, the only fighter to have bested the Bristled Bruiser in a fair fight, and now the last man standing in Wolfsden Tavern. What started as a simple bar bet of supremacy ended with four regulars, a blacksmith, and six of the Frost Brigade's best soldiers writhing against the shards and splinters of almost every bottle, mug, and chair in the building. The Tusk boasted and toasted his victory as he emptied his brew.\r\nNo sooner had the defeated regained consciousness than the cries for double-or-nothing rang out. The Tusk was pleased at the prospect, but none could think of a bet bigger than the one he just conquered. Horrified at the damage to his tavern and desperate to avoid another brawl, the barkeep had an idea. As skilled as he was, Ymir had never taken part in a real battle, never tested himself against the indiscriminate death and chaos of war. He proposed a wager to the fighter: seek out the biggest battle he could find, survive, and win it for whichever side he chose. The stakes? The next round of drinks.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Initiator", "Durable"],
    "roles_l": ["Initiator", "Durable"]
  },
  "skywrath_mage": {
    "name": "Skywrath Mage",
    "bio": "A highly placed mage in the court of the Ghastly Eyrie, Dragonus lives a troubled existence. Sworn by birth to protect whoever sits within the Nest of Thorns, he hates the current Skywrath queen with all his soul. As a youth, high-born, he was a friend and companion to the eldest Skywrath princess, Shendelzare, first in line for the Nest. He had loved her warmly and unshakably, but as his studies took hold, his mind turned to arcane learning and the mastery of Skywrath sorcery.\r\n\t\tObsessed with matters aetherial, he missed the mundane signs of courtly treachery that hinted at a plot against Shendelzare, and lost his chance to foil it. When the court was shaken by a swift and violent coup, he emerged from his studies to discover his oldest and dearest friend had been lost to him. The Nest of Thorns now belonged to Shendelzare's ruthless younger sister, and Dragonus could do nothing. The magic of the Skywrath Mage serves only the sworn protector of the Skywrath scion, so to act against the Nest would render him helpless. He clings to his post, believing it to be the best hope of one day restoring his true love to her rightful place. Meanwhile, his secret is known only to the goddess Scree'auk, whose magic it was transformed Shendelzare from a crippled physical creature into an embodiment of pure vengeful energy.\r\n\t\tWhile he dreams of restoring his beloved queen to the Ghastly Eyrie, he dreams even more desperately of restoring Shendelzare herself to a fully healed physical form. The duplicity of his role at court tortures him, for he is a noble and good-hearted creature; but the worst torture of all is imagining the hatred that Vengeful Spirit must hold in her heart for him.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Nuker", "Support"],
    "roles_l": ["Nuker", "Support"]
  },
  "abaddon": {
    "name": "Abaddon",
    "bio": "The Font of Avernus is the source of a family's strength, a crack in primal stones from which vapors of prophetic power have issued for generations. Each newborn of the cavernous House Avernus is bathed in the black mist, and by this baptism they are given an innate connection to the mystic energies of the land. They grow up believing themselves fierce protectors of their lineal traditions, the customs of the realm--but what they really are protecting is the Font itself. And the motives of the mist are unclear.\r\n\t\tWhen the infant Abaddon was bathed in the Font, they say something went awry. In the child's eyes there flared a light of comprehension that startled all present and set the sacerdotes to whispering. He was raised with every expectation of following the path all scions of Avernus took--to train in war, that in times of need he might lead the family's army in defense of the ancestral lands. But Abaddon was always one apart. Where others trained with weapons, he bent himself to meditation in the presence of the mist. He drank deep from the vapors that welled from the Font, learning to blend his spirit with the potency that flowed from far beneath the House; he became a creature of the black mist.\r\n\t\tThere was bitterness within the House Avernus--elders and young alike accusing him of neglecting his responsibilities. But all such accusations stopped when Abaddon rode into battle, and they saw how the powers of the mist had given him mastery over life and death beyond those of any lord the House had ever known.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Durable", "Support", "Carry"],
    "roles_l": ["Durable", "Support", "Carry"]
  },
  "elder_titan": {
    "name": "Elder Titan",
    "bio": "Well may you ask, \"How did this world take its form?\" Why of all the worlds in creation, has this one its strange properties, its diverse and motley collection of creatures, cultures and lore? \"The answer,\" One whispers, \"lies with the Titans.\"\r\n\t\tThese original progenitors were there near the Beginning--if not actual witnesses to the creation, then born with it still echoing in their ears. Stamped with the earliest energies of the universe, they wished nothing more than to continue as creators themselves. Thus they bent to the task of shaping matter to their will: hammering and heating, bending and blasting. And when matter proved less challenging than they liked, they turned their tools upon themselves, reshaping their minds and reforging their spirits until they had become beings of great endurance. Reality itself became the ultimate object of their smithing. Yet, along the way, they sometimes erred. In cases of great ambition, mistakes are unavoidable.\r\n\t\tThe one we know as the Elder Titan was a great innovator, one who studied at the forge of creation. In honing his skills, he shattered something that could never be repaired, only thrown aside. He fell into his own broken world, a shattered soul himself. There he dwelt among the jagged shards and fissured planes, along with other lost fragments that had sifted down through the cracks in the early universe. And this is why the world we know resembles an isle of castaways, survivors of a wreck now long forgotten. Forgotten, that is, by all but the One who blames himself. He spends his time forever seeking a way to accomplish the repairs, that he might rejoin the parts of his broken soul, that we and the world alike might all be mended. This is the One we know as Elder Titan.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Initiator", "Durable"],
    "roles_l": ["Initiator", "Durable"]
  },
  "legion_commander": {
    "name": "Legion Commander",
    "bio": "They came without warning. Within the city walls of Stonehall there came a rumble and a terrible sound, and from blackness unknown came a force of beasts numbering beyond count, wielding flame and foul sorcery, slaying and snatching mothers and sons to dark purpose. Of once-mighty Stonehall's military strength only the Bronze Legion, led by the indomitable Commander Tresdin, was near enough to answer the call of battle. They rode into their city, fighting through bloodstained alleyways and burning markets, cutting their way through the monstrous throng to the source of the sudden invasion: an ethereal rift within the city square, and at its precipice thundered their dreaded champion.\r\nEnwrapped in a corrosive shimmer, the leader of the abyssal horde swung its massive blade, cleaving a legionnaire in two as his flesh began to spoil. Tresdin lifted her blood-stained sword and settled her sights on the beast. It turned, smiling at her through a maze of teeth. Heedless of the battle raging around them, they charged one another.\r\nDeflecting blow after blow, the pair danced their deadly duel as the Bronze Legion met its end around them. Tresdin leapt forward as her foe swung its sword to meet her. The odds turned. The attack smashed into Tresdin suddenly, a brutal thrust from the side, but even as her balance slipped she rallied her strength for another stroke. Blade scraped on blade, beyond the hilt to the gnarled paw below, carving it in two in a fearsome spray of sparks and blood. The vile audience looked on in astonishment as she pressed the attack, driving her blade through her foe's flesh into the stampeding heart within. With a scream that split the clouds above, the beast erupted in a torrent of gore and anguish. The stygian portal wavered, the power sustaining the chasm beyond vanishing as suddenly as it had appeared. The remaining invaders fell quickly to Stonehall steel.\r\nThough victorious, the survivors saw little to celebrate: the city lay in ruins, and survivors were few. Fires continued to spread. Unfurling her banners of war, Tresdin gathered what allies she could. Her anger smoldered as she pledged brutal vengeance upon the forces of the abyss, and damned be any who would dare stand in her way.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Durable"],
    "roles_l": ["Carry", "Durable"]
  },
  "ember_spirit": {
    "name": "Ember Spirit",
    "bio": "Lost within the Wailing Mountains, the Fortress of Flares lay abandoned, its training halls empty, its courtyard covered in leaves and dust. Upon a dais in its sealed temple rests a topaz cauldron filled with ancient ash, remnants of a pyre for the warrior-poet Xin. For three generations, Xin taught his acolytes the Bonds of the Guardian Flame, a series of mantras to train the mind and body for the harsh realities beyond the fortress walls. However, in teaching a warrior's way he earned a warrior's rivals, and in his autumn Xin was bested and slain. His followers spread to the wind. Yet as years turned to centuries and followers to descendants, his teachings endured by subtle whisper and deed. Touched by the teacher's lasting legacy, the Burning Celestial, inquisitive aspect of fire, cast himself to the Fortress of Flares and reignited the pyre ash. From these glowing embers emerged an image of Xin, wreathed in flame, his thoughtful countenance prepared to train and to teach, and to spread the fires of knowledge to all who seek guidance.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Nuker"],
    "roles_l": ["Carry", "Nuker"]
  },
  "earth_spirit": {
    "name": "Earth Spirit",
    "bio": "Deep amid the Upland crags and cliffs there runs a seam of sacred jade long foresworn by highland miners. From this rare material, the likeness of the great general Kaolin was carved and buried at the head of a stone funerary army ten thousand strong--a force of soldiers and holy men, jesters and acrobats, carved by crafstmen and entombed for millennia in the dark embrace of the Earth.\r\nWhat the craftsmen had not known was that within the strange seam of jade flowed the spirit of the Earth itself--an elemental force at one with the planet. When the force within the carved jade found itself cut off from the life's blood of the world, it gathered its strength over the course of a thousand years and dug itself free and into the light. Now the great Kaolin Earth Spirit strides the Upland roads, fighting for the spirit of the Earth; and in times of need calls forth remnants of his buried army still locked in the loving embrace of the soil.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry", "Nuker"],
    "roles_l": ["Carry", "Nuker"]
  },
  "terrorblade": {
    "name": "Terrorblade",
    "bio": "Terrorblade is the demon marauder--an outlaw hellion whom even other demons fear. A cosmic iconoclast, he stole from the Demon Lords, ignored the codified rites that should have bound his behavior, and broke every law of the seven Infernal Regions. For his crimes, he was taught this lesson: even Hell has a hell. A short, brutal trial ensued, with many dead on all sides, and he was finally incarcerated in Foulfell, a hidden dimension where demonkind imprison their own.\r\nBut Foulfell is no normal prison. In this dark mirror of reality, demons are sentenced to gaze eternally into the twisted reflection of their own souls. But instead of suffering, Terrorblade made himself master of his own reflected worst self--a raging, thieving demon of unimaginable power. With his inner beast under sway, he destroyed the fractal prison walls and burst free to turn his terror loose upon all creation.",
    "atk": "melee",
    "atk_l": "Melee",
    "roles": ["Carry"],
    "roles_l": ["Carry"]
  },
  "phoenix": {
    "name": "Phoenix",
    "bio": "Alone across an untouched darkness gleamed the Keeper's first sun, a singular point of conscious light fated to spread warmth into the empty void. Through aeons beyond count, this blinding beacon set to coalescing its incalculable energy before bursting forth the cataclysmic flare of supernova. From this inferno raced new beacons, star progeny identical to its parent, who journeyed an unlit ocean and settled in constellatory array. In time, they too would be made to propagate through supernova flame. So would this dazzling cycle of birth and rebirth repeat until all skies hewn of Titan toil deigned to twinkle and shine.\r\nBy this ageless crucible the star that mortals would come to call Phoenix collapsed into being, and like its ancestors was thrust into an endless cosmos to find a place among its stellar brethren. Yet curiosity toward that which the dimming elders comfort in the darkness consumed the fledgling, and so over long cycles it inquired and studied. It learned that among worlds both whole and broken would soon stir a nexus of remarkable variety locked in an enduring conflict of cosmic consequence, a plane which would find itself in need of more influence than a dying sun's distant rays could provide. Thus this infant son of suns took terrestrial form, eagerly travelling to shine its warmth upon those who may need it most, and perhaps seize upon its solar destiny.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Initiator", "Disabler", "Nuker"],
    "roles_l": ["Initiator", "Disabler", "Nuker"]
  },
  "oracle": {
    "name": "Oracle",
    "bio": "Ascendants to the Great Seat of Cymurri had for ages imported their Oracles exclusively from the Ivory Incubarium, high in the hollow peaks of the Zealot's Range, with a downpayment made at the time of the embryo's conception and the balance surrendered on delivery of a mature, well-trained prophet to the Gate of the Graven King.\r\nRaised by same Pallid Sybils who bred and birthed them, all sanctioned Oracles were anchored by their physical form to the world we most of us share; meanwhile, their souls roamed far afield, barely bound by the airiest astral umbilicus. From such cosmic roamings the prophets would return, speaking words of fire with tongues of flesh. Their mystic utterances were analyzed by the Cymurri Advisors, who found in them visions of the future, diplomatic advice, all the supernatural ammunition the line of Graven Kings needed to secure victory in every campaign, whether in the court or on the battlefield. Thus it went for generations, the Graventome's pages filling with the names of triumphant kings and the new domains they had acquired. So it went, that is, until the particular Oracle named Nerif arrived to serve the very last of the stone-helmed kings. \r\nFrom the first, Nerif's prophecies were unusual. They seemed not merely to portend the future, but to shape it. The weird soothsayer croaked out advice no one had requested, and suddenly the Cymurri found themselves immersed in conflicts with newfound enemies. The Advisors, sensing a threat to their power, were quick to pin these unwelcome developments on the latest Oracle. They demanded his removal, petitioning the Sybils to reclaim their defective prophet and replace him with a worthy substitute. But Nerif described an ominous dream of the Incubarium's destruction, and within hours came news of the ancient school's destruction in a catastrophic avalanche. Fearing the same fate as the Pallid Sybils, the Advisors withdrew to their counsel chambers, suddenly anxious to avoid the Oracle's notice. \r\nThe Graven King, however, was a creature of great practicality. He doubted the commitment of his overprudent Advisors. An Oracle of such rarity, he reasoned, ought be used as a weapon to enlarge his domain. He therefore demoted his timid counselors and stationed Nerif at his side. With only a blunt understanding of Nerif's talent, he boldly stated the outcomes he desired, and coaxed Nerif into uttering his wishes as prophecy. \r\nAt first, all was well. The Last Graven King boasted that by adopting Fate's pet, he had made a plaything of Fate itself. He should have taken it as a warning then when, on the eve of his invasion of the Unsated Satrap's realm, he attempted to coerce a prediction of certain victory from his Oracle, only to hear Nerif quietly mutter, \"It could go either way.\" No firmer statement could he force from Nerif's lips. Still, the King was confident in his army. The Satrapy was landlocked, poorly armed, and shut off from all possible allies. He took \"It could go either way\" to indicate that with tactical might on his side, there was little risk in his plan.\r\nOf course, we now know that he should have taken the sayer's words more literally. Even with careful study of the Annotated Annals of If, what happened on the field before the Unsated Satrap's palace is almost impossible to visualize. It appears that in the midst of the carnage, the battle began to bifurcate. At each pivotal moment, reality calved and broke into bits. Soldiers who staggered and fell in battle also stood sure-footed, forging onward to fight. Their minds also split; the warriors found themselves both dead and alive, existent and non-existent. Victory and defeat were partitioned, so that each separate outcome was experienced in simultaneity by both armies. The universe became a hall of mirrors, with all the mirrors endlessly shattering.\r\nThe immediate effect on both parties was insanity. Unable to comprehend the state of being both triumphant and defeated, the Graven King's mind dispersed into motes of madness. The naive Satrap fared no better. The opposing paired realities continued to split and split again, echoing into infinite histories, all of them populated by a bewildered populace that soon lost the ability to feed, clothe, defend, or reproduce itself in the traditional manner. \r\nLong before the repercussions had played out, however, Cymurri's wary Advisors had seized Nerif, bound and gagged him, and launched him out of their universe at high speed on a dimensional barque, in the hopes of depositing him where he could do them no harm forever. It was, of course, too late for them. And may well be for us.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": ["Support", "LaneSupport", "Nuker"],
    "roles_l": ["Support", "Lane Support", "Nuker"]
  },
  "techies": {
    "name": "Techies",
    "bio": "In the storied saga of Dredger's Bight, no business has ever been more reviled than Techies Demolitions. Then again, Dredger's Bight no longer exists. Nor does Toterin. Or even Trapper Town. In fact, if one were to track the history of Techies Demolitions they might notice that shortly after Techies appear, towns tend to disappear.\r\nLike every inevitable disaster surrounding Techies, the obliteration of Dredger's Bight began with an invention. Tasked with designing a safer way of detonating explosives in the mines beneath the city, pyrotechnic prodigies Squee, Spleen, and Spoon developed their most outlandish creation yet: a button which, when pressed, would trigger a distant device to spark a fuse.\r\nOvereager to test their invention, the trio stuffed barrel after barrel with flamesalt explosives, piling every corner of their tiny workshop high with the newly developed remote bombs. From this stockpile they plucked a single payload, burying it in a far away field. As they cowered in a ditch, Spleen pressed the detonator button. Yet after a moment, nothing happened. Confused, he stood up, pressing his button again and again until, finally, an explosion tore a hole in the field. Elated, Squee and Spleen turned toward home just as a massive wave of sound and force arrived to knock them over.\r\nBewildered, their ears ringing from the unexpected blast, they gathered in the dingy miasma to see a smoking ruin where their workshop once stood. Chunks of wood and stone continued to fall as the yawning crater before them slowly deepened into an expanding pit. The whole of Dredger's Bight shuddered, and then gradually started to slide into the mines below as its panicked residents fled.\r\nSitting at the edge of their sinking home they grinned and giggled, as giddy at the possibilities as they were oblivious to the scorn of their former neighbors. They wondered only one thing: how could they trigger an even bigger blast?",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": [],
    "roles_l": []
  },
  "winter_wyvern": {
    "name": "Winter Wyvern",
    "bio": "Like many great poets, Auroth just wants time to write, but the Winter Wyvern's life is full of interruptions. The epics of the Eldwurms have a long and colorful history, but some fear that the remaining dragon scholars are not as prolific as they once were, with few lines added to the Eldwurm Eddas since the last age of greatness. Auroth laments: \"We forget that there is more to life than triumph and dominion over enemies. We must also live our lives in the pursuit of creative expression.\" She embarks on research expeditions, collecting books for inspiration. But all this research can be terribly distracting, and she spends less time writing than she should. Although she knows she should be lurking in her lair, adding to the Eddas, she finds herself engaged in epic battles against powerful enemies. She loots castles, raids ancient libraries ... and if she happens to heap glory on herself in the process, she tells herself that it's merely a side effect of her research. The fact is, while her skill and power on the battlefield are legendary, her scholarly travails have thus far hardly been the stuff of literary acclaim. But she is not content to stand as a protagonist of heroic lore. She wishes also to create it.",
    "atk": "ranged",
    "atk_l": "Ranged",
    "roles": [],
    "roles_l": []
  }
};

var tempHeroesWithIds = [
    {
        "name": "npc_dota_hero_antimage",
        "id": 1,
        "localized_name": "Anti-Mage"
    },
    {
        "name": "npc_dota_hero_axe",
        "id": 2,
        "localized_name": "Axe"
    },
    {
        "name": "npc_dota_hero_bane",
        "id": 3,
        "localized_name": "Bane"
    },
    {
        "name": "npc_dota_hero_bloodseeker",
        "id": 4,
        "localized_name": "Bloodseeker"
    },
    {
        "name": "npc_dota_hero_crystal_maiden",
        "id": 5,
        "localized_name": "Crystal Maiden"
    },
    {
        "name": "npc_dota_hero_drow_ranger",
        "id": 6,
        "localized_name": "Drow Ranger"
    },
    {
        "name": "npc_dota_hero_earthshaker",
        "id": 7,
        "localized_name": "Earthshaker"
    },
    {
        "name": "npc_dota_hero_juggernaut",
        "id": 8,
        "localized_name": "Juggernaut"
    },
    {
        "name": "npc_dota_hero_mirana",
        "id": 9,
        "localized_name": "Mirana"
    },
    {
        "name": "npc_dota_hero_nevermore",
        "id": 11,
        "localized_name": "Shadow Fiend"
    },
    {
        "name": "npc_dota_hero_morphling",
        "id": 10,
        "localized_name": "Morphling"
    },
    {
        "name": "npc_dota_hero_phantom_lancer",
        "id": 12,
        "localized_name": "Phantom Lancer"
    },
    {
        "name": "npc_dota_hero_puck",
        "id": 13,
        "localized_name": "Puck"
    },
    {
        "name": "npc_dota_hero_pudge",
        "id": 14,
        "localized_name": "Pudge"
    },
    {
        "name": "npc_dota_hero_razor",
        "id": 15,
        "localized_name": "Razor"
    },
    {
        "name": "npc_dota_hero_sand_king",
        "id": 16,
        "localized_name": "Sand King"
    },
    {
        "name": "npc_dota_hero_storm_spirit",
        "id": 17,
        "localized_name": "Storm Spirit"
    },
    {
        "name": "npc_dota_hero_sven",
        "id": 18,
        "localized_name": "Sven"
    },
    {
        "name": "npc_dota_hero_tiny",
        "id": 19,
        "localized_name": "Tiny"
    },
    {
        "name": "npc_dota_hero_vengefulspirit",
        "id": 20,
        "localized_name": "Vengeful Spirit"
    },
    {
        "name": "npc_dota_hero_windrunner",
        "id": 21,
        "localized_name": "Windranger"
    },
    {
        "name": "npc_dota_hero_zuus",
        "id": 22,
        "localized_name": "Zeus"
    },
    {
        "name": "npc_dota_hero_kunkka",
        "id": 23,
        "localized_name": "Kunkka"
    },
    {
        "name": "npc_dota_hero_lina",
        "id": 25,
        "localized_name": "Lina"
    },
    {
        "name": "npc_dota_hero_lich",
        "id": 31,
        "localized_name": "Lich"
    },
    {
        "name": "npc_dota_hero_lion",
        "id": 26,
        "localized_name": "Lion"
    },
    {
        "name": "npc_dota_hero_shadow_shaman",
        "id": 27,
        "localized_name": "Shadow Shaman"
    },
    {
        "name": "npc_dota_hero_slardar",
        "id": 28,
        "localized_name": "Slardar"
    },
    {
        "name": "npc_dota_hero_tidehunter",
        "id": 29,
        "localized_name": "Tidehunter"
    },
    {
        "name": "npc_dota_hero_witch_doctor",
        "id": 30,
        "localized_name": "Witch Doctor"
    },
    {
        "name": "npc_dota_hero_riki",
        "id": 32,
        "localized_name": "Riki"
    },
    {
        "name": "npc_dota_hero_enigma",
        "id": 33,
        "localized_name": "Enigma"
    },
    {
        "name": "npc_dota_hero_tinker",
        "id": 34,
        "localized_name": "Tinker"
    },
    {
        "name": "npc_dota_hero_sniper",
        "id": 35,
        "localized_name": "Sniper"
    },
    {
        "name": "npc_dota_hero_necrolyte",
        "id": 36,
        "localized_name": "Necrophos"
    },
    {
        "name": "npc_dota_hero_warlock",
        "id": 37,
        "localized_name": "Warlock"
    },
    {
        "name": "npc_dota_hero_beastmaster",
        "id": 38,
        "localized_name": "Beastmaster"
    },
    {
        "name": "npc_dota_hero_queenofpain",
        "id": 39,
        "localized_name": "Queen of Pain"
    },
    {
        "name": "npc_dota_hero_venomancer",
        "id": 40,
        "localized_name": "Venomancer"
    },
    {
        "name": "npc_dota_hero_faceless_void",
        "id": 41,
        "localized_name": "Faceless Void"
    },
    {
        "name": "npc_dota_hero_skeleton_king",
        "id": 42,
        "localized_name": "Wraith King"
    },
    {
        "name": "npc_dota_hero_death_prophet",
        "id": 43,
        "localized_name": "Death Prophet"
    },
    {
        "name": "npc_dota_hero_phantom_assassin",
        "id": 44,
        "localized_name": "Phantom Assassin"
    },
    {
        "name": "npc_dota_hero_pugna",
        "id": 45,
        "localized_name": "Pugna"
    },
    {
        "name": "npc_dota_hero_templar_assassin",
        "id": 46,
        "localized_name": "Templar Assassin"
    },
    {
        "name": "npc_dota_hero_viper",
        "id": 47,
        "localized_name": "Viper"
    },
    {
        "name": "npc_dota_hero_luna",
        "id": 48,
        "localized_name": "Luna"
    },
    {
        "name": "npc_dota_hero_dragon_knight",
        "id": 49,
        "localized_name": "Dragon Knight"
    },
    {
        "name": "npc_dota_hero_dazzle",
        "id": 50,
        "localized_name": "Dazzle"
    },
    {
        "name": "npc_dota_hero_rattletrap",
        "id": 51,
        "localized_name": "Clockwerk"
    },
    {
        "name": "npc_dota_hero_leshrac",
        "id": 52,
        "localized_name": "Leshrac"
    },
    {
        "name": "npc_dota_hero_furion",
        "id": 53,
        "localized_name": "Nature's Prophet"
    },
    {
        "name": "npc_dota_hero_life_stealer",
        "id": 54,
        "localized_name": "Lifestealer"
    },
    {
        "name": "npc_dota_hero_dark_seer",
        "id": 55,
        "localized_name": "Dark Seer"
    },
    {
        "name": "npc_dota_hero_clinkz",
        "id": 56,
        "localized_name": "Clinkz"
    },
    {
        "name": "npc_dota_hero_omniknight",
        "id": 57,
        "localized_name": "Omniknight"
    },
    {
        "name": "npc_dota_hero_enchantress",
        "id": 58,
        "localized_name": "Enchantress"
    },
    {
        "name": "npc_dota_hero_huskar",
        "id": 59,
        "localized_name": "Huskar"
    },
    {
        "name": "npc_dota_hero_night_stalker",
        "id": 60,
        "localized_name": "Night Stalker"
    },
    {
        "name": "npc_dota_hero_broodmother",
        "id": 61,
        "localized_name": "Broodmother"
    },
    {
        "name": "npc_dota_hero_bounty_hunter",
        "id": 62,
        "localized_name": "Bounty Hunter"
    },
    {
        "name": "npc_dota_hero_weaver",
        "id": 63,
        "localized_name": "Weaver"
    },
    {
        "name": "npc_dota_hero_jakiro",
        "id": 64,
        "localized_name": "Jakiro"
    },
    {
        "name": "npc_dota_hero_batrider",
        "id": 65,
        "localized_name": "Batrider"
    },
    {
        "name": "npc_dota_hero_chen",
        "id": 66,
        "localized_name": "Chen"
    },
    {
        "name": "npc_dota_hero_spectre",
        "id": 67,
        "localized_name": "Spectre"
    },
    {
        "name": "npc_dota_hero_doom_bringer",
        "id": 69,
        "localized_name": "Doom"
    },
    {
        "name": "npc_dota_hero_ancient_apparition",
        "id": 68,
        "localized_name": "Ancient Apparition"
    },
    {
        "name": "npc_dota_hero_ursa",
        "id": 70,
        "localized_name": "Ursa"
    },
    {
        "name": "npc_dota_hero_spirit_breaker",
        "id": 71,
        "localized_name": "Spirit Breaker"
    },
    {
        "name": "npc_dota_hero_gyrocopter",
        "id": 72,
        "localized_name": "Gyrocopter"
    },
    {
        "name": "npc_dota_hero_alchemist",
        "id": 73,
        "localized_name": "Alchemist"
    },
    {
        "name": "npc_dota_hero_invoker",
        "id": 74,
        "localized_name": "Invoker"
    },
    {
        "name": "npc_dota_hero_silencer",
        "id": 75,
        "localized_name": "Silencer"
    },
    {
        "name": "npc_dota_hero_obsidian_destroyer",
        "id": 76,
        "localized_name": "Outworld Devourer"
    },
    {
        "name": "npc_dota_hero_lycan",
        "id": 77,
        "localized_name": "Lycan"
    },
    {
        "name": "npc_dota_hero_brewmaster",
        "id": 78,
        "localized_name": "Brewmaster"
    },
    {
        "name": "npc_dota_hero_shadow_demon",
        "id": 79,
        "localized_name": "Shadow Demon"
    },
    {
        "name": "npc_dota_hero_lone_druid",
        "id": 80,
        "localized_name": "Lone Druid"
    },
    {
        "name": "npc_dota_hero_chaos_knight",
        "id": 81,
        "localized_name": "Chaos Knight"
    },
    {
        "name": "npc_dota_hero_meepo",
        "id": 82,
        "localized_name": "Meepo"
    },
    {
        "name": "npc_dota_hero_treant",
        "id": 83,
        "localized_name": "Treant Protector"
    },
    {
        "name": "npc_dota_hero_ogre_magi",
        "id": 84,
        "localized_name": "Ogre Magi"
    },
    {
        "name": "npc_dota_hero_undying",
        "id": 85,
        "localized_name": "Undying"
    },
    {
        "name": "npc_dota_hero_rubick",
        "id": 86,
        "localized_name": "Rubick"
    },
    {
        "name": "npc_dota_hero_disruptor",
        "id": 87,
        "localized_name": "Disruptor"
    },
    {
        "name": "npc_dota_hero_nyx_assassin",
        "id": 88,
        "localized_name": "Nyx Assassin"
    },
    {
        "name": "npc_dota_hero_naga_siren",
        "id": 89,
        "localized_name": "Naga Siren"
    },
    {
        "name": "npc_dota_hero_keeper_of_the_light",
        "id": 90,
        "localized_name": "Keeper of the Light"
    },
    {
        "name": "npc_dota_hero_wisp",
        "id": 91,
        "localized_name": "Io"
    },
    {
        "name": "npc_dota_hero_visage",
        "id": 92,
        "localized_name": "Visage"
    },
    {
        "name": "npc_dota_hero_slark",
        "id": 93,
        "localized_name": "Slark"
    },
    {
        "name": "npc_dota_hero_medusa",
        "id": 94,
        "localized_name": "Medusa"
    },
    {
        "name": "npc_dota_hero_troll_warlord",
        "id": 95,
        "localized_name": "Troll Warlord"
    },
    {
        "name": "npc_dota_hero_centaur",
        "id": 96,
        "localized_name": "Centaur Warrunner"
    },
    {
        "name": "npc_dota_hero_magnataur",
        "id": 97,
        "localized_name": "Magnus"
    },
    {
        "name": "npc_dota_hero_shredder",
        "id": 98,
        "localized_name": "Timbersaw"
    },
    {
        "name": "npc_dota_hero_bristleback",
        "id": 99,
        "localized_name": "Bristleback"
    },
    {
        "name": "npc_dota_hero_tusk",
        "id": 100,
        "localized_name": "Tusk"
    },
    {
        "name": "npc_dota_hero_skywrath_mage",
        "id": 101,
        "localized_name": "Skywrath Mage"
    },
    {
        "name": "npc_dota_hero_abaddon",
        "id": 102,
        "localized_name": "Abaddon"
    },
    {
        "name": "npc_dota_hero_elder_titan",
        "id": 103,
        "localized_name": "Elder Titan"
    },
    {
        "name": "npc_dota_hero_legion_commander",
        "id": 104,
        "localized_name": "Legion Commander"
    },
    {
        "name": "npc_dota_hero_ember_spirit",
        "id": 106,
        "localized_name": "Ember Spirit"
    },
    {
        "name": "npc_dota_hero_earth_spirit",
        "id": 107,
        "localized_name": "Earth Spirit"
    },
    {
        "name": "npc_dota_hero_terrorblade",
        "id": 109,
        "localized_name": "Terrorblade"
    },
    {
        "name": "npc_dota_hero_phoenix",
        "id": 110,
        "localized_name": "Phoenix"
    },
    {
        "name": "npc_dota_hero_techies",
        "id": 105,
        "localized_name": "Techies"
    },
    {
        "name": "npc_dota_hero_oracle",
        "id": 111,
        "localized_name": "Oracle"
    },
    {
        "name": "npc_dota_hero_winter_wyvern",
        "id": 112,
        "localized_name": "Winter Wyvern"
    }
];

var globalAvailableHeroes = [];

for (hero in tempHeroesJson) {
    if( tempHeroesJson.hasOwnProperty( hero ) ) {
        var matches = $.grep(tempHeroesWithIds, function(item) { return item.name === ("npc_dota_hero_" + hero); });
        var heroID = null;
        
        if (matches.length !== 1) {
            throw (hero + " gave " + matches.length + " results, only"); 
        }
        
        heroID = matches[0].id;        
        globalAvailableHeroes.push($.extend({ key: hero, id: heroID }, tempHeroesJson[hero]));
    }
}

globalAvailableHeroes.sort(function(x,y) { return x.name.localeCompare(y.name); });
var defaultModel = {"rowCount": 8, "colCount": 24, "heroes": []};

var globalTemplates = {
    RolesAndAttackType: {"rowCount":"7","colCount":"23","heroes":[{"id":102,"row":6,"col":0},{"id":73,"row":3,"col":7},{"id":68,"row":1,"col":1},{"id":1,"row":3,"col":20},{"id":2,"row":6,"col":12},{"id":3,"row":0,"col":4},{"id":65,"row":0,"col":12},{"id":38,"row":6,"col":9},{"id":4,"row":6,"col":16},{"id":62,"row":6,"col":8},{"id":78,"row":6,"col":22},{"id":99,"row":6,"col":10},{"id":61,"row":5,"col":9},{"id":96,"row":4,"col":8},{"id":81,"row":6,"col":21},{"id":66,"row":2,"col":4},{"id":56,"row":2,"col":17},{"id":51,"row":6,"col":7},{"id":5,"row":2,"col":1},{"id":55,"row":3,"col":8},{"id":50,"row":0,"col":3},{"id":43,"row":1,"col":9},{"id":87,"row":2,"col":2},{"id":69,"row":6,"col":19},{"id":49,"row":6,"col":17},{"id":6,"row":0,"col":15},{"id":107,"row":5,"col":12},{"id":7,"row":6,"col":1},{"id":103,"row":6,"col":11},{"id":106,"row":6,"col":18},{"id":58,"row":1,"col":7},{"id":33,"row":0,"col":7},{"id":41,"row":3,"col":21},{"id":72,"row":1,"col":10},{"id":59,"row":1,"col":19},{"id":74,"row":0,"col":22},{"id":91,"row":1,"col":0},{"id":64,"row":2,"col":0},{"id":8,"row":6,"col":20},{"id":90,"row":3,"col":0},{"id":23,"row":5,"col":18},{"id":104,"row":4,"col":18},{"id":52,"row":2,"col":3},{"id":31,"row":1,"col":3},{"id":54,"row":6,"col":15},{"id":25,"row":4,"col":0},{"id":26,"row":4,"col":3},{"id":80,"row":0,"col":21},{"id":48,"row":0,"col":16},{"id":77,"row":5,"col":19},{"id":97,"row":4,"col":10},{"id":94,"row":0,"col":20},{"id":82,"row":5,"col":22},{"id":9,"row":0,"col":17},{"id":10,"row":1,"col":20},{"id":89,"row":5,"col":17},{"id":53,"row":1,"col":15},{"id":36,"row":3,"col":4},{"id":60,"row":4,"col":11},{"id":88,"row":4,"col":7},{"id":84,"row":6,"col":3},{"id":57,"row":6,"col":2},{"id":76,"row":1,"col":16},{"id":44,"row":5,"col":15},{"id":12,"row":4,"col":19},{"id":110,"row":1,"col":11},{"id":13,"row":0,"col":8},{"id":14,"row":5,"col":11},{"id":45,"row":0,"col":10},{"id":39,"row":0,"col":19},{"id":15,"row":1,"col":17},{"id":32,"row":4,"col":20},{"id":86,"row":0,"col":2},{"id":16,"row":5,"col":7},{"id":79,"row":4,"col":1},{"id":11,"row":1,"col":22},{"id":27,"row":0,"col":1},{"id":75,"row":0,"col":0},{"id":101,"row":3,"col":1},{"id":28,"row":5,"col":16},{"id":93,"row":4,"col":17},{"id":35,"row":2,"col":18},{"id":67,"row":3,"col":22},{"id":71,"row":4,"col":15},{"id":17,"row":0,"col":18},{"id":18,"row":4,"col":21},{"id":105,"row":1,"col":8},{"id":46,"row":2,"col":16},{"id":109,"row":4,"col":22},{"id":29,"row":4,"col":9},{"id":98,"row":5,"col":8},{"id":34,"row":0,"col":11},{"id":19,"row":4,"col":16},{"id":83,"row":6,"col":4},{"id":95,"row":1,"col":21},{"id":100,"row":4,"col":12},{"id":85,"row":5,"col":10},{"id":70,"row":5,"col":20},{"id":20,"row":3,"col":2},{"id":40,"row":3,"col":3},{"id":47,"row":1,"col":18},{"id":92,"row":0,"col":9},{"id":37,"row":4,"col":2},{"id":63,"row":2,"col":15},{"id":21,"row":4,"col":4},{"id":30,"row":1,"col":4},{"id":42,"row":5,"col":21},{"id":22,"row":1,"col":2},{"id":111,"row":1,"col":12},{"id":112,"row":2,"col":12}]}
   ,ColorBased: {"rowCount":"6","colCount":"19","heroes":[{"id":102,"row":0,"col":0},{"id":73,"row":0,"col":2},{"id":68,"row":5,"col":9},{"id":1,"row":1,"col":3},{"id":2,"row":2,"col":16},{"id":3,"row":2,"col":1},{"id":65,"row":3,"col":13},{"id":38,"row":3,"col":15},{"id":4,"row":3,"col":16},{"id":62,"row":2,"col":13},{"id":78,"row":3,"col":12},{"id":99,"row":1,"col":12},{"id":61,"row":1,"col":1},{"id":96,"row":1,"col":7},{"id":81,"row":2,"col":17},{"id":66,"row":5,"col":2},{"id":56,"row":0,"col":12},{"id":51,"row":4,"col":17},{"id":5,"row":5,"col":6},{"id":55,"row":2,"col":0},{"id":50,"row":3,"col":1},{"id":43,"row":4,"col":9},{"id":87,"row":4,"col":7},{"id":69,"row":0,"col":13},{"id":49,"row":0,"col":16},{"id":6,"row":4,"col":1},{"id":107,"row":3,"col":10},{"id":7,"row":1,"col":13},{"id":103,"row":4,"col":14},{"id":106,"row":0,"col":14},{"id":58,"row":0,"col":11},{"id":33,"row":0,"col":4},{"id":41,"row":1,"col":2},{"id":72,"row":4,"col":10},{"id":59,"row":4,"col":11},{"id":74,"row":1,"col":14},{"id":91,"row":5,"col":0},{"id":64,"row":5,"col":17},{"id":8,"row":4,"col":13},{"id":90,"row":5,"col":15},{"id":23,"row":5,"col":5},{"id":104,"row":5,"col":14},{"id":52,"row":3,"col":8},{"id":31,"row":2,"col":6},{"id":54,"row":2,"col":15},{"id":25,"row":1,"col":15},{"id":26,"row":2,"col":14},{"id":80,"row":3,"col":11},{"id":48,"row":3,"col":0},{"id":77,"row":0,"col":7},{"id":97,"row":1,"col":6},{"id":94,"row":2,"col":9},{"id":82,"row":3,"col":17},{"id":9,"row":3,"col":4},{"id":10,"row":5,"col":8},{"id":89,"row":5,"col":7},{"id":53,"row":2,"col":7},{"id":36,"row":2,"col":10},{"id":60,"row":4,"col":5},{"id":88,"row":0,"col":6},{"id":84,"row":5,"col":3},{"id":57,"row":5,"col":10},{"id":76,"row":0,"col":8},{"id":44,"row":4,"col":2},{"id":12,"row":4,"col":3},{"id":110,"row":5,"col":18},{"id":13,"row":5,"col":1},{"id":14,"row":4,"col":12},{"id":45,"row":2,"col":11},{"id":39,"row":0,"col":15},{"id":15,"row":3,"col":5},{"id":32,"row":4,"col":4},{"id":86,"row":2,"col":2},{"id":16,"row":2,"col":12},{"id":79,"row":1,"col":17},{"id":11,"row":0,"col":17},{"id":27,"row":4,"col":0},{"id":75,"row":0,"col":5},{"id":101,"row":5,"col":11},{"id":28,"row":2,"col":8},{"id":93,"row":3,"col":9},{"id":35,"row":4,"col":18},{"id":67,"row":0,"col":1},{"id":71,"row":3,"col":6},{"id":17,"row":3,"col":7},{"id":18,"row":2,"col":4},{"id":105,"row":5,"col":13},{"id":46,"row":0,"col":3},{"id":109,"row":2,"col":3},{"id":29,"row":1,"col":8},{"id":98,"row":4,"col":16},{"id":34,"row":4,"col":15},{"id":19,"row":5,"col":4},{"id":83,"row":1,"col":9},{"id":95,"row":3,"col":14},{"id":100,"row":5,"col":12},{"id":85,"row":1,"col":10},{"id":70,"row":3,"col":2},{"id":20,"row":4,"col":6},{"id":40,"row":0,"col":10},{"id":47,"row":1,"col":5},{"id":92,"row":2,"col":5},{"id":37,"row":1,"col":16},{"id":63,"row":1,"col":4},{"id":21,"row":1,"col":11},{"id":30,"row":1,"col":0},{"id":42,"row":0,"col":9},{"id":22,"row":3,"col":3},{"id":111,"row":5,"col":16},{"id":112,"row":4,"col":8}]}
   ,MostPlayed683c: {"rowCount":"7","colCount":"23","heroes":[{"id":102,"row":2,"col":12},{"id":73,"row":6,"col":14},{"id":68,"row":4,"col":14},{"id":1,"row":1,"col":6},{"id":2,"row":0,"col":2},{"id":3,"row":4,"col":19},{"id":65,"row":2,"col":19},{"id":38,"row":2,"col":20},{"id":4,"row":4,"col":6},{"id":62,"row":4,"col":5},{"id":78,"row":1,"col":19},{"id":99,"row":2,"col":6},{"id":61,"row":2,"col":18},{"id":96,"row":3,"col":12},{"id":81,"row":1,"col":14},{"id":66,"row":5,"col":22},{"id":56,"row":6,"col":12},{"id":51,"row":2,"col":10},{"id":5,"row":0,"col":3},{"id":55,"row":6,"col":19},{"id":50,"row":3,"col":14},{"id":43,"row":3,"col":13},{"id":87,"row":3,"col":17},{"id":69,"row":6,"col":10},{"id":49,"row":5,"col":16},{"id":6,"row":0,"col":4},{"id":107,"row":4,"col":18},{"id":7,"row":5,"col":3},{"id":103,"row":6,"col":20},{"id":106,"row":4,"col":9},{"id":58,"row":3,"col":20},{"id":33,"row":5,"col":13},{"id":41,"row":1,"col":4},{"id":72,"row":1,"col":17},{"id":59,"row":1,"col":9},{"id":74,"row":4,"col":4},{"id":91,"row":4,"col":20},{"id":64,"row":2,"col":17},{"id":8,"row":0,"col":0},{"id":90,"row":1,"col":18},{"id":23,"row":5,"col":10},{"id":104,"row":0,"col":8},{"id":52,"row":5,"col":19},{"id":31,"row":1,"col":13},{"id":54,"row":0,"col":12},{"id":25,"row":6,"col":4},{"id":26,"row":4,"col":3},{"id":80,"row":1,"col":20},{"id":48,"row":4,"col":12},{"id":77,"row":6,"col":16},{"id":97,"row":2,"col":14},{"id":94,"row":6,"col":9},{"id":82,"row":6,"col":17},{"id":9,"row":3,"col":4},{"id":10,"row":5,"col":14},{"id":89,"row":0,"col":20},{"id":53,"row":4,"col":8},{"id":36,"row":2,"col":5},{"id":60,"row":4,"col":17},{"id":88,"row":2,"col":13},{"id":84,"row":6,"col":6},{"id":57,"row":2,"col":9},{"id":111,"row":3,"col":19},{"id":76,"row":0,"col":18},{"id":44,"row":2,"col":2},{"id":12,"row":0,"col":9},{"id":110,"row":5,"col":17},{"id":13,"row":0,"col":14},{"id":14,"row":1,"col":2},{"id":45,"row":3,"col":18},{"id":39,"row":5,"col":5},{"id":15,"row":0,"col":13},{"id":32,"row":3,"col":3},{"id":86,"row":2,"col":8},{"id":16,"row":3,"col":9},{"id":79,"row":5,"col":20},{"id":11,"row":4,"col":2},{"id":27,"row":5,"col":12},{"id":75,"row":0,"col":5},{"id":101,"row":4,"col":10},{"id":28,"row":0,"col":10},{"id":93,"row":1,"col":3},{"id":35,"row":1,"col":0},{"id":67,"row":5,"col":8},{"id":71,"row":3,"col":5},{"id":17,"row":2,"col":4},{"id":18,"row":5,"col":6},{"id":105,"row":5,"col":9},{"id":46,"row":3,"col":10},{"id":109,"row":0,"col":19},{"id":29,"row":1,"col":8},{"id":98,"row":4,"col":13},{"id":34,"row":1,"col":12},{"id":19,"row":6,"col":8},{"id":83,"row":6,"col":18},{"id":95,"row":6,"col":3},{"id":100,"row":5,"col":18},{"id":85,"row":0,"col":17},{"id":70,"row":3,"col":8},{"id":20,"row":3,"col":6},{"id":40,"row":6,"col":13},{"id":47,"row":0,"col":6},{"id":92,"row":6,"col":22},{"id":37,"row":4,"col":16},{"id":63,"row":1,"col":10},{"id":21,"row":2,"col":3},{"id":112,"row":3,"col":2},{"id":30,"row":1,"col":5},{"id":42,"row":6,"col":5},{"id":22,"row":5,"col":4}]}
   ,Default: {"rowCount":"7","colCount":"23","heroes":[{"id":102,"row":6,"col":0},{"id":73,"row":1,"col":2},{"id":68,"row":6,"col":16},{"id":1,"row":0,"col":8},{"id":2,"row":4,"col":0},{"id":3,"row":4,"col":16},{"id":65,"row":5,"col":22},{"id":38,"row":0,"col":4},{"id":4,"row":4,"col":8},{"id":62,"row":1,"col":12},{"id":78,"row":1,"col":3},{"id":99,"row":2,"col":1},{"id":61,"row":5,"col":9},{"id":96,"row":1,"col":6},{"id":81,"row":5,"col":4},{"id":66,"row":1,"col":20},{"id":56,"row":5,"col":8},{"id":51,"row":0,"col":6},{"id":5,"row":0,"col":16},{"id":55,"row":5,"col":21},{"id":50,"row":5,"col":19},{"id":43,"row":5,"col":17},{"id":87,"row":2,"col":17},{"id":69,"row":5,"col":1},{"id":49,"row":0,"col":5},{"id":6,"row":0,"col":9},{"id":107,"row":2,"col":5},{"id":7,"row":0,"col":0},{"id":103,"row":2,"col":3},{"id":106,"row":2,"col":11},{"id":58,"row":1,"col":18},{"id":33,"row":4,"col":20},{"id":41,"row":4,"col":12},{"id":72,"row":1,"col":14},{"id":59,"row":1,"col":1},{"id":74,"row":6,"col":17},{"id":91,"row":1,"col":5},{"id":64,"row":1,"col":19},{"id":8,"row":0,"col":10},{"id":90,"row":2,"col":18},{"id":23,"row":0,"col":3},{"id":104,"row":2,"col":4},{"id":52,"row":5,"col":20},{"id":31,"row":4,"col":17},{"id":54,"row":4,"col":6},{"id":25,"row":0,"col":21},{"id":26,"row":4,"col":18},{"id":80,"row":2,"col":8},{"id":48,"row":1,"col":11},{"id":77,"row":5,"col":3},{"id":97,"row":5,"col":6},{"id":94,"row":6,"col":8},{"id":82,"row":5,"col":12},{"id":9,"row":0,"col":11},{"id":10,"row":0,"col":12},{"id":89,"row":2,"col":9},{"id":53,"row":1,"col":17},{"id":36,"row":4,"col":21},{"id":60,"row":5,"col":0},{"id":88,"row":5,"col":13},{"id":84,"row":1,"col":22},{"id":57,"row":1,"col":0},{"id":76,"row":6,"col":18},{"id":44,"row":4,"col":13},{"id":12,"row":0,"col":13},{"id":110,"row":2,"col":6},{"id":13,"row":0,"col":17},{"id":14,"row":4,"col":1},{"id":45,"row":5,"col":18},{"id":39,"row":5,"col":16},{"id":15,"row":4,"col":10},{"id":32,"row":1,"col":8},{"id":86,"row":2,"col":16},{"id":16,"row":4,"col":2},{"id":79,"row":6,"col":19},{"id":11,"row":4,"col":9},{"id":27,"row":0,"col":22},{"id":75,"row":1,"col":21},{"id":101,"row":2,"col":19},{"id":28,"row":4,"col":3},{"id":93,"row":5,"col":14},{"id":35,"row":1,"col":9},{"id":67,"row":5,"col":11},{"id":71,"row":5,"col":2},{"id":17,"row":0,"col":18},{"id":18,"row":0,"col":1},{"id":105,"row":2,"col":21},{"id":46,"row":1,"col":10},{"id":109,"row":6,"col":9},{"id":29,"row":4,"col":4},{"id":98,"row":2,"col":0},{"id":34,"row":1,"col":16},{"id":19,"row":0,"col":2},{"id":83,"row":1,"col":4},{"id":95,"row":2,"col":10},{"id":100,"row":2,"col":2},{"id":85,"row":5,"col":5},{"id":70,"row":1,"col":13},{"id":20,"row":0,"col":14},{"id":40,"row":4,"col":11},{"id":47,"row":4,"col":14},{"id":92,"row":6,"col":20},{"id":37,"row":4,"col":22},{"id":63,"row":5,"col":10},{"id":21,"row":0,"col":19},{"id":30,"row":4,"col":19},{"id":42,"row":4,"col":5},{"id":22,"row":0,"col":20},{"id":111,"row":2,"col":20},{"id":112,"row":6,"col":21}]}
};