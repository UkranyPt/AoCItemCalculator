import { Injectable } from '@angular/core';
import { APIResponse, GearItem, Recipe, RecipeContent, Resource, Item } from '../model/model-beans';

@Injectable({
  providedIn: 'root'
})
export class DataprocessorService {
  whiteListTypes = ["Weapon","Armor","Equipment"];
  blackListTypes = ["Material"];

  extractItemData(response: APIResponse): GearItem[] {
    let retList = [];
    for(var data of response.data){
      let item = this.#copyItem(data);
      if(this.whiteListTypes.indexOf(item.inventoryFilterType) > -1 && this.blackListTypes.indexOf(item.inventoryFilterType) == -1){
        retList.push(item);
      }
    }
    return retList
  }

  #copyItem(data: any) : GearItem{
    let item = {} as GearItem;
    item.itemName = data.itemName;
    item.description = data.description;
    item.displayIcon = data.displayIcon;
    item.equipSlots = data.equipSlots;
    item.inventoryFilterType = data.inventoryFilterType;
    item.itemTypeTags = data.itemTypeTags;
    item.guid = data.guid;
    item.name = data.name;
    item.typeId = data.typeId;
    item._summary = data._summary;
    if(data._recipeTree){
      item._recipeTree = this.#copyRecipe(data._recipeTree);
    }
    return item;
  }

  #copyRecipe(data: any): Recipe{
    let recipe = {} as Recipe;
    recipe.item = data?.item;
    let contents = [] as RecipeContent[];
    for(let rec of data.recipes){
      let content = {} as RecipeContent;
      content.primaryResources = rec.primaryResources;
      content.generalResources = this.#copyGeneralResources(rec.generalResources);
    }
    recipe.recipes = contents;
    return recipe;
  }

  #copyGeneralResources(data: any[]): Resource[]{
    let resources = [] as Resource[];
    
    for(let resc of data){
      let resource = {} as Resource;
      resource.item = this.#copyResourceItem(resc.item);
      resource.quantity = resc.quantity;
      resource.outputQuantity = resc.outputQuantity;
      resources.push(resource);
    }

    return resources;
  }

  #copyResourceItem(data: any): Item{
    let item = {} as Item;
    item.id = data.id;
    item.itemName = data.itemName;
    item.name = data.name;
    item.type = data.type;
    return item;
  }
}