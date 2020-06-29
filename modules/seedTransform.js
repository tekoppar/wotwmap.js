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

        this.PickupType = {
            "SpiritLight": 0,
            "Resource": 1,
            "Ability": 2,
            "Shard": 3,
            "SystemCommand": 4,
            "Teleporter": 5,
            "Message": 6,
            "Multi": 7,
            "UberState": 8,
            "QuestEvent": 9
        };

        this.PickupTypeReverse = {};

        this.SysCommandType = {
            "Save": 0,
            "ProcUberStates": 1,
            "ProcUberStatesAndSurpress": 2,
            "SupressMagic": 3
        };

        this.SysCommandTypeReverse = {};

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

        this.TeleporterTypeReverse = {};

        this.ResourceType = {
            "Health Fragment": 0,
            "Energy Fragment": 1,
            "Gorlek Ore": 2,
            "Keystone": 3,
            "Shard Slot": 4
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
            WallJump: 3,
            DoubleJump: 5,
            Launch: 8,
            Feather: 14,
            WaterBreath: 23,
            LightBurst: 51,
            Grapple: 57,
            Flash: 62,
            Spike: 74,
            Regenerate: 77,
            SpiritArc: 97,
            SpiritSmash: 98,
            //"Torch":, ???
            //"SpiritEdge":, ???
            Burrow: 101,
            Dash: 102,
            WaterDash: 104,
            TeleportSpell: 105,
            SpiritStar: 106,
            Seir: 108,
            Blaze: 115,
            Sentry: 116,
            Flap: 118,
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
            twillenShopDontWorry: 2,
            opherShopDontWorry: 1,
            treesDontWorry: 0,
            npcsStateGroup: 48248
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
            "OpherShop.Sentry": "116"
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
            }
        }

        this.seedNameToIconName = {
            'SpiritArc': 'Bow',
            'DoubleJump': 'Double Jump',
            'Sentry': 'Spirit Sentry',
            'Blaze': 'Blaze',
            'WaterDash': 'Swim Dash',
            'Feather': 'Glide',
            'DamageUpgrade1': 'Weapon Upgrade 1',
            'DamageUpgrade2': 'Weapon Upgrade 2',
            'Lightburst': 'Lightburst',
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
            'Shard Slot': 'Spirit Shard'
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

        this.createReverseMaps();

        //generates a seed object in the console
        /*var request = new XMLHttpRequest();
        request.open('GET', '/beta/modules/test2.txt', false);
        request.send();
        var textfileContent = request.responseText;
        //this.createSeedMap(textfileContent);*/

        var request = new XMLHttpRequest();
        request.open('GET', '/beta/modules/test.txt', false);
        request.send();
        var textfileContent = request.responseText;
        this.seedItems = this.createSeedObject(textfileContent);
    }

    /*
    creates reverse objects of all the objects that will be used
    for when exporting a seed file
    */
    createReverseMaps() {
        var keys = Object.keys(this.PickupType);
        for (var i = 0; i < keys.length; i++) {
            this.PickupTypeReverse[this.PickupType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.SysCommandType);
        for (var i = 0; i < keys.length; i++) {
            this.SysCommandTypeReverse[this.SysCommandType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.TeleporterType);
        for (var i = 0; i < keys.length; i++) {
            this.TeleporterTypeReverse[this.TeleporterType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.ResourceType);
        for (var i = 0; i < keys.length; i++) {
            this.ResourceTypeReverse[this.ResourceType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.LocType);
        for (var i = 0; i < keys.length; i++) {
            this.LocTypeReverse[this.LocType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.AbilityType);
        for (var i = 0; i < keys.length; i++) {
            this.AbilityTypeReverse[this.AbilityType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.ShardType);
        for (var i = 0; i < keys.length; i++) {
            this.ShardTypeReverse[this.ShardType[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.uberGroupID);
        for (var i = 0; i < keys.length; i++) {
            this.uberGroupIDReverse[this.uberGroupID[keys[i]]] = keys[i];
        }

        keys = Object.keys(this.uberID);
        for (var i = 0; i < keys.length; i++) {
            this.uberIDReverse[this.uberID[keys[i]]] = keys[i];
        }
    }

    /*
    generates the this.uberIDToMapID objects based on wotwrouter icons
    will be used to refactor wotwrouter icons later on too use uberID instead
    of numbered. Currently used to get 
    */
    posToSeedLocation(icons) {
        var keys = Object.keys(this.seedLocationToPos);
        var test = {};

        for (var i = 0; i < icons.length; i++) {
            var pos = {x:parseFloat(icons[i].x), y:parseFloat(icons[i].y)};
            for (var i2 = 0; i2 < keys.length; i2++) {
                var testPos = this.mapClass.inGameToMapCoord(this.seedLocationToPos[keys[i2]]);
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

    /*
    was intended to merge seed data with wotwrouter data,
    bad idea better to refactor wotwrouter data to utilize
    uberID's
    */
    mergeSeedIconsMapIcons(icons) {
        var keys = Object.keys(this.seedItems);

        for (var i = 0; i < keys.length; i++) {
            var item = this.seedItems[keys[i]];

            if (this.uberIDToMapID[item.uberID] !== undefined) {
                icons[this.uberIDToMapID[item.uberID]].iconName = item.mapIcon;
                icons[this.uberIDToMapID[item.uberID]].category = item.mapCategory;
                //icons[this.uberIDToMapID[item.uberID]].icon = item.resourceType + ' ' + item.item;
            }
        }
    }

    /*
    creates the seed map from a string that should be from
    a seed file, was used to generate the this.uberID and
    this.uberGroupID
    */
    createSeedMap(string) {
        var array = string.split(/\r?\n/);
        var seedMap = {};

        for (var i = 0; i < array.length; i++) {
            if (array[i].startsWith('//') === false && array[i] !== '') {
                var seedLine = array[i].split(',');
                seedMap[seedLine[0].trim()] = seedLine[7].trim().replace(/ /g, '');
            }
        }
    }

    /*
    creates valid objects that can be given to iconFactory
    to generate icons on the map, string is from a seed file
    */
    createSeedObject(string) {
        var array = string.split(/\r?\n/);
        var seedItems = {};
        //var seedPos = {};

        for (var i = 0; i < array.length; i++) {
            if (array[i].startsWith('//') === false && array[i] !== '') {
                var splitString = array[i].split('//');
                var seedLine = splitString[0].split('|');

                var uberidgroup = this.uberGroupIDReverse[seedLine[0]];
                var uberid = this.uberIDReverse[seedLine[1]];
                var resourcetype = this.PickupTypeReverse[seedLine[2]];
                var item;

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

                var mapPos = this.mapClass.inGameToMapCoord(this.seedLocationToPos[uberid]);
                seedItems[uberid] = { uberIDGroup: uberidgroup, uberID: uberid, resourceType: resourcetype, location: this.seedLocationToPos[uberid], x: mapPos.x + 'px', y: mapPos.y + 'px' };
                switch (resourcetype) {
                    case "SpiritLight":
                        item = parseInt(seedLine[3].toString().trim());
                        seedItems[uberid].iconName = 'Small Experience';
                        seedItems[uberid].category = 'pickup';
                        break;
                    case "Resource":
                        item = this.ResourceTypeReverse[parseInt(seedLine[3])];
                        seedItems[uberid].iconName = this.seedNameToIconName[item];
                        seedItems[uberid].category = 'mapIcon';
                        break;
                    case "Ability":
                        item = this.AbilityTypeReverse[parseInt(seedLine[3])];
                        seedItems[uberid].iconName = this.seedNameToIconName[item];
                        seedItems[uberid].category = 'ability';
                        break;
                    case "Shard":
                        item = this.ShardTypeReverse[parseInt(seedLine[3])];
                        seedItems[uberid].iconName = this.seedNameToIconName[item];
                        seedItems[uberid].category = 'shard';
                        break;
                    case "SystemCommand":
                        break;
                    case "Teleporter":
                        item = this.TeleporterTypeReverse[parseInt(seedLine[3])];
                        seedItems[uberid].iconName = 'Spirit Well';
                        seedItems[uberid].category = 'mapIcon';
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
                seedItems[uberid].item = item;
                seedItems[uberid].name = seedItems[uberid].resourceType + ' ' + seedItems[uberid].item;;
                this.mapItems.push(seedItems[uberid]);
                //console.log(uberidgroup, uberid, resourcetype, item);
            }
        }
        return seedItems;
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