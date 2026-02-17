import type { MenuCategory } from '../types';

export const MENU_DATA: Record<string, MenuCategory> = {
  hamburguesas: {
    title: "HAMBURGUESAS",
    subtitle: null,
    type: "comida",
    items: [
      {
        name: "MAKAY",
        price: "26.000",
        desc: "Pan artesanal, carne de res, panceta, piña asada, queso cheddar, lechuga y papitas a la francesa.",
        image: "/foods/food-1.png",
        featured: true
      },
      {
        name: "MEDUZZA",
        price: "26.000",
        desc: "Pan artesanal, carne de res, tocineta, aros de cebolla, queso crema, puerro, lechuga y papitas a la francesa.",
        image: "/foods/food-2.png",
        featured: true
      },
      {
        name: "Argentina",
        price: "26.000",
        desc: "Pan artesanal, carne de res, chorizo, queso, ensalada y papitas a la francesa.",
        image: "/foods/food-3.png",
        featured: true
      },
      {
        name: "Hawaiana",
        price: "25.000",
        desc: "Pan artesanal, carne de res, piña asada, queso, tocineta, lechuga y papitas a la francesa.",
        image: "/foods/food-4.png"
      },
      {
        name: "Callejera",
        price: "19.000",
        desc: "Pan, carne de res, queso, ensalada y papa ripio.",
        image: "/foods/food-5.png"
      }
    ]
  },
  perros: {
    title: "PERROS",
    subtitle: null,
    type: "comida",
    items: [
      { name: "MAKAY", price: "23.000", desc: "Pan, piña asada, panceta, tocineta, queso cheddar, puerro, lechuga.", image: "/foods/food-6.png" },
      { name: "Ranchero", price: "23.000", desc: "Pan, salchicha ranchera, queso, maicito, lechuga, tomate.", image: "/foods/food-7.png" },
      { name: "Clásico", price: "18.000", desc: "Pan, salchicha, ensalada, queso, papa ripio, lechuga y tomate.", image: "/foods/food-8.png" },
      { name: "Suizo", price: "26.000", desc: "Pan, lechuga picada, pollo picado, maicito, tocineta, salchicha suiza, queso gratinado.", image: "/foods/food-9.png" },
      { name: "Guacho", price: "23.000", desc: "Pan, chorizo, cuadros de tocineta, raya de guacamole con ripio de papa.", image: "/foods/food-10.png" },
    ]
  },
  papas: {
    title: "PAPAS",
    subtitle: null,
    type: "comida",
    items: [
      { name: "Ranchera", price: "24.000", desc: "Papas a la francesa, salchicha tipo ranchera, tocineta, queso, maíz tierno.", image: "/foods/food-11.png" },
      { name: "Pollo", price: "24.000", desc: "Papas a la francesa, trozos de pollo, queso, maíz tierno.", image: "/foods/food-12.png" },
      { name: "Tradicional", price: "19.000", desc: "Papas a la francesa, huevos de codorniz, salchichas.", image: "/foods/food-13.png" },
      { name: "Mexicanas", price: "24.000", desc: "Papas a la francesa, chorizo picante, carne sazonada, pico de gallo, queso, guacamole.", image: "/foods/food-14.png" },
    ]
  },
  asados: {
    title: "ASADOS",
    subtitle: null,
    type: "comida",
    items: [
      { name: "Punta de Anca", price: "35.000", desc: "Arepa con mozarela, papitas francesas y ensalada." },
      { name: "Solomito", price: "39.000", desc: "Ensalada, arepa con mozarela, papitas francesas." },
      { name: "Pechuga Gratinada", price: "28.000", desc: "Ensalada, arepa con mozarela, papitas francesas." },
      { name: "Ceviche de Chicharrón", price: "30.000", desc: "Chicharrón picado, pico de gallo, guacamole y platanitos." },
      { name: "Chuzo de Pollo", price: "25.000", desc: "Ensalada, arepa con mozarela, papitas francesas." }
    ]
  },
  entradas: {
    title: "ENTRADAS",
    subtitle: null,
    type: "comida",
    items: [
      { name: "Mini Arepitas x6", price: "7.000", desc: "Hogao o Guacamole." },
      { name: "Patacones x6", price: "8.000", desc: "Hogao o Guacamole." },
      { name: "Nachos", price: "7.000", desc: "Guacamole." },
      { name: "Empanadas x6", price: "7.000", desc: null },
    ]
  },
  intantil: {
    title: "MENÚ INFANTIL",
    subtitle: null,
    type: "comida",
    items: [
      { name: "Hamburguesa Mini", price: "10.000", desc: null },
      { name: "Perro Mini", price: "10.000", desc: null },
      { name: "Sachipapas Mini", price: "10.000", desc: null },
    ]
  },
  adicionales: {
    title: "ADICIONALES",
    subtitle: null,
    type: "comida",
    items: [
      { name: "Papas", price: "5.000", desc: null },
      { name: "Queso", price: "3.500", desc: null },
      { name: "Tocineta", price: "4.500", desc: null },
      { name: "Chorizo Cóctelero", price: "4.000", desc: null },
      { name: "Salchicha Tradicional", price: "3.000", desc: null },
      { name: "Salchicha Ranchera", price: "4.500", desc: null },
      { name: "Salchicha Suiza", price: "7.500", desc: null },
      { name: "Aros de cebolla x5", price: "7.000", desc: null },
    ]
  },
  cocteles: {
    title: "CÓCTELES",
    subtitle: null,
    type: "cocteles",
    items: [
      {
        name: "Baileys MAKAY",
        price: "18.000",
        desc: "Licor café, amareto, crema de whisky y hielo.",
        image: null,
        featured: true
      },
      {
        name: "MEDUZZA",
        price: "16.000",
        desc: "Ron blanco, licor manzana verde y soda.",
        image: null
      },
      {
        name: "Cubalibre",
        price: "14.000",
        desc: "Ron añejo y hielo.",
        image: null
      },
      { name: "Gin Tonic", price: "20.000", desc: "Ginebra, agua tónica, hielo y frutas.", image: "/drinks/drink-1.png" },
      { name: "Daiquiri", price: "15.000", desc: "Ron blanco, zumo de limón y jarabe simple.", image: "/drinks/drink-2.png" },
      { name: "Mojito", price: "16.000", desc: "Ron blanco, limón, hierbabuena, azúcar.", image: "/drinks/drink-3.png" },
      { name: "Piña Colada", price: "18.000", desc: "Leche condensada, crema de coco, ron blanco, piña.", image: "/drinks/drink-4.png" },
      { name: "Tequila Sunrise", price: "17.000", desc: "Tequila blanco, jugo naranja, granadina y naranja", image: "/drinks/drink-5.png" },
      { name: "Laguna Azul", price: "17.000", desc: "Vodka, curazao azul, zumo de limones, sprite, hielo y jarable simple", image: "/drinks/drink-6.png" },
      { name: "Margarita Blue/Clásico", price: "17.000", desc: "Tequila, triple seco y zumo de limón.", image: "/drinks/drink-7.png" },
      { name: "Reina de Corazones", price: "16.000", desc: "Vodka, granadina, soda y hielo.", image: "/drinks/drink-8.png" },
      { name: "Cerveza Envenenada", price: "14.000", desc: "Frutos rojos o manzana verde (Ron Blanco, vodka y tequila)", image: "/drinks/drink-9.png" },
      { name: "Moscow Mule", price: "17.000", desc: "Vodka, zumo limon, ginger ale o cerveza de ginebra y hielo picado", image: "/drinks/drink-10.png" }
    ]
  },
  bebidas_sin_alcohol: {
    title: "SIN LICOR",
    subtitle: null,
    type: "cocteles",
    items: [
      { name: "MEDUZZA", price: "8.000", desc: "Manzana verde, zumo de limón, hielo y sprite." },
      { name: "Laguna Azul", price: "8.000", desc: "Curazao azul, zumo de limones, sprite." },
    ]
  },
  sodas: {
    title: "SODAS",
    subtitle: null,
    type: "cocteles",
    items: [
      { name: "Sodas Michelada", price: "8.000", desc: "Soda refrescante michelada." },
      { name: "Sodas Saborizadas", price: "10.000", desc: "Cereza, mango, frutos rojos, frutos amarillos." },
    ]
  },
  limonadas: {
    title: "LIMONADAS",
    subtitle: null,
    type: "cocteles",
    items: [
      { name: "Limonada natural", price: "8.000", desc: null },
      { name: "Limonada coco", price: "11.000", desc: null },
      { name: "Limonada cerezasa", price: "11.000", desc: null },
    ]
  },
};
