import {Injectable} from '@angular/core';


@Injectable()
export class DataService {
   data = [
    {
      name: 'Food',
      children: [
        {name: 'Fast Food',
        children: [
          {
            name: 'Potato Chips',
            children: [
              {
                name: 'Garlic'
              }
            ]
          }
        ]},
      ]
    }, {
      name: 'Medical',
      children: [
        {
          name: 'Medicines',
          children: [
            {name: 'Headache',
              children: [
                {
                  name: 'Upper Head',
                  children: [
                    {
                      name: 'Migraine'
                    }
                  ]
                }
              ]

            },
            {name: 'Lower Head'},
          ]
        },
      ]
    },
     {
       name: 'Musical Instruments',
       children: [
         {name: 'Acoustic',
         children:[
           {
             name: 'Drums',
           },
           {
             name: 'Guitar'
           }
         ]},
       ]
     },

  ];
}
