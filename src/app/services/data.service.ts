import {Injectable} from '@angular/core';


@Injectable()
export class DataService {
   data = [
    {
      name: 'Fruit',
      children: [
        {name: 'Apple'},
        {name: 'Banana'},
        {name: 'Fruit loops'},
      ]
    }, {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [
            {name: 'Broccoli'},
            {name: 'Brussel sprouts'},
          ]
        }, {
          name: 'Orange',
          children: [
            {name: 'Pumpkins'},
            {name: 'Carrots'},
          ]
        },
      ]
    },
     {
       name: 'Fruit',
       children: [
         {name: 'Apple'},
         {name: 'Banana'},
         {name: 'Fruit loops'},
       ]
     }, {
       name: 'Vegetables',
       children: [
         {
           name: 'Green',
           children: [
             {name: 'Broccoli'},
             {name: 'Brussel sprouts'},
           ]
         }, {
           name: 'Orange',
           children: [
             {name: 'Pumpkins'},
             {name: 'Carrots'},
           ]
         },
       ]
     },
     {
       name: 'Fruit',
       children: [
         {name: 'Apple'},
         {name: 'Banana'},
         {name: 'Fruit loops'},
       ]
     }, {
       name: 'Vegetables',
       children: [
         {
           name: 'Green',
           children: [
             {name: 'Broccoli'},
             {name: 'Brussel sprouts'},
           ]
         }, {
           name: 'Orange',
           children: [
             {name: 'Pumpkins'},
             {name: 'Carrots'},
           ]
         },
       ]
     },
  ];
}
