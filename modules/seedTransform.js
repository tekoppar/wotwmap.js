function distance(a, b) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}

const InkwaterMarsh = "Inkwater Marsh",
    MidnightBurrows = "Midnight Burrows",
    WellspringGlades = "Wellspring Glades",
    BaursReach = "Baurs Reach",
    MouldwoodDepths = "Mouldwood Depths",
    WindsweptWastes = "Windswept Wastes",
    SilentWoods = "Silent Woods",
    WindtornRuins = "Windtorn Ruins",
    LumaPools = "Luma Pools",
    TheWellspring = "The Wellspring",
    KwoloksHollow = "Kwoloks Hollow";

//abilityType
const Bash = 0,
    WallJump = 3,
    DoubleJump = 5,
    Launch = 8,
    Feather = 14,
    WaterBreath = 23,
    LightBurst = 51,
    Grapple = 57,
    Flash = 62,
    Spike = 74,
    Regenerate = 77,
    SpiritArc = 97,
    SpiritSmash = 98,
    //"Torch":, ???
    //"SpiritEdge":, ???
    Burrow = 101,
    Dash = 102,
    WaterDash = 104,
    TeleportSpell = 105,
    SpiritStar = 106,
    Seir = 108,
    Blaze = 115,
    Sentry = 116,
    Flap = 118,
    DamageUpgrade1 = 120,
    DamageUpgrade2 = 121,
    NONE = 255;

const Overcharge = 1,
    TripleJump = 2,
    Wingclip = 3,
    Bounty = 4,
    Swap = 5,
    Magnet = 8,
    Splinter = 9,
    Reckless = 13,
    Quickshot = 14,
    Resilience = 18,
    LightHarvest = 19,
    Vitality = 22,
    LifeHarvest = 23,
    EnergyHarvest = 25,
    Energy = 26,
    LifePact = 27,
    LastStand = 28,
    Secret = 30,
    UltraBash = 32,
    UltraGrapple = 33,
    Overflow = 34,
    Thorn = 35,
    Catalyst = 36,
    Turmoil = 38,
    Sticky = 39,
    Finesse = 40,
    SpiritSurge = 41,
    Lifeforce = 43,
    Deflector = 44,
    Fracture = 46,
    Arcing = 47;

//uberStateGroup consts
const swampStateGroup = 21786,
    hubUberStateGroup = 42178,
    _petrifiedForestGroup = 58674,
    inkwaterMarshStateGroup = 9593,
    howlsDenGroup = 11666,
    lumaPoolsStateGroup = 5377,
    mouldwoodDepthsGroup = 18793,
    baursReachGroup = 28895,
    lagoonStateGroup = 945,
    questUberStateGroup = 14019,
    howlsOriginGroup = 24922,
    waterMillStateGroupDescriptor = 37858,
    playerUberStateGroupDescriptor = 3440,
    windsweptWastesGroupDescriptor = 20120,
    willowsEndGroup = 16155,
    kwolokGroupDescriptor = 937,
    raceGroup = 44964,
    corruptedPeakGroup = 36153,
    achievementsGroup = 33399,
    kwoloksCavernThroneRoomGroup = 46462,
    windtornRuinsGroup = 10289,
    wellspringGroupDescriptor = 53632,
    pickupsGroup = 23987,
    winterForestGroupDescriptor = 28287,
    desertAGroup = 7228,
    npcsStateGroup = 48248;

//DefaultUberStates
const fastTravelEnabledUberState = 16489,
    savePedestalSwampIntroTop = 10185,
    builderProjectSpiritWell = 16825,
    torchHolded = 47458,
    eyesPlacedIntoStatue = 1038,
    entranceStatueOpened = 64003,
    risingPedestals = 54318,
    mokiTorchPlayed = 3621,
    leverA = 50432;

//ShortCutscenes
const hasOriUsedSavePedestal = 4220,
    mokiFoulWaterVignetteTriggered = 41644,
    mokiCleanWaterVignetteTriggered = 37811,
    playedMokiVignette = 35023,
    stenchTease = 3846,
    wispSequencePlayedOut = 9367,
    baurReachWispIntro = 40451,
    mouldwoodDepthsWisptIntro = 37364,
    //wispSequencePlayedOut = 55196,
    interactedWithTokk = 45740,
    rescuedOpher = 25031,
    talkedToKwolok = 21700,
    findToadQuestUberState = 48794;
//cleanseWellspringQuestUberState = 34641;

//LongCutscenes
const powlTeaseTriggered = 51018,
    //powlTeaseTriggered = 2108,
    playedNaruGumoCutaway = 23225,
    introPlayed = 32922;

//DialogAndRumors
const marshKeystoneQuest = 51645,
    metOpherHubAfterWatermill = 5982,
    metOpherHubBeforeWatermill = 55122,
    opherMentiodedWatermill = 46745,
    twillenKwolokDialogState = 25267,
    twillenHubDialogState = 12799,
    twillenMournedKu = 34756,
    twillenGaveRumor = 6194,
    metGrom = 9394,
    desertRumorState = 57552,
    gromIntroSequencePlayed = 50418,
    gromGaveWarning = 7646,
    gromTalkedAboutDesert = 45751,
    gromTalkedAboutWatermill = 54806,
    gromTalkedAboutMouldwoodGate = 46471,
    gromTalkedAboutBaur = 7321,
    gromTalkedAboutLagoon = 30073,
    builderProjectHouses = 51230,
    luposMapQuest = 24683,
    talkedInHub = 10337,
    willowsEndSeirExitCutscene = 8985,
    metOpherHub = 56448,
    gromMentionedOre = 5186,
    wispCutscenePlayed = 58268,
    playerPurchasedWeaponMasterUpgrade = 20131;

//Kuberstates
const narratorLineShown = 22056,
    powlVignettePlayed = 32369,
    //powlVignettePlayed = 14539,
    skeletonState = 61252,
    narratorLineShownHowl = 10677,
    featherVignettePlayed = 36965,
    petrifiedOwlStalkSequenceCompleted = 7636,
    winterForestWispQuestUberState = 8973,
    lagoonWispQuestUberState = 35087,
    desertWispQuestUberState = 35399,
    mouldwoodDepthsWispQuestUberState = 45931,
    petrifiedForestNewTransitionOriVignettePlayed = 46980,
    petrifiedForestNewTransitionKuVignettePlayed = 44798,
    lastGlobalEvent = 54675,
    findKuQuest = 34504,
    lookForKuQuestUberState = 44500;

//KeystoneDoors
const e3DesertG_clone0_KeystoneDoor = 28786,
    swampTorchIntroductionADoorWithTwoSlotsBooleanDescriptor = 42309,
    swampNightcrawlerCavernADoorWithTwoSlotsBooleanDescriptor = 47445,
    doorWithTwoSlots = 59990,
    mouldwoodDepthsGDoorWithTwoSlotsOpened = 10758,
    keystoneGate = 47621,
    doorWithFourSlots = 4290,
    //keystoneGate = 49900,
    //doorWithFourSlots = 3171,
    doorState = 21500,
    mouldwoodDepthsHDoorWithFourSlotsOpened = 41544;

//UberStateDefaults
const cleanseWellspringQuestUberState = 34641,
    finishedWatermillEscape = 12379,
    watermillEscapeState = 10720,
    nightCrawlerChaseStarted = 30656,
    nightCrawlerDefeated = 40322,
    //findToadQuestUberState = 48794,
    wispRewardPickupKwolok = 59806,
    petrifiedOwlBossState = 47278,
    kwolokDropRace = 25545,
    wellspringRace = 11512,
    silentWoodlandRace = 22703,
    baursReachWindTunnelRace = 23661,
    mouldwoodDepthsRace = 28552,
    desertRace = 30767,
    inkwaterMarshRace = 45951,
    lumaPoolsRace = 54686,
    wispRewardPickupBaur = 25522,
    wispRewardPickupMouldwood = 63291,
    wispRewardPickupLagoon = 49747,
    wispRewardPickupWindtorn = 22102,
    elevatorCompleteState = 23584,
    vineAClear = 42976,
    vineBClear = 54940,
    vineCClear = 24290,
    vineDClear = 28478,
    vineEClear = 3588,
    vineFClear = 65277,
    vineGClear = 41488,
    vineHClear = 60752,
    //petrifiedForestNewTransitionOriVignettePlayed = 46980,
    hornBugBossState = 48534,
    energyContainersCounter = 41928,
    healthContainersCounter = 52378,
    kwolokBossState = 58403,
    spiderBossState = 26713,
    laserShooterBossState = 12971,
    savePedestalMidnightBurrows = 42531,
    savePedestalInkwaterMarsh = 10185,
    savePedestalHowlsDen = 61594,
    savePedestalLumaPoolsA = 58183,
    savePedestalLumaPoolsB = 1370,
    savePedestalWellspring = 18181,
    savePedestalBaursReach = 54235,
    savePedestalKwoloksHollow = 26601,
    savePedestalMouldwood = 38871,
    savePedestalWillowsEnd = 41465,
    savePedestalWillowsEndShriek = 50867,
    savePedestalSilentWoodsA = 7071,
    savePedestalSilentWoodsB = 1965,
    savePedestalWindsweptWastesA = 10029,
    savePedestalWindsweptWastesB = 49994,
    savePedestalWindtornRuinsA = 41398,
    savePedestalWindtornRuinsB = 4928,
    savePedistalGladesTown = 42096;

class SeedTransform {

    constructor(map, iconFactory) {
        this.mapClass = map;
        this.iconFactoryClass = iconFactory;
        this.mapItems = [];
        this.editorElements = {};
        this.editorPickupTypeElement;
        this.selectedItem = undefined;
        this.selectedIcon = undefined;
        this.selectUberGroups;
        this.selectUbers;
        this.newItemContainer;
        this.seedLineIndex = 0;
        this.seedObjectLineIndex = 0;
        this.pickupOnSpawnGroupCount = 0;
        this.currentHoveredFieldset = undefined;

        this.PickupType = {
            "NewSeedObject": -1,
            "SpiritLight": 0,
            "Resource": 1,
            "Ability": 2,
            "Shard": 3,
            "SystemCommand": 4,
            "Teleporter": 5,
            "Message": 6,
            "Multi": 7,
            "UberState": 8,
            "QuestEvent": 9,
            "BonusItem": 10
        };

        this.PickupTypeReverse = {};

        this.SysCommandType = {
            "Save": 0,
            "ProcUberStates": 1,
            "ProcUberStatesAndSurpress": 2,
            "SupressMagic": 3,
            "StopIfEqual": 4,
            "StopIfGreater": 5,
            "StopIfLess": 6,
            "SetState": 7,
            "SetLocation": 8,
            "StartingLocationOnGameStart": 9
        };

        this.SysCommandTypeReverse = {};

        this.SysSate = {
            "KwolokDoorAvailable": 0,
            "DayTime": 1,
            "HowlEscape": 2
        };

        this.QuestEventType = {
            "Water": 0
        }

        this.QuestEventTypeReverse = {};

        this.SeedFlags = {
            "NoHints": "No Hints",
            "NoKSDoors": "No KS Doors",
            "ForceWisps": "Force Wisps",
            "ForceTrees": "Force Trees",
            "ForceQuests": "Force Quests",
            "NoFreeSword": "No Free Sword",
            "RainyMarsh": "Rainy Marsh"
        };

        this.TeleporterType = {
            "Burrows": 0,
            "Den": 1,
            "East Pools": 2,
            "Wellspring": 3,
            "Reach": 4,
            "Hollow": 5,
            "Depths": 6,
            "West Woods": 7,
            "East Woods": 8,
            "West Wastes": 9,
            "East Wastes": 10,
            "Outer Ruins": 11,
            "Willow's End": 12,
            "West Pools": 13,
            "Inner Ruins": 14,
            "Shriek": 15,
            "Marsh": 16,
            "Glades": 17
        };

        this.UberStateTypes = [
            'bool',
            'byte',
            'int',
            'float',
            'teleporter'
        ];

        this.TeleporterTypeReverse = {};

        this.ResourceType = {
            "Health Fragment": 0,
            "Energy Fragment": 1,
            "Gorlek Ore": 2,
            "Keystone": 3,
            "Shard Slot": 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9
        };

        this.ResourceTypeReverse = {};

        this.LocType = {
            SpiritLight: 0,
            Shard: 1,
            Health: 2,
            Energy: 3,
            Ore: 4,
            ShardSlot: 5,
            Keystone: 6,
            Eyestone: 7,
            Quest: 8,
            Tree: 9,
            Shop: 10,
            Unknown: 15
        };

        this.LocTypeReverse = {};

        this.AbilityType = {
            Bash: 0,
            ChargeFlame: 1,
            WallJump: 3,
            Stomp: 4,
            DoubleJump: 5,
            Launch: 8,
            9: 9,
            Magnet: 10,
            UltraMagnet: 11,
            Climb: 12,
            Feather: 14,
            SpiritFlame: 15,
            RapidFlame: 17,
            SplitFlameUpgrade: 18,
            SoulEfficiency: 22,
            WaterBreath: 23,
            ChargeFlameBlast: 27,
            ChargeFlameBurn: 28,
            DoubleJumpUpgrade: 29,
            BashBuff: 30,
            UltraDefense: 31,
            HealthEfficiency: 32,
            Sense: 33,
            UltraStomp: 34,
            SparkFlame: 36,
            QuickFlame: 37,
            MapMarkers: 38,
            EnergyEfficiency: 39,
            HealthMarkers: 40,
            EnergyMarkers: 41,
            AbilityMarkers: 42,
            Rekindle: 43,
            Regroup: 44,
            ChargeFlameEfficiency: 45,
            UltraSoulFlame: 46,
            SoulFlameEfficiency: 47,
            CinderFlame: 48,
            UltraSplitFlame: 49,
            LightBurst: 51,
            Grapple: 57,
            Flash: 62,
            Spike: 74,
            Regenerate: 77,
            SpiritArc: 97,
            SpiritSmash: 98,
            Torch: 99,
            SpiritEdge: 100,
            Burrow: 101,
            Dash: 102,
            WaterDash: 104,
            TeleportSpell: 105,
            SpiritStar: 106,
            Seir: 108,
            BowCharge: 109,
            Swordstaff: 110,
            Chainsword: 111,
            SwordCharge: 113,
            HammerCharge: 114,
            Blaze: 115,
            Sentry: 116,
            Flap: 118,
            WeaponCharge: 119,
            DamageUpgrade1: 120,
            DamageUpgrade2: 121,
            NONE: 255
        };

        this.AbilityTypeReverse = {};

        this.ShardType = {
            Overcharge: 1,
            TripleJump: 2,
            Wingclip: 3,
            Bounty: 4,
            Swap: 5,
            Magnet: 8,
            Splinter: 9,
            Reckless: 13,
            Quickshot: 14,
            Resilience: 18,
            LightHarvest: 19,
            Vitality: 22,
            LifeHarvest: 23,
            EnergyHarvest: 25,
            Energy: 26,
            LifePact: 27,
            LastStand: 28,
            Secret: 30,
            UltraBash: 32,
            UltraGrapple: 33,
            Overflow: 34,
            Thorn: 35,
            Catalyst: 36,
            Turmoil: 38,
            Sticky: 39,
            Finesse: 40,
            SpiritSurge: 41,
            Lifeforce: 43,
            Deflector: 44,
            Fracture: 46,
            Arcing: 47
        }

        this.ShardTypeReverse = {};

        this.uberGroupID = {
            swampStateGroup: 21786,
            hubUberStateGroup: 42178,
            _petrifiedForestGroup: 58674,
            inkwaterMarshStateGroup: 9593,
            howlsDenGroup: 11666,
            lumaPoolsStateGroup: 5377,
            mouldwoodDepthsGroup: 18793,
            baursReachGroup: 28895,
            lagoonStateGroup: 945,
            questUberStateGroup: 14019,
            howlsOriginGroup: 24922,
            waterMillStateGroupDescriptor: 37858,
            playerUberStateGroupDescriptor: 3440,
            windsweptWastesGroupDescriptor: 20120,
            willowsEndGroup: 16155,
            kwolokGroupDescriptor: 937,
            raceGroup: 44964,
            corruptedPeakGroup: 36153,
            achievementsGroup: 33399,
            kwoloksCavernThroneRoomGroup: 46462,
            windtornRuinsGroup: 10289,
            wellspringGroupDescriptor: 53632,
            wellspringGladesGroup: 44310,
            pickupsGroup: 23987,
            winterForestGroupDescriptor: 28287,
            desertAGroup: 7228,
            bashIntroductionA__clone1Group: 13428,
            pickupOnSpawnGroup: 3,
            twillenShopDontWorry: 2,
            opherShopDontWorry: 1,
            treesDontWorry: 0,
            npcsStateGroup: 48248,
            testUberStateGroup: 6837,
            newSeedObject: -1
        };

        this.uberGroupIDReverse = {};

        this.uberID = {
            "MarshSpawn.RockHC": "60210",
            "MarshSpawn.FirstPickupEX": "49485",
            "MarshSpawn.GrappleHC": "25761",
            "MarshSpawn.BridgeEX": "6987",
            "MarshSpawn.ResilienceShard": "59173",
            "MarshSpawn.ResilienceOre": "29892",
            "MarshSpawn.BashEC": "7152",
            "MarshSpawn.PreLupoEX": "5929",
            "MarshSpawn.LupoMap": "18767",
            "MarshSpawn.RegenTree": "77",
            "MarshSpawn.LeverEC": "17920",
            "MarshSpawn.LeftTokkEX": "59513",
            "MarshSpawn.FightRoomEX": "42047",
            "MarshSpawn.CaveKS": "64677",
            "MarshSpawn.TheMissingKey": "51645=3",
            "MarshSpawn.CaveOre": "23858",
            "MarshSpawn.LongSwimEX": "23154",
            "MarshSpawn.BurrowOre": "20382",
            "MarshSpawn.LifepactShard": "50415",
            "MarshSpawn.BurrowsApproachLedgeEX": "32076",
            "MarshSpawn.CrusherSwimEX": "62138",
            "MarshSpawn.IntoTheBurrows": "18458=4",
            "MarshSpawn.RecklessShard": "9864",
            "MarshSpawn.FangEC": "61706",
            "MarshSpawn.FangQI": "27539",
            "MarshSpawn.ALittleBraver": "15983=3",
            "MidnightBurrows.DamageTree": "121",
            "MidnightBurrows.LeftKS": "60358",
            "MidnightBurrows.RightKS": "47244",
            "MidnightBurrows.UpperKS": "34250",
            "MidnightBurrows.LowerKS": "33535",
            "MidnightBurrows.LupoMap": "45538",
            "MidnightBurrows.DeflectorShard": "46311",
            "MidnightBurrows.TabletQI": "52747",
            "HowlsDen.UpperEX": "43668",
            "HowlsDen.RightHC": "28908",
            "HowlsDen.LeftHC": "61304",
            "HowlsDen.AboveDoorKS": "22068",
            "HowlsDen.MagnetShard": "63545",
            "HowlsDen.SwordTree": "100",
            "HowlsDen.BoneOre": "2046",
            "HowlsDen.AboveTPEX": "16206",
            "HowlsDen.LaserKS": "2852",
            "HowlsDen.CombatShrine": "13993",
            "HowlsDen.DoubleJumpEX": "17818",
            "HowlsDen.StickyShard": "27134",
            "HowlsDen.DoubleJumpTree": "5",
            "MarshPastOpher.TrialLeftEX": "5253",
            "MarshPastOpher.TrialOre": "25989",
            "MarshPastOpher.TrialEC": "27562",
            "MarshPastOpher.TrialHC": "20194",
            "MarshPastOpher.TrialRightEX": "10413",
            "MarshPastOpher.CombatShrine": "18109",
            "MarshPastOpher.SwingPoleEX": "59344",
            "MarshPastOpher.LeftEyestone": "27433",
            "MarshPastOpher.RightEyestone": "37225",
            "MarshPastOpher.BowEC": "10295",
            "MarshPastOpher.BowTree": "97",
            "MarshPastOpher.CeilingEX": "50255",
            "MarshPastOpher.PoolsPathEC": "26457",
            "MarshPastOpher.PoolsPathEX": "10833",
            "WestHollow.CrusherHC": "61897",
            "WestHollow.FarLeftEX": "16163",
            "WestHollow.RockPuzzleEX": "2538",
            "WestHollow.HiddenEC": "8518",
            "WestHollow.QuickshotShard": "61017",
            "WestHollow.SwimEC": "24175",
            "WestHollow.LupoMap": "3638",
            "WestHollow.TrialHC": "2463",
            "WestHollow.BelowLupoEX": "48192",
            "WestHollow.AboveDashEX": "61744",
            "WestHollow.DashRightEX": "37926",
            "WestHollow.CrusherEX": "50176",
            "WestHollow.DashTree": "102",
            "EastHollow.HandToHandMap": "26318=1",
            "EastHollow.GladesApproachOre": "10729",
            "EastHollow.HornBeetleFightEX": "13413",
            "EastHollow.SpikeLanternEX": "5568",
            "EastHollow.SecretRoofEX": "45987",
            "EastHollow.MortarEX": "19529",
            "EastHollow.BashEC": "23772",
            "EastHollow.BashHC": "59730",
            "EastHollow.BashEX": "30182",
            "EastHollow.BashTree": "0",
            "EastHollow.KwoloksWisdom": "50597=4",
            "EastHollow.RightKwolokEX": "20983",
            "EastHollow.SilentSwimEC": "9583",
            "EastHollow.SplinterShard": "62973",
            "EastHollow.KwolokSwimOre": "37897",
            "EastHollow.KwolokSwimLeftEX": "29054",
            "EastHollow.KwolokSwimRightEX": "20780",
            "EastHollow.DepthsExteriorEX": "42980",
            "GladesTown.HandToHandPouch": "26318=2",
            "GladesTown.HandToHandLantern": "26318=6",
            "GladesTown.HandToHandCanteen": "26318=9",
            "GladesTown.HandToHandSoup": "26318=4",
            "GladesTown.AcornQI": "2782",
            "GladesTown.IntoTheDarkness": "33776=3",
            "GladesTown.HoleHutEC": "52786",
            "GladesTown.AboveGromHC": "29043",
            "GladesTown.LupoSwimHC": "17523",
            "GladesTown.UpperOre": "27110",
            "GladesTown.LowerOre": "23125",
            "GladesTown.ArcingShard": "23015",
            "GladesTown.BountyShard": "14014",
            "GladesTown.LupoSoupEX": "51468",
            "GladesTown.BraveMokiHutEX": "13327",
            "GladesTown.MotayHutEX": "57455",
            "GladesTown.HoleHutEX": "30520",
            "GladesTown.UpperLeftEX": "59623",
            "GladesTown.LupoSwimMiddleEX": "9780",
            "GladesTown.CaveBurrowEX": "18448",
            "GladesTown.BelowHoleHutEX": "6117",
            "GladesTown.KeyMokiHutEX": "51934",
            "GladesTown.AboveTpEX": "42762",
            "GladesTown.AboveCaveEX": "30206",
            "GladesTown.LupoSwimLeftEX": "37028",
            "GladesTown.UpdraftCeilingEX": "63404",
            "GladesTown.LeafPileEX": "44748",
            "GladesTown.DamageTree": "120",
            "GladesTown.RebuildTheGlades": "44578=2",
            "GladesTown.ADiamondInTheRough": "14832",
            "GladesTown.RegrowTheGlades": "26394=2",
            "WestGlades.GrappleEX": "12019",
            "WestGlades.AbovePlantEX": "31036",
            "WestGlades.LowerPoolEX": "40657",
            "WestGlades.UpperPoolEX": "45744",
            "WestGlades.SwimEC": "17761",
            "WestGlades.LeftOre": "6703",
            "WestGlades.RightOre": "11846",
            "WestGlades.ShrineHC": "36911",
            "WestGlades.CombatShrine": "9902",
            "OuterWellspring.RightWallOre": "25556",
            "OuterWellspring.RightWallEC": "1911",
            "OuterWellspring.RightWallEX": "51706",
            "OuterWellspring.TrialOre": "58286",
            "OuterWellspring.UltraGrappleShard": "12104",
            "OuterWellspring.HiddenHC": "17403",
            "OuterWellspring.EntranceRoofEX": "42264",
            "OuterWellspring.WheelEX": "6500",
            "OuterWellspring.BasementEC": "6869",
            "OuterWellspring.LifeHarvestShard": "53934",
            "OuterWellspring.SwimEX": "62356",
            "OuterWellspring.SwimOre": "21124",
            "OuterWellspring.TheLostCompass": "20667=3",
            "InnerWellspring.ThornShard": "31426",
            "InnerWellspring.ThornEX": "22107",
            "InnerWellspring.ThreeWheelsEX": "45906",
            "InnerWellspring.WaterSwitchEX": "45656",
            "InnerWellspring.DrainHC": "25833",
            "InnerWellspring.DrainEX": "41380",
            "InnerWellspring.LaserOre": "58846",
            "InnerWellspring.LeverEC": "57552",
            "InnerWellspring.LupoEX": "41911",
            "InnerWellspring.LupoMap": "1590",
            "InnerWellspring.ShortcutWheelEX": "33063",
            "InnerWellspring.GrappleTreeEX": "31136",
            "InnerWellspring.GrappleTree": "57",
            "InnerWellspring.AboveSpinArenaEX": "64086",
            "InnerWellspring.HandToHandHerbs": "26318=3",
            "InnerWellspring.RotateRoomEX": "52110",
            "InnerWellspring.RotateRoomOre": "47533",
            "InnerWellspring.NeedleQI": "41227",
            "InnerWellspring.LibraryEX": "59022",
            "InnerWellspring.AboveTpEX": "2797",
            "InnerWellspring.BlueMoonSeed": "24142",
            "InnerWellspring.SwimOre": "32932",
            "InnerWellspring.EscapeRevisitEX": "56444",
            "PoolsApproach.CurrentEX": "10682",
            "PoolsApproach.AboveWheelEX": "14530",
            "PoolsApproach.MillPathHC": "37243",
            "PoolsApproach.MillPathEC": "21334",
            "PoolsApproach.MillPathEX": "58723",
            "PoolsApproach.BurrowsPathEX": "21727",
            "EastPools.RightOre": "34852",
            "EastPools.TwoCrushersEX": "13832",
            "EastPools.CurrentEX": "17396",
            "EastPools.BelowLeverEX": "27204",
            "EastPools.AboveDoorOre": "19694",
            "EastPools.PurpleWallHC": "63201",
            "EastPools.HandToHandSpyglass": "26318=8",
            "EastPools.AboveTpEX": "7540",
            "EastPools.LupoOre": "12235",
            "EastPools.UltraBashShard": "25996",
            "EastPools.FightRoomHC": "45774",
            "EastPools.EnergyHarvestShard": "40328",
            "EastPools.LupoEX": "35440",
            "EastPools.LupoMap": "1557",
            "EastPools.BehindCrusherEX": "18345",
            "EastPools.GrassSeed": "28662",
            "UpperPools.LowerKS": "46926",
            "UpperPools.UpperLeftKS": "35091",
            "UpperPools.UpperMidKS": "16426",
            "UpperPools.UpperRightKS": "41881",
            "UpperPools.FishPoolEX": "33110",
            "UpperPools.FishPoolOre": "31434",
            "UpperPools.BubblesEC": "1600",
            "UpperPools.LeftBubblesEX": "628",
            "UpperPools.RightBubblesEX": "21860",
            "UpperPools.SwimDashTree": "104",
            "UpperPools.CurrentEX": "52791",
            "UpperPools.RoofEX": "33180",
            "UpperPools.WaterfallEC": "32750",
            "WestPools.BurrowEX": "62180",
            "WestPools.BurrowOre": "65019",
            "WestPools.TpEX": "25391",
            "WestPools.EscapeRevisitEX": "44122",
            "WoodsEntry.DollQI": "57399",
            "WoodsEntry.TreeSeed": "7470",
            "WoodsEntry.MudPitEX": "8487",
            "WoodsEntry.LedgeOre": "28710",
            "WoodsEntry.LeafPileEX": "22472",
            "WoodsEntry.TpEX": "59691",
            "WoodsEntry.LowerKS": "40073",
            "WoodsEntry.UpperKS": "11736",
            "WoodsMain.RightKS": "43033",
            "WoodsMain.UpperKS": "19769",
            "WoodsMain.LeftKS": "42531",
            "WoodsMain.LowerKS": "780",
            "WoodsMain.BehindWallOre": "26274",
            "WoodsMain.LowerLeafPileEX": "42158",
            "WoodsMain.MiddleLeafPileEX": "33893",
            "WoodsMain.UpperLeafPileEX": "30908",
            "WoodsMain.YellowWallEX": "59714",
            "WoodsMain.HiddenOre": "20713",
            "WoodsMain.HiddenEX": "54516",
            "WoodsMain.BelowKeystonesEX": "23186",
            "WoodsMain.BehindDoorRoofEX": "64057",
            "WoodsMain.PetrifiedHowlEX": "17974",
            "WoodsMain.OverflowShard": "25183",
            "WoodsMain.CombatShrine": "29265",
            "WoodsMain.ShrineEX": "32647",
            "WoodsMain.FeedingGroundsEX": "64484",
            "LowerReach.BelowBaurEX": "55384",
            "LowerReach.AboveBaurLowerEX": "24533",
            "LowerReach.AboveBaurUpperEX": "3777",
            "LowerReach.IcefallOre": "58675",
            "LowerReach.IcefallEX": "45337",
            "LowerReach.AboveDoorEX": "38143",
            "LowerReach.HiddenOre": "47529",
            "LowerReach.LupoMap": "29604",
            "LowerReach.MeltIceEX": "4301",
            "LowerReach.BurrowEX": "45066",
            "LowerReach.TPLeftEX": "36231",
            "LowerReach.BelowLupoEX": "38049",
            "LowerReach.BreakWallEX": "40609",
            "LowerReach.WindBottomEX": "35045",
            "LowerReach.WindHiddenEX": "54373",
            "LowerReach.HandToHandHat": "26318=5",
            "LowerReach.SnowballHC": "40744",
            "LowerReach.RoofLeftEX": "53283",
            "LowerReach.RoofRightEX": "46711",
            "LowerReach.FractureShard": "36359",
            "LowerReach.EscapeRevisitEX": "46404",
            "LowerReach.RightKS": "29898",
            "LowerReach.UpperLeftKS": "10823",
            "LowerReach.MiddleLeftKS": "37444",
            "LowerReach.BottomLeftKS": "18358",
            "LowerReach.TrialEX": "22761",
            "LowerReach.CatalystShard": "897",
            "UpperReach.LifeForceShard": "19630",
            "UpperReach.LifeForceEX": "32414",
            "UpperReach.LowerKS": "1053",
            "UpperReach.UpperKS": "50368",
            "UpperReach.MiddleLeftKS": "22382",
            "UpperReach.MiddleRightKS": "9949",
            "UpperReach.SoupOre": "23795",
            "UpperReach.SwingPoleEX": "40089",
            "UpperReach.SwimEX": "40242",
            "UpperReach.LightBurstTree": "51",
            "UpperReach.TreeOre": "39291",
            "UpperReach.WellEX": "7597",
            "UpperReach.SpringSeed": "32376",
            "UpperReach.HiddenEX": "2129",
            "UpperDepths.EntrySpikesEX": "19004",
            "UpperDepths.EntryRoofEX": "15396",
            "UpperDepths.EntryOre": "35351",
            "UpperDepths.RightEntryKS": "1914",
            "UpperDepths.LeftEntryKS": "58148",
            "UpperDepths.SwimEC": "26618",
            "UpperDepths.TeleporterEX": "29979",
            "UpperDepths.LeftHealthKS": "53953",
            "UpperDepths.RightHealthKS": "23986",
            "UpperDepths.LightcatcherSeed": "8192",
            "UpperDepths.BossPathEX": "18395",
            "UpperDepths.KeystoneHC": "42235",
            "UpperDepths.HiveEX": "6573",
            "LowerDepths.RaceStartHC": "62694",
            "LowerDepths.BelowDoorOre": "836",
            "LowerDepths.SpiritSurgeShard": "986",
            "LowerDepths.HandToHandSilk": "26318=7",
            "LowerDepths.CombatShrine": "31937",
            "LowerDepths.SwimEC": "28175",
            "LowerDepths.LupoMap": "48423",
            "LowerDepths.LeftEX": "2881",
            "LowerDepths.RightEX": "23799",
            "LowerDepths.FlashTree": "62",
            "LowerWastes.WestTPOre": "54494",
            "LowerWastes.PurpleWallEX": "56821",
            "LowerWastes.SunsetViewEX": "52086",
            "LowerWastes.SandBridgeOre": "46919",
            "LowerWastes.EerieGem": "58342",
            "LowerWastes.MuncherTunnelEC": "11785",
            "LowerWastes.SandPotHC": "62264",
            "LowerWastes.SandPotEX": "57781",
            "LowerWastes.MuncherPitEX": "10397",
            "LowerWastes.BottomRightEX": "224",
            "LowerWastes.BottomRightHC": "12941",
            "LowerWastes.LastStandShard": "50364",
            "LowerWastes.LastStandEX": "33275",
            "LowerWastes.MuncherClimbEX": "57133",
            "LowerWastes.SkeetoHiveEX": "8910",
            "LowerWastes.HandToHandMapstone": "26318=10",
            "LowerWastes.LupoMap": "61146",
            "LowerWastes.BurrowTree": "101",
            "LowerWastes.BurrowTreeEX": "19113",
            "LowerWastes.UpperPathEC": "50026",
            "LowerWastes.UpperPathEX": "48829",
            "LowerWastes.UpperPathHiddenEX": "17798",
            "LowerWastes.UpperPathHC": "59046",
            "LowerWastes.EastTPOre": "40245",
            "UpperWastes.LowerKS": "20282",
            "UpperWastes.UpperKS": "62117",
            "UpperWastes.TurmoilShard": "48605",
            "UpperWastes.KSDoorEX": "35329",
            "UpperWastes.LedgeEC": "22354",
            "UpperWastes.MissileSpawnEX": "30740",
            "UpperWastes.PurpleWallEX": "52812",
            "UpperWastes.PurpleWallHC": "18965",
            "UpperWastes.RoofEX": "2013",
            "UpperWastes.SpinLasersRightEX": "54275",
            "UpperWastes.SpinLasersMiddleEX": "48993",
            "UpperWastes.SpinLasersLowerEX": "61548",
            "UpperWastes.FlowersSeed": "20601",
            "UpperWastes.WallOre": "8370",
            "WindtornRuins.EscapeRevisitEC": "44555",
            "WindtornRuins.HandToHandComplete": "26318=11",
            "WeepingRidge.Ore": "3013",
            "WeepingRidge.LaunchTree": "8",
            "WeepingRidge.SpikeClimbEX": "36521",
            "WeepingRidge.PortalEX": "12077",
            "WillowsEnd.SpikesOre": "38979",
            "WillowsEnd.EntryEX": "49381",
            "WillowsEnd.PoisonfallHC": "46270",
            "WillowsEnd.LupoMap": "4045",
            "WillowsEnd.WindSpinOre": "9230",
            "WillowsEnd.RedirectEX": "55446",
            "WillowsEnd.UpperLeftEX": "23902",
            "WillowsEnd.UpperRightEX": "3662",
            "TwillenShop.Overcharge": "1",
            "TwillenShop.TripleJump": "2",
            "TwillenShop.Wingclip": "3",
            "TwillenShop.Swap": "5",
            "TwillenShop.LightHarvest": "19",
            "TwillenShop.Vitality": "22",
            "TwillenShop.Energy": "26",
            "TwillenShop.Finesse": "40",
            "OpherShop.WaterBreath": "23",
            "OpherShop.Spike": "74",
            "OpherShop.SpiritSmash": "98",
            "OpherShop.Teleport": "105",
            "OpherShop.SpiritStar": "106",
            "OpherShop.Blaze": "115",
            "OpherShop.Sentry": "116",
            "newSeedObject": -1
        }

        this.uberIDReverse = {};

        this.seedLocationToPos = {
            "MarshSpawn.CaveKS": {
                "x": "-852",
                "y": "-4404"
            },
            "MarshSpawn.ResilienceShard": {
                "x": "-790",
                "y": "-4335"
            },
            "MarshSpawn.FightRoomEX": {
                "x": "-783",
                "y": "-4452"
            },
            "MarshSpawn.LeftTokkEX": {
                "x": "-755",
                "y": "-4423"
            },
            "MarshSpawn.PreLupoEX": {
                "x": "-656",
                "y": "-4342"
            },
            "WestHollow.CrusherHC": {
                "x": "-254",
                "y": "-4225"
            },
            "MarshSpawn.RockHC": {
                "x": "-958",
                "y": "-4313"
            },
            "MarshPastOpher.BowTree": {
                "x": "-457",
                "y": "-4267"
            },
            "MarshPastOpher.SwingPoleEX": {
                "x": "-492",
                "y": "-4260"
            },
            "MarshSpawn.FirstPickupEX": {
                "x": "-764",
                "y": "-4313"
            },
            "MarshPastOpher.TrialRightEX": {
                "x": "-343",
                "y": "-4357"
            },
            "MarshPastOpher.BowEC": {
                "x": "-422",
                "y": "-4273"
            },
            "MarshSpawn.RegenTree": {
                "x": "-539",
                "y": "-4406"
            },
            "MarshSpawn.ALittleBraver": {
                "x": "-391",
                "y": "-4414"
            },
            "HowlsDen.UpperEX": {
                "x": "-433",
                "y": "-4420"
            },
            "MarshSpawn.FangQI": {
                "x": "-221",
                "y": "-4406"
            },
            "HowlsDen.AboveDoorKS": {
                "x": "-439",
                "y": "-4462"
            },
            "HowlsDen.AboveTPEX": {
                "x": "-389",
                "y": "-4503"
            },
            "HowlsDen.LaserKS": {
                "x": "-400",
                "y": "-4568"
            },
            "MarshPastOpher.TrialOre": {
                "x": "-501",
                "y": "-4340"
            },
            "HowlsDen.MagnetShard": {
                "x": "-239",
                "y": "-4441"
            },
            "MarshPastOpher.TrialEC": {
                "x": "-473",
                "y": "-4340"
            },
            "HowlsDen.LeftHC": {
                "x": "-569",
                "y": "-4454"
            },
            "HowlsDen.RightHC": {
                "x": "-332",
                "y": "-4439"
            },
            "TwillenShop.Vitality": {
                "shop": "Twillen"
            },
            "MarshSpawn.CaveOre": {
                "x": "-858",
                "y": "-4423"
            },
            "HowlsDen.SwordTree": {
                "x": "-296",
                "y": "-4483"
            },
            "HowlsDen.StickyShard": {
                "x": "-547",
                "y": "-4530"
            },
            "HowlsDen.DoubleJumpEX": {
                "x": "-507",
                "y": "-4537"
            },
            "MarshPastOpher.TrialLeftEX": {
                "x": "-527",
                "y": "-4354"
            },
            "TwillenShop.Wingclip": {
                "shop": "Twillen"
            },
            "OpherShop.Spike": {
                "shop": "Opher"
            },
            "TwillenShop.Swap": {
                "x": "-555",
                "y": "-4551"
            },
            "OpherShop.Sentry": {
                "shop": "Opher"
            },
            "OpherShop.SpiritSmash": {
                "shop": "Opher"
            },
            "MarshSpawn.BashEC": {
                "x": "-667",
                "y": "-4330"
            },
            "OpherShop.Blaze": {
                "shop": "Opher"
            },
            "OpherShop.SpiritStar": {
                "shop": "Opher"
            },
            "TwillenShop.Finesse": {
                "shop": "Twillen"
            },
            "UpperDepths.LeftHealthKS": {
                "x": "498",
                "y": "-4463"
            },
            "MarshSpawn.FangEC": {
                "x": "-233",
                "y": "-4385"
            },
            "MarshSpawn.BridgeEX": {
                "x": "-739",
                "y": "-4324"
            },
            "UpperDepths.KeystoneHC": {
                "x": "531",
                "y": "-4452"
            },
            "LowerDepths.LeftEX": {
                "x": "387",
                "y": "-4523"
            },
            "UpperDepths.TeleporterEX": {
                "x": "481",
                "y": "-4381"
            },
            "LowerDepths.SpiritSurgeShard": {
                "x": "564",
                "y": "-4571"
            },
            "UpperDepths.RightEntryKS": {
                "x": "317",
                "y": "-4454"
            },
            "UpperDepths.LightcatcherSeed": {
                "x": "488",
                "y": "-4431"
            },
            "LowerDepths.BelowDoorOre": {
                "x": "436",
                "y": "-4507"
            },
            "MarshPastOpher.CombatShrine": {
                "x": "-382",
                "y": "-4337"
            },
            "LowerDepths.FlashTree": {
                "x": "776",
                "y": "-4541"
            },
            "MarshSpawn.GrappleHC": {
                "x": "-718",
                "y": "-4278"
            },
            "LowerDepths.RaceStartHC": {
                "x": "496",
                "y": "-4499"
            },
            "LowerDepths.RightEX": {
                "x": "799",
                "y": "-4512"
            },
            "MarshSpawn.RecklessShard": {
                "x": "-499",
                "y": "-4411"
            },
            "HowlsDen.CombatShrine": {
                "x": "-314",
                "y": "-4570"
            },
            "MarshSpawn.BurrowsApproachLedgeEX": {
                "x": "-1001",
                "y": "-4451"
            },
            "UpperDepths.BossPathEX": {
                "x": "567",
                "y": "-4443"
            },
            "MidnightBurrows.LeftKS": {
                "x": "-800",
                "y": "-4580"
            },
            "MidnightBurrows.UpperKS": {
                "x": "-725",
                "y": "-4520"
            },
            "MidnightBurrows.TabletQI": {
                "x": "-848",
                "y": "-4530"
            },
            "MidnightBurrows.DeflectorShard": {
                "x": "-773",
                "y": "-4528"
            },
            "MarshPastOpher.TrialHC": {
                "x": "-437",
                "y": "-4381"
            },
            "UpperDepths.HiveEX": {
                "x": "425",
                "y": "-4385"
            },
            "PoolsApproach.BurrowsPathEX": {
                "x": "-1015",
                "y": "-4269"
            },
            "MidnightBurrows.LowerKS": {
                "x": "-704",
                "y": "-4609"
            },
            "MarshSpawn.LeverEC": {
                "x": "-625",
                "y": "-4418"
            },
            "WoodsMain.CombatShrine": {
                "x": "1361",
                "y": "-4064"
            },
            "TwillenShop.Energy": {
                "shop": "Twillen"
            },
            "WoodsMain.PetrifiedHowlEX": {
                "x": "904",
                "y": "-4075"
            },
            "UpperDepths.RightHealthKS": {
                "x": "524",
                "y": "-4465"
            },
            "WoodsMain.HiddenEX": {
                "x": "936",
                "y": "-4044"
            },
            "OuterWellspring.UltraGrappleShard": {
                "x": "-799",
                "y": "-3913"
            },
            "MidnightBurrows.RightKS": {
                "x": "-597",
                "y": "-4548"
            },
            "WestGlades.ShrineHC": {
                "x": "-688",
                "y": "-4009"
            },
            "OuterWellspring.BasementEC": {
                "x": "-857",
                "y": "-4116"
            },
            "GladesTown.BountyShard": {
                "x": "-247",
                "y": "-4106"
            },
            "InnerWellspring.ShortcutWheelEX": {
                "x": "-1223",
                "y": "-3907"
            },
            "InnerWellspring.RotateRoomEX": {
                "x": "-1151",
                "y": "-3841"
            },
            "GladesTown.AboveGromHC": {
                "x": "-326",
                "y": "-4103"
            },
            "InnerWellspring.NeedleQI": {
                "x": "-1186",
                "y": "-3697"
            },
            "OuterWellspring.RightWallEX": {
                "x": "-745",
                "y": "-3942"
            },
            "GladesTown.LowerOre": {
                "x": "-416",
                "y": "-4174"
            },
            "GladesTown.UpperOre": {
                "x": "-418",
                "y": "-4104"
            },
            "WestGlades.LeftOre": {
                "x": "-690",
                "y": "-4098"
            },
            "InnerWellspring.LeverEC": {
                "x": "-1109",
                "y": "-3865"
            },
            "InnerWellspring.GrappleTree": {
                "x": "-1309",
                "y": "-3905"
            },
            "OuterWellspring.TrialOre": {
                "x": "-678",
                "y": "-3934"
            },
            "InnerWellspring.LupoEX": {
                "x": "-1142",
                "y": "-3862"
            },
            "GladesTown.AboveTpEX": {
                "x": "-307",
                "y": "-4119"
            },
            "InnerWellspring.DrainHC": {
                "x": "-1168",
                "y": "-3991"
            },
            "OuterWellspring.RightWallEC": {
                "x": "-735",
                "y": "-3989"
            },
            "OuterWellspring.HiddenHC": {
                "x": "-877",
                "y": "-3962"
            },
            "GladesTown.UpdraftCeilingEX": {
                "x": "-240",
                "y": "-4130"
            },
            "OuterWellspring.EntranceRoofEX": {
                "x": "-850",
                "y": "-4024"
            },
            "OuterWellspring.WheelEX": {
                "x": "-898",
                "y": "-4071"
            },
            "WoodsMain.OverflowShard": {
                "x": "827",
                "y": "-3939"
            },
            "WestGlades.AbovePlantEX": {
                "x": "-586",
                "y": "-4091"
            },
            "GladesTown.BelowHoleHutEX": {
                "x": "-232",
                "y": "-4106"
            },
            "WoodsMain.BehindDoorRoofEX": {
                "x": "968",
                "y": "-4124"
            },
            "InnerWellspring.DrainEX": {
                "x": "-1063",
                "y": "-3961"
            },
            "InnerWellspring.BlueMoonSeed": {
                "x": "-1185",
                "y": "-3669"
            },
            "OuterWellspring.TheLostCompass": {
                "x": "-811",
                "y": "-3973"
            },
            "InnerWellspring.EscapeRevisitEX": {
                "x": "-1313",
                "y": "-3640"
            },
            "OuterWellspring.LifeHarvestShard": {
                "x": "-998",
                "y": "-4030"
            },
            "InnerWellspring.ThornEX": {
                "x": "-1372",
                "y": "-3939"
            },
            "InnerWellspring.LaserOre": {
                "x": "-1077",
                "y": "-3937"
            },
            "GladesTown.UpperLeftEX": {
                "x": "-374",
                "y": "-4103"
            },
            "InnerWellspring.RotateRoomOre": {
                "x": "-1178",
                "y": "-3756"
            },
            "WoodsMain.ShrineEX": {
                "x": "1406",
                "y": "-4065"
            },
            "HowlsDen.BoneOre": {
                "x": "-432",
                "y": "-4503"
            },
            "WestGlades.RightOre": {
                "x": "-560",
                "y": "-4063"
            },
            "InnerWellspring.LibraryEX": {
                "x": "-1252",
                "y": "-3683"
            },
            "InnerWellspring.AboveSpinArenaEX": {
                "x": "-1237",
                "y": "-3741"
            },
            "MidnightBurrows.DamageTree": {
                "x": "-840",
                "y": "-4488"
            },
            "MarshSpawn.IntoTheBurrows": {
                "x": "-932",
                "y": "-4494"
            },
            "OuterWellspring.RightWallOre": {
                "x": "-738",
                "y": "-4018"
            },
            "InnerWellspring.GrappleTreeEX": {
                "x": "-1308",
                "y": "-3885"
            },
            "InnerWellspring.ThornShard": {
                "x": "-1376",
                "y": "-3995"
            },
            "WestGlades.GrappleEX": {
                "x": "-515",
                "y": "-4103"
            },
            "InnerWellspring.ThreeWheelsEX": {
                "x": "-1247",
                "y": "-3928"
            },
            "InnerWellspring.AboveTpEX": {
                "x": "-1317",
                "y": "-3665"
            },
            "GladesTown.HoleHutEX": {
                "x": "-118",
                "y": "-4521"
            },
            "MarshSpawn.LifepactShard": {
                "x": "-916",
                "y": "-4399"
            },
            "WestGlades.CombatShrine": {
                "x": "-636",
                "y": "-4018"
            },
            "GladesTown.AboveCaveEX": {
                "x": "-363",
                "y": "-4172"
            },
            "GladesTown.MotayHutEX": {
                "x": "-172",
                "y": "-4584"
            },
            "GladesTown.CaveBurrowEX": {
                "x": "-307",
                "y": "-4168"
            },
            "GladesTown.LupoSoupEX": {
                "x": "-161",
                "y": "-4521"
            },
            "GladesTown.ArcingShard": {
                "x": "-325",
                "y": "-4135"
            },
            "GladesTown.HoleHutEC": {
                "x": "-116",
                "y": "-4540"
            },
            "GladesTown.BraveMokiHutEX": {
                "x": "-177",
                "y": "-4541"
            },
            "WillowsEnd.UpperLeftEX": {
                "x": "434",
                "y": "-3640"
            },
            "WillowsEnd.EntryEX": {
                "x": "470",
                "y": "-3915"
            },
            "WillowsEnd.RedirectEX": {
                "x": "654",
                "y": "-3780"
            },
            "MarshPastOpher.LeftEyestone": {
                "x": "-461",
                "y": "-4195"
            },
            "WestHollow.BelowLupoEX": {
                "x": "-82",
                "y": "-4370"
            },
            "WestHollow.QuickshotShard": {
                "x": "-310",
                "y": "-4326"
            },
            "GladesTown.IntoTheDarkness": {
                "x": "-358",
                "y": "-4185"
            },
            "MarshPastOpher.PoolsPathEX": {
                "x": "-801",
                "y": "-4186"
            },
            "WestHollow.HiddenEC": {
                "x": "-177",
                "y": "-4353"
            },
            "WestHollow.TrialHC": {
                "x": "-121",
                "y": "-4269"
            },
            "WestHollow.RockPuzzleEX": {
                "x": "-296",
                "y": "-4293"
            },
            "MarshSpawn.BurrowOre": {
                "x": "-935",
                "y": "-4357"
            },
            "WestHollow.AboveDashEX": {
                "x": "-99",
                "y": "-4408"
            },
            "UpperWastes.PurpleWallEX": {
                "x": "2006",
                "y": "-3826"
            },
            "UpperWastes.UpperKS": {
                "x": "1823",
                "y": "-3769"
            },
            "LowerWastes.UpperPathHiddenEX": {
                "x": "1862",
                "y": "-3874"
            },
            "LowerWastes.UpperPathEC": {
                "x": "1779",
                "y": "-3875"
            },
            "LowerWastes.BurrowTreeEX": {
                "x": "1601",
                "y": "-3953"
            },
            "WestHollow.DashTree": {
                "x": "-69",
                "y": "-4453"
            },
            "MarshPastOpher.CeilingEX": {
                "x": "-641",
                "y": "-4223"
            },
            "UpperWastes.FlowersSeed": {
                "x": "1996",
                "y": "-3651"
            },
            "UpperWastes.LedgeEC": {
                "x": "1950",
                "y": "-3778"
            },
            "LowerWastes.EastTPOre": {
                "x": "1930",
                "y": "-3879"
            },
            "LowerWastes.SandPotHC": {
                "x": "1698",
                "y": "-3977"
            },
            "MarshPastOpher.RightEyestone": {
                "x": "-394",
                "y": "-4188"
            },
            "UpperWastes.KSDoorEX": {
                "x": "1907",
                "y": "-3807"
            },
            "LowerWastes.WestTPOre": {
                "x": "1503",
                "y": "-4007"
            },
            "LowerWastes.UpperPathHC": {
                "x": "1853",
                "y": "-3909"
            },
            "UpperWastes.TurmoilShard": {
                "x": "1779",
                "y": "-3783"
            },
            "GladesTown.ADiamondInTheRough": {
                "x": "-408",
                "y": "-4162"
            },
            "LowerWastes.PurpleWallEX": {
                "x": "1535",
                "y": "-3997"
            },
            "UpperWastes.WallOre": {
                "x": "1952",
                "y": "-3616"
            },
            "UpperWastes.SpinLasersRightEX": {
                "x": "2006",
                "y": "-3724"
            },
            "WestHollow.DashRightEX": {
                "x": "11",
                "y": "-4401"
            },
            "LowerWastes.BottomRightEX": {
                "x": "1887",
                "y": "-3973"
            },
            "LowerWastes.SandBridgeOre": {
                "x": "1658",
                "y": "-3974"
            },
            "LowerWastes.LastStandEX": {
                "x": "1839",
                "y": "-3907"
            },
            "UpperWastes.SpinLasersLowerEX": {
                "x": "1935",
                "y": "-3755"
            },
            "LowerWastes.MuncherClimbEX": {
                "x": "1765",
                "y": "-3921"
            },
            "MarshPastOpher.PoolsPathEC": {
                "x": "-664",
                "y": "-4187"
            },
            "LowerWastes.EerieGem": {
                "x": "1641",
                "y": "-4003"
            },
            "LowerWastes.SunsetViewEX": {
                "x": "1607",
                "y": "-3975"
            },
            "LowerWastes.BurrowTree": {
                "x": "1583",
                "y": "-3930"
            },
            "LowerWastes.SkeetoHiveEX": {
                "x": "1642",
                "y": "-3944"
            },
            "GladesTown.AcornQI": {
                "x": "-10",
                "y": "-4551"
            },
            "LowerWastes.MuncherTunnelEC": {
                "x": "1653",
                "y": "-4015"
            },
            "LowerWastes.UpperPathEX": {
                "x": "1809",
                "y": "-3883"
            },
            "WestHollow.FarLeftEX": {
                "x": "-357",
                "y": "-4294"
            },
            "UpperWastes.LowerKS": {
                "x": "1877",
                "y": "-3844"
            },
            "LowerWastes.SandPotEX": {
                "x": "1719",
                "y": "-3962"
            },
            "PoolsApproach.AboveWheelEX": {
                "x": "-941",
                "y": "-4145"
            },
            "MarshSpawn.LongSwimEX": {
                "x": "-837",
                "y": "-4315"
            },
            "UpperPools.UpperRightKS": {
                "x": "-1518",
                "y": "-4079"
            },
            "LowerDepths.CombatShrine": {
                "x": "212",
                "y": "-4510"
            },
            "GladesTown.LupoSwimLeftEX": {
                "x": "-277",
                "y": "-4173"
            },
            "MarshSpawn.ResilienceOre": {
                "x": "-810",
                "y": "-4334"
            },
            "EastPools.UltraBashShard": {
                "x": "-1284",
                "y": "-4197"
            },
            "UpperPools.UpperLeftKS": {
                "x": "-1548",
                "y": "-4081"
            },
            "LowerDepths.SwimEC": {
                "x": "324",
                "y": "-4535"
            },
            "EastPools.GrassSeed": {
                "x": "-1528",
                "y": "-4140"
            },
            "UpperPools.LeftBubblesEX": {
                "x": "-1572",
                "y": "-4077"
            },
            "PoolsApproach.MillPathHC": {
                "x": "-851",
                "y": "-4196"
            },
            "UpperPools.RightBubblesEX": {
                "x": "-1645",
                "y": "-4085"
            },
            "EastPools.AboveDoorOre": {
                "x": "-1249",
                "y": "-4139"
            },
            "EastPools.LupoOre": {
                "x": "-1370",
                "y": "-4167"
            },
            "UpperPools.BubblesEC": {
                "x": "-1623",
                "y": "-4000"
            },
            "GladesTown.LupoSwimHC": {
                "x": "-161",
                "y": "-4192"
            },
            "UpperWastes.PurpleWallHC": {
                "x": "2027",
                "y": "-3843"
            },
            "UpperPools.SwimDashTree": {
                "x": "-1430",
                "y": "-4082"
            },
            "LowerWastes.BottomRightHC": {
                "x": "1860",
                "y": "-4022"
            },
            "GladesTown.LupoSwimMiddleEX": {
                "x": "-225",
                "y": "-4162"
            },
            "UpperPools.LowerKS": {
                "x": "-1576",
                "y": "-4126"
            },
            "EastPools.BelowLeverEX": {
                "x": "-1230",
                "y": "-4126"
            },
            "EastPools.BehindCrusherEX": {
                "x": "-1431",
                "y": "-4181"
            },
            "WestGlades.LowerPoolEX": {
                "x": "-586",
                "y": "-4129"
            },
            "InnerWellspring.SwimOre": {
                "x": "-1204",
                "y": "-3715"
            },
            "EastPools.EnergyHarvestShard": {
                "x": "-1441",
                "y": "-4130"
            },
            "OuterWellspring.SwimOre": {
                "x": "-761",
                "y": "-4094"
            },
            "EastPools.RightOre": {
                "x": "-1134",
                "y": "-4117"
            },
            "LowerWastes.LastStandShard": {
                "x": "1833",
                "y": "-3936"
            },
            "EastPools.LupoEX": {
                "x": "-1414",
                "y": "-4155"
            },
            "UpperWastes.RoofEX": {
                "x": "2025",
                "y": "-3729"
            },
            "UpperPools.UpperMidKS": {
                "x": "-1538",
                "y": "-4074"
            },
            "UpperWastes.MissileSpawnEX": {
                "x": "1951",
                "y": "-3838"
            },
            "UpperWastes.SpinLasersMiddleEX": {
                "x": "1948",
                "y": "-3730"
            },
            "WestGlades.UpperPoolEX": {
                "x": "-632",
                "y": "-4088"
            },
            "UpperPools.FishPoolEX": {
                "x": "-1568",
                "y": "-4063"
            },
            "PoolsApproach.MillPathEC": {
                "x": "-924",
                "y": "-4170"
            },
            "EastHollow.GladesApproachOre": {
                "x": "-97",
                "y": "-4190"
            },
            "WoodsEntry.TreeSeed": {
                "x": "513",
                "y": "-4159"
            },
            "WestGlades.SwimEC": {
                "x": "-690",
                "y": "-4115"
            },
            "EastHollow.SecretRoofEX": {
                "x": "9",
                "y": "-4197"
            },
            "UpperPools.WaterfallEC": {
                "x": "-1389",
                "y": "-4040"
            },
            "GladesTown.HandToHandSoup": {
                "x": "-110",
                "y": "-4090"
            },
            "EastHollow.SilentSwimEC": {
                "x": "331",
                "y": "-4192"
            },
            "WoodsMain.RightKS": {
                "x": "956",
                "y": "-4148"
            },
            "WestPools.TpEX": {
                "x": "-1650",
                "y": "-4160"
            },
            "EastHollow.SpikeLanternEX": {
                "x": "-55",
                "y": "-4201"
            },
            "EastHollow.BashHC": {
                "x": "83",
                "y": "-4264"
            },
            "EastHollow.HornBeetleFightEX": {
                "x": "-85",
                "y": "-4209"
            },
            "WestPools.EscapeRevisitEX": {
                "x": "-1654",
                "y": "-4143"
            },
            "EastPools.FightRoomHC": {
                "x": "-1365",
                "y": "-4109"
            },
            "EastHollow.HandToHandMap": {
                "x": "-110",
                "y": "-4220"
            },
            "EastHollow.KwoloksWisdom": {
                "x": "240",
                "y": "-4207"
            },
            "GladesTown.DamageTree": {
                "x": "-368",
                "y": "-4158"
            },
            "UpperPools.RoofEX": {
                "x": "-1449",
                "y": "-4037"
            },
            "WoodsEntry.UpperKS": {
                "x": "641",
                "y": "-4166"
            },
            "WoodsEntry.DollQI": {
                "x": "441",
                "y": "-4119"
            },
            "EastHollow.RightKwolokEX": {
                "x": "289",
                "y": "-4196"
            },
            "EastHollow.SplinterShard": {
                "x": "216",
                "y": "-4308"
            },
            "EastPools.CurrentEX": {
                "x": "-1214",
                "y": "-4181"
            },
            "WoodsEntry.LowerKS": {
                "x": "690",
                "y": "-4189"
            },
            "EastHollow.MortarEX": {
                "x": "57",
                "y": "-4189"
            },
            "WestPools.BurrowOre": {
                "x": "-1770",
                "y": "-4125"
            },
            "EastHollow.KwolokSwimRightEX": {
                "x": "161",
                "y": "-4245"
            },
            "WillowsEnd.SpikesOre": {
                "x": "557",
                "y": "-3876"
            },
            "WestHollow.CrusherEX": {
                "x": "-37",
                "y": "-4453"
            },
            "PoolsApproach.MillPathEX": {
                "x": "-895",
                "y": "-4137"
            },
            "UpperPools.FishPoolOre": {
                "x": "-1535",
                "y": "-4034"
            },
            "GladesTown.KeyMokiHutEX": {
                "x": "-119",
                "y": "-4560"
            },
            "UpperPools.CurrentEX": {
                "x": "-1468",
                "y": "-4098"
            },
            "EastHollow.BashEX": {
                "x": "-31",
                "y": "-4302"
            },
            "WoodsEntry.MudPitEX": {
                "x": "514",
                "y": "-4185"
            },
            "InnerWellspring.HandToHandHerbs": {
                "x": "-1168",
                "y": "-3733"
            },
            "GladesTown.HandToHandPouch": {
                "x": "-282",
                "y": "-4155"
            },
            "WoodsEntry.LedgeOre": {
                "x": "411",
                "y": "-4174"
            },
            "EastPools.AboveTpEX": {
                "x": "-1336",
                "y": "-4104"
            },
            "WoodsMain.UpperKS": {
                "x": "908",
                "y": "-4120"
            },
            "EastHollow.BashEC": {
                "x": "46",
                "y": "-4237"
            },
            "EastHollow.BashTree": {
                "x": "-20",
                "y": "-4326"
            },
            "EastHollow.KwolokSwimLeftEX": {
                "x": "113",
                "y": "-4229"
            },
            "WestPools.BurrowEX": {
                "x": "-1655",
                "y": "-4189"
            },
            "WillowsEnd.PoisonfallHC": {
                "x": "411",
                "y": "-3972"
            },
            "EastHollow.KwolokSwimOre": {
                "x": "243",
                "y": "-4224"
            },
            "MarshSpawn.CrusherSwimEX": {
                "x": "-979",
                "y": "-4510"
            },
            "EastPools.TwoCrushersEX": {
                "x": "-1176",
                "y": "-4178"
            },
            "WoodsMain.BelowKeystonesEX": {
                "x": "941",
                "y": "-4185"
            },
            "WoodsEntry.TpEX": {
                "x": "628",
                "y": "-4156"
            },
            "LowerWastes.MuncherPitEX": {
                "x": "1795",
                "y": "-3998"
            },
            "WillowsEnd.UpperRightEX": {
                "x": "540",
                "y": "-3655"
            },
            "TwillenShop.LightHarvest": {
                "shop": "Twillen"
            },
            "OpherShop.WaterBreath": {
                "shop": "Opher"
            },
            "OpherShop.Teleport": {
                "shop": "Opher"
            },
            "UpperDepths.SwimEC": {
                "x": "134",
                "y": "-4456"
            },
            "LowerReach.RightKS": {
                "x": "34",
                "y": "-4025"
            },
            "UpperDepths.EntrySpikesEX": {
                "x": "171",
                "y": "-4358"
            },
            "LowerReach.UpperLeftKS": {
                "x": "-84",
                "y": "-4025"
            },
            "WillowsEnd.WindSpinOre": {
                "x": "326",
                "y": "-3811"
            },
            "UpperDepths.EntryOre": {
                "x": "185",
                "y": "-4380"
            },
            "UpperDepths.LeftEntryKS": {
                "x": "146",
                "y": "-4426"
            },
            "WestHollow.SwimEC": {
                "x": "-177",
                "y": "-4353"
            },
            "PoolsApproach.CurrentEX": {
                "x": "-1047",
                "y": "-4217"
            },
            "EastHollow.DepthsExteriorEX": {
                "x": "131",
                "y": "-4272"
            },
            "LowerReach.TrialEX": {
                "x": "-39",
                "y": "-4018"
            },
            "OuterWellspring.SwimEX": {
                "x": "-825",
                "y": "-4086"
            },
            "TwillenShop.TripleJump": {
                "shop": "Twillen"
            },
            "GladesTown.LeafPileEX": {
                "x": "-160",
                "y": "-4099"
            },
            "LowerReach.BelowLupoEX": {
                "x": "-282",
                "y": "-4013"
            },
            "UpperReach.MiddleLeftKS": {
                "x": "-232",
                "y": "-3869"
            },
            "EastPools.PurpleWallHC": {
                "x": "-1278",
                "y": "-4086"
            },
            "LowerReach.BelowBaurEX": {
                "x": "-401",
                "y": "-4053"
            },
            "UpperReach.SwingPoleEX": {
                "x": "-194",
                "y": "-3854"
            },
            "LowerReach.AboveBaurUpperEX": {
                "x": "-439",
                "y": "-3946"
            },
            "WoodsMain.BehindWallOre": {
                "x": "988",
                "y": "-4172"
            },
            "UpperReach.LowerKS": {
                "x": "-248",
                "y": "-3891"
            },
            "UpperReach.MiddleRightKS": {
                "x": "-184",
                "y": "-3867"
            },
            "UpperReach.LifeForceEX": {
                "x": "-423",
                "y": "-3876"
            },
            "UpperReach.LightBurstTree": {
                "x": "-106",
                "y": "-3934"
            },
            "LowerReach.CatalystShard": {
                "x": "-90",
                "y": "-4097"
            },
            "UpperReach.TreeOre": {
                "x": "-87",
                "y": "-3903"
            },
            "WoodsMain.LeftKS": {
                "x": "886",
                "y": "-4123"
            },
            "UpperReach.SwimEX": {
                "x": "-239",
                "y": "-3921"
            },
            "InnerWellspring.WaterSwitchEX": {
                "x": "-1197",
                "y": "-3972"
            },
            "UpperDepths.EntryRoofEX": {
                "x": "146",
                "y": "-4375"
            },
            "LowerReach.AboveDoorEX": {
                "x": "-337",
                "y": "-3999"
            },
            "LowerReach.HiddenOre": {
                "x": "-346",
                "y": "-3947"
            },
            "UpperReach.WellEX": {
                "x": "-72",
                "y": "-3926"
            },
            "UpperReach.SoupOre": {
                "x": "-203",
                "y": "-3886"
            },
            "LowerReach.BurrowEX": {
                "x": "-331",
                "y": "-4051"
            },
            "WoodsMain.HiddenOre": {
                "x": "1011",
                "y": "-4070"
            },
            "LowerReach.TPLeftEX": {
                "x": "-340",
                "y": "-3984"
            },
            "WoodsEntry.LeafPileEX": {
                "x": "485",
                "y": "-4165"
            },
            "LowerReach.MiddleLeftKS": {
                "x": "-80",
                "y": "-4040"
            },
            "LowerReach.BreakWallEX": {
                "x": "-194",
                "y": "-4043"
            },
            "LowerReach.BottomLeftKS": {
                "x": "-58",
                "y": "-4055"
            },
            "WoodsMain.LowerLeafPileEX": {
                "x": "948",
                "y": "-4210"
            },
            "WeepingRidge.SpikeClimbEX": {
                "x": "1382",
                "y": "-3767"
            },
            "LowerReach.WindBottomEX": {
                "x": "-215",
                "y": "-4057"
            },
            "LowerReach.MeltIceEX": {
                "x": "-350",
                "y": "-4039"
            },
            "WeepingRidge.PortalEX": {
                "x": "1331",
                "y": "-3798"
            },
            "WoodsMain.FeedingGroundsEX": {
                "x": "1464",
                "y": "-4008"
            },
            "UpperReach.LifeForceShard": {
                "x": "-400",
                "y": "-3861"
            },
            "LowerReach.FractureShard": {
                "x": "-81",
                "y": "-4001"
            },
            "UpperReach.SpringSeed": {
                "x": "-103",
                "y": "-3858"
            },
            "LowerReach.RoofRightEX": {
                "x": "-72",
                "y": "-3951"
            },
            "WeepingRidge.Ore": {
                "x": "1305",
                "y": "-3732"
            },
            "LowerReach.RoofLeftEX": {
                "x": "-112",
                "y": "-3950"
            },
            "EastPools.HandToHandSpyglass": {
                "x": "-1284",
                "y": "-4126"
            },
            "LowerReach.AboveBaurLowerEX": {
                "x": "-416",
                "y": "-3968"
            },
            "WindtornRuins.EscapeRevisitEC": {
                "x": "2054",
                "y": "-4050"
            },
            "WoodsMain.LowerKS": {
                "x": "929",
                "y": "-4185"
            },
            "WindtornRuins.HandToHandComplete": {
                "x": "1969",
                "y": "-4024"
            },
            "LowerReach.IcefallOre": {
                "x": "-483",
                "y": "-3974"
            },
            "UpperReach.HiddenEX": {
                "x": "-172",
                "y": "-3928"
            },
            "WoodsMain.YellowWallEX": {
                "x": "1069",
                "y": "-4099"
            },
            "WeepingRidge.LaunchTree": {
                "x": "1363",
                "y": "-3815"
            },
            "WoodsMain.UpperLeafPileEX": {
                "x": "968",
                "y": "-4142"
            },
            "GladesTown.RegrowTheGlades": {
                "x": "240",
                "y": "-4207"
            },
            "UpperReach.UpperKS": {
                "x": "-207",
                "y": "-3843"
            },
            "GladesTown.HandToHandLantern": {
                "x": "-426",
                "y": "-4155"
            },
            "LowerReach.EscapeRevisitEX": {
                "x": "71",
                "y": "-3731"
            },
            "LowerReach.SnowballHC": {
                "x": "-190",
                "y": "-4017"
            },
            "LowerReach.WindHiddenEX": {
                "x": "-205",
                "y": "-4011"
            },
            "GladesTown.RebuildTheGlades": {
                "x": "240",
                "y": "-4207"
            },
            "LowerWastes.HandToHandMapstone": {
                "x": "1685",
                "y": "-3923"
            },
            "WoodsMain.MiddleLeafPileEX": {
                "x": "951",
                "y": "-4168"
            },
            "GladesTown.HandToHandCanteen": {
                "x": "-410",
                "y": "-4142"
            },
            "LowerDepths.HandToHandSilk": {
                "x": "317",
                "y": "-4508"
            },
            "LowerReach.HandToHandHat": {
                "x": "-244",
                "y": "-3989"
            },
            "LowerReach.IcefallEX": {
                "x": "-500",
                "y": "-3970"
            },
            "MarshSpawn.TheMissingKey": {
                "x": "-695",
                "y": "-4417"
            }
        }

        this.seedLocationToPos2 = {
            "MarshSpawn.RockHC": {
                "x": "-958",
                "y": "-4313",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "MarshSpawn.FirstPickupEX": {
                "x": "-764",
                "y": "-4313",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "MarshSpawn.GrappleHC": {
                "x": "-718",
                "y": "-4278",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "MarshSpawn.BridgeEX": {
                "x": "-739",
                "y": "-4324",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "MarshSpawn.ResilienceShard": {
                "x": "-790",
                "y": "-4335",
                "icon": "Resilience",
                "category": "shard"
            },
            "MarshSpawn.ResilienceOre": {
                "x": "-810",
                "y": "-4334",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "MarshSpawn.BashEC": {
                "x": "-667",
                "y": "-4330",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "MarshSpawn.PreLupoEX": {
                "x": "-656",
                "y": "-4342",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "MarshSpawn.LupoMap": {
                "x": "-589",
                "y": "-4348",
                "icon": "LupoZoneMap",
                "category": ""
            },
            "MarshSpawn.RegenTree": {
                "x": "-539",
                "y": "-4406",
                "icon": "Regenerate",
                "category": "ability"
            },
            "MarshSpawn.LeverEC": {
                "x": "-625",
                "y": "-4418",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "MarshSpawn.LeftTokkEX": {
                "x": "-755",
                "y": "-4423",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "MarshSpawn.FightRoomEX": {
                "x": "-783",
                "y": "-4452",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "MarshSpawn.CaveKS": {
                "x": "-852",
                "y": "-4404",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "MarshSpawn.TheMissingKey": {
                "x": "-695",
                "y": "-4417",
                "icon": "Keystone",
                "category": ""
            },
            "MarshSpawn.CaveOre": {
                "x": "-858",
                "y": "-4423",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "MarshSpawn.LongSwimEX": {
                "x": "-837",
                "y": "-4315",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "MarshSpawn.BurrowOre": {
                "x": "-935",
                "y": "-4357",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "MarshSpawn.LifepactShard": {
                "x": "-916",
                "y": "-4399",
                "icon": "Life Pact",
                "category": "shard"
            },
            "MarshSpawn.BurrowsApproachLedgeEX": {
                "x": "-1001",
                "y": "-4451",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "MarshSpawn.CrusherSwimEX": {
                "x": "-979",
                "y": "-4510",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "MarshSpawn.IntoTheBurrows": {
                "x": "-932",
                "y": "-4494",
                "icon": "SL1000",
                "category": ""
            },
            "MarshSpawn.RecklessShard": {
                "x": "-499",
                "y": "-4411",
                "icon": "Reckless",
                "category": "shard"
            },
            "MarshSpawn.FangEC": {
                "x": "-233",
                "y": "-4385",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "MarshSpawn.FangQI": {
                "x": "-221",
                "y": "-4406",
                "icon": "Fang",
                "category": ""
            },
            "MarshSpawn.ALittleBraver": {
                "x": "-391",
                "y": "-4414",
                "icon": "Ore",
                "category": ""
            },
            "MidnightBurrows.DamageTree": {
                "x": "-840",
                "y": "-4488",
                "icon": "AncestralLight",
                "category": "ability"
            },
            "MidnightBurrows.LeftKS": {
                "x": "-800",
                "y": "-4580",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "MidnightBurrows.RightKS": {
                "x": "-597",
                "y": "-4548",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "MidnightBurrows.UpperKS": {
                "x": "-725",
                "y": "-4520",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "MidnightBurrows.LowerKS": {
                "x": "-704",
                "y": "-4609",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "MidnightBurrows.LupoMap": {
                "x": "-870",
                "y": "-4555",
                "icon": "LupoZoneMap",
                "category": ""
            },
            "MidnightBurrows.DeflectorShard": {
                "x": "-773",
                "y": "-4528",
                "icon": "Deflector",
                "category": "shard"
            },
            "MidnightBurrows.TabletQI": {
                "x": "-848",
                "y": "-4530",
                "icon": "Tablet",
                "category": ""
            },
            "HowlsDen.UpperEX": {
                "x": "-433",
                "y": "-4420",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "HowlsDen.RightHC": {
                "x": "-332",
                "y": "-4439",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "HowlsDen.LeftHC": {
                "x": "-569",
                "y": "-4454",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "HowlsDen.AboveDoorKS": {
                "x": "-439",
                "y": "-4462",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "HowlsDen.MagnetShard": {
                "x": "-239",
                "y": "-4441",
                "icon": "Magnet",
                "category": "shard"
            },
            "HowlsDen.SwordTree": {
                "x": "-296",
                "y": "-4483",
                "icon": "SpiritEdge",
                "category": "ability"
            },
            "HowlsDen.BoneOre": {
                "x": "-432",
                "y": "-4503",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "HowlsDen.AboveTPEX": {
                "x": "-389",
                "y": "-4503",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "HowlsDen.LaserKS": {
                "x": "-400",
                "y": "-4568",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "HowlsDen.CombatShrine": {
                "x": "-314",
                "y": "-4570",
                "icon": "Shard Slot",
                "category": "mapIcon"
            },
            "HowlsDen.DoubleJumpEX": {
                "x": "-507",
                "y": "-4537",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "HowlsDen.StickyShard": {
                "x": "-547",
                "y": "-4530",
                "icon": "Sticky",
                "category": "shard"
            },
            "HowlsDen.DoubleJumpTree": {
                "x": "-555",
                "y": "-4551",
                "icon": "Double Jump",
                "category": "ability"
            },
            "MarshPastOpher.TrialLeftEX": {
                "x": "-527",
                "y": "-4354",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "MarshPastOpher.TrialOre": {
                "x": "-501",
                "y": "-4340",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "MarshPastOpher.TrialEC": {
                "x": "-473",
                "y": "-4340",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "MarshPastOpher.TrialHC": {
                "x": "-437",
                "y": "-4381",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "MarshPastOpher.TrialRightEX": {
                "x": "-343",
                "y": "-4357",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "MarshPastOpher.CombatShrine": {
                "x": "-382",
                "y": "-4337",
                "icon": "Shard Slot",
                "category": "mapIcon"
            },
            "MarshPastOpher.SwingPoleEX": {
                "x": "-492",
                "y": "-4260",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "MarshPastOpher.LeftEyestone": {
                "x": "-461",
                "y": "-4195",
                "icon": "Eyestone",
                "category": "mapIcon"
            },
            "MarshPastOpher.RightEyestone": {
                "x": "-394",
                "y": "-4188",
                "icon": "Eyestone",
                "category": "mapIcon"
            },
            "MarshPastOpher.BowEC": {
                "x": "-422",
                "y": "-4273",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "MarshPastOpher.BowTree": {
                "x": "-457",
                "y": "-4267",
                "icon": "Bow",
                "category": "ability"
            },
            "MarshPastOpher.CeilingEX": {
                "x": "-641",
                "y": "-4223",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "MarshPastOpher.PoolsPathEC": {
                "x": "-664",
                "y": "-4187",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "MarshPastOpher.PoolsPathEX": {
                "x": "-801",
                "y": "-4186",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "WestHollow.CrusherHC": {
                "x": "-254",
                "y": "-4225",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "WestHollow.FarLeftEX": {
                "x": "-357",
                "y": "-4294",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WestHollow.RockPuzzleEX": {
                "x": "-296",
                "y": "-4293",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WestHollow.HiddenEC": {
                "x": "-177",
                "y": "-4353",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "WestHollow.QuickshotShard": {
                "x": "-310",
                "y": "-4326",
                "icon": "Quickshot",
                "category": "shard"
            },
            "WestHollow.SwimEC": {
                "x": "-177",
                "y": "-4353",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "WestHollow.LupoMap": {
                "x": "-146",
                "y": "-4321",
                "icon": "LupoZoneMap",
                "category": ""
            },
            "WestHollow.TrialHC": {
                "x": "-121",
                "y": "-4269",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "WestHollow.BelowLupoEX": {
                "x": "-82",
                "y": "-4370",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WestHollow.AboveDashEX": {
                "x": "-99",
                "y": "-4408",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WestHollow.DashRightEX": {
                "x": "11",
                "y": "-4401",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WestHollow.CrusherEX": {
                "x": "-37",
                "y": "-4453",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "WestHollow.DashTree": {
                "x": "-69",
                "y": "-4453",
                "icon": "Dash",
                "category": "ability"
            },
            "EastHollow.HandToHandMap": {
                "x": "-110",
                "y": "-4220",
                "icon": "Map",
                "category": ""
            },
            "EastHollow.GladesApproachOre": {
                "x": "-97",
                "y": "-4190",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "EastHollow.HornBeetleFightEX": {
                "x": "-85",
                "y": "-4209",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "EastHollow.SpikeLanternEX": {
                "x": "-55",
                "y": "-4201",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "EastHollow.SecretRoofEX": {
                "x": "9",
                "y": "-4197",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "EastHollow.MortarEX": {
                "x": "57",
                "y": "-4189",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "EastHollow.BashEC": {
                "x": "46",
                "y": "-4237",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "EastHollow.BashHC": {
                "x": "83",
                "y": "-4264",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "EastHollow.BashEX": {
                "x": "-31",
                "y": "-4302",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "EastHollow.BashTree": {
                "x": "-20",
                "y": "-4326",
                "icon": "Bash",
                "category": "ability"
            },
            "EastHollow.KwoloksWisdom": {
                "x": "240",
                "y": "-4207",
                "icon": "SL500",
                "category": ""
            },
            "EastHollow.RightKwolokEX": {
                "x": "289",
                "y": "-4196",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "EastHollow.SilentSwimEC": {
                "x": "331",
                "y": "-4192",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "EastHollow.SplinterShard": {
                "x": "216",
                "y": "-4308",
                "icon": "Splinter",
                "category": "shard"
            },
            "EastHollow.KwolokSwimOre": {
                "x": "243",
                "y": "-4224",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "EastHollow.KwolokSwimLeftEX": {
                "x": "113",
                "y": "-4229",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "EastHollow.KwolokSwimRightEX": {
                "x": "161",
                "y": "-4245",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "EastHollow.DepthsExteriorEX": {
                "x": "131",
                "y": "-4272",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "GladesTown.HandToHandPouch": {
                "x": "-282",
                "y": "-4155",
                "icon": "Pouch",
                "category": ""
            },
            "GladesTown.HandToHandLantern": {
                "x": "-426",
                "y": "-4155",
                "icon": "Lantern",
                "category": ""
            },
            "GladesTown.HandToHandCanteen": {
                "x": "-410",
                "y": "-4142",
                "icon": "Canteen",
                "category": ""
            },
            "GladesTown.HandToHandSoup": {
                "x": "-110",
                "y": "-4090",
                "icon": "Soup",
                "category": ""
            },
            "GladesTown.AcornQI": {
                "x": "-10",
                "y": "-4551",
                "icon": "Acorn",
                "category": ""
            },
            "GladesTown.IntoTheDarkness": {
                "x": "-358",
                "y": "-4185",
                "icon": "SL500",
                "category": ""
            },
            "GladesTown.HoleHutEC": {
                "x": "-116",
                "y": "-4540",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "GladesTown.AboveGromHC": {
                "x": "-326",
                "y": "-4103",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "GladesTown.LupoSwimHC": {
                "x": "-161",
                "y": "-4192",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "GladesTown.UpperOre": {
                "x": "-418",
                "y": "-4104",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "GladesTown.LowerOre": {
                "x": "-416",
                "y": "-4174",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "GladesTown.ArcingShard": {
                "x": "-325",
                "y": "-4135",
                "icon": "Arcing",
                "category": "shard"
            },
            "GladesTown.BountyShard": {
                "x": "-247",
                "y": "-4106",
                "icon": "Bounty",
                "category": "shard"
            },
            "GladesTown.LupoSoupEX": {
                "x": "-161",
                "y": "-4521",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "GladesTown.BraveMokiHutEX": {
                "x": "-177",
                "y": "-4541",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "GladesTown.MotayHutEX": {
                "x": "-172",
                "y": "-4584",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "GladesTown.HoleHutEX": {
                "x": "-118",
                "y": "-4521",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "GladesTown.UpperLeftEX": {
                "x": "-374",
                "y": "-4103",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "GladesTown.LupoSwimMiddleEX": {
                "x": "-225",
                "y": "-4162",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "GladesTown.CaveBurrowEX": {
                "x": "-307",
                "y": "-4168",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "GladesTown.BelowHoleHutEX": {
                "x": "-232",
                "y": "-4106",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "GladesTown.KeyMokiHutEX": {
                "x": "-119",
                "y": "-4560",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "GladesTown.AboveTpEX": {
                "x": "-307",
                "y": "-4119",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "GladesTown.AboveCaveEX": {
                "x": "-363",
                "y": "-4172",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "GladesTown.LupoSwimLeftEX": {
                "x": "-277",
                "y": "-4173",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "GladesTown.UpdraftCeilingEX": {
                "x": "-240",
                "y": "-4130",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "GladesTown.LeafPileEX": {
                "x": "-160",
                "y": "-4099",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "GladesTown.DamageTree": {
                "x": "-368",
                "y": "-4158",
                "icon": "AncestralLight",
                "category": "ability"
            },
            "GladesTown.RebuildTheGlades": {
                "x": "240",
                "y": "-4207",
                "icon": "SL1000",
                "category": ""
            },
            "GladesTown.ADiamondInTheRough": {
                "x": "-408",
                "y": "-4162",
                "icon": "PickupType.Shard",
                "category": ""
            },
            "GladesTown.RegrowTheGlades": {
                "x": "240",
                "y": "-4207",
                "icon": "SL1000",
                "category": ""
            },
            "WestGlades.GrappleEX": {
                "x": "-515",
                "y": "-4103",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "WestGlades.AbovePlantEX": {
                "x": "-586",
                "y": "-4091",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "WestGlades.LowerPoolEX": {
                "x": "-586",
                "y": "-4129",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WestGlades.UpperPoolEX": {
                "x": "-632",
                "y": "-4088",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "WestGlades.SwimEC": {
                "x": "-690",
                "y": "-4115",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "WestGlades.LeftOre": {
                "x": "-690",
                "y": "-4098",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "WestGlades.RightOre": {
                "x": "-560",
                "y": "-4063",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "WestGlades.ShrineHC": {
                "x": "-688",
                "y": "-4009",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "WestGlades.CombatShrine": {
                "x": "-636",
                "y": "-4018",
                "icon": "Shard Slot",
                "category": "mapIcon"
            },
            "OuterWellspring.RightWallOre": {
                "x": "-738",
                "y": "-4018",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "OuterWellspring.RightWallEC": {
                "x": "-735",
                "y": "-3989",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "OuterWellspring.RightWallEX": {
                "x": "-745",
                "y": "-3942",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "OuterWellspring.TrialOre": {
                "x": "-678",
                "y": "-3934",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "OuterWellspring.UltraGrappleShard": {
                "x": "-799",
                "y": "-3913",
                "icon": "Ultra Grapple",
                "category": "shard"
            },
            "OuterWellspring.HiddenHC": {
                "x": "-877",
                "y": "-3962",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "OuterWellspring.EntranceRoofEX": {
                "x": "-850",
                "y": "-4024",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "OuterWellspring.WheelEX": {
                "x": "-898",
                "y": "-4071",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "OuterWellspring.BasementEC": {
                "x": "-857",
                "y": "-4116",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "OuterWellspring.LifeHarvestShard": {
                "x": "-998",
                "y": "-4030",
                "icon": "Life Harvest",
                "category": "shard"
            },
            "OuterWellspring.SwimEX": {
                "x": "-825",
                "y": "-4086",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "OuterWellspring.SwimOre": {
                "x": "-761",
                "y": "-4094",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "OuterWellspring.TheLostCompass": {
                "x": "-811",
                "y": "-3973",
                "icon": "Ore",
                "category": ""
            },
            "InnerWellspring.ThornShard": {
                "x": "-1376",
                "y": "-3995",
                "icon": "Thorn",
                "category": "shard"
            },
            "InnerWellspring.ThornEX": {
                "x": "-1372",
                "y": "-3939",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "InnerWellspring.ThreeWheelsEX": {
                "x": "-1247",
                "y": "-3928",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "InnerWellspring.WaterSwitchEX": {
                "x": "-1197",
                "y": "-3972",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "InnerWellspring.DrainHC": {
                "x": "-1168",
                "y": "-3991",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "InnerWellspring.DrainEX": {
                "x": "-1063",
                "y": "-3961",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "InnerWellspring.LaserOre": {
                "x": "-1077",
                "y": "-3937",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "InnerWellspring.LeverEC": {
                "x": "-1109",
                "y": "-3865",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "InnerWellspring.LupoEX": {
                "x": "-1142",
                "y": "-3862",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "InnerWellspring.LupoMap": {
                "x": "-1190",
                "y": "-3861",
                "icon": "LupoZoneMap",
                "category": ""
            },
            "InnerWellspring.ShortcutWheelEX": {
                "x": "-1223",
                "y": "-3907",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "InnerWellspring.GrappleTreeEX": {
                "x": "-1308",
                "y": "-3885",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "InnerWellspring.GrappleTree": {
                "x": "-1309",
                "y": "-3905",
                "icon": "Leash",
                "category": "ability"
            },
            "InnerWellspring.AboveSpinArenaEX": {
                "x": "-1237",
                "y": "-3741",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "InnerWellspring.HandToHandHerbs": {
                "x": "-1168",
                "y": "-3733",
                "icon": "Herbs",
                "category": ""
            },
            "InnerWellspring.RotateRoomEX": {
                "x": "-1151",
                "y": "-3841",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "InnerWellspring.RotateRoomOre": {
                "x": "-1178",
                "y": "-3756",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "InnerWellspring.NeedleQI": {
                "x": "-1186",
                "y": "-3697",
                "icon": "Needle",
                "category": ""
            },
            "InnerWellspring.LibraryEX": {
                "x": "-1252",
                "y": "-3683",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "InnerWellspring.AboveTpEX": {
                "x": "-1317",
                "y": "-3665",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "InnerWellspring.BlueMoonSeed": {
                "x": "-1185",
                "y": "-3669",
                "icon": "Seed",
                "category": ""
            },
            "InnerWellspring.SwimOre": {
                "x": "-1204",
                "y": "-3715",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "InnerWellspring.EscapeRevisitEX": {
                "x": "-1313",
                "y": "-3640",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "PoolsApproach.CurrentEX": {
                "x": "-1047",
                "y": "-4217",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "PoolsApproach.AboveWheelEX": {
                "x": "-941",
                "y": "-4145",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "PoolsApproach.MillPathHC": {
                "x": "-851",
                "y": "-4196",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "PoolsApproach.MillPathEC": {
                "x": "-924",
                "y": "-4170",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "PoolsApproach.MillPathEX": {
                "x": "-895",
                "y": "-4137",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "PoolsApproach.BurrowsPathEX": {
                "x": "-1015",
                "y": "-4269",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "EastPools.RightOre": {
                "x": "-1134",
                "y": "-4117",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "EastPools.TwoCrushersEX": {
                "x": "-1176",
                "y": "-4178",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "EastPools.CurrentEX": {
                "x": "-1214",
                "y": "-4181",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "EastPools.BelowLeverEX": {
                "x": "-1230",
                "y": "-4126",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "EastPools.AboveDoorOre": {
                "x": "-1249",
                "y": "-4139",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "EastPools.PurpleWallHC": {
                "x": "-1278",
                "y": "-4086",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "EastPools.HandToHandSpyglass": {
                "x": "-1284",
                "y": "-4126",
                "icon": "Spyglass",
                "category": ""
            },
            "EastPools.AboveTpEX": {
                "x": "-1336",
                "y": "-4104",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "EastPools.LupoOre": {
                "x": "-1370",
                "y": "-4167",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "EastPools.UltraBashShard": {
                "x": "-1284",
                "y": "-4197",
                "icon": "Ultra Bash",
                "category": "shard"
            },
            "EastPools.FightRoomHC": {
                "x": "-1365",
                "y": "-4109",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "EastPools.EnergyHarvestShard": {
                "x": "-1441",
                "y": "-4130",
                "icon": "Energy Harvest",
                "category": "shard"
            },
            "EastPools.LupoEX": {
                "x": "-1414",
                "y": "-4155",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "EastPools.LupoMap": {
                "x": "-1391",
                "y": "-4167",
                "icon": "LupoZoneMap",
                "category": ""
            },
            "EastPools.BehindCrusherEX": {
                "x": "-1431",
                "y": "-4181",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "EastPools.GrassSeed": {
                "x": "-1528",
                "y": "-4140",
                "icon": "Seed",
                "category": ""
            },
            "UpperPools.LowerKS": {
                "x": "-1576",
                "y": "-4126",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperPools.UpperLeftKS": {
                "x": "-1548",
                "y": "-4081",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperPools.UpperMidKS": {
                "x": "-1538",
                "y": "-4074",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperPools.UpperRightKS": {
                "x": "-1518",
                "y": "-4079",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperPools.FishPoolEX": {
                "x": "-1568",
                "y": "-4063",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "UpperPools.FishPoolOre": {
                "x": "-1535",
                "y": "-4034",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "UpperPools.BubblesEC": {
                "x": "-1623",
                "y": "-4000",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "UpperPools.LeftBubblesEX": {
                "x": "-1572",
                "y": "-4077",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "UpperPools.RightBubblesEX": {
                "x": "-1645",
                "y": "-4085",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperPools.SwimDashTree": {
                "x": "-1430",
                "y": "-4082",
                "icon": "SwimDash",
                "category": "ability"
            },
            "UpperPools.CurrentEX": {
                "x": "-1468",
                "y": "-4098",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperPools.RoofEX": {
                "x": "-1449",
                "y": "-4037",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperPools.WaterfallEC": {
                "x": "-1389",
                "y": "-4040",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "WestPools.BurrowEX": {
                "x": "-1655",
                "y": "-4189",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "WestPools.BurrowOre": {
                "x": "-1770",
                "y": "-4125",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "WestPools.TpEX": {
                "x": "-1650",
                "y": "-4160",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WestPools.EscapeRevisitEX": {
                "x": "-1654",
                "y": "-4143",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "WoodsEntry.DollQI": {
                "x": "441",
                "y": "-4119",
                "icon": "Doll",
                "category": ""
            },
            "WoodsEntry.TreeSeed": {
                "x": "513",
                "y": "-4159",
                "icon": "Seed",
                "category": ""
            },
            "WoodsEntry.MudPitEX": {
                "x": "514",
                "y": "-4185",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WoodsEntry.LedgeOre": {
                "x": "411",
                "y": "-4174",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "WoodsEntry.LeafPileEX": {
                "x": "485",
                "y": "-4165",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WoodsEntry.TpEX": {
                "x": "628",
                "y": "-4156",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WoodsEntry.LowerKS": {
                "x": "690",
                "y": "-4189",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "WoodsEntry.UpperKS": {
                "x": "641",
                "y": "-4166",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "WoodsMain.RightKS": {
                "x": "956",
                "y": "-4148",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "WoodsMain.UpperKS": {
                "x": "908",
                "y": "-4120",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "WoodsMain.LeftKS": {
                "x": "886",
                "y": "-4123",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "WoodsMain.LowerKS": {
                "x": "929",
                "y": "-4185",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "WoodsMain.BehindWallOre": {
                "x": "988",
                "y": "-4172",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "WoodsMain.LowerLeafPileEX": {
                "x": "948",
                "y": "-4210",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WoodsMain.MiddleLeafPileEX": {
                "x": "951",
                "y": "-4168",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WoodsMain.UpperLeafPileEX": {
                "x": "968",
                "y": "-4142",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "WoodsMain.YellowWallEX": {
                "x": "1069",
                "y": "-4099",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "WoodsMain.HiddenOre": {
                "x": "1011",
                "y": "-4070",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "WoodsMain.HiddenEX": {
                "x": "936",
                "y": "-4044",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "WoodsMain.BelowKeystonesEX": {
                "x": "941",
                "y": "-4185",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WoodsMain.BehindDoorRoofEX": {
                "x": "968",
                "y": "-4124",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "WoodsMain.PetrifiedHowlEX": {
                "x": "904",
                "y": "-4075",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "WoodsMain.OverflowShard": {
                "x": "827",
                "y": "-3939",
                "icon": "Overflow",
                "category": "shard"
            },
            "WoodsMain.CombatShrine": {
                "x": "1361",
                "y": "-4064",
                "icon": "Shard Slot",
                "category": "mapIcon"
            },
            "WoodsMain.ShrineEX": {
                "x": "1406",
                "y": "-4065",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "WoodsMain.FeedingGroundsEX": {
                "x": "1464",
                "y": "-4008",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "LowerReach.BelowBaurEX": {
                "x": "-401",
                "y": "-4053",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "LowerReach.AboveBaurLowerEX": {
                "x": "-416",
                "y": "-3968",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "LowerReach.AboveBaurUpperEX": {
                "x": "-439",
                "y": "-3946",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerReach.IcefallOre": {
                "x": "-483",
                "y": "-3974",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "LowerReach.IcefallEX": {
                "x": "-500",
                "y": "-3970",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "LowerReach.AboveDoorEX": {
                "x": "-337",
                "y": "-3999",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "LowerReach.HiddenOre": {
                "x": "-346",
                "y": "-3947",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "LowerReach.LupoMap": {
                "x": "-275",
                "y": "-3996",
                "icon": "LupoZoneMap",
                "category": ""
            },
            "LowerReach.MeltIceEX": {
                "x": "-350",
                "y": "-4039",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerReach.BurrowEX": {
                "x": "-331",
                "y": "-4051",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "LowerReach.TPLeftEX": {
                "x": "-340",
                "y": "-3984",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerReach.BelowLupoEX": {
                "x": "-282",
                "y": "-4013",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerReach.BreakWallEX": {
                "x": "-194",
                "y": "-4043",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "LowerReach.WindBottomEX": {
                "x": "-215",
                "y": "-4057",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "LowerReach.WindHiddenEX": {
                "x": "-205",
                "y": "-4011",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "LowerReach.HandToHandHat": {
                "x": "-244",
                "y": "-3989",
                "icon": "Hat",
                "category": ""
            },
            "LowerReach.SnowballHC": {
                "x": "-190",
                "y": "-4017",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "LowerReach.RoofLeftEX": {
                "x": "-112",
                "y": "-3950",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "LowerReach.RoofRightEX": {
                "x": "-72",
                "y": "-3951",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "LowerReach.FractureShard": {
                "x": "-81",
                "y": "-4001",
                "icon": "Fracture",
                "category": "shard"
            },
            "LowerReach.EscapeRevisitEX": {
                "x": "71",
                "y": "-3731",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "LowerReach.RightKS": {
                "x": "34",
                "y": "-4025",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "LowerReach.UpperLeftKS": {
                "x": "-84",
                "y": "-4025",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "LowerReach.MiddleLeftKS": {
                "x": "-80",
                "y": "-4040",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "LowerReach.BottomLeftKS": {
                "x": "-58",
                "y": "-4055",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "LowerReach.TrialEX": {
                "x": "-39",
                "y": "-4018",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerReach.CatalystShard": {
                "x": "-90",
                "y": "-4097",
                "icon": "Catalyst",
                "category": "shard"
            },
            "UpperReach.LifeForceShard": {
                "x": "-400",
                "y": "-3861",
                "icon": "Lifeforce",
                "category": "shard"
            },
            "UpperReach.LifeForceEX": {
                "x": "-423",
                "y": "-3876",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperReach.LowerKS": {
                "x": "-248",
                "y": "-3891",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperReach.UpperKS": {
                "x": "-207",
                "y": "-3843",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperReach.MiddleLeftKS": {
                "x": "-232",
                "y": "-3869",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperReach.MiddleRightKS": {
                "x": "-184",
                "y": "-3867",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperReach.SoupOre": {
                "x": "-203",
                "y": "-3886",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "UpperReach.SwingPoleEX": {
                "x": "-194",
                "y": "-3854",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperReach.SwimEX": {
                "x": "-239",
                "y": "-3921",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperReach.LightBurstTree": {
                "x": "-106",
                "y": "-3934",
                "icon": "Lightburst",
                "category": "ability"
            },
            "UpperReach.TreeOre": {
                "x": "-87",
                "y": "-3903",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "UpperReach.WellEX": {
                "x": "-72",
                "y": "-3926",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "UpperReach.SpringSeed": {
                "x": "-103",
                "y": "-3858",
                "icon": "Seed",
                "category": ""
            },
            "UpperReach.HiddenEX": {
                "x": "-172",
                "y": "-3928",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "UpperDepths.EntrySpikesEX": {
                "x": "171",
                "y": "-4358",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperDepths.EntryRoofEX": {
                "x": "146",
                "y": "-4375",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperDepths.EntryOre": {
                "x": "185",
                "y": "-4380",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "UpperDepths.RightEntryKS": {
                "x": "317",
                "y": "-4454",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperDepths.LeftEntryKS": {
                "x": "146",
                "y": "-4426",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperDepths.SwimEC": {
                "x": "134",
                "y": "-4456",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "UpperDepths.TeleporterEX": {
                "x": "481",
                "y": "-4381",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperDepths.LeftHealthKS": {
                "x": "498",
                "y": "-4463",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperDepths.RightHealthKS": {
                "x": "524",
                "y": "-4465",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperDepths.LightcatcherSeed": {
                "x": "488",
                "y": "-4431",
                "icon": "Seed",
                "category": ""
            },
            "UpperDepths.BossPathEX": {
                "x": "567",
                "y": "-4443",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "UpperDepths.KeystoneHC": {
                "x": "531",
                "y": "-4452",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "UpperDepths.HiveEX": {
                "x": "425",
                "y": "-4385",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerDepths.RaceStartHC": {
                "x": "496",
                "y": "-4499",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "LowerDepths.BelowDoorOre": {
                "x": "436",
                "y": "-4507",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "LowerDepths.SpiritSurgeShard": {
                "x": "564",
                "y": "-4571",
                "icon": "Spirit Surge",
                "category": "shard"
            },
            "LowerDepths.HandToHandSilk": {
                "x": "317",
                "y": "-4508",
                "icon": "Silk",
                "category": ""
            },
            "LowerDepths.CombatShrine": {
                "x": "212",
                "y": "-4510",
                "icon": "Shard Slot",
                "category": "mapIcon"
            },
            "LowerDepths.SwimEC": {
                "x": "324",
                "y": "-4535",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "LowerDepths.LupoMap": {
                "x": "682",
                "y": "-4576",
                "icon": "LupoZoneMap",
                "category": ""
            },
            "LowerDepths.LeftEX": {
                "x": "387",
                "y": "-4523",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerDepths.RightEX": {
                "x": "799",
                "y": "-4512",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "LowerDepths.FlashTree": {
                "x": "776",
                "y": "-4541",
                "icon": "Flash",
                "category": "ability"
            },
            "LowerWastes.WestTPOre": {
                "x": "1503",
                "y": "-4007",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "LowerWastes.PurpleWallEX": {
                "x": "1535",
                "y": "-3997",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerWastes.SunsetViewEX": {
                "x": "1607",
                "y": "-3975",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerWastes.SandBridgeOre": {
                "x": "1658",
                "y": "-3974",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "LowerWastes.EerieGem": {
                "x": "1641",
                "y": "-4003",
                "icon": "Gem",
                "category": ""
            },
            "LowerWastes.MuncherTunnelEC": {
                "x": "1653",
                "y": "-4015",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "LowerWastes.SandPotHC": {
                "x": "1698",
                "y": "-3977",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "LowerWastes.SandPotEX": {
                "x": "1719",
                "y": "-3962",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerWastes.MuncherPitEX": {
                "x": "1795",
                "y": "-3998",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerWastes.BottomRightEX": {
                "x": "1887",
                "y": "-3973",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "LowerWastes.BottomRightHC": {
                "x": "1860",
                "y": "-4022",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "LowerWastes.LastStandShard": {
                "x": "1833",
                "y": "-3936",
                "icon": "Last Stand",
                "category": "shard"
            },
            "LowerWastes.LastStandEX": {
                "x": "1839",
                "y": "-3907",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "LowerWastes.MuncherClimbEX": {
                "x": "1765",
                "y": "-3921",
                "icon": "Small Experience",
                "category": "pickup"
            },
            "LowerWastes.SkeetoHiveEX": {
                "x": "1642",
                "y": "-3944",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerWastes.HandToHandMapstone": {
                "x": "1685",
                "y": "-3923",
                "icon": "Mapstone",
                "category": ""
            },
            "LowerWastes.LupoMap": {
                "x": "1647",
                "y": "-3899",
                "icon": "LupoZoneMap",
                "category": ""
            },
            "LowerWastes.BurrowTree": {
                "x": "1583",
                "y": "-3930",
                "icon": "Dig",
                "category": "ability"
            },
            "LowerWastes.BurrowTreeEX": {
                "x": "1601",
                "y": "-3953",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerWastes.UpperPathEC": {
                "x": "1779",
                "y": "-3875",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "LowerWastes.UpperPathEX": {
                "x": "1809",
                "y": "-3883",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "LowerWastes.UpperPathHiddenEX": {
                "x": "1862",
                "y": "-3874",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "LowerWastes.UpperPathHC": {
                "x": "1853",
                "y": "-3909",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "LowerWastes.EastTPOre": {
                "x": "1930",
                "y": "-3879",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "UpperWastes.LowerKS": {
                "x": "1877",
                "y": "-3844",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperWastes.UpperKS": {
                "x": "1823",
                "y": "-3769",
                "icon": "Keystone",
                "category": "mapIcon"
            },
            "UpperWastes.TurmoilShard": {
                "x": "1779",
                "y": "-3783",
                "icon": "Turmoil",
                "category": "shard"
            },
            "UpperWastes.KSDoorEX": {
                "x": "1907",
                "y": "-3807",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperWastes.LedgeEC": {
                "x": "1950",
                "y": "-3778",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "UpperWastes.MissileSpawnEX": {
                "x": "1951",
                "y": "-3838",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperWastes.PurpleWallEX": {
                "x": "2006",
                "y": "-3826",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperWastes.PurpleWallHC": {
                "x": "2027",
                "y": "-3843",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "UpperWastes.RoofEX": {
                "x": "2025",
                "y": "-3729",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperWastes.SpinLasersRightEX": {
                "x": "2006",
                "y": "-3724",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "UpperWastes.SpinLasersMiddleEX": {
                "x": "1948",
                "y": "-3730",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperWastes.SpinLasersLowerEX": {
                "x": "1935",
                "y": "-3755",
                "icon": "Medium Experience",
                "category": "pickup"
            },
            "UpperWastes.FlowersSeed": {
                "x": "1996",
                "y": "-3651",
                "icon": "Seed",
                "category": ""
            },
            "UpperWastes.WallOre": {
                "x": "1952",
                "y": "-3616",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "WindtornRuins.EscapeRevisitEC": {
                "x": "2054",
                "y": "-4050",
                "icon": "Energy Half",
                "category": "mapIcon"
            },
            "WindtornRuins.HandToHandComplete": {
                "x": "1969",
                "y": "-4024",
                "icon": "Secrets",
                "category": ""
            },
            "WeepingRidge.Ore": {
                "x": "1305",
                "y": "-3732",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "WeepingRidge.LaunchTree": {
                "x": "1363",
                "y": "-3815",
                "icon": "Charge Jump",
                "category": "ability"
            },
            "WeepingRidge.SpikeClimbEX": {
                "x": "1382",
                "y": "-3767",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "WeepingRidge.PortalEX": {
                "x": "1331",
                "y": "-3798",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "WillowsEnd.SpikesOre": {
                "x": "557",
                "y": "-3876",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "WillowsEnd.EntryEX": {
                "x": "470",
                "y": "-3915",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "WillowsEnd.PoisonfallHC": {
                "x": "411",
                "y": "-3972",
                "icon": "Health Half",
                "category": "mapIcon"
            },
            "WillowsEnd.LupoMap": {
                "x": "474",
                "y": "-3859",
                "icon": "LupoZoneMap",
                "category": ""
            },
            "WillowsEnd.WindSpinOre": {
                "x": "326",
                "y": "-3811",
                "icon": "Ore",
                "category": "mapIcon"
            },
            "WillowsEnd.RedirectEX": {
                "x": "654",
                "y": "-3780",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "WillowsEnd.UpperLeftEX": {
                "x": "434",
                "y": "-3640",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "WillowsEnd.UpperRightEX": {
                "x": "540",
                "y": "-3655",
                "icon": "Large Experience",
                "category": "pickup"
            },
            "TwillenShop.Overcharge": {
                "x": "0",
                "y": "0",
                "icon": "TwillenShard",
                "category": ""
            },
            "TwillenShop.TripleJump": {
                "x": "0",
                "y": "0",
                "icon": "TwillenShard",
                "category": ""
            },
            "TwillenShop.Wingclip": {
                "x": "0",
                "y": "0",
                "icon": "TwillenShard",
                "category": ""
            },
            "TwillenShop.Swap": {
                "x": "0",
                "y": "0",
                "icon": "TwillenShard",
                "category": ""
            },
            "TwillenShop.LightHarvest": {
                "x": "0",
                "y": "0",
                "icon": "TwillenShard",
                "category": ""
            },
            "TwillenShop.Vitality": {
                "x": "0",
                "y": "0",
                "icon": "TwillenShard",
                "category": ""
            },
            "TwillenShop.Energy": {
                "x": "0",
                "y": "0",
                "icon": "TwillenShard",
                "category": ""
            },
            "TwillenShop.Finesse": {
                "x": "0",
                "y": "0",
                "icon": "TwillenShard",
                "category": ""
            },
            "OpherShop.WaterBreath": {
                "x": "0",
                "y": "0",
                "icon": "OpherWeapon",
                "category": ""
            },
            "OpherShop.Spike": {
                "x": "0",
                "y": "0",
                "icon": "OpherWeapon",
                "category": ""
            },
            "OpherShop.SpiritSmash": {
                "x": "0",
                "y": "0",
                "icon": "OpherWeapon",
                "category": ""
            },
            "OpherShop.Teleport": {
                "x": "0",
                "y": "0",
                "icon": "OpherWeapon",
                "category": ""
            },
            "OpherShop.SpiritStar": {
                "x": "0",
                "y": "0",
                "icon": "OpherWeapon",
                "category": ""
            },
            "OpherShop.Blaze": {
                "x": "0",
                "y": "0",
                "icon": "OpherWeapon",
                "category": ""
            },
            "OpherShop.Sentry": {
                "x": "0",
                "y": "0",
                "icon": "OpherWeapon",
                "category": ""
            }
        };

        this.seedNameToIconName = {
            'SpiritArc': 'Bow',
            'DoubleJump': 'Double Jump',
            'Sentry': 'Spirit Sentry',
            'Blaze': 'Blaze',
            'WaterDash': 'Swim Dash',
            'Feather': 'Glide',
            'DamageUpgrade1': 'Weapon Upgrade 1',
            'DamageUpgrade2': 'Weapon Upgrade 2',
            'LightBurst': 'Lightburst',
            'Dash': 'Dash',
            'Launch': 'Charge Jump',
            'Flash': 'Flash',
            'WaterBreath': 'Water Breathe',
            'Spike': 'Spirit Spear',
            'Regenerate': 'Regenerate',
            'Grapple': 'Leash',
            'Bash': 'Bash',
            'SpiritSmash': 'Hammer',
            'SpiritStar': 'Chakram',
            'Burrow': 'Dig',
            'Flap': 'Feather',
            'Overcharge': 'Overcharge',
            'Finesse': 'Finesse',
            'Catalyst': 'Catalyst',
            'TripleJump': 'Triple Jump',
            'Magnet': 'Magnet',
            'UltraBash': 'Ultra Bash',
            'Energy': 'Energy',
            'Bounty': 'Bounty',
            'Arcing': 'Arcing',
            'LifeHarvest': 'Life Harvest',
            'Swap': 'Swap',
            'LifePact': 'Life Pact',
            'Thorn': 'Thorn',
            'LightHarvest': 'Light Harvest',
            'Turmoil': 'Turmoil',
            'Splinter': 'Splinter',
            'Resilience': 'Resilience',
            'LastStand': 'Last Stand',
            'Deflector': 'Deflector',
            'Sticky': 'Sticky',
            'Vitality': 'Vitality',
            'Secret': 'Secret',
            'Quickshot': 'Quickshot',
            'Overflow': 'Overflow',
            'UltraGrapple': 'Ultra Grapple',
            'Wingclip': 'Wingclip',
            'Lifeforce': 'Lifeforce',
            'EnergyHarvest': 'Energy Harvest',
            'SpiritSurge': 'Spirit Surge',
            'Fracture': 'Fracture',
            'Reckless': 'Reckless',
            'Health Fragment': 'Health Half',
            'Energy Fragment': 'Energy Half',
            'Gorlek Ore': 'Ore',
            'Keystone': 'Keystone',
            'Shard Slot': 'Spirit Shard',
            'SpiritEdge': 'Sword'
        };

        this.uberIDToMapID = {
            "MarshSpawn.FirstPickupEX": 0,
            "MarshSpawn.BridgeEX": 1,
            "MarshSpawn.PreLupoEX": 2,
            "MarshSpawn.BashEC": 3,
            "MarshSpawn.ResilienceShard": 4,
            "MarshSpawn.ResilienceOre": 5,
            "MarshSpawn.GrappleHC": 6,
            "MarshSpawn.RockHC": 7,
            "MarshSpawn.BurrowOre": 8,
            "MarshSpawn.CaveKS": 9,
            "MarshSpawn.CaveOre": 10,
            "MarshSpawn.LeverEC": 11,
            "MarshPastOpher.TrialOre": 12,
            "MarshPastOpher.TrialEC": 13,
            "MarshPastOpher.TrialHC": 14,
            "HowlsDen.LeftHC": 17,
            "HowlsDen.RightHC": 18,
            "MarshSpawn.FangEC": 19,
            "MarshSpawn.FangQI": 20,
            "HowlsDen.AboveDoorKS": 21,
            "MarshPastOpher.BowTree": 24,
            "HowlsDen.LaserKS": 25,
            "MidnightBurrows.RightKS": 29,
            "TwillenShop.Swap": 30,
            "MidnightBurrows.LowerKS": 31,
            "MidnightBurrows.UpperKS": 32,
            "MidnightBurrows.TabletQI": 33,
            "MidnightBurrows.LeftKS": 36,
            "PoolsApproach.MillPathHC": 44,
            "EastPools.RightOre": 46,
            "EastPools.AboveDoorOre": 49,
            "EastPools.FightRoomHC": 51,
            "EastPools.LupoOre": 53,
            "UpperPools.LowerKS": 55,
            "UpperPools.UpperLeftKS": 56,
            "UpperPools.UpperMidKS": 57,
            "UpperPools.UpperRightKS": 58,
            "UpperPools.FishPoolOre": 61,
            "UpperPools.WaterfallEC": 62,
            "UpperPools.SwimDashTree": 64,
            "WestPools.BurrowOre": 66,
            "InnerWellspring.LeverEC": 70,
            "InnerWellspring.LaserOre": 71,
            "InnerWellspring.DrainHC": 72,
            "InnerWellspring.SwimOre": 77,
            "OuterWellspring.HiddenHC": 84,
            "OuterWellspring.TrialOre": 85,
            "OuterWellspring.RightWallOre": 86,
            "WestGlades.ShrineHC": 87,
            "OuterWellspring.BasementEC": 89,
            "OuterWellspring.SwimOre": 90,
            "WestGlades.LeftOre": 91,
            "WestGlades.SwimEC": 92,
            "LowerReach.IcefallOre": 95,
            "WestGlades.RightOre": 96,
            "LowerReach.SnowballHC": 102,
            "UpperReach.LowerKS": 103,
            "UpperReach.MiddleLeftKS": 104,
            "UpperReach.UpperKS": 105,
            "UpperReach.MiddleRightKS": 106,
            "UpperReach.TreeOre": 108,
            "LowerReach.RightKS": 110,
            "LowerReach.BottomLeftKS": 111,
            "LowerReach.MiddleLeftKS": 112,
            "LowerReach.UpperLeftKS": 113,
            "GladesTown.LowerOre": 116,
            "GladesTown.AboveGromHC": 124,
            "WestHollow.CrusherHC": 140,
            "WestHollow.HiddenEC": 142,
            "WestHollow.SwimEC": 142,
            "WestHollow.TrialHC": 144,
            "GladesTown.LupoSwimHC": 145,
            "EastHollow.GladesApproachOre": 146,
            "EastHollow.BashEC": 149,
            "EastHollow.KwolokSwimOre": 151,
            "UpperDepths.EntryOre": 152,
            "UpperDepths.SwimEC": 153,
            "UpperDepths.LeftEntryKS": 154,
            "UpperDepths.RightEntryKS": 156,
            "LowerDepths.RaceStartHC": 160,
            "UpperDepths.LeftHealthKS": 161,
            "UpperDepths.RightHealthKS": 162,
            "UpperDepths.KeystoneHC": 163,
            "LowerDepths.FlashTree": 167,
            "EastHollow.SilentSwimEC": 169,
            "WoodsEntry.LedgeOre": 171,
            "WoodsEntry.UpperKS": 174,
            "WoodsEntry.LowerKS": 175,
            "UpperReach.LightBurstTree": 177,
            "WoodsMain.LeftKS": 178,
            "WoodsMain.RightKS": 180,
            "WoodsMain.UpperLeafPileEX": 417,
            "WoodsMain.BelowKeystonesEX": 346,
            "WoodsMain.LowerKS": 182,
            "LowerWastes.SandBridgeOre": 187,
            "LowerWastes.MuncherTunnelEC": 188,
            "LowerWastes.SandPotHC": 189,
            "LowerWastes.BurrowTree": 191,
            "LowerWastes.UpperPathEC": 193,
            "UpperWastes.LowerKS": 196,
            "UpperWastes.UpperKS": 197,
            "UpperWastes.LedgeEC": 199,
            "UpperWastes.PurpleWallHC": 200,
            "WindtornRuins.EscapeRevisitEC": 201,
            "UpperWastes.WallOre": 207,
            "WeepingRidge.LaunchTree": 208,
            "WeepingRidge.Ore": 209,
            "WillowsEnd.SpikesOre": 210,
            "WillowsEnd.WindSpinOre": 216,
            "MarshSpawn.LongSwimEX": 224,
            "MarshSpawn.LifepactShard": 225,
            "MarshSpawn.BurrowsApproachLedgeEX": 226,
            "MarshSpawn.CrusherSwimEX": 227,
            "MidnightBurrows.DamageTree": 228,
            "MidnightBurrows.DeflectorShard": 229,
            "HowlsDen.StickyShard": 230,
            "PoolsApproach.CurrentEX": 231,
            "PoolsApproach.BurrowsPathEX": 232,
            "PoolsApproach.MillPathEX": 234,
            "MarshPastOpher.PoolsPathEX": 235,
            "EastPools.TwoCrushersEX": 236,
            "EastPools.CurrentEX": 237,
            "EastPools.BelowLeverEX": 238,
            "EastPools.UltraBashShard": 239,
            "EastPools.LupoEX": 240,
            "EastPools.BehindCrusherEX": 241,
            "EastPools.AboveTpEX": 242,
            "EastPools.PurpleWallHC": 244,
            "UpperPools.RoofEX": 245,
            "UpperPools.CurrentEX": 246,
            "UpperPools.FishPoolEX": 247,
            "UpperPools.LeftBubblesEX": 248,
            "UpperPools.RightBubblesEX": 249,
            "WestPools.BurrowEX": 250,
            "WestPools.TpEX": 252,
            "EastPools.EnergyHarvestShard": 253,
            "InnerWellspring.ThreeWheelsEX": 254,
            "InnerWellspring.ThornShard": 255,
            "InnerWellspring.ThornEX": 256,
            "InnerWellspring.WaterSwitchEX": 257,
            "InnerWellspring.DrainEX": 258,
            "InnerWellspring.ShortcutWheelEX": 259,
            "InnerWellspring.GrappleTree": 260,
            "InnerWellspring.GrappleTreeEX": 261,
            "InnerWellspring.AboveSpinArenaEX": 262,
            "InnerWellspring.LibraryEX": 263,
            "InnerWellspring.AboveTpEX": 264,
            "OuterWellspring.UltraGrappleShard": 265,
            "OuterWellspring.RightWallEX": 266,
            "OuterWellspring.EntranceRoofEX": 267,
            "OuterWellspring.LifeHarvestShard": 268,
            "OuterWellspring.WheelEX": 269,
            "WestGlades.AbovePlantEX": 270,
            "WestGlades.UpperPoolEX": 271,
            "LowerReach.BelowBaurEX": 272,
            "LowerReach.IcefallEX": 273,
            "LowerReach.AboveBaurUpperEX": 274,
            "LowerReach.AboveBaurLowerEX": 275,
            "LowerReach.TPLeftEX": 276,
            "LowerReach.AboveDoorEX": 277,
            "LowerReach.MeltIceEX": 278,
            "LowerReach.BurrowEX": 279,
            "LowerReach.BelowLupoEX": 280,
            "LowerReach.WindBottomEX": 281,
            "LowerReach.WindHiddenEX": 282,
            "LowerReach.BreakWallEX": 283,
            "LowerReach.RoofLeftEX": 284,
            "LowerReach.RoofRightEX": 285,
            "UpperReach.WellEX": 286,
            "UpperReach.SwingPoleEX": 287,
            "UpperReach.SwimEX": 288,
            "UpperReach.LifeForceEX": 289,
            "UpperReach.LifeForceShard": 290,
            "UpperReach.SoupOre": 291,
            "UpperReach.HiddenEX": 292,
            "LowerReach.FractureShard": 293,
            "LowerReach.CatalystShard": 295,
            "GladesTown.BelowHoleHutEX": 296,
            "GladesTown.BountyShard": 297,
            "GladesTown.UpdraftCeilingEX": 298,
            "GladesTown.AboveTpEX": 299,
            "GladesTown.ArcingShard": 300,
            "GladesTown.UpperLeftEX": 301,
            "GladesTown.AboveCaveEX": 302,
            "GladesTown.DamageTree": 302,
            "GladesTown.CaveBurrowEX": 303,
            "GladesTown.LupoSwimLeftEX": 304,
            "GladesTown.LupoSwimMiddleEX": 305,
            "WestHollow.RockPuzzleEX": 307,
            "WestHollow.FarLeftEX": 308,
            "MarshPastOpher.TrialRightEX": 309,
            "MarshPastOpher.TrialLeftEX": 310,
            "MarshPastOpher.SwingPoleEX": 311,
            "MarshPastOpher.CeilingEX": 312,
            "MarshPastOpher.PoolsPathEC": 313,
            "WestHollow.QuickshotShard": 314,
            "WestHollow.BelowLupoEX": 316,
            "WestHollow.CrusherEX": 317,
            "WestHollow.DashTree": 318,
            "HowlsDen.SwordTree": 319,
            "WestHollow.AboveDashEX": 320,
            "WestHollow.DashRightEX": 321,
            "HowlsDen.UpperEX": 322,
            "HowlsDen.BoneOre": 325,
            "HowlsDen.DoubleJumpEX": 326,
            "EastHollow.HornBeetleFightEX": 327,
            "EastHollow.SpikeLanternEX": 328,
            "EastHollow.BashTree": 329,
            "EastHollow.BashEX": 330,
            "EastHollow.BashHC": 331,
            "EastHollow.DepthsExteriorEX": 332,
            "EastHollow.SplinterShard": 333,
            "UpperDepths.EntrySpikesEX": 334,
            "UpperDepths.EntryRoofEX": 335,
            "UpperDepths.HiveEX": 336,
            "UpperDepths.TeleporterEX": 337,
            "UpperDepths.BossPathEX": 338,
            "LowerDepths.LeftEX": 339,
            "LowerDepths.SpiritSurgeShard": 340,
            "LowerDepths.RightEX": 341,
            "EastHollow.MortarEX": 342,
            "EastHollow.RightKwolokEX": 343,
            "WoodsEntry.MudPitEX": 344,
            "WoodsEntry.TpEX": 345,
            "WoodsMain.BehindWallOre": 347,
            "WoodsMain.UpperKS": 348,
            "WoodsMain.BehindDoorRoofEX": 349,
            "WoodsMain.YellowWallEX": 351,
            "WoodsMain.HiddenOre": 352,
            "WoodsMain.PetrifiedHowlEX": 353,
            "WoodsMain.OverflowShard": 354,
            "WoodsMain.FeedingGroundsEX": 355,
            "LowerWastes.WestTPOre": 356,
            "LowerWastes.PurpleWallEX": 357,
            "LowerWastes.SunsetViewEX": 358,
            "LowerWastes.SandPotEX": 359,
            "LowerWastes.SkeetoHiveEX": 360,
            "LowerWastes.BurrowTreeEX": 361,
            "LowerWastes.MuncherClimbEX": 362,
            "LowerWastes.MuncherPitEX": 363,
            "LowerWastes.BottomRightEX": 364,
            "LowerWastes.LastStandEX": 366,
            "LowerWastes.UpperPathEX": 367,
            "LowerWastes.UpperPathHiddenEX": 368,
            "LowerWastes.EastTPOre": 369,
            "LowerWastes.UpperPathHC": 370,
            "UpperWastes.TurmoilShard": 372,
            "UpperWastes.MissileSpawnEX": 373,
            "UpperWastes.PurpleWallEX": 374,
            "UpperWastes.RoofEX": 375,
            "UpperWastes.SpinLasersRightEX": 376,
            "UpperWastes.SpinLasersMiddleEX": 377,
            "UpperWastes.SpinLasersLowerEX": 378,
            "UpperWastes.KSDoorEX": 379,
            "WeepingRidge.SpikeClimbEX": 380,
            "WillowsEnd.EntryEX": 381,
            "WillowsEnd.RedirectEX": 382,
            "HowlsDen.MagnetShard": 385,
            "MarshSpawn.LeftTokkEX": 386,
            "LowerReach.EscapeRevisitEX": 387,
            "OuterWellspring.RightWallEC": 390,
            "InnerWellspring.RotateRoomOre": 391,
            "MarshSpawn.RegenTree": 395,
            "GladesTown.UpperOre": 396,
            "LowerDepths.SwimEC": 399,
            "LowerDepths.BelowDoorOre": 400,
            "OuterWellspring.SwimEX": 404,
            "WestGlades.LowerPoolEX": 405,
            "WestGlades.GrappleEX": 406,
            "GladesTown.LeafPileEX": 407,
            "MarshSpawn.FightRoomEX": 409,
            "MarshPastOpher.BowEC": 410,
            "EastHollow.SecretRoofEX": 411,
            "EastHollow.KwolokSwimLeftEX": 412,
            "EastHollow.KwolokSwimRightEX": 413,
            "WoodsEntry.LeafPileEX": 414,
            "WoodsMain.LowerLeafPileEX": 415,
            "WoodsMain.MiddleLeafPileEX": 416,
            "WoodsMain.HiddenEX": 418,
            "WoodsMain.ShrineEX": 419,
            "WeepingRidge.PortalEX": 420,
            "LowerReach.HiddenOre": 421,
            "InnerWellspring.NeedleQI": 435,
            "InnerWellspring.RotateRoomEX": 441,
            "WillowsEnd.PoisonfallHC": 444,
            "MarshSpawn.ALittleBraver": 449
        }

        this.uberIDToUberGroupID = {
            "swampStateGroup": [
                "MarshSpawn.RockHC",
                "MarshSpawn.FirstPickupEX",
                "MarshSpawn.GrappleHC",
                "MarshSpawn.BridgeEX",
                "MarshSpawn.ResilienceOre",
                "MarshSpawn.BashEC",
                "MarshSpawn.LeverEC",
                "MarshSpawn.LeftTokkEX",
                "MarshSpawn.CaveKS",
                "MarshSpawn.LongSwimEX",
                "MarshSpawn.FangEC",
                "HowlsDen.UpperEX",
                "HowlsDen.RightHC",
                "HowlsDen.AboveDoorKS",
                "HowlsDen.MagnetShard",
                "HowlsDen.BoneOre",
                "HowlsDen.AboveTPEX",
                "HowlsDen.LaserKS",
                "MarshPastOpher.TrialHC",
                "MarshPastOpher.TrialRightEX",
                "MarshPastOpher.CombatShrine",
                "MarshPastOpher.LeftEyestone",
                "MarshPastOpher.RightEyestone",
                "MarshPastOpher.BowEC",
                "MarshPastOpher.CeilingEX",
                "PoolsApproach.BurrowsPathEX"
            ],
            "pickupsGroup": [
                "MarshSpawn.ResilienceShard",
                "MarshSpawn.LifepactShard",
                "MarshSpawn.RecklessShard",
                "HowlsDen.StickyShard",
                "WestHollow.QuickshotShard",
                "EastHollow.SplinterShard",
                "GladesTown.ArcingShard",
                "GladesTown.BountyShard",
                "GladesTown.ADiamondInTheRough",
                "OuterWellspring.UltraGrappleShard",
                "OuterWellspring.LifeHarvestShard",
                "InnerWellspring.ThornShard",
                "EastPools.UltraBashShard",
                "WoodsMain.OverflowShard",
                "LowerReach.FractureShard",
                "LowerReach.CatalystShard",
                "UpperReach.LifeForceShard",
                "LowerDepths.SpiritSurgeShard",
                "LowerWastes.LastStandShard",
                "UpperWastes.TurmoilShard"
            ],
            "inkwaterMarshStateGroup": [
                "MarshSpawn.PreLupoEX",
                "MarshSpawn.FightRoomEX",
                "MarshSpawn.CaveOre",
                "MarshSpawn.BurrowOre",
                "HowlsDen.LeftHC",
                "HowlsDen.DoubleJumpEX",
                "MarshPastOpher.TrialLeftEX",
                "MarshPastOpher.TrialOre",
                "MarshPastOpher.TrialEC",
                "MarshPastOpher.SwingPoleEX",
                "MarshPastOpher.PoolsPathEC"
            ],
            "npcsStateGroup": [
                "MarshSpawn.LupoMap",
                "MarshSpawn.TheMissingKey",
                "MarshSpawn.IntoTheBurrows",
                "MidnightBurrows.LupoMap",
                "WestHollow.LupoMap",
                "InnerWellspring.LupoMap",
                "EastPools.LupoMap",
                "LowerReach.LupoMap",
                "LowerDepths.LupoMap",
                "LowerWastes.LupoMap",
                "WillowsEnd.LupoMap"
            ],
            "treesDontWorry": [
                "MarshSpawn.RegenTree",
                "MidnightBurrows.DamageTree",
                "HowlsDen.SwordTree",
                "HowlsDen.DoubleJumpTree",
                "MarshPastOpher.BowTree",
                "WestHollow.DashTree",
                "EastHollow.BashTree",
                "GladesTown.DamageTree",
                "InnerWellspring.GrappleTree",
                "UpperPools.SwimDashTree",
                "UpperReach.LightBurstTree",
                "LowerDepths.FlashTree",
                "LowerWastes.BurrowTree",
                "WeepingRidge.LaunchTree"
            ],
            "howlsOriginGroup": [
                "MarshSpawn.BurrowsApproachLedgeEX",
                "MarshSpawn.CrusherSwimEX",
                "MidnightBurrows.LeftKS",
                "MidnightBurrows.RightKS",
                "MidnightBurrows.UpperKS",
                "MidnightBurrows.LowerKS",
                "MidnightBurrows.DeflectorShard",
                "HowlsDen.CombatShrine"
            ],
            "questUberStateGroup": [
                "MarshSpawn.FangQI",
                "MarshSpawn.ALittleBraver",
                "MidnightBurrows.TabletQI",
                "EastHollow.HandToHandMap",
                "EastHollow.KwoloksWisdom",
                "GladesTown.HandToHandPouch",
                "GladesTown.HandToHandLantern",
                "GladesTown.HandToHandCanteen",
                "GladesTown.HandToHandSoup",
                "GladesTown.AcornQI",
                "GladesTown.IntoTheDarkness",
                "GladesTown.RebuildTheGlades",
                "GladesTown.RegrowTheGlades",
                "OuterWellspring.TheLostCompass",
                "InnerWellspring.HandToHandHerbs",
                "InnerWellspring.BlueMoonSeed",
                "EastPools.HandToHandSpyglass",
                "EastPools.GrassSeed",
                "WoodsEntry.DollQI",
                "WoodsEntry.TreeSeed",
                "LowerReach.HandToHandHat",
                "UpperReach.SpringSeed",
                "UpperDepths.LightcatcherSeed",
                "LowerDepths.HandToHandSilk",
                "LowerWastes.EerieGem",
                "LowerWastes.HandToHandMapstone",
                "UpperWastes.FlowersSeed",
                "WindtornRuins.HandToHandComplete"
            ],
            "lagoonStateGroup": [
                "MarshPastOpher.PoolsPathEX",
                "PoolsApproach.CurrentEX",
                "PoolsApproach.AboveWheelEX",
                "PoolsApproach.MillPathHC",
                "PoolsApproach.MillPathEC",
                "PoolsApproach.MillPathEX"
            ],
            "kwolokGroupDescriptor": [
                "WestHollow.CrusherHC",
                "WestHollow.FarLeftEX",
                "WestHollow.RockPuzzleEX",
                "WestHollow.HiddenEC",
                "WestHollow.SwimEC",
                "WestHollow.TrialHC",
                "WestHollow.BelowLupoEX",
                "WestHollow.AboveDashEX",
                "WestHollow.DashRightEX",
                "WestHollow.CrusherEX",
                "EastHollow.GladesApproachOre",
                "EastHollow.HornBeetleFightEX",
                "EastHollow.SpikeLanternEX",
                "EastHollow.SecretRoofEX",
                "EastHollow.MortarEX",
                "EastHollow.BashEC",
                "EastHollow.BashEX",
                "WestGlades.AbovePlantEX",
                "WestGlades.LowerPoolEX",
                "WestGlades.UpperPoolEX",
                "WestGlades.SwimEC",
                "WestGlades.LeftOre",
                "WestGlades.RightOre"
            ],
            "bashIntroductionA__clone1Group": [
                "EastHollow.BashHC"
            ],
            "_petrifiedForestGroup": [
                "EastHollow.RightKwolokEX",
                "EastHollow.SilentSwimEC",
                "WoodsEntry.MudPitEX",
                "WoodsEntry.LedgeOre",
                "WoodsEntry.LeafPileEX",
                "WoodsEntry.TpEX",
                "WoodsEntry.LowerKS",
                "WoodsEntry.UpperKS",
                "WoodsMain.RightKS",
                "WoodsMain.UpperKS",
                "WoodsMain.LeftKS",
                "WoodsMain.LowerKS",
                "WoodsMain.BehindWallOre",
                "WoodsMain.LowerLeafPileEX",
                "WoodsMain.MiddleLeafPileEX",
                "WoodsMain.UpperLeafPileEX",
                "WoodsMain.YellowWallEX",
                "WoodsMain.HiddenOre",
                "WoodsMain.HiddenEX",
                "WoodsMain.BelowKeystonesEX",
                "WoodsMain.BehindDoorRoofEX",
                "WoodsMain.PetrifiedHowlEX",
                "WoodsMain.CombatShrine",
                "WoodsMain.ShrineEX",
                "WoodsMain.FeedingGroundsEX"
            ],
            "kwoloksCavernThroneRoomGroup": [
                "EastHollow.KwolokSwimOre",
                "EastHollow.KwolokSwimLeftEX",
                "EastHollow.KwolokSwimRightEX"
            ],
            "mouldwoodDepthsGroup": [
                "EastHollow.DepthsExteriorEX",
                "UpperDepths.EntrySpikesEX",
                "UpperDepths.EntryRoofEX",
                "UpperDepths.EntryOre",
                "UpperDepths.RightEntryKS",
                "UpperDepths.LeftEntryKS",
                "UpperDepths.SwimEC",
                "UpperDepths.TeleporterEX",
                "UpperDepths.LeftHealthKS",
                "UpperDepths.RightHealthKS",
                "UpperDepths.BossPathEX",
                "UpperDepths.KeystoneHC",
                "UpperDepths.HiveEX",
                "LowerDepths.RaceStartHC",
                "LowerDepths.BelowDoorOre",
                "LowerDepths.CombatShrine",
                "LowerDepths.SwimEC",
                "LowerDepths.LeftEX",
                "LowerDepths.RightEX"
            ],
            "hubUberStateGroup": [
                "GladesTown.HoleHutEC",
                "GladesTown.UpperOre",
                "GladesTown.LowerOre",
                "GladesTown.LupoSoupEX",
                "GladesTown.BraveMokiHutEX",
                "GladesTown.MotayHutEX",
                "GladesTown.HoleHutEX",
                "GladesTown.UpperLeftEX",
                "GladesTown.LupoSwimMiddleEX",
                "GladesTown.CaveBurrowEX",
                "GladesTown.BelowHoleHutEX",
                "GladesTown.KeyMokiHutEX",
                "GladesTown.AboveTpEX",
                "GladesTown.AboveCaveEX",
                "GladesTown.LupoSwimLeftEX",
                "GladesTown.UpdraftCeilingEX",
                "GladesTown.LeafPileEX",
                "LowerReach.BreakWallEX"
            ],
            "wellspringGladesGroup": [
                "GladesTown.AboveGromHC",
                "GladesTown.LupoSwimHC",
                "WestGlades.ShrineHC",
                "WestGlades.CombatShrine"
            ],
            "wellspringGroupDescriptor": [
                "WestGlades.GrappleEX",
                "OuterWellspring.RightWallOre",
                "OuterWellspring.RightWallEC",
                "OuterWellspring.RightWallEX",
                "OuterWellspring.HiddenHC",
                "OuterWellspring.EntranceRoofEX",
                "OuterWellspring.WheelEX",
                "OuterWellspring.BasementEC",
                "OuterWellspring.SwimEX",
                "OuterWellspring.SwimOre",
                "InnerWellspring.NeedleQI"
            ],
            "waterMillStateGroupDescriptor": [
                "OuterWellspring.TrialOre",
                "InnerWellspring.ThornEX",
                "InnerWellspring.ThreeWheelsEX",
                "InnerWellspring.WaterSwitchEX",
                "InnerWellspring.DrainHC",
                "InnerWellspring.DrainEX",
                "InnerWellspring.LaserOre",
                "InnerWellspring.LeverEC",
                "InnerWellspring.LupoEX",
                "InnerWellspring.ShortcutWheelEX",
                "InnerWellspring.GrappleTreeEX",
                "InnerWellspring.AboveSpinArenaEX",
                "InnerWellspring.RotateRoomEX",
                "InnerWellspring.RotateRoomOre",
                "InnerWellspring.LibraryEX",
                "InnerWellspring.AboveTpEX",
                "InnerWellspring.SwimOre",
                "InnerWellspring.EscapeRevisitEX"
            ],
            "lumaPoolsStateGroup": [
                "EastPools.RightOre",
                "EastPools.TwoCrushersEX",
                "EastPools.CurrentEX",
                "EastPools.BelowLeverEX",
                "EastPools.AboveDoorOre",
                "EastPools.PurpleWallHC",
                "EastPools.AboveTpEX",
                "EastPools.LupoOre",
                "EastPools.FightRoomHC",
                "EastPools.EnergyHarvestShard",
                "EastPools.LupoEX",
                "EastPools.BehindCrusherEX",
                "UpperPools.LowerKS",
                "UpperPools.UpperLeftKS",
                "UpperPools.UpperMidKS",
                "UpperPools.UpperRightKS",
                "UpperPools.FishPoolEX",
                "UpperPools.FishPoolOre",
                "UpperPools.BubblesEC",
                "UpperPools.LeftBubblesEX",
                "UpperPools.RightBubblesEX",
                "UpperPools.CurrentEX",
                "UpperPools.RoofEX",
                "UpperPools.WaterfallEC",
                "WestPools.BurrowEX",
                "WestPools.BurrowOre",
                "WestPools.TpEX",
                "WestPools.EscapeRevisitEX"
            ],
            "baursReachGroup": [
                "LowerReach.BelowBaurEX",
                "LowerReach.AboveBaurLowerEX",
                "LowerReach.AboveBaurUpperEX",
                "LowerReach.IcefallOre",
                "LowerReach.IcefallEX",
                "LowerReach.AboveDoorEX",
                "LowerReach.HiddenOre",
                "LowerReach.MeltIceEX",
                "LowerReach.BurrowEX",
                "LowerReach.TPLeftEX",
                "LowerReach.BelowLupoEX",
                "LowerReach.WindBottomEX",
                "LowerReach.WindHiddenEX",
                "LowerReach.SnowballHC",
                "LowerReach.RoofLeftEX",
                "LowerReach.RoofRightEX",
                "LowerReach.EscapeRevisitEX",
                "LowerReach.RightKS",
                "LowerReach.UpperLeftKS",
                "LowerReach.MiddleLeftKS",
                "LowerReach.BottomLeftKS",
                "LowerReach.TrialEX",
                "UpperReach.LowerKS",
                "UpperReach.UpperKS",
                "UpperReach.MiddleLeftKS",
                "UpperReach.MiddleRightKS",
                "UpperReach.SoupOre",
                "UpperReach.SwingPoleEX",
                "UpperReach.SwimEX",
                "UpperReach.TreeOre",
                "UpperReach.WellEX",
                "UpperReach.HiddenEX"
            ],
            "winterForestGroupDescriptor": [
                "UpperReach.LifeForceEX"
            ],
            "desertAGroup": [
                "LowerWastes.WestTPOre",
                "LowerWastes.PurpleWallEX",
                "LowerWastes.SunsetViewEX",
                "UpperWastes.LowerKS",
                "UpperWastes.UpperKS",
                "UpperWastes.KSDoorEX",
                "UpperWastes.SpinLasersRightEX",
                "UpperWastes.SpinLasersMiddleEX",
                "UpperWastes.SpinLasersLowerEX",
                "UpperWastes.WallOre"
            ],
            "windsweptWastesGroupDescriptor": [
                "LowerWastes.SandBridgeOre",
                "LowerWastes.MuncherTunnelEC",
                "LowerWastes.SandPotHC",
                "LowerWastes.SandPotEX",
                "LowerWastes.MuncherPitEX",
                "LowerWastes.BottomRightEX",
                "LowerWastes.BottomRightHC",
                "LowerWastes.LastStandEX",
                "LowerWastes.MuncherClimbEX",
                "LowerWastes.SkeetoHiveEX",
                "LowerWastes.BurrowTreeEX",
                "LowerWastes.UpperPathEC",
                "LowerWastes.UpperPathEX",
                "LowerWastes.UpperPathHiddenEX",
                "LowerWastes.UpperPathHC",
                "LowerWastes.EastTPOre",
                "UpperWastes.LedgeEC",
                "UpperWastes.MissileSpawnEX",
                "UpperWastes.PurpleWallEX",
                "UpperWastes.PurpleWallHC",
                "UpperWastes.RoofEX"
            ],
            "windtornRuinsGroup": [
                "WindtornRuins.EscapeRevisitEC"
            ],
            "corruptedPeakGroup": [
                "WeepingRidge.Ore",
                "WeepingRidge.SpikeClimbEX",
                "WeepingRidge.PortalEX",
                "WillowsEnd.UpperLeftEX",
                "WillowsEnd.UpperRightEX"
            ],
            "willowsEndGroup": [
                "WillowsEnd.SpikesOre",
                "WillowsEnd.EntryEX",
                "WillowsEnd.PoisonfallHC",
                "WillowsEnd.WindSpinOre",
                "WillowsEnd.RedirectEX"
            ],
            "twillenShopDontWorry": [
                "TwillenShop.Overcharge",
                "TwillenShop.TripleJump",
                "TwillenShop.Wingclip",
                "TwillenShop.Swap",
                "TwillenShop.LightHarvest",
                "TwillenShop.Vitality",
                "TwillenShop.Energy",
                "TwillenShop.Finesse"
            ],
            "opherShopDontWorry": [
                "OpherShop.WaterBreath",
                "OpherShop.Spike",
                "OpherShop.SpiritSmash",
                "OpherShop.Teleport",
                "OpherShop.SpiritStar",
                "OpherShop.Blaze",
                "OpherShop.Sentry"
            ]
        }

        this.uberIDMapGame = {
            "animalCutsceneGroupDescriptor": {
                "id": "192",
                "uberIDs": [
                    {
                        "name": "animalCutsceneDoneUberState",
                        "id": "80",
                        "type": "bool"
                    }
                ]
            },
            "kwoloksGroupDescriptor": {
                "id": "195",
                "uberIDs": [
                    {
                        "name": "leafPileB",
                        "id": "56127",
                        "type": "bool"
                    }
                ]
            },
            "_riverlandsGroup": {
                "id": "229",
                "uberIDs": [
                    {
                        "name": "riverlands_blueFlameDoorBOpen",
                        "id": "2",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalOBurning",
                        "id": "27",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalFBurning",
                        "id": "30",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_blueFlameDoorAOpen",
                        "id": "35",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_blueFlameDoorFOpen",
                        "id": "49",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalEBurning",
                        "id": "52",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalABurning",
                        "id": "62",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalIBurning",
                        "id": "66",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalNBurning",
                        "id": "71",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_blueFlameDoorEOpen",
                        "id": "76",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalGBurning",
                        "id": "108",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalMBurning",
                        "id": "119",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalCBurning",
                        "id": "129",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalKBurning",
                        "id": "174",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_blueFlameDoorCOpen",
                        "id": "185",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalHBurning",
                        "id": "210",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalJBurning",
                        "id": "222",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_blueFlameDoorDOpen",
                        "id": "226",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalDBurning",
                        "id": "231",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalBBurning",
                        "id": "233",
                        "type": "bool"
                    },
                    {
                        "name": "riverlands_pedestalLBurning",
                        "id": "237",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "41675",
                        "type": "teleporter"
                    }
                ]
            },
            "kwolokGroupDescriptor": {
                "id": "937",
                "uberIDs": [
                    {
                        "name": "mediumExpA",
                        "id": "109",
                        "type": "bool"
                    },
                    {
                        "name": "watermillDoor",
                        "id": "749",
                        "type": "bool"
                    },
                    {
                        "name": "cavernGLeverAndDoor",
                        "id": "1174",
                        "type": "bool"
                    },
                    {
                        "name": "halfHealthCell",
                        "id": "2463",
                        "type": "bool",
                        "pos": {
                            "x": -121,
                            "y": -4269
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "smallExpOrbPlaceholder",
                        "id": "2538",
                        "type": "bool",
                        "pos": {
                            "x": -296,
                            "y": -4293
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "ravineToadTop04",
                        "id": "4057",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbB",
                        "id": "5568",
                        "type": "bool",
                        "pos": {
                            "x": -55,
                            "y": -4201
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "energyContainerA",
                        "id": "5668",
                        "type": "bool"
                    },
                    {
                        "name": "orePickup",
                        "id": "6703",
                        "type": "bool",
                        "pos": {
                            "x": -690,
                            "y": -4098
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "mokiGateOpened",
                        "id": "6778",
                        "type": "bool",
                        "pos": {
                            "x": -100,
                            "y": -4221
                        },
                        "icon": "Stone Door",
                        "category": "mapIcon"
                    },
                    {
                        "name": "drillableWallKwolokF",
                        "id": "7119",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA1",
                        "id": "7153",
                        "type": "bool"
                    },
                    {
                        "name": "ravineToadTop01",
                        "id": "7941",
                        "type": "bool"
                    },
                    {
                        "name": "energyHalfCell",
                        "id": "8518",
                        "type": "bool",
                        "pos": {
                            "x": -177,
                            "y": -4353
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "secretWallA",
                        "id": "10140",
                        "type": "bool",
                        "pos": {
                            "x": -222,
                            "y": -4305
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "gromOreA",
                        "id": "10729",
                        "type": "bool",
                        "pos": {
                            "x": -97,
                            "y": -4190
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "smallExpOrbPlaceholder1",
                        "id": "10877",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA2",
                        "id": "11430",
                        "type": "bool"
                    },
                    {
                        "name": "bombableWallAkwoloksCavernEa",
                        "id": "11610",
                        "type": "bool"
                    },
                    {
                        "name": "orePickupB",
                        "id": "11846",
                        "type": "bool",
                        "pos": {
                            "x": -560,
                            "y": -4063
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "drillableWallKwolokH",
                        "id": "12458",
                        "type": "bool"
                    },
                    {
                        "name": "stepsRisen",
                        "id": "13273",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA",
                        "id": "13413",
                        "type": "bool",
                        "pos": {
                            "x": -85,
                            "y": -4209
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "smallExpA",
                        "id": "15993",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpOrbPlaceholder2",
                        "id": "16163",
                        "type": "bool",
                        "pos": {
                            "x": -357,
                            "y": -4294
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "energyContainerA1",
                        "id": "17761",
                        "type": "bool",
                        "pos": {
                            "x": -690,
                            "y": -4115
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "temp_WispQuestStandIn",
                        "id": "18035",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpA1",
                        "id": "18103",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpC",
                        "id": "19529",
                        "type": "bool",
                        "pos": {
                            "x": 57,
                            "y": -4189
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "smallExpB",
                        "id": "20219",
                        "type": "bool"
                    },
                    {
                        "name": "bombableWallAkwoloksCavernE",
                        "id": "20294",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokCavernsGate",
                        "id": "21165",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokShrineBreakableWall",
                        "id": "22302",
                        "type": "bool"
                    },
                    {
                        "name": "leverDoor",
                        "id": "22419",
                        "type": "bool",
                        "pos": {
                            "x": -16,
                            "y": -4268
                        },
                        "icon": "Lever",
                        "category": "mapIcon"
                    },
                    {
                        "name": "pressurePlatePuzzle",
                        "id": "22716",
                        "type": "bool",
                        "pos": {
                            "x": -299,
                            "y": -4281
                        },
                        "icon": "Pressure Plate",
                        "category": "mapIcon"
                    },
                    {
                        "name": "lifeCellA",
                        "id": "23486",
                        "type": "bool"
                    },
                    {
                        "name": "energyHalfCell1",
                        "id": "23772",
                        "type": "bool",
                        "pos": {
                            "x": 46,
                            "y": -4237
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "spiritShardA",
                        "id": "24039",
                        "type": "bool"
                    },
                    {
                        "name": "energyHalfContainer",
                        "id": "24175",
                        "type": "bool",
                        "pos": {
                            "x": -177,
                            "y": -4353
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "spiritShardMagnet",
                        "id": "25413",
                        "type": "bool"
                    },
                    {
                        "name": "drillableWallKwolokC",
                        "id": "27481",
                        "type": "bool"
                    },
                    {
                        "name": "hornbugWallBroken",
                        "id": "27671",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpB",
                        "id": "30182",
                        "type": "bool",
                        "pos": {
                            "x": -31,
                            "y": -4302
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "ravineBottomTop01",
                        "id": "30594",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA",
                        "id": "31026",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpC1",
                        "id": "31036",
                        "type": "bool",
                        "pos": {
                            "x": -586,
                            "y": -4091
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "switchTop",
                        "id": "31222",
                        "type": "bool"
                    },
                    {
                        "name": "door",
                        "id": "32165",
                        "type": "bool",
                        "pos": {
                            "x": -292,
                            "y": -4328
                        },
                        "icon": "Stone Door",
                        "category": "mapIcon"
                    },
                    {
                        "name": "areaText",
                        "id": "32175",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneA",
                        "id": "32452",
                        "type": "bool"
                    },
                    {
                        "name": "keyStoneD",
                        "id": "33763",
                        "type": "bool"
                    },
                    {
                        "name": "winterForestDoor",
                        "id": "33773",
                        "type": "bool"
                    },
                    {
                        "name": "ravineToadTop03",
                        "id": "34340",
                        "type": "bool"
                    },
                    {
                        "name": "airDashHint",
                        "id": "34343",
                        "type": "bool"
                    },
                    {
                        "name": "leverDoorKwoloksHollowEntrance",
                        "id": "34396",
                        "type": "bool"
                    },
                    {
                        "name": "haveSpokenToOtters",
                        "id": "34516",
                        "type": "bool"
                    },
                    {
                        "name": "frogTongueA",
                        "id": "34849",
                        "type": "bool"
                    },
                    {
                        "name": "drillableWallKwolokI",
                        "id": "37823",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpOrbPlaceholder3",
                        "id": "37926",
                        "type": "bool",
                        "pos": {
                            "x": 11,
                            "y": -4401
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "drillableWallKwolokD",
                        "id": "39338",
                        "type": "bool"
                    },
                    {
                        "name": "drillableWallKwolokE",
                        "id": "39661",
                        "type": "bool"
                    },
                    {
                        "name": "drillableWallKwolokG",
                        "id": "39715",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallB",
                        "id": "40042",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloor",
                        "id": "40225",
                        "type": "bool",
                        "pos": {
                            "x": -5,
                            "y": -4234
                        },
                        "icon": "Breakable Ground",
                        "category": "mapIcon"
                    },
                    {
                        "name": "mediumExpD",
                        "id": "40298",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallKwolok",
                        "id": "40466",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpA2",
                        "id": "40657",
                        "type": "bool",
                        "pos": {
                            "x": -586,
                            "y": -4129
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "smallExpOrbPlaceholderB",
                        "id": "42333",
                        "type": "bool"
                    },
                    {
                        "name": "interactedWithTokk",
                        "id": "42585",
                        "type": "bool"
                    },
                    {
                        "name": "drillableWallKwolok",
                        "id": "44594",
                        "type": "bool"
                    },
                    {
                        "name": "ravineBottomTop03",
                        "id": "44861",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloorB",
                        "id": "45349",
                        "type": "bool",
                        "pos": {
                            "x": -5,
                            "y": -4267
                        },
                        "icon": "Breakable Ground",
                        "category": "mapIcon"
                    },
                    {
                        "name": "mediumExpA3",
                        "id": "45625",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpB1",
                        "id": "45744",
                        "type": "bool",
                        "pos": {
                            "x": -632,
                            "y": -4088
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "secretWallA1",
                        "id": "45811",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA4",
                        "id": "45987",
                        "type": "bool",
                        "pos": {
                            "x": 9,
                            "y": -4197
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "ravineToadTop02",
                        "id": "47364",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpOrbPlaceholderA",
                        "id": "48192",
                        "type": "bool",
                        "pos": {
                            "x": -82,
                            "y": -4370
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "desertBombableWall",
                        "id": "49545",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA1",
                        "id": "50176",
                        "type": "bool",
                        "pos": {
                            "x": -37,
                            "y": -4453
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "drillableWallKwolokB",
                        "id": "50357",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallA2",
                        "id": "50474",
                        "type": "bool"
                    },
                    {
                        "name": "energyContainerPlaceholder",
                        "id": "50615",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA1",
                        "id": "51878",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokBossBridgeBroken",
                        "id": "51919",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShardPickupPlaceholder",
                        "id": "52258",
                        "type": "bool"
                    },
                    {
                        "name": "frogDoor",
                        "id": "52652",
                        "type": "bool"
                    },
                    {
                        "name": "hornBugBossDefeatedState",
                        "id": "53122",
                        "type": "bool"
                    },
                    {
                        "name": "bombableWallAkwoloksCavernEb",
                        "id": "53969",
                        "type": "bool"
                    },
                    {
                        "name": "keyStoneC",
                        "id": "54102",
                        "type": "bool"
                    },
                    {
                        "name": "brokenWallA",
                        "id": "54236",
                        "type": "bool",
                        "pos": {
                            "x": -109,
                            "y": -4191
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "risingPedestals",
                        "id": "54318",
                        "type": "bool",
                        "pos": {
                            "x": -357,
                            "y": -4235
                        },
                        "icon": "Rising Pedestals",
                        "category": "mapIcon"
                    },
                    {
                        "name": "ravineBottomTop02",
                        "id": "55341",
                        "type": "bool"
                    },
                    {
                        "name": "dashHint",
                        "id": "55538",
                        "type": "bool"
                    },
                    {
                        "name": "drillableWallKwolokJ",
                        "id": "56352",
                        "type": "bool"
                    },
                    {
                        "name": "frogTongueC",
                        "id": "56795",
                        "type": "bool"
                    },
                    {
                        "name": "leverDoorA",
                        "id": "57028",
                        "type": "bool",
                        "pos": {
                            "x": -401,
                            "y": -4294
                        },
                        "icon": "Lever",
                        "category": "mapIcon"
                    },
                    {
                        "name": "healthHalfCell",
                        "id": "58598",
                        "type": "bool"
                    },
                    {
                        "name": "shootableTargetDoor",
                        "id": "58747",
                        "type": "bool"
                    },
                    {
                        "name": "ravineBottomTop05",
                        "id": "59404",
                        "type": "bool"
                    },
                    {
                        "name": "serializedBooleanUberState",
                        "id": "59515",
                        "type": "bool"
                    },
                    {
                        "name": "doorA",
                        "id": "59850",
                        "type": "bool",
                        "pos": {
                            "x": -171,
                            "y": -4237
                        },
                        "icon": "Stone Door",
                        "category": "mapIcon"
                    },
                    {
                        "name": "switchDoorUberState",
                        "id": "59920",
                        "type": "bool",
                        "pos": {
                            "x": -96,
                            "y": -4440
                        },
                        "icon": "Lever",
                        "category": "mapIcon"
                    },
                    {
                        "name": "ravineBottomTop04",
                        "id": "61099",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA5",
                        "id": "61460",
                        "type": "bool"
                    },
                    {
                        "name": "hornbugIntroArenaUberState",
                        "id": "61633",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpOrbPlaceholderC",
                        "id": "61744",
                        "type": "bool",
                        "pos": {
                            "x": -99,
                            "y": -4408
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "xpOrbC",
                        "id": "61783",
                        "type": "bool"
                    },
                    {
                        "name": "healthHalfCell",
                        "id": "61897",
                        "type": "bool",
                        "pos": {
                            "x": -254,
                            "y": -4225
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "entranceStatueOpened",
                        "id": "64003",
                        "type": "bool",
                        "pos": {
                            "x": -328,
                            "y": -4227
                        },
                        "icon": "Kwoloks Hollow Gate",
                        "category": "mapIcon"
                    },
                    {
                        "name": "spiritShardPickupPlaceholderB",
                        "id": "64146",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA6",
                        "id": "65195",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestal",
                        "id": "5281",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestal1",
                        "id": "26601",
                        "type": "teleporter"
                    },
                    {
                        "name": "kwolokNpcState",
                        "id": "10071",
                        "type": "int"
                    },
                    {
                        "name": "cleanseWellspringQuestUberState",
                        "id": "34641",
                        "type": "int"
                    },
                    {
                        "name": "recedingWaterSetup",
                        "id": "42245",
                        "type": "int",
                        "icons": {
                            "1": {
                                "pos": {
                                    "x": -167,
                                    "y": -4213
                                },
                                "icon": "Lever",
                                "category": "mapIcon"
                            },
                            "2": {
                                "pos": {
                                    "x": -395,
                                    "y": -4271
                                },
                                "icon": "Lever",
                                "category": "mapIcon"
                            }
                        }
                    },
                    {
                        "name": "shardTraderState",
                        "id": "47836",
                        "type": "int"
                    },
                    {
                        "name": "hornBugBossState",
                        "id": "48534",
                        "type": "int"
                    },
                    {
                        "name": "recedingWaterSetupJordi",
                        "id": "52814",
                        "type": "int"
                    },
                    {
                        "name": "healthPlantTimer",
                        "id": "14501",
                        "type": "float"
                    },
                    {
                        "name": "healthPlant",
                        "id": "15130",
                        "type": "float"
                    },
                    {
                        "name": "eyesPlacedIntoStatue",
                        "id": "1038",
                        "type": "byte"
                    },
                    {
                        "name": "frogUpperMainRoomBottom",
                        "id": "6040",
                        "type": "byte"
                    },
                    {
                        "name": "frogTongueB",
                        "id": "12557",
                        "type": "byte"
                    },
                    {
                        "name": "retractTongue",
                        "id": "13557",
                        "type": "byte"
                    },
                    {
                        "name": "frogTongueE",
                        "id": "14026",
                        "type": "byte"
                    },
                    {
                        "name": "frogCavernGPuzzleLeftUp",
                        "id": "19495",
                        "type": "byte"
                    },
                    {
                        "name": "frogCavernBRight",
                        "id": "24510",
                        "type": "byte"
                    },
                    {
                        "name": "frogTop01",
                        "id": "28504",
                        "type": "byte"
                    },
                    {
                        "name": "attackableFrogByteUberState",
                        "id": "30661",
                        "type": "byte"
                    },
                    {
                        "name": "kwolokCavernsAttackableToad",
                        "id": "32948",
                        "type": "byte"
                    },
                    {
                        "name": "frogBottom03",
                        "id": "37928",
                        "type": "byte"
                    },
                    {
                        "name": "frogCavernFBottom",
                        "id": "38183",
                        "type": "byte"
                    },
                    {
                        "name": "frogCavernGPuzzleRight",
                        "id": "40810",
                        "type": "byte"
                    },
                    {
                        "name": "frogCavernBLeft",
                        "id": "41587",
                        "type": "byte"
                    },
                    {
                        "name": "frogCavernELeft",
                        "id": "44452",
                        "type": "byte"
                    },
                    {
                        "name": "frogUpperMainRoomTopC",
                        "id": "45423",
                        "type": "byte"
                    },
                    {
                        "name": "frogBottom02",
                        "id": "49392",
                        "type": "byte"
                    },
                    {
                        "name": "kwolokCavernsAttackableToadB",
                        "id": "49874",
                        "type": "byte"
                    },
                    {
                        "name": "frogUpperMainRoomTopA",
                        "id": "50411",
                        "type": "byte"
                    },
                    {
                        "name": "frogCavernGPuzzleLeft",
                        "id": "50803",
                        "type": "byte"
                    },
                    {
                        "name": "frogTongueD",
                        "id": "51234",
                        "type": "byte"
                    },
                    {
                        "name": "frogCavernERight",
                        "id": "53749",
                        "type": "byte"
                    },
                    {
                        "name": "frogCavernGBottom",
                        "id": "56395",
                        "type": "byte"
                    },
                    {
                        "name": "frogTop02",
                        "id": "57711",
                        "type": "byte"
                    },
                    {
                        "name": "frogTop03",
                        "id": "59288",
                        "type": "byte"
                    },
                    {
                        "name": "frogBottom04",
                        "id": "62300",
                        "type": "byte"
                    },
                    {
                        "name": "frogUpperMainRoomTopB",
                        "id": "63347",
                        "type": "byte"
                    },
                    {
                        "name": "frogCavernBTopRight",
                        "id": "63834",
                        "type": "byte"
                    },
                    {
                        "name": "frogBottom01",
                        "id": "64257",
                        "type": "byte"
                    }
                ]
            },
            "lagoonStateGroup": {
                "id": "945",
                "uberIDs": [
                    {
                        "name": "secretWallA",
                        "id": "3487",
                        "type": "bool",
                        "pos": {
                            "x": -918,
                            "y": -4166
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "canShowGlideHint",
                        "id": "3659",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA",
                        "id": "7031",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallB",
                        "id": "7465",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokBossBridgeBreak",
                        "id": "9034",
                        "type": "bool"
                    },
                    {
                        "name": "wispSequencePlayedOut",
                        "id": "9367",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpB",
                        "id": "10682",
                        "type": "bool",
                        "pos": {
                            "x": -1047,
                            "y": -4217
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "largeExpC",
                        "id": "10833",
                        "type": "bool",
                        "pos": {
                            "x": -801,
                            "y": -4186
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "tentacleKilled",
                        "id": "12852",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA1",
                        "id": "14530",
                        "type": "bool",
                        "pos": {
                            "x": -941,
                            "y": -4145
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "energyCellA",
                        "id": "21334",
                        "type": "bool",
                        "pos": {
                            "x": -924,
                            "y": -4170
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "memoriesPlayed",
                        "id": "25182",
                        "type": "bool"
                    },
                    {
                        "name": "energyContainerA",
                        "id": "25520",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA",
                        "id": "28631",
                        "type": "bool",
                        "pos": {
                            "x": -1003,
                            "y": -4241
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "mediumExpA2",
                        "id": "32890",
                        "type": "bool"
                    },
                    {
                        "name": "displayedGlideHint",
                        "id": "33930",
                        "type": "bool"
                    },
                    {
                        "name": "lagoonMillTransitionHealthCell",
                        "id": "37243",
                        "type": "bool",
                        "pos": {
                            "x": -851,
                            "y": -4196
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "mediumExpB1",
                        "id": "38319",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallB1",
                        "id": "39004",
                        "type": "bool",
                        "pos": {
                            "x": -961,
                            "y": -4244
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "secretWallB",
                        "id": "43451",
                        "type": "bool",
                        "pos": {
                            "x": -816,
                            "y": -4184
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "bossReward",
                        "id": "49747",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA1",
                        "id": "55795",
                        "type": "bool",
                        "pos": {
                            "x": -891,
                            "y": -4197
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "medExpA",
                        "id": "58723",
                        "type": "bool",
                        "pos": {
                            "x": -895,
                            "y": -4137
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "1370",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState1",
                        "id": "58183",
                        "type": "teleporter"
                    },
                    {
                        "name": "healthPlantA",
                        "id": "23296",
                        "type": "float"
                    },
                    {
                        "name": "kwolokBossState",
                        "id": "58403",
                        "type": "byte"
                    }
                ]
            },
            "playerUberStateGroupDescriptor": {
                "id": "3440",
                "uberIDs": [
                    {
                        "name": "playerPurchasedWeaponMasterUpgrade",
                        "id": "20131",
                        "type": "bool"
                    },
                    {
                        "name": "playerOnTandemUberState",
                        "id": "54402",
                        "type": "bool"
                    },
                    {
                        "name": "playerUberStateDescriptor",
                        "id": "37811",
                        "type": "float"
                    },
                    {
                        "name": "playerWeaponDamageUpgradeLevel",
                        "id": "34448",
                        "type": "int"
                    },
                    {
                        "name": "hammerSpeedUpgradeLevel",
                        "id": "1157",
                        "type": "byte"
                    },
                    {
                        "name": "chargeWeaponsUpgradeLevel",
                        "id": "2234",
                        "type": "byte"
                    },
                    {
                        "name": "spikeExplosiveUpgradeLevel",
                        "id": "5687",
                        "type": "byte"
                    },
                    {
                        "name": "spellMeditateUpgradeLevel",
                        "id": "9670",
                        "type": "byte"
                    },
                    {
                        "name": "waterBreathUpgradeLevel",
                        "id": "10233",
                        "type": "byte"
                    },
                    {
                        "name": "chakramSpinUpgradeLevel",
                        "id": "10776",
                        "type": "byte"
                    },
                    {
                        "name": "bashSplitUpgradeLevel",
                        "id": "10928",
                        "type": "byte"
                    },
                    {
                        "name": "grenadeDamageUpgradeLevel",
                        "id": "16155",
                        "type": "byte"
                    },
                    {
                        "name": "spellChakramUpgradeLevel",
                        "id": "17265",
                        "type": "byte"
                    },
                    {
                        "name": "missilesDamageUpgradeLevel",
                        "id": "18770",
                        "type": "byte"
                    },
                    {
                        "name": "spellSpikeUpgradeLevel",
                        "id": "24142",
                        "type": "byte"
                    },
                    {
                        "name": "missilesAmountUpgradeLevel",
                        "id": "26998",
                        "type": "byte"
                    },
                    {
                        "name": "bowDamageUpgradeLevel",
                        "id": "29503",
                        "type": "byte"
                    },
                    {
                        "name": "swordComboUpgradeLevel",
                        "id": "30415",
                        "type": "byte"
                    },
                    {
                        "name": "healEfficiencyUpgradeLevel",
                        "id": "31259",
                        "type": "byte"
                    },
                    {
                        "name": "spikeDamageUpgradeLevel",
                        "id": "33963",
                        "type": "byte"
                    },
                    {
                        "name": "spellSentryUpgradeLevel",
                        "id": "38929",
                        "type": "byte"
                    },
                    {
                        "name": "swordDamageUpgradeLevel",
                        "id": "39658",
                        "type": "byte"
                    },
                    {
                        "name": "chakramMagnetUpgradeLevel",
                        "id": "40954",
                        "type": "byte"
                    },
                    {
                        "name": "chakramDamageUpgradeLevel",
                        "id": "42913",
                        "type": "byte"
                    },
                    {
                        "name": "invisibilityDurationUpgradeLevel",
                        "id": "45208",
                        "type": "byte"
                    },
                    {
                        "name": "hammerStompUpgradeLevel",
                        "id": "46488",
                        "type": "byte"
                    },
                    {
                        "name": "sentryAmountUpgradeLevel",
                        "id": "48877",
                        "type": "byte"
                    },
                    {
                        "name": "hammerDamageUpgradeLevel",
                        "id": "53415",
                        "type": "byte"
                    },
                    {
                        "name": "sentrySpeedUpgradeLevel",
                        "id": "57376",
                        "type": "byte"
                    },
                    {
                        "name": "spellBlazeUpgradeLevel",
                        "id": "58703",
                        "type": "byte"
                    },
                    {
                        "name": "blazeChargeUpgradeLevel",
                        "id": "61898",
                        "type": "byte"
                    },
                    {
                        "name": "chakramAmountUpgradeLevel",
                        "id": "62563",
                        "type": "byte"
                    },
                    {
                        "name": "spellHammerUpgradeLevel",
                        "id": "64152",
                        "type": "byte"
                    }
                ]
            },
            "lumaPoolsStateGroup": {
                "id": "5377",
                "uberIDs": [
                    {
                        "name": "largeExpOrbPlaceholderA",
                        "id": "628",
                        "type": "bool",
                        "pos": {
                            "x": -1572,
                            "y": -4077
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "energyCellFragmentA",
                        "id": "1600",
                        "type": "bool",
                        "pos": {
                            "x": -1623,
                            "y": -4000
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "waterRaised",
                        "id": "2286",
                        "type": "bool"
                    },
                    {
                        "name": "pullWallLeft",
                        "id": "2518",
                        "type": "bool"
                    },
                    {
                        "name": "breakableSecretWallA",
                        "id": "3831",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallB",
                        "id": "4463",
                        "type": "bool"
                    },
                    {
                        "name": "leverAndDoor",
                        "id": "6398",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA",
                        "id": "6857",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpOrbPlaceholder",
                        "id": "7381",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA",
                        "id": "7540",
                        "type": "bool",
                        "pos": {
                            "x": -1336,
                            "y": -4104
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "breakRockDState",
                        "id": "8019",
                        "type": "bool"
                    },
                    {
                        "name": "trunkState",
                        "id": "8294",
                        "type": "bool"
                    },
                    {
                        "name": "bubbleMakerBlocked",
                        "id": "8440",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA1",
                        "id": "8451",
                        "type": "bool"
                    },
                    {
                        "name": "expOrb",
                        "id": "8939",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbB",
                        "id": "9812",
                        "type": "bool"
                    },
                    {
                        "name": "creepD",
                        "id": "10291",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallB1",
                        "id": "10782",
                        "type": "bool"
                    },
                    {
                        "name": "bombableWallA",
                        "id": "11049",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA",
                        "id": "12235",
                        "type": "bool",
                        "pos": {
                            "x": -1370,
                            "y": -4167
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "pressurePlateGate",
                        "id": "12826",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbD",
                        "id": "13832",
                        "type": "bool",
                        "pos": {
                            "x": -1176,
                            "y": -4178
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "leverAndDoor1",
                        "id": "14488",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShard",
                        "id": "14664",
                        "type": "bool"
                    },
                    {
                        "name": "drillableWall",
                        "id": "15383",
                        "type": "bool"
                    },
                    {
                        "name": "dashDoor",
                        "id": "15402",
                        "type": "bool"
                    },
                    {
                        "name": "bubbleMakerUnblockedA",
                        "id": "15754",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneB",
                        "id": "16426",
                        "type": "bool",
                        "pos": {
                            "x": -1538,
                            "y": -4074
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "breakRockFState",
                        "id": "16607",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbC",
                        "id": "17396",
                        "type": "bool",
                        "pos": {
                            "x": -1214,
                            "y": -4181
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "xpOrbA1",
                        "id": "18345",
                        "type": "bool",
                        "pos": {
                            "x": -1431,
                            "y": -4181
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "areaText",
                        "id": "19132",
                        "type": "bool"
                    },
                    {
                        "name": "pickupA",
                        "id": "19694",
                        "type": "bool",
                        "pos": {
                            "x": -1249,
                            "y": -4139
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "talkedToKwolok",
                        "id": "21700",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA2",
                        "id": "21860",
                        "type": "bool",
                        "pos": {
                            "x": -1645,
                            "y": -4085
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "breakRockEState",
                        "id": "22047",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallB2",
                        "id": "22978",
                        "type": "bool"
                    },
                    {
                        "name": "hintZones",
                        "id": "24015",
                        "type": "bool"
                    },
                    {
                        "name": "bubbleMakerUnblockedA1",
                        "id": "24765",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA3",
                        "id": "25391",
                        "type": "bool",
                        "pos": {
                            "x": -1650,
                            "y": -4160
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "bridgeState",
                        "id": "25612",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpOrbPlaceholderB",
                        "id": "25633",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA2",
                        "id": "26170",
                        "type": "bool"
                    },
                    {
                        "name": "lagoonDoor",
                        "id": "26987",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA4",
                        "id": "27204",
                        "type": "bool",
                        "pos": {
                            "x": -1230,
                            "y": -4126
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "bombableWall",
                        "id": "27558",
                        "type": "bool"
                    },
                    {
                        "name": "breakRockCState",
                        "id": "29662",
                        "type": "bool"
                    },
                    {
                        "name": "loweringWaterState",
                        "id": "29911",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpOrbPlaceholderB1",
                        "id": "30860",
                        "type": "bool"
                    },
                    {
                        "name": "treeFallen",
                        "id": "31093",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA3",
                        "id": "31145",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA1",
                        "id": "31434",
                        "type": "bool",
                        "pos": {
                            "x": -1535,
                            "y": -4034
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "bubbleMakerBlocked1",
                        "id": "32210",
                        "type": "bool"
                    },
                    {
                        "name": "creepB",
                        "id": "32685",
                        "type": "bool"
                    },
                    {
                        "name": "energyContainerA",
                        "id": "32750",
                        "type": "bool",
                        "pos": {
                            "x": -1389,
                            "y": -4040
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "mediumExpOrbPlaceholderC",
                        "id": "33110",
                        "type": "bool",
                        "pos": {
                            "x": -1568,
                            "y": -4063
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "xpOrbA5",
                        "id": "33180",
                        "type": "bool",
                        "pos": {
                            "x": -1449,
                            "y": -4037
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "breakRockAState",
                        "id": "33730",
                        "type": "bool"
                    },
                    {
                        "name": "orePickupA",
                        "id": "34852",
                        "type": "bool",
                        "pos": {
                            "x": -1134,
                            "y": -4117
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "playedMokiVignette",
                        "id": "35023",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneA",
                        "id": "35091",
                        "type": "bool",
                        "pos": {
                            "x": -1548,
                            "y": -4081
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "xpOrbB",
                        "id": "35440",
                        "type": "bool",
                        "pos": {
                            "x": -1414,
                            "y": -4155
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "bubbleMakerUnblockedB",
                        "id": "35751",
                        "type": "bool"
                    },
                    {
                        "name": "expOrb1",
                        "id": "35971",
                        "type": "bool"
                    },
                    {
                        "name": "breakableFloorA",
                        "id": "36511",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA6",
                        "id": "38515",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShard1",
                        "id": "40328",
                        "type": "bool",
                        "pos": {
                            "x": -1441,
                            "y": -4130
                        },
                        "icon": "Energy Harvest",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 25
                    },
                    {
                        "name": "keystoneD",
                        "id": "41881",
                        "type": "bool",
                        "pos": {
                            "x": -1518,
                            "y": -4079
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "mainPickup",
                        "id": "42145",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpOrbPlaceholderA",
                        "id": "42553",
                        "type": "bool"
                    },
                    {
                        "name": "creepA",
                        "id": "43134",
                        "type": "bool"
                    },
                    {
                        "name": "optionalPickup",
                        "id": "43859",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA7",
                        "id": "44122",
                        "type": "bool",
                        "pos": {
                            "x": -1654,
                            "y": -4143
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "expOrbA",
                        "id": "44777",
                        "type": "bool"
                    },
                    {
                        "name": "switchesActivated",
                        "id": "45765",
                        "type": "bool"
                    },
                    {
                        "name": "healthContainerA",
                        "id": "45774",
                        "type": "bool",
                        "pos": {
                            "x": -1365,
                            "y": -4109
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "fallingRockState",
                        "id": "46040",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneC",
                        "id": "46926",
                        "type": "bool",
                        "pos": {
                            "x": -1576,
                            "y": -4126
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "keystoneGate",
                        "id": "47621",
                        "type": "bool"
                    },
                    {
                        "name": "splitPlatformState",
                        "id": "49394",
                        "type": "bool"
                    },
                    {
                        "name": "pullWallRight",
                        "id": "49826",
                        "type": "bool"
                    },
                    {
                        "name": "doorState",
                        "id": "52062",
                        "type": "bool"
                    },
                    {
                        "name": "breakableLogA",
                        "id": "52133",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbB1",
                        "id": "52791",
                        "type": "bool",
                        "pos": {
                            "x": -1468,
                            "y": -4098
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "bombableWallB",
                        "id": "53532",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShard2",
                        "id": "56199",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallA",
                        "id": "56302",
                        "type": "bool"
                    },
                    {
                        "name": "creepE",
                        "id": "57334",
                        "type": "bool"
                    },
                    {
                        "name": "bubbleMakerUnblocked",
                        "id": "57453",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokChaseDoorState",
                        "id": "57929",
                        "type": "bool"
                    },
                    {
                        "name": "bubbleMakerUnblockedB1",
                        "id": "58278",
                        "type": "bool"
                    },
                    {
                        "name": "doorState1",
                        "id": "59514",
                        "type": "bool"
                    },
                    {
                        "name": "pickupA1",
                        "id": "61475",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbB2",
                        "id": "62180",
                        "type": "bool",
                        "pos": {
                            "x": -1655,
                            "y": -4189
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "waterLowered",
                        "id": "63173",
                        "type": "bool"
                    },
                    {
                        "name": "healthContainerA1",
                        "id": "63201",
                        "type": "bool",
                        "pos": {
                            "x": -1278,
                            "y": -4086
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "doorState2",
                        "id": "63513",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallA1",
                        "id": "63922",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWall",
                        "id": "64337",
                        "type": "bool"
                    },
                    {
                        "name": "creepC",
                        "id": "64761",
                        "type": "bool"
                    },
                    {
                        "name": "breakRockBState",
                        "id": "64827",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA2",
                        "id": "65019",
                        "type": "bool",
                        "pos": {
                            "x": -1770,
                            "y": -4125
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "breakableWallA4",
                        "id": "65413",
                        "type": "bool"
                    },
                    {
                        "name": "healthPlantA",
                        "id": "47557",
                        "type": "float"
                    },
                    {
                        "name": "healthPlantA1",
                        "id": "63230",
                        "type": "float"
                    },
                    {
                        "name": "arenaByteStateSerialized",
                        "id": "1373",
                        "type": "byte"
                    },
                    {
                        "name": "arenaBByteStateSerialized",
                        "id": "53480",
                        "type": "byte"
                    }
                ]
            },
            "testUberStateGroup": {
                "id": "6837",
                "uberIDs": [
                    {
                        "name": "firePedestalBooleanUberState",
                        "id": "5475",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokCavernDoor2",
                        "id": "7403",
                        "type": "bool"
                    },
                    {
                        "name": "desertShortcutWall",
                        "id": "10235",
                        "type": "bool"
                    },
                    {
                        "name": "testDoorTwoSlotsBooleanUberState",
                        "id": "19173",
                        "type": "bool"
                    },
                    {
                        "name": "testShrineUberStateDescriptor",
                        "id": "19701",
                        "type": "bool"
                    },
                    {
                        "name": "arenaCompletedState",
                        "id": "31278",
                        "type": "bool"
                    },
                    {
                        "name": "lianaHealLantern",
                        "id": "31353",
                        "type": "bool"
                    },
                    {
                        "name": "willowsEndShortcutWall",
                        "id": "38771",
                        "type": "bool"
                    },
                    {
                        "name": "swampShortcutWall",
                        "id": "40492",
                        "type": "bool"
                    },
                    {
                        "name": "winterForestEnemyDoor",
                        "id": "44762",
                        "type": "bool"
                    },
                    {
                        "name": "lagoonContactSwitch",
                        "id": "47735",
                        "type": "bool"
                    },
                    {
                        "name": "watermillShortcutWall",
                        "id": "51086",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokCavernDoor",
                        "id": "54316",
                        "type": "bool"
                    },
                    {
                        "name": "testLeverDescriptorDesertC",
                        "id": "54999",
                        "type": "bool"
                    },
                    {
                        "name": "oneSideBreakableWall",
                        "id": "55663",
                        "type": "bool"
                    },
                    {
                        "name": "testSecret",
                        "id": "60688",
                        "type": "bool"
                    },
                    {
                        "name": "testBooleanUberStateDescriptor",
                        "id": "60823",
                        "type": "bool"
                    },
                    {
                        "name": "cordycepsShortcutWall",
                        "id": "61703",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokCavernsPressurePlate",
                        "id": "62194",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokCavernsAttackableSwitch",
                        "id": "62909",
                        "type": "bool"
                    },
                    {
                        "name": "lagoonShortcutWall",
                        "id": "64646",
                        "type": "bool"
                    },
                    {
                        "name": "testBreakableWallInt",
                        "id": "37967",
                        "type": "int"
                    },
                    {
                        "name": "testBreakableWallIntB",
                        "id": "61358",
                        "type": "int"
                    },
                    {
                        "name": "serializedInt",
                        "id": "63967",
                        "type": "int"
                    },
                    {
                        "name": "landOnAndSpawnOrbs",
                        "id": "39815",
                        "type": "int"
                    },
                    {
                        "name": "testSerializedFloatUberState",
                        "id": "61561",
                        "type": "int"
                    }
                ]
            },
            "desertAGroup": {
                "id": "7228",
                "uberIDs": [
                    {
                        "name": "collectableHDesertA",
                        "id": "1781",
                        "type": "bool"
                    },
                    {
                        "name": "collectableEDesertA",
                        "id": "2996",
                        "type": "bool"
                    },
                    {
                        "name": "secretWall",
                        "id": "4034",
                        "type": "bool",
                        "pos": {
                            "x": 1834,
                            "y": -3978
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "gorlekOre",
                        "id": "8370",
                        "type": "bool",
                        "pos": {
                            "x": 1952,
                            "y": -3616
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "keystoneAUberState",
                        "id": "20282",
                        "type": "bool",
                        "pos": {
                            "x": 1877,
                            "y": -3844
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "collectableFDesertA",
                        "id": "32434",
                        "type": "bool"
                    },
                    {
                        "name": "expOrb",
                        "id": "35329",
                        "type": "bool",
                        "pos": {
                            "x": 1907,
                            "y": -3807
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "collectableDesertA",
                        "id": "36579",
                        "type": "bool"
                    },
                    {
                        "name": "lifeCellBooleanUberState",
                        "id": "37885",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbUberState",
                        "id": "45954",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbBUberState",
                        "id": "48993",
                        "type": "bool",
                        "pos": {
                            "x": 1948,
                            "y": -3730
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "collectableCDesertA",
                        "id": "52086",
                        "type": "bool",
                        "pos": {
                            "x": 1607,
                            "y": -3975
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "xpOrbB",
                        "id": "54275",
                        "type": "bool",
                        "pos": {
                            "x": 2006,
                            "y": -3724
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "gorlekOre1",
                        "id": "54494",
                        "type": "bool",
                        "pos": {
                            "x": 1503,
                            "y": -4007
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "collectableADesertA",
                        "id": "56821",
                        "type": "bool",
                        "pos": {
                            "x": 1535,
                            "y": -3997
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "collectableGDesertA",
                        "id": "60605",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbAUberState",
                        "id": "61548",
                        "type": "bool",
                        "pos": {
                            "x": 1935,
                            "y": -3755
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "keystoneBUberState",
                        "id": "62117",
                        "type": "bool",
                        "pos": {
                            "x": 1823,
                            "y": -3769
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    }
                ]
            },
            "statsUberStateGroup": {
                "id": "8246",
                "uberIDs": [
                    {
                        "name": "totalSpiritLightCollectedSerializedIntUberState",
                        "id": "5144",
                        "type": "int"
                    },
                    {
                        "name": "fastTravelCountIntUberState",
                        "id": "7909",
                        "type": "int"
                    },
                    {
                        "name": "enemiesPiercedAtOnceStatSettingSerializedUberState",
                        "id": "7927",
                        "type": "int"
                    },
                    {
                        "name": "deathFromEnemiesStatSettingSerializedUberState",
                        "id": "12323",
                        "type": "int"
                    },
                    {
                        "name": "npcsInHubStatSettingSerializedUberState",
                        "id": "15506",
                        "type": "int"
                    },
                    {
                        "name": "bashesStatSettingSerializedUberState",
                        "id": "17772",
                        "type": "int"
                    },
                    {
                        "name": "shardSlotUpgradesCollectedStatSettingSerializedUberState",
                        "id": "18554",
                        "type": "int"
                    },
                    {
                        "name": "mostDefeatedEnemyEnumStatSettingSerializedUberState",
                        "id": "26498",
                        "type": "int"
                    },
                    {
                        "name": "totalDamageTakenStatSettingSerializedUberState",
                        "id": "28073",
                        "type": "int"
                    },
                    {
                        "name": "wallJumpsStatSettingSerializedUberState",
                        "id": "30164",
                        "type": "int"
                    },
                    {
                        "name": "spiritLightCollectedStatSettingSerializedUberState",
                        "id": "30251",
                        "type": "int"
                    },
                    {
                        "name": "sideQuestsCompletedStatSettingSerializedUberState",
                        "id": "31056",
                        "type": "int"
                    },
                    {
                        "name": "enemyVsEnemyKillsStatSettingSerializedUberState",
                        "id": "31216",
                        "type": "int"
                    },
                    {
                        "name": "enemiesDefeatedStatSettingSerializedUberState",
                        "id": "32860",
                        "type": "int"
                    },
                    {
                        "name": "deathsStatSettingSerializedUberState",
                        "id": "36466",
                        "type": "int"
                    },
                    {
                        "name": "totalSpiritLightSpentSerializedIntUberState",
                        "id": "37583",
                        "type": "int"
                    },
                    {
                        "name": "highestAmountOfDamageSerializedIntUberState",
                        "id": "40254",
                        "type": "int"
                    },
                    {
                        "name": "totalHealthRegeneratedStatSettingSerializedUberState",
                        "id": "42772",
                        "type": "int"
                    },
                    {
                        "name": "gardenerSeedsCollectedStatSettingSerializedUberState",
                        "id": "44318",
                        "type": "int"
                    },
                    {
                        "name": "racesCompletedStatSettingSerializedUberState",
                        "id": "49162",
                        "type": "int"
                    },
                    {
                        "name": "favoriteSkillEnumStatSettingSerializedUberState",
                        "id": "49721",
                        "type": "int"
                    },
                    {
                        "name": "shrinesDiscoveredStatSettingSerializedUberState",
                        "id": "50096",
                        "type": "int"
                    },
                    {
                        "name": "spiritLightSpentStatSettingSerializedUberState",
                        "id": "50669",
                        "type": "int"
                    },
                    {
                        "name": "dashesStatSettingSerializedUberState",
                        "id": "50952",
                        "type": "int"
                    },
                    {
                        "name": "racePedestalsActivatedStatSettingSerializedUberState",
                        "id": "54110",
                        "type": "int"
                    },
                    {
                        "name": "deathsEnvironmentalStatSettingSerializedUberState",
                        "id": "57639",
                        "type": "int"
                    },
                    {
                        "name": "drowningDeathsStatSettingSerializedUberState",
                        "id": "58048",
                        "type": "int"
                    },
                    {
                        "name": "jumpsStatSettingSerializedUberState",
                        "id": "58908",
                        "type": "int"
                    },
                    {
                        "name": "shardsCollectedStatSettingSerializedUberState",
                        "id": "59865",
                        "type": "int"
                    },
                    {
                        "name": "spiritWellsDiscoveredStatSettingSerializedUberState",
                        "id": "60852",
                        "type": "int"
                    },
                    {
                        "name": "mostDefeatedByEnemyEnumStatSettingSerializedUberState",
                        "id": "62287",
                        "type": "int"
                    },
                    {
                        "name": "shrinesCompletedStatSettingSerializedUberState",
                        "id": "63037",
                        "type": "int"
                    },
                    {
                        "name": "leashesStatSettingSerializedUberState",
                        "id": "64519",
                        "type": "int"
                    },
                    {
                        "name": "teleportCountStatSettingSerializedUberState",
                        "id": "64778",
                        "type": "int"
                    },
                    {
                        "name": "timeAirborneStatSettingSerializedUberState",
                        "id": "3307",
                        "type": "float"
                    },
                    {
                        "name": "timeGlowingStatSettingSerializedUberState",
                        "id": "7293",
                        "type": "float"
                    },
                    {
                        "name": "distanceSwamStatSettingSerializedFloatUberState",
                        "id": "8682",
                        "type": "float"
                    },
                    {
                        "name": "distanceGlidedStatSettingSerializedFloatUberState",
                        "id": "16123",
                        "type": "float"
                    },
                    {
                        "name": "distanceBurrowedStatSettingSerializedFloatUberState",
                        "id": "40261",
                        "type": "float"
                    },
                    {
                        "name": "timeTotalPlaytimeStatSettingSerializedUberState",
                        "id": "43418",
                        "type": "int"
                    },
                    {
                        "name": "distanceFallingStatSettingSerializedFloatUberState",
                        "id": "44439",
                        "type": "int"
                    },
                    {
                        "name": "timeAliveUberState",
                        "id": "47477",
                        "type": "int"
                    },
                    {
                        "name": "timeLongestSingleAirborneStatSettingSerializedUberState",
                        "id": "49364",
                        "type": "float"
                    },
                    {
                        "name": "energySpentSerializedFloatUberState",
                        "id": "60940",
                        "type": "float"
                    },
                    {
                        "name": "distanceTravelledStatSettingSerializedFloatUberState",
                        "id": "62310|",
                        "type": "int"
                    }
                ]
            },
            "inkwaterMarshStateGroup": {
                "id": "9593",
                "uberIDs": [
                    {
                        "name": "mokiTorchPlayed",
                        "id": "3621",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbA",
                        "id": "5253",
                        "type": "bool",
                        "pos": {
                            "x": -527,
                            "y": -4354
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "xpOrbA",
                        "id": "5929",
                        "type": "bool",
                        "pos": {
                            "x": -656,
                            "y": -4342
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "expOrb",
                        "id": "7849",
                        "type": "bool"
                    },
                    {
                        "name": "lanternAndCreepA",
                        "id": "9229",
                        "type": "bool",
                        "pos": {
                            "x": -528,
                            "y": -4235
                        },
                        "icon": "Creep",
                        "category": "mapIcon"
                    },
                    {
                        "name": "breakableLogB",
                        "id": "14616",
                        "type": "bool"
                    },
                    {
                        "name": "climbHintShown",
                        "id": "15672",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloor",
                        "id": "17659",
                        "type": "bool",
                        "pos": {
                            "x": -715,
                            "y": -4184
                        },
                        "icon": "Breakable Ground",
                        "category": "mapIcon"
                    },
                    {
                        "name": "expOrb1",
                        "id": "17818",
                        "type": "bool",
                        "pos": {
                            "x": -507,
                            "y": -4537
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "lasersDiscovered",
                        "id": "17991",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA",
                        "id": "20382",
                        "type": "bool",
                        "pos": {
                            "x": -935,
                            "y": -4357
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "energyVessel",
                        "id": "22802",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWall",
                        "id": "23319",
                        "type": "bool",
                        "pos": {
                            "x": -471,
                            "y": -4324
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "gorlekOreA1",
                        "id": "23858",
                        "type": "bool",
                        "pos": {
                            "x": -858,
                            "y": -4423
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "gorlekOreA2",
                        "id": "25989",
                        "type": "bool",
                        "pos": {
                            "x": -501,
                            "y": -4340
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "lanternAndCreepB",
                        "id": "26238",
                        "type": "bool",
                        "pos": {
                            "x": -607,
                            "y": -4224
                        },
                        "icon": "Creep",
                        "category": "mapIcon"
                    },
                    {
                        "name": "energyContainer",
                        "id": "26457",
                        "type": "bool",
                        "pos": {
                            "x": -664,
                            "y": -4187
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "halfEnergyCellA",
                        "id": "27562",
                        "type": "bool",
                        "pos": {
                            "x": -473,
                            "y": -4340
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "secretWallA",
                        "id": "34704",
                        "type": "bool",
                        "pos": {
                            "x": -736,
                            "y": -4168
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "xpOrb",
                        "id": "42047",
                        "type": "bool",
                        "pos": {
                            "x": -783,
                            "y": -4452
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "xpOrbB",
                        "id": "45321",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallA1",
                        "id": "47420",
                        "type": "bool",
                        "pos": {
                            "x": -784,
                            "y": -4452
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "expOrb2",
                        "id": "53947",
                        "type": "bool"
                    },
                    {
                        "name": "expOrb3",
                        "id": "59344",
                        "type": "bool",
                        "pos": {
                            "x": -492,
                            "y": -4260
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "enemyRoom",
                        "id": "59418",
                        "type": "bool",
                        "pos": {
                            "x": -928,
                            "y": -4399
                        },
                        "icon": "Stone Door",
                        "category": "mapIcon"
                    },
                    {
                        "name": "healthContainer",
                        "id": "61304",
                        "type": "bool",
                        "pos": {
                            "x": -569,
                            "y": -4454
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "lizardMultiWaveArenaInt",
                        "id": "25130",
                        "type": "int"
                    },
                    {
                        "name": "swampArenaAInt",
                        "id": "31687",
                        "type": "int"
                    },
                    {
                        "name": "swampArenaA",
                        "id": "45142",
                        "type": "byte"
                    }
                ]
            },
            "windtornRuinsGroup": {
                "id": "10289",
                "uberIDs": [
                    {
                        "name": "drillZoneA",
                        "id": "94",
                        "type": "bool"
                    },
                    {
                        "name": "goldenSeinBarrierD",
                        "id": "1620",
                        "type": "bool"
                    },
                    {
                        "name": "ruinsVisited",
                        "id": "3621",
                        "type": "bool"
                    },
                    {
                        "name": "openedDesertRuins",
                        "id": "3804",
                        "type": "bool"
                    },
                    {
                        "name": "goldenSeinBarrierB",
                        "id": "4154",
                        "type": "bool"
                    },
                    {
                        "name": "baseKillzoneState",
                        "id": "7638",
                        "type": "bool"
                    },
                    {
                        "name": "bombableWallDesertC",
                        "id": "8436",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneD",
                        "id": "8533",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneF",
                        "id": "10093",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneA1",
                        "id": "12859",
                        "type": "bool"
                    },
                    {
                        "name": "sandwormActiveA",
                        "id": "13021",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneA2",
                        "id": "15867",
                        "type": "bool"
                    },
                    {
                        "name": "escapeBridgeB",
                        "id": "16802",
                        "type": "bool"
                    },
                    {
                        "name": "wispRewardPickup",
                        "id": "22102",
                        "type": "bool"
                    },
                    {
                        "name": "goldenSeinBarrierC",
                        "id": "23922",
                        "type": "bool"
                    },
                    {
                        "name": "collapseSequenceB",
                        "id": "27089",
                        "type": "bool"
                    },
                    {
                        "name": "escapeRockI",
                        "id": "27929",
                        "type": "bool"
                    },
                    {
                        "name": "escapeRockC",
                        "id": "28779",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneA3",
                        "id": "29069",
                        "type": "bool"
                    },
                    {
                        "name": "fallingPillars",
                        "id": "29425",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneA4",
                        "id": "30540",
                        "type": "bool"
                    },
                    {
                        "name": "windsweptWastesRuinsDoorCannotOpen",
                        "id": "31524",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneA5",
                        "id": "31750",
                        "type": "bool"
                    },
                    {
                        "name": "escapeRockG",
                        "id": "32483",
                        "type": "bool"
                    },
                    {
                        "name": "escapeRockE",
                        "id": "32833",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneB",
                        "id": "36274",
                        "type": "bool"
                    },
                    {
                        "name": "windtornRuinsAKeystoneDoor",
                        "id": "37849",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneC",
                        "id": "38171",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneA6",
                        "id": "38721",
                        "type": "bool"
                    },
                    {
                        "name": "escapeRockF",
                        "id": "40310",
                        "type": "bool"
                    },
                    {
                        "name": "goldenSeinBarrierA",
                        "id": "40790",
                        "type": "bool"
                    },
                    {
                        "name": "lever",
                        "id": "41277",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneB1",
                        "id": "41902",
                        "type": "bool"
                    },
                    {
                        "name": "rootBreakPillarFall",
                        "id": "43103",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneB2",
                        "id": "44426",
                        "type": "bool"
                    },
                    {
                        "name": "energyHalfCell",
                        "id": "44555",
                        "type": "bool",
                        "pos": {
                            "x": 2054,
                            "y": -4050
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "escapeEndRocks",
                        "id": "45179",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneA7",
                        "id": "45766",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneB3",
                        "id": "46316",
                        "type": "bool"
                    },
                    {
                        "name": "healthHalfCell",
                        "id": "48372",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneDoor",
                        "id": "48604",
                        "type": "bool"
                    },
                    {
                        "name": "escapeRockJ",
                        "id": "50961",
                        "type": "bool"
                    },
                    {
                        "name": "wormBreakFloor",
                        "id": "52478",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneA8",
                        "id": "55317",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneE",
                        "id": "55672",
                        "type": "bool"
                    },
                    {
                        "name": "escapeRockH",
                        "id": "55692",
                        "type": "bool"
                    },
                    {
                        "name": "bombableWall",
                        "id": "55787",
                        "type": "bool"
                    },
                    {
                        "name": "escapeRockA",
                        "id": "57325",
                        "type": "bool"
                    },
                    {
                        "name": "areaText",
                        "id": "61217",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA",
                        "id": "61615",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneC1",
                        "id": "62291",
                        "type": "bool"
                    },
                    {
                        "name": "collapseSequenceA",
                        "id": "62926",
                        "type": "bool"
                    },
                    {
                        "name": "escapeRockD",
                        "id": "63154",
                        "type": "bool"
                    },
                    {
                        "name": "desertSruinsChaseSandWall",
                        "id": "63700",
                        "type": "bool"
                    },
                    {
                        "name": "drillZoneA9",
                        "id": "64240",
                        "type": "bool"
                    },
                    {
                        "name": "escapeRockB",
                        "id": "65145",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "4928",
                        "type": "teleporter"
                    },
                    {
                        "name": "DesertSavePedestal",
                        "id": "13937",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState1",
                        "id": "40484",
                        "type": "teleporter"
                    },
                    {
                        "name": "rotatingBlockSetupRotation",
                        "id": "93",
                        "type": "int"
                    },
                    {
                        "name": "powerLineIntUberStateA",
                        "id": "312",
                        "type": "int"
                    },
                    {
                        "name": "powerLineIntUberState",
                        "id": "3217",
                        "type": "int"
                    },
                    {
                        "name": "powerLineIntUberStateC",
                        "id": "3682",
                        "type": "int"
                    },
                    {
                        "name": "wormNodeStateB",
                        "id": "6414",
                        "type": "int"
                    },
                    {
                        "name": "wormNodeStateC",
                        "id": "12614",
                        "type": "int"
                    },
                    {
                        "name": "wormNodeStateG",
                        "id": "16886",
                        "type": "int"
                    },
                    {
                        "name": "desertRuinsEscape",
                        "id": "19890",
                        "type": "int"
                    },
                    {
                        "name": "wormNodeStateF",
                        "id": "23855",
                        "type": "int"
                    },
                    {
                        "name": "wormNodeStateA",
                        "id": "27997",
                        "type": "int"
                    },
                    {
                        "name": "powerLineIntUberState1",
                        "id": "35130",
                        "type": "int"
                    },
                    {
                        "name": "wormNodeStateE",
                        "id": "45821",
                        "type": "int"
                    },
                    {
                        "name": "wormNodeState",
                        "id": "47857",
                        "type": "int"
                    },
                    {
                        "name": "wormNodeStateD",
                        "id": "50264",
                        "type": "int"
                    },
                    {
                        "name": "wormNodeStateH",
                        "id": "56515",
                        "type": "int"
                    },
                    {
                        "name": "powerLineIntUberStateB",
                        "id": "58350",
                        "type": "int"
                    },
                    {
                        "name": "desertRuinsWispSequencePlayed",
                        "id": "60565",
                        "type": "int"
                    },
                    {
                        "name": "wormDistanceStateA",
                        "id": "5546",
                        "type": "int"
                    },
                    {
                        "name": "wormDistanceStateD",
                        "id": "5814",
                        "type": "int"
                    },
                    {
                        "name": "wormDistanceStateC",
                        "id": "10828",
                        "type": "int"
                    },
                    {
                        "name": "wormDistanceToNextNodeState",
                        "id": "35190",
                        "type": "int"
                    },
                    {
                        "name": "wormDistanceStateH",
                        "id": "36008",
                        "type": "int"
                    },
                    {
                        "name": "wormDistanceStateB",
                        "id": "51149",
                        "type": "int"
                    },
                    {
                        "name": "wormDistanceStateE",
                        "id": "52211",
                        "type": "int"
                    },
                    {
                        "name": "wormDistanceStateF",
                        "id": "58175",
                        "type": "int"
                    },
                    {
                        "name": "wormDistanceStateG",
                        "id": "63894",
                        "type": "int"
                    }
                ]
            },
            "howlsDenGroup": {
                "id": "11666",
                "uberIDs": [
                    {
                        "name": "hasOriUsedSavePedestal",
                        "id": "4220",
                        "type": "bool"
                    },
                    {
                        "name": "saveRoomDoor",
                        "id": "4932",
                        "type": "bool"
                    },
                    {
                        "name": "howlsDenLargeXPOrbA",
                        "id": "24943",
                        "type": "bool"
                    },
                    {
                        "name": "areaText",
                        "id": "42038",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "16542",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState1",
                        "id": "20829",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestal",
                        "id": "61594",
                        "type": "teleporter"
                    }
                ]
            },
            "leaderboardsUberStateGroup": {
                "id": "13298",
                "uberIDs": [
                    {
                        "name": "baursReachLeaderboardNotificationState",
                        "id": "54921",
                        "type": "bool"
                    },
                    {
                        "name": "baursReachLeaderboardPlaceState",
                        "id": "3608",
                        "type": "int"
                    },
                    {
                        "name": "desertLeaderboardPlaceState",
                        "id": "4929",
                        "type": "int"
                    },
                    {
                        "name": "hornbugBossLeaderboardPlaceState",
                        "id": "6736",
                        "type": "int"
                    },
                    {
                        "name": "watermillEscapeLeaderboardPlaceState",
                        "id": "14784",
                        "type": "int"
                    },
                    {
                        "name": "laserShooterMiniBossLeaderboardPlaceState",
                        "id": "20341",
                        "type": "int"
                    },
                    {
                        "name": "kwolokBossLeaderboardPlaceState",
                        "id": "37881",
                        "type": "int"
                    },
                    {
                        "name": "inkwaterLeaderboardPlaceState",
                        "id": "40104",
                        "type": "int"
                    },
                    {
                        "name": "spiderBossLeaderboardPlaceState",
                        "id": "41733",
                        "type": "int"
                    },
                    {
                        "name": "desertEscapeLeaderboardPlaceState",
                        "id": "44392",
                        "type": "int"
                    },
                    {
                        "name": "kwoloksLeaderboardPlaceState",
                        "id": "53149",
                        "type": "int"
                    },
                    {
                        "name": "avalancheEscapeLeaderboardPlaceState",
                        "id": "53528",
                        "type": "int"
                    },
                    {
                        "name": "wellspringLeaderboardPlaceState",
                        "id": "53967",
                        "type": "int"
                    },
                    {
                        "name": "silentWoodlandLeaderboardPlaceState",
                        "id": "55577",
                        "type": "int"
                    },
                    {
                        "name": "lumaPoolsLeaderboardPlaceState",
                        "id": "58679",
                        "type": "int"
                    },
                    {
                        "name": "mouldwoodLeaderboardPlaceState",
                        "id": "59179",
                        "type": "int"
                    },
                    {
                        "name": "owlBossLeaderboardPlaceState",
                        "id": "64962",
                        "type": "int"
                    }
                ]
            },
            "bashIntroductionA__clone1Group": {
                "id": "13428",
                "uberIDs": [
                    {
                        "name": "healthContainerA",
                        "id": "59730",
                        "type": "bool",
                        "pos": {
                            "x": 83,
                            "y": -4264
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    }
                ]
            },
            "questUberStateGroup": {
                "id": "14019",
                "uberIDs": [
                    {
                        "name": "gardenerHutDiscovered",
                        "id": "353",
                        "type": "bool"
                    },
                    {
                        "name": "darkCaveQuestItemCollected",
                        "id": "2782",
                        "type": "bool",
                        "pos": {
                            "x": -10,
                            "y": -4551
                        },
                        "icon": "Acorn",
                        "category": ""
                    },
                    {
                        "name": "firstRaceDiscovered",
                        "id": "5662",
                        "type": "bool"
                    },
                    {
                        "name": "gardenerSeedTreeCollected",
                        "id": "7470",
                        "type": "bool",
                        "pos": {
                            "x": 513,
                            "y": -4159
                        },
                        "icon": "Seed",
                        "category": ""
                    },
                    {
                        "name": "gardenerSeedBashCollected",
                        "id": "8192",
                        "type": "bool",
                        "pos": {
                            "x": 488,
                            "y": -4431
                        },
                        "icon": "Seed",
                        "category": ""
                    },
                    {
                        "name": "mapstoneDiscovered",
                        "id": "9874",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDiscovered",
                        "id": "12642",
                        "type": "bool"
                    },
                    {
                        "name": "lanternItemCollected",
                        "id": "14931",
                        "type": "bool"
                    },
                    {
                        "name": "howlsOriginWellOpened",
                        "id": "20290",
                        "type": "bool"
                    },
                    {
                        "name": "gardenerSeedFlowersCollected",
                        "id": "20601",
                        "type": "bool",
                        "pos": {
                            "x": 1996,
                            "y": -3651
                        },
                        "icon": "Seed",
                        "category": ""
                    },
                    {
                        "name": "gardenerSeedGrappleCollected",
                        "id": "24142",
                        "type": "bool",
                        "pos": {
                            "x": -1185,
                            "y": -3669
                        },
                        "icon": "Seed",
                        "category": ""
                    },
                    {
                        "name": "wellspringShrineDiscovered",
                        "id": "27270",
                        "type": "bool"
                    },
                    {
                        "name": "braveMokiItemCollected",
                        "id": "27539",
                        "type": "bool",
                        "pos": {
                            "x": -221,
                            "y": -4406
                        },
                        "icon": "Fang",
                        "category": ""
                    },
                    {
                        "name": "gardenerSeedGrassCollected",
                        "id": "28662",
                        "type": "bool",
                        "pos": {
                            "x": -1528,
                            "y": -4140
                        },
                        "icon": "Seed",
                        "category": ""
                    },
                    {
                        "name": "desertDiscovered",
                        "id": "29163",
                        "type": "bool"
                    },
                    {
                        "name": "lagoonDiscovered",
                        "id": "29202",
                        "type": "bool"
                    },
                    {
                        "name": "howlsOriginDiscovered",
                        "id": "30671",
                        "type": "bool"
                    },
                    {
                        "name": "desertRuinsDiscovered",
                        "id": "31413",
                        "type": "bool"
                    },
                    {
                        "name": "gardenerSeedSpringCollected",
                        "id": "32376",
                        "type": "bool",
                        "pos": {
                            "x": -103,
                            "y": -3858
                        },
                        "icon": "Seed",
                        "category": ""
                    },
                    {
                        "name": "mapSecretsRevealed",
                        "id": "35534",
                        "type": "bool"
                    },
                    {
                        "name": "howlsDenShrineDiscovered",
                        "id": "36248",
                        "type": "bool"
                    },
                    {
                        "name": "inkwaterShrineDiscovered",
                        "id": "40630",
                        "type": "bool"
                    },
                    {
                        "name": "baurDiscovered",
                        "id": "46529",
                        "type": "bool"
                    },
                    {
                        "name": "discoveredWillowsEnd",
                        "id": "50847",
                        "type": "bool"
                    },
                    {
                        "name": "silentWoodsShrineDiscovered",
                        "id": "52274",
                        "type": "bool"
                    },
                    {
                        "name": "howlsOriginTreasureCollected",
                        "id": "52747",
                        "type": "bool",
                        "pos": {
                            "x": -848,
                            "y": -4530
                        },
                        "icon": "Tablet",
                        "category": ""
                    },
                    {
                        "name": "kwoloksWisdomItemCollected",
                        "id": "53103",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodShrineDiscovered",
                        "id": "54970",
                        "type": "bool"
                    },
                    {
                        "name": "familyReunionItemCollected",
                        "id": "57399",
                        "type": "bool",
                        "pos": {
                            "x": 441,
                            "y": -4119
                        },
                        "icon": "Doll",
                        "category": ""
                    },
                    {
                        "name": "mineGemItemCollected",
                        "id": "58342",
                        "type": "bool",
                        "pos": {
                            "x": 1641,
                            "y": -4003
                        },
                        "icon": "Gem",
                        "category": ""
                    },
                    {
                        "name": "inDangerBool",
                        "id": "60646",
                        "type": "bool"
                    },
                    {
                        "name": "desertCogItemCollected",
                        "id": "63396",
                        "type": "bool"
                    },
                    {
                        "name": "discoveredWeepingRidge",
                        "id": "63965",
                        "type": "bool"
                    },
                    {
                        "name": "helpingHandQuestUberState",
                        "id": "1341",
                        "type": "int"
                    },
                    {
                        "name": "reachWaterMillQuestUberState",
                        "id": "5737",
                        "type": "int"
                    },
                    {
                        "name": "dialogQuest",
                        "id": "6284",
                        "type": "int"
                    },
                    {
                        "name": "winterForestWispQuestUberState",
                        "id": "8973",
                        "type": "int"
                    },
                    {
                        "name": "baursReachJTokkInteractionQuest",
                        "id": "11308",
                        "type": "int"
                    },
                    {
                        "name": "howlsDenShrineRumorMokiState",
                        "id": "12437",
                        "type": "int"
                    },
                    {
                        "name": "mouldwoodRumorMokiState",
                        "id": "13512",
                        "type": "int"
                    },
                    {
                        "name": "braveMokiQuest",
                        "id": "15983",
                        "type": "int"
                    },
                    {
                        "name": "wellspringShrineRumorMokiState",
                        "id": "15995",
                        "type": "int"
                    },
                    {
                        "name": "wellspringShrineRumorState",
                        "id": "16509",
                        "type": "int"
                    },
                    {
                        "name": "mouldwoodShrineRumorState",
                        "id": "18061",
                        "type": "int"
                    },
                    {
                        "name": "lagoonRumorState",
                        "id": "19024",
                        "type": "int"
                    },
                    {
                        "name": "desertRuinsRumorState",
                        "id": "19060",
                        "type": "int"
                    },
                    {
                        "name": "brothersQuest",
                        "id": "19157",
                        "type": "int"
                    },
                    {
                        "name": "lostCompassQuest",
                        "id": "20667",
                        "type": "int"
                    },
                    {
                        "name": "gardenerIntroQuest",
                        "id": "23459",
                        "type": "int"
                    },
                    {
                        "name": "lastTreeQuest",
                        "id": "23787",
                        "type": "int"
                    },
                    {
                        "name": "inkwaterShrineRumorState",
                        "id": "23863",
                        "type": "int"
                    },
                    {
                        "name": "optionalVSQuestAUberState",
                        "id": "24152",
                        "type": "int"
                    },
                    {
                        "name": "luposMapQuest",
                        "id": "24683",
                        "type": "int"
                    },
                    {
                        "name": "tradeSequenceQuest",
                        "id": "26318",
                        "type": "int"
                    },
                    {
                        "name": "regrowGladesQuest",
                        "id": "26394",
                        "type": "int"
                    },
                    {
                        "name": "silentWoodsShrineRumorState",
                        "id": "27011",
                        "type": "int"
                    },
                    {
                        "name": "familyReunionQuest",
                        "id": "27804",
                        "type": "int"
                    },
                    {
                        "name": "howlsDenShrineRumorState",
                        "id": "27822",
                        "type": "int"
                    },
                    {
                        "name": "gardenerHutRumorState",
                        "id": "30596",
                        "type": "int"
                    },
                    {
                        "name": "freeGromQuestUberState",
                        "id": "33762",
                        "type": "int"
                    },
                    {
                        "name": "darkCaveQuest",
                        "id": "33776",
                        "type": "int"
                    },
                    {
                        "name": "findKuQuest",
                        "id": "34504",
                        "type": "int"
                    },
                    {
                        "name": "lagoonWispQuestUberState",
                        "id": "35087",
                        "type": "int"
                    },
                    {
                        "name": "desertWispQuestUberState",
                        "id": "35399",
                        "type": "int"
                    },
                    {
                        "name": "mapstoneRumorState",
                        "id": "39957",
                        "type": "int"
                    },
                    {
                        "name": "howlsOriginRumorState",
                        "id": "40952",
                        "type": "int"
                    },
                    {
                        "name": "firstRaceRumorState",
                        "id": "42501",
                        "type": "int"
                    },
                    {
                        "name": "findHelpQuestUberState",
                        "id": "44059",
                        "type": "int"
                    },
                    {
                        "name": "baurRumorState",
                        "id": "44184",
                        "type": "int"
                    },
                    {
                        "name": "lookForKuQuestUberState",
                        "id": "44500",
                        "type": "int"
                    },
                    {
                        "name": "rebuildGladesQuest",
                        "id": "44578",
                        "type": "int"
                    },
                    {
                        "name": "mouldwoodDepthsWispQuestUberState",
                        "id": "45931",
                        "type": "int"
                    },
                    {
                        "name": "lagoonRumorMokiState",
                        "id": "47774",
                        "type": "int"
                    },
                    {
                        "name": "findToadQuestUberState",
                        "id": "48794",
                        "type": "int"
                    },
                    {
                        "name": "baurRumorMokiState",
                        "id": "50230",
                        "type": "int"
                    },
                    {
                        "name": "swampSpringIntroductionBOpherInteractionQuest",
                        "id": "50571",
                        "type": "int"
                    },
                    {
                        "name": "kwoloksWisdomQuest",
                        "id": "50597",
                        "type": "int"
                    },
                    {
                        "name": "mouldwoodRumorState",
                        "id": "53066",
                        "type": "int"
                    },
                    {
                        "name": "lastGlobalEvent",
                        "id": "54675",
                        "type": "int"
                    },
                    {
                        "name": "killTentacleQuestUberState",
                        "id": "57066",
                        "type": "int"
                    },
                    {
                        "name": "desertRumorState",
                        "id": "57552",
                        "type": "int"
                    },
                    {
                        "name": "searchForGrolQuest",
                        "id": "59705",
                        "type": "int"
                    },
                    {
                        "name": "treeKeeperQuest",
                        "id": "59708",
                        "type": "int"
                    },
                    {
                        "name": "desertCogQuest",
                        "id": "61011",
                        "type": "int"
                    },
                    {
                        "name": "getInitialWeaponQuestUberState",
                        "id": "62230",
                        "type": "int"
                    },
                    {
                        "name": "firstRaceRumorMokiState",
                        "id": "62288",
                        "type": "int"
                    }
                ]
            },
            "willowsEndGroup": {
                "id": "16155",
                "uberIDs": [
                    {
                        "name": "expOrb",
                        "id": "2065",
                        "type": "bool"
                    },
                    {
                        "name": "fallingPortalB",
                        "id": "2235",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA",
                        "id": "3096",
                        "type": "bool"
                    },
                    {
                        "name": "vineEClear",
                        "id": "3588",
                        "type": "bool"
                    },
                    {
                        "name": "arenaPlatform3Destroyed",
                        "id": "3670",
                        "type": "bool"
                    },
                    {
                        "name": "arenaPlatform2Destroyed",
                        "id": "5826",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA",
                        "id": "9230",
                        "type": "bool",
                        "pos": {
                            "x": 326,
                            "y": -3811
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "fallingPortal",
                        "id": "18906",
                        "type": "bool"
                    },
                    {
                        "name": "creepA",
                        "id": "20672",
                        "type": "bool"
                    },
                    {
                        "name": "chaseSequenceG",
                        "id": "21083",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallC",
                        "id": "21899",
                        "type": "bool"
                    },
                    {
                        "name": "vineCClear",
                        "id": "24290",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA",
                        "id": "25259",
                        "type": "bool"
                    },
                    {
                        "name": "chaseSequenceA",
                        "id": "27024",
                        "type": "bool"
                    },
                    {
                        "name": "vineDClear",
                        "id": "28478",
                        "type": "bool"
                    },
                    {
                        "name": "introPlayed",
                        "id": "32922",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallC1",
                        "id": "33738",
                        "type": "bool"
                    },
                    {
                        "name": "secretWall",
                        "id": "36353",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA1",
                        "id": "36873",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallB",
                        "id": "37558",
                        "type": "bool"
                    },
                    {
                        "name": "chaseSequenceC",
                        "id": "37648",
                        "type": "bool"
                    },
                    {
                        "name": "chaseSequenceD",
                        "id": "38867",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA1",
                        "id": "38979",
                        "type": "bool",
                        "pos": {
                            "x": 557,
                            "y": -3876
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "vineGClear",
                        "id": "41488",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallA",
                        "id": "42106",
                        "type": "bool"
                    },
                    {
                        "name": "vineAClear",
                        "id": "42976",
                        "type": "bool"
                    },
                    {
                        "name": "chaseSequenceB",
                        "id": "44311",
                        "type": "bool"
                    },
                    {
                        "name": "arenaPlatform1Destroyed",
                        "id": "45630",
                        "type": "bool"
                    },
                    {
                        "name": "healthCellA",
                        "id": "46270",
                        "type": "bool",
                        "pos": {
                            "x": 411,
                            "y": -3972
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "expOrbB",
                        "id": "47690",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbA",
                        "id": "49381",
                        "type": "bool",
                        "pos": {
                            "x": 470,
                            "y": -3915
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "chaseSequenceE",
                        "id": "49408",
                        "type": "bool"
                    },
                    {
                        "name": "expOrb1",
                        "id": "49457",
                        "type": "bool"
                    },
                    {
                        "name": "chaseSequenceF",
                        "id": "49744",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallB1",
                        "id": "52848",
                        "type": "bool"
                    },
                    {
                        "name": "groundDestroyed",
                        "id": "54148",
                        "type": "bool"
                    },
                    {
                        "name": "vineBClear",
                        "id": "54940",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA1",
                        "id": "55446",
                        "type": "bool",
                        "pos": {
                            "x": 654,
                            "y": -3780
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "fallingPortalA",
                        "id": "55721",
                        "type": "bool"
                    },
                    {
                        "name": "vineHClear",
                        "id": "60752",
                        "type": "bool"
                    },
                    {
                        "name": "arenaPlatform4Destroyed",
                        "id": "63705",
                        "type": "bool"
                    },
                    {
                        "name": "vineFClear",
                        "id": "65277",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "41465",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState1",
                        "id": "50867",
                        "type": "teleporter"
                    },
                    {
                        "name": "laserShooterBossState",
                        "id": "12971",
                        "type": "int"
                    },
                    {
                        "name": "petrifiedOwlBossState",
                        "id": "47278",
                        "type": "byte"
                    }
                ]
            },
            "mouldwoodDepthsGroup": {
                "id": "18793",
                "uberIDs": [
                    {
                        "name": "orePickupA",
                        "id": "836",
                        "type": "bool",
                        "pos": {
                            "x": 436,
                            "y": -4507
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "keystone",
                        "id": "1914",
                        "type": "bool",
                        "pos": {
                            "x": 317,
                            "y": -4454
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "expOrbB",
                        "id": "2881",
                        "type": "bool",
                        "pos": {
                            "x": 387,
                            "y": -4523
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "doorWithFourSlots",
                        "id": "3171",
                        "type": "bool"
                    },
                    {
                        "name": "blockerWallBroken",
                        "id": "4645",
                        "type": "bool"
                    },
                    {
                        "name": "creepDestroyedA",
                        "id": "4664",
                        "type": "bool"
                    },
                    {
                        "name": "secretWall",
                        "id": "5315",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbB1",
                        "id": "5797",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbB2",
                        "id": "6573",
                        "type": "bool",
                        "pos": {
                            "x": 425,
                            "y": -4385
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "expOrbA",
                        "id": "9251",
                        "type": "bool"
                    },
                    {
                        "name": "doorWithFourSlots1",
                        "id": "10372",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDepthsGDoorWithTwoSlotsOpened",
                        "id": "10758",
                        "type": "bool"
                    },
                    {
                        "name": "creepB",
                        "id": "11676",
                        "type": "bool",
                        "pos": {
                            "x": 359,
                            "y": -4381
                        },
                        "icon": "Creep",
                        "category": "mapIcon"
                    },
                    {
                        "name": "shrineEnemies",
                        "id": "12512",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokCavernsBreakableFloor",
                        "id": "13281",
                        "type": "bool"
                    },
                    {
                        "name": "shortcutWall",
                        "id": "13349",
                        "type": "bool",
                        "pos": {
                            "x": 551,
                            "y": -4374
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "darknessLiftedUberState",
                        "id": "13352",
                        "type": "bool"
                    },
                    {
                        "name": "lanternAndCreepB",
                        "id": "13367",
                        "type": "bool"
                    },
                    {
                        "name": "leverAndDoorA",
                        "id": "14503",
                        "type": "bool",
                        "pos": {
                            "x": 248,
                            "y": -4530
                        },
                        "icon": "Lever",
                        "category": "mapIcon"
                    },
                    {
                        "name": "xpOrbC",
                        "id": "15396",
                        "type": "bool",
                        "pos": {
                            "x": 146,
                            "y": -4375
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "arenaBottomBrokenFloor",
                        "id": "15422",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDepthsHBreakableWallB",
                        "id": "15855",
                        "type": "bool",
                        "pos": {
                            "x": 476,
                            "y": -4427
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "chamberWebFBroken",
                        "id": "18064",
                        "type": "bool"
                    },
                    {
                        "name": "XPOrbA",
                        "id": "18395",
                        "type": "bool",
                        "pos": {
                            "x": 567,
                            "y": -4443
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "chamberWebEBroken",
                        "id": "18563",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA",
                        "id": "19004",
                        "type": "bool",
                        "pos": {
                            "x": 171,
                            "y": -4358
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "mouldwoodDepthsJKeystoneBCollected",
                        "id": "20493",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDepthsJKeystoneCCollected",
                        "id": "20959",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA",
                        "id": "21022",
                        "type": "bool",
                        "pos": {
                            "x": -784,
                            "y": -4452
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "puzzleSolvedSequenceCompleted",
                        "id": "21994",
                        "type": "bool"
                    },
                    {
                        "name": "lanternAndCreepA",
                        "id": "22368",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbC",
                        "id": "23799",
                        "type": "bool",
                        "pos": {
                            "x": 799,
                            "y": -4512
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "areaText",
                        "id": "23953",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDepthsHKeystoneBCollected",
                        "id": "23986",
                        "type": "bool",
                        "pos": {
                            "x": 524,
                            "y": -4465
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "mouldwoodGateOpen",
                        "id": "25789",
                        "type": "bool"
                    },
                    {
                        "name": "energyContainerA",
                        "id": "26618",
                        "type": "bool",
                        "pos": {
                            "x": 134,
                            "y": -4456
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "stompableFloor",
                        "id": "27207",
                        "type": "bool"
                    },
                    {
                        "name": "energyContainerA1",
                        "id": "28175",
                        "type": "bool",
                        "pos": {
                            "x": 324,
                            "y": -4535
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "spiderIntereactedAfterFight",
                        "id": "28205",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWebB",
                        "id": "28677",
                        "type": "bool"
                    },
                    {
                        "name": "brokenTrunkTop",
                        "id": "28692",
                        "type": "bool"
                    },
                    {
                        "name": "creepA",
                        "id": "29066",
                        "type": "bool",
                        "pos": {
                            "x": 334,
                            "y": -4384
                        },
                        "icon": "Creep",
                        "category": "mapIcon"
                    },
                    {
                        "name": "mediumExpA1",
                        "id": "29533",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbA1",
                        "id": "29979",
                        "type": "bool",
                        "pos": {
                            "x": 481,
                            "y": -4381
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "mouldwoodDepthsHPushBlockPushed",
                        "id": "30627",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDepthsJKeystoneDCollected",
                        "id": "30708",
                        "type": "bool"
                    },
                    {
                        "name": "shardSlotUpgradePlaceholder",
                        "id": "31937",
                        "type": "bool",
                        "pos": {
                            "x": 212,
                            "y": -4510
                        },
                        "icon": "Shard Slot",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 4
                    },
                    {
                        "name": "chamberWebBBroken",
                        "id": "32305",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDepthsJKeystoneACollected",
                        "id": "32441",
                        "type": "bool"
                    },
                    {
                        "name": "doorWithFourSlots2",
                        "id": "33471",
                        "type": "bool"
                    },
                    {
                        "name": "orePickupA1",
                        "id": "35351",
                        "type": "bool",
                        "pos": {
                            "x": 185,
                            "y": -4380
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "expOrb",
                        "id": "38941",
                        "type": "bool"
                    },
                    {
                        "name": "creepA1",
                        "id": "39232",
                        "type": "bool"
                    },
                    {
                        "name": "lanternAndCreepCTest",
                        "id": "40612",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDepthsHDoorWithFourSlotsOpened",
                        "id": "41544",
                        "type": "bool"
                    },
                    {
                        "name": "healthCellB",
                        "id": "42235",
                        "type": "bool",
                        "pos": {
                            "x": 531,
                            "y": -4452
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "mediumExpB",
                        "id": "42980",
                        "type": "bool",
                        "pos": {
                            "x": 131,
                            "y": -4272
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "webFallState",
                        "id": "44522",
                        "type": "bool"
                    },
                    {
                        "name": "leafPileA",
                        "id": "44773",
                        "type": "bool"
                    },
                    {
                        "name": "hintZoneFlash",
                        "id": "45899",
                        "type": "bool"
                    },
                    {
                        "name": "bottomRightSmallWall",
                        "id": "45963",
                        "type": "bool"
                    },
                    {
                        "name": "verticalFallingTrunk",
                        "id": "49362",
                        "type": "bool"
                    },
                    {
                        "name": "XPOrbB",
                        "id": "49526",
                        "type": "bool"
                    },
                    {
                        "name": "XPOrbA1",
                        "id": "49759",
                        "type": "bool"
                    },
                    {
                        "name": "hintZoneFlashCharge",
                        "id": "50745",
                        "type": "bool"
                    },
                    {
                        "name": "arenaTrunkBroken",
                        "id": "53347",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDepthsHKeystoneACollected",
                        "id": "53953",
                        "type": "bool",
                        "pos": {
                            "x": 498,
                            "y": -4463
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "breakableWebA",
                        "id": "56320",
                        "type": "bool"
                    },
                    {
                        "name": "arenaBreakableA",
                        "id": "56666",
                        "type": "bool"
                    },
                    {
                        "name": "bottomLeftSmallWall",
                        "id": "56800",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneA",
                        "id": "58148",
                        "type": "bool",
                        "pos": {
                            "x": 146,
                            "y": -4426
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "mediumExpC",
                        "id": "58342",
                        "type": "bool"
                    },
                    {
                        "name": "healthCellA",
                        "id": "62694",
                        "type": "bool",
                        "pos": {
                            "x": 496,
                            "y": -4499
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "bossReward",
                        "id": "63291",
                        "type": "bool"
                    },
                    {
                        "name": "arenaWallMid",
                        "id": "64305",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDepthsHBreakableWallA",
                        "id": "64772",
                        "type": "bool",
                        "pos": {
                            "x": 533,
                            "y": -4505
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "secretWallA",
                        "id": "65202",
                        "type": "bool",
                        "pos": {
                            "x": 246,
                            "y": -4508
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "38871",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState1",
                        "id": "39689",
                        "type": "teleporter"
                    },
                    {
                        "name": "spiderBossState",
                        "id": "26713",
                        "type": "byte"
                    },
                    {
                        "name": "lanternAndCreepBInt",
                        "id": "39667",
                        "type": "byte"
                    }
                ]
            },
            "eventsUberStateGroup": {
                "id": "19973",
                "uberIDs": [
                    {
                        "name": "gumoFreeUberState",
                        "id": "18551",
                        "type": "bool"
                    },
                    {
                        "name": "spiritTreeReachedUberState",
                        "id": "22047",
                        "type": "bool"
                    },
                    {
                        "name": "mistLiftedUberState",
                        "id": "23591",
                        "type": "bool"
                    },
                    {
                        "name": "ginsoTreeKeyUberState",
                        "id": "30524",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokDeadUberState",
                        "id": "31305",
                        "type": "bool"
                    },
                    {
                        "name": "mountHoruKeyUberState",
                        "id": "38631",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokLeftThroneUberState",
                        "id": "45830",
                        "type": "bool"
                    },
                    {
                        "name": "gravityActivatedUberState",
                        "id": "49418",
                        "type": "bool"
                    },
                    {
                        "name": "ginsoTreeEnteredUberState",
                        "id": "54999",
                        "type": "bool"
                    },
                    {
                        "name": "windRestoredUberState",
                        "id": "59537",
                        "type": "bool"
                    },
                    {
                        "name": "forlornRuinsKeyUberState",
                        "id": "61347",
                        "type": "bool"
                    }
                ]
            },
            "windsweptWastesGroupDescriptor": {
                "id": "20120",
                "uberIDs": [
                    {
                        "name": "expOrb",
                        "id": "224",
                        "type": "bool",
                        "pos": {
                            "x": 1887,
                            "y": -3973
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "bombableWallA",
                        "id": "1348",
                        "type": "bool",
                        "pos": {
                            "x": 1970,
                            "y": -3802
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "xpOrbG",
                        "id": "2013",
                        "type": "bool",
                        "pos": {
                            "x": 2025,
                            "y": -3729
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "areaText",
                        "id": "2552",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbC",
                        "id": "3550",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA",
                        "id": "8910",
                        "type": "bool",
                        "pos": {
                            "x": 1642,
                            "y": -3944
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "breakableWall",
                        "id": "9095",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbB",
                        "id": "10397",
                        "type": "bool",
                        "pos": {
                            "x": 1795,
                            "y": -3998
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "xpOrbD",
                        "id": "10801",
                        "type": "bool"
                    },
                    {
                        "name": "energyHalfCell",
                        "id": "11785",
                        "type": "bool",
                        "pos": {
                            "x": 1653,
                            "y": -4015
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "leverStateA",
                        "id": "12902",
                        "type": "bool",
                        "pos": {
                            "x": 2019,
                            "y": -3790
                        },
                        "icon": "Lever",
                        "category": "mapIcon"
                    },
                    {
                        "name": "healthContainer",
                        "id": "12941",
                        "type": "bool",
                        "pos": {
                            "x": 1860,
                            "y": -4022
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "projectileBreakableWall",
                        "id": "16172",
                        "type": "bool",
                        "pos": {
                            "x": 1825,
                            "y": -3932
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "digHint",
                        "id": "16309",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbE",
                        "id": "17798",
                        "type": "bool",
                        "pos": {
                            "x": 1862,
                            "y": -3874
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "lifeHalfCell",
                        "id": "18965",
                        "type": "bool",
                        "pos": {
                            "x": 2027,
                            "y": -3843
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "xpOrbB1",
                        "id": "19113",
                        "type": "bool",
                        "pos": {
                            "x": 1601,
                            "y": -3953
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "energyOrbA",
                        "id": "22354",
                        "type": "bool",
                        "pos": {
                            "x": 1950,
                            "y": -3778
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "digDashHint",
                        "id": "24078",
                        "type": "bool"
                    },
                    {
                        "name": "drillableWallA",
                        "id": "24774",
                        "type": "bool"
                    },
                    {
                        "name": "e3DesertG_clone0_KeystoneDoor",
                        "id": "28786",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbE",
                        "id": "30358",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA1",
                        "id": "30740",
                        "type": "bool",
                        "pos": {
                            "x": 1951,
                            "y": -3838
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "drillableBlockerA",
                        "id": "31180",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbB",
                        "id": "33275",
                        "type": "bool",
                        "pos": {
                            "x": 1839,
                            "y": -3907
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "shardA",
                        "id": "33292",
                        "type": "bool"
                    },
                    {
                        "name": "bombableWallC",
                        "id": "33294",
                        "type": "bool"
                    },
                    {
                        "name": "bombableWallB",
                        "id": "33775",
                        "type": "bool",
                        "pos": {
                            "x": 2013,
                            "y": -3790
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "drillWallA",
                        "id": "36758",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA2",
                        "id": "36805",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreB",
                        "id": "40245",
                        "type": "bool",
                        "pos": {
                            "x": 1930,
                            "y": -3879
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "hintZoneA",
                        "id": "40816",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA3",
                        "id": "42393",
                        "type": "bool"
                    },
                    {
                        "name": "shootablePod",
                        "id": "43099",
                        "type": "bool",
                        "pos": {
                            "x": 1928,
                            "y": -3994
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "bombableWall",
                        "id": "43231",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOre",
                        "id": "46919",
                        "type": "bool",
                        "pos": {
                            "x": 1658,
                            "y": -3974
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "verticalPlatformLeverA",
                        "id": "48009",
                        "type": "bool",
                        "pos": {
                            "x": 1866,
                            "y": -3933
                        },
                        "icon": "Lever",
                        "category": "mapIcon"
                    },
                    {
                        "name": "expOrbD",
                        "id": "48829",
                        "type": "bool",
                        "pos": {
                            "x": 1809,
                            "y": -3883
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "hintZoneB",
                        "id": "49950",
                        "type": "bool"
                    },
                    {
                        "name": "shardA1",
                        "id": "49985",
                        "type": "bool"
                    },
                    {
                        "name": "energyContainer",
                        "id": "50026",
                        "type": "bool",
                        "pos": {
                            "x": 1779,
                            "y": -3875
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "bombableWallA1",
                        "id": "51985",
                        "type": "bool",
                        "pos": {
                            "x": 1541,
                            "y": -3997
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "xpOrb",
                        "id": "52812",
                        "type": "bool",
                        "pos": {
                            "x": 2006,
                            "y": -3826
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "bombableWall",
                        "id": "54936",
                        "type": "bool"
                    },
                    {
                        "name": "creepA",
                        "id": "55057",
                        "type": "bool"
                    },
                    {
                        "name": "wispSequencePlayedOut",
                        "id": "55196",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOre1",
                        "id": "55303",
                        "type": "bool"
                    },
                    {
                        "name": "bombableWallE",
                        "id": "55388",
                        "type": "bool",
                        "pos": {
                            "x": 2036,
                            "y": -3839
                        },
                        "icon": "Lever",
                        "category": "mapIcon"
                    },
                    {
                        "name": "xpOrbA4",
                        "id": "57133",
                        "type": "bool",
                        "pos": {
                            "x": 1765,
                            "y": -3921
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "xpOrbB2",
                        "id": "57781",
                        "type": "bool",
                        "pos": {
                            "x": 1719,
                            "y": -3962
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "halfLifeCell",
                        "id": "59046",
                        "type": "bool",
                        "pos": {
                            "x": 1853,
                            "y": -3909
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "breakableWallA",
                        "id": "59275",
                        "type": "bool"
                    },
                    {
                        "name": "doorClosingPlayed",
                        "id": "60953",
                        "type": "bool"
                    },
                    {
                        "name": "bombableWallD",
                        "id": "60960",
                        "type": "bool"
                    },
                    {
                        "name": "bombableWallF",
                        "id": "61572",
                        "type": "bool"
                    },
                    {
                        "name": "lifeCellA",
                        "id": "62264",
                        "type": "bool",
                        "pos": {
                            "x": 1698,
                            "y": -3977
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "xpOrbF",
                        "id": "63310",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "41398",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState1",
                        "id": "49994",
                        "type": "teleporter"
                    }
                ]
            },
            "uiGroup": {
                "id": "20190",
                "uberIDs": [
                    {
                        "name": "displayedSpiritWellFirstUseHint",
                        "id": "31212",
                        "type": "bool"
                    }
                ]
            },
            "minesUberStateGroup": {
                "id": "21194",
                "uberIDs": [
                    {
                        "name": "stompableFloorB",
                        "id": "6799",
                        "type": "bool"
                    },
                    {
                        "name": "collectableC",
                        "id": "7318",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShardA",
                        "id": "11371",
                        "type": "bool"
                    },
                    {
                        "name": "collectableA",
                        "id": "16526",
                        "type": "bool"
                    },
                    {
                        "name": "grolDefeated",
                        "id": "18508",
                        "type": "bool"
                    },
                    {
                        "name": "collectableB",
                        "id": "26302",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA",
                        "id": "27102",
                        "type": "bool"
                    },
                    {
                        "name": "memoriesPlayed",
                        "id": "29515",
                        "type": "bool"
                    },
                    {
                        "name": "crusherActivated",
                        "id": "29822",
                        "type": "bool"
                    },
                    {
                        "name": "elevatorDoorsBottom",
                        "id": "35345",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloorA",
                        "id": "36700",
                        "type": "bool"
                    },
                    {
                        "name": "grolCuredIntroDialoguePlayed",
                        "id": "38411",
                        "type": "bool"
                    },
                    {
                        "name": "elevatorDoorsTop",
                        "id": "43575",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWall",
                        "id": "48792",
                        "type": "bool"
                    },
                    {
                        "name": "enemyDoor",
                        "id": "52416",
                        "type": "bool"
                    },
                    {
                        "name": "leverA",
                        "id": "63648",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "685",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "63334",
                        "type": "teleporter"
                    },
                    {
                        "name": "gateState",
                        "id": "17773",
                        "type": "int"
                    },
                    {
                        "name": "minesElevatorUberState",
                        "id": "34225",
                        "type": "byte"
                    }
                ]
            },
            "swampStateGroup": {
                "id": "21786",
                "uberIDs": [
                    {
                        "name": "boneBridgeBroken",
                        "id": "808",
                        "type": "bool"
                    },
                    {
                        "name": "creepDoorD",
                        "id": "876",
                        "type": "bool",
                        "pos": {
                            "x": -403,
                            "y": -4450
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "gorlekOreA",
                        "id": "2046",
                        "type": "bool",
                        "pos": {
                            "x": -432,
                            "y": -4503
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "laserPuzzleSolved",
                        "id": "2852",
                        "type": "bool",
                        "pos": {
                            "x": -400,
                            "y": -4568
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "enemyRoom",
                        "id": "2869",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA",
                        "id": "6987",
                        "type": "bool",
                        "pos": {
                            "x": -739,
                            "y": -4324
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "stompableFloor",
                        "id": "6994",
                        "type": "bool",
                        "pos": {
                            "x": -374,
                            "y": -4557
                        },
                        "icon": "Breakable Ground",
                        "category": "mapIcon"
                    },
                    {
                        "name": "halfEnergyCellA",
                        "id": "7152",
                        "type": "bool",
                        "pos": {
                            "x": -667,
                            "y": -4330
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "mediumExpA",
                        "id": "7709",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpC",
                        "id": "7871",
                        "type": "bool"
                    },
                    {
                        "name": "shardSlotA",
                        "id": "9270",
                        "type": "bool"
                    },
                    {
                        "name": "creepDoorB",
                        "id": "9402",
                        "type": "bool",
                        "pos": {
                            "x": -270,
                            "y": -4477
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "energyHalfCellA",
                        "id": "10295",
                        "type": "bool",
                        "pos": {
                            "x": -422,
                            "y": -4273
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "largeExpA",
                        "id": "10413",
                        "type": "bool",
                        "pos": {
                            "x": -343,
                            "y": -4357
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "attackableSwitchA",
                        "id": "10467",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA",
                        "id": "11343",
                        "type": "bool",
                        "pos": {
                            "x": -500,
                            "y": -4480
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "spiritShardPickupA",
                        "id": "12077",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbC",
                        "id": "16206",
                        "type": "bool",
                        "pos": {
                            "x": -389,
                            "y": -4503
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "energyHalfCell",
                        "id": "17920",
                        "type": "bool",
                        "pos": {
                            "x": -625,
                            "y": -4418
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "areaText",
                        "id": "17957",
                        "type": "bool"
                    },
                    {
                        "name": "shardSlotUpgradePlaceholder",
                        "id": "18109",
                        "type": "bool",
                        "pos": {
                            "x": -382,
                            "y": -4337
                        },
                        "icon": "Shard Slot",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 4
                    },
                    {
                        "name": "mediumExpB",
                        "id": "19679",
                        "type": "bool"
                    },
                    {
                        "name": "creepTreeC",
                        "id": "20144",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbB",
                        "id": "20160",
                        "type": "bool"
                    },
                    {
                        "name": "lifeCellA",
                        "id": "20194",
                        "type": "bool",
                        "pos": {
                            "x": -437,
                            "y": -4381
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "hintZone",
                        "id": "20615",
                        "type": "bool"
                    },
                    {
                        "name": "largeExpA1",
                        "id": "21727",
                        "type": "bool",
                        "pos": {
                            "x": -1015,
                            "y": -4269
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "keyStone",
                        "id": "22068",
                        "type": "bool",
                        "pos": {
                            "x": -439,
                            "y": -4462
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "playedOutKeystoneSequence",
                        "id": "22367",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA1",
                        "id": "22570",
                        "type": "bool",
                        "pos": {
                            "x": -384,
                            "y": -4503
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "mediumExpA1",
                        "id": "23154",
                        "type": "bool",
                        "pos": {
                            "x": -837,
                            "y": -4315
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "creepDoor",
                        "id": "23177",
                        "type": "bool",
                        "pos": {
                            "x": -678,
                            "y": -4308
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "nightCrawlerEscaped",
                        "id": "25095",
                        "type": "bool"
                    },
                    {
                        "name": "creepDoorA",
                        "id": "25147",
                        "type": "bool",
                        "pos": {
                            "x": -296,
                            "y": -4442
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "creepDoorE",
                        "id": "25291",
                        "type": "bool",
                        "pos": {
                            "x": -406,
                            "y": -4434
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "healthContainerA",
                        "id": "25761",
                        "type": "bool",
                        "pos": {
                            "x": -718,
                            "y": -4278
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "interactedWithOpher",
                        "id": "26462",
                        "type": "bool"
                    },
                    {
                        "name": "keyStoneA",
                        "id": "27433",
                        "type": "bool",
                        "pos": {
                            "x": -461,
                            "y": -4195
                        },
                        "icon": "Eyestone",
                        "category": "mapIcon",
                        "pickupType": 1
                    },
                    {
                        "name": "halfHealthCellA",
                        "id": "28908",
                        "type": "bool",
                        "pos": {
                            "x": -332,
                            "y": -4439
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "creepDoorB1",
                        "id": "29636",
                        "type": "bool",
                        "pos": {
                            "x": -448,
                            "y": -4436
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "gorlekOreA1",
                        "id": "29892",
                        "type": "bool",
                        "pos": {
                            "x": -810,
                            "y": -4334
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "spiritShardA",
                        "id": "30305",
                        "type": "bool"
                    },
                    {
                        "name": "nightCrawlerChaseStarted",
                        "id": "30656",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA2",
                        "id": "30928",
                        "type": "bool",
                        "pos": {
                            "x": -243,
                            "y": -4440
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "hintZone1",
                        "id": "31430",
                        "type": "bool"
                    },
                    {
                        "name": "enemyDoorA",
                        "id": "32430",
                        "type": "bool"
                    },
                    {
                        "name": "creepTreeD",
                        "id": "32463",
                        "type": "bool"
                    },
                    {
                        "name": "creepDoor1",
                        "id": "33430",
                        "type": "bool",
                        "pos": {
                            "x": -735,
                            "y": -4335
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "breakableWallB",
                        "id": "34008",
                        "type": "bool",
                        "pos": {
                            "x": -337,
                            "y": -4439
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "creepDoorA1",
                        "id": "35166",
                        "type": "bool",
                        "pos": {
                            "x": -652,
                            "y": -4417
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "creepDoorC",
                        "id": "35260",
                        "type": "bool",
                        "pos": {
                            "x": -354,
                            "y": -4486
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "attackableSwitchC",
                        "id": "35350",
                        "type": "bool"
                    },
                    {
                        "name": "enemyArenaComplete",
                        "id": "35598",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA3",
                        "id": "35925",
                        "type": "bool",
                        "pos": {
                            "x": -494,
                            "y": -4410
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "keyStoneB",
                        "id": "37225",
                        "type": "bool",
                        "pos": {
                            "x": -394,
                            "y": -4188
                        },
                        "icon": "Eyestone",
                        "category": "mapIcon",
                        "pickupType": 1
                    },
                    {
                        "name": "creepTreeE",
                        "id": "37833",
                        "type": "bool"
                    },
                    {
                        "name": "hintZone2",
                        "id": "38342",
                        "type": "bool"
                    },
                    {
                        "name": "bladeRitualFinished",
                        "id": "38475",
                        "type": "bool"
                    },
                    {
                        "name": "springCreep",
                        "id": "39804",
                        "type": "bool"
                    },
                    {
                        "name": "nightCrawlerDefeated",
                        "id": "40322",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWall",
                        "id": "40424",
                        "type": "bool",
                        "pos": {
                            "x": -749,
                            "y": -4423
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "doorBState",
                        "id": "41817",
                        "type": "bool",
                        "pos": {
                            "x": -400,
                            "y": -4189
                        },
                        "icon": "Stone Door",
                        "category": "mapIcon"
                    },
                    {
                        "name": "swampTorchIntroductionADoorWithTwoSlotsBooleanDescriptor",
                        "id": "42309",
                        "type": "bool"
                    },
                    {
                        "name": "watermillDiscovered",
                        "id": "43216",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbB1",
                        "id": "43668",
                        "type": "bool",
                        "pos": {
                            "x": -433,
                            "y": -4420
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "energyContainerA",
                        "id": "44157",
                        "type": "bool"
                    },
                    {
                        "name": "secretWall",
                        "id": "44253",
                        "type": "bool",
                        "pos": {
                            "x": -574,
                            "y": -4309
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "creepTreeA",
                        "id": "44431",
                        "type": "bool"
                    },
                    {
                        "name": "attackableSwitchB",
                        "id": "45648",
                        "type": "bool"
                    },
                    {
                        "name": "nightcrawlerTeaseTimelinePlayed",
                        "id": "46536",
                        "type": "bool"
                    },
                    {
                        "name": "swampNightcrawlerCavernADoorWithTwoSlotsBooleanDescriptor",
                        "id": "47445",
                        "type": "bool"
                    },
                    {
                        "name": "torchHolded",
                        "id": "47458",
                        "type": "bool"
                    },
                    {
                        "name": "creepDoorB2",
                        "id": "47644",
                        "type": "bool"
                    },
                    {
                        "name": "finishedIntroTop",
                        "id": "48748",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpA",
                        "id": "49485",
                        "type": "bool",
                        "pos": {
                            "x": -764,
                            "y": -4313
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "mediumExpA2",
                        "id": "50255",
                        "type": "bool",
                        "pos": {
                            "x": -641,
                            "y": -4223
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "swampWalljumpChallengeBKeystoneACollected",
                        "id": "50281",
                        "type": "bool"
                    },
                    {
                        "name": "leverA",
                        "id": "50432",
                        "type": "bool",
                        "pos": {
                            "x": -309,
                            "y": -4211
                        },
                        "icon": "Lever",
                        "category": "mapIcon"
                    },
                    {
                        "name": "leverAndDoor",
                        "id": "50453",
                        "type": "bool",
                        "pos": {
                            "x": -334,
                            "y": -4035
                        },
                        "icon": "Lever",
                        "category": "mapIcon"
                    },
                    {
                        "name": "doorAState",
                        "id": "50691",
                        "type": "bool",
                        "pos": {
                            "x": -451,
                            "y": -4198
                        },
                        "icon": "Stone Door",
                        "category": "mapIcon"
                    },
                    {
                        "name": "nightcrawlerBridgeBrokenA",
                        "id": "50994",
                        "type": "bool"
                    },
                    {
                        "name": "powlTeaseTriggered",
                        "id": "51018",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpA1",
                        "id": "52026",
                        "type": "bool"
                    },
                    {
                        "name": "leverGateinkwaterMarsh",
                        "id": "52815",
                        "type": "bool"
                    },
                    {
                        "name": "creepDoorA2",
                        "id": "53932",
                        "type": "bool"
                    },
                    {
                        "name": "elevatorDown",
                        "id": "55881",
                        "type": "bool",
                        "pos": {
                            "x": -403,
                            "y": -4551
                        },
                        "icon": "Lever",
                        "category": "mapIcon"
                    },
                    {
                        "name": "gateUberState",
                        "id": "58612",
                        "type": "bool"
                    },
                    {
                        "name": "expOrb",
                        "id": "59513",
                        "type": "bool",
                        "pos": {
                            "x": -755,
                            "y": -4423
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "breakableBridgeBroken",
                        "id": "59922",
                        "type": "bool"
                    },
                    {
                        "name": "doorWithTwoSlots",
                        "id": "59990",
                        "type": "bool"
                    },
                    {
                        "name": "healthContainerA1",
                        "id": "60210",
                        "type": "bool",
                        "pos": {
                            "x": -958,
                            "y": -4313
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "doorFourSlots",
                        "id": "60616",
                        "type": "bool"
                    },
                    {
                        "name": "ottersLeadToSpiritBlade",
                        "id": "61644",
                        "type": "bool"
                    },
                    {
                        "name": "halfEnergyCellA1",
                        "id": "61706",
                        "type": "bool",
                        "pos": {
                            "x": -233,
                            "y": -4385
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "stompableFloor1",
                        "id": "61900",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA1",
                        "id": "63072",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShardA1",
                        "id": "63545",
                        "type": "bool",
                        "pos": {
                            "x": -239,
                            "y": -4441
                        },
                        "icon": "Magnet",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 8
                    },
                    {
                        "name": "swampWalljumpChallengeBKeystoneBCollected",
                        "id": "64677",
                        "type": "bool",
                        "pos": {
                            "x": -852,
                            "y": -4404
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "creepTreeB",
                        "id": "65235",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestal",
                        "id": "3714",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalSwampIntroTop",
                        "id": "10185",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestal1",
                        "id": "12914",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestal2",
                        "id": "38720",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "38941",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestal3",
                        "id": "50820",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestal4",
                        "id": "56901",
                        "type": "teleporter"
                    },
                    {
                        "name": "pushBlockState",
                        "id": "22091",
                        "type": "byte"
                    }
                ]
            },
            "pickupsGroup": {
                "id": "23987",
                "uberIDs": [
                    {
                        "name": "hollowEnergyShardPickup",
                        "id": "897",
                        "type": "bool",
                        "pos": {
                            "x": -90,
                            "y": -4097
                        },
                        "icon": "Catalyst",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 36
                    },
                    {
                        "name": "spiritPowerShardPickup",
                        "id": "986",
                        "type": "bool",
                        "pos": {
                            "x": 564,
                            "y": -4571
                        },
                        "icon": "Spirit Surge",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 41
                    },
                    {
                        "name": "recklessShardPickup",
                        "id": "9864",
                        "type": "bool",
                        "pos": {
                            "x": -499,
                            "y": -4411
                        },
                        "icon": "Reckless",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 13
                    },
                    {
                        "name": "ultraLeashShardPickup",
                        "id": "12104",
                        "type": "bool",
                        "pos": {
                            "x": -799,
                            "y": -3913
                        },
                        "icon": "Ultra Grapple",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 33
                    },
                    {
                        "name": "energyCell",
                        "id": "12746",
                        "type": "bool"
                    },
                    {
                        "name": "focusShardPickup",
                        "id": "14014",
                        "type": "bool",
                        "pos": {
                            "x": -247,
                            "y": -4106
                        },
                        "icon": "Bounty",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 4
                    },
                    {
                        "name": "secretShardPickup",
                        "id": "14832",
                        "type": "bool",
                        "pos": {
                            "x": -408,
                            "y": -4162
                        },
                        "icon": "PickupType.Shard",
                        "category": ""
                    },
                    {
                        "name": "untouchableShardPickup",
                        "id": "19630",
                        "type": "bool",
                        "pos": {
                            "x": -400,
                            "y": -3861
                        },
                        "icon": "Lifeforce",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 43
                    },
                    {
                        "name": "spiritMagnetShardPickup",
                        "id": "20915",
                        "type": "bool"
                    },
                    {
                        "name": "chainLightningPickup",
                        "id": "23015",
                        "type": "bool",
                        "pos": {
                            "x": -325,
                            "y": -4135
                        },
                        "icon": "Arcing",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 47
                    },
                    {
                        "name": "recycleShardPickup",
                        "id": "25183",
                        "type": "bool",
                        "pos": {
                            "x": 827,
                            "y": -3939
                        },
                        "icon": "Overflow",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 34
                    },
                    {
                        "name": "ultraBashShardPickup",
                        "id": "25996",
                        "type": "bool",
                        "pos": {
                            "x": -1284,
                            "y": -4197
                        },
                        "icon": "Ultra Bash",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 32
                    },
                    {
                        "name": "glueShardPickup",
                        "id": "27134",
                        "type": "bool",
                        "pos": {
                            "x": -547,
                            "y": -4530
                        },
                        "icon": "Sticky",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 39
                    },
                    {
                        "name": "counterstrikeShardPickup",
                        "id": "31426",
                        "type": "bool",
                        "pos": {
                            "x": -1376,
                            "y": -3995
                        },
                        "icon": "Thorn",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 35
                    },
                    {
                        "name": "fractureShardPickup",
                        "id": "36359",
                        "type": "bool",
                        "pos": {
                            "x": -81,
                            "y": -4001
                        },
                        "icon": "Fracture",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 46
                    },
                    {
                        "name": "energyEfficiencyShardPickup",
                        "id": "46461",
                        "type": "bool"
                    },
                    {
                        "name": "aggressorShardPickup",
                        "id": "48605",
                        "type": "bool",
                        "pos": {
                            "x": 1779,
                            "y": -3783
                        },
                        "icon": "Turmoil",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 38
                    },
                    {
                        "name": "lastResortShardPickup",
                        "id": "50364",
                        "type": "bool",
                        "pos": {
                            "x": 1833,
                            "y": -3936
                        },
                        "icon": "Last Stand",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 28
                    },
                    {
                        "name": "bloodPactShardPickup",
                        "id": "50415",
                        "type": "bool",
                        "pos": {
                            "x": -916,
                            "y": -4399
                        },
                        "icon": "Life Pact",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 27
                    },
                    {
                        "name": "vitalityLuckShardPickup",
                        "id": "53934",
                        "type": "bool",
                        "pos": {
                            "x": -998,
                            "y": -4030
                        },
                        "icon": "Life Harvest",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 23
                    },
                    {
                        "name": "barrierShardPickup",
                        "id": "59173",
                        "type": "bool",
                        "pos": {
                            "x": -790,
                            "y": -4335
                        },
                        "icon": "Resilience",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 18
                    },
                    {
                        "name": "frenzyShardPickup",
                        "id": "61017",
                        "type": "bool",
                        "pos": {
                            "x": -310,
                            "y": -4326
                        },
                        "icon": "Quickshot",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 14
                    },
                    {
                        "name": "splinterShardPickup",
                        "id": "62973",
                        "type": "bool",
                        "pos": {
                            "x": 216,
                            "y": -4308
                        },
                        "icon": "Splinter",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 9
                    }
                ]
            },
            "howlsOriginGroup": {
                "id": "24922",
                "uberIDs": [
                    {
                        "name": "secretWallA",
                        "id": "2524",
                        "type": "bool",
                        "pos": {
                            "x": -577,
                            "y": -4548
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "expOrbA",
                        "id": "8568",
                        "type": "bool"
                    },
                    {
                        "name": "bellPuzzleSolved",
                        "id": "13349",
                        "type": "bool",
                        "pos": {
                            "x": -903,
                            "y": -4504
                        },
                        "icon": "Bell Puzzle Burrows Entrance",
                        "category": "mapIcon"
                    },
                    {
                        "name": "xpOrbA",
                        "id": "13921",
                        "type": "bool"
                    },
                    {
                        "name": "shardSlotUpgradePlaceholder",
                        "id": "13993",
                        "type": "bool",
                        "pos": {
                            "x": -314,
                            "y": -4570
                        },
                        "icon": "Shard Slot",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 4
                    },
                    {
                        "name": "portalsLifted",
                        "id": "16603",
                        "type": "bool",
                        "pos": {
                            "x": -683,
                            "y": -4616
                        },
                        "icon": "Lever",
                        "category": "mapIcon"
                    },
                    {
                        "name": "smallExpA",
                        "id": "32076",
                        "type": "bool",
                        "pos": {
                            "x": -1001,
                            "y": -4451
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "keystoneB",
                        "id": "33535",
                        "type": "bool",
                        "pos": {
                            "x": -704,
                            "y": -4609
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "keystoneA",
                        "id": "34250",
                        "type": "bool",
                        "pos": {
                            "x": -725,
                            "y": -4520
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "shrineArena",
                        "id": "45011",
                        "type": "bool"
                    },
                    {
                        "name": "interactedWithTokk",
                        "id": "45740",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShard",
                        "id": "46311",
                        "type": "bool",
                        "pos": {
                            "x": -773,
                            "y": -4528
                        },
                        "icon": "Deflector",
                        "category": "shard",
                        "pickupType": 3,
                        "uberValue": 44
                    },
                    {
                        "name": "keystoneA1",
                        "id": "47244",
                        "type": "bool",
                        "pos": {
                            "x": -597,
                            "y": -4548
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "breakableWallA",
                        "id": "50740",
                        "type": "bool"
                    },
                    {
                        "name": "bellPuzzleBSolved",
                        "id": "59146",
                        "type": "bool",
                        "pos": {
                            "x": -864,
                            "y": -4492
                        },
                        "icon": "Bell Puzzle Tree",
                        "category": "mapIcon"
                    },
                    {
                        "name": "keystoneA2",
                        "id": "60358",
                        "type": "bool",
                        "pos": {
                            "x": -800,
                            "y": -4580
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "largeExpA",
                        "id": "62138",
                        "type": "bool",
                        "pos": {
                            "x": -979,
                            "y": -4510
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "howlOriginEntranceSavePedestal",
                        "id": "42531",
                        "type": "teleporter"
                    }
                ]
            },
            "convertedSetupsGymGroup": {
                "id": "26019",
                "uberIDs": [
                    {
                        "name": "blowableFlameToggle",
                        "id": "971",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallA",
                        "id": "1274",
                        "type": "bool"
                    },
                    {
                        "name": "horizontalDoorState",
                        "id": "4052",
                        "type": "bool"
                    },
                    {
                        "name": "creepDoorD",
                        "id": "4231",
                        "type": "bool"
                    },
                    {
                        "name": "secretWall",
                        "id": "5259",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokCavernsLever",
                        "id": "6406",
                        "type": "bool"
                    },
                    {
                        "name": "creepD",
                        "id": "7636",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpOrb",
                        "id": "10086",
                        "type": "bool"
                    },
                    {
                        "name": "snowPileB",
                        "id": "11133",
                        "type": "bool"
                    },
                    {
                        "name": "elevatorLever",
                        "id": "11592",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloor",
                        "id": "12371",
                        "type": "bool"
                    },
                    {
                        "name": "creepDoorA",
                        "id": "13586",
                        "type": "bool"
                    },
                    {
                        "name": "desertBreakableWall",
                        "id": "14277",
                        "type": "bool"
                    },
                    {
                        "name": "creepC",
                        "id": "15381",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloorB",
                        "id": "18425",
                        "type": "bool"
                    },
                    {
                        "name": "cordycepsBreakableWall",
                        "id": "21522",
                        "type": "bool"
                    },
                    {
                        "name": "watermillEnemyDoor",
                        "id": "23282",
                        "type": "bool"
                    },
                    {
                        "name": "leverAndDoor",
                        "id": "23382",
                        "type": "bool"
                    },
                    {
                        "name": "weepingRidgeBreakableWall",
                        "id": "25103",
                        "type": "bool"
                    },
                    {
                        "name": "petrifiedForestBreakableWall",
                        "id": "26714",
                        "type": "bool"
                    },
                    {
                        "name": "leafPile",
                        "id": "27176",
                        "type": "bool"
                    },
                    {
                        "name": "enemyDoor",
                        "id": "28367",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokCavernsBreakableWall",
                        "id": "28678",
                        "type": "bool"
                    },
                    {
                        "name": "enemyDoorA",
                        "id": "29970",
                        "type": "bool"
                    },
                    {
                        "name": "keyStoneYesCheckpoint",
                        "id": "30549",
                        "type": "bool"
                    },
                    {
                        "name": "watermillBreakableWall",
                        "id": "32221",
                        "type": "bool"
                    },
                    {
                        "name": "watermillBreakableWallUnderwater",
                        "id": "33339",
                        "type": "bool"
                    },
                    {
                        "name": "lagoonEnemyDoor",
                        "id": "33392",
                        "type": "bool"
                    },
                    {
                        "name": "desertRuinsBreakableWall",
                        "id": "33510",
                        "type": "bool"
                    },
                    {
                        "name": "energyContainer",
                        "id": "34752",
                        "type": "bool"
                    },
                    {
                        "name": "creepDoorC",
                        "id": "34818",
                        "type": "bool"
                    },
                    {
                        "name": "snowPileA",
                        "id": "35001",
                        "type": "bool"
                    },
                    {
                        "name": "classicShootableCreepDoor",
                        "id": "37244",
                        "type": "bool"
                    },
                    {
                        "name": "snowPile",
                        "id": "38710",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokCavernsBreakableWallLock",
                        "id": "38743",
                        "type": "bool"
                    },
                    {
                        "name": "keyStoneNoCheckpoint",
                        "id": "38761",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokCavernsBreakableWall2",
                        "id": "40296",
                        "type": "bool"
                    },
                    {
                        "name": "winterForestBreakableWall",
                        "id": "40553",
                        "type": "bool"
                    },
                    {
                        "name": "creepDoorB",
                        "id": "44556",
                        "type": "bool"
                    },
                    {
                        "name": "creepE",
                        "id": "47055",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallWithLock",
                        "id": "47874",
                        "type": "bool"
                    },
                    {
                        "name": "skillPointOrb",
                        "id": "49127",
                        "type": "bool"
                    },
                    {
                        "name": "springCreep",
                        "id": "51496",
                        "type": "bool"
                    },
                    {
                        "name": "enemyDoor1",
                        "id": "52684",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShardPickup",
                        "id": "53374",
                        "type": "bool"
                    },
                    {
                        "name": "drillZone",
                        "id": "53543",
                        "type": "bool"
                    },
                    {
                        "name": "snowPileA1",
                        "id": "54405",
                        "type": "bool"
                    },
                    {
                        "name": "fourSlotDoor",
                        "id": "54578",
                        "type": "bool"
                    },
                    {
                        "name": "minesBreakableWall",
                        "id": "58058",
                        "type": "bool"
                    },
                    {
                        "name": "creepB",
                        "id": "58116",
                        "type": "bool"
                    },
                    {
                        "name": "creepA",
                        "id": "60202",
                        "type": "bool"
                    },
                    {
                        "name": "creepDoorE",
                        "id": "60454",
                        "type": "bool"
                    },
                    {
                        "name": "lagoonBreakableWall",
                        "id": "62800",
                        "type": "bool"
                    },
                    {
                        "name": "twoSlotDoor",
                        "id": "62962",
                        "type": "bool"
                    },
                    {
                        "name": "swampBreakableWall",
                        "id": "63056",
                        "type": "bool"
                    },
                    {
                        "name": "largeExpOrb",
                        "id": "64001",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpOrb",
                        "id": "64961",
                        "type": "bool"
                    },
                    {
                        "name": "willowsEndSecretWall",
                        "id": "65139",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbB",
                        "id": "65172",
                        "type": "bool"
                    },
                    {
                        "name": "landOnAndSpawnOrbs",
                        "id": "13498",
                        "type": "float"
                    }
                ]
            },
            "winterForestGroupDescriptor": {
                "id": "28287",
                "uberIDs": [
                    {
                        "name": "breakableFloorB",
                        "id": "3938",
                        "type": "bool"
                    },
                    {
                        "name": "springBlossomTimelinePlayed",
                        "id": "6764",
                        "type": "bool"
                    },
                    {
                        "name": "boxA",
                        "id": "10460",
                        "type": "bool"
                    },
                    {
                        "name": "breakableFloor",
                        "id": "11124",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA",
                        "id": "12866",
                        "type": "bool"
                    },
                    {
                        "name": "breakableRocksA",
                        "id": "13168",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpC",
                        "id": "15252",
                        "type": "bool"
                    },
                    {
                        "name": "thawStateDescriptor",
                        "id": "16339",
                        "type": "bool"
                    },
                    {
                        "name": "pressurePlatePuzzleSolved",
                        "id": "22713",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA",
                        "id": "24327",
                        "type": "bool"
                    },
                    {
                        "name": "breakableFloorA",
                        "id": "26844",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpB",
                        "id": "28525",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallThaw",
                        "id": "30157",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA1",
                        "id": "32414",
                        "type": "bool",
                        "pos": {
                            "x": -423,
                            "y": -3876
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "hammerWall",
                        "id": "40607",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallC",
                        "id": "43506",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallB",
                        "id": "51721",
                        "type": "bool"
                    },
                    {
                        "name": "boxB",
                        "id": "52043",
                        "type": "bool"
                    },
                    {
                        "name": "leafPileA",
                        "id": "55131",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShardA",
                        "id": "55482",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloor",
                        "id": "57792",
                        "type": "bool"
                    },
                    {
                        "name": "leafPileB",
                        "id": "61490",
                        "type": "bool"
                    },
                    {
                        "name": "breakableRocksB",
                        "id": "62332",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "64528",
                        "type": "teleporter"
                    }
                ]
            },
            "baursReachGroup": {
                "id": "28895",
                "uberIDs": [
                    {
                        "name": "keystoneB",
                        "id": "1053",
                        "type": "bool",
                        "pos": {
                            "x": -248,
                            "y": -3891
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "powlTeaseTriggered",
                        "id": "2108",
                        "type": "bool"
                    },
                    {
                        "name": "largeExpOrb",
                        "id": "2129",
                        "type": "bool",
                        "pos": {
                            "x": -172,
                            "y": -3928
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "xpOrbA",
                        "id": "2462",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloorA",
                        "id": "2896",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallB",
                        "id": "2931",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpOrb",
                        "id": "3777",
                        "type": "bool",
                        "pos": {
                            "x": -439,
                            "y": -3946
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "doorWithFourSlots",
                        "id": "4290",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbF",
                        "id": "4301",
                        "type": "bool",
                        "pos": {
                            "x": -350,
                            "y": -4039
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "frozenMokiInteracted",
                        "id": "7152",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpB",
                        "id": "7597",
                        "type": "bool",
                        "pos": {
                            "x": -72,
                            "y": -3926
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "breakableRocksA",
                        "id": "7616",
                        "type": "bool",
                        "pos": {
                            "x": -142,
                            "y": -3933
                        },
                        "icon": "Breakable Ice Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "breakableRocksK",
                        "id": "7703",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloorA1",
                        "id": "8664",
                        "type": "bool",
                        "pos": {
                            "x": -335,
                            "y": -3996
                        },
                        "icon": "Breakable Ground",
                        "category": "mapIcon"
                    },
                    {
                        "name": "xpOrbA1",
                        "id": "8834",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallB1",
                        "id": "8934",
                        "type": "bool",
                        "pos": {
                            "x": -284,
                            "y": -3961
                        },
                        "icon": "Breakable Ice Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "expOrbD",
                        "id": "9321",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneC",
                        "id": "9949",
                        "type": "bool",
                        "pos": {
                            "x": -184,
                            "y": -3867
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "keystoneC1",
                        "id": "10823",
                        "type": "bool",
                        "pos": {
                            "x": -84,
                            "y": -4025
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "energyHalfCell",
                        "id": "10840",
                        "type": "bool"
                    },
                    {
                        "name": "breakableRocksG",
                        "id": "11936",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA2",
                        "id": "12140",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA",
                        "id": "14264",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallA1",
                        "id": "17510",
                        "type": "bool",
                        "pos": {
                            "x": -334,
                            "y": -4035
                        },
                        "icon": "Breakable Ice Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "afterMoraDeathRetalkPlayed",
                        "id": "17914",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneD",
                        "id": "18358",
                        "type": "bool",
                        "pos": {
                            "x": -58,
                            "y": -4055
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "breakableWallA2",
                        "id": "19041",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbE",
                        "id": "19077",
                        "type": "bool"
                    },
                    {
                        "name": "breakableRockWall",
                        "id": "20731",
                        "type": "bool",
                        "pos": {
                            "x": -130,
                            "y": -3996
                        },
                        "icon": "Snowball Tree",
                        "category": "mapIcon"
                    },
                    {
                        "name": "stompableGroundA",
                        "id": "22127",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneA",
                        "id": "22382",
                        "type": "bool",
                        "pos": {
                            "x": -232,
                            "y": -3869
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "placedCoal",
                        "id": "22695",
                        "type": "bool"
                    },
                    {
                        "name": "winterForestBonfire",
                        "id": "22758",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpOrb1",
                        "id": "22761",
                        "type": "bool",
                        "pos": {
                            "x": -39,
                            "y": -4018
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "expOrbC",
                        "id": "22959",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA3",
                        "id": "23605",
                        "type": "bool"
                    },
                    {
                        "name": "breakableRocksH",
                        "id": "23678",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA",
                        "id": "23795",
                        "type": "bool",
                        "pos": {
                            "x": -203,
                            "y": -3886
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "smallXPOrbB",
                        "id": "24533",
                        "type": "bool",
                        "pos": {
                            "x": -416,
                            "y": -3968
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "afterKwolokDeathRetalkPlayed",
                        "id": "25315",
                        "type": "bool"
                    },
                    {
                        "name": "wispRewardPickup",
                        "id": "25522",
                        "type": "bool"
                    },
                    {
                        "name": "energyUpgrade",
                        "id": "27476",
                        "type": "bool"
                    },
                    {
                        "name": "firePedestalBooleanUberState",
                        "id": "27787",
                        "type": "bool",
                        "pos": {
                            "x": -406,
                            "y": -4065
                        },
                        "icon": "Fire Pedestal",
                        "category": "mapIcon"
                    },
                    {
                        "name": "seedPodBroken",
                        "id": "28059",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneA1",
                        "id": "29898",
                        "type": "bool",
                        "pos": {
                            "x": 34,
                            "y": -4025
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "grenadeLanternsHint",
                        "id": "30189",
                        "type": "bool"
                    },
                    {
                        "name": "firePedestalBooleanUberState1",
                        "id": "30566",
                        "type": "bool",
                        "pos": {
                            "x": -255,
                            "y": -4034
                        },
                        "icon": "Fire Pedestal",
                        "category": "mapIcon"
                    },
                    {
                        "name": "breakableWall",
                        "id": "30794",
                        "type": "bool",
                        "pos": {
                            "x": -201,
                            "y": -4043
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "fallingBranch",
                        "id": "31575",
                        "type": "bool"
                    },
                    {
                        "name": "areaTextZone",
                        "id": "32092",
                        "type": "bool"
                    },
                    {
                        "name": "creepDoor",
                        "id": "32340",
                        "type": "bool"
                    },
                    {
                        "name": "closingGate",
                        "id": "32443",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbB",
                        "id": "33337",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbE",
                        "id": "33846",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWall1",
                        "id": "34098",
                        "type": "bool",
                        "pos": {
                            "x": -76,
                            "y": -3986
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "breakableRocksJ",
                        "id": "34461",
                        "type": "bool"
                    },
                    {
                        "name": "healthCellA",
                        "id": "34534",
                        "type": "bool"
                    },
                    {
                        "name": "smallXPOrbB1",
                        "id": "35045",
                        "type": "bool",
                        "pos": {
                            "x": -215,
                            "y": -4057
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "memoriesPlayedOut",
                        "id": "35436",
                        "type": "bool"
                    },
                    {
                        "name": "hintZoneA",
                        "id": "35874",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbC",
                        "id": "36231",
                        "type": "bool",
                        "pos": {
                            "x": -340,
                            "y": -3984
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "smallExpA",
                        "id": "36378",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallA",
                        "id": "36649",
                        "type": "bool"
                    },
                    {
                        "name": "grenadeSwitchA",
                        "id": "37287",
                        "type": "bool",
                        "pos": {
                            "x": -12,
                            "y": -3948
                        },
                        "icon": "Grenade Lantern",
                        "category": "mapIcon"
                    },
                    {
                        "name": "keystoneB1",
                        "id": "37444",
                        "type": "bool",
                        "pos": {
                            "x": -80,
                            "y": -4040
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "xpOrbB1",
                        "id": "38049",
                        "type": "bool",
                        "pos": {
                            "x": -282,
                            "y": -4013
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "breakableRocksE",
                        "id": "38120",
                        "type": "bool",
                        "pos": {
                            "x": -150,
                            "y": -3914
                        },
                        "icon": "Breakable Ice Ground",
                        "category": "mapIcon"
                    },
                    {
                        "name": "xpOrbA4",
                        "id": "38143",
                        "type": "bool",
                        "pos": {
                            "x": -337,
                            "y": -3999
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "breakableRocksF",
                        "id": "38525",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA1",
                        "id": "39291",
                        "type": "bool",
                        "pos": {
                            "x": -87,
                            "y": -3903
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "xpOrbB2",
                        "id": "40089",
                        "type": "bool",
                        "pos": {
                            "x": -194,
                            "y": -3854
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "xpOrbC1",
                        "id": "40242",
                        "type": "bool",
                        "pos": {
                            "x": -239,
                            "y": -3921
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "healthCellA1",
                        "id": "40744",
                        "type": "bool",
                        "pos": {
                            "x": -190,
                            "y": -4017
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "afterAvalancheRetalkPlayed",
                        "id": "41299",
                        "type": "bool"
                    },
                    {
                        "name": "hintZone",
                        "id": "41777",
                        "type": "bool"
                    },
                    {
                        "name": "enemyArenaComplete",
                        "id": "42209",
                        "type": "bool",
                        "pos": {
                            "x": 77,
                            "y": -3993
                        },
                        "icon": "Wooden Floor Gate",
                        "category": "mapIcon"
                    },
                    {
                        "name": "firePedestal",
                        "id": "43977",
                        "type": "bool",
                        "pos": {
                            "x": -456,
                            "y": -3968
                        },
                        "icon": "Fire Pedestal",
                        "category": "mapIcon"
                    },
                    {
                        "name": "xpOrbE1",
                        "id": "45066",
                        "type": "bool",
                        "pos": {
                            "x": -331,
                            "y": -4051
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "largeXPOrbA",
                        "id": "45337",
                        "type": "bool",
                        "pos": {
                            "x": -500,
                            "y": -3970
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "firePedestalBooleanUberState2",
                        "id": "46293",
                        "type": "bool",
                        "pos": {
                            "x": -60,
                            "y": -3987
                        },
                        "icon": "Fire Pedestal",
                        "category": "mapIcon"
                    },
                    {
                        "name": "xpOrbB3",
                        "id": "46404",
                        "type": "bool",
                        "pos": {
                            "x": 71,
                            "y": -3731
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "xpOrbB4",
                        "id": "46711",
                        "type": "bool",
                        "pos": {
                            "x": -72,
                            "y": -3951
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "breakableRocksI",
                        "id": "46875",
                        "type": "bool"
                    },
                    {
                        "name": "orePlaceholder",
                        "id": "47529",
                        "type": "bool",
                        "pos": {
                            "x": -346,
                            "y": -3947
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "creepA",
                        "id": "48186",
                        "type": "bool"
                    },
                    {
                        "name": "grenadeSwitchA1",
                        "id": "48757",
                        "type": "bool",
                        "pos": {
                            "x": -209,
                            "y": -3945
                        },
                        "icon": "Grenade Lantern",
                        "category": "mapIcon"
                    },
                    {
                        "name": "breakyBridge",
                        "id": "49329",
                        "type": "bool",
                        "pos": {
                            "x": -439,
                            "y": -4031
                        },
                        "icon": "Breakable Ground",
                        "category": "mapIcon"
                    },
                    {
                        "name": "keystoneGate",
                        "id": "49900",
                        "type": "bool"
                    },
                    {
                        "name": "breakableRocksB",
                        "id": "49997",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneD1",
                        "id": "50368",
                        "type": "bool",
                        "pos": {
                            "x": -207,
                            "y": -3843
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "blowableFlameB",
                        "id": "51471",
                        "type": "bool"
                    },
                    {
                        "name": "healthHalfContainer",
                        "id": "51853",
                        "type": "bool"
                    },
                    {
                        "name": "kindledFire",
                        "id": "52440",
                        "type": "bool"
                    },
                    {
                        "name": "seenLoremasterMenu",
                        "id": "53166",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbC2",
                        "id": "53283",
                        "type": "bool",
                        "pos": {
                            "x": -112,
                            "y": -3950
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "smallXPOrbA",
                        "id": "54373",
                        "type": "bool",
                        "pos": {
                            "x": -205,
                            "y": -4011
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "smallXPOrbA1",
                        "id": "55384",
                        "type": "bool",
                        "pos": {
                            "x": -401,
                            "y": -4053
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "breakableWallA3",
                        "id": "56062",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallBaur",
                        "id": "57743",
                        "type": "bool"
                    },
                    {
                        "name": "doorOpened",
                        "id": "58337",
                        "type": "bool",
                        "pos": {
                            "x": -127,
                            "y": -3848
                        },
                        "icon": "Grenade Lantern",
                        "category": "mapIcon"
                    },
                    {
                        "name": "gorlekOreA2",
                        "id": "58675",
                        "type": "bool",
                        "pos": {
                            "x": -483,
                            "y": -3974
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "expOrbA",
                        "id": "58848",
                        "type": "bool"
                    },
                    {
                        "name": "talkedToSleepingBaur",
                        "id": "59287",
                        "type": "bool"
                    },
                    {
                        "name": "grenadeSwitchA2",
                        "id": "59394",
                        "type": "bool",
                        "pos": {
                            "x": -210,
                            "y": -4036
                        },
                        "icon": "Grenade Lantern",
                        "category": "mapIcon"
                    },
                    {
                        "name": "interactedWithCampfire",
                        "id": "59955",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA5",
                        "id": "61536",
                        "type": "bool"
                    },
                    {
                        "name": "firePedestalBooleanUberState3",
                        "id": "61789",
                        "type": "bool",
                        "pos": {
                            "x": -258,
                            "y": -3914
                        },
                        "icon": "Fire Pedestal",
                        "category": "mapIcon"
                    },
                    {
                        "name": "frozenMokiIceBroken",
                        "id": "61852",
                        "type": "bool"
                    },
                    {
                        "name": "breakableRocksC",
                        "id": "61896",
                        "type": "bool"
                    },
                    {
                        "name": "afterGoldenSeinRetalkPlayed",
                        "id": "61976",
                        "type": "bool"
                    },
                    {
                        "name": "leverSetup",
                        "id": "62198",
                        "type": "bool",
                        "pos": {
                            "x": -391,
                            "y": -3975
                        },
                        "icon": "Lever",
                        "category": "mapIcon"
                    },
                    {
                        "name": "breakableRocksD",
                        "id": "62643",
                        "type": "bool"
                    },
                    {
                        "name": "orePickup",
                        "id": "64226",
                        "type": "bool"
                    },
                    {
                        "name": "blowableFlameA",
                        "id": "64742",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA",
                        "id": "65235",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "18910",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState1",
                        "id": "54235",
                        "type": "teleporter"
                    },
                    {
                        "name": "interactedWithTokk",
                        "id": "13636",
                        "type": "int"
                    },
                    {
                        "name": "baurNpcState",
                        "id": "29098",
                        "type": "int"
                    },
                    {
                        "name": "mokiNpcState",
                        "id": "12170",
                        "type": "byte"
                    }
                ]
            },
            "weepingRidgeElevatorFightGroup": {
                "id": "31136",
                "uberIDs": [
                    {
                        "name": "willowsEndGateOpened",
                        "id": "3441",
                        "type": "bool"
                    },
                    {
                        "name": "areaText",
                        "id": "59099",
                        "type": "bool"
                    }
                ]
            },
            "achievementsGroup": {
                "id": "33399",
                "uberIDs": [
                    {
                        "name": "spiritBladeCollected",
                        "id": "17893",
                        "type": "bool"
                    },
                    {
                        "name": "gotHitBySpider",
                        "id": "28382",
                        "type": "bool"
                    },
                    {
                        "name": "shardEverEquipped",
                        "id": "34522",
                        "type": "bool"
                    },
                    {
                        "name": "spiritLightEverSpent",
                        "id": "50709",
                        "type": "bool"
                    },
                    {
                        "name": "poisonousWaterTouched",
                        "id": "58955",
                        "type": "bool"
                    },
                    {
                        "name": "enemiesKilledByHazards",
                        "id": "17398",
                        "type": "int"
                    },
                    {
                        "name": "spiritLightGainedCounter",
                        "id": "36285",
                        "type": "int"
                    },
                    {
                        "name": "energyContainersCounter",
                        "id": "41928",
                        "type": "int"
                    },
                    {
                        "name": "healthContainersCounter",
                        "id": "52378",
                        "type": "int"
                    },
                    {
                        "name": "collectablesCounter",
                        "id": "61261",
                        "type": "int"
                    }
                ]
            },
            "gameStateGroup": {
                "id": "34543",
                "uberIDs": [
                    {
                        "name": "gameFinished",
                        "id": "11226",
                        "type": "bool"
                    },
                    {
                        "name": "gameDifficultyMode",
                        "id": "30984",
                        "type": "int"
                    }
                ]
            },
            "corruptedPeakGroup": {
                "id": "36153",
                "uberIDs": [
                    {
                        "name": "spineStateB",
                        "id": "2824",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA",
                        "id": "3013",
                        "type": "bool",
                        "pos": {
                            "x": 1305,
                            "y": -3732
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "expOrbB",
                        "id": "3662",
                        "type": "bool",
                        "pos": {
                            "x": 540,
                            "y": -3655
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "weepingRidgeGetChargeJump",
                        "id": "5369",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA",
                        "id": "5552",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA",
                        "id": "6682",
                        "type": "bool"
                    },
                    {
                        "name": "spineStateA",
                        "id": "8434",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbB",
                        "id": "12077",
                        "type": "bool",
                        "pos": {
                            "x": 1331,
                            "y": -3798
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "healthContainerA",
                        "id": "12457",
                        "type": "bool"
                    },
                    {
                        "name": "pressurePlatePuzzleA",
                        "id": "14400",
                        "type": "bool"
                    },
                    {
                        "name": "pressurePlatePuzzleB",
                        "id": "17818",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpOrbPlaceholder",
                        "id": "18750",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWallD",
                        "id": "18883",
                        "type": "bool"
                    },
                    {
                        "name": "spineStateC",
                        "id": "20307",
                        "type": "bool"
                    },
                    {
                        "name": "breakableRockB",
                        "id": "22461",
                        "type": "bool"
                    },
                    {
                        "name": "elevatorCompleteState",
                        "id": "23584",
                        "type": "bool",
                        "pos": {
                            "x": 1141,
                            "y": -3817
                        },
                        "icon": "Elevator",
                        "category": "mapIcon"
                    },
                    {
                        "name": "expOrbA",
                        "id": "23902",
                        "type": "bool",
                        "pos": {
                            "x": 434,
                            "y": -3640
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "corruptedPeakSecretWallB",
                        "id": "25095",
                        "type": "bool"
                    },
                    {
                        "name": "spellPickup",
                        "id": "30728",
                        "type": "bool"
                    },
                    {
                        "name": "expOrb",
                        "id": "36521",
                        "type": "bool",
                        "pos": {
                            "x": 1382,
                            "y": -3767
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "spineStateD",
                        "id": "42305",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbC",
                        "id": "42589",
                        "type": "bool"
                    },
                    {
                        "name": "corruptedPeakSecretWallA",
                        "id": "44835",
                        "type": "bool"
                    },
                    {
                        "name": "breakableRockA",
                        "id": "47520",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloorA",
                        "id": "48472",
                        "type": "bool"
                    },
                    {
                        "name": "stomperStateB",
                        "id": "51042",
                        "type": "bool"
                    },
                    {
                        "name": "expOrb1",
                        "id": "53032",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloorC",
                        "id": "55011",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA1",
                        "id": "56157",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloorB",
                        "id": "57716",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWall",
                        "id": "60795",
                        "type": "bool"
                    },
                    {
                        "name": "stomperStateA",
                        "id": "62883",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "43597",
                        "type": "teleporter"
                    }
                ]
            },
            "waterMillStateGroupDescriptor": {
                "id": "37858",
                "uberIDs": [
                    {
                        "name": "waterMillSecretWallADestroyedArt",
                        "id": "2615",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpOrb",
                        "id": "2797",
                        "type": "bool",
                        "pos": {
                            "x": -1317,
                            "y": -3665
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "hornbugBreakWall",
                        "id": "3421",
                        "type": "bool"
                    },
                    {
                        "name": "shardSlotUpgrade",
                        "id": "3685",
                        "type": "bool"
                    },
                    {
                        "name": "dashDoor",
                        "id": "6338",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA",
                        "id": "8344",
                        "type": "bool"
                    },
                    {
                        "name": "exitDoorOpen",
                        "id": "9487",
                        "type": "bool"
                    },
                    {
                        "name": "orePickupA",
                        "id": "11418",
                        "type": "bool"
                    },
                    {
                        "name": "waterMillBossRoomBarrierOpen",
                        "id": "11772",
                        "type": "bool"
                    },
                    {
                        "name": "finishedWatermillEscape",
                        "id": "12379",
                        "type": "bool"
                    },
                    {
                        "name": "displayedFlingHint",
                        "id": "13968",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShardA",
                        "id": "15961",
                        "type": "bool"
                    },
                    {
                        "name": "waterMillEntranceFallingDiscUberStateDescriptor",
                        "id": "16604",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbA",
                        "id": "16611",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA1",
                        "id": "19347",
                        "type": "bool"
                    },
                    {
                        "name": "waterMillSecretWallBDestroyed",
                        "id": "21874",
                        "type": "bool",
                        "pos": {
                            "x": -1228,
                            "y": -3739
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "mediumExpA2",
                        "id": "22107",
                        "type": "bool",
                        "pos": {
                            "x": -1372,
                            "y": -3939
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "playedNaruGumoCutaway",
                        "id": "23225",
                        "type": "bool"
                    },
                    {
                        "name": "waterMillEntranceDoorUberStateDescriptor",
                        "id": "23644",
                        "type": "bool"
                    },
                    {
                        "name": "rescuedOpher",
                        "id": "25031",
                        "type": "bool"
                    },
                    {
                        "name": "healthContainerA",
                        "id": "25833",
                        "type": "bool",
                        "pos": {
                            "x": -1168,
                            "y": -3991
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "waterMillVisited",
                        "id": "26885",
                        "type": "bool"
                    },
                    {
                        "name": "poleLowered",
                        "id": "31104",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA3",
                        "id": "31136",
                        "type": "bool",
                        "pos": {
                            "x": -1308,
                            "y": -3885
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "recedingWater",
                        "id": "31187",
                        "type": "bool"
                    },
                    {
                        "name": "wheelsActivated",
                        "id": "31584",
                        "type": "bool"
                    },
                    {
                        "name": "waterMillBEntranceTriggerUberStateDescriptor",
                        "id": "31962",
                        "type": "bool"
                    },
                    {
                        "name": "doorWithTwoSlotsBooleanDescriptor",
                        "id": "31966",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneA",
                        "id": "32628",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA",
                        "id": "32932",
                        "type": "bool",
                        "pos": {
                            "x": -1204,
                            "y": -3715
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "xpOrbA",
                        "id": "33063",
                        "type": "bool",
                        "pos": {
                            "x": -1223,
                            "y": -3907
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "mediumExpB",
                        "id": "33642",
                        "type": "bool"
                    },
                    {
                        "name": "wheelLever",
                        "id": "34433",
                        "type": "bool"
                    },
                    {
                        "name": "enemyDoor",
                        "id": "34619",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShardA1",
                        "id": "34646",
                        "type": "bool"
                    },
                    {
                        "name": "enemyDoorA",
                        "id": "37323",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA4",
                        "id": "41380",
                        "type": "bool",
                        "pos": {
                            "x": -1063,
                            "y": -3961
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "mediumExpB1",
                        "id": "41911",
                        "type": "bool",
                        "pos": {
                            "x": -1142,
                            "y": -3862
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "keystoneA1",
                        "id": "43893",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbWater",
                        "id": "45656",
                        "type": "bool",
                        "pos": {
                            "x": -1197,
                            "y": -3972
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "smallExpA",
                        "id": "45906",
                        "type": "bool",
                        "pos": {
                            "x": -1247,
                            "y": -3928
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "gorlekOraA",
                        "id": "47533",
                        "type": "bool",
                        "pos": {
                            "x": -1178,
                            "y": -3756
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "mediumExpC",
                        "id": "50064",
                        "type": "bool"
                    },
                    {
                        "name": "watermillEntranceTalkedToOpher",
                        "id": "50780",
                        "type": "bool"
                    },
                    {
                        "name": "wheelAActive",
                        "id": "50902",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpB2",
                        "id": "52110",
                        "type": "bool",
                        "pos": {
                            "x": -1151,
                            "y": -3841
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "waterMillBossRoomWheelFelt",
                        "id": "52129",
                        "type": "bool"
                    },
                    {
                        "name": "hintZone",
                        "id": "54231",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA1",
                        "id": "55450",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbB",
                        "id": "55499",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrb",
                        "id": "56444",
                        "type": "bool",
                        "pos": {
                            "x": -1313,
                            "y": -3640
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "energyVessel",
                        "id": "57552",
                        "type": "bool",
                        "pos": {
                            "x": -1109,
                            "y": -3865
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "arenaWheelsActivated",
                        "id": "58000",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpAArt",
                        "id": "58220",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA1",
                        "id": "58286",
                        "type": "bool",
                        "pos": {
                            "x": -678,
                            "y": -3934
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "waterMillSecretWallADestroyedArtB",
                        "id": "58736",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreB",
                        "id": "58846",
                        "type": "bool",
                        "pos": {
                            "x": -1077,
                            "y": -3937
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "shardSlotExpansion",
                        "id": "58947",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA5",
                        "id": "59022",
                        "type": "bool",
                        "pos": {
                            "x": -1252,
                            "y": -3683
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "wheelBActive",
                        "id": "60716",
                        "type": "bool"
                    },
                    {
                        "name": "waterMillSecretWallADestroyed",
                        "id": "61481",
                        "type": "bool"
                    },
                    {
                        "name": "wheelsActivatedEntry",
                        "id": "64055",
                        "type": "bool"
                    },
                    {
                        "name": "expOrb",
                        "id": "64086",
                        "type": "bool",
                        "pos": {
                            "x": -1237,
                            "y": -3741
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "spiritShardA2",
                        "id": "64961",
                        "type": "bool"
                    },
                    {
                        "name": "lifeCellA",
                        "id": "65187",
                        "type": "bool"
                    },
                    {
                        "name": "rotatingEnemyArenaStates",
                        "id": "8487",
                        "type": "int"
                    },
                    {
                        "name": "watermillEscapeState",
                        "id": "10720",
                        "type": "int"
                    },
                    {
                        "name": "rotatingEnemyArenaRotationStateController",
                        "id": "34636",
                        "type": "int"
                    },
                    {
                        "name": "rotationState",
                        "id": "36070",
                        "type": "int"
                    },
                    {
                        "name": "landOnAndSpawnOrbsARespawnTimer",
                        "id": "5107",
                        "type": "float"
                    },
                    {
                        "name": "landOnAndSpawnOrbs",
                        "id": "8675",
                        "type": "float"
                    },
                    {
                        "name": "landOnAndSpawnOrbs1",
                        "id": "17790",
                        "type": "float"
                    },
                    {
                        "name": "healthPlantB",
                        "id": "22902",
                        "type": "float"
                    },
                    {
                        "name": "landOnAndSpawnOrbsA",
                        "id": "24680",
                        "type": "int"
                    },
                    {
                        "name": "landOnAndSpawnOrbs2",
                        "id": "28311",
                        "type": "int"
                    },
                    {
                        "name": "landOnAndSpawnOrbs3",
                        "id": "38044",
                        "type": "float"
                    },
                    {
                        "name": "landOnAndSpawnOrbs4",
                        "id": "44551",
                        "type": "float"
                    },
                    {
                        "name": "landOnAndSpawnOrbsARespawnTimerB",
                        "id": "48554",
                        "type": "float"
                    },
                    {
                        "name": "landOnAndSpawnOrbs5",
                        "id": "54186",
                        "type": "float"
                    },
                    {
                        "name": "healthPlant",
                        "id": "57762",
                        "type": "float"
                    },
                    {
                        "name": "landOnAndSpawnOrbsB",
                        "id": "60777",
                        "type": "float"
                    },
                    {
                        "name": "landOnAndSpawnOrbs6",
                        "id": "61727",
                        "type": "float"
                    },
                    {
                        "name": "landOnAndSpawnOrbs7",
                        "id": "62404",
                        "type": "float"
                    }
                ]
            },
            "spiderBatTestGroup": {
                "id": "42171",
                "uberIDs": [
                    {
                        "name": "roundOneDefeated",
                        "id": "14000",
                        "type": "bool"
                    },
                    {
                        "name": "arenaDoorClosed",
                        "id": "26771",
                        "type": "bool"
                    },
                    {
                        "name": "allRoundsDefeated",
                        "id": "32228",
                        "type": "bool"
                    },
                    {
                        "name": "roundTwoDefeated",
                        "id": "43227",
                        "type": "bool"
                    },
                    {
                        "name": "roundThreeDefeated",
                        "id": "56229",
                        "type": "bool"
                    },
                    {
                        "name": "enemyArenaState",
                        "id": "53383",
                        "type": "int"
                    }
                ]
            },
            "hubUberStateGroup": {
                "id": "42178",
                "uberIDs": [
                    {
                        "name": "leafPileB",
                        "id": "3295",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpD",
                        "id": "4125",
                        "type": "bool"
                    },
                    {
                        "name": "leafPileC",
                        "id": "5630",
                        "type": "bool",
                        "pos": {
                            "x": -160,
                            "y": -4098
                        },
                        "icon": "Leafpile",
                        "category": "mapIcon"
                    },
                    {
                        "name": "stompableFloorEnterHub",
                        "id": "5815",
                        "type": "bool",
                        "pos": {
                            "x": -163,
                            "y": -4157
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "mediumExpG",
                        "id": "6117",
                        "type": "bool",
                        "pos": {
                            "x": -232,
                            "y": -4106
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "woodCrateC",
                        "id": "9319",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpE",
                        "id": "9780",
                        "type": "bool",
                        "pos": {
                            "x": -225,
                            "y": -4162
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "leafPileA",
                        "id": "10035",
                        "type": "bool"
                    },
                    {
                        "name": "hutBExpOrb",
                        "id": "13327",
                        "type": "bool",
                        "pos": {
                            "x": -177,
                            "y": -4541
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "mediumExpA",
                        "id": "14903",
                        "type": "bool"
                    },
                    {
                        "name": "woodCrateA",
                        "id": "15685",
                        "type": "bool"
                    },
                    {
                        "name": "woodCrateC1",
                        "id": "17158",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpE",
                        "id": "17489",
                        "type": "bool"
                    },
                    {
                        "name": "drillableWallB",
                        "id": "17732",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpF",
                        "id": "18448",
                        "type": "bool",
                        "pos": {
                            "x": -307,
                            "y": -4168
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "areaText",
                        "id": "19692",
                        "type": "bool"
                    },
                    {
                        "name": "woodCrateE",
                        "id": "21105",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA",
                        "id": "23125",
                        "type": "bool",
                        "pos": {
                            "x": -416,
                            "y": -4174
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "hubSpritWellIconVisible",
                        "id": "23193",
                        "type": "bool"
                    },
                    {
                        "name": "woodCrateC2",
                        "id": "26189",
                        "type": "bool"
                    },
                    {
                        "name": "woodCrateA1",
                        "id": "26365",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreB",
                        "id": "27110",
                        "type": "bool",
                        "pos": {
                            "x": -418,
                            "y": -4104
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "warpHintShowed",
                        "id": "27777",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpA",
                        "id": "30206",
                        "type": "bool",
                        "pos": {
                            "x": -363,
                            "y": -4172
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "hutDExpOrbB",
                        "id": "30520",
                        "type": "bool",
                        "pos": {
                            "x": -118,
                            "y": -4521
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "drillableWallA",
                        "id": "31795",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpD",
                        "id": "35232",
                        "type": "bool"
                    },
                    {
                        "name": "woodCrateE1",
                        "id": "35855",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA1",
                        "id": "36085",
                        "type": "bool"
                    },
                    {
                        "name": "woodCrateD",
                        "id": "36464",
                        "type": "bool"
                    },
                    {
                        "name": "fatherMokiGone",
                        "id": "36609",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpB",
                        "id": "37028",
                        "type": "bool",
                        "pos": {
                            "x": -277,
                            "y": -4173
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "mediumExpC",
                        "id": "38743",
                        "type": "bool"
                    },
                    {
                        "name": "pyreA",
                        "id": "38905",
                        "type": "bool",
                        "pos": {
                            "x": -68,
                            "y": -4103
                        },
                        "icon": "Fire Pedestal",
                        "category": "mapIcon"
                    },
                    {
                        "name": "mediumExpB",
                        "id": "40609",
                        "type": "bool",
                        "pos": {
                            "x": -194,
                            "y": -4043
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "smallExpH",
                        "id": "42762",
                        "type": "bool",
                        "pos": {
                            "x": -307,
                            "y": -4119
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "smallExpG",
                        "id": "44748",
                        "type": "bool",
                        "pos": {
                            "x": -160,
                            "y": -4099
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "woodCrateB",
                        "id": "47152",
                        "type": "bool"
                    },
                    {
                        "name": "woodCrateA2",
                        "id": "50325",
                        "type": "bool"
                    },
                    {
                        "name": "gromIntroSequencePlayed",
                        "id": "50418",
                        "type": "bool"
                    },
                    {
                        "name": "woodCrateB1",
                        "id": "51080",
                        "type": "bool"
                    },
                    {
                        "name": "hutAExpOrb",
                        "id": "51468",
                        "type": "bool",
                        "pos": {
                            "x": -161,
                            "y": -4521
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "hutEExpOrb",
                        "id": "51934",
                        "type": "bool",
                        "pos": {
                            "x": -119,
                            "y": -4560
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "hutDExpOrb",
                        "id": "52497",
                        "type": "bool"
                    },
                    {
                        "name": "energyCellA",
                        "id": "52786",
                        "type": "bool",
                        "pos": {
                            "x": -116,
                            "y": -4540
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "woodCrateD1",
                        "id": "56980",
                        "type": "bool"
                    },
                    {
                        "name": "hutCExpOrb",
                        "id": "57455",
                        "type": "bool",
                        "pos": {
                            "x": -172,
                            "y": -4584
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "largeExpA",
                        "id": "57675",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpB1",
                        "id": "59623",
                        "type": "bool",
                        "pos": {
                            "x": -374,
                            "y": -4103
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "woodCrateB2",
                        "id": "63260",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpC",
                        "id": "63404",
                        "type": "bool",
                        "pos": {
                            "x": -240,
                            "y": -4130
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "woodCrateF",
                        "id": "63819",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestal",
                        "id": "42096",
                        "type": "teleporter"
                    },
                    {
                        "name": "shardPurchaseCount",
                        "id": "38",
                        "type": "byte"
                    },
                    {
                        "name": "craftCutsceneState",
                        "id": "2654",
                        "type": "byte"
                    },
                    {
                        "name": "builderProjectShardShop",
                        "id": "7528",
                        "type": "byte"
                    },
                    {
                        "name": "builderProjectBeautify",
                        "id": "15068",
                        "type": "byte"
                    },
                    {
                        "name": "gardenerProjectFlowers",
                        "id": "16254",
                        "type": "byte"
                    },
                    {
                        "name": "builderProjectOpenCave",
                        "id": "16586",
                        "type": "byte"
                    },
                    {
                        "name": "builderProjectSpiritWell",
                        "id": "16825",
                        "type": "byte"
                    },
                    {
                        "name": "builderProjectRemoveThorns",
                        "id": "18751",
                        "type": "byte"
                    },
                    {
                        "name": "builderProjectHousesB",
                        "id": "23607",
                        "type": "byte"
                    },
                    {
                        "name": "gardenerProjectGrapplePlants",
                        "id": "33011",
                        "type": "byte"
                    },
                    {
                        "name": "gardenerProjectSpringPlants",
                        "id": "38393",
                        "type": "byte"
                    },
                    {
                        "name": "gardenerProjectTree",
                        "id": "40006",
                        "type": "byte"
                    },
                    {
                        "name": "builderProjectHousesC",
                        "id": "40448",
                        "type": "byte"
                    },
                    {
                        "name": "gardenerProjectBashPlants",
                        "id": "47651",
                        "type": "byte"
                    },
                    {
                        "name": "builderProjectHouses",
                        "id": "51230",
                        "type": "byte"
                    },
                    {
                        "name": "shardShopState",
                        "id": "61304",
                        "type": "byte"
                    },
                    {
                        "name": "gardenerProjectGrass",
                        "id": "64583",
                        "type": "byte"
                    }
                ]
            },
            "wellspringGladesGroup": {
                "id": "44310",
                "uberIDs": [
                    {
                        "name": "stompableFloorC",
                        "id": "125",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpA",
                        "id": "1647",
                        "type": "bool"
                    },
                    {
                        "name": "shardSlotUpgrade",
                        "id": "9902",
                        "type": "bool",
                        "pos": {
                            "x": -636,
                            "y": -4018
                        },
                        "icon": "Shard Slot",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 4
                    },
                    {
                        "name": "shardTraderState",
                        "id": "15689",
                        "type": "bool"
                    },
                    {
                        "name": "lifeVesselB",
                        "id": "17523",
                        "type": "bool",
                        "pos": {
                            "x": -161,
                            "y": -4192
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "lifeVesselA",
                        "id": "29043",
                        "type": "bool",
                        "pos": {
                            "x": -326,
                            "y": -4103
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "lifeVesselA1",
                        "id": "36911",
                        "type": "bool",
                        "pos": {
                            "x": -688,
                            "y": -4009
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "blowableFlame",
                        "id": "47361",
                        "type": "bool",
                        "pos": {
                            "x": -223,
                            "y": -4150
                        },
                        "icon": "Blowable Flame",
                        "category": "mapIcon"
                    },
                    {
                        "name": "largeExpA",
                        "id": "47723",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA",
                        "id": "47923",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloorA",
                        "id": "55192",
                        "type": "bool",
                        "pos": {
                            "x": -438,
                            "y": -4158
                        },
                        "icon": "Breakable Ground",
                        "category": "mapIcon"
                    },
                    {
                        "name": "stompableFloorB",
                        "id": "57009",
                        "type": "bool"
                    },
                    {
                        "name": "shrineEnemyRoom",
                        "id": "58796",
                        "type": "bool"
                    }
                ]
            },
            "raceGroup": {
                "id": "44964",
                "uberIDs": [
                    {
                        "name": "firstRaceUnlockedMessagePlayed",
                        "id": "8328",
                        "type": "bool"
                    },
                    {
                        "name": "wellspringRaceIcon",
                        "id": "12682",
                        "type": "bool"
                    },
                    {
                        "name": "baursReachWindTunnelRaceIcon",
                        "id": "33045",
                        "type": "bool"
                    },
                    {
                        "name": "silentWoodlandRaceIcon",
                        "id": "34110",
                        "type": "bool"
                    },
                    {
                        "name": "desertRaceIcon",
                        "id": "38162",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDepthsRaceIcon",
                        "id": "40578",
                        "type": "bool"
                    },
                    {
                        "name": "inkwaterMarshRaceIcon",
                        "id": "50495",
                        "type": "bool"
                    },
                    {
                        "name": "lumaPoolsRaceIcon",
                        "id": "56533",
                        "type": "bool"
                    },
                    {
                        "name": "kwolokDropRaceIcon",
                        "id": "63031",
                        "type": "bool"
                    },
                    {
                        "name": "raceLeaderboardFilterState",
                        "id": "3798",
                        "type": "int"
                    },
                    {
                        "name": "wellspringRace",
                        "id": "11512",
                        "type": "int"
                    },
                    {
                        "name": "silentWoodlandRace",
                        "id": "22703",
                        "type": "int"
                    },
                    {
                        "name": "baursReachWindTunnelRace",
                        "id": "23661",
                        "type": "int"
                    },
                    {
                        "name": "kwolokDropRace",
                        "id": "25545",
                        "type": "int"
                    },
                    {
                        "name": "mouldwoodDepthsRace",
                        "id": "28552",
                        "type": "int"
                    },
                    {
                        "name": "desertRace",
                        "id": "30767",
                        "type": "int"
                    },
                    {
                        "name": "inkwaterMarshRace",
                        "id": "45951",
                        "type": "int"
                    },
                    {
                        "name": "testRace",
                        "id": "50634",
                        "type": "int"
                    },
                    {
                        "name": "lumaPoolsRace",
                        "id": "54686",
                        "type": "int"
                    }
                ]
            },
            "kwoloksCavernThroneRoomGroup": {
                "id": "46462",
                "uberIDs": [
                    {
                        "name": "mediumExpA",
                        "id": "3872",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShardA",
                        "id": "9440",
                        "type": "bool"
                    },
                    {
                        "name": "interactedWithMourningMoki",
                        "id": "20733",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpA",
                        "id": "20780",
                        "type": "bool",
                        "pos": {
                            "x": 161,
                            "y": -4245
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "bombableDoor",
                        "id": "26623",
                        "type": "bool"
                    },
                    {
                        "name": "largeExpA",
                        "id": "29054",
                        "type": "bool",
                        "pos": {
                            "x": 113,
                            "y": -4229
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "leafPileA",
                        "id": "31447",
                        "type": "bool"
                    },
                    {
                        "name": "questRewardOrb",
                        "id": "31575",
                        "type": "bool"
                    },
                    {
                        "name": "bombableWallA",
                        "id": "34885",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA",
                        "id": "37897",
                        "type": "bool",
                        "pos": {
                            "x": 243,
                            "y": -4224
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "leafPileC",
                        "id": "56958",
                        "type": "bool"
                    },
                    {
                        "name": "wispRewardPickup",
                        "id": "59806",
                        "type": "bool"
                    }
                ]
            },
            "npcsStateGroup": {
                "id": "48248",
                "uberIDs": [
                    {
                        "name": "windtornRuinsWispTeaser",
                        "id": "1350",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapLumaPools",
                        "id": "1557",
                        "type": "bool",
                        "pos": {
                            "x": -1391,
                            "y": -4167
                        },
                        "icon": "LupoZoneMap",
                        "category": ""
                    },
                    {
                        "name": "hasMapWellspring",
                        "id": "1590",
                        "type": "bool",
                        "pos": {
                            "x": -1190,
                            "y": -3861
                        },
                        "icon": "LupoZoneMap",
                        "category": ""
                    },
                    {
                        "name": "lupoEncounteredWeepingRidge",
                        "id": "2253",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredWellspringGlades",
                        "id": "2285",
                        "type": "bool"
                    },
                    {
                        "name": "treekeeperBRetalk",
                        "id": "3492",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapKwoloksHollow",
                        "id": "3638",
                        "type": "bool",
                        "pos": {
                            "x": -146,
                            "y": -4321
                        },
                        "icon": "LupoZoneMap",
                        "category": ""
                    },
                    {
                        "name": "stenchTease",
                        "id": "3846",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapWillowsEnd",
                        "id": "4045",
                        "type": "bool",
                        "pos": {
                            "x": 474,
                            "y": -3859
                        },
                        "icon": "LupoZoneMap",
                        "category": ""
                    },
                    {
                        "name": "lupoEncounteredWellspringAfterQuest",
                        "id": "4306",
                        "type": "bool"
                    },
                    {
                        "name": "lupoWantsToTalkToYou",
                        "id": "4510",
                        "type": "bool"
                    },
                    {
                        "name": "tuleyMentionedSeed",
                        "id": "5060",
                        "type": "bool"
                    },
                    {
                        "name": "gromMentionedOre",
                        "id": "5186",
                        "type": "bool"
                    },
                    {
                        "name": "desertRuinsLoreWispE",
                        "id": "5269",
                        "type": "bool"
                    },
                    {
                        "name": "metOpherHubAfterWatermill",
                        "id": "5982",
                        "type": "bool"
                    },
                    {
                        "name": "twillenGaveRumor",
                        "id": "6194",
                        "type": "bool"
                    },
                    {
                        "name": "interactedWindsweptWastesCondition",
                        "id": "6730",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredSilentWoodlands",
                        "id": "6992",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredMouldwoodDepths",
                        "id": "7056",
                        "type": "bool"
                    },
                    {
                        "name": "desertRuinsLoreWispA",
                        "id": "7160",
                        "type": "bool"
                    },
                    {
                        "name": "gromTalkedAboutBaur",
                        "id": "7321",
                        "type": "bool"
                    },
                    {
                        "name": "gromGaveWarning",
                        "id": "7646",
                        "type": "bool"
                    },
                    {
                        "name": "willowsEndSeirExitCutscene",
                        "id": "8985",
                        "type": "bool"
                    },
                    {
                        "name": "metGrom",
                        "id": "9394",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapGorlekMines",
                        "id": "9750",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDepthWispTeaser",
                        "id": "11223",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredBaursReach",
                        "id": "12352",
                        "type": "bool"
                    },
                    {
                        "name": "desertRuinsLoreWispD",
                        "id": "13320",
                        "type": "bool"
                    },
                    {
                        "name": "interactedAfterWellOpened",
                        "id": "14878",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapWindtornRuins",
                        "id": "14995",
                        "type": "bool"
                    },
                    {
                        "name": "desertRuinsLoreWispB",
                        "id": "15833",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredWillowsEnd",
                        "id": "16157",
                        "type": "bool"
                    },
                    {
                        "name": "lumaPoolsWispSpotted",
                        "id": "18425",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapInkwaterMarsh",
                        "id": "18767",
                        "type": "bool",
                        "pos": {
                            "x": -589,
                            "y": -4348
                        },
                        "icon": "LupoZoneMap",
                        "category": ""
                    },
                    {
                        "name": "kiiWantsToTalkToYou",
                        "id": "19551",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredWellspringValley",
                        "id": "21009",
                        "type": "bool"
                    },
                    {
                        "name": "metOpherLibrary",
                        "id": "22890",
                        "type": "bool"
                    },
                    {
                        "name": "motayWantsToTalkToYou",
                        "id": "24328",
                        "type": "bool"
                    },
                    {
                        "name": "tokkWantsToTalkToYou",
                        "id": "25629",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredKwoloksHollow",
                        "id": "26627",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredGorlekMines",
                        "id": "27701",
                        "type": "bool"
                    },
                    {
                        "name": "tuleyWantsToTalkToYou",
                        "id": "28327",
                        "type": "bool"
                    },
                    {
                        "name": "windsweptWastesRuinsDoor",
                        "id": "28782",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapBaursReach",
                        "id": "29604",
                        "type": "bool",
                        "pos": {
                            "x": -275,
                            "y": -3996
                        },
                        "icon": "LupoZoneMap",
                        "category": ""
                    },
                    {
                        "name": "gromTalkedAboutLagoon",
                        "id": "30073",
                        "type": "bool"
                    },
                    {
                        "name": "interactedKwoloksCavern",
                        "id": "32549",
                        "type": "bool"
                    },
                    {
                        "name": "baurReachWispTease",
                        "id": "32918",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredWindsweptWastes",
                        "id": "34318",
                        "type": "bool"
                    },
                    {
                        "name": "twillenMournedKu",
                        "id": "34756",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredWindtornRuins",
                        "id": "35651",
                        "type": "bool"
                    },
                    {
                        "name": "mouldwoodDepthsWisptIntro",
                        "id": "37364",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapWeepingRidge",
                        "id": "37481",
                        "type": "bool"
                    },
                    {
                        "name": "treekeeperARetalk",
                        "id": "37606",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredUberState",
                        "id": "40170",
                        "type": "bool"
                    },
                    {
                        "name": "baurReachWispIntro",
                        "id": "40451",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredBaursReachAfterThaw",
                        "id": "41206",
                        "type": "bool"
                    },
                    {
                        "name": "tokkIntroduced",
                        "id": "42584",
                        "type": "bool"
                    },
                    {
                        "name": "gromWantsToTalkToYou",
                        "id": "43860",
                        "type": "bool"
                    },
                    {
                        "name": "desertRuinsLoreWispF",
                        "id": "44446",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapHowlsOrigin",
                        "id": "45538",
                        "type": "bool",
                        "pos": {
                            "x": -870,
                            "y": -4555
                        },
                        "icon": "LupoZoneMap",
                        "category": ""
                    },
                    {
                        "name": "willowsEndSeirIntro",
                        "id": "45600",
                        "type": "bool"
                    },
                    {
                        "name": "interactedBeforeMill",
                        "id": "45664",
                        "type": "bool"
                    },
                    {
                        "name": "gromTalkedAboutDesert",
                        "id": "45751",
                        "type": "bool"
                    },
                    {
                        "name": "gromTalkedAboutMouldwoodGate",
                        "id": "46471",
                        "type": "bool"
                    },
                    {
                        "name": "opherMentiodedWatermill",
                        "id": "46745",
                        "type": "bool"
                    },
                    {
                        "name": "gromInteractedOnce",
                        "id": "46863",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapWellspringValley",
                        "id": "47517",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredHowlsOrigin",
                        "id": "47546",
                        "type": "bool"
                    },
                    {
                        "name": "feedingGroundsWispIntro",
                        "id": "47785",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapMouldwoodDepths",
                        "id": "48423",
                        "type": "bool",
                        "pos": {
                            "x": 682,
                            "y": -4576
                        },
                        "icon": "LupoZoneMap",
                        "category": ""
                    },
                    {
                        "name": "lupoEncounteredInkwaterMarsh",
                        "id": "48619",
                        "type": "bool"
                    },
                    {
                        "name": "interactedBeforeKwolok",
                        "id": "50408",
                        "type": "bool"
                    },
                    {
                        "name": "opherWantsToTalkToYou",
                        "id": "51005",
                        "type": "bool"
                    },
                    {
                        "name": "desertRuinsLoreWispC",
                        "id": "52065",
                        "type": "bool"
                    },
                    {
                        "name": "metMotay",
                        "id": "53028",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapWellspringGlades",
                        "id": "54647",
                        "type": "bool"
                    },
                    {
                        "name": "gromTalkedAboutWatermill",
                        "id": "54806",
                        "type": "bool"
                    },
                    {
                        "name": "metOpherHubBeforeWatermill",
                        "id": "55122",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredLumaPools",
                        "id": "55617",
                        "type": "bool"
                    },
                    {
                        "name": "metOpherHub",
                        "id": "56448",
                        "type": "bool"
                    },
                    {
                        "name": "twilenWantsToTalkToYou",
                        "id": "60805",
                        "type": "bool"
                    },
                    {
                        "name": "hasMapWindsweptWastes",
                        "id": "61146",
                        "type": "bool",
                        "pos": {
                            "x": 1647,
                            "y": -3899
                        },
                        "icon": "LupoZoneMap",
                        "category": ""
                    },
                    {
                        "name": "hasMapSilentWoodlands",
                        "id": "61819",
                        "type": "bool"
                    },
                    {
                        "name": "lupoEncounteredWellspring",
                        "id": "61868",
                        "type": "bool"
                    },
                    {
                        "name": "tokkLagoonDialogState",
                        "id": "2131",
                        "type": "int"
                    },
                    {
                        "name": "talkedInHub",
                        "id": "10337",
                        "type": "int"
                    },
                    {
                        "name": "twillenHubDialogState",
                        "id": "12799",
                        "type": "int"
                    },
                    {
                        "name": "inkwaterWellQuest",
                        "id": "18458",
                        "type": "int"
                    },
                    {
                        "name": "twillenKwolokDialogState",
                        "id": "25267",
                        "type": "int"
                    },
                    {
                        "name": "watermillCEntranceInteraction",
                        "id": "26696",
                        "type": "int"
                    },
                    {
                        "name": "childMokiDialogState",
                        "id": "28897",
                        "type": "int"
                    },
                    {
                        "name": "wandererNeedleQuest",
                        "id": "32160",
                        "type": "int"
                    },
                    {
                        "name": "tokkKwolokDialogState",
                        "id": "33981",
                        "type": "int"
                    },
                    {
                        "name": "frozenMokiDialogState",
                        "id": "42865",
                        "type": "int"
                    },
                    {
                        "name": "marshKeystoneQuest",
                        "id": "51645",
                        "type": "int"
                    },
                    {
                        "name": "iceFisherDialogState",
                        "id": "54962",
                        "type": "int"
                    },
                    {
                        "name": "mouldwoodMokiDialogState",
                        "id": "57674",
                        "type": "int"
                    },
                    {
                        "name": "lupoIntroState",
                        "id": "62835",
                        "type": "int"
                    },
                    {
                        "name": "tokkState",
                        "id": "15642",
                        "type": "byte"
                    },
                    {
                        "name": "fastTravelEnabledUberState",
                        "id": "16489",
                        "type": "byte"
                    },
                    {
                        "name": "mapmakerShowMapIconEnergyUberState",
                        "id": "19396",
                        "type": "byte"
                    },
                    {
                        "name": "ShowMapIconCreepheartUberState",
                        "id": "38077",
                        "type": "byte"
                    },
                    {
                        "name": "mapmakerShowMapIconShardUberState",
                        "id": "41666",
                        "type": "byte"
                    },
                    {
                        "name": "mapmakerShowMapIconHealthUberState",
                        "id": "57987",
                        "type": "byte"
                    }
                ]
            },
            "wellspringGroupDescriptor": {
                "id": "53632",
                "uberIDs": [
                    {
                        "name": "energyVesselA",
                        "id": "1911",
                        "type": "bool",
                        "pos": {
                            "x": -735,
                            "y": -3989
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "lanternAndCreepA",
                        "id": "2522",
                        "type": "bool"
                    },
                    {
                        "name": "pushBlockPuzzleA",
                        "id": "3195",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallB",
                        "id": "3382",
                        "type": "bool",
                        "pos": {
                            "x": -740,
                            "y": -3988
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "leafPileA",
                        "id": "3622",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpOrbPlaceholderG",
                        "id": "6500",
                        "type": "bool",
                        "pos": {
                            "x": -898,
                            "y": -4071
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "energyVesselB",
                        "id": "6869",
                        "type": "bool",
                        "pos": {
                            "x": -857,
                            "y": -4116
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "secretWallC",
                        "id": "9366",
                        "type": "bool",
                        "pos": {
                            "x": -1093,
                            "y": -3949
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "mediumExpA",
                        "id": "12019",
                        "type": "bool",
                        "pos": {
                            "x": -515,
                            "y": -4103
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "lifeVesselA",
                        "id": "17403",
                        "type": "bool",
                        "pos": {
                            "x": -877,
                            "y": -3962
                        },
                        "icon": "Health Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 0
                    },
                    {
                        "name": "orePickupA",
                        "id": "21124",
                        "type": "bool",
                        "pos": {
                            "x": -761,
                            "y": -4094
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "smallExpA",
                        "id": "21790",
                        "type": "bool"
                    },
                    {
                        "name": "wispSequencePlayed",
                        "id": "22486",
                        "type": "bool"
                    },
                    {
                        "name": "orePickupB",
                        "id": "25556",
                        "type": "bool",
                        "pos": {
                            "x": -738,
                            "y": -4018
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "secretWallA",
                        "id": "25817",
                        "type": "bool"
                    },
                    {
                        "name": "leafPileA1",
                        "id": "32197",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbG",
                        "id": "32785",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShard",
                        "id": "33168",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallB1",
                        "id": "40587",
                        "type": "bool"
                    },
                    {
                        "name": "questItemCompass",
                        "id": "41227",
                        "type": "bool",
                        "pos": {
                            "x": -1186,
                            "y": -3697
                        },
                        "icon": "Needle",
                        "category": ""
                    },
                    {
                        "name": "mediumExpOrbPlaceholderF",
                        "id": "42264",
                        "type": "bool",
                        "pos": {
                            "x": -850,
                            "y": -4024
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "mediumExpOrbPlaceholderE",
                        "id": "51706",
                        "type": "bool",
                        "pos": {
                            "x": -745,
                            "y": -3942
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "secretWallA1",
                        "id": "51735",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbUberState",
                        "id": "54915",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpA1",
                        "id": "56829",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallA2",
                        "id": "58126",
                        "type": "bool"
                    },
                    {
                        "name": "rotatingWheel",
                        "id": "61074",
                        "type": "bool"
                    },
                    {
                        "name": "spiritShardA",
                        "id": "61128",
                        "type": "bool"
                    },
                    {
                        "name": "mediumExpOrbPlaceholderC",
                        "id": "62356",
                        "type": "bool",
                        "pos": {
                            "x": -825,
                            "y": -4086
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "secretWallA3",
                        "id": "62781",
                        "type": "bool",
                        "pos": {
                            "x": -968,
                            "y": -4042
                        },
                        "icon": "Breakable Stone Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "secretWallA4",
                        "id": "64763",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestal",
                        "id": "14947",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "18181",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestal1",
                        "id": "53974",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState1",
                        "id": "63074",
                        "type": "teleporter"
                    },
                    {
                        "name": "showDoorCutsceneState",
                        "id": "26178",
                        "type": "byte"
                    }
                ]
            },
            "prologueGroup": {
                "id": "54846",
                "uberIDs": [
                    {
                        "name": "areaText",
                        "id": "27125",
                        "type": "bool"
                    }
                ]
            },
            "_petrifiedForestGroup": {
                "id": "58674",
                "uberIDs": [
                    {
                        "name": "xpOrbA",
                        "id": "193",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbA",
                        "id": "595",
                        "type": "bool"
                    },
                    {
                        "name": "keyStoneD",
                        "id": "780",
                        "type": "bool",
                        "pos": {
                            "x": 929,
                            "y": -4185
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "creepBlocker",
                        "id": "902",
                        "type": "bool",
                        "pos": {
                            "x": 1055,
                            "y": -4100
                        },
                        "icon": "Creep",
                        "category": "mapIcon"
                    },
                    {
                        "name": "keystoneDUberState",
                        "id": "1816",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneBUberState",
                        "id": "2169",
                        "type": "bool"
                    },
                    {
                        "name": "keyStoneA",
                        "id": "2227",
                        "type": "bool"
                    },
                    {
                        "name": "areaText",
                        "id": "2317",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloorA",
                        "id": "2797",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloorB",
                        "id": "3577",
                        "type": "bool"
                    },
                    {
                        "name": "blowableFlameA",
                        "id": "5285",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbUberState",
                        "id": "6936",
                        "type": "bool"
                    },
                    {
                        "name": "petrifiedOwlStalkSequenceCompleted",
                        "id": "7636",
                        "type": "bool"
                    },
                    {
                        "name": "CollectibleXpA",
                        "id": "8487",
                        "type": "bool",
                        "pos": {
                            "x": 514,
                            "y": -4185
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "drillableWallA",
                        "id": "8810",
                        "type": "bool"
                    },
                    {
                        "name": "leafPileB",
                        "id": "9239",
                        "type": "bool",
                        "pos": {
                            "x": 951,
                            "y": -4168
                        },
                        "icon": "Leafpile",
                        "category": "mapIcon"
                    },
                    {
                        "name": "energyContainerA",
                        "id": "9583",
                        "type": "bool",
                        "pos": {
                            "x": 331,
                            "y": -4192
                        },
                        "icon": "Energy Half",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 1
                    },
                    {
                        "name": "expOrbC",
                        "id": "9881",
                        "type": "bool"
                    },
                    {
                        "name": "narratorLineShownHowl",
                        "id": "10677",
                        "type": "bool"
                    },
                    {
                        "name": "blowableFlameA1",
                        "id": "10685",
                        "type": "bool"
                    },
                    {
                        "name": "leafPile",
                        "id": "10877",
                        "type": "bool",
                        "pos": {
                            "x": 948,
                            "y": -4210
                        },
                        "icon": "Leafpile",
                        "category": "mapIcon"
                    },
                    {
                        "name": "stompableFloor",
                        "id": "11400",
                        "type": "bool",
                        "pos": {
                            "x": -343,
                            "y": -4233
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "keyStoneC",
                        "id": "11736",
                        "type": "bool",
                        "pos": {
                            "x": 641,
                            "y": -4166
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "hutDoorUnlocked",
                        "id": "14313",
                        "type": "bool"
                    },
                    {
                        "name": "powlVignettePlayed",
                        "id": "14539",
                        "type": "bool"
                    },
                    {
                        "name": "mediumPickupB",
                        "id": "14590",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallA",
                        "id": "14593",
                        "type": "bool"
                    },
                    {
                        "name": "displayedGlideHint",
                        "id": "14912",
                        "type": "bool"
                    },
                    {
                        "name": "playedEpilogue",
                        "id": "15269",
                        "type": "bool"
                    },
                    {
                        "name": "keyStoneB",
                        "id": "17420",
                        "type": "bool"
                    },
                    {
                        "name": "blowableFlame",
                        "id": "17742",
                        "type": "bool"
                    },
                    {
                        "name": "smallPickupA",
                        "id": "17974",
                        "type": "bool",
                        "pos": {
                            "x": 904,
                            "y": -4075
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "lifeCellUberState",
                        "id": "18735",
                        "type": "bool"
                    },
                    {
                        "name": "mediumPickupA",
                        "id": "18924",
                        "type": "bool"
                    },
                    {
                        "name": "keyStoneB1",
                        "id": "19769",
                        "type": "bool",
                        "pos": {
                            "x": 908,
                            "y": -4120
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "leafPile1",
                        "id": "20143",
                        "type": "bool",
                        "pos": {
                            "x": 967,
                            "y": -4142
                        },
                        "icon": "Leafpile",
                        "category": "mapIcon"
                    },
                    {
                        "name": "gorlekOreA",
                        "id": "20713",
                        "type": "bool",
                        "pos": {
                            "x": 1011,
                            "y": -4070
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "boolean_gasBallBridge",
                        "id": "20724",
                        "type": "bool"
                    },
                    {
                        "name": "keystoneCUberState",
                        "id": "20944",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbA1",
                        "id": "20983",
                        "type": "bool",
                        "pos": {
                            "x": 289,
                            "y": -4196
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "leverGateA",
                        "id": "21139",
                        "type": "bool"
                    },
                    {
                        "name": "narratorLineShriekAttackShown",
                        "id": "21385",
                        "type": "bool"
                    },
                    {
                        "name": "doorState",
                        "id": "21500",
                        "type": "bool"
                    },
                    {
                        "name": "narratorLineShown",
                        "id": "22056",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA1",
                        "id": "22472",
                        "type": "bool",
                        "pos": {
                            "x": 485,
                            "y": -4165
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "xpOrbUberState1",
                        "id": "22503",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbA2",
                        "id": "23186",
                        "type": "bool",
                        "pos": {
                            "x": 941,
                            "y": -4185
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "lagoonBreakableFloor",
                        "id": "24457",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbA2",
                        "id": "24911",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA1",
                        "id": "26274",
                        "type": "bool",
                        "pos": {
                            "x": 988,
                            "y": -4172
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "shardSlotA",
                        "id": "26282",
                        "type": "bool"
                    },
                    {
                        "name": "smallExpOrbA",
                        "id": "26639",
                        "type": "bool"
                    },
                    {
                        "name": "gorlekOreA2",
                        "id": "28710",
                        "type": "bool",
                        "pos": {
                            "x": 411,
                            "y": -4174
                        },
                        "icon": "Ore",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 2
                    },
                    {
                        "name": "narrationPetrifiedOwlStalk",
                        "id": "29035",
                        "type": "bool"
                    },
                    {
                        "name": "shardSlotUpgradePlaceholder",
                        "id": "29265",
                        "type": "bool",
                        "pos": {
                            "x": 1361,
                            "y": -4064
                        },
                        "icon": "Shard Slot",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 4
                    },
                    {
                        "name": "stompableFloor1",
                        "id": "29622",
                        "type": "bool"
                    },
                    {
                        "name": "shardPickupA",
                        "id": "30377",
                        "type": "bool"
                    },
                    {
                        "name": "areaText1",
                        "id": "30897",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbC1",
                        "id": "30908",
                        "type": "bool",
                        "pos": {
                            "x": 968,
                            "y": -4142
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "powlVignettePlayed1",
                        "id": "32369",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbA3",
                        "id": "32647",
                        "type": "bool",
                        "pos": {
                            "x": 1406,
                            "y": -4065
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "expOrbD",
                        "id": "33893",
                        "type": "bool",
                        "pos": {
                            "x": 951,
                            "y": -4168
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "breakableWallA",
                        "id": "33965",
                        "type": "bool"
                    },
                    {
                        "name": "diggableWallA",
                        "id": "34799",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbB",
                        "id": "36199",
                        "type": "bool"
                    },
                    {
                        "name": "floatZoneState",
                        "id": "36832",
                        "type": "bool"
                    },
                    {
                        "name": "featherVignettePlayed",
                        "id": "36965",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbB1",
                        "id": "37006",
                        "type": "bool"
                    },
                    {
                        "name": "leafPile2",
                        "id": "37037",
                        "type": "bool",
                        "pos": {
                            "x": 484,
                            "y": -4164
                        },
                        "icon": "Leafpile",
                        "category": "mapIcon"
                    },
                    {
                        "name": "lifeCellUberState1",
                        "id": "37128",
                        "type": "bool"
                    },
                    {
                        "name": "stompableFloorC",
                        "id": "37636",
                        "type": "bool"
                    },
                    {
                        "name": "mokiCleanWaterVignetteTriggered",
                        "id": "37811",
                        "type": "bool"
                    },
                    {
                        "name": "expOrb",
                        "id": "37885",
                        "type": "bool"
                    },
                    {
                        "name": "shardA",
                        "id": "38285",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallA1",
                        "id": "39950",
                        "type": "bool",
                        "pos": {
                            "x": 984,
                            "y": -4174
                        },
                        "icon": "Breakable Stick Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "boolean_skeletonBoneA",
                        "id": "40066",
                        "type": "bool"
                    },
                    {
                        "name": "keyStoneD1",
                        "id": "40073",
                        "type": "bool",
                        "pos": {
                            "x": 690,
                            "y": -4189
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "mokiFoulWaterVignetteTriggered",
                        "id": "41644",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbC2",
                        "id": "42158",
                        "type": "bool",
                        "pos": {
                            "x": 948,
                            "y": -4210
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "keyStoneA1",
                        "id": "42531",
                        "type": "bool",
                        "pos": {
                            "x": 886,
                            "y": -4123
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "keyStoneC1",
                        "id": "43033",
                        "type": "bool",
                        "pos": {
                            "x": 956,
                            "y": -4148
                        },
                        "icon": "Keystone",
                        "category": "mapIcon",
                        "pickupType": 1,
                        "uberValue": 3
                    },
                    {
                        "name": "keystoneAUberState",
                        "id": "44215",
                        "type": "bool"
                    },
                    {
                        "name": "creepA",
                        "id": "44324",
                        "type": "bool",
                        "pos": {
                            "x": 826,
                            "y": -4079
                        },
                        "icon": "Creep",
                        "category": "mapIcon"
                    },
                    {
                        "name": "escapeRocks",
                        "id": "44864",
                        "type": "bool"
                    },
                    {
                        "name": "collapsingSkeletonA",
                        "id": "46547",
                        "type": "bool"
                    },
                    {
                        "name": "petrifiedForestNewTransitionOriVignettePlayed",
                        "id": "46980",
                        "type": "bool"
                    },
                    {
                        "name": "setupDownB",
                        "id": "47179",
                        "type": "bool"
                    },
                    {
                        "name": "breakableGroundA",
                        "id": "47751",
                        "type": "bool"
                    },
                    {
                        "name": "creebBulb",
                        "id": "48394",
                        "type": "bool",
                        "pos": {
                            "x": 1005,
                            "y": -4042
                        },
                        "icon": "Creep",
                        "category": "mapIcon"
                    },
                    {
                        "name": "creepBall",
                        "id": "49272",
                        "type": "bool",
                        "pos": {
                            "x": 908,
                            "y": -4121
                        },
                        "icon": "Creep",
                        "category": "mapIcon"
                    },
                    {
                        "name": "expOrbA4",
                        "id": "49535",
                        "type": "bool"
                    },
                    {
                        "name": "boolean_skeletonBoneC",
                        "id": "50410",
                        "type": "bool"
                    },
                    {
                        "name": "boolean_skeletonBoneB",
                        "id": "51501",
                        "type": "bool"
                    },
                    {
                        "name": "shownHint",
                        "id": "51890",
                        "type": "bool"
                    },
                    {
                        "name": "secretWallA2",
                        "id": "52280",
                        "type": "bool"
                    },
                    {
                        "name": "patrifiedForestBreakableFloor",
                        "id": "52345",
                        "type": "bool"
                    },
                    {
                        "name": "mediumPickupC",
                        "id": "54516",
                        "type": "bool",
                        "pos": {
                            "x": 936,
                            "y": -4044
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "stompableFloor2",
                        "id": "54560",
                        "type": "bool"
                    },
                    {
                        "name": "breakableWall",
                        "id": "54686",
                        "type": "bool",
                        "pos": {
                            "x": 906,
                            "y": -4146
                        },
                        "icon": "Bombable Wall",
                        "category": "mapIcon"
                    },
                    {
                        "name": "expOrbA5",
                        "id": "55650",
                        "type": "bool"
                    },
                    {
                        "name": "enemyRoom",
                        "id": "56043",
                        "type": "bool"
                    },
                    {
                        "name": "wispCutscenePlayed",
                        "id": "58268",
                        "type": "bool"
                    },
                    {
                        "name": "shownFlapEnemyHint",
                        "id": "58684",
                        "type": "bool"
                    },
                    {
                        "name": "xpOrbB",
                        "id": "59372",
                        "type": "bool"
                    },
                    {
                        "name": "CollectibleXPB",
                        "id": "59691",
                        "type": "bool",
                        "pos": {
                            "x": 628,
                            "y": -4156
                        },
                        "icon": "Small Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 50
                    },
                    {
                        "name": "expOrbD1",
                        "id": "59714",
                        "type": "bool",
                        "pos": {
                            "x": 1069,
                            "y": -4099
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "skeletonState",
                        "id": "61252",
                        "type": "bool",
                        "pos": {
                            "x": 1009,
                            "y": -4135
                        },
                        "icon": "Bird Skull",
                        "category": "mapIcon"
                    },
                    {
                        "name": "setupDownA",
                        "id": "61327",
                        "type": "bool"
                    },
                    {
                        "name": "stomableFloorB",
                        "id": "61391",
                        "type": "bool"
                    },
                    {
                        "name": "breakableHiddenWall",
                        "id": "61577",
                        "type": "bool"
                    },
                    {
                        "name": "clothBroken",
                        "id": "63837",
                        "type": "bool"
                    },
                    {
                        "name": "expOrbA6",
                        "id": "64057",
                        "type": "bool",
                        "pos": {
                            "x": 968,
                            "y": -4124
                        },
                        "icon": "Medium Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 100
                    },
                    {
                        "name": "expOrb1",
                        "id": "64484",
                        "type": "bool",
                        "pos": {
                            "x": 1464,
                            "y": -4008
                        },
                        "icon": "Large Experience",
                        "category": "pickup",
                        "pickupType": 0,
                        "uberValue": 200
                    },
                    {
                        "name": "secretWallA3",
                        "id": "64690",
                        "type": "bool"
                    },
                    {
                        "name": "stomableFloorA",
                        "id": "65519",
                        "type": "bool"
                    },
                    {
                        "name": "savePedestalA",
                        "id": "1965",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState",
                        "id": "7071",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState1",
                        "id": "10029",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState2",
                        "id": "10997",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState3",
                        "id": "11221",
                        "type": "teleporter"
                    },
                    {
                        "name": "savePedestalUberState4",
                        "id": "36061",
                        "type": "teleporter"
                    },
                    {
                        "name": "chaseState",
                        "id": "32810",
                        "type": "int"
                    },
                    {
                        "name": "petrifiedForestNewTransitionKuVignettePlayed",
                        "id": "44798",
                        "type": "int"
                    },
                    {
                        "name": "petrifiedOwlClothState",
                        "id": "45819",
                        "type": "int"
                    },
                    {
                        "name": "petrifiedOwlState",
                        "id": "61616",
                        "type": "int"
                    }
                ]
            },
            "shrineGroup": {
                "id": "61306",
                "uberIDs": [
                    {
                        "name": "shrineLaser",
                        "id": "2129",
                        "type": "bool"
                    },
                    {
                        "name": "shrineProjectile",
                        "id": "2239",
                        "type": "bool"
                    },
                    {
                        "name": "shrineMouldwoodDepths",
                        "id": "18888",
                        "type": "bool"
                    },
                    {
                        "name": "shrineHammer",
                        "id": "26590",
                        "type": "bool"
                    },
                    {
                        "name": "shrinePortal",
                        "id": "40441",
                        "type": "bool"
                    },
                    {
                        "name": "shrineTeleport",
                        "id": "52344",
                        "type": "bool"
                    },
                    {
                        "name": "shrineOfFall",
                        "id": "56122",
                        "type": "bool"
                    }
                ]
            },
            "spiderGroupDescriptor": {
                "id": "61314",
                "uberIDs": [
                    {
                        "name": "spiderlingsQuestUberState",
                        "id": "55764",
                        "type": "int"
                    },
                    {
                        "name": "spiderNpcState",
                        "id": "61458",
                        "type": "int"
                    }
                ]
            },
            "testUberStateGroupDescriptor": {
                "id": "63018",
                "uberIDs": [
                    {
                        "name": "floatUberStateDescriptor",
                        "id": "22925",
                        "type": "int"
                    }
                ]
            },
            "pickupOnSpawnGroup": {
                "id": 3,
                "uberIDs": []
            },
            "twillenShopDontWorry": {
                "id": 2,
                "uberIDs": []
            },
            "opherShopDontWorry": {
                "id": 1,
                "uberIDs": []
            },
            "treesDontWorry": {
                "id": 0,
                "uberIDs": []
            }
        }

        this.uberIDMapGameReverse = {};

        this.createReverseMaps();

        //generates a seed object in the console
        /*var request = new XMLHttpRequest();
        request.open('GET', '/beta/modules/test2.txt', false);
        request.send();
        var textfileContent = request.responseText;

        var array1 = textfileContent.split(/\r?\n/);

        for (var i = 0; i < array1.length; i++) {
            var seedLine = array1[i].split(',');

            var ubergroupid = this.uberGroupIDReverse[seedLine[5].trim()];
            var uberid = this.uberIDReverse[seedLine[7].trim()];
            console.log(this.getGameUberIDUsing(ubergroupid, seedLine[7].trim(), 'id'), this.seedLocationToPos2[seedLine[0].trim()]);

            if (this.getGameUberIDUsing(ubergroupid, seedLine[7].trim(), 'id') !== false && this.seedLocationToPos2[seedLine[0].trim()] !== undefined) {
                var tempSeed = this.getGameUberIDUsing(ubergroupid, seedLine[7].trim(), 'id');
                var tempAdd = this.seedLocationToPos2[seedLine[0].trim()];

                tempSeed.pos = { x: parseFloat(tempAdd.x), y: parseFloat(tempAdd.y) };
                tempSeed.icon = tempAdd.icon;
                tempSeed.category = tempAdd.category;
                var tempP = seedLine[2].trim().split('.');
                tempSeed.pickupType = this.PickupType[tempP[1]];

                switch (tempSeed.pickupType) {
                    case 0:
                        tempSeed.uberValue = parseFloat(seedLine[3].trim());
                        if (seedLine[3].trim().replace(/ /g, '') === '50') tempSeed.icon = 'Small Experience';
                        if (seedLine[3].trim().replace(/ /g, '') === '100') tempSeed.icon = 'Medium Experience';
                        if (seedLine[3].trim().replace(/ /g, '') === '200') tempSeed.icon = 'Large Experience';
                        break;
                    case 1:
                        if (seedLine[3].trim().replace(/ /g, '') === 'Ore') tempSeed.uberValue = 2;
                        if (seedLine[3].trim().replace(/ /g, '') === 'Life') tempSeed.uberValue = 0;
                        if (seedLine[3].trim().replace(/ /g, '') === 'Energy') tempSeed.uberValue = 1;
                        if (seedLine[3].trim().replace(/ /g, '') === 'ShardSlot') tempSeed.uberValue = 4;
                        if (seedLine[3].trim().replace(/ /g, '') === 'Keystone') tempSeed.uberValue = 3;
                        break;
                    case 2:
                        tempSeed.uberValue = this.AbilityType[seedLine[3].trim()];
                        break;
                    case 3:
                        tempSeed.uberValue = this.ShardType[seedLine[3].trim()];
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    case 8:
                        break;
                    case 9:
                        break;
                }
            }
        }
        console.log(this.uberIDMapGame);*/

        /*this.createSeedMap(textfileContent);*/

        /*var request = new XMLHttpRequest();
        request.open('GET', '/beta/modules/uberState.txt', false);
        request.send();
        var textfileContent = request.responseText;
        
        var newUberShit = {}
        var array = textfileContent.split(/\r?\n/);
        
        var currentGroup;
        for (var i = 0; i < array.length; i++) {
            if (array[i] !== '') {
                if (array[i].startsWith('	') === false) {
                    var sss = array[i].split(' ');
                    newUberShit[sss[0]] = {};
                    newUberShit[sss[0]].id = sss[1].replace('[', '').replace(']', '');
                    newUberShit[sss[0]].uberIDs = [];
                    currentGroup = sss[0];
                } else if (array[i].startsWith('	')) {
                    var sss = array[i].split(' ');
                    var ubertype;
        
                    if (sss[2] === 'False' || sss[2] === 'True') {
                        ubertype = 'boolean';
                    } else if (sss[2] === 'Moon.uberSerializationWisp.SavePedestalUberState+PedestalState') {
                        ubertype = 'teleporter';
                    } else if (Number.isInteger(parseFloat(sss[2]))) {
                        ubertype = 'int';
                    } else {
                        ubertype = 'float';
                    }
        
                    newUberShit[currentGroup].uberIDs.push({ name: sss[0].replace('	', ''), id: sss[1].replace('[', '').replace(']', ''), type: ubertype });
                }
            }
        }
        console.log(newUberShit);*/

        /*var request = new XMLHttpRequest();
        request.open('GET', '/beta/modules/test3.txt', false);
        request.send();
        var textfileContent = request.responseText;*/

        this.loadSeed('');
        this.createHTML();
        this.createSeedEditorHTML();

        /*var keys2 = Object.keys(this.uberIDMapGame);
        var ubergroupidsauto = [];
        var ubergroupidsdict = [];
        var uberidsauto = {};
        var uberidsdict = {};
        var classnew = "public static Dictionary<string, UberIDGroup> UberStates = new Dictionary<string, UberIDGroup> {";

        for (var i = 0; i < keys2.length; i++) {
            ubergroupidsauto.push(keys2[i]);
            ubergroupidsdict.push('{"' + keys2[i] + '",' + this.uberIDMapGame[keys2[i]].id + '}');
            classnew += "\r\n" + '["' + keys2[i] + '"] = new UberIDGroup(new Dictionary<string, UberID> {';
            var uberids = this.uberIDMapGame[keys2[i]].uberIDs;

            for (var i2 = 0; i2 < uberids.length; i2++) {
                classnew += "\r\n" + '["' + uberids[i2].name + '"] = new UberID("' + uberids[i2].name + '", ' + uberids[i2].id + ', "' + uberids[i2].type + '"),';

                if (uberidsauto[keys2[i]] === undefined) {
                    uberidsauto[keys2[i]] = [];
                }
                uberidsauto[keys2[i]].push('new UberID("' + uberids[i2].name + '", ' + uberids[i2].id + ', "' + uberids[i2].type + '")');
            }

            classnew += "\r\n" + '}, "' + keys2[i] + '", ' + this.uberIDMapGame[keys2[i]].id + '),';
        }
        console.log(ubergroupidsauto, ubergroupidsdict, uberidsauto, classnew);*/

        /*var uberstring = "public static Dictionary<int, string> uberidmap = new Dictionary<int, string>() {";
        var keys2 = Object.keys(this.uberIDMapGameReverse);
        for (var i = 0; i < keys2.length; i++) {
            uberstring += "\r" + "[" + keys2[i] + "] = " + '"' + this.uberIDMapGameReverse[keys2[i]].id + '"';//new Dictionary<int, string>() {";
            /*var keys3 = Object.keys(this.uberIDMapGameReverse[keys2[i]].uberIDs);

            for (var i2 = 0; i2 < keys3.length; i2++) {
                uberstring += "\r\n" + "[" + keys3[i2] + "] = " + '"' + this.uberIDMapGameReverse[keys2[i]].uberIDs[keys3[i2]] + '",';
            }*/

            /*uberstring += ",";
        }

        console.log(uberstring);*/
    }

    /*
    creates reverse objects of all the objects that will be used
    for when exporting a seed file
    */
    createReverseMaps() {
        var keys = Object.keys(this.PickupType);
        this.PickupTypeReverse = {};
        for (var i = 0; i < keys.length; i++) {
            this.PickupTypeReverse[this.PickupType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.SysCommandType);
        this.SysCommandTypeReverse = {};
        for (var i = 0; i < keys.length; i++) {
            this.SysCommandTypeReverse[this.SysCommandType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.TeleporterType);
        this.TeleporterTypeReverse = {};
        for (var i = 0; i < keys.length; i++) {
            this.TeleporterTypeReverse[this.TeleporterType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.ResourceType);
        this.ResourceTypeReverse = {};
        for (var i = 0; i < keys.length; i++) {
            this.ResourceTypeReverse[this.ResourceType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.LocType);
        this.LocTypeReverse = {};
        for (var i = 0; i < keys.length; i++) {
            this.LocTypeReverse[this.LocType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.AbilityType);
        this.AbilityTypeReverse = {};
        for (var i = 0; i < keys.length; i++) {
            this.AbilityTypeReverse[this.AbilityType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.ShardType);
        this.ShardTypeReverse = {};
        for (var i = 0; i < keys.length; i++) {
            this.ShardTypeReverse[this.ShardType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.uberGroupID);
        this.uberGroupIDReverse = {};
        for (var i = 0; i < keys.length; i++) {
            this.uberGroupIDReverse[this.uberGroupID[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.uberID);
        this.uberIDReverse = {};
        for (var i = 0; i < keys.length; i++) {
            this.uberIDReverse[this.uberID[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.QuestEventType);
        this.QuestEventTypeReverse = {};
        for (var i = 0; i < keys.length; i++) {
            this.QuestEventTypeReverse[this.QuestEventType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.uberIDMapGame);
        for (var i = 0; i < keys.length; i++) {
            this.uberIDMapGameReverse[this.uberIDMapGame[keys[i]].id] = {};
            this.uberIDMapGameReverse[this.uberIDMapGame[keys[i]].id].id = keys[i];
            this.uberIDMapGameReverse[this.uberIDMapGame[keys[i]].id].uberIDs = {};

            if (this.uberIDMapGame[keys[i]].uberIDs !== undefined) {
                for (var i2 = 0; i2 < this.uberIDMapGame[keys[i]].uberIDs.length; i2++) {
                    var itemTemp = this.uberIDMapGame[keys[i]].uberIDs[i2];
                    this.uberIDMapGameReverse[this.uberIDMapGame[keys[i]].id].uberIDs[itemTemp.id] = itemTemp.name;
                }
            }
        }
    }

    /**
    * generates the this.uberIDToMapID objects based on wotwrouter icons
    * will be used to refactor wotwrouter icons later on too use uberID instead
    * of numbered. Currently used to get 
    */
    posToSeedLocation(icons) {
        var keys = Object.keys(this.seedLocationToPos2);
        var test = {};

        for (var i = 0; i < icons.length; i++) {
            var pos = { x: parseFloat(icons[i].x), y: parseFloat(icons[i].y) };
            for (var i2 = 0; i2 < keys.length; i2++) {
                var testPos = this.mapClass.inGameToMapCoord({ x: this.seedLocationToPos2[keys[i2]].x, y: this.seedLocationToPos2[keys[i2]].y });
                var dist = distance(pos, testPos);
                if (dist <= 15) {
                    if (icons[i].category === 'mapIcon') {
                        if (icons[i].iconName !== 'Health Half' && icons[i].iconName !== 'Energy Half' && icons[i].iconName !== 'Ore' && icons[i].iconName !== 'Keystone') {
                            break;
                        }
                    }
                    icons[i].uberID = keys[i2];
                    test[keys[i2]] = i;
                }
            }
        }
        return icons;
    }

    /**
    * was intended to merge seed data with wotwrouter data,
    * bad idea better to refactor wotwrouter data to utilize
    * uberID's
    */
    mergeSeedIconsMapIcons(icons) {
        var keysGroups = Object.keys(this.seedItems);

        for (var i = 0; i < keysGroups.length; i++) {
            var group = this.seedItems[keysGroups[i]],
                keysUber = Object.keys(group);

            for (var i2 = 0; i2 < keysUber.length; i2++) {
                item = group[keysUber[i2]];

                if (this.uberIDToMapID[item.uberID] !== undefined) {
                    icons[this.uberIDToMapID[item.uberID]].iconName = item.mapIcon;
                    icons[this.uberIDToMapID[item.uberID]].category = item.mapCategory;
                    //icons[this.uberIDToMapID[item.uberID]].icon = item.resourceType + ' ' + item.item;
                }
            }
        }
    }

    createHTML() {
        var dropdown = document.createElement('div'),
            dropdownLabel = document.createElement('label'),
            dropdownContainer = document.createElement('div'),
            dropdownIconContainer = document.createElement('div'),
            dropdownExportButton = document.createElement('button'),
            dropdownImportInput = document.createElement('input');

        dropdown.className = 'dropdown';
        dropdown.toggle = false;

        dropdownLabel.addEventListener('click', this, false);
        dropdownLabel.className = 'dropdown-label';
        dropdownLabel.innerText = 'Editor';

        dropdownContainer.className = 'map-elements-container';
        dropdownContainer.style.overflow = 'hidden';
        dropdownContainer.style.maxHeight = 'unset';
        dropdownContainer.style.padding = '0px';
        dropdownContainer.style.flexDirection = 'column';

        dropdownIconContainer.className = 'map-elements-container map-element-ori-editor';
        dropdownIconContainer.style.overflow = 'auto';
        dropdownIconContainer.style.maxHeight = '600px';
        dropdownIconContainer.style.marginBottom = '0px';
        dropdownIconContainer.style.padding = '5px 5px 10px 5px';
        dropdownIconContainer.style.flexDirection = 'column';
        dropdownIconContainer.style.flexWrap = 'nowrap';
        dropdownIconContainer.addEventListener('click', this, false);
        dropdownIconContainer.addEventListener('mouseover', this, false);
        dropdownIconContainer.addEventListener('mouseout', this, false);

        var newItemContainer = this.createSeedEditorHTML('Dropdown', 'New Seed Object'),
            selectUberIDsContainer = document.createElement('fieldset'),
            selectUberIDsContainerLegend = document.createElement('legend'),
            selectUberGroups = document.createElement('select'),
            newItemButton = document.createElement('button'),
            groupKeys = Object.keys(this.uberIDToUberGroupID);

        for (var i = 0; i < groupKeys.length; i++) {
            var option = document.createElement('option');

            option.value = this.uberGroupID[groupKeys[i]];
            option.innerText = groupKeys[i];
            option.setAttribute('name', groupKeys[i]);
            selectUberGroups.appendChild(option);
        }

        selectUberIDsContainerLegend.innerText = 'Object Uberstates';
        selectUberIDsContainer.appendChild(selectUberIDsContainerLegend);

        selectUberGroups.className = 'elements-newitem-ubergroupid elements-newitem-ubergroup';
        selectUberGroups.addEventListener('change', this, false);
        selectUberIDsContainer.appendChild(selectUberGroups);
        this.selectUberGroups = selectUberGroups;
        newItemContainer.querySelector('div.map-elements-container').appendChild(selectUberIDsContainer);

        this.newItemContainer = newItemContainer;
        var newItemPickupType = this.createSeedEditorHTML('pickupType', 'Object Type');
        newItemPickupType.className = 'elements-ori-editor-pickuptype';
        newItemPickupType.querySelector('select').className = 'elements-ori-editor-pickuptype-new-item';
        newItemContainer.querySelector('div.map-elements-container').appendChild(newItemPickupType);
        newItemContainer.addEventListener('change', this, false);

        newItemButton.innerText = 'Create Pickup';
        newItemButton.className = 'fake-button elements-newitem-create';
        newItemButton.addEventListener('click', this, false);
        newItemContainer.querySelector('div.map-elements-container').appendChild(newItemButton);

        dropdownImportInput.type = 'file';
        dropdownImportInput.innerText = 'Import Seed';
        dropdownImportInput.accept = '.wotwr';
        dropdownImportInput.addEventListener('change', this, false);

        dropdownExportButton.innerText = 'Export Seed';
        dropdownExportButton.className = 'fake-button elements-export-seed';
        dropdownExportButton.addEventListener('click', this, false);

        var seedObjectsContainer = document.createElement('div'),
            uberGroupDropdowns = this.createSeedEditorHTML('UberGroupID'),
            uberDropdowns = this.createSeedEditorHTML('UberID', 'animalCutsceneGroupDescriptor'),
            lineIndexEl = document.createElement('input');

        seedObjectsContainer.style.overflow = 'auto';
        seedObjectsContainer.style.maxHeight = '600px';
        seedObjectsContainer.style.marginBottom = '0px';
        seedObjectsContainer.style.padding = '5px 5px 10px 5px';
        seedObjectsContainer.style.flexDirection = 'column';
        seedObjectsContainer.style.flexWrap = 'nowrap';

        uberGroupDropdowns.classList.add('elements-show-seedobject');
        uberDropdowns.classList.add('elements-show-seedobject-uberid');

        lineIndexEl.type = 'number';
        lineIndexEl.style.width = '70px';
        lineIndexEl.className = 'elements-show-seedobject-lineindex';
        lineIndexEl.addEventListener('input', this, false);

        seedObjectsContainer.appendChild(uberGroupDropdowns);
        seedObjectsContainer.appendChild(uberDropdowns);
        seedObjectsContainer.appendChild(lineIndexEl);
        dropdownContainer.appendChild(seedObjectsContainer);

        var newObjectEl = document.createElement('button');

        newObjectEl.textContent = 'Add Object';
        newObjectEl.className = 'elements-show-seedobject-addobject';
        newObjectEl.addEventListener('click', this, false);

        dropdownContainer.appendChild(dropdownIconContainer);
        dropdownContainer.appendChild(newObjectEl);
        dropdownContainer.appendChild(newItemContainer);
        dropdownContainer.appendChild(dropdownImportInput);
        dropdownContainer.appendChild(dropdownExportButton);


        dropdown.appendChild(dropdownLabel);
        dropdown.appendChild(dropdownContainer);

        this.dropdown = dropdown;
        document.getElementById('controls-container').querySelector('div.map-elements').appendChild(dropdown);
        document.getElementById('orimap-container').addEventListener('click', this, false);
        this.dropdown.querySelector('div.map-element-ori-editor').addEventListener('change', this, false);
        this.dropdown.querySelector('div.map-element-ori-editor').addEventListener('input', this, false);
    }

    /**
     * Generates a bunch of select dropdowns to edit
     * pickups on the map, based on the variables
     * xType
     */
    createSeedEditorHTML(elementType = 'pickupType', legendName = 'Seed Object') {

        switch (elementType) {
            case 'pickupType':
                var pickupTypeKeys = Object.keys(this.PickupType),
                    pickupTypeSelect = document.createElement('select'),
                    objectContainer = document.createElement('fieldset'),
                    objectContainerLegend = document.createElement('legend');

                objectContainer.style.margin = '5px';
                objectContainer.style.padding = '5px';
                objectContainer.style.display = 'flex';
                objectContainer.style.justifyContent = 'flex-start';
                objectContainer.style.alignItems = 'baseline';

                if (legendName !== 'Seed Object') {
                    objectContainerLegend.innerText = legendName;
                }
                objectContainer.appendChild(objectContainerLegend);

                for (var i = 0; i < pickupTypeKeys.length; i++) {
                    var pickupTypeOption = document.createElement('option');

                    pickupTypeOption.value = this.PickupType[pickupTypeKeys[i]];
                    pickupTypeOption.innerText = pickupTypeKeys[i];

                    pickupTypeSelect.appendChild(pickupTypeOption);
                }
                pickupTypeSelect.className = 'elements-ori-editor-pickuptype';
                objectContainerLegend.appendChild(pickupTypeSelect);

                return objectContainer;

            case 'Ability':
                var abilityTypeKeys = Object.keys(this.AbilityType),
                    abilityTypeSelect = document.createElement('select');

                for (var i = 0; i < abilityTypeKeys.length; i++) {
                    var abilityTypeOption = document.createElement('option');

                    abilityTypeOption.value = this.AbilityType[abilityTypeKeys[i]];
                    abilityTypeOption.innerText = abilityTypeKeys[i];

                    abilityTypeSelect.appendChild(abilityTypeOption);
                }
                abilityTypeSelect.className = 'elements-ori-editor-value';

                return abilityTypeSelect;

            case 'Teleporter':
                var teleporterTypeKeys = Object.keys(this.TeleporterType),
                    teleporterTypeSelect = document.createElement('select');

                for (var i = 0; i < teleporterTypeKeys.length; i++) {
                    var teleporterTypeOption = document.createElement('option');

                    teleporterTypeOption.value = this.TeleporterType[teleporterTypeKeys[i]];
                    teleporterTypeOption.innerText = teleporterTypeKeys[i];

                    teleporterTypeSelect.appendChild(teleporterTypeOption);
                }
                teleporterTypeSelect.className = 'elements-ori-editor-value';

                return teleporterTypeSelect;

            case 'Resource':
                var resourceTypeKeys = Object.keys(this.ResourceType),
                    resourceTypeSelect = document.createElement('select');

                for (var i = 0; i < resourceTypeKeys.length; i++) {
                    var resourceTypeOption = document.createElement('option');

                    resourceTypeOption.value = this.ResourceType[resourceTypeKeys[i]];
                    resourceTypeOption.innerText = resourceTypeKeys[i];

                    resourceTypeSelect.appendChild(resourceTypeOption);
                }
                resourceTypeSelect.className = 'elements-ori-editor-value';

                return resourceTypeSelect;

            case 'Shard':
                var shardTypeKeys = Object.keys(this.ShardType),
                    shardTypeSelect = document.createElement('select');

                for (var i = 0; i < shardTypeKeys.length; i++) {
                    var shardTypeOption = document.createElement('option');

                    shardTypeOption.value = this.ShardType[shardTypeKeys[i]];
                    shardTypeOption.innerText = shardTypeKeys[i];

                    shardTypeSelect.appendChild(shardTypeOption);
                }
                shardTypeSelect.className = 'elements-ori-editor-value';

                return shardTypeSelect;

            case 'Message':
                var messageInput = document.createElement('input');

                messageInput.type = 'text';
                messageInput.style.width = '100%';
                messageInput.className = 'elements-ori-editor-value';

                return messageInput;

            case 'QuestEvent':
                var questLabel = document.createElement('label');

                questLabel.textContent = 'Clean Water';
                questLabel.style.fontSize = '13px';
                questLabel.className = 'elements-ori-editor-quest';

                return questLabel;

            case 'UberState':
                var uberStateInput = document.createElement('input');

                uberStateInput.type = 'text';
                uberStateInput.className = 'elements-ori-editor-value';

                return uberStateInput;

            case 'SystemCommand':
                var sysCommandTypeKeys = Object.keys(this.SysCommandType),
                    sysCommandTypeSelect = document.createElement('select');

                for (var i = 0; i < sysCommandTypeKeys.length; i++) {
                    var sysCommandTypeOption = document.createElement('option');

                    sysCommandTypeOption.value = this.SysCommandType[sysCommandTypeKeys[i]];
                    sysCommandTypeOption.innerText = sysCommandTypeKeys[i];
                    sysCommandTypeOption.setAttribute('name', sysCommandTypeKeys[i]);

                    sysCommandTypeSelect.appendChild(sysCommandTypeOption);
                }
                sysCommandTypeSelect.className = 'elements-ori-editor-value';

                return sysCommandTypeSelect;

            case 'SpiritLight':
                var spiritLightInput = document.createElement('input'),
                    spiritLightLabel = document.createElement('label');

                spiritLightInput.type = 'number';
                spiritLightLabel.innerText = 'Spirit Light:';
                spiritLightLabel.style.fontSize = '13px';
                spiritLightLabel.appendChild(spiritLightInput);
                spiritLightLabel.className = 'elements-ori-editor-value';

                return spiritLightLabel;

            case 'UberGroupID':
                var selectUberGroupIDs = document.createElement('select'),
                    uberGroupIDs = Object.keys(this.uberIDMapGame);

                for (var i = 0; i < uberGroupIDs.length; i++) {
                    var option = document.createElement('option');

                    option.value = this.uberIDMapGame[uberGroupIDs[i]].id;
                    option.setAttribute('name', uberGroupIDs[i]);
                    option.innerText = uberGroupIDs[i];
                    selectUberGroupIDs.appendChild(option);
                }
                selectUberGroupIDs.className = 'elements-newitem-ubergroupid';
                selectUberGroupIDs.style.maxWidth = '175px';
                selectUberGroupIDs.addEventListener('change', this, false);
                return selectUberGroupIDs;

            case 'UberID':
                var selectUberIDs = document.createElement('select'),
                    uberIDs = [];// = this.uberIDToUberGroupID[this.selectUberGroups.options[this.selectUberGroups.selectedIndex].innerText];

                if (this.uberIDToUberGroupID[legendName] !== undefined) {
                    uberIDs = JSON.parse(JSON.stringify(this.uberIDToUberGroupID[legendName]));
                }

                if (this.uberIDMapGame[legendName] !== undefined) {
                    var tempUberIds = this.uberIDMapGame[legendName].uberIDs;

                    for (var i = 0; i < tempUberIds.length; i++) {
                        if (this.uberIDReverse[tempUberIds[i].id] === undefined) {
                            uberIDs.push(tempUberIds[i]);
                        } else {
                            uberIDs.push(this.uberIDReverse[tempUberIds[i].id]);
                        }
                    }
                }

                for (var i = 0; i < uberIDs.length; i++) {
                    var option = document.createElement('option');

                    if (uberIDs[i].id !== undefined) {
                        option.value = uberIDs[i].id;
                        option.setAttribute('name', uberIDs[i].name);
                        option.innerText = uberIDs[i].name;
                    } else {
                        option.value = this.uberID[uberIDs[i]];
                        option.setAttribute('name', uberIDs[i]);
                        option.innerText = uberIDs[i];
                    }
                    selectUberIDs.appendChild(option);
                }
                selectUberIDs.className = 'elements-newitem-uberid';
                selectUberIDs.style.maxWidth = '175px';
                selectUberIDs.addEventListener('change', this, false);
                return selectUberIDs;


            case 'UberIDValues':
                var listUberIDValues = document.createElement('datalist'),
                    uberIdValuesInput = document.createElement('input'),
                    container = document.createElement('div'),
                    randomId = Math.floor((Math.random() * 100000000) + 1);

                uberIdValuesInput.type = 'text';
                uberIdValuesInput.value = 'default';
                uberIdValuesInput.setAttribute('list', randomId + 'list');
                container.appendChild(uberIdValuesInput);

                for (var i = 0; i < legendName.length; i++) {
                    var option = document.createElement('option');

                    option.value = legendName[i];
                    option.innerText = legendName[i];

                    listUberIDValues.appendChild(option);
                }
                listUberIDValues.id = randomId + 'list';
                container.appendChild(listUberIDValues);

                uberIdValuesInput.className = 'elements-newitem-uberid-value';
                container.className = 'elements-uberid-value-container';
                container.addEventListener('input', this, false);
                return container;

            case 'UberStateType':
                var selectUberStateTypes = document.createElement('label');

                /*for (var i = 0; i < this.UberStateTypes.length; i++) {
                    var option = document.createElement('option');
    
                    option.value = this.UberStateTypes[i];
                    option.innerText = this.UberStateTypes[i];
                    selectUberStateTypes.appendChild(option);
                }*/
                selectUberStateTypes.style.fontSize = '12px';
                selectUberStateTypes.style.paddingRight = '5px';
                selectUberStateTypes.className = 'elements-uberstatetype';
                //selectUberStateTypes.addEventListener('change', this, false);
                return selectUberStateTypes;


            case 'Dropdown':
                var dropdown = document.createElement('div'),
                    dropdownLabel = document.createElement('label'),
                    dropdownContainer = document.createElement('div');

                dropdown.className = 'dropdown';
                dropdown.style.marginBottom = '10px';
                dropdown.toggle = false;

                dropdownLabel.addEventListener('click', this, false);
                dropdownLabel.className = 'dropdown-label';
                dropdownLabel.innerText = legendName;

                dropdownContainer.className = 'map-elements-container';
                dropdownContainer.style.overflow = 'hidden';
                dropdownContainer.style.flexDirection = 'column';
                dropdownContainer.style.margin = '0px 5px 5px 5px';
                dropdownContainer.style.maxHeight = 'unset';
                dropdownContainer.style.padding = '10px 0px';

                dropdown.appendChild(dropdownLabel);
                dropdown.appendChild(dropdownContainer);

                return dropdown;


            case 'AddRemove':
                var addRemoveContainer = document.createElement('div'),
                    remove = document.createElement('input'),
                    add = document.createElement('input'),
                    removeLabel = document.createElement('label'),
                    addLabel = document.createElement('label');

                remove.type = 'radio';
                add.type = 'radio';

                var randId = Math.floor((Math.random() * 100000000) + 1);
                remove.name = 'addremove' + randId;
                add.name = 'addremove' + randId;

                remove.value = 'remove';
                add.value = 'add';

                remove.style.margin = '0px 2px 0px 0px';
                add.style.margin = '0px 2px 0px 0px';

                remove.className = 'elements-addremove-object';
                add.className = 'elements-addremove-object';

                addLabel.style.fontSize = '13px';
                addLabel.style.display = 'flex';
                addLabel.style.alignItems = 'center';
                addLabel.style.flexDirection = 'row-reverse';
                removeLabel.style.fontSize = '13px';
                removeLabel.style.marginLeft = '10px';
                removeLabel.style.display = 'flex';
                removeLabel.style.alignItems = 'center';
                removeLabel.style.flexDirection = 'row-reverse';

                addLabel.innerText = 'Add';
                removeLabel.innerText = 'Remove';

                addLabel.appendChild(add);
                removeLabel.appendChild(remove);

                addRemoveContainer.style.display = 'flex';
                addRemoveContainer.style.flexDirection = 'row';
                addRemoveContainer.style.width = 'max-content';
                addRemoveContainer.style.padding = '3px';
                addRemoveContainer.style.marginLeft = '5px';
                addRemoveContainer.style.border = '1px solid white';
                addRemoveContainer.style.alignItems = 'flex-start';

                addRemoveContainer.appendChild(addLabel);
                addRemoveContainer.appendChild(removeLabel);
                return addRemoveContainer;

            case 'ChangeLineIndex':
                var container = document.createElement('div'),
                    buttonUp = document.createElement('button'),
                    buttonDown = document.createElement('button');

                buttonUp.innerText = '<';
                buttonDown.innerText = '>';

                buttonDown.className = 'elements-changelineindex-object lineindexdown'
                buttonUp.className = 'elements-changelineindex-object lineindexup';

                buttonUp.style.backgroundColor = '#4a4a4a';
                buttonUp.style.color = 'white';
                buttonUp.style.borderWidth = '1px';
                buttonUp.style.margin = '2px';
                buttonUp.style.minHeight = '22px';
                buttonUp.style.fontFamily = 'Roboto, sans-serif';
                buttonUp.style.fontSize = '13.3333px';
                buttonDown.style.backgroundColor = '#4a4a4a';
                buttonDown.style.color = 'white';
                buttonDown.style.borderWidth = '1px';
                buttonDown.style.margin = '2px';
                buttonDown.style.minHeight = '22px';
                buttonDown.style.fontFamily = 'Roboto, sans-serif';
                buttonDown.style.fontSize = '13.3333px';

                container.className = 'elements-changelineinex-container';
                container.style.display = 'inline-block';

                container.appendChild(buttonUp);
                container.appendChild(buttonDown);

                return container;
        }
    }

    /**
    * creates the seed map from a string that should be from
    * a seed file, was used to generate the this.uberID and
    * this.uberGroupID
    */
    createSeedMap(string) {
        var array = string.split(/\r?\n/);
        var seedMap = {};
        var uberIdToUberGroupMap = {};
        var iconMap = {};

        for (var i = 0; i < array.length; i++) {
            if (array[i].startsWith('//') === false && array[i] !== '') {
                var seedLine = array[i].split(',');

                if (uberIdToUberGroupMap[seedLine[4].trim()] === undefined) {
                    uberIdToUberGroupMap[seedLine[4].trim()] = [];
                }
                uberIdToUberGroupMap[seedLine[4].trim()].push(seedLine[0].trim());
                seedMap[seedLine[0].trim()] = seedLine[7].trim().replace(/ /g, '');


                var icon = '';
                var category = '';

                if (seedLine[2].trim().replace(/ /g, '') === 'PickupType.SpiritLight') {
                    if (seedLine[3].trim().replace(/ /g, '') === '50') icon = 'Small Experience';
                    if (seedLine[3].trim().replace(/ /g, '') === '100') icon = 'Medium Experience';
                    if (seedLine[3].trim().replace(/ /g, '') === '200') icon = 'Large Experience';
                    category = 'pickup';
                } else if (seedLine[2].trim().replace(/ /g, '') === 'PickupType.Resource') {
                    if (seedLine[3].trim().replace(/ /g, '') === 'Ore') icon = 'Ore';
                    if (seedLine[3].trim().replace(/ /g, '') === 'Life') icon = 'Health Half';
                    if (seedLine[3].trim().replace(/ /g, '') === 'Energy') icon = 'Energy Half';
                    if (seedLine[3].trim().replace(/ /g, '') === 'ShardSlot') icon = 'Shard Slot';
                    if (seedLine[3].trim().replace(/ /g, '') === 'Keystone') icon = 'Keystone';
                    category = 'mapIcon';
                } else {
                    icon = this.seedNameToIconName[seedLine[3].trim().replace(/ /g, '')] !== undefined ? this.seedNameToIconName[seedLine[3].trim().replace(/ /g, '')] : seedLine[3].trim().replace(/ /g, '');
                }
                if (seedLine[2].trim().replace(/ /g, '') === 'PickupType.Shard') {
                    category = 'shard';
                }
                if (seedLine[2].trim().replace(/ /g, '') === 'Ability') {
                    category = 'ability';
                }
                iconMap[seedLine[0].trim()] = { x: seedLine[8].trim().replace(/ /g, ''), y: seedLine[9].trim().replace(/ /g, ''), icon: icon, category: category };
            }
        }

        //console.log(seedMap, uberIdToUberGroupMap, iconMap);
    }

    createSeedObject(uberidgroup, uberid, uberidvalue = 'default', pickuptype, object, price = undefined) {
        if (this.uberGroupIDReverse[uberidgroup] !== undefined) {
            uberidgroup = this.uberGroupIDReverse[uberidgroup];
        }
        if (this.uberIDReverse[uberid] !== undefined) {
            uberid = this.uberIDReverse[uberid];
        }
        if (this.PickupTypeReverse[pickuptype] !== undefined) {
            pickuptype = this.PickupTypeReverse[pickuptype];
        }

        var item,
            uberidvalue = 'default';

        if (uberidgroup === 'pickupOnSpawnGroup') {
            uberid = this.pickupOnSpawnGroupCount;
        }

        if (this.seedItems[uberidgroup] === undefined) {
            this.seedItems[uberidgroup] = {};
        }

        var newSeedItem = { uberIDGroup: uberidgroup, uberID: uberid, uberIDValue: uberidvalue, pickupType: pickuptype };

        /*if (this.seedLocationToPos2[uberid]) {
            var mapPos = this.mapClass.inGameToMapCoord({ x: this.seedLocationToPos2[uberid].x, y: this.seedLocationToPos2[uberid].y });
            newSeedItem.location = { x: this.seedLocationToPos2[uberid].x, y: this.seedLocationToPos2[uberid].y };
            newSeedItem.x = mapPos.x + 'px';
            newSeedItem.y = mapPos.y + 'px';
        }*/

        if (this.seedLocationToPos2[uberid]) {
            var mapPos = this.mapClass.inGameToMapCoord({ x: this.seedLocationToPos2[uberid].x, y: this.seedLocationToPos2[uberid].y });
            newSeedItem.location = { x: this.seedLocationToPos2[uberid].x, y: this.seedLocationToPos2[uberid].y };
            newSeedItem.x = mapPos.x + 'px';
            newSeedItem.y = mapPos.y + 'px';
            newSeedItem.iconName = this.seedLocationToPos2[uberid].icon;
            newSeedItem.category = this.seedLocationToPos2[uberid].category;
        } else if (this.uberIDMapGame[uberidgroup] && this.getGameUberID(uberidgroup, uberid) && this.getGameUberID(uberidgroup, uberid).pos) {
            var temp = this.getGameUberID(uberidgroup, uberid);
            var mapPos = this.mapClass.inGameToMapCoord({ x: temp.pos.x, y: temp.pos.y });
            newSeedItem.location = { x: temp.pos.x, y: temp.pos.y };
            newSeedItem.x = mapPos.x + 'px';
            newSeedItem.y = mapPos.y + 'px';
            newSeedItem.iconName = temp.icon;
            newSeedItem.category = temp.category;
        } else {
            newSeedItem.y = newSeedItem.x = '0px';
        }

        switch (pickuptype) {
            case "SpiritLight":
                item = object;
                newSeedItem.iconName = 'Small Experience';
                newSeedItem.category = 'pickup';
                break;
            case "Resource":
                item = this.ResourceTypeReverse[object] ? this.ResourceTypeReverse[object] : object;
                newSeedItem.iconName = this.seedNameToIconName[item];
                newSeedItem.category = 'mapIcon';
                break;
            case "Ability":
                item = this.AbilityTypeReverse[object] ? this.AbilityTypeReverse[object] : object;
                newSeedItem.iconName = this.seedNameToIconName[item];
                newSeedItem.category = 'ability';
                break;
            case "Shard":
                item = this.ShardTypeReverse[object] ? this.ShardTypeReverse[object] : object;
                newSeedItem.iconName = this.seedNameToIconName[item];
                newSeedItem.category = 'shard';
                break;
            case "SystemCommand":
                item = this.SysCommandTypeReverse[object] ? this.SysCommandTypeReverse[object] : object;
                break;
            case "Teleporter":
                item = this.TeleporterTypeReverse[object] ? this.TeleporterTypeReverse[object] : object;
                newSeedItem.iconName = 'Spirit Well';
                newSeedItem.category = 'mapIcon';
                break;
            case "Message":
                item = object;
                break;
            case "Multi":
                break;
            case "UberState":
                var uberState = object;
                newSeedItem.targetUberIDGroup = this.uberGroupIDReverse[uberState[0]] !== undefined ? this.uberGroupIDReverse[uberState[0]] : uberState[0];
                newSeedItem.targetUberID = this.uberIDReverse[uberState[1]] !== undefined ? this.uberIDReverse[uberState[1]] : uberState[1];
                newSeedItem.stateType = uberState[2];
                item = uberState[3];
                this.pickupOnSpawnGroupCount++;
                break;
            case "QuestEvent":
                break;
        }

        //shops
        if (price !== undefined && uberidgroup === 'twillenShopDontWorry' || uberidgroup === 'opherShopDontWorry') {
            newSeedItem.shopPrice = price;
        }

        newSeedItem.item = item;
        newSeedItem.name = newSeedItem.pickupType + ' ' + newSeedItem.item;
        newSeedItem.mapId = uberidgroup + '|' + uberid;
        newSeedItem.seedLineIndex = this.seedLineIndex;

        if (this.seedItems[uberidgroup][uberid] === undefined) {
            this.seedItems[uberidgroup][uberid] = {};

            if (uberidgroup === 'twillenShopDontWorry' || uberidgroup === 'opherShopDontWorry' || uberidgroup === 'pickupOnSpawnGroup') {
                this.uberIDMapGame[uberidgroup].uberIDs.push(uberid);
            }
        }

        if (this.seedItems[uberidgroup][uberid][uberidvalue] === undefined) {
            this.seedItems[uberidgroup][uberid][uberidvalue] = { lineIndex: this.seedObjectLineIndex, objects: [] };
            this.seedObjectLineIndex++;
        }

        this.seedItems[uberidgroup][uberid][uberidvalue].objects.push(newSeedItem);
        this.mapItems.push(newSeedItem);
        this.seedLineIndex++;

        if (document.getElementById(uberidgroup + '|' + uberid) === null) {
            this.iconFactoryClass.createIconHTML(this.mapItems);
        }
    }

    /*
    * creates valid objects that can be given to iconFactory
    * to generate icons on the map, string is from a seed file
    */
    createSeedObjects(string) {
        this.seedObjectLineIndex = 0;
        this.seedLineIndex = 0;
        this.seedItems = {};
        this.mapItems = [];
        var array = string.split(/\r?\n/);
        var seedItems = {};
        //var seedPos = {};

        for (var i = 0; i < array.length; i++) {
            if (array[i].startsWith('//') === false && array[i].startsWith('Flags:') === false && array[i].startsWith('Spawn:') === false && array[i] !== '') {
                var splitString = array[i].split('//');
                var seedLine = splitString[0].split('|');

                var uberidgroup = this.uberGroupIDReverse[seedLine[0]],
                    uberid = this.uberIDReverse[seedLine[1]],
                    pickuptype = this.PickupTypeReverse[seedLine[2]],
                    uberidvalue = 'default',
                    item;

                if (uberidgroup === 'pickupOnSpawnGroup') {
                    uberid = Number.isNaN(parseFloat(seedLine[1])) === false ? seedLine[1] : this.pickupOnSpawnGroupCount;
                }

                if (uberidgroup === undefined) {
                    uberidgroup = this.uberIDMapGameReverse[seedLine[0]].id;
                }

                if (uberid === undefined) {
                    if (seedLine[1].includes('=')) {
                        uberidvalue = seedLine[1].split('=');
                        seedLine[1] = uberidvalue[0];
                        uberidvalue = uberidvalue[1];
                        uberid = this.uberIDMapGameReverse[seedLine[0]].uberIDs[seedLine[1]];// + '=' + uberidvalue;
                    } else {
                        uberid = this.uberIDMapGameReverse[seedLine[0]].uberIDs[seedLine[1]];
                    }
                }

                //to retrieve location data from a seed file
                /*var pos = splitString[1].match(/\(.+?\)/g);
                var posNew = {};
                if (pos.length === 1) {
                    var formS = pos[0].replace(/\(/g, '').replace(/\)/g, '').split(',');
                    posNew = { x: formS[0], y: formS[1] };
                }
                if (pos.length === 2) {
                    var formS = pos[1].replace(/\(/g, '').replace(/\)/g, '');
                    posNew = { shop: formS };
                }
                seedPos[uberid] = posNew;*/
                //console.log(uberidgroup, uberid, pickuptype, seedLine[3]);

                if (seedItems[uberidgroup] === undefined) {
                    seedItems[uberidgroup] = {};
                }

                var newSeedItem = { uberIDGroup: uberidgroup, uberID: uberid, uberIDValue: uberidvalue, pickupType: pickuptype };

                if (this.seedLocationToPos2[uberid]) {
                    var mapPos = this.mapClass.inGameToMapCoord({ x: this.seedLocationToPos2[uberid].x, y: this.seedLocationToPos2[uberid].y });
                    newSeedItem.location = { x: this.seedLocationToPos2[uberid].x, y: this.seedLocationToPos2[uberid].y };
                    newSeedItem.x = mapPos.x + 'px';
                    newSeedItem.y = mapPos.y + 'px';
                    newSeedItem.iconName = this.seedLocationToPos2[uberid].icon;
                    newSeedItem.category = this.seedLocationToPos2[uberid].category;
                } else if (this.uberIDMapGame[uberidgroup] && this.getGameUberID(uberidgroup, uberid) && this.getGameUberID(uberidgroup, uberid).pos) {
                    var temp = this.getGameUberID(uberidgroup, uberid);
                    var mapPos = this.mapClass.inGameToMapCoord({ x: temp.pos.x, y: temp.pos.y });
                    newSeedItem.location = { x: temp.pos.x, y: temp.pos.y };
                    newSeedItem.x = mapPos.x + 'px';
                    newSeedItem.y = mapPos.y + 'px';
                    newSeedItem.iconName = temp.icon;
                    newSeedItem.category = temp.category;
                } else {
                    newSeedItem.y = newSeedItem.x = '0px';
                }

                switch (pickuptype) {
                    case "SpiritLight":
                        item = parseInt(seedLine[3].toString().trim());
                        newSeedItem.iconName = 'Small Experience';
                        newSeedItem.category = 'pickup';

                        var tempSI = this.getGameUberIDUsing(uberidgroup, seedLine[1], 'id');
                        if (tempSI !== false) newSeedItem.iconName = tempSI.icon;

                        break;

                    case "Resource":
                        item = this.ResourceTypeReverse[parseInt(seedLine[3])] ? this.ResourceTypeReverse[parseInt(seedLine[3])] : parseInt(seedLine[3]);
                        newSeedItem.iconName = this.seedNameToIconName[item];
                        newSeedItem.category = 'mapIcon';
                        break;

                    case "Ability":
                        item = this.AbilityTypeReverse[parseInt(seedLine[3])] ? this.AbilityTypeReverse[parseInt(seedLine[3])] : parseInt(seedLine[3]);

                        if (parseInt(seedLine[3]) < 0) {
                            newSeedItem.addRemove = false;
                            item = this.AbilityTypeReverse[Math.abs(parseInt(seedLine[3]))] ? this.AbilityTypeReverse[Math.abs(parseInt(seedLine[3]))] : parseInt(seedLine[3]);
                        } else {
                            newSeedItem.addRemove = true;
                        }

                        if (this.seedNameToIconName[item]) {
                            newSeedItem.iconName = this.seedNameToIconName[item];
                            newSeedItem.category = 'ability';
                        }
                        break;

                    case "Shard":
                        item = this.ShardTypeReverse[parseInt(seedLine[3])] ? this.ShardTypeReverse[parseInt(seedLine[3])] : parseInt(seedLine[3]);

                        if (parseInt(seedLine[3]) < 0) {
                            newSeedItem.addRemove = false;
                            item = this.ShardTypeReverse[Math.abs(parseInt(seedLine[3]))] ? this.ShardTypeReverse[Math.abs(parseInt(seedLine[3]))] : parseInt(seedLine[3]);
                        } else {
                            newSeedItem.addRemove = true;
                        }

                        newSeedItem.iconName = this.seedNameToIconName[item];
                        newSeedItem.category = 'shard';
                        break;

                    case "SystemCommand":
                        item = this.SysCommandTypeReverse[parseInt(seedLine[3])] ? this.SysCommandTypeReverse[parseInt(seedLine[3])] : parseInt(seedLine[3]);

                        if (seedLine[4] !== undefined && seedLine[5] !== undefined) {

                            if (seedLine[3] === '8' || seedLine[3] === '9') {
                                newSeedItem.position = { x: seedLine[4], y: seedLine[5] };
                            } else {

                                newSeedItem.targetUberIDGroup = this.uberGroupIDReverse[seedLine[4]];
                                newSeedItem.targetUberID = this.uberIDReverse[seedLine[5]];

                                if (newSeedItem.targetUberIDGroup === undefined) {
                                    newSeedItem.targetUberIDGroup = this.uberIDMapGameReverse[seedLine[4]].id;
                                }

                                if (newSeedItem.targetUberID === undefined) {
                                    newSeedItem.targetUberID = this.uberIDMapGameReverse[seedLine[4]].uberIDs[seedLine[5]];
                                }
                                newSeedItem.targetUberIDValue = seedLine[6];
                            }
                        }
                        break;

                    case "Teleporter":
                        item = this.TeleporterTypeReverse[parseInt(seedLine[3])] ? this.TeleporterTypeReverse[parseInt(seedLine[3])] : parseInt(seedLine[3]);

                        if (parseInt(seedLine[3]) < 0) {
                            newSeedItem.addRemove = false;
                            item = item = this.TeleporterTypeReverse[Math.abs(parseInt(seedLine[3]))] ? this.TeleporterTypeReverse[Math.abs(parseInt(seedLine[3]))] : parseInt(seedLine[3]);
                        } else {
                            newSeedItem.addRemove = true;
                        }

                        newSeedItem.iconName = 'Spirit Well';
                        newSeedItem.category = 'mapIcon';
                        break;

                    case "Message":
                        item = seedLine[3];
                        if (seedLine[4] !== undefined) {
                            item += '|' + seedLine[4];
                        }
                        if (seedLine[5] !== undefined) {
                            item += '|' + seedLine[5];
                        }
                        break;

                    case "Multi":
                        break;

                    case "UberState":
                        //newSeedItem.targetUberIDGroup = this.uberGroupIDReverse[uberState[0]] !== undefined ? this.uberGroupIDReverse[uberState[0]] : uberState[0];
                        //newSeedItem.targetUberID = this.uberIDReverse[uberState[1]] !== undefined ? this.uberIDReverse[uberState[1]] : uberState[1];

                        newSeedItem.targetUberIDGroup = this.uberGroupIDReverse[seedLine[3]];
                        newSeedItem.targetUberID = this.uberIDReverse[seedLine[4]];

                        if (newSeedItem.targetUberIDGroup === undefined) {
                            newSeedItem.targetUberIDGroup = this.uberIDMapGameReverse[seedLine[3]].id;
                        }

                        if (newSeedItem.targetUberID === undefined) {
                            var targetuberidvalue;

                            if (seedLine[4].includes('=')) {
                                targetuberidvalue = seedLine[6];
                                newSeedItem.targetUberID = this.uberIDMapGameReverse[seedLine[3]].uberIDs[seedLine[4]] + '=' + targetuberidvalue;
                            } else {
                                newSeedItem.targetUberID = this.uberIDMapGameReverse[seedLine[3]].uberIDs[seedLine[4]];
                            }
                        }

                        if (seedLine[7] !== undefined) {
                            newSeedItem.surpressNext = true;
                        }

                        newSeedItem.stateType = this.getGameUberID(newSeedItem.targetUberIDGroup, this.uberIDMapGameReverse[seedLine[3]].uberIDs[seedLine[4]]).type;// seedLine[5];
                        item = seedLine[6];
                        this.pickupOnSpawnGroupCount++;
                        break;

                    case "QuestEvent":
                        item = this.QuestEventTypeReverse[parseInt(seedLine[3])];
                        if (seedLine[3] === '-0') {
                            newSeedItem.addRemove = false;
                        } else {
                            newSeedItem.addRemove = true;
                        }

                        break;
                }

                //shops
                if (uberidgroup === 'twillenShopDontWorry' || uberidgroup === 'opherShopDontWorry') {
                    newSeedItem.shopPrice = parseFloat(seedLine[4]);
                }

                newSeedItem.item = item;
                newSeedItem.name = newSeedItem.pickupType + ' ' + newSeedItem.item;
                newSeedItem.mapId = uberidgroup + '|' + uberid;
                newSeedItem.seedLineIndex = this.seedLineIndex;

                if (seedItems[uberidgroup][uberid] === undefined) {
                    seedItems[uberidgroup][uberid] = {};

                    if (uberidgroup === 'twillenShopDontWorry' || uberidgroup === 'opherShopDontWorry' || uberidgroup === 'pickupOnSpawnGroup') {
                        this.uberIDMapGame[uberidgroup].uberIDs.push(uberid);
                    }
                }

                if (seedItems[uberidgroup][uberid][uberidvalue] === undefined) {
                    seedItems[uberidgroup][uberid][uberidvalue] = { lineIndex: this.seedObjectLineIndex, objects: [] };
                    this.seedObjectLineIndex++;
                }

                seedItems[uberidgroup][uberid][uberidvalue].objects.push(newSeedItem);
                this.mapItems.push(newSeedItem);
                this.seedLineIndex++;
                //console.log(uberidgroup, uberid, resourcetype, item);
            }
        }
        console.log(seedItems);
        return seedItems;
    }

    saveData(data, fileName) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var json = JSON.stringify(data),
            blob = new Blob([data], { type: "octet/stream" }),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    getGameUberID(uberGroupID, uberID) {
        if (this.uberIDMapGame[uberGroupID] !== undefined) {
            var uberids = this.uberIDMapGame[uberGroupID].uberIDs;

            for (var i = 0; i < uberids.length; i++) {
                if (uberids[i].name === uberID) {
                    return uberids[i];
                }
            }
            return false;
        }
        return false;
    }

    getGameUberIDUsing(uberGroupID, uberID, using = 'name') {
        if (this.uberIDMapGame[uberGroupID] !== undefined) {
            var uberids = this.uberIDMapGame[uberGroupID].uberIDs;

            switch (using) {
                case 'name':
                    for (var i = 0; i < uberids.length; i++) {
                        if (uberids[i].name === uberID) {
                            return uberids[i];
                        }
                    }
                    break;

                case 'id':
                    for (var i = 0; i < uberids.length; i++) {
                        if (uberids[i].id === uberID) {
                            return uberids[i];
                        }
                    }
                    break;
            }
            return false;
        }
        return false;
    }

    exportSeedAsString() {
        var seedStringAsLineIndex = {},
            keysGroups = Object.keys(this.seedItems),
            lineIndex = 0;

        for (var i = 0; i < keysGroups.length; i++) {
            var group = this.seedItems[keysGroups[i]],
                keysUber = Object.keys(group);

            for (var i2 = 0; i2 < keysUber.length; i2++) {
                var keysUberValue = Object.keys(group[keysUber[i2]]);

                for (var i3 = 0; i3 < keysUberValue.length; i3++) {
                    lineIndex = group[keysUber[i2]][keysUberValue[i3]].lineIndex;
                    var objectLineIndex = 0;

                    for (var i4 = 0; i4 < group[keysUber[i2]][keysUberValue[i3]].objects.length; i4++) {
                        var item = group[keysUber[i2]][keysUberValue[i3]].objects[i4],
                            itemInt = 0,
                            seedString = '';

                        switch (item.pickupType) {
                            case "SpiritLight":
                                itemInt = item.item;
                                break;
                            case "Resource":
                                itemInt = this.ResourceType[item.item] !== undefined ? this.ResourceType[item.item] : item.item;
                                break;
                            case "Ability":
                                itemInt = this.AbilityType[item.item] !== undefined ? this.AbilityType[item.item] : item.item;

                                if (item.addRemove) {
                                    itemInt = Math.abs(itemInt);
                                } else {
                                    itemInt *= -1;
                                }

                                break;
                            case "Shard":
                                itemInt = this.ShardType[item.item] !== undefined ? this.ShardType[item.item] : item.item;

                                if (item.addRemove) {
                                    itemInt = Math.abs(itemInt);
                                } else {
                                    itemInt *= -1;
                                }

                                break;
                            case "SystemCommand":
                                itemInt = this.SysCommandType[item.item] !== undefined ? this.SysCommandType[item.item] : item.item;
                                if (item.targetUberIDGroup !== undefined) {
                                    itemInt += '|' + (this.uberGroupID[item.targetUberIDGroup] !== undefined ? this.uberGroupID[item.targetUberIDGroup] : this.uberIDMapGame[item.targetUberIDGroup].id) + '|';
                                    itemInt += (this.uberID[item.targetUberID] !== undefined ? this.uberID[item.targetUberID] : this.getGameUberID(item.targetUberIDGroup, item.targetUberID).id) + '|';
                                    itemInt += item.targetUberIDValue;
                                }
                                break;
                            case "Teleporter":
                                itemInt = this.TeleporterType[item.item] !== undefined ? this.TeleporterType[item.item] : item.item;

                                if (item.addRemove) {
                                    itemInt = Math.abs(itemInt);
                                } else {
                                    itemInt *= -1;
                                }

                                break;
                            case "Message":
                                itemInt = item.item;
                                break;
                            case "Multi":
                                break;
                            case "UberState":
                                itemInt = (this.uberGroupID[item.targetUberIDGroup] !== undefined ? this.uberGroupID[item.targetUberIDGroup] : this.uberIDMapGame[item.targetUberIDGroup].id) + '|';
                                itemInt += (this.uberID[item.targetUberID] !== undefined ? this.uberID[item.targetUberID] : this.getGameUberID(item.targetUberIDGroup, item.targetUberID).id) + '|';
                                itemInt += item.stateType + '|';
                                itemInt += item.item;

                                if (item.surpressNext !== undefined) {
                                    itemInt += '|' + (item.surpressNext === true ? 1 : 0);
                                }
                                break;
                            case "QuestEvent":
                                break;
                        }

                        var ubergroupid = this.uberGroupID[item.uberIDGroup] !== undefined ? this.uberGroupID[item.uberIDGroup] : this.uberIDMapGame[item.uberIDGroup].id,
                            uberid = this.uberID[item.uberID] !== undefined ? this.uberID[item.uberID] : this.getGameUberID(item.uberIDGroup, item.uberID).id,
                            pickuptype = this.PickupType[item.pickupType] !== undefined ? this.PickupType[item.pickupType] : item.pickupType;

                        if (ubergroupid === 3) {
                            uberid = item.uberID;
                        }

                        uberid += keysUberValue[i3] !== 'default' ? '=' + keysUberValue[i3] : '';
                        seedString += ubergroupid + '|' + uberid + '|' + pickuptype + '|' + itemInt;

                        //shops
                        if (item.uberIDGroup === 'twillenShopDontWorry' || item.uberIDGroup === 'opherShopDontWorry') {
                            if (Number.isNaN(parseFloat(item.shopPrice)) === false) {
                                //seedString += '|' + item.shopPrice;
                            }
                        }

                        seedString += "\r\n";
                        if (seedStringAsLineIndex[lineIndex] === undefined) {
                            seedStringAsLineIndex[lineIndex] = {};
                            seedStringAsLineIndex[lineIndex][objectLineIndex] = seedString;
                        } else {
                            seedStringAsLineIndex[lineIndex][objectLineIndex] = seedString;
                        }
                        //seedStringAsLineIndex[lineIndex] = seedString;
                        objectLineIndex++;
                    }
                }
            }
        }

        var lineIndexKeys = Object.keys(seedStringAsLineIndex);
        var seedString = '';

        for (var i = 0; i < lineIndexKeys.length; i++) {
            var objectLineIndexKeys = Object.keys(seedStringAsLineIndex[lineIndexKeys[i]]);

            for (var i2 = 0; i2 < objectLineIndexKeys.length; i2++) {
                seedString += seedStringAsLineIndex[lineIndexKeys[i]][objectLineIndexKeys[i2]];
            }
        }

        this.saveData(seedString, 'test-seed.wotwr');
    }

    toggleDropdown(el, event) {
        if (el === event.target) {
            el.parentNode.setAttribute('toggle', el.parentNode.getAttribute('toggle') === 'true' ? false : true);
        }
    }

    loadSeed(string) {
        var keysTemp = Object.keys(this.uberIDMapGame);

        for (var i = 0; i < keysTemp.length; i++) {
            var uberidsTemp = this.uberIDMapGame[keysTemp[i]].uberIDs;

            for (var i2 = 0; i2 < uberidsTemp.length; i2++) {
                var uberidTemp = uberidsTemp[i2];

                if (uberidTemp.pos !== undefined) {
                    string += '\r\n' + this.uberIDMapGame[keysTemp[i]].id + '|' + uberidTemp.id + (uberidTemp.pickupType !== undefined ? '|' + uberidTemp.pickupType + '|' + uberidTemp.uberValue : '|-1|-1');
                }
            }
        }

        this.seedItems = this.createSeedObjects(string);
        this.iconFactoryClass.createIconHTML(this.mapItems);
    }

    changeSeedObjectsElements(parent, pickupType, uberIDGroup, uberID, uberIDValue, index) {
        var itemSelect = this.createSeedEditorHTML(pickupType);

        itemSelect.dataset.itemIndex = uberIDGroup + '|' + uberID + '|' + uberIDValue + '|' + index;
        parent.appendChild(itemSelect);

        switch (pickupType) {
            case 'SpiritLight':
                itemSelect.children[0].value = 0;
                break;

            case 'Resource':
                break;

            case 'Ability':
                var remove = this.createSeedEditorHTML('AddRemove');
                remove.dataset.itemIndex = uberIDGroup + '|' + uberID + '|' + uberIDValue + '|' + index;
                parent.appendChild(remove);
                break;

            case 'Shard':
                var remove = this.createSeedEditorHTML('AddRemove');
                remove.dataset.itemIndex = uberIDGroup + '|' + uberID + '|' + uberIDValue + '|' + index;
                parent.appendChild(remove);
                break;

            case 'Teleporter':
                var remove = this.createSeedEditorHTML('AddRemove');
                remove.dataset.itemIndex = uberIDGroup + '|' + uberID + '|' + uberIDValue + '|' + index;
                parent.appendChild(remove);
                break;

            case 'Message':
                break;

            case 'UberState':
                itemSelect.remove();

                var uberGroupIdSelect = this.createSeedEditorHTML('UberGroupID'),
                    uberIdSelect = this.createSeedEditorHTML('UberID', 'animalCutsceneGroupDescriptor'),
                    uberStateType = this.createSeedEditorHTML('UberStateType'),
                    uberStateValue = document.createElement('input'),
                    uberIDsCont = document.createElement('div'),
                    uberStatecont = document.createElement('div');

                uberIDsCont.style.padding = '2px 0px';
                uberStatecont.style.padding = '2px 0px';

                uberStateValue.type = 'text';

                uberIdSelect.className = 'elements-item-uberstate-uberid';

                uberIDsCont.appendChild(uberGroupIdSelect);
                uberIDsCont.appendChild(uberIdSelect);
                uberStatecont.appendChild(uberStateType);
                uberStatecont.appendChild(uberStateValue);
                parent.appendChild(uberIDsCont);
                parent.appendChild(uberStatecont);

                uberStateType.innerText = this.uberIDMapGame['animalCutsceneGroupDescriptor'].uberIDs[0].type;
                break;

            case 'SystemCommand':
                itemSelect.remove();

                var uberGroupIdSelect = this.createSeedEditorHTML('UberGroupID'),
                    uberIdSelect = this.createSeedEditorHTML('UberID', 'animalCutsceneGroupDescriptor'),
                    targetUberGroupIdSelect = this.createSeedEditorHTML('UberGroupID'),
                    targetUberIdSelect = this.createSeedEditorHTML('UberID', 'animalCutsceneGroupDescriptor'),
                    uberIDsCont = document.createElement('div'),
                    targetUberIDsCont = document.createElement('div'),
                    uberStateValue = this.createSeedEditorHTML('SystemCommand'),
                    targetUberStateValue = document.createElement('input');

                uberIDsCont.style.padding = '2px 0px';
                targetUberIDsCont.style.padding = '2px 0px';

                targetUberStateValue.type = 'text';

                uberIDsCont.appendChild(uberGroupIdSelect);
                uberIDsCont.appendChild(uberIdSelect);
                targetUberIDsCont.appendChild(targetUberGroupIdSelect);
                targetUberIDsCont.appendChild(targetUberIdSelect);
                targetUberIDsCont.appendChild(targetUberStateValue);
                parent.appendChild(uberIDsCont);
                parent.appendChild(uberStateValue);
                parent.appendChild(targetUberIDsCont);

                break;
        }
    }

    changeLineIndex(uberGroupID, uberID, uberIDValue, lineIndex) {
        var keys = Object.keys(this.seedItems);

        for (var i = 0; i < keys.length; i++) {
            var keys2 = Object.keys(this.seedItems[keys[i]]);

            for (var i2 = 0; i2 < keys2.length; i2++) {
                var keys3 = Object.keys(this.seedItems[keys[i]][keys2[i2]]);

                for (var i3 = 0; i3 < keys3.length; i3++) {
                    if (this.seedItems[keys[i]][keys2[i2]][keys3[i3]].lineIndex >= lineIndex) {
                        this.seedItems[keys[i]][keys2[i2]][keys3[i3]].lineIndex++;
                    }
                }
            }
        }

        this.seedItems[uberGroupID][uberID][uberIDValue].lineIndex = lineIndex;
    }

    changeUberIDSelectElement(uberGroup, element) {
        var newUberIDSelect = this.createSeedEditorHTML('UberID', uberGroup),
            oldClasses = element.classList;

        element.parentNode.replaceChild(newUberIDSelect, element);
        newUberIDSelect.classList = oldClasses;

        return newUberIDSelect;
    }

    createUberIDValueElement(ubergroupid, uberid, container) {
        if (this.seedItems[ubergroupid] !== undefined && this.seedItems[ubergroupid][uberid] !== undefined && Object.keys(this.seedItems[ubergroupid][uberid]).length > 0) {
            if (container.querySelector('input.elements-newitem-uberid-value')) {
                container.replaceChild(this.createSeedEditorHTML('UberIDValues', Object.keys(this.seedItems[ubergroupid][uberid])), container.querySelector('input.elements-newitem-uberid-value').parentNode);
            } else {
                container.appendChild(this.createSeedEditorHTML('UberIDValues', Object.keys(this.seedItems[ubergroupid][uberid])));
            }
        }
    }

    displaySeedEditorElements(event = undefined, items = undefined) {
        /*var keys = Object.keys(this.editorElements);
        for (var i = 0; i < keys.length; i++) {
            this.editorElements[keys[i]].style.display = 'none';
        }*/

        if (event !== undefined && event.target.dataset.itemIndex === undefined && event.target.options) {
            //event.target.nextElementSibling.outerHTML = event.target.value
            var newList = this.createSeedEditorHTML(event.target.options[event.target.selectedIndex].innerText),
                lineIndexEl = document.createElement('input'),
                uberGroupIdSelect = this.createSeedEditorHTML('UberGroupID'),
                uberIdSelect = this.createSeedEditorHTML('UberID'),
                parentCont = event.target.closest('fieldset'),
                children = event.target.closest('fieldset').children;

            lineIndexEl.type = 'number';
            lineIndexEl.className = 'elements-show-seedobject-lineindex';

            for (var i = 1; i < children.length; i++) {
                children[1].remove();
            }

            if (event.target.nextElementSibling && event.target.nextElementSibling.classList.contains('elements-ori-editor-value')) {
                if (event.target.nextElementSibling.dataset.itemIndex) {
                    newList.dataset.itemIndex = event.target.nextElementSibling.dataset.itemIndex;
                }
                event.target.parentNode.replaceChild(newList, event.target.nextElementSibling);
                parentCont.appendChild(uberGroupIdSelect);
                parentCont.appendChild(uberIdSelect);
                parentCont.appendChild(lineIndexEl);
            } else {
                parentCont.appendChild(newList);
                parentCont.appendChild(uberGroupIdSelect);
                parentCont.appendChild(uberIdSelect);
                parentCont.appendChild(lineIndexEl);
            }
        } else if (event !== undefined && event.target.dataset.itemIndex !== undefined) {
            var values = event.target.dataset.itemIndex.split('|'),
                parent = event.target.closest('fieldset'),
                children = parent.closest('fieldset').children;

            for (var i = 0; i < children.length; i++) {
                if (children[1]) {
                    children[1].remove();
                }
            }

            this.changeSeedObjectsElements(parent, event.target.selectedOptions[0].textContent, values[0], values[1], values[2], values[3]);
        }

        if (event && event.target.classList.contains('elements-show-seedobject')) {
            this.dropdown.querySelector('div.map-element-ori-editor').innerHTML = '';
        }

        if ((event && event.target.classList.contains('map-icon-onmap')) || event === undefined) {
            this.dropdown.querySelector('div.map-element-ori-editor').innerHTML = '';
        }

        if (items !== undefined) {
            document.querySelector('input.elements-show-seedobject-lineindex').value = items.lineIndex;

            for (var i = 0; i < items.objects.length; i++) {
                if (items.objects[i].pickupType === 'NewSeedObject') {
                    break;
                }

                var item = items.objects[i],
                    pickupTypeSelectContainer = this.createSeedEditorHTML('pickupType'),
                    pickupTypeSelect = pickupTypeSelectContainer.querySelector('select');

                this.dropdown.querySelector('div.map-element-ori-editor').appendChild(pickupTypeSelectContainer);
                pickupTypeSelect.id = item.uberIDGroup + '.' + item.uberID + '.' + i;
                pickupTypeSelect.dataset.itemIndex = item.uberIDGroup + '|' + item.uberID + '|' + item.uberIDValue + '|' + i;
                pickupTypeSelect.selectedIndex = pickupTypeSelect.querySelector('option[value="' + this.PickupType[item.pickupType] + '"]').index;

                var itemSelect = this.createSeedEditorHTML(item.pickupType);
                pickupTypeSelectContainer.appendChild(itemSelect);

                switch (item.pickupType) {
                    case 'SpiritLight':
                        itemSelect.children[0].value = item.item;
                        break;

                    case 'Resource':
                        itemSelect.selectedIndex = itemSelect.querySelector('option[value="' + this.ResourceType[item.item] + '"]').index;
                        break;

                    case 'Ability':
                        itemSelect.selectedIndex = itemSelect.querySelector('option[value="' + this.AbilityType[item.item] + '"]').index;

                        var remove = this.createSeedEditorHTML('AddRemove');
                        remove.dataset.itemIndex = item.uberIDGroup + '|' + item.uberID + '|' + item.uberIDValue + '|' + i;
                        pickupTypeSelectContainer.appendChild(remove);
                        break;

                    case 'Shard':
                        itemSelect.selectedIndex = itemSelect.querySelector('option[value="' + this.ShardType[item.item] + '"]').index;

                        var remove = this.createSeedEditorHTML('AddRemove');
                        remove.dataset.itemIndex = item.uberIDGroup + '|' + item.uberID + '|' + item.uberIDValue + '|' + i;
                        pickupTypeSelectContainer.appendChild(remove);
                        break;

                    case 'Teleporter':
                        itemSelect.selectedIndex = itemSelect.querySelector('option[value="' + this.TeleporterType[item.item] + '"]').index;

                        var remove = this.createSeedEditorHTML('AddRemove');
                        remove.dataset.itemIndex = item.uberIDGroup + '|' + item.uberID + '|' + item.uberIDValue + '|' + i;
                        pickupTypeSelectContainer.appendChild(remove);
                        break;

                    case 'Message':
                        itemSelect.value = item.item;
                        break;

                    case 'UberState':
                        itemSelect.remove();

                        var uberGroupIdSelect = this.createSeedEditorHTML('UberGroupID'),
                            uberIdSelect = this.createSeedEditorHTML('UberID', item.targetUberIDGroup),
                            uberStateType = this.createSeedEditorHTML('UberStateType'),
                            uberStateValue = document.createElement('input'),
                            uberIDsCont = document.createElement('div'),
                            uberStatecont = document.createElement('div');

                        uberIDsCont.style.padding = '2px 0px';
                        uberStatecont.style.padding = '2px 0px';

                        uberStateValue.type = 'text';
                        uberStateValue.style.maxWidth = '80px';

                        uberIdSelect.className = 'elements-item-uberstate-uberid';

                        uberIDsCont.appendChild(uberGroupIdSelect);
                        uberIDsCont.appendChild(uberIdSelect);
                        uberStatecont.appendChild(uberStateType);
                        uberStatecont.appendChild(uberStateValue);
                        pickupTypeSelectContainer.appendChild(uberIDsCont);
                        pickupTypeSelectContainer.appendChild(uberStatecont);

                        uberGroupIdSelect.selectedIndex = uberGroupIdSelect.querySelector('option[name="' + item.targetUberIDGroup + '"]').index;
                        uberIdSelect.selectedIndex = uberIdSelect.querySelector('option[name="' + item.targetUberID + '"]').index;
                        uberStateType.innerText = item.stateType;// uberStateType.querySelector('option[value="' + item.stateType + '"]').index;
                        uberStateValue.value = item.item;
                        break;

                    case 'SystemCommand':
                        itemSelect.remove();

                        var uberGroupIdSelect = this.createSeedEditorHTML('UberGroupID'),
                            uberIdSelect = this.createSeedEditorHTML('UberID', item.uberIDGroup),
                            targetUberGroupIdSelect = this.createSeedEditorHTML('UberGroupID'),
                            targetUberIdSelect = this.createSeedEditorHTML('UberID', item.targetUberIDGroup),
                            uberIDsCont = document.createElement('div'),
                            targetUberIDsCont = document.createElement('div'),
                            uberStateValue = this.createSeedEditorHTML('SystemCommand'),
                            targetUberStateValue = document.createElement('input');

                        uberIDsCont.style.padding = '2px 0px';
                        targetUberIDsCont.style.padding = '2px 0px';

                        targetUberStateValue.type = 'text';
                        targetUberStateValue.style.maxWidth = '80px';

                        uberIDsCont.appendChild(uberGroupIdSelect);
                        uberIDsCont.appendChild(uberIdSelect);
                        targetUberIDsCont.appendChild(targetUberGroupIdSelect);
                        targetUberIDsCont.appendChild(targetUberIdSelect);
                        targetUberIDsCont.appendChild(targetUberStateValue);
                        pickupTypeSelectContainer.appendChild(uberIDsCont);
                        pickupTypeSelectContainer.appendChild(uberStateValue);
                        pickupTypeSelectContainer.appendChild(targetUberIDsCont);

                        uberGroupIdSelect.selectedIndex = uberGroupIdSelect.querySelector('option[name="' + item.uberIDGroup + '"]').index;
                        uberIdSelect.selectedIndex = uberIdSelect.querySelector('option[name="' + item.uberID + '"]').index;
                        targetUberGroupIdSelect.selectedIndex = targetUberGroupIdSelect.querySelector('option[name="' + item.targetUberIDGroup + '"]').index;
                        targetUberIdSelect.selectedIndex = targetUberIdSelect.querySelector('option[name="' + item.targetUberID + '"]').index;
                        uberStateValue.selectedIndex = uberStateValue.querySelector('option[name="' + item.item + '"]').index;
                        targetUberStateValue.value = item.targetUberIDValue;
                        break;

                    case 'QuestEvent':
                        var remove = this.createSeedEditorHTML('AddRemove');
                        remove.dataset.itemIndex = item.uberIDGroup + '|' + item.uberID + '|' + item.uberIDValue + '|' + i;
                        pickupTypeSelectContainer.appendChild(remove);
                        break;
                }
                itemSelect.dataset.itemIndex = item.uberIDGroup + '|' + item.uberID + '|' + item.uberIDValue + '|' + i;

                if (item.addRemove !== undefined && remove !== undefined) {
                    if (item.addRemove) {
                        remove.querySelector('input[value=add]').setAttribute('checked', true);
                        remove.querySelector('input[value=remove]').removeAttribute('checked');
                    } else {
                        remove.querySelector('input[value=remove]').setAttribute('checked', true);
                        remove.querySelector('input[value=add]').removeAttribute('checked');
                    }
                }
            }
        }
    }

    handleEvent(event) {
        switch (event.type) {
            case 'click':
                if (event.target.classList.contains('dropdown-label')) {
                    this.toggleDropdown(event.target, event);
                } else if (event.target.classList.contains('elements-export-seed')) {
                    this.exportSeedAsString();
                } else if (event.target.classList.contains('map-icon-onmap')) {
                    var uberGroupId = event.target.id.split('|'),
                        uberId = uberGroupId[1],
                        uberGroupSelect = document.body.querySelector('select.elements-show-seedobject'),
                        uberSelect = document.body.querySelector('select.elements-show-seedobject-uberid');

                    uberGroupId = uberGroupId[0];
                    this.selectedItems = this.seedItems[uberGroupId][uberId].default;
                    this.selectedIcon = event.target;

                    this.displaySeedEditorElements(event, this.selectedItems);

                    this.createUberIDValueElement(uberGroupId, uberId, uberGroupSelect.parentNode);

                    uberGroupSelect.selectedIndex = uberGroupSelect.querySelector('option[name="' + uberGroupId + '"]').index;

                    uberSelect = this.changeUberIDSelectElement(uberGroupId, uberSelect);
                    uberSelect.selectedIndex = uberSelect.querySelector('option[name="' + uberId + '"]').index;
                } else if (event.target.classList.contains('elements-newitem-create')) {
                    var selects = this.newItemContainer.querySelectorAll('select');
                    var uberidgroup = selects[0].options[selects[0].selectedIndex].value,
                        uberid = selects[1].options[selects[1].selectedIndex].value,
                        pickuptype = selects[2].options[selects[2].selectedIndex].value,
                        object = selects[3].options[selects[3].selectedIndex].value;

                    this.createSeedObject(uberidgroup, uberid, 'default', pickuptype, object);

                } else if (event.target.classList.contains('elements-show-seedobject-addobject')) {
                    var uberGroupID = document.querySelector('select.elements-show-seedobject').selectedOptions[0].innerText,
                        uberID = document.querySelector('select.elements-show-seedobject-uberid').selectedOptions[0].innerText,
                        uberIDValue = document.querySelector('select.elements-show-seedobject').parentNode.querySelector('input.elements-newitem-uberid-value').value;

                    this.createSeedObject(uberGroupID, uberID, uberIDValue, 'SpiritLight', 0);
                    this.selectedItems = this.seedItems[uberGroupID][uberID][uberIDValue];
                    this.displaySeedEditorElements(undefined, this.selectedItems);
                } else if (event.target.classList.contains('elements-remove-object')) {
                    var itemIndex = event.target.previousElementSibling.dataset.itemIndex.split('|');

                    this.seedItems[itemIndex[0]][itemIndex[1]][itemIndex[2]].objects.splice(itemIndex[3], 1);
                    this.displaySeedEditorElements(undefined, this.selectedItems);
                } else if (event.target.classList.contains('elements-changelineindex-object')) {
                    var parent = event.target.closest('fieldset'),
                        itemIndex = parent.querySelector('select.elements-ori-editor-pickuptype').dataset.itemIndex.split('|');

                    //prevents going below first and last index, and then moves the objects around
                    if (event.target.classList.contains('lineindexup')) {
                        if (parseInt(itemIndex[3]) > 0) {
                            var temp = this.seedItems[itemIndex[0]][itemIndex[1]][itemIndex[2]].objects[itemIndex[3] - 1];

                            this.seedItems[itemIndex[0]][itemIndex[1]][itemIndex[2]].objects[itemIndex[3] - 1] = this.seedItems[itemIndex[0]][itemIndex[1]][itemIndex[2]].objects[itemIndex[3]];
                            this.seedItems[itemIndex[0]][itemIndex[1]][itemIndex[2]].objects[itemIndex[3]] = temp;
                            this.displaySeedEditorElements(undefined, this.selectedItems);
                        }
                    } else {
                        var tempKeys = Object.keys(this.seedItems[itemIndex[0]][itemIndex[1]][itemIndex[2]].objects);

                        if (tempKeys.length > parseInt(itemIndex[3]) + 1) {
                            var temp = this.seedItems[itemIndex[0]][itemIndex[1]][itemIndex[2]].objects[parseInt(itemIndex[3]) + 1];

                            this.seedItems[itemIndex[0]][itemIndex[1]][itemIndex[2]].objects[parseInt(itemIndex[3]) + 1] = this.seedItems[itemIndex[0]][itemIndex[1]][itemIndex[2]].objects[itemIndex[3]];
                            this.seedItems[itemIndex[0]][itemIndex[1]][itemIndex[2]].objects[itemIndex[3]] = temp;
                            this.displaySeedEditorElements(undefined, this.selectedItems);
                        }
                    }
                }
                break;

            case 'change':
                if (event.target.files && event.target.files.length > 0) {
                    event.target.files[0].text().then((text) => this.loadSeed(text));
                } else if (event.target.classList.contains('elements-ori-editor-pickuptype')) {
                    this.displaySeedEditorElements(event);
                } else if (event.target.classList.contains('elements-ori-editor-pickuptype-new-item')) {
                    this.changeSeedObjectsElements(event.target.closest('fieldset'), event.target.selectedOptions[0].textContent, this.newItemContainer.querySelector('select.elements-newitem-ubergroup').selectedOptions[0].textContent, this.newItemContainer.querySelector('select.elements-newitem-ubergroupid').nextElementSibling.selectedOptions[0].textContent, 'default');
                } else if (event.target.classList.contains('elements-ori-editor-value') && event.target.dataset.itemIndex) {
                    var itemIndex = event.target.dataset.itemIndex.split('|'),
                        container = event.target.closest('fieldset');

                    this.selectedItems.objects[itemIndex[3]].pickupType = container.querySelector('select.elements-ori-editor-pickuptype').selectedOptions[0].innerText;

                    if (event.target.nodeName === 'SELECT') {
                        this.selectedItems.objects[itemIndex[3]].item = event.target.options[event.target.selectedIndex].innerText;
                    } else if (event.target.nodeName === 'INPUT') {
                        this.selectedItems.objects[itemIndex[3]].item = event.target.value;
                    }
                    this.selectedItems.objects[itemIndex[3]].name = this.selectedItems.objects[itemIndex[3]].pickupType + ' ' + this.selectedItems.objects[itemIndex[3]].item;

                    switch (this.selectedItems.objects[itemIndex[3]].pickupType) {
                        case "SpiritLight":
                            this.selectedIcon.dataset.iconName = this.selectedItems.objects[itemIndex[3]].iconName = 'Small Experience';
                            this.selectedIcon.dataset.category = this.selectedItems.objects[itemIndex[3]].category = 'pickup';
                            break;
                        case "Resource":
                            this.selectedIcon.dataset.iconName = this.selectedItems.objects[itemIndex[3]].iconName = this.seedNameToIconName[this.selectedItems.objects[itemIndex[3]].item];
                            this.selectedIcon.dataset.category = this.selectedItems.objects[itemIndex[3]].category = 'mapIcon';
                            break;
                        case "Ability":
                            this.selectedIcon.dataset.iconName = this.selectedItems.objects[itemIndex[3]].iconName = this.seedNameToIconName[this.selectedItems.objects[itemIndex[3]].item];
                            this.selectedIcon.dataset.category = this.selectedItems.objects[itemIndex[3]].category = 'ability';
                            break;
                        case "Shard":
                            this.selectedIcon.dataset.iconName = this.selectedItems.objects[itemIndex[3]].iconName = this.seedNameToIconName[this.selectedItems.objects[itemIndex[3]].item];
                            this.selectedIcon.dataset.category = this.selectedItems.objects[itemIndex[3]].category = 'shard';
                            break;
                        case "SystemCommand":
                            break;
                        case "Teleporter":
                            this.selectedIcon.dataset.iconName = this.selectedItems.objects[itemIndex[3]].iconName = 'Spirit Well';
                            this.selectedIcon.dataset.category = this.selectedItems.objects[itemIndex[3]].category = 'mapIcon';
                            break;
                        case "Message":
                            break;
                        case "Multi":
                            break;
                        case "UberState":
                            break;
                        case "QuestEvent":
                            break;
                    }
                    this.iconFactoryClass.setIconFromSheet(this.selectedIcon);
                } else if (event.target.classList.contains('elements-newitem-ubergroupid')) {
                    if (event.target.nextElementSibling && (event.target.nextElementSibling.classList.contains('elements-newitem-uberid') || event.target.nextElementSibling.classList.contains('elements-item-uberstate-uberid'))) {
                        //event.target.nextElementSibling.remove();
                        this.changeUberIDSelectElement(event.target.selectedOptions[0].getAttribute('name'), event.target.nextElementSibling);
                    } else {
                        event.target.parentNode.appendChild(this.createSeedEditorHTML('UberID', event.target.selectedOptions[0].getAttribute('name')));
                    }

                    if (event.target.nextElementSibling && event.target.nextElementSibling.classList.contains('elements-uberid-value-container')) {
                        event.target.nextElementSibling.remove();
                    }
                    //this.selectUbers = this.createSeedEditorHTML('UberID');

                    //event.target.parentNode.appendChild(this.createSeedEditorHTML('UberID', event.target.selectedOptions[0].getAttribute('name')));
                } else if (event.target.classList.contains('elements-newitem-uberid')) {
                    if (event.target.previousElementSibling.classList.contains('elements-show-seedobject')) {
                        var uberGroupId = event.target.previousElementSibling.options[event.target.previousElementSibling.selectedIndex].innerText,
                            uberId = event.target.options[event.target.selectedIndex].innerText;

                        if (this.seedItems[uberGroupId] !== undefined && this.seedItems[uberGroupId][uberId] !== undefined) {
                            this.selectedItems = this.seedItems[uberGroupId][uberId].default;
                        } else {
                            this.selectedItems = undefined;
                        }
                        this.displaySeedEditorElements(undefined, this.selectedItems);

                        this.createUberIDValueElement(uberGroupId, uberId, event.target.parentNode);

                        /*if (this.seedItems[uberGroupId] !== undefined && this.seedItems[uberGroupId][uberId] !== undefined && Object.keys(this.seedItems[uberGroupId][uberId]).length > 0) {
                            if (event.target.parentNode.querySelector('input.elements-newitem-uberid-value')) {
                                event.target.parentNode.replaceChild(this.createSeedEditorHTML('UberIDValues', Object.keys(this.seedItems[uberGroupId][uberId])), event.target.parentNode.querySelector('input.elements-newitem-uberid-value').parentNode);
                            } else {
                                event.target.parentNode.appendChild(this.createSeedEditorHTML('UberIDValues', Object.keys(this.seedItems[uberGroupId][uberId])));
                            }
                        }*/
                    }
                } else if (event.target.classList.contains('elements-newitem-uberid-value')) {
                    if (event.target.parentNode.previousElementSibling.classList.contains('elements-newitem-uberid')) {
                        var uberGroupId = event.target.parentNode.previousElementSibling.previousElementSibling.options[event.target.parentNode.previousElementSibling.previousElementSibling.selectedIndex].innerText,
                            uberId = event.target.parentNode.previousElementSibling.options[event.target.parentNode.previousElementSibling.selectedIndex].innerText,
                            uberIdValue = event.target.value;

                        if (this.seedItems[uberGroupId] !== undefined) {
                            this.selectedItems = this.seedItems[uberGroupId][uberId][uberIdValue];
                        } else {
                            this.selectedItems = undefined;
                        }
                        this.displaySeedEditorElements(undefined, this.selectedItems);
                    }
                } else if (event.target.classList.contains('elements-item-uberstate-uberid')) {
                    var parent = event.target.closest('fieldset'),
                        uberIdGroup = event.target.previousElementSibling.selectedOptions[0].getAttribute('name'),
                        uberId = event.target.selectedOptions[0].getAttribute('name');

                    parent.querySelector('label.elements-uberstatetype').innerText = this.getGameUberID(uberIdGroup, uberId).type;
                }
                break;

            case 'input':
                if (event.target.classList.contains('elements-newitem-uberid-value')) {
                    if (event.target.parentNode.previousElementSibling.classList.contains('elements-newitem-uberid')) {
                        var uberGroupId = event.target.parentNode.previousElementSibling.previousElementSibling.options[event.target.parentNode.previousElementSibling.previousElementSibling.selectedIndex].innerText,
                            uberId = event.target.parentNode.previousElementSibling.options[event.target.parentNode.previousElementSibling.selectedIndex].innerText,
                            uberIdValue = event.target.value;

                        if (this.seedItems[uberGroupId] !== undefined) {
                            this.selectedItems = this.seedItems[uberGroupId][uberId][uberIdValue];
                        } else {
                            this.selectedItems = undefined;
                        }
                        this.displaySeedEditorElements(undefined, this.selectedItems);
                    }
                } else if (event.target.classList.contains('elements-show-seedobject-lineindex')) {
                    var uberGroupID = document.querySelector('select.elements-show-seedobject').selectedOptions[0].innerText,
                        uberID = document.querySelector('select.elements-show-seedobject-uberid').selectedOptions[0].innerText,
                        uberIDValue = 'default';

                    if (event.target.nextElementSibling) {
                        uberIDValue = event.target.nextElementSibling.value;
                    }

                    this.changeLineIndex(uberGroupID, uberID, uberIDValue, event.target.value);
                } else if (event.target.nodeName === 'INPUT') {
                    var itemIndex,
                        container = event.target.closest('fieldset');

                    if (event.target.dataset.itemIndex === undefined) {
                        /*var whileParent = event.target.parentNode;
                        while (whileParent.dataset.itemIndex === undefined && whileParent.parentNode) {
                            whileParent = whileParent.parentNode;
                        }*/
                        itemIndex = container.querySelector('select.elements-ori-editor-pickuptype').dataset.itemIndex.split('|');
                    } else {
                        itemIndex = event.target.dataset.itemIndex.split('|');
                    }

                    if (event.target.classList.contains('elements-addremove-object')) {
                        if (event.target.value === 'add') {
                            this.selectedItems.objects[itemIndex[3]].addRemove = true;
                        } else {
                            this.selectedItems.objects[itemIndex[3]].addRemove = false;
                        }
                    } else {

                        this.selectedItems.objects[itemIndex[3]].pickupType = container.querySelector('select.elements-ori-editor-pickuptype').selectedOptions[0].innerText;
                        this.selectedItems.objects[itemIndex[3]].item = event.target.value;
                        this.selectedItems.objects[itemIndex[3]].name = this.selectedItems.objects[itemIndex[3]].pickupType + ' ' + this.selectedItems.objects[itemIndex[3]].item;

                        switch (this.selectedItems.objects[itemIndex[3]].pickupType) {
                            case "SpiritLight":
                                this.selectedIcon.dataset.iconName = this.selectedItems.objects[itemIndex[3]].iconName = 'Small Experience';
                                this.selectedIcon.dataset.category = this.selectedItems.objects[itemIndex[3]].category = 'pickup';
                                break;
                            case "Resource":
                                this.selectedIcon.dataset.iconName = this.selectedItems.objects[itemIndex[3]].iconName = this.seedNameToIconName[this.selectedItems.objects[itemIndex[3]].item];
                                this.selectedIcon.dataset.category = this.selectedItems.objects[itemIndex[3]].category = 'mapIcon';
                                break;
                            case "Ability":
                                this.selectedIcon.dataset.iconName = this.selectedItems.objects[itemIndex[3]].iconName = this.seedNameToIconName[this.selectedItems.objects[itemIndex[3]].item];
                                this.selectedIcon.dataset.category = this.selectedItems.objects[itemIndex[3]].category = 'ability';
                                break;
                            case "Shard":
                                this.selectedIcon.dataset.iconName = this.selectedItems.objects[itemIndex[3]].iconName = this.seedNameToIconName[this.selectedItems.objects[itemIndex[3]].item];
                                this.selectedIcon.dataset.category = this.selectedItems.objects[itemIndex[3]].category = 'shard';
                                break;
                            case "SystemCommand":
                                break;
                            case "Teleporter":
                                this.selectedIcon.dataset.iconName = this.selectedItems.objects[itemIndex[3]].iconName = 'Spirit Well';
                                this.selectedIcon.dataset.category = this.selectedItems.objects[itemIndex[3]].category = 'mapIcon';
                                break;
                            case "Message":
                                break;
                            case "Multi":
                                break;
                            case "UberState":
                                break;
                            case "QuestEvent":
                                break;
                        }
                        this.iconFactoryClass.setIconFromSheet(this.selectedIcon);
                    }
                }
                break;

            case 'mouseover':
                var parent = event.target.tagName !== 'FIELDSET' ? event.target.closest('fieldset') : event.target;

                if (parent !== null && this.currentHoveredFieldset !== parent) {
                    if (this.currentHoveredFieldset !== undefined) {
                        this.currentHoveredFieldset.querySelector('button.elements-remove-object').remove();
                        this.currentHoveredFieldset.querySelector('div.elements-changelineinex-container').remove();
                        this.currentHoveredFieldset = undefined;
                    }
                    this.currentHoveredFieldset = parent;

                    var removeEl = document.createElement('button'),
                        lineIndex = this.createSeedEditorHTML('ChangeLineIndex');

                    removeEl.className = 'elements-remove-object';
                    removeEl.style.backgroundColor = '#4a4a4a';
                    removeEl.style.color = 'white';
                    removeEl.style.borderWidth = '1px';
                    removeEl.style.margin = '2px';
                    removeEl.style.minHeight = '22px';
                    removeEl.style.fontFamily = 'Roboto, sans-serif';
                    removeEl.style.fontSize = '13.3333px';
                    removeEl.innerText = 'Remove Object';
                    removeEl.addEventListener('click', this, false);
                    parent.children[0].appendChild(removeEl);
                    parent.children[0].appendChild(lineIndex);
                }
                break;

            case 'mouseout':
                var parent = event.target.tagName !== 'FIELDSET' ? event.target.closest('fieldset') : event.target;

                if (parent !== null && this.currentHoveredFieldset !== parent) {
                    if (parent.children[0].querySelector('button.elements-remove-object')) {
                        parent.children[0].querySelector('button.elements-remove-object').remove();
                        parent.children[0].querySelector('div.elements-changelineinex-container').remove();
                        this.currentHoveredFieldset = undefined;
                    }
                } else if (parent === null && this.currentHoveredFieldset !== undefined) {
                    this.currentHoveredFieldset.querySelector('button.elements-remove-object').remove();
                    this.currentHoveredFieldset.querySelector('div.elements-changelineinex-container').remove();
                    this.currentHoveredFieldset = undefined;
                }
                break;
        }
    }

}

export default SeedTransform;
/*
var locData = [
    [MarshSpawn.RockHC, InkwaterMarsh, PickupType.Resource, Life, swampStateGroup, 21786, healthContainerA, 60210, -958, -4313],
    [MarshSpawn.FirstPickupEX, InkwaterMarsh, PickupType.SpiritLight, 50, swampStateGroup, 21786, smallExpA, 49485, -764, -4313],
    [MarshSpawn.GrappleHC, InkwaterMarsh, PickupType.Resource, Life, swampStateGroup, 21786, healthContainerA, 25761, -718, -4278],
    [MarshSpawn.BridgeEX, InkwaterMarsh, PickupType.SpiritLight, 50, swampStateGroup, 21786, xpOrbA, 6987, -739, -4324],
    [MarshSpawn.ResilienceShard, InkwaterMarsh, PickupType.Shard, Resilience, pickupsGroup, 23987, barrierShardPickup, 59173, -790, -4335],
    [MarshSpawn.ResilienceOre, InkwaterMarsh, PickupType.Resource, Ore, swampStateGroup, 21786, gorlekOreA, 29892, -810, -4334],
    [MarshSpawn.BashEC, InkwaterMarsh, PickupType.Resource, Energy, swampStateGroup, 21786, halfEnergyCellA, 7152, -667, -4330],
    [MarshSpawn.PreLupoEX, InkwaterMarsh, PickupType.SpiritLight, 50, inkwaterMarshStateGroup, 9593, xpOrbA, 5929, -656, -4342],
    [MarshSpawn.LupoMap, InkwaterMarsh, Shop, LupoZoneMap, npcsStateGroup, 48248, hasMapInkwaterMarsh, 18767, -589, -4348],
    [MarshSpawn.RegenTree, InkwaterMarsh, Ability, Regenerate, treesDontWorry, 0, Regenerate, 77, -539, -4406],
    [MarshSpawn.LeverEC, InkwaterMarsh, PickupType.Resource, Energy, swampStateGroup, 21786, energyHalfCell, 17920, -625, -4418],
    [MarshSpawn.LeftTokkEX, InkwaterMarsh, PickupType.SpiritLight, 50, swampStateGroup, 21786, expOrb, 59513, -755, -4423],
    [MarshSpawn.FightRoomEX, InkwaterMarsh, PickupType.SpiritLight, 50, inkwaterMarshStateGroup, 9593, xpOrb, 42047, -783, -4452],
    [MarshSpawn.CaveKS, InkwaterMarsh, PickupType.Resource, Keystone, swampStateGroup, 21786, swampWalljumpChallengeBKeystoneBCollected, 64677, -852, -4404],
    [MarshSpawn.TheMissingKey, InkwaterMarsh, QuestEvent, Keystone, npcsStateGroup, 48248, marshKeystoneQuest, 51645 = 3, -695, -4417],
    [MarshSpawn.CaveOre, InkwaterMarsh, PickupType.Resource, Ore, inkwaterMarshStateGroup, 9593, gorlekOreA, 23858, -858, -4423],
    [MarshSpawn.LongSwimEX, InkwaterMarsh, PickupType.SpiritLight, 100, swampStateGroup, 21786, mediumExpA, 23154, -837, -4315],
    [MarshSpawn.BurrowOre, InkwaterMarsh, PickupType.Resource, Ore, inkwaterMarshStateGroup, 9593, gorlekOreA, 20382, -935, -4357],
    [MarshSpawn.LifepactShard, InkwaterMarsh, PickupType.Shard, LifePact, pickupsGroup, 23987, bloodPactShardPickup, 50415, -916, -4399],
    [MarshSpawn.BurrowsApproachLedgeEX, InkwaterMarsh, PickupType.SpiritLight, 50, howlsOriginGroup, 24922, smallExpA, 32076, -1001, -4451],
    [MarshSpawn.CrusherSwimEX, InkwaterMarsh, PickupType.SpiritLight, 200, howlsOriginGroup, 24922, largeExpA, 62138, -979, -4510],
    [MarshSpawn.IntoTheBurrows, InkwaterMarsh, QuestEvent, SL1000, npcsStateGroup, 48248, inkwaterWellQuest, 18458 = 4, -932, -4494],
    [MarshSpawn.RecklessShard, InkwaterMarsh, PickupType.Shard, Reckless, pickupsGroup, 23987, recklessShardPickup, 9864, -499, -4411],
    [MarshSpawn.FangEC, InkwaterMarsh, PickupType.Resource, Energy, swampStateGroup, 21786, halfEnergyCellA, 61706, -233, -4385],
    [MarshSpawn.FangQI, InkwaterMarsh, QuestEvent, Fang, questUberStateGroup, 14019, braveMokiItemCollected, 27539, -221, -4406],
    [MarshSpawn.ALittleBraver, InkwaterMarsh, QuestEvent, Ore, questUberStateGroup, 14019, braveMokiQuest, 15983 = 3, -391, -4414],
    [MidnightBurrows.DamageTree, InkwaterMarsh, Ability, AncestralLight, treesDontWorry, 0, AncestralLight, 121, -840, -4488],
    [MidnightBurrows.LeftKS, MidnightBurrows, PickupType.Resource, Keystone, howlsOriginGroup, 24922, keystoneA, 60358, -800, -4580],
    [MidnightBurrows.RightKS, MidnightBurrows, PickupType.Resource, Keystone, howlsOriginGroup, 24922, keystoneA, 47244, -597, -4548],
    [MidnightBurrows.UpperKS, MidnightBurrows, PickupType.Resource, Keystone, howlsOriginGroup, 24922, keystoneA, 34250, -725, -4520],
    [MidnightBurrows.LowerKS, MidnightBurrows, PickupType.Resource, Keystone, howlsOriginGroup, 24922, keystoneB, 33535, -704, -4609],
    [MidnightBurrows.LupoMap, MidnightBurrows, Shop, LupoZoneMap, npcsStateGroup, 48248, hasMapHowlsOrigin, 45538, -870, -4555],
    [MidnightBurrows.DeflectorShard, MidnightBurrows, PickupType.Shard, Deflector, howlsOriginGroup, 24922, spiritShard, 46311, -773, -4528],
    [MidnightBurrows.TabletQI, MidnightBurrows, QuestEvent, Tablet, questUberStateGroup, 14019, howlsOriginTreasureCollected, 52747, -848, -4530],
    [HowlsDen.UpperEX, InkwaterMarsh, PickupType.SpiritLight, 50, swampStateGroup, 21786, xpOrbB, 43668, -433, -4420],
    [HowlsDen.RightHC, InkwaterMarsh, PickupType.Resource, Life, swampStateGroup, 21786, halfHealthCellA, 28908, -332, -4439],
    [HowlsDen.LeftHC, InkwaterMarsh, PickupType.Resource, Life, inkwaterMarshStateGroup, 9593, healthContainer, 61304, -569, -4454],
    [HowlsDen.AboveDoorKS, InkwaterMarsh, PickupType.Resource, Keystone, swampStateGroup, 21786, keyStone, 22068, -439, -4462],
    [HowlsDen.MagnetShard, InkwaterMarsh, PickupType.Shard, Magnet, swampStateGroup, 21786, spiritShardA, 63545, -239, -4441],
    [HowlsDen.SwordTree, InkwaterMarsh, Ability, SpiritEdge, treesDontWorry, 0, SpiritEdge, 100, -296, -4483],
    [HowlsDen.BoneOre, InkwaterMarsh, PickupType.Resource, Ore, swampStateGroup, 21786, gorlekOreA, 2046, -432, -4503],
    [HowlsDen.AboveTPEX, InkwaterMarsh, PickupType.SpiritLight, 50, swampStateGroup, 21786, xpOrbC, 16206, -389, -4503],
    [HowlsDen.LaserKS, InkwaterMarsh, PickupType.Resource, Keystone, swampStateGroup, 21786, laserPuzzleSolved, 2852, -400, -4568],
    [HowlsDen.CombatShrine, InkwaterMarsh, PickupType.Resource, ShardSlot, howlsOriginGroup, 24922, shrineArena, 13993, -314, -4570],
    [HowlsDen.DoubleJumpEX, InkwaterMarsh, PickupType.SpiritLight, 50, inkwaterMarshStateGroup, 9593, expOrb, 17818, -507, -4537],
    [HowlsDen.StickyShard, InkwaterMarsh, PickupType.Shard, Sticky, pickupsGroup, 23987, glueShardPickup, 27134, -547, -4530],
    [HowlsDen.DoubleJumpTree, InkwaterMarsh, Ability, DoubleJump, treesDontWorry, 0, DoubleJump, 5, -555, -4551],
    [MarshPastOpher.TrialLeftEX, InkwaterMarsh, PickupType.SpiritLight, 100, inkwaterMarshStateGroup, 9593, expOrbA, 5253, -527, -4354],
    [MarshPastOpher.TrialOre, InkwaterMarsh, PickupType.Resource, Ore, inkwaterMarshStateGroup, 9593, gorlekOreA, 25989, -501, -4340],
    [MarshPastOpher.TrialEC, InkwaterMarsh, PickupType.Resource, Energy, inkwaterMarshStateGroup, 9593, halfEnergyCellA, 27562, -473, -4340],
    [MarshPastOpher.TrialHC, InkwaterMarsh, PickupType.Resource, Life, swampStateGroup, 21786, lifeCellA, 20194, -437, -4381],
    [MarshPastOpher.TrialRightEX, InkwaterMarsh, PickupType.SpiritLight, 100, swampStateGroup, 21786, largeExpA, 10413, -343, -4357],
    [MarshPastOpher.CombatShrine, InkwaterMarsh, PickupType.Resource, ShardSlot, swampStateGroup, 21786, enemyRoom, 18109, -382, -4337],
    [MarshPastOpher.SwingPoleEX, InkwaterMarsh, PickupType.SpiritLight, 50, inkwaterMarshStateGroup, 9593, expOrb, 59344, -492, -4260],
    [MarshPastOpher.LeftEyestone, InkwaterMarsh, PickupType.Resource, Eyestone, swampStateGroup, 21786, keyStoneA, 27433, -461, -4195],
    [MarshPastOpher.RightEyestone, InkwaterMarsh, PickupType.Resource, Eyestone, swampStateGroup, 21786, keyStoneB, 37225, -394, -4188],
    [MarshPastOpher.BowEC, InkwaterMarsh, PickupType.Resource, Energy, swampStateGroup, 21786, energyHalfCellA, 10295, -422, -4273],
    [MarshPastOpher.BowTree, InkwaterMarsh, Ability, SpiritArc, treesDontWorry, 0, SpiritArc, 97, -457, -4267],
    [MarshPastOpher.CeilingEX, InkwaterMarsh, PickupType.SpiritLight, 100, swampStateGroup, 21786, mediumExpA, 50255, -641, -4223],
    [MarshPastOpher.PoolsPathEC, InkwaterMarsh, PickupType.Resource, Energy, inkwaterMarshStateGroup, 9593, energyContainer, 26457, -664, -4187],
    [MarshPastOpher.PoolsPathEX, InkwaterMarsh, PickupType.SpiritLight, 200, lagoonStateGroup, 945, largeExpC, 10833, -801, -4186],
    [WestHollow.CrusherHC, KwoloksHollow, PickupType.Resource, Life, kwolokGroupDescriptor, 937, healthHalfCell, 61897, -254, -4225],
    [WestHollow.FarLeftEX, KwoloksHollow, PickupType.SpiritLight, 50, kwolokGroupDescriptor, 937, smallExpOrbPlaceholder, 16163, -357, -4294],
    [WestHollow.RockPuzzleEX, KwoloksHollow, PickupType.SpiritLight, 50, kwolokGroupDescriptor, 937, smallExpOrbPlaceholder, 2538, -296, -4293],
    [WestHollow.HiddenEC, KwoloksHollow, PickupType.Resource, Energy, kwolokGroupDescriptor, 937, energyHalfContainer, 8518, -177, -4353],
    [WestHollow.QuickshotShard, KwoloksHollow, PickupType.Shard, Quickshot, pickupsGroup, 23987, frenzyShardPickup, 61017, -310, -4326],
    [WestHollow.SwimEC, KwoloksHollow, PickupType.Resource, Energy, kwolokGroupDescriptor, 937, energyHalfContainer, 24175, -177, -4353],
    [WestHollow.LupoMap, KwoloksHollow, Shop, LupoZoneMap, npcsStateGroup, 48248, hasMapKwoloksHollow, 3638, -146, -4321],
    [WestHollow.TrialHC, KwoloksHollow, PickupType.Resource, Life, kwolokGroupDescriptor, 937, halfHealthCell, 2463, -121, -4269],
    [WestHollow.BelowLupoEX, KwoloksHollow, PickupType.SpiritLight, 50, kwolokGroupDescriptor, 937, smallExpOrbPlaceholderA, 48192, -82, -4370],
    [WestHollow.AboveDashEX, KwoloksHollow, PickupType.SpiritLight, 50, kwolokGroupDescriptor, 937, smallExpOrbPlaceholderC, 61744, -99, -4408],
    [WestHollow.DashRightEX, KwoloksHollow, PickupType.SpiritLight, 50, kwolokGroupDescriptor, 937, smallExpOrbPlaceholder, 37926, 11, -4401],
    [WestHollow.CrusherEX, KwoloksHollow, PickupType.SpiritLight, 200, kwolokGroupDescriptor, 937, xpOrbA, 50176, -37, -4453],
    [WestHollow.DashTree, KwoloksHollow, Ability, Dash, treesDontWorry, 0, Dash, 102, -69, -4453],
    [EastHollow.HandToHandMap, KwoloksHollow, QuestEvent, Map, questUberStateGroup, 14019, tradeSequenceQuest, 26318 = 1, -110, -4220],
    [EastHollow.GladesApproachOre, KwoloksHollow, PickupType.Resource, Ore, kwolokGroupDescriptor, 937, gromOreA, 10729, -97, -4190],
    [EastHollow.HornBeetleFightEX, KwoloksHollow, PickupType.SpiritLight, 50, kwolokGroupDescriptor, 937, xpOrbA, 13413, -85, -4209],
    [EastHollow.SpikeLanternEX, KwoloksHollow, PickupType.SpiritLight, 50, kwolokGroupDescriptor, 937, xpOrbB, 5568, -55, -4201],
    [EastHollow.SecretRoofEX, KwoloksHollow, PickupType.SpiritLight, 100, kwolokGroupDescriptor, 937, mediumExpA, 45987, 9, -4197],
    [EastHollow.MortarEX, KwoloksHollow, PickupType.SpiritLight, 100, kwolokGroupDescriptor, 937, mediumExpC, 19529, 57, -4189],
    [EastHollow.BashEC, KwoloksHollow, PickupType.Resource, Energy, kwolokGroupDescriptor, 937, energyHalfCell, 23772, 46, -4237],
    [EastHollow.BashHC, KwoloksHollow, PickupType.Resource, Life, bashIntroductionA__clone1Group, 13428, healthContainerA, 59730, 83, -4264],
    [EastHollow.BashEX, KwoloksHollow, PickupType.SpiritLight, 100, kwolokGroupDescriptor, 937, mediumExpB, 30182, -31, -4302],
    [EastHollow.BashTree, KwoloksHollow, Ability, Bash, treesDontWorry, 0, Bash, 0, -20, -4326],
    [EastHollow.KwoloksWisdom, KwoloksHollow, QuestEvent, SL500, questUberStateGroup, 14019, kwoloksWisdomQuest, 50597 = 4, 240, -4207],
    [EastHollow.RightKwolokEX, KwoloksHollow, PickupType.SpiritLight, 100, _petrifiedForestGroup, 58674, expOrbA, 20983, 289, -4196],
    [EastHollow.SilentSwimEC, KwoloksHollow, PickupType.Resource, Energy, _petrifiedForestGroup, 58674, energyContainerA, 9583, 331, -4192],
    [EastHollow.SplinterShard, KwoloksHollow, PickupType.Shard, Splinter, pickupsGroup, 23987, splinterShardPickup, 62973, 216, -4308],
    [EastHollow.KwolokSwimOre, KwoloksHollow, PickupType.Resource, Ore, kwoloksCavernThroneRoomGroup, 46462, gorlekOreA, 37897, 243, -4224],
    [EastHollow.KwolokSwimLeftEX, KwoloksHollow, PickupType.SpiritLight, 200, kwoloksCavernThroneRoomGroup, 46462, largeExpA, 29054, 113, -4229],
    [EastHollow.KwolokSwimRightEX, KwoloksHollow, PickupType.SpiritLight, 50, kwoloksCavernThroneRoomGroup, 46462, smallExpA, 20780, 161, -4245],
    [EastHollow.DepthsExteriorEX, KwoloksHollow, PickupType.SpiritLight, 100, mouldwoodDepthsGroup, 18793, mediumExpB, 42980, 131, -4272],
    [GladesTown.HandToHandPouch, WellspringGlades, QuestEvent, Pouch, questUberStateGroup, 14019, tradeSequenceQuest, 26318 = 2, -282, -4155],
    [GladesTown.HandToHandLantern, WellspringGlades, QuestEvent, Lantern, questUberStateGroup, 14019, tradeSequenceQuest, 26318 = 6, -426, -4155],
    [GladesTown.HandToHandCanteen, WellspringGlades, QuestEvent, Canteen, questUberStateGroup, 14019, tradeSequenceQuest, 26318 = 9, -410, -4142],
    [GladesTown.HandToHandSoup, WellspringGlades, QuestEvent, Soup, questUberStateGroup, 14019, tradeSequenceQuest, 26318 = 4, -110, -4090],
    [GladesTown.AcornQI, WellspringGlades, QuestEvent, Acorn, questUberStateGroup, 14019, darkCaveQuestItemCollected, 2782, -10, -4551],
    [GladesTown.IntoTheDarkness, WellspringGlades, QuestEvent, SL500, questUberStateGroup, 14019, darkCaveQuest, 33776 = 3, -358, -4185],
    [GladesTown.HoleHutEC, WellspringGlades, PickupType.Resource, Energy, hubUberStateGroup, 42178, energyCellA, 52786, -116, -4540],
    [GladesTown.AboveGromHC, WellspringGlades, PickupType.Resource, Life, wellspringGladesGroup, 44310, lifeVesselA, 29043, -326, -4103],
    [GladesTown.LupoSwimHC, WellspringGlades, PickupType.Resource, Life, wellspringGladesGroup, 44310, lifeVesselB, 17523, -161, -4192],
    [GladesTown.UpperOre, WellspringGlades, PickupType.Resource, Ore, hubUberStateGroup, 42178, gorlekOreB, 27110, -418, -4104],
    [GladesTown.LowerOre, WellspringGlades, PickupType.Resource, Ore, hubUberStateGroup, 42178, gorlekOreA, 23125, -416, -4174],
    [GladesTown.ArcingShard, WellspringGlades, PickupType.Shard, Arcing, pickupsGroup, 23987, chainLightningPickup, 23015, -325, -4135],
    [GladesTown.BountyShard, WellspringGlades, PickupType.Shard, Bounty, pickupsGroup, 23987, focusShardPickup, 14014, -247, -4106],
    [GladesTown.LupoSoupEX, WellspringGlades, PickupType.SpiritLight, 100, hubUberStateGroup, 42178, hutAExpOrb, 51468, -161, -4521],
    [GladesTown.BraveMokiHutEX, WellspringGlades, PickupType.SpiritLight, 100, hubUberStateGroup, 42178, hutBExpOrb, 13327, -177, -4541],
    [GladesTown.MotayHutEX, WellspringGlades, PickupType.SpiritLight, 100, hubUberStateGroup, 42178, hutCExpOrb, 57455, -172, -4584],
    [GladesTown.HoleHutEX, WellspringGlades, PickupType.SpiritLight, 100, hubUberStateGroup, 42178, hutDExpOrbB, 30520, -118, -4521],
    [GladesTown.UpperLeftEX, WellspringGlades, PickupType.SpiritLight, 100, hubUberStateGroup, 42178, mediumExpB, 59623, -374, -4103],
    [GladesTown.LupoSwimMiddleEX, WellspringGlades, PickupType.SpiritLight, 100, hubUberStateGroup, 42178, mediumExpE, 9780, -225, -4162],
    [GladesTown.CaveBurrowEX, WellspringGlades, PickupType.SpiritLight, 100, hubUberStateGroup, 42178, mediumExpF, 18448, -307, -4168],
    [GladesTown.BelowHoleHutEX, WellspringGlades, PickupType.SpiritLight, 100, hubUberStateGroup, 42178, mediumExpG, 6117, -232, -4106],
    [GladesTown.KeyMokiHutEX, WellspringGlades, PickupType.SpiritLight, 100, hubUberStateGroup, 42178, hutEExpOrb, 51934, -119, -4560],
    [GladesTown.AboveTpEX, WellspringGlades, PickupType.SpiritLight, 50, hubUberStateGroup, 42178, smallExpH, 42762, -307, -4119],
    [GladesTown.AboveCaveEX, WellspringGlades, PickupType.SpiritLight, 50, hubUberStateGroup, 42178, smallExpA, 30206, -363, -4172],
    [GladesTown.LupoSwimLeftEX, WellspringGlades, PickupType.SpiritLight, 50, hubUberStateGroup, 42178, smallExpB, 37028, -277, -4173],
    [GladesTown.UpdraftCeilingEX, WellspringGlades, PickupType.SpiritLight, 50, hubUberStateGroup, 42178, smallExpC, 63404, -240, -4130],
    [GladesTown.LeafPileEX, WellspringGlades, PickupType.SpiritLight, 50, hubUberStateGroup, 42178, smallExpG, 44748, -160, -4099],
    [GladesTown.DamageTree, WellspringGlades, Ability, AncestralLight, treesDontWorry, 0, AncestralLight, 120, -368, -4158],
    [GladesTown.RebuildTheGlades, WellspringGlades, QuestEvent, SL1000, questUberStateGroup, 14019, rebuildGladesQuest, 44578 = 2, 240, -4207],
    [GladesTown.ADiamondInTheRough, WellspringGlades, QuestEvent, PickupType.Shard, pickupsGroup, 23987, secretShardPickup, 14832, -408, -4162],
    [GladesTown.RegrowTheGlades, WellspringGlades, QuestEvent, SL1000, questUberStateGroup, 14019, regrowGladesQuest, 26394 = 2, 240, -4207],
    [WestGlades.GrappleEX, WellspringGlades, PickupType.SpiritLight, 100, wellspringGroupDescriptor, 53632, mediumExpA, 12019, -515, -4103],
    [WestGlades.AbovePlantEX, WellspringGlades, PickupType.SpiritLight, 100, kwolokGroupDescriptor, 937, mediumExpC, 31036, -586, -4091],
    [WestGlades.LowerPoolEX, WellspringGlades, PickupType.SpiritLight, 50, kwolokGroupDescriptor, 937, smallExpA, 40657, -586, -4129],
    [WestGlades.UpperPoolEX, WellspringGlades, PickupType.SpiritLight, 100, kwolokGroupDescriptor, 937, mediumExpB, 45744, -632, -4088],
    [WestGlades.SwimEC, WellspringGlades, PickupType.Resource, Energy, kwolokGroupDescriptor, 937, energyContainerA, 17761, -690, -4115],
    [WestGlades.LeftOre, WellspringGlades, PickupType.Resource, Ore, kwolokGroupDescriptor, 937, orePickup, 6703, -690, -4098],
    [WestGlades.RightOre, WellspringGlades, PickupType.Resource, Ore, kwolokGroupDescriptor, 937, orePickupB, 11846, -560, -4063],
    [WestGlades.ShrineHC, WellspringGlades, PickupType.Resource, Life, wellspringGladesGroup, 44310, lifeVesselA, 36911, -688, -4009],
    [WestGlades.CombatShrine, WellspringGlades, PickupType.Resource, ShardSlot, wellspringGladesGroup, 44310, shardSlotUpgrade, 9902, -636, -4018],
    [OuterWellspring.RightWallOre, TheWellspring, PickupType.Resource, Ore, wellspringGroupDescriptor, 53632, orePickupB, 25556, -738, -4018],
    [OuterWellspring.RightWallEC, TheWellspring, PickupType.Resource, Energy, wellspringGroupDescriptor, 53632, energyVesselA, 1911, -735, -3989],
    [OuterWellspring.RightWallEX, TheWellspring, PickupType.SpiritLight, 100, wellspringGroupDescriptor, 53632, mediumExpOrbPlaceholderE, 51706, -745, -3942],
    [OuterWellspring.TrialOre, TheWellspring, PickupType.Resource, Ore, waterMillStateGroupDescriptor, 37858, gorlekOreA, 58286, -678, -3934],
    [OuterWellspring.UltraGrappleShard, TheWellspring, PickupType.Shard, UltraGrapple, pickupsGroup, 23987, ultraLeashShardPickup, 12104, -799, -3913],
    [OuterWellspring.HiddenHC, TheWellspring, PickupType.Resource, Life, wellspringGroupDescriptor, 53632, lifeVesselA, 17403, -877, -3962],
    [OuterWellspring.EntranceRoofEX, TheWellspring, PickupType.SpiritLight, 100, wellspringGroupDescriptor, 53632, mediumExpOrbPlaceholderF, 42264, -850, -4024],
    [OuterWellspring.WheelEX, TheWellspring, PickupType.SpiritLight, 100, wellspringGroupDescriptor, 53632, mediumExpOrbPlaceholderG, 6500, -898, -4071],
    [OuterWellspring.BasementEC, TheWellspring, PickupType.Resource, Energy, wellspringGroupDescriptor, 53632, energyVesselB, 6869, -857, -4116],
    [OuterWellspring.LifeHarvestShard, TheWellspring, PickupType.Shard, LifeHarvest, pickupsGroup, 23987, vitalityLuckShardPickup, 53934, -998, -4030],
    [OuterWellspring.SwimEX, TheWellspring, PickupType.SpiritLight, 100, wellspringGroupDescriptor, 53632, mediumExpOrbPlaceholderC, 62356, -825, -4086],
    [OuterWellspring.SwimOre, TheWellspring, PickupType.Resource, Ore, wellspringGroupDescriptor, 53632, orePickupA, 21124, -761, -4094],
    [OuterWellspring.TheLostCompass, TheWellspring, QuestEvent, Ore, questUberStateGroup, 14019, lostCompassQuest, 20667 = 3, -811, -3973],
    [InnerWellspring.ThornShard, TheWellspring, PickupType.Shard, Thorn, pickupsGroup, 23987, counterstrikeShardPickup, 31426, -1376, -3995],
    [InnerWellspring.ThornEX, TheWellspring, PickupType.SpiritLight, 100, waterMillStateGroupDescriptor, 37858, mediumExpA, 22107, -1372, -3939],
    [InnerWellspring.ThreeWheelsEX, TheWellspring, PickupType.SpiritLight, 50, waterMillStateGroupDescriptor, 37858, smallExpA, 45906, -1247, -3928],
    [InnerWellspring.WaterSwitchEX, TheWellspring, PickupType.SpiritLight, 100, waterMillStateGroupDescriptor, 37858, xpOrbWater, 45656, -1197, -3972],
    [InnerWellspring.DrainHC, TheWellspring, PickupType.Resource, Life, waterMillStateGroupDescriptor, 37858, healthContainerA, 25833, -1168, -3991],
    [InnerWellspring.DrainEX, TheWellspring, PickupType.SpiritLight, 100, waterMillStateGroupDescriptor, 37858, mediumExpA, 41380, -1063, -3961],
    [InnerWellspring.LaserOre, TheWellspring, PickupType.Resource, Ore, waterMillStateGroupDescriptor, 37858, gorlekOreB, 58846, -1077, -3937],
    [InnerWellspring.LeverEC, TheWellspring, PickupType.Resource, Energy, waterMillStateGroupDescriptor, 37858, energyVessel, 57552, -1109, -3865],
    [InnerWellspring.LupoEX, TheWellspring, PickupType.SpiritLight, 100, waterMillStateGroupDescriptor, 37858, mediumExpB, 41911, -1142, -3862],
    [InnerWellspring.LupoMap, TheWellspring, Shop, LupoZoneMap, npcsStateGroup, 48248, hasMapWellspring, 1590, -1190, -3861],
    [InnerWellspring.ShortcutWheelEX, TheWellspring, PickupType.SpiritLight, 200, waterMillStateGroupDescriptor, 37858, xpOrbA, 33063, -1223, -3907],
    [InnerWellspring.GrappleTreeEX, TheWellspring, PickupType.SpiritLight, 100, waterMillStateGroupDescriptor, 37858, mediumExpA, 31136, -1308, -3885],
    [InnerWellspring.GrappleTree, TheWellspring, Ability, Grapple, treesDontWorry, 0, Grapple, 57, -1309, -3905],
    [InnerWellspring.AboveSpinArenaEX, TheWellspring, PickupType.SpiritLight, 200, waterMillStateGroupDescriptor, 37858, expOrb, 64086, -1237, -3741],
    [InnerWellspring.HandToHandHerbs, TheWellspring, QuestEvent, Herbs, questUberStateGroup, 14019, tradeSequenceQuest, 26318 = 3, -1168, -3733],
    [InnerWellspring.RotateRoomEX, TheWellspring, PickupType.SpiritLight, 100, waterMillStateGroupDescriptor, 37858, mediumExpB, 52110, -1151, -3841],
    [InnerWellspring.RotateRoomOre, TheWellspring, PickupType.Resource, Ore, waterMillStateGroupDescriptor, 37858, gorlekOreA, 47533, -1178, -3756],
    [InnerWellspring.NeedleQI, TheWellspring, QuestEvent, Needle, wellspringGroupDescriptor, 53632, questItemCompass, 41227, -1186, -3697],
    [InnerWellspring.LibraryEX, TheWellspring, PickupType.SpiritLight, 100, waterMillStateGroupDescriptor, 37858, mediumExpA, 59022, -1252, -3683],
    [InnerWellspring.AboveTpEX, TheWellspring, PickupType.SpiritLight, 50, waterMillStateGroupDescriptor, 37858, smallExpOrb, 2797, -1317, -3665],
    [InnerWellspring.BlueMoonSeed, TheWellspring, QuestEvent, Seed, questUberStateGroup, 14019, gardenerSeedGrappleCollected, 24142, -1185, -3669],
    [InnerWellspring.SwimOre, TheWellspring, PickupType.Resource, Ore, waterMillStateGroupDescriptor, 37858, gorlekOreA, 32932, -1204, -3715],
    [InnerWellspring.EscapeRevisitEX, TheWellspring, PickupType.SpiritLight, 100, waterMillStateGroupDescriptor, 37858, xpOrb, 56444, -1313, -3640],
    [PoolsApproach.CurrentEX, LumaPools, PickupType.SpiritLight, 100, lagoonStateGroup, 945, mediumExpB, 10682, -1047, -4217],
    [PoolsApproach.AboveWheelEX, LumaPools, PickupType.SpiritLight, 100, lagoonStateGroup, 945, mediumExpA, 14530, -941, -4145],
    [PoolsApproach.MillPathHC, LumaPools, PickupType.Resource, Life, lagoonStateGroup, 945, lagoonMillTransitionHealthCell, 37243, -851, -4196],
    [PoolsApproach.MillPathEC, LumaPools, PickupType.Resource, Energy, lagoonStateGroup, 945, energyCellA, 21334, -924, -4170],
    [PoolsApproach.MillPathEX, LumaPools, PickupType.SpiritLight, 100, lagoonStateGroup, 945, medExpA, 58723, -895, -4137],
    [PoolsApproach.BurrowsPathEX, InkwaterMarsh, PickupType.SpiritLight, 200, swampStateGroup, 21786, largeExpA, 21727, -1015, -4269],
    [EastPools.RightOre, LumaPools, PickupType.Resource, Ore, lumaPoolsStateGroup, 5377, orePickupA, 34852, -1134, -4117],
    [EastPools.TwoCrushersEX, LumaPools, PickupType.SpiritLight, 100, lumaPoolsStateGroup, 5377, xpOrbD, 13832, -1176, -4178],
    [EastPools.CurrentEX, LumaPools, PickupType.SpiritLight, 100, lumaPoolsStateGroup, 5377, xpOrbC, 17396, -1214, -4181],
    [EastPools.BelowLeverEX, LumaPools, PickupType.SpiritLight, 100, lumaPoolsStateGroup, 5377, xpOrbA, 27204, -1230, -4126],
    [EastPools.AboveDoorOre, LumaPools, PickupType.Resource, Ore, lumaPoolsStateGroup, 5377, pickupA, 19694, -1249, -4139],
    [EastPools.PurpleWallHC, LumaPools, PickupType.Resource, Life, lumaPoolsStateGroup, 5377, healthContainerA, 63201, -1278, -4086],
    [EastPools.HandToHandSpyglass, LumaPools, QuestEvent, Spyglass, questUberStateGroup, 14019, tradeSequenceQuest, 26318 = 8, -1284, -4126],
    [EastPools.AboveTpEX, LumaPools, PickupType.SpiritLight, 100, lumaPoolsStateGroup, 5377, xpOrbA, 7540, -1336, -4104],
    [EastPools.LupoOre, LumaPools, PickupType.Resource, Ore, lumaPoolsStateGroup, 5377, gorlekOreA, 12235, -1370, -4167],
    [EastPools.UltraBashShard, LumaPools, PickupType.Shard, UltraBash, pickupsGroup, 23987, ultraBashShardPickup, 25996, -1284, -4197],
    [EastPools.FightRoomHC, LumaPools, PickupType.Resource, Life, lumaPoolsStateGroup, 5377, healthContainerA, 45774, -1365, -4109],
    [EastPools.EnergyHarvestShard, LumaPools, PickupType.Shard, EnergyHarvest, lumaPoolsStateGroup, 5377, spiritShard, 40328, -1441, -4130],
    [EastPools.LupoEX, LumaPools, PickupType.SpiritLight, 100, lumaPoolsStateGroup, 5377, xpOrbB, 35440, -1414, -4155],
    [EastPools.LupoMap, LumaPools, Shop, LupoZoneMap, npcsStateGroup, 48248, hasMapLumaPools, 1557, -1391, -4167],
    [EastPools.BehindCrusherEX, LumaPools, PickupType.SpiritLight, 100, lumaPoolsStateGroup, 5377, xpOrbA, 18345, -1431, -4181],
    [EastPools.GrassSeed, LumaPools, QuestEvent, Seed, questUberStateGroup, 14019, gardenerSeedGrassCollected, 28662, -1528, -4140],
    [UpperPools.LowerKS, LumaPools, PickupType.Resource, Keystone, lumaPoolsStateGroup, 5377, keystoneC, 46926, -1576, -4126],
    [UpperPools.UpperLeftKS, LumaPools, PickupType.Resource, Keystone, lumaPoolsStateGroup, 5377, keystoneA, 35091, -1548, -4081],
    [UpperPools.UpperMidKS, LumaPools, PickupType.Resource, Keystone, lumaPoolsStateGroup, 5377, keystoneB, 16426, -1538, -4074],
    [UpperPools.UpperRightKS, LumaPools, PickupType.Resource, Keystone, lumaPoolsStateGroup, 5377, keystoneD, 41881, -1518, -4079],
    [UpperPools.FishPoolEX, LumaPools, PickupType.SpiritLight, 50, lumaPoolsStateGroup, 5377, mediumExpOrbPlaceholderC, 33110, -1568, -4063],
    [UpperPools.FishPoolOre, LumaPools, PickupType.Resource, Ore, lumaPoolsStateGroup, 5377, gorlekOreA, 31434, -1535, -4034],
    [UpperPools.BubblesEC, LumaPools, PickupType.Resource, Energy, lumaPoolsStateGroup, 5377, energyCellFragmentA, 1600, -1623, -4000],
    [UpperPools.LeftBubblesEX, LumaPools, PickupType.SpiritLight, 200, lumaPoolsStateGroup, 5377, largeExpOrbPlaceholderA, 628, -1572, -4077],
    [UpperPools.RightBubblesEX, LumaPools, PickupType.SpiritLight, 100, lumaPoolsStateGroup, 5377, xpOrbA, 21860, -1645, -4085],
    [UpperPools.SwimDashTree, LumaPools, Ability, SwimDash, treesDontWorry, 0, SwimDash, 104, -1430, -4082],
    [UpperPools.CurrentEX, LumaPools, PickupType.SpiritLight, 100, lumaPoolsStateGroup, 5377, xpOrbB, 52791, -1468, -4098],
    [UpperPools.RoofEX, LumaPools, PickupType.SpiritLight, 100, lumaPoolsStateGroup, 5377, xpOrbA, 33180, -1449, -4037],
    [UpperPools.WaterfallEC, LumaPools, PickupType.Resource, Energy, lumaPoolsStateGroup, 5377, energyContainerA, 32750, -1389, -4040],
    [WestPools.BurrowEX, LumaPools, PickupType.SpiritLight, 200, lumaPoolsStateGroup, 5377, xpOrbB, 62180, -1655, -4189],
    [WestPools.BurrowOre, LumaPools, PickupType.Resource, Ore, lumaPoolsStateGroup, 5377, gorlekOreA, 65019, -1770, -4125],
    [WestPools.TpEX, LumaPools, PickupType.SpiritLight, 50, lumaPoolsStateGroup, 5377, xpOrbA, 25391, -1650, -4160],
    [WestPools.EscapeRevisitEX, LumaPools, PickupType.SpiritLight, 100, lumaPoolsStateGroup, 5377, xpOrbA, 44122, -1654, -4143],
    [WoodsEntry.DollQI, SilentWoods, QuestEvent, Doll, questUberStateGroup, 14019, familyReunionItemCollected, 57399, 441, -4119],
    [WoodsEntry.TreeSeed, SilentWoods, QuestEvent, Seed, questUberStateGroup, 14019, gardenerSeedTreeCollected, 7470, 513, -4159],
    [WoodsEntry.MudPitEX, SilentWoods, PickupType.SpiritLight, 50, _petrifiedForestGroup, 58674, CollectibleXpA, 8487, 514, -4185],
    [WoodsEntry.LedgeOre, SilentWoods, PickupType.Resource, Ore, _petrifiedForestGroup, 58674, gorlekOreA, 28710, 411, -4174],
    [WoodsEntry.LeafPileEX, SilentWoods, PickupType.SpiritLight, 50, _petrifiedForestGroup, 58674, xpOrbA, 22472, 485, -4165],
    [WoodsEntry.TpEX, SilentWoods, PickupType.SpiritLight, 50, _petrifiedForestGroup, 58674, CollecitbleXPB, 59691, 628, -4156],
    [WoodsEntry.LowerKS, SilentWoods, PickupType.Resource, Keystone, _petrifiedForestGroup, 58674, keyStoneD, 40073, 690, -4189],
    [WoodsEntry.UpperKS, SilentWoods, PickupType.Resource, Keystone, _petrifiedForestGroup, 58674, keyStoneC, 11736, 641, -4166],
    [WoodsMain.RightKS, SilentWoods, PickupType.Resource, Keystone, _petrifiedForestGroup, 58674, keyStoneC, 43033, 956, -4148],
    [WoodsMain.UpperKS, SilentWoods, PickupType.Resource, Keystone, _petrifiedForestGroup, 58674, keyStoneB, 19769, 908, -4120],
    [WoodsMain.LeftKS, SilentWoods, PickupType.Resource, Keystone, _petrifiedForestGroup, 58674, keyStoneA, 42531, 886, -4123],
    [WoodsMain.LowerKS, SilentWoods, PickupType.Resource, Keystone, _petrifiedForestGroup, 58674, keyStoneD, 780, 929, -4185],
    [WoodsMain.BehindWallOre, SilentWoods, PickupType.Resource, Ore, _petrifiedForestGroup, 58674, gorlekOreA, 26274, 988, -4172],
    [WoodsMain.LowerLeafPileEX, SilentWoods, PickupType.SpiritLight, 50, _petrifiedForestGroup, 58674, expOrbC, 42158, 948, -4210],
    [WoodsMain.MiddleLeafPileEX, SilentWoods, PickupType.SpiritLight, 50, _petrifiedForestGroup, 58674, expOrbD, 33893, 951, -4168],
    [WoodsMain.UpperLeafPileEX, SilentWoods, PickupType.SpiritLight, 100, _petrifiedForestGroup, 58674, expOrbC, 30908, 968, -4142],
    [WoodsMain.YellowWallEX, SilentWoods, PickupType.SpiritLight, 100, _petrifiedForestGroup, 58674, expOrbD, 59714, 1069, -4099],
    [WoodsMain.HiddenOre, SilentWoods, PickupType.Resource, Ore, _petrifiedForestGroup, 58674, gorlekOreA, 20713, 1011, -4070],
    [WoodsMain.HiddenEX, SilentWoods, PickupType.SpiritLight, 100, _petrifiedForestGroup, 58674, mediumPickupC, 54516, 936, -4044],
    [WoodsMain.BelowKeystonesEX, SilentWoods, PickupType.SpiritLight, 50, _petrifiedForestGroup, 58674, expOrbA, 23186, 941, -4185],
    [WoodsMain.BehindDoorRoofEX, SilentWoods, PickupType.SpiritLight, 100, _petrifiedForestGroup, 58674, expOrbA, 64057, 968, -4124],
    [WoodsMain.PetrifiedHowlEX, SilentWoods, PickupType.SpiritLight, 50, _petrifiedForestGroup, 58674, smallPickupA, 17974, 904, -4075],
    [WoodsMain.OverflowShard, SilentWoods, PickupType.Shard, Overflow, pickupsGroup, 23987, recycleShardPickup, 25183, 827, -3939],
    [WoodsMain.CombatShrine, SilentWoods, PickupType.Resource, ShardSlot, _petrifiedForestGroup, 58674, enemyRoom, 29265, 1361, -4064],
    [WoodsMain.ShrineEX, SilentWoods, PickupType.SpiritLight, 100, _petrifiedForestGroup, 58674, expOrbA, 32647, 1406, -4065],
    [WoodsMain.FeedingGroundsEX, SilentWoods, PickupType.SpiritLight, 200, _petrifiedForestGroup, 58674, expOrb, 64484, 1464, -4008],
    [LowerReach.BelowBaurEX, BaursReach, PickupType.SpiritLight, 50, baursReachGroup, 28895, smallXPOrbA, 55384, -401, -4053],
    [LowerReach.AboveBaurLowerEX, BaursReach, PickupType.SpiritLight, 50, baursReachGroup, 28895, smallXPOrbB, 24533, -416, -3968],
    [LowerReach.AboveBaurUpperEX, BaursReach, PickupType.SpiritLight, 100, baursReachGroup, 28895, , 3777, -439, -3946],
    [LowerReach.IcefallOre, BaursReach, PickupType.Resource, Ore, baursReachGroup, 28895, gorlekOreA, 58675, -483, -3974],
    [LowerReach.IcefallEX, BaursReach, PickupType.SpiritLight, 200, baursReachGroup, 28895, largeXPOrbA, 45337, -500, -3970],
    [LowerReach.AboveDoorEX, BaursReach, PickupType.SpiritLight, 50, baursReachGroup, 28895, xpOrbA, 38143, -337, -3999],
    [LowerReach.HiddenOre, BaursReach, PickupType.Resource, Ore, baursReachGroup, 28895, orePlaceholder, 47529, -346, -3947],
    [LowerReach.LupoMap, BaursReach, Shop, LupoZoneMap, npcsStateGroup, 48248, hasMapBaursReach, 29604, -275, -3996],
    [LowerReach.MeltIceEX, BaursReach, PickupType.SpiritLight, 100, baursReachGroup, 28895, xpOrbF, 4301, -350, -4039],
    [LowerReach.BurrowEX, BaursReach, PickupType.SpiritLight, 50, baursReachGroup, 28895, xpOrbE, 45066, -331, -4051],
    [LowerReach.TPLeftEX, BaursReach, PickupType.SpiritLight, 100, baursReachGroup, 28895, , 36231, -340, -3984],
    [LowerReach.BelowLupoEX, BaursReach, PickupType.SpiritLight, 100, baursReachGroup, 28895, xpOrbB, 38049, -282, -4013],
    [LowerReach.BreakWallEX, BaursReach, PickupType.SpiritLight, 200, hubUberStateGroup, 42178, mediumExpB, 40609, -194, -4043],
    [LowerReach.WindBottomEX, BaursReach, PickupType.SpiritLight, 50, baursReachGroup, 28895, smallXPOrbB, 35045, -215, -4057],
    [LowerReach.WindHiddenEX, BaursReach, PickupType.SpiritLight, 50, baursReachGroup, 28895, smallXPOrbA, 54373, -205, -4011],
    [LowerReach.HandToHandHat, BaursReach, QuestEvent, Hat, questUberStateGroup, 14019, tradeSequenceQuest, 26318 = 5, -244, -3989],
    [LowerReach.SnowballHC, BaursReach, PickupType.Resource, Life, baursReachGroup, 28895, healthCellA, 40744, -190, -4017],
    [LowerReach.RoofLeftEX, BaursReach, PickupType.SpiritLight, 200, baursReachGroup, 28895, xpOrbC, 53283, -112, -3950],
    [LowerReach.RoofRightEX, BaursReach, PickupType.SpiritLight, 50, baursReachGroup, 28895, xpOrbB, 46711, -72, -3951],
    [LowerReach.FractureShard, BaursReach, PickupType.Shard, Fracture, pickupsGroup, 23987, fractureShardPickup, 36359, -81, -4001],
    [LowerReach.EscapeRevisitEX, BaursReach, PickupType.SpiritLight, 200, baursReachGroup, 28895, xpOrbB, 46404, 71, -3731],
    [LowerReach.RightKS, BaursReach, PickupType.Resource, Keystone, baursReachGroup, 28895, keystoneA, 29898, 34, -4025],
    [LowerReach.UpperLeftKS, BaursReach, PickupType.Resource, Keystone, baursReachGroup, 28895, keystoneC, 10823, -84, -4025],
    [LowerReach.MiddleLeftKS, BaursReach, PickupType.Resource, Keystone, baursReachGroup, 28895, keystoneB, 37444, -80, -4040],
    [LowerReach.BottomLeftKS, BaursReach, PickupType.Resource, Keystone, baursReachGroup, 28895, keystoneD, 18358, -58, -4055],
    [LowerReach.TrialEX, BaursReach, PickupType.SpiritLight, 100, baursReachGroup, 28895, mediumExpOrb, 22761, -39, -4018],
    [LowerReach.CatalystShard, BaursReach, PickupType.Shard, Catalyst, pickupsGroup, 23987, hollowEnergyShardPickup, 897, -90, -4097],
    [UpperReach.LifeForceShard, BaursReach, PickupType.Shard, Lifeforce, pickupsGroup, 23987, untouchableShardPickup, 19630, -400, -3861],
    [UpperReach.LifeForceEX, BaursReach, PickupType.SpiritLight, 100, winterForestGroupDescriptor, 28287, mediumExpA, 32414, -423, -3876],
    [UpperReach.LowerKS, BaursReach, PickupType.Resource, Keystone, baursReachGroup, 28895, keystoneB, 1053, -248, -3891],
    [UpperReach.UpperKS, BaursReach, PickupType.Resource, Keystone, baursReachGroup, 28895, keystoneD, 50368, -207, -3843],
    [UpperReach.MiddleLeftKS, BaursReach, PickupType.Resource, Keystone, baursReachGroup, 28895, keystoneA, 22382, -232, -3869],
    [UpperReach.MiddleRightKS, BaursReach, PickupType.Resource, Keystone, baursReachGroup, 28895, keystoneC, 9949, -184, -3867],
    [UpperReach.SoupOre, BaursReach, PickupType.Resource, Ore, baursReachGroup, 28895, gorlekOreA, 23795, -203, -3886],
    [UpperReach.SwingPoleEX, BaursReach, PickupType.SpiritLight, 100, baursReachGroup, 28895, xpOrbB, 40089, -194, -3854],
    [UpperReach.SwimEX, BaursReach, PickupType.SpiritLight, 100, baursReachGroup, 28895, xpOrbC, 40242, -239, -3921],
    [UpperReach.LightBurstTree, BaursReach, Ability, LightBurst, treesDontWorry, 0, LightBurst, 51, -106, -3934],
    [UpperReach.TreeOre, BaursReach, PickupType.Resource, Ore, baursReachGroup, 28895, gorlekOreA, 39291, -87, -3903],
    [UpperReach.WellEX, BaursReach, PickupType.SpiritLight, 50, baursReachGroup, 28895, smallExpB, 7597, -72, -3926],
    [UpperReach.SpringSeed, BaursReach, QuestEvent, Seed, questUberStateGroup, 14019, gardenerSeedSpringCollected, 32376, -103, -3858],
    [UpperReach.HiddenEX, BaursReach, PickupType.SpiritLight, 200, baursReachGroup, 28895, largeExpOrb, 2129, -172, -3928],
    [UpperDepths.EntrySpikesEX, MouldwoodDepths, PickupType.SpiritLight, 100, mouldwoodDepthsGroup, 18793, mediumExpA, 19004, 171, -4358],
    [UpperDepths.EntryRoofEX, MouldwoodDepths, PickupType.SpiritLight, 100, mouldwoodDepthsGroup, 18793, xpOrbC, 15396, 146, -4375],
    [UpperDepths.EntryOre, MouldwoodDepths, PickupType.Resource, Ore, mouldwoodDepthsGroup, 18793, orePickupA, 35351, 185, -4380],
    [UpperDepths.RightEntryKS, MouldwoodDepths, PickupType.Resource, Keystone, mouldwoodDepthsGroup, 18793, keystone, 1914, 317, -4454],
    [UpperDepths.LeftEntryKS, MouldwoodDepths, PickupType.Resource, Keystone, mouldwoodDepthsGroup, 18793, keystoneA, 58148, 146, -4426],
    [UpperDepths.SwimEC, MouldwoodDepths, PickupType.Resource, Energy, mouldwoodDepthsGroup, 18793, energyContainerA, 26618, 134, -4456],
    [UpperDepths.TeleporterEX, MouldwoodDepths, PickupType.SpiritLight, 100, mouldwoodDepthsGroup, 18793, expOrbA, 29979, 481, -4381],
    [UpperDepths.LeftHealthKS, MouldwoodDepths, PickupType.Resource, Keystone, mouldwoodDepthsGroup, 18793, mouldwoodDepthsHKeystoneACollected, 53953, 498, -4463],
    [UpperDepths.RightHealthKS, MouldwoodDepths, PickupType.Resource, Keystone, mouldwoodDepthsGroup, 18793, mouldwoodDepthsHKeystoneBCollected, 23986, 524, -4465],
    [UpperDepths.LightcatcherSeed, MouldwoodDepths, QuestEvent, Seed, questUberStateGroup, 14019, gardenerSeedBashCollected, 8192, 488, -4431],
    [UpperDepths.BossPathEX, MouldwoodDepths, PickupType.SpiritLight, 200, mouldwoodDepthsGroup, 18793, XPOrbA, 18395, 567, -4443],
    [UpperDepths.KeystoneHC, MouldwoodDepths, PickupType.Resource, Life, mouldwoodDepthsGroup, 18793, healthCellB, 42235, 531, -4452],
    [UpperDepths.HiveEX, MouldwoodDepths, PickupType.SpiritLight, 100, mouldwoodDepthsGroup, 18793, expOrbB, 6573, 425, -4385],
    [LowerDepths.RaceStartHC, MouldwoodDepths, PickupType.Resource, Life, mouldwoodDepthsGroup, 18793, healthCellA, 62694, 496, -4499],
    [LowerDepths.BelowDoorOre, MouldwoodDepths, PickupType.Resource, Ore, mouldwoodDepthsGroup, 18793, orePickupA, 836, 436, -4507],
    [LowerDepths.SpiritSurgeShard, MouldwoodDepths, PickupType.Shard, SpiritSurge, pickupsGroup, 23987, spiritPowerShardPickup, 986, 564, -4571],
    [LowerDepths.HandToHandSilk, MouldwoodDepths, QuestEvent, Silk, questUberStateGroup, 14019, tradeSequenceQuest, 26318 = 7, 317, -4508],
    [LowerDepths.CombatShrine, MouldwoodDepths, PickupType.Resource, ShardSlot, mouldwoodDepthsGroup, 18793, shrineEnemies, 31937, 212, -4510],
    [LowerDepths.SwimEC, MouldwoodDepths, PickupType.Resource, Energy, mouldwoodDepthsGroup, 18793, energyContainerA, 28175, 324, -4535],
    [LowerDepths.LupoMap, MouldwoodDepths, Shop, LupoZoneMap, npcsStateGroup, 48248, hasMapMouldwoodDepths, 48423, 682, -4576],
    [LowerDepths.LeftEX, MouldwoodDepths, PickupType.SpiritLight, 100, mouldwoodDepthsGroup, 18793, expOrbB, 2881, 387, -4523],
    [LowerDepths.RightEX, MouldwoodDepths, PickupType.SpiritLight, 200, mouldwoodDepthsGroup, 18793, expOrbC, 23799, 799, -4512],
    [LowerDepths.FlashTree, MouldwoodDepths, Ability, Flash, treesDontWorry, 0, Flash, 62, 776, -4541],
    [LowerWastes.WestTPOre, WindsweptWastes, PickupType.Resource, Ore, desertAGroup, 7228, gorlekOre, 54494, 1503, -4007],
    [LowerWastes.PurpleWallEX, WindsweptWastes, PickupType.SpiritLight, 100, desertAGroup, 7228, collectableADesertA, 56821, 1535, -3997],
    [LowerWastes.SunsetViewEX, WindsweptWastes, PickupType.SpiritLight, 100, desertAGroup, 7228, collectableCDesertA, 52086, 1607, -3975],
    [LowerWastes.SandBridgeOre, WindsweptWastes, PickupType.Resource, Ore, windsweptWastesGroupDescriptor, 20120, gorlekOre, 46919, 1658, -3974],
    [LowerWastes.EerieGem, WindsweptWastes, QuestEvent, Gem, questUberStateGroup, 14019, mineGemItemCollected, 58342, 1641, -4003],
    [LowerWastes.MuncherTunnelEC, WindsweptWastes, PickupType.Resource, Energy, windsweptWastesGroupDescriptor, 20120, energyHalfCell, 11785, 1653, -4015],
    [LowerWastes.SandPotHC, WindsweptWastes, PickupType.Resource, Life, windsweptWastesGroupDescriptor, 20120, lifeCellA, 62264, 1698, -3977],
    [LowerWastes.SandPotEX, WindsweptWastes, PickupType.SpiritLight, 100, windsweptWastesGroupDescriptor, 20120, xpOrbB, 57781, 1719, -3962],
    [LowerWastes.MuncherPitEX, WindsweptWastes, PickupType.SpiritLight, 100, windsweptWastesGroupDescriptor, 20120, xpOrbB, 10397, 1795, -3998],
    [LowerWastes.BottomRightEX, WindsweptWastes, PickupType.SpiritLight, 200, windsweptWastesGroupDescriptor, 20120, expOrb, 224, 1887, -3973],
    [LowerWastes.BottomRightHC, WindsweptWastes, PickupType.Resource, Life, windsweptWastesGroupDescriptor, 20120, healthContainer, 12941, 1860, -4022],
    [LowerWastes.LastStandShard, WindsweptWastes, PickupType.Shard, LastStand, pickupsGroup, 23987, lastResortShardPickup, 50364, 1833, -3936],
    [LowerWastes.LastStandEX, WindsweptWastes, PickupType.SpiritLight, 200, windsweptWastesGroupDescriptor, 20120, expOrbB, 33275, 1839, -3907],
    [LowerWastes.MuncherClimbEX, WindsweptWastes, PickupType.SpiritLight, 50, windsweptWastesGroupDescriptor, 20120, xpOrbA, 57133, 1765, -3921],
    [LowerWastes.SkeetoHiveEX, WindsweptWastes, PickupType.SpiritLight, 100, windsweptWastesGroupDescriptor, 20120, xpOrbA, 8910, 1642, -3944],
    [LowerWastes.HandToHandMapstone, WindsweptWastes, QuestEvent, Mapstone, questUberStateGroup, 14019, tradeSequenceQuest, 26318 = 10, 1685, -3923],
    [LowerWastes.LupoMap, WindsweptWastes, Shop, LupoZoneMap, npcsStateGroup, 48248, hasMapWindsweptWastes, 61146, 1647, -3899],
    [LowerWastes.BurrowTree, WindsweptWastes, Ability, Burrow, treesDontWorry, 0, Grapple, 101, 1583, -3930],
    [LowerWastes.BurrowTreeEX, WindsweptWastes, PickupType.SpiritLight, 100, windsweptWastesGroupDescriptor, 20120, xpOrbB, 19113, 1601, -3953],
    [LowerWastes.UpperPathEC, WindsweptWastes, PickupType.Resource, Energy, windsweptWastesGroupDescriptor, 20120, energyContainer, 50026, 1779, -3875],
    [LowerWastes.UpperPathEX, WindsweptWastes, PickupType.SpiritLight, 100, windsweptWastesGroupDescriptor, 20120, expOrbD, 48829, 1809, -3883],
    [LowerWastes.UpperPathHiddenEX, WindsweptWastes, PickupType.SpiritLight, 200, windsweptWastesGroupDescriptor, 20120, expOrbE, 17798, 1862, -3874],
    [LowerWastes.UpperPathHC, WindsweptWastes, PickupType.Resource, Life, windsweptWastesGroupDescriptor, 20120, halfLifeCell, 59046, 1853, -3909],
    [LowerWastes.EastTPOre, WindsweptWastes, PickupType.Resource, Ore, windsweptWastesGroupDescriptor, 20120, gorlekOreB, 40245, 1930, -3879],
    [UpperWastes.LowerKS, WindsweptWastes, PickupType.Resource, Keystone, desertAGroup, 7228, keystoneAUberState, 20282, 1877, -3844],
    [UpperWastes.UpperKS, WindsweptWastes, PickupType.Resource, Keystone, desertAGroup, 7228, keystoneBUberStateGroup, 62117, 1823, -3769],
    [UpperWastes.TurmoilShard, WindsweptWastes, PickupType.Shard, Turmoil, pickupsGroup, 23987, aggressorShardPickup, 48605, 1779, -3783],
    [UpperWastes.KSDoorEX, WindsweptWastes, PickupType.SpiritLight, 100, desertAGroup, 7228, expOrb, 35329, 1907, -3807],
    [UpperWastes.LedgeEC, WindsweptWastes, PickupType.Resource, Energy, windsweptWastesGroupDescriptor, 20120, energyOrbA, 22354, 1950, -3778],
    [UpperWastes.MissileSpawnEX, WindsweptWastes, PickupType.SpiritLight, 100, windsweptWastesGroupDescriptor, 20120, xpOrbA, 30740, 1951, -3838],
    [UpperWastes.PurpleWallEX, WindsweptWastes, PickupType.SpiritLight, 100, windsweptWastesGroupDescriptor, 20120, xpOrb, 52812, 2006, -3826],
    [UpperWastes.PurpleWallHC, WindsweptWastes, PickupType.Resource, Life, windsweptWastesGroupDescriptor, 20120, lifeHalfCell, 18965, 2027, -3843],
    [UpperWastes.RoofEX, WindsweptWastes, PickupType.SpiritLight, 100, windsweptWastesGroupDescriptor, 20120, xpOrbG, 2013, 2025, -3729],
    [UpperWastes.SpinLasersRightEX, WindsweptWastes, PickupType.SpiritLight, 200, desertAGroup, 7228, xpOrbB, 54275, 2006, -3724],
    [UpperWastes.SpinLasersMiddleEX, WindsweptWastes, PickupType.SpiritLight, 100, desertAGroup, 7228, xpOrbBUberState, 48993, 1948, -3730],
    [UpperWastes.SpinLasersLowerEX, WindsweptWastes, PickupType.SpiritLight, 100, desertAGroup, 7228, xpOrbAUberState, 61548, 1935, -3755],
    [UpperWastes.FlowersSeed, WindsweptWastes, QuestEvent, Seed, questUberStateGroup, 14019, gardenerSeedFlowersCollected, 20601, 1996, -3651],
    [UpperWastes.WallOre, WindsweptWastes, PickupType.Resource, Ore, desertAGroup, 7228, gorlekOre, 8370, 1952, -3616],
    [WindtornRuins.EscapeRevisitEC, WindtornRuins, PickupType.Resource, Energy, windtornRuinsGroup, 10289, energyHalfCell, 44555, 2054, -4050],
    [WindtornRuins.HandToHandComplete, WindtornRuins, QuestEvent, Secrets, questUberStateGroup, 14019, tradeSequenceQuest, 26318 = 11, 1969, -4024],
    [WeepingRidge.Ore, SilentWoods, PickupType.Resource, Ore, corruptedPeakGroup, 36153, gorlekOreA, 3013, 1305, -3732],
    [WeepingRidge.LaunchTree, SilentWoods, Ability, Launch, treesDontWorry, 0, Launch, 8, 1363, -3815],
    [WeepingRidge.SpikeClimbEX, SilentWoods, PickupType.SpiritLight, 200, corruptedPeakGroup, 36153, expOrb, 36521, 1382, -3767],
    [WeepingRidge.PortalEX, SilentWoods, PickupType.SpiritLight, 200, corruptedPeakGroup, 36153, xpOrbB, 12077, 1331, -3798],
    [WillowsEnd.SpikesOre, WillowsEnd, PickupType.Resource, Ore, willowsEndGroup, 16155, gorlekOreA, 38979, 557, -3876],
    [WillowsEnd.EntryEX, WillowsEnd, PickupType.SpiritLight, 200, willowsEndGroup, 16155, expOrbA, 49381, 470, -3915],
    [WillowsEnd.PoisonfallHC, WillowsEnd, PickupType.Resource, Life, willowsEndGroup, 16155, healthCellA, 46270, 411, -3972],
    [WillowsEnd.LupoMap, WillowsEnd, Shop, LupoZoneMap, npcsStateGroup, 48248, hasMapWillowsEnd, 4045, 474, -3859],
    [WillowsEnd.WindSpinOre, WillowsEnd, PickupType.Resource, Ore, willowsEndGroup, 16155, gorlekOreA, 9230, 326, -3811],
    [WillowsEnd.RedirectEX, WillowsEnd, PickupType.SpiritLight, 200, willowsEndGroup, 16155, xpOrbA, 55446, 654, -3780],
    [WillowsEnd.UpperLeftEX, WillowsEnd, PickupType.SpiritLight, 200, corruptedPeakGroup, 36153, expOrbA, 23902, 434, -3640],
    [WillowsEnd.UpperRightEX, WillowsEnd, PickupType.SpiritLight, 200, corruptedPeakGroup, 36153, expOrbB, 3662, 540, -3655],
    [TwillenShop.Overcharge, WellspringGlades, Shop, TwillenShard, twillenShopDontWorry, 2, Overcharge, 1, 0, 0],
    [TwillenShop.TripleJump, WellspringGlades, Shop, TwillenShard, twillenShopDontWorry, 2, TripleJump, 2, 0, 0],
    [TwillenShop.Wingclip, WellspringGlades, Shop, TwillenShard, twillenShopDontWorry, 2, Wingclip, 3, 0, 0],
    [TwillenShop.Swap, WellspringGlades, Shop, TwillenShard, twillenShopDontWorry, 2, Swap, 5, 0, 0],
    [TwillenShop.LightHarvest, WellspringGlades, Shop, TwillenShard, twillenShopDontWorry, 2, LightHarvest, 19, 0, 0],
    [TwillenShop.Vitality, WellspringGlades, Shop, TwillenShard, twillenShopDontWorry, 2, Vitality, 22, 0, 0],
    [TwillenShop.Energy, WellspringGlades, Shop, TwillenShard, twillenShopDontWorry, 2, Energy, 26, 0, 0],
    [TwillenShop.Finesse, WellspringGlades, Shop, TwillenShard, twillenShopDontWorry, 2, Finesse, 40, 0, 0],
    [OpherShop.WaterBreath, WellspringGlades, Shop, OpherWeapon, opherShopDontWorry, 1, WaterBreath, 23, 0, 0],
    [OpherShop.Spike, WellspringGlades, Shop, OpherWeapon, opherShopDontWorry, 1, Spike, 74, 0, 0],
    [OpherShop.SpiritSmash, WellspringGlades, Shop, OpherWeapon, opherShopDontWorry, 1, SpiritSmash, 98, 0, 0],
    [OpherShop.Teleport, WellspringGlades, Shop, OpherWeapon, opherShopDontWorry, 1, Teleport, 105, 0, 0],
    [OpherShop.SpiritStar, WellspringGlades, Shop, OpherWeapon, opherShopDontWorry, 1, SpiritStar, 106, 0, 0],
    [OpherShop.Blaze, WellspringGlades, Shop, OpherWeapon, opherShopDontWorry, 1, Blaze, 115, 0, 0],
    [OpherShop.Sentry, WellspringGlades, Shop, OpherWeapon, opherShopDontWorry, 1, Sentry, 116, 0, 0]
]*/

/*this.uberID = {
    fastTravelEnabledUberState: 16489,
    savePedestalSwampIntroTop: 10185,
    builderProjectSpiritWell: 16825,
    torchHolded: 47458,
    eyesPlacedIntoStatue: 1038,
    entranceStatueOpened: 64003,
    risingPedestals: 54318,
    mokiTorchPlayed: 3621,
    leverA: 50432,
    hasOriUsedSavePedestal: 4220,
    mokiFoulWaterVignetteTriggered: 41644,
    mokiCleanWaterVignetteTriggered: 37811,
    playedMokiVignette: 35023,
    stenchTease: 3846,
    wispSequencePlayedOut: 9367,
    baurReachWispIntro: 40451,
    mouldwoodDepthsWisptIntro: 37364,
    wispSequencePlayedOut: 55196,
    interactedWithTokk: 45740,
    rescuedOpher: 25031,
    talkedToKwolok: 21700,
    findToadQuestUberState: 48794,
    cleanseWellspringQuestUberState: 34641,
    powlTeaseTriggered: 51018,
    powlTeaseTriggered: 2108,
    playedNaruGumoCutaway: 23225,
    introPlayed: 32922,
    marshKeystoneQuest: 51645,
    metOpherHubAfterWatermill: 5982,
    metOpherHubBeforeWatermill: 55122,
    opherMentiodedWatermill: 46745,
    twillenKwolokDialogState: 25267,
    twillenHubDialogState: 12799,
    twillenMournedKu: 34756,
    twillenGaveRumor: 6194,
    metGrom: 9394,
    desertRumorState: 57552,
    gromIntroSequencePlayed: 50418,
    gromGaveWarning: 7646,
    gromTalkedAboutDesert: 45751,
    gromTalkedAboutWatermill: 54806,
    gromTalkedAboutMouldwoodGate: 46471,
    gromTalkedAboutBaur: 7321,
    gromTalkedAboutLagoon: 30073,
    builderProjectHouses: 51230,
    luposMapQuest: 24683,
    talkedInHub: 10337,
    willowsEndSeirExitCutscene: 8985,
    metOpherHub: 56448,
    gromMentionedOre: 5186,
    wispCutscenePlayed: 58268,
    playerPurchasedWeaponMasterUpgrade: 20131,
    narratorLineShown: 22056,
    powlVignettePlayed: 32369,
    powlVignettePlayed: 14539,
    skeletonState: 61252,
    narratorLineShownHowl: 10677,
    featherVignettePlayed: 36965,
    petrifiedOwlStalkSequenceCompleted: 7636,
    winterForestWispQuestUberState: 8973,
    lagoonWispQuestUberState: 35087,
    desertWispQuestUberState: 35399,
    mouldwoodDepthsWispQuestUberState: 45931,
    petrifiedForestNewTransitionOriVignettePlayed: 46980,
    petrifiedForestNewTransitionKuVignettePlayed: 44798,
    lastGlobalEvent: 54675,
    findKuQuest: 34504,
    lookForKuQuestUberState: 44500,
    e3DesertG_clone0_KeystoneDoor: 28786,
    swampTorchIntroductionADoorWithTwoSlotsBooleanDescriptor: 42309,
    swampNightcrawlerCavernADoorWithTwoSlotsBooleanDescriptor: 47445,
    doorWithTwoSlots: 59990,
    mouldwoodDepthsGDoorWithTwoSlotsOpened: 10758,
    keystoneGate: 47621,
    doorWithFourSlots: 4290,
    keystoneGate: 49900,
    doorWithFourSlots: 3171,
    doorState: 21500,
    mouldwoodDepthsHDoorWithFourSlotsOpened: 41544,
    cleanseWellspringQuestUberState: 34641,
    finishedWatermillEscape: 12379,
    watermillEscapeState: 10720,
    nightCrawlerChaseStarted: 30656,
    nightCrawlerDefeated: 40322,
    findToadQuestUberState: 48794,
    wispRewardPickupKwolok: 59806,
    petrifiedOwlBossState: 47278,
    kwolokDropRace: 25545,
    wellspringRace: 11512,
    silentWoodlandRace: 22703,
    baursReachWindTunnelRace: 23661,
    mouldwoodDepthsRace: 28552,
    desertRace: 30767,
    inkwaterMarshRace: 45951,
    lumaPoolsRace: 54686,
    wispRewardPickupBaur: 25522,
    wispRewardPickupMouldwood: 63291,
    wispRewardPickupLagoon: 49747,
    wispRewardPickupWindtorn: 22102,
    elevatorCompleteState: 23584,
    vineAClear: 42976,
    vineBClear: 54940,
    vineCClear: 24290,
    vineDClear: 28478,
    vineEClear: 3588,
    vineFClear: 65277,
    vineGClear: 41488,
    vineHClear: 60752,
    petrifiedForestNewTransitionOriVignettePlayed: 46980,
    hornBugBossState: 48534,
    energyContainersCounter: 41928,
    healthContainersCounter: 52378,
    kwolokBossState: 58403,
    spiderBossState: 26713,
    laserShooterBossState: 12971,
    savePedestalMidnightBurrows: 42531,
    savePedestalInkwaterMarsh: 10185,
    savePedestalHowlsDen: 61594,
    savePedestalLumaPoolsA: 58183,
    savePedestalLumaPoolsB: 1370,
    savePedestalWellspring: 18181,
    savePedestalBaursReach: 54235,
    savePedestalKwoloksHollow: 26601,
    savePedestalMouldwood: 38871,
    savePedestalWillowsEnd: 41465,
    savePedestalWillowsEndShriek: 50867,
    savePedestalSilentWoodsA: 7071,
    savePedestalSilentWoodsB: 1965,
    savePedestalWindsweptWastesA: 10029,
    savePedestalWindsweptWastesB: 49994,
    savePedestalWindtornRuinsA: 41398,
    savePedestalWindtornRuinsB: 4928,
    savePedistalGladesTown: 42096,
    swampWalljumpChallengeBKeystoneBCollected: 64677,
    barrierShardPickup: 59173,
    xpOrb: 42047,
    xpOrbB: 46404,
    HandToHandMap: '26318=1',
    HandToHandPouch: '26318=2',
    HandToHandHerbs: '26318=3',
    HandToHandSoup: '26318=4',
    HandToHandHat: '26318=5',
    HandToHandLantern: '26318=6',
    HandToHandSilk: '26318=7',
    HandToHandSpyglass: '26318=8',
    HandToHandCanteen: '26318=9',
    HandToHandMapstone: '26318=10',
    HandToHandComplete: '26318=11',
    WindHiddenEX: 54373,
    RebuildTheGlades: '44578=2',
    MiddleLeafPileEX: 33893,
    LowerKS: 780,
    EscapeRevisitEC: 44555,
    RoofLeftEX: 53283,
    'WeepingRidge.Ore': 3013,
    'LowerReach.RoofRightEX': 46711,
    'UpperReach.UpperKS': 50368,
    'GladesTown.RegrowTheGlades': '26394=2',
    'WoodsMain.YellowWallEX': 59714,
    'UpperReach.HiddenEX': 2129,
    'LowerReach.IcefallOre': 58675,
    'UpperReach.SpringSeed': 32376,
    'LowerReach.FractureShard': 36359,
    healthCellA: 40744
};*/