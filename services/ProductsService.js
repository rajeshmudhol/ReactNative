const PRODUCTS = [
    {
        id: 1,
        name: 'ReactProX Headset',
        price: 350,
        rating:4.5,
         image: require('../assets/products/headset.webp'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 2,
        name: 'FastLane Toy Car',
        price: 600,
         image: require('../assets/products/car.webp'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 3,
        name: 'Women Necklace',
        price: 7,
         image: require('../assets/products/nechlace.jpg'),
        description: 'Sukkhi Sleek Rhodium plated AD Stone Necklace Set.'
    }
    ,
    {
        id: 4,
        name: 'Safari Bag',
        price: 10,
         image: require('../assets/products/bag.jpg'),
        description: 'Safari Ray 67 cms Medium Check-in Polycarbonate (PC) Hard Sided 4 Wheels 360 Degree Rotation Luggage/Suitcase/Trolley Bag (Cyan).'
    },
    {
        id: 5,
        name: 'Wallet',
        price: 2,
         image: require('../assets/products/wallet.jpg'),
        description: 'WildHorn Black Leather Wallet for Men I 8 Card Slots I 2 Secret compartments I 2 Currency Compartments'
    }
    ,
    {
        id: 6,
        name: 'Mens Watch',
        price: 2,
         image: require('../assets/products/watch.jpg'),
        description: 'Casio Youth-Digital Grey Dial Mens Watch-AE-1200WH-1AVDF (D097)'
    }
    ,
    {
        id: 7,
        name: 'Monk Buddha Cone',
        price: 3,
         image: require('../assets/products/buddha.jpg'),
        description: 'eCraftIndia Meditating Monk Buddha Smoke Backflow Cone Incense Holder Decorative Showpiece with 10 Free Smoke Backflow Scented Cone Incenses'
    }
    ,
    {
        id: 8,
        name: 'Decore posters',
        price: 6,
         image: require('../assets/products/poster.jpg'),
        description: 'PAPER PLANE DESIGN Aesthetic Boho Posters For Room Decoration Set Of 12, A4 size (29 x 21 cm)'
    }
    ,
    {
        id: 9,
        name: 'Door decore light',
        price: 20,
         image: require('../assets/products/light.jpg'),
        description: 'FERIO Curtain Rod Holder and Brackets Set Zinc and Diamond for Door and Window Curtain Accessories 1 Inch Parda Holder Curtain Finials for Home Decor Brass Antique (Pack of 2)'
    }
    ,
    {
        id: 10,
        name: 'Wall clock',
        price: 12,
         image: require('../assets/products/clock.jpg'),
        description: 'French Connection Elegant Analog Round Rose Gold Wall Clock with White Dial - Size: 12 Inches - FCWC08-A'
    },
    {
        id: 11,
        name: 'Mens shirt',
        price: 350,
       
         image: require('../assets/products/menshirt.jpg'),
        description: 'IndoPrimo Mens Regular Fit Checks Cotton Casual Shirt for Men Full Sleeves - Suzuki'
    },
    {
        id: 12,
        name: 'Denim shirt',
        price: 15,
         image: require('../assets/products/dennimshirt.jpg'),
        description: 'Dennis Lingo Mens Checkered Slim Fit Cotton Casual Shirt.'
    },
    {
        id: 13,
        name: 'Printed Shirt',
        price: 7,
         image: require('../assets/products/Printedshirt.jpg'),
        description: 'Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt (J-Mistry)'
    }
    ,
    {
        id: 14,
        name: 'Mens Jacket',
        price: 10,
         image: require('../assets/products/mensjacket.jpg'),
        description: 'Amazon Brand - Symbol Mens Lightweight Jacket'
    },
    {
        id: 15,
        name: 'Dennim Pant',
        price: 2,
         image: require('../assets/products/menspants.jpg'),
        description: 'KARGEENS Men Mens Jeans Pant Slim Fit Stretchable Casual Wear Low Rise Cotton Blend Denim'
    }
    ,
    {
        id: 16,
        name: 'Mens Watch',
        price: 2,
         image: require('../assets/products/watch.jpg'),
        description: 'Casio Youth-Digital Grey Dial Mens Watch-AE-1200WH-1AVDF (D097)'
    }
    ,
    {
        id: 17,
        name: 'Mens Jeans',
        price: 3,
         image: require('../assets/products/mensjeans.jpg'),
        description: 'KARGEENS Men Mens Jeans Pant Slim Fit Stretchable Casual Wear Low Rise Cotton Blend Denim'
    }
    ,
    {
        id: 18,
        name: 'Mens Watch',
        price: 6,
         image: require('../assets/products/menswatch.jpg'),
        description: 'Seiko Analog Gray Dial Mens Watch-SRPG63K1'
    }
    ,
    {
        id: 19,
        name: 'Mens Shoes',
        price: 20,
         image: require('../assets/products/menshoes.jpg'),
        description: 'Skechers-Mens-UNO 2 - Comfort Two -Sneakers'
    }
    ,
    {
        id: 20,
        name: 'Mens Flip flop',
        price: 12,
         image: require('../assets/products/mensandal.jpg'),
        description: 'DOCTOR EXTRA SOFT Mens Classic Ultra Soft Sliders/Slippers with Cushion FootBed for Adult | Comfortable & Light Weight | Stylish & Anti-Skid | Waterproof & Everyday Flip Flops for Gents/Boys D-504'
    },
    {
        id: 21,
        name: 'Women Harpa',
        price: 35,
       
         image: require('../assets/products/Womenharpa.jpg'),
        description: 'Harpa One Shoulder Solid Tops'
    },
    {
        id: 22,
        name: 'Kurtha',
        price: 15,
         image: require('../assets/products/womenkurtha.jpg'),
        description: 'Indya Georgette A-line Maxi Dress.'
    },
    {
        id: 23,
        name: 'Round Nect Top',
        price: 7,
         image: require('../assets/products/womentop.jpg'),
        description: 'Womens Relaxed Fit Full Sleeve Round Neck Top'
    }
    ,
    {
        id:24,
        name: 'Plazzo',
        price: 10,
         image: require('../assets/products/womenplazzo.jpg'),
        description: 'Womens Loose Fit Palazzo'
    },
    {
        id: 25,
        name: 'Winter Jacket',
        price: 20,
         image: require('../assets/products/womenjacket.jpg'),
        description: 'Right Dicisions Winterwear Full Sleeve Hoddies Zipper Solid Nylon Jacket for women'
    }
    ,
    {
        id: 26,
        name: 'Women Watch',
        price: 12,
         image: require('../assets/products/womenwatch.jpg'),
        description: 'NIBOSI Women Watches Analogue Wrist Watches Watches for Womens & Girls&Miss&Ladies Rose Gold Dial Watch with Stylish Diamond Studded Watches'
    }
    ,
    {
        id: 27,
        name: 'Women sandal',
        price: 3,
         image: require('../assets/products/womensandal.jpg'),
        description: 'PARAGON K6017L Women Sandals | Casual & Formal Sandals | Stylish, Comfortable & Durable | for Daily & Occasion Wear'
    }
    ,
    {
        id: 28,
        name: 'Women Necklace',
        price: 6,
         image: require('../assets/products/womennecklace.jpg'),
        description: 'ZENEME Rhodium-Plated Silver Toned Teardrop Shaped American Diamond Studded Necklace Earrings Jewellery Set for Girls and Women'
    }
    ,
    {
        id: 29,
        name: 'Women Saree',
        price: 20,
         image: require('../assets/products/womwnsaree.jpg'),
        description: 'SGF11 Womens Kanjivaram Pure Soft Silk Handloom Saree Pure Golden Zari With Blouse Piece'
    }
    ,
    {
        id: 30,
        name: 'women Makeup kit',
        price: 12,
         image: require('../assets/products/womenmakeup.jpg'),
        description: 'Iba Must Have Complete Makeup Box for Women (Fair) l with 11 Essential Products l Waterproof l Bridal Makeup l Full Face Makeup | 100% Vegan & Cruelty Free'
    }

    
    
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}