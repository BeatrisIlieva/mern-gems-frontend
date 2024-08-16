const mongoose = require("mongoose");
const Jewelry = require("./models/Jewelry");
const Category = require("./models/Category");
const Size = require("./models/Size");
const MiniImage = require("./models/MiniImage");
const Inventory = require("./models/Inventory");

// async function populateDb() {
//   await mongoose.connect(
//     "mongodb+srv://beatrisilieve:31iiG2CgGYT18OZg@merngemscluster.u9znfhf.mongodb.net/?retryWrites=true&w=majority&appName=MERNGemsCluster"
//   );
async function populateDb() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mern-gems");

  await Category.create({
    title: "Bracelets",
  });

  await Category.create({
    title: "Earrings",
  });

  await Category.create({
    title: "Necklaces",
  });

  await Category.create({
    title: "Rings",
  });

  await Size.create({
    measurement: "15.2 cm",
  });

  await Size.create({
    measurement: "17.8 cm",
  });

  await Size.create({
    measurement: "19.3 cm",
  });

  await Size.create({
    measurement: "4.05 cm",
  });

  await Size.create({
    measurement: "4.98 cm",
  });

  await Size.create({
    measurement: "5.86 cm",
  });

  await Size.create({
    measurement: "40.64 cm",
  });

  await Size.create({
    measurement: "43.18 cm",
  });

  await Size.create({
    measurement: "45.72 cm",
  });

  await Size.create({
    measurement: "4.7 cm",
  });

  await Size.create({
    measurement: "4.9 cm",
  });

  await Size.create({
    measurement: "5.05 cm",
  });

  const allCategories = await Category.find();
  const allSizes = await Size.find();
  const allMiniImages = await MiniImage.find();

  await Jewelry.create({
    title: "Forget-Me-Not Pink Sapphire and Diamond Bracelet",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_1_vz9pv4.avif",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_2_kdpnm6.avif",
    category: allCategories[0],
    miniImageURL: allMiniImages[0],
    description:
      "45 pear-shaped and round brilliant pink sapphires weighing a total of approximately 4.36 carats and 33 pear-shaped, marquise and round brilliant diamonds weighing a total of approximately 4.24 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Forget-Me-Not Sapphire and Diamond Bracelet",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_sapphire_brsprfflrfmn_e_1_fokzrw.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714895/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_sapphire_brsprfflrfmn_e_2_ojfbze.avif",
    category: allCategories[0],
    miniImageURL: allMiniImages[1],
    description:
      "45 pear-shaped and round brilliant sapphires weighing a total of approximately 4.17 carats and 33 pear-shaped, marquise and round brilliant diamonds weighing a total of approximately 4.24 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Forget-Me-Not Diamond Bracelet",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/bracelets/forget_me_not_diamond_bracelet_brdprfflrfmn_e-1_muieri.avif",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_2_1_pvbpcb.png",
    category: allCategories[0],
    miniImageURL: allMiniImages[2],
    description:
      "78 pear-shaped, marquise, and round brilliant diamonds, weighing a total of approximately 7.46 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Forget-Me-Not Pink Sapphire and Diamond Drop Earrings",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714885/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_pink_sapphire_eapspdrflrfmn_ee-1_zzaw4q.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_pink_sapphire_eapspdrflrfmn_ee-2_p9jicb.webp",
    category: allCategories[1],
    miniImageURL: allMiniImages[0],
    description:
      "28 pear-shaped and round brilliant pink sapphires weighing a total of approximately 3.20 carats and 28 marquise and round brilliant diamonds weighing a total of approximately 1.98 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Forget-Me-Not Sapphire and Diamond Drop Earrings",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_sapphire_easpdrflrfmn_ee-1_zx2cga.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_sapphire_easpdrflrfmn_ee-2_vtkyhb.webp",
    category: allCategories[1],
    miniImageURL: allMiniImages[1],
    description:
      "28 pear-shaped and round brilliant sapphires weighing a total of approximately 3.00 carats and 28 marquise and round brilliant diamonds weighing a total of approximately 1.98 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Forget-Me-Not Diamond Drop Earrings",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714890/forget-me-not-collection/earrings/forget_me_not_diamond_drop_earrings_eadpdrflrfmn_ee-1_knlt2u.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_diamond_drop_earrings_eadpdrflrfmn_ee-2_sksk7o.webp",
    category: allCategories[1],
    miniImageURL: allMiniImages[2],
    description:
      "A medley of marquise, pear-shaped, and round brilliant diamonds, weighing a total of approximately 4.38 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Forget-Me-Not Pink Sapphire and Diamond Lariat Necklace",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714890/forget-me-not-collection/necklaces/forget_me_not_lariat_necklace_diamond_and_pink_sapphire_nkpspltflrfmn_e_1_kuxbds.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714890/forget-me-not-collection/necklaces/forget_me_not_lariat_necklace_diamond_and_pink_sapphire_nkpspltflrfmn_e_2_d2fc78.webp",
    category: allCategories[2],
    miniImageURL: allMiniImages[0],
    description:
      "78 pear-shaped and round brilliant pink sapphires weighing a total of approximately 8.61 carats and 99 marquise and round brilliant diamonds weighing a total of approximately 8.60 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Forget-Me Not Sapphire and Diamond Lariat Necklace",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/necklaces/forget_me_not_lariat_necklace_diamond_and_sapphire_nkspltflrfmn_e_1_p2uxlj.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714890/forget-me-not-collection/necklaces/forget_me_not_lariat_necklace_diamond_and_sapphire_nkspltflrfmn_e_2_hxgdcy.avif",
    category: allCategories[2],
    miniImageURL: allMiniImages[1],
    description:
      "78 pear-shaped and round brilliant sapphires weighing a total of approximately 8.61 carats and 99 marquise and round brilliant diamonds weighing a total of approximately 8.37 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Forget-Me-Not Diamond Lariat Necklace",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/necklaces/forget_me_not_lariat_diamond_necklace_nkdpltflrfmn_e-1_u0gwpv.avif",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/necklaces/forget_me_not_lariat_diamond_necklace_nkdpltflrfmn_e-2_tuh8ru.webp",
    category: allCategories[2],
    miniImageURL: allMiniImages[2],
    description:
      "177 pear-shaped, marquise, and round brilliant diamonds, weighing a total of approximately 15.35 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Forget-Me-Not Pink Sapphire and Diamond Ring",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714892/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_pink_sapphire_frpsprfflrfmn_e_1_qfumu3.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714892/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_pink_sapphire_frpsprfflrfmn_e_2_k7nhpe.avif",
    category: allCategories[3],
    miniImageURL: allMiniImages[0],
    description:
      "6 pear-shaped pink sapphires weighing a total of approximately 2.22 carats and 1 round brilliant diamond weighing approximately 0.05 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Forget-Me-Not Sapphire and Diamond Ring",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_sapphire_frsprfflrfmn_e_1_pm9u6t.avif",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_sapphire_frsprfflrfmn_e_2_ucppcd.avif",
    category: allCategories[3],
    miniImageURL: allMiniImages[1],
    description:
      "6 pear-shaped sapphires weighing a total of approximately 2.15 carats and 1 round brilliant diamond weighing approximately 0.05 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Forget-Me-Not Diamond Ring",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/rings/forget_me_not_diamond_ring_frdprfflrfmn_e-1h_yueh2k.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/rings/forget_me_not_diamond_ring_frdprfflrfmn_e-2h_mktny9.webp",
    category: allCategories[3],
    miniImageURL: allMiniImages[2],
    description:
      "6 pear-shaped and 1 round brilliant diamond, weighing a total of approximately 1.66 carats, set in platinum",
  });

  await MiniImage.create({
    title: "Pink Sapphire",
    imageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714885/forget-me-not-collection/miniImages/forget_me_not_earrings_diamond_and_pink_sapphire_eapsp1mflrfmn_ee-1_k5iyct.webp",
  });

  await MiniImage.create({
    title: "Blue Sapphire",
    imageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714885/forget-me-not-collection/miniImages/forget_me_no_earrings_diamond_and_sapphire_easp1mflrfmn_ee-1_fp320u.webp",
  });

  await MiniImage.create({
    title: "Diamond",
    imageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714885/forget-me-not-collection/miniImages/forget_me_not_diamond_earrings_eadp1mflrfmn_ee-1_s3apwm.webp",
  });

  const allJewelries = await Jewelry.find();
}
populateDb();
