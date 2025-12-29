import heroImage from "@assets/generated_images/luxury_gold_necklace_hero_shot.png";
import earringsImage from "@assets/generated_images/gold_diamond_earrings.png";
import bangleImage from "@assets/generated_images/gold_bangle_bracelet.png";
import chokerImage from "@assets/generated_images/gold_choker_necklace.png";
import editorialImage from "@assets/generated_images/editorial_model_shot_jewelry.png";

export const assets = {
  hero: heroImage,
  editorial: editorialImage
};

export const products = [
  {
    id: 1,
    name: "Royal Kundan Choker",
    metal: "22K Gold",
    weight: "48g",
    image: chokerImage,
  },
  {
    id: 2,
    name: "Diamond Drop Earrings",
    metal: "18K Gold & Diamonds",
    weight: "12g",
    image: earringsImage,
  },
  {
    id: 3,
    name: "Heritage Filigree Bangle",
    metal: "22K Gold",
    weight: "35g",
    image: bangleImage,
  },
  {
    id: 4,
    name: "Temple Coin Necklace",
    metal: "24K Gold",
    weight: "52g",
    image: heroImage, // Using hero as a product variant for now to fill grid
  },
];
