// const mongoose = require("mongoose");
// const Jewelry = require("./models/Jewelry");
// const Category = require("./models/Category");
// const Color = require("./models/Color");
// const Inventory = require("./models/Inventory");

// // async function populateDb() {
// //   await mongoose.connect(
// //     "mongodb+srv://beatrisilieve:31iiG2CgGYT18OZg@merngemscluster.u9znfhf.mongodb.net/?retryWrites=true&w=majority&appName=MERNGemsCluster"
// //   );
// async function populateDb() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/mern-gems");

//   await Category.create({
//     title: "Bracelets",
//   });

//   await Category.create({
//     title: "Earrings",
//   });

//   await Category.create({
//     title: "Necklaces",
//   });

//   await Category.create({
//     title: "Rings",
//   });


//   await Color.create({
//     title: "Pink",
//   });

//   await Color.create({
//     title: "Blue",
//   });

//   await Color.create({
//     title: "White",
//   });

//   const allCategories = await Category.find();
//   const allColors = await Color.find();

//   await Jewelry.create({
//     title: "Pink Sapphire and Diamond Bracelet",
//     firstImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_1_vz9pv4.avif",
//     secondImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_2_kdpnm6.avif",
//     category: allCategories[0],
//     color: allColors[0],
//     description:
//       "45 pear-shaped and round brilliant pink sapphires weighing a total of approximately 4.36 carats and 33 pear-shaped, marquise and round brilliant diamonds weighing a total of approximately 4.24 carats, set in platinum",
//   });

//   await Jewelry.create({
//     title: "Blue Sapphire and Diamond Bracelet",
//     firstImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_sapphire_brsprfflrfmn_e_1_fokzrw.webp",
//     secondImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714895/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_sapphire_brsprfflrfmn_e_2_ojfbze.avif",
//     category: allCategories[0],
//     color: allColors[1],
//     description:
//       "45 pear-shaped and round brilliant sapphires weighing a total of approximately 4.17 carats and 33 pear-shaped, marquise and round brilliant diamonds weighing a total of approximately 4.24 carats, set in platinum",
//   });

//   await Jewelry.create({
//     title: "Diamond Bracelet",
//     firstImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/bracelets/forget_me_not_diamond_bracelet_brdprfflrfmn_e-1_muieri.avif",
//     secondImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_2_1_pvbpcb.png",
//     category: allCategories[0],
//     color: allColors[2],
//     description:
//       "78 pear-shaped, marquise, and round brilliant diamonds, weighing a total of approximately 7.46 carats, set in platinum",
//   });

//   await Jewelry.create({
//     title: "Pink Sapphire and Diamond Drop Earrings",
//     firstImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714885/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_pink_sapphire_eapspdrflrfmn_ee-1_zzaw4q.webp",
//     secondImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_pink_sapphire_eapspdrflrfmn_ee-2_p9jicb.webp",
//     category: allCategories[1],
//     color: allColors[0],
//     description:
//       "28 pear-shaped and round brilliant pink sapphires weighing a total of approximately 3.20 carats and 28 marquise and round brilliant diamonds weighing a total of approximately 1.98 carats, set in platinum",
//   });

//   await Jewelry.create({
//     title: "Blue Sapphire and Diamond Drop Earrings",
//     firstImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_sapphire_easpdrflrfmn_ee-1_zx2cga.webp",
//     secondImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_sapphire_easpdrflrfmn_ee-2_vtkyhb.webp",
//     category: allCategories[1],
//     color: allColors[1],
//     description:
//       "28 pear-shaped and round brilliant sapphires weighing a total of approximately 3.00 carats and 28 marquise and round brilliant diamonds weighing a total of approximately 1.98 carats, set in platinum",
//   });

//   await Jewelry.create({
//     title: "Diamond Drop Earrings",
//     firstImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714890/forget-me-not-collection/earrings/forget_me_not_diamond_drop_earrings_eadpdrflrfmn_ee-1_knlt2u.webp",
//     secondImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_diamond_drop_earrings_eadpdrflrfmn_ee-2_sksk7o.webp",
//     category: allCategories[1],
//     color: allColors[2],
//     description:
//       "A medley of marquise, pear-shaped, and round brilliant diamonds, weighing a total of approximately 4.38 carats, set in platinum",
//   });

//   await Jewelry.create({
//     title: "Pink Sapphire and Diamond Lariat Necklace",
//     firstImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714890/forget-me-not-collection/necklaces/forget_me_not_lariat_necklace_diamond_and_pink_sapphire_nkpspltflrfmn_e_1_kuxbds.webp",
//     secondImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714890/forget-me-not-collection/necklaces/forget_me_not_lariat_necklace_diamond_and_pink_sapphire_nkpspltflrfmn_e_2_d2fc78.webp",
//     category: allCategories[2],
//     color: allColors[0],
//     description:
//       "78 pear-shaped and round brilliant pink sapphires weighing a total of approximately 8.61 carats and 99 marquise and round brilliant diamonds weighing a total of approximately 8.60 carats, set in platinum",
//   });

//   await Jewelry.create({
//     title: "Blue Sapphire and Diamond Lariat Necklace",
//     firstImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/necklaces/forget_me_not_lariat_necklace_diamond_and_sapphire_nkspltflrfmn_e_1_p2uxlj.webp",
//     secondImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714890/forget-me-not-collection/necklaces/forget_me_not_lariat_necklace_diamond_and_sapphire_nkspltflrfmn_e_2_hxgdcy.avif",
//     category: allCategories[2],
//     color: allColors[1],
//     description:
//       "78 pear-shaped and round brilliant sapphires weighing a total of approximately 8.61 carats and 99 marquise and round brilliant diamonds weighing a total of approximately 8.37 carats, set in platinum",
//   });

//   await Jewelry.create({
//     title: "Diamond Lariat Necklace",
//     firstImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/necklaces/forget_me_not_lariat_diamond_necklace_nkdpltflrfmn_e-1_u0gwpv.avif",
//     secondImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/necklaces/forget_me_not_lariat_diamond_necklace_nkdpltflrfmn_e-2_tuh8ru.webp",
//     category: allCategories[2],
//     color: allColors[2],
//     description:
//       "177 pear-shaped, marquise, and round brilliant diamonds, weighing a total of approximately 15.35 carats, set in platinum",
//   });

//   await Jewelry.create({
//     title: "Pink Sapphire and Diamond Ring",
//     firstImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714892/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_pink_sapphire_frpsprfflrfmn_e_1_qfumu3.webp",
//     secondImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714892/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_pink_sapphire_frpsprfflrfmn_e_2_k7nhpe.avif",
//     category: allCategories[3],
//     color: allColors[0],
//     description:
//       "6 pear-shaped pink sapphires weighing a total of approximately 2.22 carats and 1 round brilliant diamond weighing approximately 0.05 carats, set in platinum",
//   });

//   await Jewelry.create({
//     title: "Blue Sapphire and Diamond Ring",
//     firstImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_sapphire_frsprfflrfmn_e_1_pm9u6t.avif",
//     secondImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_sapphire_frsprfflrfmn_e_2_ucppcd.avif",
//     category: allCategories[3],
//     color: allColors[1],
//     description:
//       "6 pear-shaped sapphires weighing a total of approximately 2.15 carats and 1 round brilliant diamond weighing approximately 0.05 carats, set in platinum",
//   });

//   await Jewelry.create({
//     title: "Diamond Ring",
//     firstImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/rings/forget_me_not_diamond_ring_frdprfflrfmn_e-1h_yueh2k.webp",
//     secondImageUrl:
//       "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/rings/forget_me_not_diamond_ring_frdprfflrfmn_e-2h_mktny9.webp",
//     category: allCategories[3],
//     color: allColors[2],
//     description:
//       "6 pear-shaped and 1 round brilliant diamond, weighing a total of approximately 1.66 carats, set in platinum",
//   });

//   const allJewelries = await Jewelry.find();

//   await Inventory.insertMany([
//     {
//       jewelry: allJewelries[0],
//       size: "15.2 cm",
//       quantity: 2,
//       price: 33000,
//     },
//     {
//       jewelry: allJewelries[0],
//       size: "17.8 cm",
//       quantity: 2,
//       price: 34000,
//     },
//     {
//       jewelry: allJewelries[0],
//       size: "19.3 cm",
//       quantity: 2,
//       price: 35000,
//     },

//     {
//       jewelry: allJewelries[1],
//       size: "15.2 cm",
//       quantity: 2,
//       price: 34000,
//     },
//     {
//       jewelry: allJewelries[1],
//       size: "17.8 cm",
//       quantity: 2,
//       price: 35000,
//     },
//     {
//       jewelry: allJewelries[1],
//       size: "19.3 cm",
//       quantity: 2,
//       price: 36000,
//     },

//     {
//       jewelry: allJewelries[2],
//       size: "15.2 cm",
//       quantity: 2,
//       price: 35000,
//     },
//     {
//       jewelry: allJewelries[2],
//       size: "17.8 cm",
//       quantity: 2,
//       price: 36000,
//     },
//     {
//       jewelry: allJewelries[2],
//       size: "19.3 cm",
//       quantity: 2,
//       price: 37000,
//     },

//     {
//       jewelry: allJewelries[3],
//       size: "4.05 cm",
//       quantity: 2,
//       price: 43000,
//     },
//     {
//       jewelry: allJewelries[3],
//       size: "4.98 cm",
//       quantity: 2,
//       price: 44000,
//     },
//     {
//       jewelry: allJewelries[3],
//       size: "5.86 cm",
//       quantity: 2,
//       price: 45000,
//     },

//     {
//       jewelry: allJewelries[4],
//       size: "4.05 cm",
//       quantity: 2,
//       price: 44000,
//     },
//     {
//       jewelry: allJewelries[4],
//       size: "4.98 cm",
//       quantity: 2,
//       price: 45000,
//     },
//     {
//       jewelry: allJewelries[4],
//       size: "5.86 cm",
//       quantity: 2,
//       price: 46000,
//     },

//     {
//       jewelry: allJewelries[5],
//       size: "4.05 cm",
//       quantity: 2,
//       price: 45000,
//     },
//     {
//       jewelry: allJewelries[5],
//       size: "4.98 cm",
//       quantity: 2,
//       price: 46000,
//     },
//     {
//       jewelry: allJewelries[5],
//       size: "5.86 cm",
//       quantity: 2,
//       price: 47000,
//     },

//     {
//       jewelry: allJewelries[6],
//       size: "40.64 cm",
//       quantity: 2,
//       price: 53000,
//     },
//     {
//       jewelry: allJewelries[6],
//       size: "43.18 cm",
//       quantity: 2,
//       price: 54000,
//     },
//     {
//       jewelry: allJewelries[6],
//       size: "45.72 cm",
//       quantity: 2,
//       price: 55000,
//     },

//     {
//       jewelry: allJewelries[7],
//       size: "40.64 cm",
//       quantity: 2,
//       price: 54000,
//     },
//     {
//       jewelry: allJewelries[7],
//       size: "43.18 cm",
//       quantity: 2,
//       price: 55000,
//     },
//     {
//       jewelry: allJewelries[7],
//       size: "45.72 cm",
//       quantity: 2,
//       price: 56000,
//     },

//     {
//       jewelry: allJewelries[8],
//       size: "40.64 cm",
//       quantity: 2,
//       price: 55000,
//     },
//     {
//       jewelry: allJewelries[8],
//       size: "43.18 cm",
//       quantity: 2,
//       price: 56000,
//     },
//     {
//       jewelry: allJewelries[8],
//       size: "45.72 cm",
//       quantity: 2,
//       price: 57000,
//     },

//     {
//       jewelry: allJewelries[9],
//       size: "4.7 cm",
//       quantity: 2,
//       price: 23000,
//     },
//     {
//       jewelry: allJewelries[9],
//       size: "4.9 cm",
//       quantity: 2,
//       price: 24000,
//     },
//     {
//       jewelry: allJewelries[9],
//       size: "5.05 cm",
//       quantity: 2,
//       price: 25000,
//     },

//     {
//       jewelry: allJewelries[10],
//       size: "4.7 cm",
//       quantity: 2,
//       price: 24000,
//     },
//     {
//       jewelry: allJewelries[10],
//       size: "4.9 cm",
//       quantity: 2,
//       price: 25000,
//     },
//     {
//       jewelry: allJewelries[10],
//       size: "5.05 cm",
//       quantity: 2,
//       price: 26000,
//     },

//     {
//       jewelry: allJewelries[11],
//       size: "4.7 cm",
//       quantity: 2,
//       price: 25000,
//     },
//     {
//       jewelry: allJewelries[11],
//       size: "4.9 cm",
//       quantity: 2,
//       price: 26000,
//     },
//     {
//       jewelry: allJewelries[11],
//       size: "5.05 cm",
//       quantity: 2,
//       price: 27000,
//     },
//   ]);
// }
// populateDb();


const mongoose = require("mongoose");
const Jewelry = require("./models/Jewelry");
const Category = require("./models/Category");
const Color = require("./models/Color");
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


  await Color.create({
    title: "Pink",
  });

  await Color.create({
    title: "Blue",
  });

  await Color.create({
    title: "White",
  });

  const allCategories = await Category.find();
  const allColors = await Color.find();

  await Jewelry.create({
    title: "Pink Sapphire and Diamond Bracelet",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_1_vz9pv4.avif",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_2_kdpnm6.avif",
    category: allCategories[0],
    color: allColors[0],
    description:
      "45 pear-shaped and round brilliant pink sapphires weighing a total of approximately 4.36 carats and 33 pear-shaped, marquise and round brilliant diamonds weighing a total of approximately 4.24 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Blue Sapphire and Diamond Bracelet",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_sapphire_brsprfflrfmn_e_1_fokzrw.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714895/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_sapphire_brsprfflrfmn_e_2_ojfbze.avif",
    category: allCategories[0],
    color: allColors[1],
    description:
      "45 pear-shaped and round brilliant sapphires weighing a total of approximately 4.17 carats and 33 pear-shaped, marquise and round brilliant diamonds weighing a total of approximately 4.24 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Diamond Bracelet",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/bracelets/forget_me_not_diamond_bracelet_brdprfflrfmn_e-1_muieri.avif",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_2_1_pvbpcb.png",
    category: allCategories[0],
    color: allColors[2],
    description:
      "78 pear-shaped, marquise, and round brilliant diamonds, weighing a total of approximately 7.46 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Pink Sapphire and Diamond Drop Earrings",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714885/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_pink_sapphire_eapspdrflrfmn_ee-1_zzaw4q.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_pink_sapphire_eapspdrflrfmn_ee-2_p9jicb.webp",
    category: allCategories[1],
    color: allColors[0],
    description:
      "28 pear-shaped and round brilliant pink sapphires weighing a total of approximately 3.20 carats and 28 marquise and round brilliant diamonds weighing a total of approximately 1.98 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Blue Sapphire and Diamond Drop Earrings",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_sapphire_easpdrflrfmn_ee-1_zx2cga.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_drop_earrings_diamond_and_sapphire_easpdrflrfmn_ee-2_vtkyhb.webp",
    category: allCategories[1],
    color: allColors[1],
    description:
      "28 pear-shaped and round brilliant sapphires weighing a total of approximately 3.00 carats and 28 marquise and round brilliant diamonds weighing a total of approximately 1.98 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Diamond Drop Earrings",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714890/forget-me-not-collection/earrings/forget_me_not_diamond_drop_earrings_eadpdrflrfmn_ee-1_knlt2u.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/earrings/forget_me_not_diamond_drop_earrings_eadpdrflrfmn_ee-2_sksk7o.webp",
    category: allCategories[1],
    color: allColors[2],
    description:
      "A medley of marquise, pear-shaped, and round brilliant diamonds, weighing a total of approximately 4.38 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Pink Sapphire and Diamond Lariat Necklace",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714890/forget-me-not-collection/necklaces/forget_me_not_lariat_necklace_diamond_and_pink_sapphire_nkpspltflrfmn_e_1_kuxbds.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714890/forget-me-not-collection/necklaces/forget_me_not_lariat_necklace_diamond_and_pink_sapphire_nkpspltflrfmn_e_2_d2fc78.webp",
    category: allCategories[2],
    color: allColors[0],
    description:
      "78 pear-shaped and round brilliant pink sapphires weighing a total of approximately 8.61 carats and 99 marquise and round brilliant diamonds weighing a total of approximately 8.60 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Blue Sapphire and Diamond Lariat Necklace",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/necklaces/forget_me_not_lariat_necklace_diamond_and_sapphire_nkspltflrfmn_e_1_p2uxlj.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714890/forget-me-not-collection/necklaces/forget_me_not_lariat_necklace_diamond_and_sapphire_nkspltflrfmn_e_2_hxgdcy.avif",
    category: allCategories[2],
    color: allColors[1],
    description:
      "78 pear-shaped and round brilliant sapphires weighing a total of approximately 8.61 carats and 99 marquise and round brilliant diamonds weighing a total of approximately 8.37 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Diamond Lariat Necklace",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/necklaces/forget_me_not_lariat_diamond_necklace_nkdpltflrfmn_e-1_u0gwpv.avif",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/necklaces/forget_me_not_lariat_diamond_necklace_nkdpltflrfmn_e-2_tuh8ru.webp",
    category: allCategories[2],
    color: allColors[2],
    description:
      "177 pear-shaped, marquise, and round brilliant diamonds, weighing a total of approximately 15.35 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Pink Sapphire and Diamond Ring",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714892/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_pink_sapphire_frpsprfflrfmn_e_1_qfumu3.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714892/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_pink_sapphire_frpsprfflrfmn_e_2_k7nhpe.avif",
    category: allCategories[3],
    color: allColors[0],
    description:
      "6 pear-shaped pink sapphires weighing a total of approximately 2.22 carats and 1 round brilliant diamond weighing approximately 0.05 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Blue Sapphire and Diamond Ring",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_sapphire_frsprfflrfmn_e_1_pm9u6t.avif",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/rings/forget_me_not_ring_diamond_and_sapphire_frsprfflrfmn_e_2_ucppcd.avif",
    category: allCategories[3],
    color: allColors[1],
    description:
      "6 pear-shaped sapphires weighing a total of approximately 2.15 carats and 1 round brilliant diamond weighing approximately 0.05 carats, set in platinum",
  });

  await Jewelry.create({
    title: "Diamond Ring",
    firstImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/rings/forget_me_not_diamond_ring_frdprfflrfmn_e-1h_yueh2k.webp",
    secondImageUrl:
      "https://res.cloudinary.com/deztgvefu/image/upload/v1723714891/forget-me-not-collection/rings/forget_me_not_diamond_ring_frdprfflrfmn_e-2h_mktny9.webp",
    category: allCategories[3],
    color: allColors[2],
    description:
      "6 pear-shaped and 1 round brilliant diamond, weighing a total of approximately 1.66 carats, set in platinum",
  });

  const allJewelries = await Jewelry.find();

  await Inventory.insertMany([
    {
      jewelry: allJewelries[0],
      size: "15.2 cm",
      quantity: 2,
      price: 33000,
    },
    {
      jewelry: allJewelries[0],
      size: "17.8 cm",
      quantity: 2,
      price: 34000,
    },
    {
      jewelry: allJewelries[0],
      size: "19.3 cm",
      quantity: 2,
      price: 35000,
    },

    {
      jewelry: allJewelries[1],
      size: "15.2 cm",
      quantity: 2,
      price: 34000,
    },
    {
      jewelry: allJewelries[1],
      size: "17.8 cm",
      quantity: 2,
      price: 35000,
    },
    {
      jewelry: allJewelries[1],
      size: "19.3 cm",
      quantity: 2,
      price: 36000,
    },

    {
      jewelry: allJewelries[2],
      size: "15.2 cm",
      quantity: 2,
      price: 35000,
    },
    {
      jewelry: allJewelries[2],
      size: "17.8 cm",
      quantity: 2,
      price: 36000,
    },
    {
      jewelry: allJewelries[2],
      size: "19.3 cm",
      quantity: 2,
      price: 37000,
    },

    {
      jewelry: allJewelries[3],
      size: "4.05 cm",
      quantity: 2,
      price: 43000,
    },
    {
      jewelry: allJewelries[3],
      size: "4.98 cm",
      quantity: 2,
      price: 44000,
    },
    {
      jewelry: allJewelries[3],
      size: "5.86 cm",
      quantity: 2,
      price: 45000,
    },

    {
      jewelry: allJewelries[4],
      size: "4.05 cm",
      quantity: 2,
      price: 44000,
    },
    {
      jewelry: allJewelries[4],
      size: "4.98 cm",
      quantity: 2,
      price: 45000,
    },
    {
      jewelry: allJewelries[4],
      size: "5.86 cm",
      quantity: 2,
      price: 46000,
    },

    {
      jewelry: allJewelries[5],
      size: "4.05 cm",
      quantity: 2,
      price: 45000,
    },
    {
      jewelry: allJewelries[5],
      size: "4.98 cm",
      quantity: 2,
      price: 46000,
    },
    {
      jewelry: allJewelries[5],
      size: "5.86 cm",
      quantity: 2,
      price: 47000,
    },

    {
      jewelry: allJewelries[6],
      size: "40.64 cm",
      quantity: 2,
      price: 53000,
    },
    {
      jewelry: allJewelries[6],
      size: "43.18 cm",
      quantity: 2,
      price: 54000,
    },
    {
      jewelry: allJewelries[6],
      size: "45.72 cm",
      quantity: 2,
      price: 55000,
    },

    {
      jewelry: allJewelries[7],
      size: "40.64 cm",
      quantity: 2,
      price: 54000,
    },
    {
      jewelry: allJewelries[7],
      size: "43.18 cm",
      quantity: 2,
      price: 55000,
    },
    {
      jewelry: allJewelries[7],
      size: "45.72 cm",
      quantity: 2,
      price: 56000,
    },

    {
      jewelry: allJewelries[8],
      size: "40.64 cm",
      quantity: 2,
      price: 55000,
    },
    {
      jewelry: allJewelries[8],
      size: "43.18 cm",
      quantity: 2,
      price: 56000,
    },
    {
      jewelry: allJewelries[8],
      size: "45.72 cm",
      quantity: 2,
      price: 57000,
    },

    {
      jewelry: allJewelries[9],
      size: "4.7 cm",
      quantity: 2,
      price: 23000,
    },
    {
      jewelry: allJewelries[9],
      size: "4.9 cm",
      quantity: 2,
      price: 24000,
    },
    {
      jewelry: allJewelries[9],
      size: "5.05 cm",
      quantity: 2,
      price: 25000,
    },

    {
      jewelry: allJewelries[10],
      size: "4.7 cm",
      quantity: 2,
      price: 24000,
    },
    {
      jewelry: allJewelries[10],
      size: "4.9 cm",
      quantity: 2,
      price: 25000,
    },
    {
      jewelry: allJewelries[10],
      size: "5.05 cm",
      quantity: 2,
      price: 26000,
    },

    {
      jewelry: allJewelries[11],
      size: "4.7 cm",
      quantity: 2,
      price: 25000,
    },
    {
      jewelry: allJewelries[11],
      size: "4.9 cm",
      quantity: 2,
      price: 26000,
    },
    {
      jewelry: allJewelries[11],
      size: "5.05 cm",
      quantity: 2,
      price: 27000,
    },
  ]);
}
populateDb();
