export interface ItemAPIResponse{
    itemName: string,
    description: string,
    defaultQuality: number,
    level: number,
    grade: string,
    displayRequiredLevel: boolean,
    requiredProfessionId: any,
    requiredCertificationLevelId: any,
    displayRequiredCert: boolean,
    subType: string,
    isPlayerCommodity: boolean,
    itemNamePerRarityOverride: any,
    rarityMin: string,
    rarityMax: string,
    statBlockId: any,
    displayIcon: string,
    resourceDisplayIcon: string,
    canEquip: boolean,
    hideEquipAppearance: boolean,
    equipSlots: string[],
    setBonusIds: any[],
    physicalMaterial: string,
    inventoryFilterType: string,
    questItemSignificance: string,
    treasureHuntId: any,
    gameplayTags: any,
    itemTypeTags: any,
    certificationTag: any,
    professionTag: any,
    baseVendorValueId: any,
    inventoryDimension: any,
    maxStackSize: number,
    bMaxStackSizeAffectedByStats: boolean,
    occupiesAllEquipSlots: boolean,
    itemExpirationTimeType: string,
    expirationPeriod: number,
    expirationAction: number,
    attackAbilityId: any,
    relevantTierId: any,
    activationArchetypeId: any,
    dialogueRootId: any,
    offeredQuests: any[],
    activationCastId: any,
    activationActionsIds: any[],
    activationExperienceRewardsIds: any[],
    learnableRecipeIds: any[],
    fuelValue: number,
    tradeable: boolean,
    vendorable: boolean,
    deconstructable: boolean,
    deconstructionRecipeId: any,
    deconstructionRequiresCraftingCertification: boolean,
    deconstructionConsumableDefId: any,
    temperingConsumableDefId: any,
    appearanceId: any,
    resourceBagDefId: any,
    gatheringToolDataId: any,
    enchantmentScrollDefId: any,
    enchantmentCharmDefId: any,
    enchantmentDefId: any,
    enchantmentVFXDefIds: any[],
    enchantmentVFXMesh: string,
    weaponSkillLineId: any,
    qualityCurveId: any,
    economicRegionId: any,
    packedCrateId: any,
    crateId: any,
    caravanComponentId: any,
    cargoLootTableId: any,
    relicId: any,
    imageToShow: string,
    summonNotifyClassPath: string,
    mountSelfReviveCooldown: any,
    siegeRecordId: any,
    freeholdEstateRecordId: any,
    guid: string,
    name: string,
    typeId: string,
    statBlock: any,
    minRarity: string,
    maxRarity: string,
    _summary: string,
    primaryStats: any[],
    coreStats:  any[],
    _setBonuses: any[],
    _baseItemValue: any,
    _craftingRecipes: any[],
    _usedIn: any[],
    _droppedBy: any[],
    _droppedIn: any[],
    _recipeTree: any,
    _enchantmentDef: any,
    _soldBy: any[],
    _rewardFrom: any[]
}

export interface MetaResponse{
    total: number,
    per_page: number
}

export interface APIResponse{
    data: GearItem[],
    weaponSkillLine: any[],
    possibleStats: any[],
    meta: MetaResponse
}

export interface GearItem{
    itemName: string,
    description: string,
    displayIcon: string,
    equipSlots: string[],
    itemTypeTags: GamePlayTag,
    inventoryFilterType: string,
    guid: string,
    name: string,
    typeId: string,
    _summary: string,
    _recipeTree: Recipe
}

export interface GamePlayTag{
    gameplayTags: Tag[],
    parentTags: Tag[]
}

export interface Tag{
    tagName: string
}

export interface Recipe{
    item: ReferenceId,
    recipes: RecipeContent[]
}

export interface ReferenceId{
    name: string,
    guid: string
}

export interface RecipeContent{
    primaryResources: any[],
    generalResources: Resource[]
}

export interface Resource{
    item: Item,
    quantity: number,
    outputQuantity: number
}

export interface Item{
    id: string,
    name: string,
    itemName: string,
    type: string
}