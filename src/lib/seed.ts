export interface dataProductInterface {
  uid: number;
  title: string;
  price: number;
  InStock: typesAndStock[];
  //isFreeShipping: boolean;
  photoUrl: string;
  type: string;
}

export interface dataCartInterface extends dataProductInterface {
  itemInCart: itemInCartInterface;
  itemUid: string;
}

export interface itemInCartInterface {
  item: number;
  remainingStock: number;
  type: string;
}

interface typesAndStock {
  type: string;
  stock: number;
}

export interface productTypes {
  type: string;
}

export function TypeSeed(): productTypes[] {
  const data: productTypes[] = [
    {
      type: "shoe",
    },
    {
      type: "jacket",
    },
    {
      type: "shirt",
    },
  ];
  return data;
}

export default function Seed(): dataProductInterface[] {
  const data: dataProductInterface[] = [
    {
      uid: 1,
      type: "shoe",
      title: "Revolt",
      price: 28.45,
      InStock: [
        {
          type: "39",
          stock: 100,
        },
        {
          type: "40",
          stock: 100,
        },
        {
          type: "41",
          stock: 100,
        },
        {
          type: "42",
          stock: 100,
        },
        {
          type: "43",
          stock: 100,
        },
      ],
      //isFreeShipping: true,
      photoUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      uid: 2,
      type: "shoe",
      title: "Superres",
      price: 33.15,
      InStock: [
        {
          type: "39",
          stock: 100,
        },
        {
          type: "40",
          stock: 100,
        },
        {
          type: "41",
          stock: 100,
        },
        {
          type: "42",
          stock: 100,
        },
        {
          type: "43",
          stock: 100,
        },
      ],
      //isFreeShipping: true,
      photoUrl:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
    },
    {
      uid: 3,
      type: "shoe",
      title: "X90",
      price: 30.15,
      InStock: [
        {
          type: "39",
          stock: 100,
        },
        {
          type: "40",
          stock: 100,
        },
        {
          type: "41",
          stock: 100,
        },
        {
          type: "42",
          stock: 100,
        },
        {
          type: "43",
          stock: 100,
        },
      ],
      //isFreeShipping: true,
      photoUrl:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
    },
    {
      uid: 4,
      type: "shoe",
      title: "All Star",
      price: 20.15,
      InStock: [
        {
          type: "39",
          stock: 100,
        },
        {
          type: "40",
          stock: 100,
        },
        {
          type: "41",
          stock: 100,
        },
        {
          type: "42",
          stock: 100,
        },
        {
          type: "43",
          stock: 100,
        },
      ],
      //isFreeShipping: true,
      photoUrl:
        "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      uid: 5,
      type: "shoe",
      title: "Adidas",
      price: 32.15,
      InStock: [
        {
          type: "39",
          stock: 100,
        },
        {
          type: "40",
          stock: 100,
        },
        {
          type: "41",
          stock: 100,
        },
        {
          type: "42",
          stock: 100,
        },
        {
          type: "43",
          stock: 100,
        },
      ],
      //isFreeShipping: true,
      photoUrl:
        "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      uid: 6,
      type: "shoe",
      title: "Leather Exclusive",
      price: 23.75,
      InStock: [
        {
          type: "39",
          stock: 100,
        },
        {
          type: "40",
          stock: 100,
        },
        {
          type: "41",
          stock: 100,
        },
        {
          type: "42",
          stock: 100,
        },
        {
          type: "43",
          stock: 100,
        },
      ],
      //isFreeShipping: true,
      photoUrl:
        "https://images.unsplash.com/photo-1620554740172-7c02a78b239d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      uid: 7,
      type: "jacket",
      title: "Zara Basic",
      price: 33.75,
      InStock: [
        {
          type: "S",
          stock: 100,
        },
        {
          type: "M",
          stock: 100,
        },
        {
          type: "L",
          stock: 100,
        },
        {
          type: "XL",
          stock: 100,
        },
      ],
      //isFreeShipping: true,
      photoUrl:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
      uid: 8,
      type: "jacket",
      title: "Coelho",
      price: 13.75,
      InStock: [
        {
          type: "S",
          stock: 100,
        },
        {
          type: "M",
          stock: 100,
        },
        {
          type: "L",
          stock: 100,
        },
        {
          type: "XL",
          stock: 100,
        },
      ],
      //isFreeShipping: true,
      photoUrl:
        "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=669&q=80",
    },
    {
      uid: 9,
      type: "shirt",
      title: "The Bar",
      price: 11.825,
      InStock: [
        {
          type: "M",
          stock: 100,
        },
        {
          type: "L",
          stock: 100,
        },
        {
          type: "XL",
          stock: 100,
        },
      ],
      //isFreeShipping: true,
      photoUrl:
        "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      uid: 10,
      type: "shirt",
      title: "Varish",
      price: 11.825,
      InStock: [
        {
          type: "M",
          stock: 100,
        },
        {
          type: "L",
          stock: 100,
        },
        {
          type: "XL",
          stock: 100,
        },
      ],
      //isFreeShipping: true,
      photoUrl:
        "https://images.unsplash.com/photo-1626497764746-6dc36546b388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
    },
  ];
  return data;
}
